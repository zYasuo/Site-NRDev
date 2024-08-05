"use server";
import { IRegistro, IPlanos } from '@/types/routes/planos';
import { filterAndSortHomePlanos, filterAndSortPlanos, formatCurrency } from '@/app/(ui)/planos/utils';

export async function fetchPlanos(AID: string): Promise<{ home: IRegistro[], gamer: IRegistro[], access: IRegistro[] }> {
  const response = await fetch(`${process.env.NEXTAUTH_URL}/api/buscas/planos`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ AQuery: AID, ACampo: 'id_filial' }),
    
  });

  if (!response.ok) {
    throw new Error("Erro ao buscar planos");
  }

  const data: IPlanos = await response.json();

  const planosAtivos = data.registros
    .filter(plano => plano.Ativo === "S" && parseFloat(plano.valor_contrato.replace(',', '.')) >= 89.90)
    .map(plano => ({
      ...plano,
      valor_contrato: formatCurrency(plano.valor_contrato),
    }));

  const home = filterAndSortHomePlanos(planosAtivos);
  const gamer = filterAndSortPlanos(planosAtivos, 'GAMER');
  const access = filterAndSortPlanos(planosAtivos, 'ACCESS');

  return { home, gamer, access };
}