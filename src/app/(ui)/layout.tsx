import { SiteFooter } from "@/components/global/footer/footer";
import { SiteHeader } from "@/components/global/header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <SiteHeader />
      <main className="flex-1 dark:bg-background/15">{children}</main>
      <SiteFooter />
    </>
  );
}
