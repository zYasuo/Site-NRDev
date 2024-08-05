import { NextRequest, NextResponse } from 'next/server';
import transporter from '@/lib/nodemailer';
import { OuvidoriaFormSchema } from '@/components/fale-conosco/ouvidoria/form/schema';
import { ZodError } from 'zod';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { nome, email, telefone, assunto, mensagem } = OuvidoriaFormSchema.parse(body);

    const mailOptions = {
      from: email,
      to: 'dansilvaagr@hotmail.com',
      subject: assunto,
      text: `Nome: ${nome}\nEmail: ${email}\nTelefone: ${telefone}\nMensagem: ${mensagem}`,
    };


    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Erro ao enviar email:', error);
    if (error instanceof ZodError) {
      return NextResponse.json({ error: 'Dados inválidos', details: error.errors }, { status: 400 });
    }
    return NextResponse.json({ error: 'Erro ao enviar email' }, { status: 500 });
  }
}
