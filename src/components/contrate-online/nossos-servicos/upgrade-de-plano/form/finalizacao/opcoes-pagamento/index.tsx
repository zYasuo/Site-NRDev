import { FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { calculateDiscount } from "@/app/contrate-online/utils";
import { Control, useWatch } from "react-hook-form";

interface OpcoesPagamentoProps {
  control: Control<any>;
}

export const OpcoesPagamento: React.FC<OpcoesPagamentoProps> = ({ control }) => {
  const planoValor = useWatch({ control, name: "plano.valor_contrato" }) || "0";
  const { discountedValue, discount } = calculateDiscount(planoValor, 10);

  return (
    <Card className="p-6 mt-6">
      <CardHeader>
        <CardTitle>Opções de Pagamento</CardTitle>
        <CardDescription>
          Escolha a forma de pagamento para a primeira parcela.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <FormField
          control={control}
          name="pagamentoOpcao"
          render={({ field }) => (
            <FormItem>
              <div className="grid grid-rows-1 gap-4 lg:grid-rows-2">
                <div className="flex items-center">
                  <Checkbox
                    id="boleto"
                    value="boleto"
                    checked={field.value === "boleto"}
                    onCheckedChange={() => field.onChange("boleto")}
                  />
                  <label htmlFor="boleto" className="ml-2">
                    Primeiro pagamento após instalação
                  </label>
                </div>
                <div className="flex flex-col items-start">
                  <div className="flex items-center">
                    <Checkbox
                      id="desconto"
                      value="desconto"
                      checked={field.value === "desconto"}
                      onCheckedChange={() => field.onChange("desconto")}
                    />
                    <label htmlFor="desconto" className="ml-2 font-semibold text-primary">
                      Pague agora com Pix e ganhe 10% em desconto
                    </label>
                  </div>
                  <CardDescription className="text-sm text-muted-foreground">
                    Valor com desconto: {discountedValue} - *Economize {discount}
                  </CardDescription>
                </div>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
      </CardContent>
    </Card>
  );
};