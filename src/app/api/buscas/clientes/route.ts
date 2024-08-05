import { NextRequest, NextResponse } from 'next/server';
import { ICliente } from '@/types/routes/clientes';

export async function POST(req: NextRequest) {
  const { AQuery, ACampo } = await req.json();
  const token = process.env.TOKEN_IXC;
  const url = process.env.URL_IXC;
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Basic " + Buffer.from(token ?? "").toString("base64"),
      ixcsoft: "listar",
    },
    body: JSON.stringify({
      qtype: `cliente.${ACampo}`,
      query: AQuery,
      oper: "=",
      page: "1",
      rp: "999",
      sortname: "cliente.id",
      sortorder: "asc",
    }),
    next: {
      revalidate: 0,
    }
  };

  try {
    const response = await fetch(`${url}/cliente`, options);
    if (!response.ok) {
      throw new Error('Erro ao buscar cliente');
    }

    const data: { registros: ICliente[] } = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
