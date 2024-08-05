import { Card } from "@/components/ui/card";
import Link from "next/link";
import { IServiceCard } from "@/components/contrate-online/nossos-servicos/card/constants";
import { toast } from "sonner";

export const ServiceCard = ({ service, onSelect }: { service: IServiceCard, onSelect: (title: string) => void }) => {
  const handleClick = () => {
    onSelect(service.title);
    toast.success(`Você escolheu o serviço: ${service.title}. Aguarde...`);
  };

  return (
    <Card className="cursor-pointer hover:border-primary/40 p-6" onClick={handleClick}>
      <Link href={service.link}>
        <div className="flex flex-row items-center justify-between space-y-0 pb-2">
          <div className="text-md md:text-lg font-medium font-sans ">
            {service.title}
          </div>
          <service.icon className="h-6 w-6 text-primary/80" />
        </div>
        <div className="md:text-base text-xs text-muted-foreground">
          {service.description}
        </div>
      </Link>
    </Card>
  );
};
