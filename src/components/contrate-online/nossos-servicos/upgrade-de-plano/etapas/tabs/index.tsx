"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FormDadosPessoais } from "@/components/contrate-online/nossos-servicos/upgrade-de-plano/form/dados-pessoais";
import { FormPlano } from "@/components/contrate-online/nossos-servicos/upgrade-de-plano/form/planos";
import { FormDocumentos } from "@/components/contrate-online/nossos-servicos/upgrade-de-plano/form/documentos";
import { FormFinalizacao } from "@/components/contrate-online/nossos-servicos/upgrade-de-plano/form";
import { useClienteStore } from "@/hooks/contrate-online/cliente-nr/nossos-servicos/useDadosCliente";
import { useUpgrade } from "@/hooks/contrate-online/cliente-nr/nossos-servicos/upgrade-de-plano/useUpgrade";

export const StepTabs = () => {
  const { currentStep, nextStep, previousStep, setStep } = useUpgrade();
  const { documentosPresentes } = useClienteStore();

  const renderTabs = () => {
    const tabs = [
      { value: "0", label: "Dados" },
      { value: "1", label: "Plano" },
    ];

    if (documentosPresentes) {
      tabs.push({ value: "2", label: "Documentos" });
    }

    tabs.push({ value: "3", label: "Finalizar" });

    return tabs.map((tab) => (
      <TabsTrigger key={tab.value} value={tab.value}>
        {tab.label}
      </TabsTrigger>
    ));
  };


  const renderTabsContent = () => {
    const tabsContent = [
      <TabsContent key="0" value="0">
        <FormDadosPessoais onNext={nextStep} />
      </TabsContent>,
      <TabsContent key="1" value="1">
        <FormPlano onNext={nextStep} onPrevious={previousStep} />
      </TabsContent>,
    ];

    if (documentosPresentes) {
      tabsContent.push(
        <TabsContent key="2" value="2">
          <FormDocumentos onPrevious={previousStep} onNext={nextStep} />
        </TabsContent>
      );
    }


    tabsContent.push(
      <TabsContent key="3" value="3">
        <FormFinalizacao onPrevious={previousStep} onSubmit={() => {}} onEdit={setStep} />
      </TabsContent>
    );

    return tabsContent;
  };

  return (
    <Tabs value={currentStep.toString()} className="space-y-4 w-full">
      <TabsList className="text-[12px] md:text-xl lg:text-lxl">
        {renderTabs()}
      </TabsList>
      {renderTabsContent()}
    </Tabs>
  );
};