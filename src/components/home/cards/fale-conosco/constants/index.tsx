import {
  LucideProps,
  Mail,
  MessageCircle,
  PhoneCall,
} from "lucide-react";

export interface IFaleConosco {
  title: string;
  icon: React.ComponentType<LucideProps>;
  link?: string;
  type?: string;
  description?: string;
  category?: string;
}

export const FaleConosco = (): IFaleConosco[] => [
  {
    title: "Via WhatsApp",
    icon: Mail,
    link: "https://api.whatsapp.com/send?phone=558002001273&text=Eu%20vim%20do%20Site%20da%20NR%20e%20Gostaria%20de%20Contratar",
    category: "online",
    description: "Fale com nosso time",
  },
  {
    title: "Email",
    icon: MessageCircle,
    link: "contato@nrtelecom.com.br",
    category: "online",
    description: "Precisando de ajuda?",
  },
  {
    title: "Telefone",
    icon: PhoneCall,
    category: "online",
    description: "Nos ligue agora mesmo",
  },
  {
    title: "Nosso 0800",
    icon: PhoneCall,
    category: "online",
    description: "Nos ligue agora mesmo",
  },
];
