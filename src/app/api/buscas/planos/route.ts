import { NextRequest, NextResponse } from 'next/server';
import { IPlanos } from '@/types/routes/planos';

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
      qtype: `vd_contratos.${ACampo}`,
      query: AQuery,
      oper: "=",
      page: "1",
      rp: "999",
      sortname: "vd_contratos.id",
      sortorder: "asc",
    }),
    next: {
      revalidate: 0,
    }
  };

  try {
    const response = await fetch(`${url}/vd_contratos`, options);
    if (!response.ok) {
      return NextResponse.json({ error: "Erro ao buscar Planos" }, { status: 500 });
    }
    const data: IPlanos = await response.json();
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Falha na obtenção dos dados das Planos" }, { status: 500 });
  }
}
