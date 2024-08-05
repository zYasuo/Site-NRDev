/* eslint-disable */
"use client";
import { ScrollReveal } from "@/components/effects/scrollReveal";
import { TextAnimate } from "@/components/effects/textAnimate";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/card-v2";
import { cn } from "@/lib/utils";
import DotPattern from "@/components/magicui/dot-pattern";

export default function CDASection() {
  return (
    <section className="md:h-screen lg:h-screen relative h-full bg-background dark:bg-primary/15">
      <div className="w-full  py-16 lg:py-32">
        <div className="z-10">
          <DotPattern
            className={cn(
              "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]"
            )}
          />
        </div>
        <div className="container px-4 md:px-6 z-30">
          <Container>
            <div className="grid gap-6 md:p-8 lg:grid-cols-2 lg:gap-12 xl:grid-cols-[1fr_550px]">
              <div className="flex flex-col justify-center">
                <ScrollReveal className="mb-4">
                  <Badge>Facilidade</Badge>
                  <div className="flex justify-start relative">
                    <TextAnimate
                      text="Ja conhece"
                      className="text-3xl md:text-4xl lg:text-6xl font-regular font-semibold font-sans text-primary dark:text-foreground tracking-[-0.04em] z-20"
                      type="fadeIn"
                    />
                  </div>
                  <div className="flex justify-start relative">
                    <TextAnimate
                      text="nosso APP?"
                      className="text-3xl md:text-4xl lg:text-6xl -mt-2 font-regular font-semibold font-sans text-primary dark:text-foreground tracking-[-0.04em] z-20"
                      type="fadeIn"
                    />
                  </div>
                  <div className="flex justify-start">
                    <TextAnimate
                      text="Tenha tudo na palma da sua mão"
                      delay={3}
                      className="text-muted-foreground text-sm md:text-md lg:text-2xl"
                      type="calmInUp"
                    />
                  </div>
                </ScrollReveal>
                <ScrollReveal>
                  <div className="flex flex-col gap-2 min-[400px]:flex-row mt-6">
                    <Link
                      href="https://play.google.com/store/apps/details?id=br.com.nrconexoes&hl=pt_BR"
                      target="_blank"
                      className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                      prefetch={false}
                    >
                      <AppleIcon className="h-5 w-5 mr-2" />
                      App Store
                    </Link>
                    <Link
                      href="https://apps.apple.com/br/app/cda-nr/id1611256697"
                      target="_blank"
                      className="inline-flex h-10 items-center justify-center rounded-md bg-secondary px-8 text-sm font-medium text-secondary-foreground shadow transition-colors hover:bg-secondary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                      prefetch={false}
                    >
                      <PlayIcon className="h-5 w-5 mr-2" />
                      Google Play
                    </Link>
                  </div>
                </ScrollReveal>
              </div>

              <ScrollReveal>
                <picture>
                  <source
                    srcSet="/imgs/home/cda-app/652x652/1.svg"
                    media="(min-width: 1024px)"
                  />
                  <img
                    src="/imgs/home/cda-app/322x322/1.svg"
                    alt="Imagem representativa"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </picture>
              </ScrollReveal>
            </div>
          </Container>
        </div>
      </div>
    </section>
  );
}

function AppleIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z" />
      <path d="M10 2c1 .5 2 2 2 5" />
    </svg>
  );
}

function PlayIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="6 3 20 12 6 21 6 3" />
    </svg>
  );
}
