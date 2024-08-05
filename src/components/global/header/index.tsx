"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  HeaderLogo,
  MainNav,
  MobileNav,
  siteConfig,
  ModeToggle,
  cn,
  FaUserAlt,
  buttonVariants,
} from "@/components/global/header/imports/index";
import { SelectCidade } from "@/components/cidades/select/cidade";
import { useFilialStore } from "@/hooks/cidades/useFilial";
import { setCookie } from "nookies";
import { encrypt } from "@/lib/crypto";
import { SelectEstado } from "@/components/cidades/select/estado";
import { IRegistro } from "@/types/routes/filial";
import { setSecureCookie } from "@/util/nookies/client";

export function SiteHeader() {
  const { filiais, setSelectedCidade } = useFilialStore();
  const pathname = usePathname();

  const handleFilialSelecionada = (filiais: IRegistro[]) => {
    useFilialStore.setState({ filiais });
  };

  const handleCidadeSelecionada = (cidade: string) => {
    const filial = filiais.find((filial) => filial.cidade === cidade);
    if (filial) {
      setSelectedCidade(cidade);
      setSecureCookie("filialId", filial.id);
      window.location.href = pathname;
    }
  };

  return (
    <header className="fixed top-0 z-50 w-full bg-background font-sans font-regular">
      <div className="container flex h-12 max-w-screen-2xl items-center">
        <div className="md:block hidden">
          <HeaderLogo />
        </div>
        <MainNav />
        <MobileNav />
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className=" flex-1 md:w-[250px] w-auto md:flex-none flex items-center space-x-2">
            <SelectEstado onFilialSelecionada={handleFilialSelecionada} />
            <SelectCidade
              cidades={filiais}
              desabilitaInput={filiais.length === 0}
              onCidadeSelecionada={handleCidadeSelecionada}
            />
          </div>
          <nav className="flex items-center">
            <Link
              href={siteConfig.links.login}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={cn(
                  buttonVariants({
                    variant: "ghost",
                  })
                )}
              >
                <FaUserAlt className="h-4 w-4" />
                <span className="sr-only">Entrar</span>
              </div>
            </Link>
            {/* <ModeToggle /> */}
          </nav>
        </div>
      </div>
    </header>
  );
}
