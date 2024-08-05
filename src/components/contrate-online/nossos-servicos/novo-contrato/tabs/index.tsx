"use client";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { PlanosTabContent } from "@/components/contrate-online/nossos-servicos/novo-contrato/tabs/content";
import { Icons } from "@/components/ui/icons";

interface TabsPlanosProps {
  home: any[];
  gamer: any[];
  access: any[];
  handleSelectPlano: (plano: any) => void;
  selectedPlano: any;
  loading: boolean;
}

export const TabsPlanos: React.FC<TabsPlanosProps> = ({
  home,
  gamer,
  access,
  handleSelectPlano,
  selectedPlano,
  loading,
}) => {
  const defaultTab =
    home.length > 0
      ? "home"
      : gamer.length > 0
      ? "gamer"
      : access.length > 0
      ? "access"
      : "";

  return (
    <div className="flex items-center justify-center">
      {loading ? (
        <div className="mt-8 flex items-center space-x-4">
          <h2 className="text-xl">Aguarde um instante, estamos preparando algo incrível para você..! </h2>
          <Icons.spinner className="animate-spin h-8 w-8" />
        </div>
      ) : (
        <Tabs defaultValue={defaultTab} className="w-full">
          <TabsList className="text-xs md:text-xl lg:text-lxl">
            <TabsTrigger value="home">Home</TabsTrigger>
            <TabsTrigger value="gamer">Gamer</TabsTrigger>
            <TabsTrigger value="access">Access</TabsTrigger>
          </TabsList>
          <TabsContent className="p-4" value="home">
            <PlanosTabContent
              planos={home}
              categoria="home"
              handleSelectPlano={handleSelectPlano}
              selectedPlano={selectedPlano}
            />
          </TabsContent>
          <TabsContent className="p-4" value="gamer">
            <PlanosTabContent
              planos={gamer}
              categoria="gamer"
              handleSelectPlano={handleSelectPlano}
              selectedPlano={selectedPlano}
            />
          </TabsContent>
          <TabsContent className="p-4" value="access">
            <PlanosTabContent
              planos={access}
              categoria="access"
              handleSelectPlano={handleSelectPlano}
              selectedPlano={selectedPlano}
            />
          </TabsContent>
        </Tabs>
      )}
    </div>
  );
};
