
import { ArquivoData } from "@/app/contrate-online/cliente-nr/nossos-servicos/(ui)/novo-contrato/actions/update/arquivos/types";

export class Update {
  ClienteID: string;
  arquivos: ArquivoData[];

  constructor(ClienteID: string, arquivos: ArquivoData[]) {
    this.ClienteID = ClienteID;
    this.arquivos = arquivos;
  }

  async execute() {
    const formData = new FormData();
    formData.append("id_cliente", this.ClienteID);

    this.arquivos.forEach((arquivo, index) => {
      formData.append(`arquivos[${index}][descricao]`, arquivo.descricao);
      formData.append(`arquivos[${index}][arquivo]`, arquivo.arquivo, arquivo.arquivo.name);
    });

    const response = await fetch("/api/ixc/novo-contrato/fisico/update/arquivos", {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error("Erro ao enviar os arquivos");
    }

    return await response.json();
  }
}
