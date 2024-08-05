import { NextRequest, NextResponse } from 'next/server';
import { ICidade } from '@/types/routes/cidades';

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
      qtype: `cidade.${ACampo}`,
      query: AQuery,
      oper: "=",
      page: "1",
      rp: "10",
      sortname: "cidade.id",
      sortorder: "asc",
    }),
    next: {
      revalidate: 500,
    }
  };

  try {
    const response = await fetch(`${url}/cidade`, options);
    if (!response.ok) {
      throw new Error('Erro ao buscar cidade');
    }

    const data: { registros: ICidade[] } = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
