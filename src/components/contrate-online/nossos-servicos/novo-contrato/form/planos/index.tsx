"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { useNovoContratoForm } from "@/hooks/contrate-online/cliente-nr/nossos-servicos/novo-contrato/useNovoContrato";
import { PlanoSchema } from "@/components/contrate-online/nossos-servicos/novo-contrato/form/schema";
import { Icons } from "@/components/ui/icons";
import { useEffect } from "react";
import { toast } from "sonner";
import { z } from "zod";
import { usePlanosStore } from "@/hooks/planos/usePlanos";
import { TabsPlanos } from "@/components/contrate-online/nossos-servicos/novo-contrato/tabs";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const FormPlano: React.FC<{
  onNext: () => void;
  onPrevious: () => void;
}> = ({ onNext, onPrevious }) => {
  const { formValues, setFormValues } = useNovoContratoForm();
  const { home, gamer, access, loading, error, getPlanos } = usePlanosStore();

  const form = useForm<z.infer<typeof PlanoSchema>>({
    defaultValues: formValues,
    resolver: zodResolver(PlanoSchema),
    mode: "onSubmit",
  });

  useEffect(() => {
    if (formValues.id_filial) {
      getPlanos(formValues.id_filial);
    }
  }, [formValues.id_filial, getPlanos]);

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  useEffect(() => {
    setFormValues(form.getValues());
  }, [setFormValues, form]);

  const handleSelectPlano = (plano: any) => {
    setFormValues({ ...formValues, plano });
    form.setValue("plano.id", plano.id);
    form.setValue("plano.id_tipo_documento", plano.id_tipo_documento);
    form.setValue("plano.id_modelo", plano.id_modelo);
    form.setValue("plano.id_carteira_cobranca", plano.id_carteira_cobranca);
    form.setValue("plano.tipo_doc_opc", plano.tipo_doc_opc);
    form.setValue("plano.tipo_doc_opc2", plano.tipo_doc_opc2);
    form.setValue("plano.fidelidade", plano.fidelidade);
    form.setValue("plano.nome", plano.nome);
    form.setValue("plano.nomeOriginal", plano.nomeOriginal);
    form.setValue("plano.valor_contrato", plano.valor_contrato);
    form.setValue("plano.dataVencimento", formValues.plano.dataVencimento);
  };

  const handleSubmit = async (data: z.infer<typeof PlanoSchema>) => {
    const isValid = await form.trigger();
    if (isValid) {
      setFormValues(data);
      onNext();
    } else {
      toast.error("Por favor, selecione um plano.");
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
        <div className="space-y-4">
          <TabsPlanos
            home={home}
            gamer={gamer}
            access={access}
            handleSelectPlano={handleSelectPlano}
            selectedPlano={formValues.plano}
            loading={loading}
          />
        </div>

        <FormField
          control={form.control}
          name="plano.dataVencimento"
          render={({ field }) => (
            <FormItem>
              <label className="block text-sm font-medium">Data de Vencimento</label>
              <Select
                onValueChange={(value) => field.onChange(value)}
                value={field.value}
              >
                <SelectTrigger className="w-full lg:py-8">
                  <SelectValue placeholder="Selecione uma data" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Datas</SelectLabel>
                    <SelectItem value="5">Dia 5</SelectItem>
                    <SelectItem value="20">Dia 20</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex justify-between">
          <Button variant="outline" type="button" onClick={onPrevious}>
            Anterior
          </Button>
          <Button type="submit" className="text-white">
            {form.formState.isSubmitting || loading ? (
              <Icons.spinner className="animate-spin h-5 w-5" />
            ) : (
              <span>Próximo</span>
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
};
