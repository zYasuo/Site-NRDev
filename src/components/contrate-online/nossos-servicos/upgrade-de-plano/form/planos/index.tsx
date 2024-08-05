"use client";

import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import { CardComparacao } from "@/components/contrate-online/nossos-servicos/upgrade-de-plano/cards/planos-comparacao";
import { TabsPlanos } from "@/components/contrate-online/nossos-servicos/upgrade-de-plano/tabs";
import { useFormPlano } from "@/hooks/contrate-online/cliente-nr/nossos-servicos/upgrade-de-plano/etapas/planos/useFormPlano";
import { Skeleton } from "@/components/ui/skeleton"; 

export const FormPlano: React.FC<{
  onNext: () => void;
  onPrevious: () => void;
}> = ({ onNext, onPrevious }) => {
  const {
    form,
    isPending,
    planoSelecionado,
    handleSelectPlano,
    handleSubmit,
    higherValueHomePlans,
    higherValueGamerPlans,
    higherValueAccessPlans,
    nomeAtual,
    valorAtualFormatado,
    loading
  } = useFormPlano(onNext);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
        {isPending ? (
          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
            <Skeleton className="h-40 w-full" />
            <Skeleton className="h-40 w-full" />
            <Skeleton className="h-40 w-full" />
          </div>
        ) : (
          <>
            <div className="space-y-4">
              <TabsPlanos
                home={higherValueHomePlans}
                gamer={higherValueGamerPlans}
                access={higherValueAccessPlans}
                handleSelectPlano={handleSelectPlano}
                selectedPlano={planoSelecionado}
                loading={loading}
              />
            </div>

            {planoSelecionado && (
              <div className="space-y-4">
                <CardComparacao
                  planoAtual={{
                    nome: nomeAtual,
                    valor_contrato: valorAtualFormatado,
                  }}
                  planoSelecionado={planoSelecionado}
                />
              </div>
            )}
          </>
        )}

        <div className="flex justify-between">
          <Button variant="outline" type="button" onClick={onPrevious} disabled={isPending || form.formState.isSubmitting}>
            Anterior
          </Button>
          <Button type="submit" className="text-white" disabled={isPending || form.formState.isSubmitting}>
            {form.formState.isSubmitting || loading ? (
              <Icons.spinner className="animate-spin h-5 w-5" />
            ) : (
              <span>Próximo</span>
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
};
