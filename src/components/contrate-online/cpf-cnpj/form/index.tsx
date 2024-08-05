"use client";

import { Form, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { FloatingLabelInput } from "@/components/ui/float-input";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import { Etapas } from "@/components/contrate-online/novo-cliente/etapas";
import { TextAnimate } from "@/components/effects/textAnimate";
import { ScrollReveal } from "@/components/effects/scrollReveal";
import { useContrateOnlineForm } from "@/hooks/contrate-online/cpf-cnpj/useFormContrateOnline";
import { formatCpfCnpj } from "@/app/contrate-online/utils";

export const FormContrateOnlineCPFCNPJ: React.FC = () => {
  const {
    form,
    isPending,
    showStepper,
    setShowStepper,
    startTransition,
    handleAction,
  } = useContrateOnlineForm();

  return (
    <div >
      {!showStepper && (
        <div className="space-y-4 p-6">
          <ScrollReveal>
            <div>
              <TextAnimate
                text="Contrate Online!"
                className="text-md md:text-lxl lg:text-5xl font-regular font-semibold font-sans text-zinc-800 dark:text-foreground tracking-[-0.04em]"
                type="popIn"
              />
            </div>
            <div>
              <TextAnimate
                text="Informe seu CPF ou CNPJ para continuar"
                delay={2}
                className="text-muted-foreground text-sm md:text-md lg:text-xl"
                type="fadeInUp"
              />
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div className="mt-2">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit((data) =>
                    startTransition(() => handleAction(data))
                  )}
                  className="space-y-4 w-full lg:w-[80%]"
                >
                  <div>
                    <FormField
                      control={form.control}
                      name="cpfCnpj"
                      render={({ field }) => (
                        <FormItem>
                          <FloatingLabelInput
                            {...field}
                            id="cpfCnpj"
                            label="Digite seu CPF ou CNPJ"
                            onChange={(e) =>
                              field.onChange(formatCpfCnpj(e.target.value))
                            }
                            value={field.value}
                          />
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div>
                    <Button type="submit" className="w-full lg:py-8 text-white">
                      {isPending ? (
                        <Icons.spinner className="animate-spin h-6 w-6" />
                      ) : (
                        <div className="text-lg">Próximo</div>
                      )}
                    </Button>
                  </div>
                </form>
              </Form>
            </div>
          </ScrollReveal>
        </div>
      )}

      {showStepper && (
        <div className="mt-8">
          <Etapas />
        </div>
      )}
    </div>
  );
};
