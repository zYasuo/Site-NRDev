"use client"
import { ThemeProvider } from "@/providers/theme";
import { Toaster } from "@/components/ui/sonner"
import CookieConsent from "@/components/global/cookies";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
        <Toaster />
        <CookieConsent />
        {children}
    </ThemeProvider>
  );
}
