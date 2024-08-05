import { Card } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react"; 

export const BlockedServiceCard = () => {
  return (
    <Card className="cursor-pointer hover:border-primary/40 p-6 max-w-md mx-auto">
      <div className="flex flex-col items-center space-y-4">
        <AlertTriangle className="h-12 w-12 text-primary" />
        <div className="text-center text-md md:text-lg font-medium font-sans dark:text-primary/80">
          Serviços Adicionais Indisponíveis
        </div>
        <div className="text-center md:text-base text-xs text-muted-foreground">
          Ops, parece que existem algumas pendências em seu cadastro. Para mais informações e para desbloquear seus serviços, entre em contato conosco pelo WhatsApp.
        </div>
        <Link href="https://api.whatsapp.com/send?phone=558002001273&text=Eu%20vim%20do%20Site%20da%20NR%20e%20Gostaria%20de%20Contratar" passHref>
          <Button className="mt-4" variant="outline">
            Entre em contato
          </Button>
        </Link>
      </div>
    </Card>
  );
};
