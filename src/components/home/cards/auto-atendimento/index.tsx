/* eslint-disable */
"use client";

import { ScrollReveal } from "@/components/effects/scrollReveal";
import { TextAnimate } from "@/components/effects/textAnimate";
import React from 'react';
import Image from 'next/image';
import { useResponsiveImageSizeForAutoAtendimento, useImageSizeStoreForAutoAtendimento } from "@/hooks/images/home/autoatendimento";

export const AutoAtendimentoSection: React.FC = () => {
  useResponsiveImageSizeForAutoAtendimento();
  const imageSize = useImageSizeStoreForAutoAtendimento((state) => state.imageSize);

  const src1 = imageSize === 'desktop' ? '/imgs/home/autoatendimentos/520x560/1.svg' : '/imgs/home/autoatendimentos/322x560/1.svg';
  const src2 = imageSize === 'desktop' ? '/imgs/home/autoatendimentos/790x560/1.svg' : '/imgs/home/autoatendimentos/322x560/2.svg';
  const src3 = imageSize === 'desktop' ? '/imgs/home/autoatendimentos/790x560/2.svg' : '/imgs/home/autoatendimentos/322x560/3.svg';
  const src4 = imageSize === 'desktop' ? '/imgs/home/autoatendimentos/520x560/2.svg' : '/imgs/home/autoatendimentos/322x560/4.svg';

  return (
    <div className="h-full bg-gradient-to-b from-background via-background to-muted dark:from-background dark:via-background dark:to-primary/15">
      <div className="py-16 lg:py-32 container relative flex flex-col h-full justify-center">
        <ScrollReveal className="space-y-4">
          <div className="flex items-center justify-center">
            <TextAnimate
              text="Nossos"
              className="text-3xl md:text-4xl lg:text-7xl font-regular font-semibold font-sans text-zinc-800 dark:text-foreground tracking-[-0.04em] whitespace-pre-line"
              type="popIn"
            />
          </div>
          <div className="flex items-center justify-center">
            <TextAnimate
              text="Autoatendimentos !"
              className="text-3xl md:text-4xl lg:text-7xl font-regular font-semibold font-sans -mt-6 text-zinc-800 dark:text-foreground tracking-[-0.04em] whitespace-pre-line"
              type="popIn"
            />
          </div>
          <div className="flex items-center justify-center">
            <TextAnimate
              text={`Resolva suas preocupações,\nsem precisar sair de casa.`}
              delay={2}
              className="text-muted-foreground text-xs md:text-md lg:text-3xl whitespace-pre-line"
              type="fadeInUp"
            />
          </div>
        </ScrollReveal>
        
        <div className="flex h-full w-full items-center justify-center mt-8">
          <div id="bento-div" className="w-full grid grid-cols-10 max-auto auto-rows-[35rem] gap-4 p-1">
            
            <div className="col-span-10 lg:col-span-4 group overflow-hidden rounded-md">
              <picture>
                <source
                  media="(max-width: 1024px)"
                  srcSet="/imgs/home/autoatendimentos/322x560/1.svg"
                />
                <img
                  src="/imgs/home/autoatendimentos/520x560/1.svg"
                  alt="Acesse o Central do Assinante NR"
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
              </picture>
            </div>
            
            <div className="col-span-10 lg:col-span-6 group overflow-hidden rounded-md">
              <picture>
                <source
                  media="(max-width: 1024px)"
                  srcSet="/imgs/home/autoatendimentos/322x560/2.svg"
                />
                <img
                  src="/imgs/home/autoatendimentos/790x560/1.svg"
                  alt="Retire suas faturas online na NR Conexões"
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
              </picture>
            </div>
            
            <div className="col-span-10 lg:col-span-6 group overflow-hidden rounded-md">
              <picture>
                <source
                  media="(max-width: 1024px)"
                  srcSet="/imgs/home/autoatendimentos/322x560/3.svg"
                />
                <img
                  src="/imgs/home/autoatendimentos/790x560/2.svg"
                  alt="Contrate nossos serviços online"
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
              </picture>
            </div>
            
            <div className="col-span-10 lg:col-span-4 group overflow-hidden rounded-md">
              <picture>
                <source
                  media="(max-width: 1024px)"
                  srcSet="/imgs/home/autoatendimentos/322x560/4.svg"
                />
                <img
                  src="/imgs/home/autoatendimentos/520x560/2.svg"
                  alt="Conheça nossos canais de atendimento"
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
              </picture>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};