import { useTransition } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { prepareArquivosData, separateFiles } from "@/app/contrate-online/utils";
import { encrypt } from "@/lib/crypto";
import { FinalizacaoSchema } from "@/components/contrate-online/nossos-servicos/novo-contrato/form/schema";
import { useNovoContratoForm } from "@/hooks/contrate-online/cliente-nr/nossos-servicos/novo-contrato/useNovoContrato";
import { useClienteStore } from "@/hooks/contrate-online/cliente-nr/nossos-servicos/useDadosCliente";
import {
  createContrato,
  updateClienteIfNeeded,
} from "@/app/contrate-online/cliente-nr/nossos-servicos/(ui)/novo-contrato/utils";
import { Update } from "@/app/contrate-online/actions/novo-cliente/update";

export function useFormSubmit() {
  const { formValues, setFormValues } = useNovoContratoForm();
  const { cliente, documentosPresentes } = useClienteStore();
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

        const contratoId = await createContrato(plainData, cliente.id);

        if (documentosPresentes && Object.values(arquivos).some((file) => file instanceof File)) {
          const arquivosData = prepareArquivosData(cliente.id, arquivos);
          const update = new Update(cliente.id, arquivosData);
          await update.execute();
        }


        const encryptedId = encrypt(contratoId);

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
