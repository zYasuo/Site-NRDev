"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useNovoClienteForm } from "@/hooks/contrate-online/novo-cliente/useNovoCliente";
import { FormDadosPessoais } from "@/components/contrate-online/novo-cliente/form/dados-pessoais";
import { FormEndereco } from "@/components/contrate-online/novo-cliente/form/endereco";
import { FormPlano } from "@/components/contrate-online/novo-cliente/form/planos";
import { FormDocumentos } from "@/components/contrate-online/novo-cliente/form/documentos";
import { TextAnimate } from "@/components/effects/textAnimate";
import { ScrollReveal } from "@/components/effects/scrollReveal";
import {
  stepSubtitles,
  stepTitles,
} from "@/components/contrate-online/novo-cliente/etapas/constants";
import { FormFinalizacao } from "@/components/contrate-online/novo-cliente/form";

export const Etapas = () => {
  const { currentStep, nextStep, previousStep, setStep } = useNovoClienteForm();

  return (
    <div className="space-y-4">
      <ScrollReveal>
        <div>
          <TextAnimate
            text={stepTitles[currentStep]}
            className="text-xl md:text-3xl lg:text-4xl font-regular font-semibold font-sans text-zinc-800 dark:text-foreground tracking-[-0.04em]"
            type="popIn"
          />
        </div>
        <div>
          <TextAnimate
            text={stepSubtitles[currentStep]}
            className="text-muted-foreground text-sm md:text-lg lg:text-xl"
            type="popIn"
          />
        </div>
      </ScrollReveal>
      <ScrollReveal>
        <Tabs value={currentStep.toString()} className="space-y-4 w-full">
          <TabsList className="text-[12px] md:text-xl lg:text-lxl">
            <TabsTrigger value="0">Dados</TabsTrigger>
            <TabsTrigger value="1">Endereço</TabsTrigger>
            <TabsTrigger value="2">Plano</TabsTrigger>
            <TabsTrigger value="3">Documentos</TabsTrigger>
            <TabsTrigger value="4">Finalizar</TabsTrigger>
          </TabsList>

          <TabsContent value="0">
            <FormDadosPessoais onNext={nextStep} />
          </TabsContent>
          <TabsContent value="1">
            <FormEndereco onNext={nextStep} onPrevious={previousStep} />
          </TabsContent>
          <TabsContent value="2">
            <FormPlano onNext={nextStep} onPrevious={previousStep} />
          </TabsContent>
          <TabsContent value="3">
            <FormDocumentos onPrevious={previousStep} onNext={nextStep} />
          </TabsContent>
          <TabsContent value="4">
            <FormFinalizacao
              onPrevious={previousStep}
              onSubmit={() => {}} 
              onEdit={setStep}
            />
          </TabsContent>
        </Tabs>
      </ScrollReveal>
    </div>
  );
};
