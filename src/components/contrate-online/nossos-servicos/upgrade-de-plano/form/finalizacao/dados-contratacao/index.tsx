import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Edit2 } from "lucide-react";
import { clientDetails, planoDetails } from "@/components/contrate-online/nossos-servicos/upgrade-de-plano/form/constants";
import { useUpgrade } from "@/hooks/contrate-online/cliente-nr/nossos-servicos/upgrade-de-plano/useUpgrade";

export const DadosContratacao: React.FC<{ onEdit: (step: number) => void }> = ({ onEdit }) => {
  const { formValues } = useUpgrade();

  return (
    <Card className="p-6">
      <CardHeader>
        <CardTitle>Dados da Contratação</CardTitle>
        <CardDescription>
          Verifique se os dados estão corretos antes de finalizar.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
          <div className="col-span-1 relative space-y-2">
            {clientDetails.map((detail) => (
              <p key={detail.label} className="text-sm font-medium">
                {detail.label}: {detail.value(formValues)}
              </p>
            ))}
            <Button
              variant={"outline"}
              size={"icon"}
              onClick={() => onEdit(0)}
              className="absolute top-0 right-0 p-2"
            >
              <Edit2 className="w-5 h-5" />
            </Button>
          </div>
          <div className="col-span-1 flex items-center justify-center">
            <span className="block h-full w-px bg-primary/15"></span>
          </div>
          <div className="col-span-1 relative space-y-2">
            {planoDetails.map((detail) => (
              <p key={detail.label} className="text-sm font-medium">
                {detail.label}: {detail.value(formValues)}
              </p>
            ))}
            <Button
              variant={"outline"}
              size={"icon"}
              onClick={() => onEdit(2)}
              className="absolute top-0 right-0 p-2"
            >
              <Edit2 className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
