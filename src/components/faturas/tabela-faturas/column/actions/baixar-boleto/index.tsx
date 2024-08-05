"use client";

import { toast } from "sonner";
import { FaDownload, FaCheck } from "react-icons/fa";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";

interface BaixarPDFProps {
  idBoletos: string[];
}

export const BaixarPDF: React.FC<BaixarPDFProps> = ({ idBoletos }) => {
  const fetchBoletoPDF = async (idBoletos: string[]): Promise<Blob> => {
    try {
      const response = await fetch("/api/buscas/faturas/boletos/pdf", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ACampo: idBoletos }),
      });

      if (!response.ok) {
        throw new Error("Erro ao buscar Boleto");
      }

      return await response.blob();
    } catch (error) {
      console.error("Erro ao buscar Boleto:", error);
      throw new Error("Erro ao buscar Boleto");
    }
  };

  const handleDownload = async () => {
    try {
      const blob = await fetchBoletoPDF(idBoletos);
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "boletos.pdf";
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      a.remove();

      toast.success("Boleto baixado com sucesso!", {
        icon: <FaCheck />,
      });
    } catch (error) {
      toast.error("Erro ao gerar PDF. Tente novamente.", {
        icon: <FaDownload />,
      });
      console.error("Erro ao gerar PDF:", error);
    }
  };

  return (
    <DropdownMenuItem onClick={handleDownload}>
      <FaDownload className="mr-2" />
      Baixar PDF
    </DropdownMenuItem>
  );
};
