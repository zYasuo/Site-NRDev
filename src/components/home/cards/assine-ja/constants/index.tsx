import { FaWhatsapp } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

export interface IAtendimento {
  title: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  link?: string;
  type?: string;
  description?: string;
  category?: string;
}

export const CanaisAtendimento = (): IAtendimento[] => [
  // {
  //   title: "Contrate Online",
  //   icon: BsFillPersonLinesFill,
  //   link: "/contrate-online",
  //   description: "Contrate online sem sair de casa",
  //   category: "online",
  // },
  {
    title: "Via WhatsApp",
    icon: FaWhatsapp,
    link: "https://api.whatsapp.com/send?phone=558002001273&text=Eu%20vim%20do%20Site%20da%20NR%20e%20Gostaria%20de%20Contratar",
    description: "Fale com um de nossos atendentes",
    category: "online",
  }
];
