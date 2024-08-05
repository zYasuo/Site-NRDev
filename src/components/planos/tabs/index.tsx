"use client";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { PlanosTabContent } from "@/components/planos/tabs/content";

interface TabsPlanosProps {
  home: any[];
  gamer: any[];
  access: any[];
}

export const TabsPlanos: React.FC<TabsPlanosProps> = ({
  home,
  gamer,
  access,
}) => {
  const renderTabsList = () => (
    <div className="flex items-center justify-center">
      <TabsList>
        {home.length > 0 && <TabsTrigger value="home">Home</TabsTrigger>}
        {gamer.length > 0 && <TabsTrigger value="gamer">Gamer</TabsTrigger>}
        {access.length > 0 && <TabsTrigger value="access">Access</TabsTrigger>}
      </TabsList>
    </div>
  );

  const renderTabsContent = () => (
    <>
      {home.length > 0 && (
        <TabsContent className="p-4" value="home">
          <PlanosTabContent planos={home} categoria="home" />
        </TabsContent>
      )}
      {gamer.length > 0 && (
        <TabsContent className="p-4" value="gamer">
          <PlanosTabContent planos={gamer} categoria="gamer" />
        </TabsContent>
      )}
      {access.length > 0 && (
        <TabsContent className="p-4" value="access">
          <PlanosTabContent planos={access} categoria="access" />
        </TabsContent>
      )}
    </>
  );

  return (
    <div className="flex items-center justify-center z-20">
      <Tabs
        defaultValue={
          home.length > 0
            ? "home"
            : gamer.length > 0
            ? "gamer"
            : access.length > 0
            ? "access"
            : ""
        }
        className="w-full"
      >
        {renderTabsList()}
        {renderTabsContent()}
      </Tabs>
    </div>
  );
};
