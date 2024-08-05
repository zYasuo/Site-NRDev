import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const token = process.env.TOKEN_IXC;
  const url = process.env.URL_IXC;

  const formData = await request.formData();
  const idCliente = formData.get("id_cliente");

  if (!idCliente) {
    return NextResponse.json({ error: "ID do cliente não fornecido" }, { status: 400 });
  }

  const uploadPromises = [] as any

  formData.forEach((value, key) => {
    const arquivoMatch = key.match(/arquivos\[(\d+)\]\[arquivo\]/);
    if (arquivoMatch && value instanceof File) {
      const index = arquivoMatch[1];
      const descricao = formData.get(`arquivos[${index}][descricao]`);

      if (descricao) {
        const uploadData = new FormData();
        uploadData.append("id_cliente", idCliente as string);
        uploadData.append("descricao", descricao as string);
        uploadData.append("local_arquivo", value, value.name);

        const options = {
          method: "POST",
          headers: {
            Authorization: "Basic " + Buffer.from(token ?? "").toString("base64"),
          },
          body: uploadData,
        };

        uploadPromises.push(fetch(`${url}/cliente_arquivos`, options).then((response) => response.json()));
      }
    }
  });

  try {
    const results = await Promise.all(uploadPromises);
    return NextResponse.json(results);
  } catch (error) {
    console.error("Erro ao fazer upload dos arquivos:", error);
    return NextResponse.json({ error: "Erro ao fazer upload dos arquivos" }, { status: 500 });
  }
}
