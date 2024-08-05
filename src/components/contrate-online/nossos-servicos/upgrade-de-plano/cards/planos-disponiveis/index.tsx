import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { CheckIcon, WifiIcon } from "lucide-react";
import { FaGift, FaGamepad, FaPlus } from "react-icons/fa";
import { PiConfettiDuotone } from "react-icons/pi";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import React from "react";

interface CardPlanosProps {
  plano: any;
  isSelected: boolean;
  onSelect: (plano: any) => void;
  isPopular?: boolean;
  categoria?: string;
}

const CardPlanos: React.FC<CardPlanosProps> = ({
  plano,
  isSelected,
  onSelect,
  isPopular,
  categoria,
}) => {
  const { id, nome, valor_contrato, fidelidade } = plano;

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

  const handleCardClick = () => {
    onSelect(plano);
  };

  return (
    <div className="relative" onClick={handleCardClick}>
      <Card
        className={cn(
          "border-primary/10 cursor-pointer hover:scale-105",
          {
            "transform md:scale-110 border-2 bg-primary text-zinc-50": isPopular,
            "border-4 border-blue-500": isSelected,
          }
        )}
      >
        <CardHeader className="text-center pb-2">
          {isPopular && (
            <Badge
              variant={"outline"}
              className="uppercase text-xs w-max self-center mb-3 flex items-center bg-primary text-zinc-50"
            >
              {React.createElement(badgeIcon, { className: "mr-2" })}
              {badgeText}
            </Badge>
          )}
          <CardTitle className="mb-7">{nome || "Residencial"}</CardTitle>
          <span className="font-bold text-3xl">{valor_contrato}</span>
        </CardHeader>
        <div className="text-center">/ mês</div>
        <CardContent>
          <ul className="mt-7 space-y-2.5 text-xs">
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
      </Card>
    </div>
  );
};

export default CardPlanos;
