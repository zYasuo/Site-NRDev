import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { useUpgrade } from "@/hooks/contrate-online/cliente-nr/nossos-servicos/upgrade-de-plano/useUpgrade";
import { PlanoSchema } from "@/components/contrate-online/nossos-servicos/upgrade-de-plano/form/schema";
import { usePlanosStore } from "@/hooks/planos/usePlanos";
import { useClienteData } from "@/hooks/contrate-online/cliente-nr/nossos-servicos";
import { filterHigherValuePlans } from "@/app/(ui)/planos/utils";
import { z } from "zod";

export const useFormPlano = (onNext: () => void) => {
  const { formValues, setFormValues } = useUpgrade();
  const { home, gamer, access, loading, error, getPlanos } = usePlanosStore();
  const { isPending, planosContratos } = useClienteData();
  const [planoSelecionado, setPlanoSelecionado] = useState<any>(null);

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
    setPlanoSelecionado(plano);
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

  const valorAtualFormatado =
    planosContratos[formValues.id_contrato]?.[0]?.valor_contrato || "R$ 0,00";
  const nomeAtual =
    planosContratos[formValues.id_contrato]?.[0]?.nome || "Desconhecido";

  const higherValueHomePlans = filterHigherValuePlans(
    home,
    valorAtualFormatado
  );
  const higherValueGamerPlans = filterHigherValuePlans(
    gamer,
    valorAtualFormatado
  );
  const higherValueAccessPlans = filterHigherValuePlans(
    access,
    valorAtualFormatado
  );

  return {
    form,
    isPending,
    planoSelecionado,
    handleSelectPlano,
    handleSubmit,
    higherValueHomePlans,
    higherValueGamerPlans,
    higherValueAccessPlans,
    nomeAtual,
    valorAtualFormatado,
    loading
  };
};
