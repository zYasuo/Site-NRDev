import { NextRequest, NextResponse } from "next/server";
import { IFaturas } from "@/types/routes/faturas";

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
      qtype: `fn_areceber.${ACampo}`,
      query: AQuery,
      "oper": "=",
      "rp": "200000",
      "sortname": "fn_areceber.data_vencimento",
      "sortorder": "asc",
      "grid_param": "[{\"TB\":\"fn_areceber.liberado\", \"OP\" : \"=\", \"P\" : \"S\"}, {\"TB\":\"fn_areceber.status\", \"OP\" : \"!=\", \"P\" : \"C\"},{\"TB\":\"fn_areceber.status\", \"OP\" : \"!=\", \"P\" : \"R\"}]"
    }),
    next: {
      revalidate: 0,
    },
  };

  try {
    const response = await fetch(`${url}/fn_areceber`, options);
    if (!response.ok) {
      throw new Error("Erro ao buscar fn_areceber");
    }

    const data: { registros: IFaturas[] } = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
