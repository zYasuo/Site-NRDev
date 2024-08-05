"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { FloatingLabelInput } from "@/components/ui/float-input";
import { Button } from "@/components/ui/button";
import { useNovoClienteForm } from "@/hooks/contrate-online/novo-cliente/useNovoCliente";
import { DadosPessoaisSchema } from "@/components/contrate-online/novo-cliente/form/schema";
import { Icons } from "@/components/ui/icons";
import { z } from "zod";
import { fetchClientePorEmail } from "@/app/contrate-online/actions/novo-cliente/select";
import { toast } from "sonner";
import { useState } from "react";
import { fields } from "@/components/contrate-online/novo-cliente/form/dados-pessoais/campos";

export const FormDadosPessoais: React.FC<{ onNext: () => void }> = ({
  onNext,
}) => {
  const { formValues, setFormValues } = useNovoClienteForm();

  const form = useForm<z.infer<typeof DadosPessoaisSchema>>({
    defaultValues: formValues,
    resolver: zodResolver(DadosPessoaisSchema),
    mode: "onSubmit",
  });

  const [isEmailValid, setIsEmailValid] = useState(true);

  const checkEmailExistence = async (email: string) => {
    try {
      const cliente = await fetchClientePorEmail(email);
      if (cliente) {
        toast.error("Email já cadastrado. Por favor, utilize outro email.");
        form.setError("email", {
          type: "manual",
          message: "Email já cadastrado.",
        });
        setIsEmailValid(false);
      } else {
        setIsEmailValid(true);
      }
    } catch (error) {
      toast.error("Erro ao verificar email. Por favor, tente novamente mais tarde.");
    }
  };

  async function handleSubmit(data: z.infer<typeof DadosPessoaisSchema>) {
    if (!isEmailValid) {
      toast.error("Email já cadastrado. Por favor, utilize outro email.");
      return;
    }
    setFormValues(data);
    onNext();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
        {fields.map(({ name, label, disabled, type, format, onBlur }) => (
          <FormField
            key={name}
            control={form.control}
            name={name}
            render={({ field }) => (
              <FormItem>
                <FloatingLabelInput
                  {...field}
                  id={name}
                  label={label}
                  type={type}
                  disabled={disabled}
                  onChange={format ? (e) => field.onChange(format(e.target.value)) : field.onChange}
                  onBlur={onBlur ? (e) => checkEmailExistence(e.target.value) : field.onBlur}
                />
                <FormMessage />
              </FormItem>
            )}
          />
        ))}
        <div>
          <Button type="submit" className="w-full lg:py-6 text-white">
            {form.formState.isSubmitting ? (
              <Icons.spinner className="animate-spin h-5 w-5" />
            ) : (
              <span>Próximo</span>
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
};