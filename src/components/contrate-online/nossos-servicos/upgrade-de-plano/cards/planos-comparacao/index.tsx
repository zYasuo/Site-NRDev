import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import { ArrowUp, ArrowDown } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import React from "react";

interface CardComparacaoProps {
  planoAtual: any;
  planoSelecionado: { nome: string; valor_contrato: string };
}

export const CardComparacao: React.FC<CardComparacaoProps> = ({
  planoAtual,
  planoSelecionado,
}) => {
  const upgradeAdvantages = [
    "Maior velocidade",
    "Por um preço menor",

  ];

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      <div className="w-full">
        <Card className="p-4 relative">
          <CardHeader>
            <CardTitle>Plano Atual</CardTitle>
            <CardDescription>Dados do plano atual</CardDescription>
            <ArrowDown className="absolute top-4 right-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <p className="text-sm font-medium">
                Velocidade: {planoAtual.nome}
              </p>
              <p className="text-sm font-medium">Valor: {planoAtual.valor_contrato}</p>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="w-full">
        <Card className="p-4 relative">
          <CardHeader>
            <CardTitle>Plano Selecionado</CardTitle>
            <CardDescription>Dados do plano selecionado</CardDescription>
            <ArrowUp className="absolute top-4 right-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <p className="text-sm font-medium">
                Velocidade: {planoSelecionado?.nome}
              </p>
              <p className="text-sm font-medium">
                Valor: {planoSelecionado?.valor_contrato}
              </p>
              <div className=" flex flex-wrap gap-2">
                {upgradeAdvantages.map((advantage, index) => (
                  <Badge key={index} variant="outline" className="text-xs">
                    {advantage}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
