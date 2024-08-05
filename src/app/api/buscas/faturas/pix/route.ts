import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { ACampo } = await req.json();

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
      id_areceber: ACampo,
    }),
  };

  const response = await fetch(`${url}/get_pix`, options);

  if (!response.ok) {
    return new NextResponse("Erro ao buscar Boleto", { status: 500 });
  }

  const buffer = await response.arrayBuffer();
  return new NextResponse(Buffer.from(buffer), {
    status: 200,
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": "attachment; filename=boletos.pdf",
    },
  });
}
