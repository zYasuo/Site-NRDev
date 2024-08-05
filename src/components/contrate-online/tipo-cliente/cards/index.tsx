import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { useTransition } from "react";
import { toast } from "sonner";
import { Icons } from "@/components/ui/icons";

interface ICardEscolha {
  title: string;
  link: string;
  category: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  novoCliente: boolean;
}

export const CardEscolha = ({ title, link, category, icon: Icon, novoCliente }: ICardEscolha) => {
  const [isPending, startTransition] = useTransition();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    startTransition(() => {
      toast.success(
        novoCliente
          ? "🎉 Bem-vindo! Estamos animados em tê-lo conosco. Aproveite nossos serviços."
          : "👏 Bem-vindo de volta! Agradecemos por continuar sua jornada conosco."
      );

      setTimeout(() => {
        window.location.href = link;
      }, 2000);
    });
  };

  return (
    <Card className="cursor-pointer hover:border-primary/40 p-2">
      <Link href={link} onClick={handleClick}>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-md md:text-lg font-medium font-sans ">{title}</CardTitle>
          {isPending ? (
            <Icons.spinner className="h-8 w-8 animate-spin text-primary/80" />
          ) : (
            <Icon className="h-8 w-8 text-primary/80" />
          )}
        </CardHeader>
        <CardContent>
          <p className="md:text-base text-xs text-muted-foreground">{category}</p>
        </CardContent>
      </Link>
    </Card>
  );
};
