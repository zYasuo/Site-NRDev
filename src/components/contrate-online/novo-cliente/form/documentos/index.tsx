"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { useNovoClienteForm } from "@/hooks/contrate-online/novo-cliente/useNovoCliente";
import { DocumentosSchema } from "@/components/contrate-online/novo-cliente/form/schema";
import { Icons } from "@/components/ui/icons";
import { fields } from "@/components/contrate-online/novo-cliente/form/documentos/campos";
import {
  FileUploader,
  FileUploaderContent,
  FileUploaderItem,
  FileInput,
} from "@/components/ui/file-input";
import { Paperclip } from "lucide-react";
import { z } from "zod";
import { cn } from "@/lib/utils";

export const FormDocumentos: React.FC<{
  onNext: () => void;
  onPrevious: () => void;
}> = ({ onNext, onPrevious }) => {
  const { formValues, setFormValues } = useNovoClienteForm();

  const form = useForm<z.infer<typeof DocumentosSchema>>({
    defaultValues: formValues,
    resolver: zodResolver(DocumentosSchema),
    mode: "onSubmit",
  });

  async function handleSubmit(data: z.infer<typeof DocumentosSchema>) {
    form.setValue("fotoCpfCnh", data.fotoCpfCnh);
    form.setValue("rgFrente", data.rgFrente);
    form.setValue("rgVerso", data.rgVerso);
    form.setValue("selfie", data.selfie);
    setFormValues(data);
    onNext();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {fields.map(({ name, label }) => (
            <FormField
              key={name}
              control={form.control}
              name={name}
              render={({ field }) => (
                <FormItem>
                  <label className="block text-sm font-medium">{label}</label>
                  <FileUploader
                    value={field.value ? [field.value] : []}
                    onValueChange={(files) => {
                      if (files && files.length > 0) {
                        field.onChange(files[0]);
                      } else {
                        field.onChange(null);
                      }
                    }}
                    dropzoneOptions={{
                      maxFiles: 1,
                      maxSize: 1024 * 1024 * 4,
                      accept: { "image/*": [".jpg", ".jpeg", ".png", ".gif"] },
                    }}
                    className="relative bg-background rounded-lg p-2"
                  >
                    <FileInput
                      className={cn(
                        "outline-dashed outline-1",
                        field.value && "outline-primary"
                      )}
                    >
                      <div className="flex items-center justify-center flex-col pt-3 pb-4 w-full">
                        <svg
                          className="w-8 h-8 mb-3"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 20 16"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                          />
                        </svg>
                        <p className="mb-1 text-sm">
                          <span className="font-semibold">Clique para enviar</span>
                          &nbsp; ou arraste e solte
                        </p>
                        <p className="text-xs">Apenas imagens são permitidas</p>
                      </div>
                    </FileInput>
                    <FileUploaderContent>
                      {field.value && (
                        <FileUploaderItem index={0}>
                          <Paperclip className="h-4 w-4 stroke-current" />
                          <span>{field.value.name}</span>
                        </FileUploaderItem>
                      )}
                    </FileUploaderContent>
                  </FileUploader>
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}
        </div>
        <div className="flex justify-between">
          <Button variant="outline" onClick={onPrevious}>
            Anterior
          </Button>
          <Button type="submit" className="text-white">
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
