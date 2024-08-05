"use client";
import { z } from "zod";
import { useTransition } from "react";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { useNovoClienteForm } from "@/hooks/contrate-online/novo-cliente/useNovoCliente";
import { FinalizacaoSchema } from "@/components/contrate-online/novo-cliente/form/schema";
import { Create } from "@/app/contrate-online/actions/novo-cliente/create";
import { Update } from "@/app/contrate-online/actions/novo-cliente/update";
import { prepareArquivosData, separateFiles } from "@/app/contrate-online/utils";
import { LoadingMessage } from "@/components/contrate-online/novo-cliente/form/finalizacao/loading";
import { DadosContratacao } from "@/components/contrate-online/novo-cliente/form/finalizacao/dados-contratacao";
import { OpcoesPagamento } from "@/components/contrate-online/novo-cliente/form/finalizacao/opcoes-pagamento";
import { Checkbox } from "@/components/ui/checkbox";
import { Icons } from "@/components/ui/icons";
import { useRouter } from "next/navigation";
import { encrypt } from "@/lib/crypto"; 

export const FormFinalizacao: React.FC<{
  onSubmit: () => void;
  onPrevious: () => void;
  onEdit: (step: number) => void;
}> = ({ onSubmit, onPrevious, onEdit }) => {
  const { formValues, setFormValues } = useNovoClienteForm();
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const form = useForm<z.infer<typeof FinalizacaoSchema>>({
    defaultValues: formValues,
    resolver: zodResolver(FinalizacaoSchema),
    mode: "onSubmit",
  });

  async function handleSubmit(data: z.infer<typeof FinalizacaoSchema>) {
    setFormValues(data);

    startTransition(async () => {
      try {
        const combinedData = { ...formValues, ...data };
        const { arquivos, plainData } = separateFiles(combinedData);

        const clienteId = await Create(plainData);

        if (Object.values(arquivos).some((file) => file instanceof File)) {
          const arquivosData = prepareArquivosData(clienteId, arquivos);
          const update = new Update(clienteId, arquivosData);
          await update.execute();
        }

        const encryptedId = encrypt(clienteId);

        toast.success("Cadastro finalizado com sucesso!");
        router.push(`/contrate-online/assinatura-digital/${encryptedId}`);
      } catch (error) {
        toast.error(
          "Ocorreu um erro ao processar sua solicitação. Tente novamente mais tarde."
        );
        console.error(
          "Ocorreu um erro ao processar sua solicitação. Tente novamente mais tarde."
        );
      }
    });
  }

  return (
    <Form {...form}>
      {isPending ? (
        <LoadingMessage />
      ) : (
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
          <DadosContratacao onEdit={onEdit} />
          <OpcoesPagamento control={form.control} />
          <FormField
            control={form.control}
            name="termosCondicoes"
            render={({ field }) => (
              <FormItem>
                <div className="flex items-start">
                  <Checkbox
                    id="termosCondicoes"
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                  <label htmlFor="termosCondicoes" className="ml-2">
                    Aceito os termos e condições
                  </label>
                </div>
                <FormMessage />
                <div className="text-sm text-muted-foreground mt-2 max-x-xs">
                  <p>
                    Ao clicar em Finalizar, você concorda com os nossos{" "}
                    <a href="/termos" className="underline">
                      Termos de Serviço
                    </a>{" "}
                    e{" "}
                    <a href="/politica" className="underline">
                      Política de Privacidade
                    </a>
                    . Você também confirma que as informações fornecidas são
                    verdadeiras e que você tem mais de 18 anos.
                  </p>
                </div>
              </FormItem>
            )}
          />

          <div className="flex justify-between">
            <Button variant="outline" onClick={onPrevious}>
              Anterior
            </Button>
            <Button type="submit" className="text-white" disabled={isPending}>
              {isPending ? (
                <>
                  <Icons.spinner className="animate-spin h-5 w-5 mr-2" />
                  Muito bem, estamos finalizando seu cadastro...
                </>
              ) : (
                <span>Finalizar</span>
              )}
            </Button>
          </div>
        </form>
      )}
    </Form>
  );
};
