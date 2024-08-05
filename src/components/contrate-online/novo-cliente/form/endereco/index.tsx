"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { FloatingLabelInput } from "@/components/ui/float-input";
import { Button } from "@/components/ui/button";
import { useNovoClienteForm } from "@/hooks/contrate-online/novo-cliente/useNovoCliente";
import { EnderecoSchema } from "@/components/contrate-online/novo-cliente/form/schema";
import { Icons } from "@/components/ui/icons";
import { fields } from "@/components/contrate-online/novo-cliente/form/endereco/campos";
import { fetchAddressByCep, fetchCidadeByIbge, fetchFilialByCidade } from "@/app/contrate-online/actions/novo-cliente/select";
import { useTransition } from "react";
import { toast } from "sonner";

export const FormEndereco: React.FC<{
  onNext: () => void;
  onPrevious: () => void;
}> = ({ onNext, onPrevious }) => {
  const { formValues, setFormValues } = useNovoClienteForm();
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof EnderecoSchema>>({
    defaultValues: formValues,
    resolver: zodResolver(EnderecoSchema),
    mode: "onSubmit",
  });

  const checkCep = async (cep: string) => {
    startTransition(async () => {
      try {
        const addressData = await fetchAddressByCep(cep);
        const cidade = await fetchCidadeByIbge(addressData.ibge);
        const filial = await fetchFilialByCidade(cidade.id);

        if (filial) {
          setFormValues({
            ...formValues,
            cep,
            endereco: addressData.logradouro,
            bairro: addressData.bairro,
            cidade: cidade.nome,
            estado: addressData.uf,
            id_filial: filial.id,
            id_cidade: filial.cidade
          });
          form.setValue("endereco", addressData.logradouro);
          form.setValue("bairro", addressData.bairro);
          form.setValue("cidade", cidade.nome);
          form.setValue("estado", addressData.uf);
          form.setValue("id_filial", filial.id);
          form.setValue("id_cidade", filial.cidade);
        }
      } catch (error) {
        toast.error("Erro ao buscar endereço. Por favor, tente novamente.");
      }
    });
  };

  async function handleSubmit(data: z.infer<typeof EnderecoSchema>) {
    setFormValues(data);
    onNext();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {fields.map(({ name, label, type, format }) => (
            <FormField
              key={name}
              control={form.control}
              name={name}
              render={({ field }) => (
                <FormItem>
                  <FloatingLabelInput
                    {...field}
                    id={name}
                    label={label}
                    type={type}
                    onChange={format ? (e) => field.onChange(format(e.target.value)) : field.onChange}
                    onBlur={name === "cep" ? (e) => checkCep(e.target.value) : field.onBlur}
                    disabled={name === "cidade" || isPending}
                  />
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}
        </div>
        <div className="flex justify-between">
          <Button variant="outline" onClick={onPrevious}>
            Anterior
          </Button>
          <Button type="submit" className="text-white">
            {form.formState.isSubmitting || isPending ? (
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
