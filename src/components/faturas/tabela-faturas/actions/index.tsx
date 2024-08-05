import { IFaturas } from "@/types/routes/faturas";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";
import { useEffect, useState } from "react";
import { Separator } from "@/components/ui/separator";
import { BaixarPDF } from "@/components/faturas/tabela-faturas/column/actions/baixar-boleto";
import { CopiarCodigoBarras } from "@/components/faturas/tabela-faturas/column/actions/copiar-codigo-de-barras";
import { PixCopiaCola } from "@/components/faturas/tabela-faturas/column/actions/pix-copia-cola";
import { GerarQrCode } from "@/components/faturas/tabela-faturas/column/actions/gerar-qr-code";
import { FaQrcode } from "react-icons/fa6";
import { toast } from "sonner";
import { fetchPix } from "@/app/(ui)/faturas/actions";

export const ActionsCell: React.FC<{ row: IFaturas }> = ({ row }) => {
  const [openQrCode, setOpenQrCode] = useState(false);
  const [pixAvailable, setPixAvailable] = useState(false);
  const [pixData, setPixData] = useState<{
    qrcode: string;
    imagemQrcode: string;
  } | null>(null);

  useEffect(() => {
    const checkPixAvailability = async () => {
      try {
        const data = await fetchPix(row.id);

        if (
          data.type === "success" &&
          data.pix?.qrCode.qrcode &&
          data.pix.qrCode.imagemQrcode
        ) {
          setPixAvailable(true);
          setPixData({
            qrcode: data.pix.qrCode.qrcode,
            imagemQrcode: data.pix.qrCode.imagemQrcode,
          });
        } else {
          setPixAvailable(false);
          setPixData(null);
        }
      } catch (error) {
        console.error("Erro ao verificar a chave PIX:", error);
        toast.error("Erro ao verificar a chave PIX.");
        setPixAvailable(false);
        setPixData(null);
      }
    };

    checkPixAvailability();
  }, [row.id]);

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button aria-haspopup="true" size="icon" variant="ghost">
            <MoreHorizontal className="h-4 w-4" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Ações</DropdownMenuLabel>
          <CopiarCodigoBarras codigoBarras={row.linha_digitavel} />
          <Separator />
          <BaixarPDF idBoletos={[row.id]} />
          {pixAvailable && pixData && (
            <>
              <Separator />
              <PixCopiaCola qrcode={pixData.qrcode} />
              <Separator />
              <DropdownMenuItem onClick={() => setOpenQrCode(true)}>
                <FaQrcode className="w-4 h-4 mr-2" />
                Gerar QR Code
              </DropdownMenuItem>
            </>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
      <GerarQrCode
        open={openQrCode}
        setOpen={setOpenQrCode}
        qrCodeImage={pixData?.imagemQrcode || null}
      />
    </>
  );
};
