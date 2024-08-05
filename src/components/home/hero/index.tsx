import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MoveRight, PhoneCall } from "lucide-react";

export const Hero1 = () => (
  <div className="dark:bg-primary/15 bg-muted ">
    <div className="container mx-auto">
      <div className="flex gap-8 py-20 lg:py-40 items-center justify-center flex-col">
        <div>
          <Badge>NR Conexões</Badge>
        </div>
        <div className="flex gap-4 flex-col max-w-xl">
          <h1 className="text-3xl text-center text-primary md:text-4xl lg:text-7xl font-regular font-semibold font-sans  dark:text-foreground tracking-[-0.04em]">
            A Internet que Você Pode Confiar
          </h1>

          <p className="text-muted-foreground text-center text-sm md:text-md lg:text-2xl">
            Cansado de conexões lentas e instáveis? Venha para a NR Conexões,
            temos planos a partir de R$ 89,90
          </p>
        </div>
      </div>
    </div>
  </div>
);
