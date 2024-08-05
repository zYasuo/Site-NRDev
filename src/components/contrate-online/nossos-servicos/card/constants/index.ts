import { FaFileContract, FaArrowUp, FaHome } from "react-icons/fa";

export interface IServiceCard {
  title: string;
  description: string;
  link: string;
  icon: any;
}

export const ServiceCards: IServiceCard[] = [
  {
    title: "Novo Contrato",
    description: "Contrate um novo plano de internet e aproveite a melhor conexão.",
    link: "/contrate-online/cliente-nr/nossos-servicos/novo-contrato",
    icon: FaFileContract,
  },
  {
    title: "Upgrade de Plano",
    description: "Melhore seu plano e obtenha mais velocidade e qualidade de conexão.",
    link: "/contrate-online/cliente-nr/nossos-servicos/upgrade-de-plano",
    icon: FaArrowUp,
  },
  // {
  //   title: "Mudança de Endereço",
  //   description: "Transfira seu serviço de internet para um novo endereço sem complicações.",
  //   link: "/servicos/mudanca-de-endereco",
  //   icon: FaHome,
  // },
];
