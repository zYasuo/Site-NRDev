import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const CardPlanosOne = () => {
  return (
    <Card className="absolute w-[340px] -top-[18px] drop-shadow-xl shadow-black/10 dark:shadow-white/10">
      <CardHeader className="flex flex-row items-center gap-4 pb-2">
        <Avatar>
          <AvatarFallback>NR</AvatarFallback>
        </Avatar>

        <div className="flex flex-col">
          <CardTitle className="text-lg">Cliente NR</CardTitle>
          <CardDescription>@ClienteNR</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
       Ótimo atendimento, internet excelente! Recomendo
      </CardContent>
    </Card>
  );
};
