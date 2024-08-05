"use server";
import { OuvidoriaFormSchemaType } from "@/components/fale-conosco/ouvidoria/form/schema";

export async function sendEmail(data: OuvidoriaFormSchemaType) {
  const response = await fetch(`${process.env.NEXTAUTH_URL}/api/send/email/ouvidoria`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error('Erro ao enviar email');
  }

  return await response.json();
}
