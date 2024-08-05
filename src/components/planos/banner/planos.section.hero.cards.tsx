import { CardPlanosFour } from "@/components/planos/banner/four/planos.section.hero.cards.four";
import { CardPlanosOne } from "@/components/planos/banner/one/planos.section.hero.cards.one";
import { CardPlanosThree } from "@/components/planos/banner/three/planos.section.hero.cards.three";
import { CardPlanosTwo } from "@/components/planos/banner/two/planos.section.hero.cards.two";

export const PlanosCardHero = () => {
  return (
    <div className="hidden lg:flex flex-row flex-wrap gap-8 relative w-[700px] h-[500px]">
      <div className="w-96 h-96 bg-accent/40  dark:bg-primary/20 blur-3xl inset-0 m-auto"></div>
      <CardPlanosOne />
      <CardPlanosTwo />
      <CardPlanosThree />
      <CardPlanosFour />
    </div>
  );
};
