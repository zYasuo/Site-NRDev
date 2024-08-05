/* eslint-disable @next/next/no-img-element */

"use client";
import { ScrollReveal } from "@/components/effects/scrollReveal";
import { TextAnimate } from "@/components/effects/textAnimate";
import { Medal, Popcorn } from "lucide-react";
import { Card } from "@/components/ui/card";
import { PiTwitchLogo } from "react-icons/pi";
import { FaFutbol } from "react-icons/fa6";

export default function SectionVantagens() {
  return (
    <div className="bg-gradient-to-b from-background via-background to-muted dark:from-background dark:via-background dark:to-primary/15">
      <div className="pb-16 lg:pb-32 container flex items-center justify-center ">
        <ScrollReveal className="space-y-4 mb-4 ">
          <div className="ml-4 md:ml-0">
            <TextAnimate
              text="Internet +"
              className="text-3xl md:text-4xl lg:text-7xl font-regular font-semibold font-sans text-zinc-800 dark:text-foreground tracking-[-0.05em]"
              type="fadeIn"
            />
          </div>
          <div className="relative ml-4 md:ml-0">
            <TextAnimate
              text="Streaming"
              delay={3}
              className="text-3xl md:text-4xl lg:text-7xl font-regular font-semibold font-sans text-zinc-800 dark:text-foreground tracking-[-0.04em] "
              type="fadeIn"
            />
            <div
              className="absolute inset-x-0 -top-40 z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
              aria-hidden="true"
            >
              <div
                className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-muted to-muted dark:from-muted dark:to-primary opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                style={{
                  clipPath:
                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                }}
              />
            </div>
          </div>
          <div>
            <TextAnimate
              text="Aproveite o melhor da internet com a melhor Internet."
              delay={3}
              className="text-muted-foreground text-sm md:text-md lg:text-3xl"
              type="calmInUp"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <ScrollReveal className="lg:col-span-2 z-20">
              <Card className="rounded-md h-full p-6 aspect-square lg:aspect-auto flex justify-between flex-col border-dashed">
                <Popcorn className="w-8 h-8 stroke-1 text-primary" />
                <ScrollReveal>
                  <picture>
                    <source
                      srcSet="/imgs/home/streamings/722x126/1.svg"
                      media="(min-width: 1024px)"
                    />
                    <img
                      src="/imgs/home/streamings/300x102/1.svg"
                      alt="Filmes é somente na NR Conexões"
                      className="h-44 md:h-44 w-full group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-lg"
                    />
                  </picture>
                </ScrollReveal>
                <ScrollReveal>
                  <div className="flex flex-col">
                    <h3 className="text-xl font-sans font-regular tracking-tight">
                      Nada melhor que um bom filme
                    </h3>
                    <p className="text-muted-foreground font-sans max-w-xs text-base">
                      Aproveite o melhor do cinema sem sair de casa.
                    </p>
                  </div>
                </ScrollReveal>
              </Card>
            </ScrollReveal>
            <ScrollReveal>
              <Card className="rounded-md aspect-square p-6 flex justify-between flex-col">
                <PiTwitchLogo className="w-8 h-8 stroke-1 text-primary" />
                <ScrollReveal>
                  <picture>
                    <source
                      srcSet="/imgs/home/streamings/330x176/1.svg"
                      media="(min-width: 1024px)"
                    />
                    <img
                      src="/imgs/home/streamings/300x102/2.svg"
                      alt="Assista seus Streames favoritos com NR Conexões"
                      className="h-44 md:h-44 w-full group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-lg"
                    />
                  </picture>
                </ScrollReveal>
                <ScrollReveal>
                  <div className="flex flex-col">
                    <h3 className="text-xl font-sans tracking-tight">
                      Streaming sem travamentos
                    </h3>
                    <p className="text-muted-foreground font-sans max-w-xs text-base">
                      Assista suas lives e séries favoritas sem travamentos.
                    </p>
                  </div>
                </ScrollReveal>
              </Card>
            </ScrollReveal>
            <ScrollReveal>
              <Card className="rounded-md aspect-square p-6 flex justify-between flex-col">
                <FaFutbol className="w-8 h-8 stroke-1 text-primary" />
                <ScrollReveal>
                  <picture>
                    <source
                      srcSet="/imgs/home/streamings/330x176/2.svg"
                      media="(min-width: 1024px)"
                    />
                    <img
                      src="/imgs/home/streamings/300x102/3.svg"
                      alt="Seja o melhor torcedor com NR Conexões"
                      className="h-44 md:h-44 w-full group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-lg"
                    />
                  </picture>
                </ScrollReveal>
                <ScrollReveal>
                  <div className="flex flex-col">
                    <h3 className="text-xl font-sans tracking-tight">
                      Não perca nenhum jogo
                    </h3>
                    <p className="text-muted-foreground font-sans max-w-xs text-base">
                      Acompanhe todos os jogos do seu time favorito.
                    </p>
                  </div>
                </ScrollReveal>
              </Card>
            </ScrollReveal>
            <ScrollReveal className="lg:col-span-2">
              <Card className="rounded-md h-full p-6 aspect-square lg:aspect-auto flex justify-between flex-col border-dashed">
                <Medal className="w-8 h-8 stroke-1 text-primary" />
                <ScrollReveal>
                  <picture>
                    <source
                      srcSet="/imgs/home/streamings/722x126/2.svg"
                      media="(min-width: 1024px)"
                    />
                    <img
                      src="/imgs/home/streamings/300x102/4.svg"
                      alt=" Conecte-se com o mundo com NR Conexões"
                      className="h-44 md:h-44 w-full group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-lg"
                    />
                  </picture>
                </ScrollReveal>
                <ScrollReveal>
                  <div className="flex flex-col">
                    <h3 className="text-xl font-sans tracking-tight">
                      Conecte-se com o mundo
                    </h3>
                    <p className="text-muted-foreground font-sans max-w-xs text-base">
                      Aproveite o melhor da internet com alta velocidade.
                    </p>
                  </div>
                </ScrollReveal>
              </Card>
            </ScrollReveal>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
