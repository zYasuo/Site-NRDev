"use client";

import { toast } from "sonner";
import { Copy } from "lucide-react";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";

interface CopiarCodigoBarrasProps {
  codigoBarras: string;
}

export const CopiarCodigoBarras: React.FC<CopiarCodigoBarrasProps> = ({ codigoBarras }) => {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(codigoBarras);
      toast.success("Código de barras copiado com sucesso!");
    } catch (error) {
      toast.error("Erro ao copiar o código de barras. Tente novamente.");
      console.error("Erro ao copiar o código de barras:", error);
    }
  };

  return (
    <DropdownMenuItem onClick={handleCopy}>
      <Copy className="w-4 h-4 mr-2" />
      Copiar Código de Barras
    </DropdownMenuItem>
  );
};
