import { FaUserCheck, FaUserPlus } from "react-icons/fa";

export interface ICardLink {
  title: string;
  link: string;
  category: string;
  icon: any;
  novoCliente: boolean;
}

export const CardLink: ICardLink[] = [
  {
    title: "Já sou cliente NR",
    link: "/contrate-online/cliente-nr",
    category: "Se você já é cliente, clique aqui para contratar um novo plano ou serviço.",
    icon: FaUserCheck,
    novoCliente: false,
  },
  {
    title: "Sou novo cliente",
    link: "/contrate-online/novo-cliente",
    category: "Se você é um novo cliente, clique aqui para contratar um novo plano ou serviço.",
    icon: FaUserPlus,
    novoCliente: true,
  },
];
