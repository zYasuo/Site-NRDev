import { BreadcrumbWithCustomSeparator } from "@/components/contrate-online/breadcrumb";
import HeaderContrateOnline from "@/components/contrate-online/header";
import { SiteFooter } from "@/components/global/footer/footer";
import Providers from "@/providers";

interface AppLayoutProps {
  children: React.ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <>
      <Providers>
        <HeaderContrateOnline />
        <main className="md:h-full h-full">
          <div className="mx-auto flex w-full flex-col justify-center px-5 py-12 lg:py-0 md:h-[unset] md:max-w-[66%] lg:h-[100vh] lg:max-w-[90%] lg:px-6 xl:pl-0 ">
            <div className="my-auto mb-auto mt-8 flex flex-col md:mt-[70px] md:max-w-full lg:mt-auto lg:max-w-[55%] relative">
              <div className="absolute -top-10">
                <BreadcrumbWithCustomSeparator />
              </div>

              {children}
            </div>
            <div className="absolute right-0 hidden h-full min-h-[100vh] xl:block xl:w-[40vw] 2xl:w-[34vw] border border-r-primary/15">
              <div className="absolute flex h-full w-full flex-col items-end justify-center">
                <picture>
                  <source
                    srcSet="https://placehold.co/870x1440"
                    media="(min-width: 1536px)"
                  />
                  <source
                    srcSet="https://placehold.co/768x1080"
                    media="(min-width: 1280px)"
                  />
                  <img
                    src="https://placehold.co/768x1080"
                    alt="Cidades que Atendemos - NR Conexões"
                    className="h-full w-full object-cover"
                  />
                </picture>
              </div>
            </div>
          </div>
        </main>
      </Providers>
    </>
  );
}
