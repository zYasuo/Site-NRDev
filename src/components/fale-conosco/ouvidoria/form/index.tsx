"use client";

import { sendEmail } from "@/app/(ui)/fale-conosco/ouvidoria/actions";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { FloatingLabelInput } from "@/components/ui/float-input";
import { Button } from "@/components/ui/button";
import { OuvidoriaFormSchema, OuvidoriaFormSchemaType } from "@/components/fale-conosco/ouvidoria/form/schema";
import { formFields } from "@/components/fale-conosco/ouvidoria/form/campos";
import { useTransition } from "react";
import { Icons } from "@/components/ui/icons";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";

export const OuvidoriaForm: React.FC = () => {
  const form = useForm<OuvidoriaFormSchemaType>({
    resolver: zodResolver(OuvidoriaFormSchema),
    mode: "onSubmit",
  });

  const [isPending, startTransition] = useTransition();

  const handleSubmit = (data: OuvidoriaFormSchemaType) => {
    startTransition(async () => {
      try {
        await sendEmail(data);
        toast.success('Email enviado com sucesso!');
      } catch (error) {
        console.error('Erro:', error);
        toast.error('Erro ao enviar email.');
      }
    });
  };

  return (
    <Card className="p-6">
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
        {formFields.map(({ name, label, type, format, onBlur }) => (
          <FormField
            key={name}
            control={form.control}
            name={name}
            render={({ field }) => (
              <FormItem>
                {name === "mensagem" ? (
                  <Textarea
                    {...field}
                    id={name}
                    placeholder={label}
                    disabled={isPending}
                  />
                ) : (
                  <FloatingLabelInput
                    {...field}
                    id={name}
                    label={label}
                    type={type}
                    onChange={format ? (e) => field.onChange(format(e.target.value)) : field.onChange}
                    onBlur={onBlur ? (e) => field.onBlur() : undefined}
                    disabled={isPending}
                  />
                )}
                <FormMessage />
              </FormItem>
            )}
          />
        ))}
        <Button type="submit" className="w-full lg:py-6 text-white" disabled={isPending}>
          {isPending ? (
            <Icons.spinner className="animate-spin h-5 w-5" />
          ) : (
            <span>Enviar</span>
          )}
        </Button>
      </form>
    </Form>
        </Card>

  );
};