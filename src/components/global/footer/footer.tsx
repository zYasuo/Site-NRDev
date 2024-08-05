"use client";
import { siteConfig } from "@/config/site";
import { docsConfig } from "@/config/caminhos";
import { Shell } from "@/components/global/footer/shell";
import Link from "next/link";
import { EnvelopeClosedIcon, MobileIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { ModeToggle } from "@/components/global/theme";
import { TextQuote } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="w-full border-t bg-background">
      <Shell as="div">
        <section
          id="footer-content"
          aria-labelledby="footer-content-heading"
          className="flex flex-col gap-10 lg:flex-row lg:gap-20"
        >
          <section
            id="footer-branding"
            aria-labelledby="footer-branding-heading"
            className="flex flex-col gap-3"
          >
            <Link href="/" className="flex w-fit items-center space-x-2 pb-3">
              <span className="font-bold">{siteConfig.name}</span>
              <span className="sr-only">Home</span>
            </Link>
            <p className="text-xs text-muted-foreground">
              R. Quatorze, 4035 - Vila Elizabeth , Rio Claro - SP, 13504-164
            </p>
            <div className="inline-flex text-muted-foreground">
              <p className="text-xs">CNPJ: 10.257.362/0001-16</p>
            </div>
            <Link
              href="contato@nrtelecom.com.br"
              className="inline-flex text-muted-foreground"
            >
              <EnvelopeClosedIcon className="mr-2" />{" "}
              <p className="text-xs">contato@nrtelecom.com.br</p>
            </Link>

            <Link
              href="https://api.whatsapp.com/send?phone=558002001273"
              className="inline-flex text-muted-foreground"
            >
              <MobileIcon className="mr-2" />{" "}
              <p className="text-xs">0800 200 1273</p>
            </Link>
          </section>
          <section
            id="footer-links"
            aria-labelledby="footer-links-heading"
            className="grid flex-1 grid-cols-1 gap-10 xxs:grid-cols-2 sm:grid-cols-5 xl:pl-20"
          >
            {docsConfig.sidebarNav.map((item) => (
              <div key={item.title} className="space-y-3">
                <h4 className="text-base font-medium">{item.title}</h4>
                <ul className="space-y-3">
                  {item.items.map((link: any) => (
                    <li key={link.title}>
                      <Link
                        href={link.href || ""}
                        target={link?.external ? "_blank" : undefined}
                        rel={link?.external ? "noreferrer" : undefined}
                        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {link.title}
                        <span className="sr-only">{link.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </section>
        </section>
        <section
          id="footer-bottom"
          aria-labelledby="footer-bottom-heading"
          className="flex items-center space-x-4"
        >
          <div className="flex-1 text-left text-sm leading-loose text-muted-foreground">
            <p>
              © 2008-{new Date().getFullYear()} {siteConfig.name}. Todos os
              direitos reservados.
            </p>
          </div>
          <div className="flex items-center space-x-1">
            <Link
              href={siteConfig.links.login}
              target="_blank"
              rel="noreferrer"
              className={cn(
                buttonVariants({
                  size: "icon",
                  variant: "ghost",
                })
              )}
            >
              NR
              <span className="sr-only">GitHub</span>
            </Link>
            <ModeToggle />
          </div>
        </section>
      </Shell>
    </footer>
  );
}
