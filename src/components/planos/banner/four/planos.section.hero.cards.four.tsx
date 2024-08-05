import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FaRProject, FaRoute, FaWifi } from "react-icons/fa";

export const CardPlanosFour = () => {
  return (
    <Card className="absolute w-[350px] -right-[2px] bottom-[35px]  drop-shadow-xl shadow-black/10 dark:shadow-white/10">
      <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
        <div className="mt-1 bg-primary p-1 rounded-2xl text-white">
          <FaWifi />
        </div>
        <div>
          <CardTitle>
            Você é nossa prioridade
          </CardTitle>
          <CardDescription className="text-md mt-2">
             Nós garantimos a melhor experiência de internet para você.
          </CardDescription>
        </div>
      </CardHeader>
    </Card>
  );
};
