"use client";
import { useRouter } from "next/navigation";
import { SelectEstado } from "@/components/cidades/select/estado";
import { SelectCidade } from "@/components/cidades/select/cidade";
import { useFilialStore } from "@/hooks/cidades/useFilial";
import { IRegistro } from "@/types/routes/filial";
import { TextAnimate } from "@/components/effects/textAnimate";
import { ScrollReveal } from "@/components/effects/scrollReveal";
import { setSecureCookie } from "@/util/nookies/client";

export const CidadeSection = () => {
  const { filiais, setSelectedCidade } = useFilialStore();
  const router = useRouter();

  const handleFilialSelecionada = (filiais: IRegistro[]) => {
    useFilialStore.setState({ filiais });
  };

  const handleCidadeSelecionada = (cidade: string) => {
    const filial = filiais.find((filial) => filial.cidade === cidade);
    if (filial) {
      setSelectedCidade(cidade);
      setSecureCookie("filialId", filial.id);
      router.push(`/`);
    }
  };

  return (
    <div className="relative h-screen flex flex-col lg:flex-row items-center justify-between px-5 lg:px-0  bg-gradient-to-b  from-[#000000] via-[#000D17] to-[#000D17]">
      <ScrollReveal className="md:flex-1 my-6 flex items-center justify-center mb-4 lg:mb-0">
        <div >
          <picture>
            <source
              srcSet="https://www.nrconexoes.com.br/img/LOGO_BRANCO_-_Inteiro.png"
              media="(min-width: 1024px)"
            />
            <source
              srcSet="https://www.nrconexoes.com.br/img/LOGO_BRANCO_-_Inteiro.png"
              media="(min-width: 768px)"
            />
            <img
              src="https://www.nrconexoes.com.br/img/LOGO_BRANCO_-_Inteiro.png"
              alt="Logo da NR Conexões"
              className="h-24 md:h-40 lg:h-64 w-auto object-contain"
            />
          </picture>
        </div>
      </ScrollReveal>
      <div className="lg:flex-1 h-full md:mb-80 mb-80  lg:mb-0 flex flex-col justify-center px-5 md:max-w-[66%] lg:max-w-[40%] lg:px-6">
        <ScrollReveal className="space-y-2 lg:space-y-4">
          <div>
            <TextAnimate
              text="Encontre-nos"
              className="text-3xl md:text-4xl lg:text-7xl font-regular font-semibold font-sans text-zinc-100 dark:text-foreground tracking-[-0.04em] z-20"
              type="popIn"
            />
          </div>
          <div>
            <TextAnimate
              text="perto de você"
              delay={1}
              className="text-3xl md:text-4xl lg:text-7xl font-regular font-semibold font-sans text-zinc-100 dark:text-foreground tracking-[-0.04em] z-20"
              type="popIn"
            />
          </div>
          <div>
            <TextAnimate
              text="Escolha uma cidade para conhecer nossas filiais"
              delay={3}
              className="text-muted-foreground text-xs md:text-sm lg:text-lg"
              type="shiftInUp"
            />
          </div>
          <div className="space-y-2 w-full md:w-[80%] lg:w-[60%] text-white">
            <SelectEstado onFilialSelecionada={handleFilialSelecionada} />
            <SelectCidade
              cidades={filiais}
              desabilitaInput={filiais.length === 0}
              onCidadeSelecionada={handleCidadeSelecionada}
            />
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};
