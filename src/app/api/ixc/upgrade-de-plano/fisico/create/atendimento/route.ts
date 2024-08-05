import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const token = process.env.TOKEN_IXC;
  const url = process.env.URL_IXC;

  const { idCliente, idContrato, idFilial, enderecoCompleto } =
    await request.json();

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Basic " + Buffer.from(token ?? "").toString("base64"),
    },
    body: JSON.stringify({
      tipo: "C",
      id_estrutura: "",
      protocolo: "",
      id_circuito: "",
      id_cliente: idCliente,
      id_login: "",
      id_contrato: idContrato,
      id_filial: idFilial,
      id_assunto: "243",
      titulo: "UPGRADE DE PLANO",
      origem_endereco: "CC",
      origem_endereco_estrutura: "E",
      endereco: enderecoCompleto,
      latitude: "",
      longitude: "",
      id_wfl_processo: "82",
      id_ticket_setor: "7",
      id_responsavel_tecnico: "",
      data_criacao: "CURRENT_TIMESTAMP",
      data_ultima_alteracao: "",
      prioridade: "M",
      data_reservada: "",
      melhor_horario_reserva: "Q",
      id_ticket_origem: "H",
      id_usuarios: "",
      id_resposta: "",
      menssagem:
        "Atendimento criado automaticamente pelo sistema de contratação online. Cliente solicitou upgrade de plano.",
      interacao_pendente: "N",
      su_status: "N",
      id_evento_status_processo: "",
      id_canal_atendimento: "",
      status: "T",
      mensagens_nao_lida_cli: "0",
      mensagens_nao_lida_sup: "0",
      token: "",
      finalizar_atendimento: "N",
      id_su_diagnostico: "",
      status_sla: "",
      origem_cadastro: "P",
      ultima_atualizacao: "CURRENT_TIMESTAMP",
      cliente_fone: "",
      cliente_telefone_comercial: "",
      cliente_id_operadora_celular: "",
      cliente_telefone_celular: "",
      cliente_whatsapp: "",
      cliente_ramal: "",
      cliente_email: "",
      cliente_contato: "",
      cliente_website: "",
      cliente_skype: "",
      cliente_facebook: "",
      atualizar_cliente: "S",
      latitude_cli: "",
      longitude_cli: "",
      atualizar_login: "S",
      latitude_login: "",
      longitude_login: "",
    }),
  };

  const response = await fetch(`${url}/su_ticket`, options);

  const data = await response.json();

  return NextResponse.json(data);
}
