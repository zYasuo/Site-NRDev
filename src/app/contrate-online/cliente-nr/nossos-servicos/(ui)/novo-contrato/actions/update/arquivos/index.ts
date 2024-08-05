"use server";

import { ArquivoData } from "@/app/contrate-online/cliente-nr/nossos-servicos/(ui)/novo-contrato/actions/update/arquivos/types";

export async function storeUploadArquivos(formData: ArquivoData) {
  const arquivoData = {
    id_cliente: formData.id_cliente,
    descricao: formData.descricao,
    arquivo: formData.arquivo,
  };

  return arquivoData;
}

export async function ChamaRotaArquivos(
  ClienteID: string,
  arquivos: ArquivoData[]
) {
  const uploadArquivos = await Promise.all(
    arquivos.map(async (arquivoData) => {
      const formData = new FormData();
      formData.append("id_cliente", ClienteID);
      formData.append("descricao", arquivoData.descricao);
      formData.append("arquivo", arquivoData.arquivo, arquivoData.arquivo.name);

      const response = await fetch(
        `${process.env.NEXTAUTH_URL}/api/ixc/novo-cliente/fisico/update/arquivos`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        console.error(`Erro ao enviar o arquivo ${arquivoData.descricao}`);
        throw new Error(`Erro ao enviar o arquivo ${arquivoData.descricao}`);
      }

      return await response.json();
    })
  );

  return uploadArquivos;
}
