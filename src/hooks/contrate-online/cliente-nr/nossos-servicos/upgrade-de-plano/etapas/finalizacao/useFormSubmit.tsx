import { useTransition } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import {
  prepareArquivosData,
  separateFiles,
} from "@/app/contrate-online/utils";
import { encrypt } from "@/lib/crypto";
import { FinalizacaoSchema } from "@/components/contrate-online/nossos-servicos/upgrade-de-plano/form/schema";
import { useUpgrade } from "@/hooks/contrate-online/cliente-nr/nossos-servicos/upgrade-de-plano/useUpgrade";
import { useClienteStore } from "@/hooks/contrate-online/cliente-nr/nossos-servicos/useDadosCliente";
import { useDadosContratos } from "@/hooks/contrate-online/cliente-nr/nossos-servicos/useDadosContratos";
import {
  createAtendimento,
  updateClienteIfNeeded,
  updateContrato,
} from "@/app/contrate-online/cliente-nr/nossos-servicos/(ui)/upgrade-de-plano/utils";
import { Update } from "@/app/contrate-online/actions/novo-cliente/update";
import { UpdateStatusContrato } from "@/app/contrate-online/cliente-nr/nossos-servicos/(ui)/upgrade-de-plano/actions/update/contrato";

export function useFormSubmit() {
  const { formValues, setFormValues } = useUpgrade();
  const { cliente, documentosPresentes } = useClienteStore();
  const { contratos } = useDadosContratos();
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const handleSubmit = async (data: z.infer<typeof FinalizacaoSchema>) => {
    setFormValues(data);

    startTransition(async () => {
      try {
        const combinedData = { ...formValues, ...data };
        const { arquivos, plainData } = separateFiles(combinedData);

        if (!cliente) {
          throw new Error("Cliente não encontrado");
        }

        const { email, telefone } = plainData;
        await updateClienteIfNeeded(cliente, email, telefone);

        const contratoAtual = contratos.find(
          (contrato) => contrato.id === formValues.id_contrato
        );
        if (!contratoAtual) {
          throw new Error("Contrato não encontrado");
        }

        const planoAtualizado = {
          ...formValues.plano,
          id_vd_contrato: formValues.plano.id,
          contrato: formValues.plano.nomeOriginal,          
        };

        await updateContrato(
          formValues.id_contrato,
          planoAtualizado,
          contratoAtual
        );

        await UpdateStatusContrato(formValues.id_contrato);

        await createAtendimento({ ...plainData, idCliente: cliente.id, idContrato: formValues.id_contrato });

        if (documentosPresentes && Object.values(arquivos).some((file) => file instanceof File)) {
          const arquivosData = prepareArquivosData(cliente.id, arquivos);
          const update = new Update(cliente.id, arquivosData);
          await update.execute();
        }

        const encryptedId = encrypt(formValues.id_contrato);

        toast.success("Cadastro finalizado com sucesso!");
        router.push(`/contrate-online/assinatura-digital/${encryptedId}`);
      } catch (error) {
        toast.error(
          "Ocorreu um erro ao processar sua solicitação. Tente novamente mais tarde."
        );
        console.error(
          "Ocorreu um erro ao processar sua solicitação. Tente novamente mais tarde.",
          error
        );
      }
    });
  };

  return { handleSubmit, isPending };
}
