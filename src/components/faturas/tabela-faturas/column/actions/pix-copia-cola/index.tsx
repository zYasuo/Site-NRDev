
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { FaPix } from "react-icons/fa6";
import { toast } from "sonner";

interface PixCopiaColaProps {
  qrcode: string;
}

export const PixCopiaCola: React.FC<PixCopiaColaProps> = ({ qrcode }) => {
  const handleCopyPix = async () => {
    try {
      await navigator.clipboard.writeText(qrcode);
      toast.success("Chave PIX copiada com sucesso!");
    } catch (error) {
      console.error("Erro ao copiar a chave PIX:", error);
      toast.error("Erro ao copiar a chave PIX. Tente novamente.");
    }
  };

  return (
    <DropdownMenuItem onClick={handleCopyPix}>
      <FaPix className="w-4 h-4 mr-2" />
      Pix Copia e Cola
    </DropdownMenuItem>
  );
};
