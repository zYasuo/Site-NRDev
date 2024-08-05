import { NextRequest, NextResponse } from "next/server";

export async function PUT(request: NextRequest) {
  const token = process.env.TOKEN_IXC;
  const url = process.env.URL_IXC;

  const clienteAtualizado = await request.json();
  const { id } = clienteAtualizado;

  const options = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Basic " + Buffer.from(token ?? "").toString("base64"),
    },
    body: JSON.stringify(clienteAtualizado),
  };

  const response = await fetch(`${url}/cliente_contrato/${id}`, options);

  const data = await response.json();
  return NextResponse.json(data);
}
