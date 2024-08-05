import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const token = process.env.TOKEN_IXC;
  const url = process.env.URL_IXC;

  try {
    const { id } = await request.json();
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${Buffer.from(token ?? "").toString("base64")}`,
      },
      body: JSON.stringify({
        id_contrato: id,
      }),
    };

    const response = await fetch(`${url}/cliente_contrato_23529`, options);
    if (!response.ok) {
      throw new Error("Erro ao submeter o contrato");
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Erro ao submeter o contrato" },
      { status: 500 }
    );
  }
}
