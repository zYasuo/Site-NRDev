/* eslint-disable */
"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";

interface GerarQrCodeProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  qrCodeImage: string | null;
}

export const GerarQrCode: React.FC<GerarQrCodeProps> = ({ open, setOpen, qrCodeImage }) => {
  const [imageSrc, setImageSrc] = React.useState<string | null>(null);

  React.useEffect(() => {
    if (qrCodeImage) {
      setImageSrc(`data:image/png;base64,${qrCodeImage}`);
    } else {
      setImageSrc(null);
    }
  }, [qrCodeImage]);

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>QR Code PIX</DrawerTitle>
            <DrawerDescription>Use o QR code abaixo para realizar o pagamento.</DrawerDescription>
          </DrawerHeader>
          <div className="p-4 pb-0 flex justify-center items-center">
            {imageSrc ? (
              <img src={imageSrc} alt="QR Code PIX" />
            ) : (
              <p>Nenhum QR code disponível.</p>
            )}
          </div>
          <DrawerFooter>
            <DrawerClose asChild>
              <Button variant="outline">Fechar</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
};
