import { z } from "zod";
import { DocumentosSchema } from "@/components/contrate-online/nossos-servicos/upgrade-de-plano/form/schema";
export const fields: {
  name: keyof z.infer<typeof DocumentosSchema>;
  label: string;
}[] = [
  { name: "fotoCpfCnh", label: "FOTO CPF CNH" },
  { name: "rgFrente", label: "RG FRENTE" },
  { name: "rgVerso", label: "RG VERSO" },
  { name: "selfie", label: "SELFIE" },
];
