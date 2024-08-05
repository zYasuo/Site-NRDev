"use client"
import { ScrollReveal } from "@/components/effects/scrollReveal";
import { Faq } from "@/components/home/faq";

export const FaleConoscoSection = () => {
  const Ellipses = () => {
    const sharedClasses =
      "rounded-full outline outline-8 dark:outline-gray-950 sm:my-6 md:my-8 size-1 my-4 outline-gray-50 bg-primary";
    return (
      <div className="absolute z-0 grid h-full w-full items-center gap-8 lg:grid-cols-2">
        <section className="absolute z-0 grid h-full w-full grid-cols-2 place-content-between">
          <div className={`${sharedClasses} -mx-[2.5px]`}></div>
          <div className={`${sharedClasses} -mx-[2px] place-self-end`}></div>
          <div className={`${sharedClasses} -mx-[2.5px]`}></div>
          <div className={`${sharedClasses} -mx-[2px] place-self-end`}></div>
        </section>
      </div>
    );
  };
  const Container = ({ children }: { children: React.ReactNode }) => (
    <div className="relative container rounded-lg border border-dashed border-primary/15 px-4 dark:border-zinc-900 sm:px-6 md:px-8">
      <div className="relative w-full border-x border-primary/15 dark:border-zinc-800">
        <Ellipses />
        <div className="relative z-20 mx-auto py-8">{children}</div>
      </div>
    </div>
  );
  return (
    <div className="md:h-screen lg:h-screen h-full bg-gradient-to-t from-background via-background to-muted dark:from-background dark:via-background dark:to-primary/15">
      <ScrollReveal>
      <Container>
        <div className="p-3 w-full center">
          <Faq />
        </div>
      </Container>
      </ScrollReveal>
    </div>
  );
};
