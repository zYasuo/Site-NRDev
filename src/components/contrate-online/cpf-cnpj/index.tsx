"use client";
import { ScrollReveal } from "@/components/effects/scrollReveal";
import { FormContrateOnlineCPFCNPJ } from "@/components/contrate-online/cpf-cnpj/form";

export const CPFCNPJSection = () => {
  return (
    <div className="space-y-4">
      <ScrollReveal>
        <div className="mt-2">
          <FormContrateOnlineCPFCNPJ />
        </div>
      </ScrollReveal>
    </div>
  );
};
