import React, { useEffect, useCallback } from 'react';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { fetchFiliais } from '@/app/cidades/actions';
import { useFilialStore } from '@/hooks/cidades/useFilial';
import { ISelectEstadoProps } from '@/components/cidades/select/interfaces';


export function SelectEstado({ onFilialSelecionada }: ISelectEstadoProps) {
  const { setFiliais, selectedEstado, setSelectedEstado, filiais } = useFilialStore();

  const handleFilialPorEstado = useCallback(async (AEstado: string) => {
    if (AEstado !== selectedEstado) {
      try {
        const dadosFilial = await fetchFiliais({ AQuery: AEstado, ACampo: "complemento" });
        onFilialSelecionada(dadosFilial);
        setFiliais(dadosFilial);
        setSelectedEstado(AEstado);
      } catch (error) {
        console.error('Erro ao buscar filiais:', error);
      }
    }
  }, [onFilialSelecionada, setFiliais, setSelectedEstado, selectedEstado]);

  useEffect(() => {
    if (selectedEstado && filiais.length === 0) {
      handleFilialPorEstado(selectedEstado);
    }
  }, [selectedEstado, handleFilialPorEstado, filiais.length]);

  return (
    <Select onValueChange={handleFilialPorEstado} value={selectedEstado}>
      <SelectTrigger >
        <SelectValue placeholder="Selecione um Estado" className='' />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Estados</SelectLabel>
          <SelectItem value="SP">São Paulo</SelectItem>
          <SelectItem value="MG">Minas Gerais</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
