"use server";
import { IRegistro } from "@/types/routes/filial";
import { IQuery } from "@/types/routes/query.type";

export async function fetchFiliais(query: IQuery): Promise<IRegistro[]> {
  const response = await fetch(`${process.env.NEXTAUTH_URL}/api/buscas/filial`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(query),
  });

  if (!response.ok) {
    throw new Error("Erro ao buscar filial");
  }

  const data = await response.json();
  return data.registros;
}
