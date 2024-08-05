import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { CheckIcon, WifiIcon } from "lucide-react";
import {
  FaUpload,
  FaDownload,
  FaGift,
  FaGamepad,
  FaPlus,
} from "react-icons/fa";
import { PiConfettiDuotone } from "react-icons/pi";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface CardPlanosProps {
  id: string;
  nome: string;
  valor: string;
  fidelidade: string;
  isPopular?: boolean;
  categoria?: string;
}

const CardPlanos: React.FC<CardPlanosProps> = ({
  id,
  nome,
  valor,
  fidelidade,
  isPopular,
  categoria,
}) => {
  const badgeText =
    categoria === "access"
      ? "Mais Benefícios, Menor Preço"
      : categoria === "gamer"
      ? "Oferta Imperdível!"
      : "Mais Popular!";
  const badgeIcon =
    categoria === "access"
      ? FaPlus
      : categoria === "gamer"
      ? FaGift
      : PiConfettiDuotone;

  return (
    <div className="relative">
      <Card
        className={cn(
          "border-primary/10 hover:scale-105 hover:border-primary/40",
          {
            "transform md:scale-110 border-2 bg-primary  text-zinc-200":
              isPopular,
          }
        )}
      >
        <CardHeader className="text-center pb-2">
          {isPopular && (
            <Badge
              variant={"outline"}
              className="uppercase w-max self-center mb-3 flex items-center bg-primary  text-zinc-200"
            >
              {React.createElement(badgeIcon, { className: "mr-2" })}
              {badgeText}
            </Badge>
          )}
          <CardTitle className="mb-7">{nome || "Residencial"}</CardTitle>
          <span className="font-bold text-5xl">{valor}</span>
        </CardHeader>
        <div className="text-center">/ mês</div>
        <CardContent>
          <ul className="mt-7 space-y-2.5 text-sm">
            <li className="flex space-x-2">
              <WifiIcon className="flex-shrink-0 mt-0.5 h-4 w-4" />
              <span className="font-medium">Wifi Incluso</span>
            </li>
            <li className="flex space-x-2">
              <CheckIcon className="flex-shrink-0 mt-0.5 h-4 w-4" />
              <span className="font-medium">
                Fidelidade: {fidelidade || "0"} meses
              </span>
            </li>
            <li className="flex space-x-2">
              <CheckIcon className="flex-shrink-0 mt-0.5 h-4 w-4" />
              <span className="font-medium">Instalação Grátis</span>
            </li>
            {categoria === "gamer" && (
              <>
                <li className="flex space-x-2">
                  <FaPlus className="flex-shrink-0 mt-0.5 h-4 w-4" />
                  <span className="font-medium">
                    Mais Benefícios, Menor Preço
                  </span>
                </li>
                <li className="flex space-x-2">
                  <FaPlus className="flex-shrink-0 mt-0.5 h-4 w-4" />
                  <span className="font-medium">
                    Mais Upload para baixar jogos e streams!
                  </span>
                </li>
                <li className="flex space-x-2">
                  <FaGamepad className="flex-shrink-0 mt-0.5 h-4 w-4" />
                  <span className="font-medium">
                    IP Público Dinâmico, perfeito para jogos!
                  </span>
                </li>
              </>
            )}
            {categoria === "access" && (
              <>
                <li className="flex space-x-2">
                  <FaPlus className="flex-shrink-0 mt-0.5 h-4 w-4" />
                  <span className="font-medium">
                    Mais Benefícios, Menor Preço
                  </span>
                </li>
                <li className="flex space-x-2">
                  <FaPlus className="flex-shrink-0 mt-0.5 h-4 w-4" />
                  <span className="font-medium">
                    IP Público para monitoramento
                  </span>
                </li>
              </>
            )}
            <li className="flex space-x-2">
              <FaGift className="flex-shrink-0 mt-0.5 h-4 w-4" />
              <span className="font-medium">Clube de Vantagens</span>
            </li>
          </ul>
        </CardContent>
        <CardFooter className="flex items-center justify-center">
          <Link
            href={"https://api.whatsapp.com/send?phone=558002001273&text=Eu%20vim%20do%20Site%20da%20NR%20e%20Gostaria%20de%20Contratar"}
            className="w-full"
            target="_blank"
          >
            <Button
              className={cn("w-full", {
                "bg-background text-zinc-800 dark:text-foreground": isPopular,
              })}
            >
              Contrate Agora!
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default CardPlanos;
