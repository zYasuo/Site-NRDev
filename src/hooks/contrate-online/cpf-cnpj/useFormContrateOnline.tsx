import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useTransition } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { FormSchema } from "@/components/contrate-online/cpf-cnpj/form/schema";
import { fetchClientePorCpfCnpj } from "@/app/contrate-online/actions";
import {  isCnpj } from "@/app/contrate-online/utils";
import { useClienteCPFCNPJ } from "@/hooks/contrate-online/cpf-cnpj/useClienteCPFCNPJ";
import { useNovoClienteForm } from "@/hooks/contrate-online/novo-cliente/useNovoCliente";
import { useClienteStore } from "@/hooks/contrate-online/cliente-nr/useClienteNR";
import { setSecureCookie } from "@/util/nookies/client"

export const useContrateOnlineForm = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    defaultValues: { cpfCnpj: "" },
    resolver: zodResolver(FormSchema),
    mode: "onSubmit",
  });

  const [isPending, startTransition] = useTransition();
  const setCliente = useClienteCPFCNPJ((state) => state.setCliente);
  const setCpfCnpj = useClienteCPFCNPJ((state) => state.setCpfCnpj);
  const cliente = useClienteCPFCNPJ((state) => state.cliente);
  const setFormValues = useNovoClienteForm((state) => state.setFormValues);
  const [showStepper, setShowStepper] = useState(false);
  const { setCliente: setClienteStore } = useClienteStore();
  const router = useRouter();

  async function handleAction(data: z.infer<typeof FormSchema>) {
    try {
      if (isCnpj(data.cpfCnpj)) {
        toast.info('Vejo que você é cliente Empresa, entre em contato conosco', {
          action: {
            label: 'Contato WhatsApp',
            onClick: () => {
              window.open('https://api.whatsapp.com/send?phone=558002001273&text=Eu%20sou%20Cliente%20Empresa%20e%20tentei%20contratar%20no%20Site', '_blank');
            }
          }
        });
        return;
      }

      const cliente = await fetchClientePorCpfCnpj(data.cpfCnpj);
      setCpfCnpj(data.cpfCnpj); 
      setFormValues({ cpfCnpj: data.cpfCnpj });
      if (cliente) {
        setCliente(cliente);
        setClienteStore(cliente);
        setSecureCookie('clienteId', cliente.id);
        toast.success('Cliente encontrado', {
          description: 'Vejo que já é nosso cliente. Obrigado por continuar com a gente!',
        });
        router.push(`/contrate-online/cliente-nr/nossos-servicos`);
      } else {
        setCliente(null);
        toast.success('Bem-vindo!', {
          description: 'Parece que você é um novo cliente. Estamos felizes em tê-lo conosco!',
        });
        setShowStepper(true);
      }
    } catch (error) {
      toast.error('Erro ao buscar cliente', {
        description: 'Ocorreu um erro ao buscar o cliente. Por favor, tente novamente mais tarde.',
      });
    }
  }

  return {
    form,
    isPending,
    showStepper,
    setShowStepper,
    startTransition,
    handleAction,
  };
};
