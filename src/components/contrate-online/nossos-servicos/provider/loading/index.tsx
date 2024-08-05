import { Icons } from "@/components/ui/icons";

export const LoadingMessage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Icons.spinner className="animate-spin h-12 w-12 text-primary mb-4" />
      <div className="text-center text-md md:text-lg font-medium font-sans dark:text-primary/80">
        Aguarde um instante, estamos preparando algo especial para você...
      </div>
    </div>
  );
};
