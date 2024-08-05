import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Check } from "lucide-react";
import Link from "next/link";

export const CardPlanosThree = () => {
  return (
    <Card className="absolute top-[150px] left-[50px] w-72  drop-shadow-xl shadow-black/10 dark:shadow-white/10">
      <CardHeader>
        <CardTitle className="flex item-center justify-between">
          600 Mega
          <Badge className="text-sm" >Mais Popular</Badge>
        </CardTitle>
        <div>
          <span className="text-3xl ">R$99,90</span>
          <span className="text-muted-foreground"> /mês</span>
        </div>

        <CardDescription></CardDescription>
      </CardHeader>

      <CardContent>
        <Button className="w-full">
          <Link href="https://api.whatsapp.com/send?phone=558002001273&text=Eu%20vim%20do%20Site%20da%20NR%20e%20Gostaria%20de%20Contratar">Contratar</Link>
        </Button>
      </CardContent>

      <hr className="w-4/5 m-auto mb-4" />

      <CardFooter className="flex">
        <div className="space-y-4">
          {[
            "Instalaçao Grátis",
            "12 meses de Fidelidade",
            "Pacote de Vantagens",
          ].map((benefit: string) => (
            <span key={benefit} className="flex">
              <Check className="" />{" "}
              <h3 className="ml-2">{benefit}</h3>
            </span>
          ))}
        </div>
      </CardFooter>
    </Card>
  );
};
