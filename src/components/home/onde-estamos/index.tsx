"use client";
import React, { useEffect, useState } from "react";
import { ScrollReveal } from "@/components/effects/scrollReveal";
import { TextAnimate } from "@/components/effects/textAnimate";
import { fetchFilialEndereco } from "@/app/(ui)/actions";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Icons } from "@/components/ui/icons";

interface OndeEstamosSectionProps {
  AID: string;
}

export const OndeEstamosSection: React.FC<OndeEstamosSectionProps> = ({
  AID,
}) => {
  const [mapUrl, setMapUrl] = useState<string | null>(null);

  useEffect(() => {
    async function fetchAddress() {
      try {
        const endereco = await fetchFilialEndereco(AID);
        setMapUrl(
          `https://www.google.com/maps?q=${encodeURIComponent(
            endereco
          )}&output=embed`
        );
      } catch (error) {
        console.error("Erro ao buscar o endereço:", error);
      }
    }

    fetchAddress();
  }, [AID]);

  return (
    <div className="md:h-screen lg:h-screen h-full bg-gradient-to-t from-background via-background to-muted dark:from-background dark:via-primary/15 dark:to-primary/15">
      <div className="py-16 lg:py-32 container relative flex flex-col h-full justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="flex justify-start items-center space-y-4">
            <ScrollReveal className="space-y-4">
              <Badge className="text-white">Nossa Localização</Badge>
              <div className="flex justify-start items-center">
                <TextAnimate
                  text="Visite-nos!"
                  className="text-3xl md:text-4xl lg:text-7xl font-regular font-semibold font-sans text-primary dark:text-foreground tracking-[-0.04em]"
                  type="shiftInUp"
                />
              </div>
              <div className="flex justify-start items-center">
                <TextAnimate
                  text="Veja o mapa abaixo e venha nos conhecer."
                  delay={2}
                  className="text-muted-foreground text-xs md:text-md lg:text-3xl"
                  type="popIn"
                />
              </div>
            </ScrollReveal>
          </div>
          <ScrollReveal className="lg:col-span-2 col-span-1">
            <div className="flex items-center justify-center ">
              {mapUrl ? (
                <iframe
                title="Mapa da Filial"
                  className="w-full h-96 rounded-xl"
                  src={mapUrl}
                  allowFullScreen={true}
                  loading="lazy"
                ></iframe>
              ) : (
                <div className="flex items-center justify-center h-96">
                  <Icons.spinner className="animate-spin h-12 w-12" />
                </div>
              )}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
};
