import { Icons } from "@/components/ui/icons";

export const LoadingMessage: React.FC = () => (
  <div className="flex flex-col items-center justify-center h-screen">
    <Icons.spinner className="animate-spin h-10 w-10 mb-4" />
    <p className="text-lg font-semibold text-primary">
      Muito bem, estamos finalizando seu cadastro...
    </p>
  </div>
);
