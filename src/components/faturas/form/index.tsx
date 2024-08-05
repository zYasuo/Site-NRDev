"use client"

import { FormSchema } from '@/components/faturas/form/schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { useTransition } from 'react';
import { toast } from 'sonner';
import { Form, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { FloatingLabelInput } from '@/components/ui/float-input';
import { SearchIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Icons } from '@/components/ui/icons';
import { fetchFaturasPorCpfCnpj } from '@/app/(ui)/faturas/actions';
import { formatCpfCnpj } from '@/app/(ui)/faturas/utils';
import { useFaturasStore } from '@/hooks/faturas/useStoreFatura';


export const FormFaturas: React.FC = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    defaultValues: { cpfCnpj: '' },
    resolver: zodResolver(FormSchema),
    mode: 'onSubmit',
  });

  const [isPending, startTransition] = useTransition();
  const setCliente = useFaturasStore((state) => state.setCliente);
  const setFaturas = useFaturasStore((state) => state.setFaturas);

  async function handleAction(data: z.infer<typeof FormSchema>) {
    try {
      const { cliente, faturas } = await fetchFaturasPorCpfCnpj(data.cpfCnpj);
      if (!cliente) {
        toast('Infelizmente, não encontramos nada para você.', {
          description: 'Por favor, verifique o CPF/CNPJ fornecido e tente novamente.',
        });
        setFaturas([]);
        setCliente(null);
      } else if (faturas.length > 0) {
        setFaturas(faturas);
        setCliente(cliente);
        toast('Faturas encontradas', {
          description: 'Há faturas associadas ao CPF/CNPJ fornecido.',
        });
      } else {
        setFaturas([]);
        setCliente(cliente);
        toast('Tudo certo!', {
          description: 'Suas contas estão em dia.',
        });
      }
    } catch (error) {
      toast('Erro ao buscar faturas', {
        description: 'Ocorreu um erro ao buscar as faturas. Por favor, tente novamente mais tarde.',
      });
    }
  }

  return (
    <Form {...form}>
      <form 
        onSubmit={form.handleSubmit((data) => startTransition(() => handleAction(data)))} 
        action={async (e) => {
        
          const data = form.getValues();
          await startTransition(() => handleAction(data));
        }}
        className="relative z-10 flex space-x-3 p-3 border bg-background rounded-lg shadow-lg"
      >
        <div className="flex-[1_0_0%]">
          <FormField
            control={form.control}
            name="cpfCnpj"
            render={({ field }) => (
              <FormItem>
                <FloatingLabelInput
                  {...field}
                  id="cpfCnpj"
                  label="CPF ou CNPJ"
                  onChange={(e) => field.onChange(formatCpfCnpj(e.target.value))}
                  value={field.value}
                />
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex items-center">
          <Button size="icon" type="submit" className='lg:py-8 '>
            {isPending ? (
              <Icons.spinner className="animate-spin h-12 w-12" />
            ) : (
              <SearchIcon />
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
};