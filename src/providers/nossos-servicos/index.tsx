"use client";
import { ReactNode } from "react";
import { useClienteData } from "@/hooks/contrate-online/cliente-nr/nossos-servicos";
import { BlockedServiceCard } from "@/components/contrate-online/nossos-servicos/provider/card";
import { LoadingMessage } from "@/components/contrate-online/nossos-servicos/provider/loading";

interface ClienteProviderProps {
  children: ReactNode;
}

export const ClienteProvider = ({ children }: ClienteProviderProps) => {
  const { isPending, isLoaded, isBlocked } = useClienteData();

  if (isPending) {
    return <LoadingMessage />;
  }

  if (isBlocked) {
    return <BlockedServiceCard />;
  }

  return <>{children}</>;
};
