"use client";
import { useClienteData } from "@/hooks/contrate-online/cliente-nr/nossos-servicos";
import { format } from "date-fns";
import { useDadosContratos } from "@/hooks/contrate-online/cliente-nr/nossos-servicos/useDadosContratos";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Icons } from "@/components/ui/icons";
import { ReceiptText } from "lucide-react";
import { useUpgrade } from "@/hooks/contrate-online/cliente-nr/nossos-servicos/upgrade-de-plano/useUpgrade";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { z } from 'zod';
import { DadosContratoSchema } from "@/components/contrate-online/nossos-servicos/upgrade-de-plano/form/schema";
import { IContratos } from "@/types/routes/contratos";

interface FormContratosUpgradeProps {
  onCardClick: () => void;
}

export function FormContratosUpgrade({ onCardClick }: FormContratosUpgradeProps) {
  const { contratos } = useDadosContratos();
  const { planosContratos } = useClienteData();
  const { formValues, setFormValues } = useUpgrade();

  const form = useForm<z.infer<typeof DadosContratoSchema>>({
    defaultValues: formValues,
    resolver: zodResolver(DadosContratoSchema),
    mode: "onSubmit",
  });

  const handleCardClick = (contrato: IContratos) => {
    setFormValues({
      ...formValues,
      id_contrato: contrato.id,
      id_filial: contrato.id_filial,
    });
    form.setValue("id_contrato", contrato.id);
    form.setValue("id_filial", contrato.id_filial);
    onCardClick();
  };

  return (
    <Form {...form}>
      <form className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {contratos.length === 0 ? (
          <div className="col-span-1 lg:col-span-2 text-center mt-20">
            <p className="text-lg font-semibold flex items-center justify-center">
              <span role="img" aria-label="sad face" className="mr-2">😞</span>
              Desculpe, você não possui contratos disponíveis para upgrade neste serviço.
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Por favor, entre em contato com nosso suporte para mais informações.
            </p>
            <a
              href="https://api.whatsapp.com/send?phone=558002001273"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline mt-2 inline-block"
            >
              Fale conosco pelo WhatsApp
            </a>
          </div>
        ) : (
          contratos.map((contrato: IContratos) => {
            const planos = planosContratos[contrato.id] || [];

            return (
              <FormField
                key={contrato.id}
                control={form.control}
                name="id_contrato"
                render={({ field, fieldState }) => (
                  <FormItem>
                    <Card
                      className="cursor-pointer hover:border-primary/40 p-4"
                      onClick={() => handleCardClick(contrato)}
                    >
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle>{contrato.contrato}</CardTitle>
                        {false ? (
                          <Icons.spinner className="h-6 w-6 animate-spin dark:text-primary/80" />
                        ) : (
                          <ReceiptText className="h-6 w-6 dark:text-primary/80" />
                        )}
                      </CardHeader>
                      <CardContent>
                        {planos.map((plano) => (
                          <div key={plano.id} className="flex items-center space-y-2">
                            <h3 className="text-lg font-semibold mb-2"></h3>
                            <div className="flex">
                              <CardDescription>
                                {contrato.cep}, {contrato.endereco}, {contrato.numero},{" "}
                                {contrato.bairro}
                              </CardDescription>
                            </div>
                          </div>
                        ))}
                      </CardContent>
                      <CardFooter>
                        <CardDescription>
                          Data da contratação:{" "}
                          {format(new Date(contrato.data_cadastro_sistema), "dd/MM/yyyy")} 
                        </CardDescription>
                      </CardFooter>
                    </Card>
                    <FormMessage>{fieldState.error?.message}</FormMessage>
                  </FormItem>
                )}
              />
            );
          })
        )}
      </form>
    </Form>
  );
}
