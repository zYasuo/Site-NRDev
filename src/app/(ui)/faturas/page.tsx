import FaturasSection from "@/components/faturas";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "NR Conexões - Faturas",
  description: "Aqui você encontra todas as informações sobre suas faturas.",
};

export default function Page() {
  return (
    <>
      <FaturasSection />
    </>
  );
}
