"use server";

import { IContratos } from "@/types/routes/contratos";

export async function fetchInformationContract(
  AID: string
): Promise<IContratos> {
  const response = await fetch(
    `${process.env.NEXTAUTH_URL}/api/buscas/contratos`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ AQuery: AID, ACampo: "id" }),
      next: {
        revalidate: 0,
      },
    }
  );

  if (!response.ok) {
    throw new Error("Erro ao buscar contrato");
  }

  const data = await response.json();
  const contrato: IContratos = data.registros[0];

  return contrato;
}
