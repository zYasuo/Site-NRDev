import { useEffect, useState, useTransition } from "react";
import { fetchClientePorId, validateContracts, validateDocuments, fetchContratos, fetchPlanosContrato } from "@/app/contrate-online/cliente-nr/nossos-servicos/actions/select";
import { useClienteStore } from "@/hooks/contrate-online/cliente-nr/nossos-servicos/useDadosCliente";
import { useNovoContratoForm } from "@/hooks/contrate-online/cliente-nr/nossos-servicos/novo-contrato/useNovoContrato";
import { useDadosContratos } from "@/hooks/contrate-online/cliente-nr/nossos-servicos/useDadosContratos";
import { getSecureCookie } from "@/util/nookies/client";
import { toast } from "sonner";
import { IRegistro } from "@/types/routes/planos";
import { useUpgrade } from "@/hooks/contrate-online/cliente-nr/nossos-servicos/upgrade-de-plano/useUpgrade";

export function useClienteData() {
  const { setCliente, setDocumentosPresentes } = useClienteStore();
  const { setDocumentosNecessarios } = useNovoContratoForm();
  const { setDocumentosNecessariosUpgrade } = useUpgrade();
  const { setContratos } = useDadosContratos();
  const [planosContratos, setPlanosContratos] = useState<Record<string, IRegistro[]>>({});
  const [isPending, startTransition] = useTransition();
  const [isBlocked, setIsBlocked] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const AID = getSecureCookie('clienteId'); 

  useEffect(() => {
    if (AID) {
      startTransition(async () => {
        const cliente = await fetchClientePorId(AID);
        if (cliente) {
          setCliente(cliente);

          const documentosNecessarios = await validateDocuments(AID);
          setDocumentosPresentes(documentosNecessarios);
          setDocumentosNecessarios(documentosNecessarios);
          setDocumentosNecessariosUpgrade(documentosNecessarios);

          const contratosCliente = await fetchContratos(AID);
          const contratosValidos = await validateContracts(AID);

          if (!contratosValidos) {
            toast.error("Serviços Adicionais Indisponíveis. Entre em contato conosco para mais informações.");
            setIsBlocked(true);
          } else {
            const planosMap: Record<string, IRegistro[]> = {};
            const todosPlanos = await fetchPlanosContrato('S', 'Ativo');

            const contratosFiltrados = [];
            for (const contrato of contratosCliente) {
              const planos = await fetchPlanosContrato(contrato.id_vd_contrato, 'id');
              planosMap[contrato.id] = planos;

              const valorAtual = planos[0]?.valor_contrato ? parseFloat(planos[0].valor_contrato.replace('R$', '').replace('.', '').replace(',', '.')) : 0;
              const higherValuePlans = todosPlanos.filter(plano => plano.Ativo === 'S' && plano.valor_contrato && parseFloat(plano.valor_contrato.replace('R$', '').replace('.', '').replace(',', '.')) > valorAtual);

              if (higherValuePlans.length > 0) {
                contratosFiltrados.push(contrato);
              }
            }

            setPlanosContratos(planosMap);
            setContratos(contratosFiltrados);

            if (contratosFiltrados.length === 0) {
              toast.error("Você não possui contratos para esse serviço");
            }
          }
        }
        setIsLoaded(true);
      });
    } else {
      setIsLoaded(true);
    }
  }, [AID, setCliente, setDocumentosPresentes, setDocumentosNecessarios, setDocumentosNecessariosUpgrade, setContratos]);

  return { isPending, isLoaded, isBlocked, planosContratos };
}
