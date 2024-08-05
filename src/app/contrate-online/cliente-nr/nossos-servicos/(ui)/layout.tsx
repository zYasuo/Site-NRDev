import { ClienteProvider } from "@/providers/nossos-servicos";

interface AppLayoutProps {
  children: React.ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <>
      <ClienteProvider>
        {children}
      </ClienteProvider>
    </>
  );
}
