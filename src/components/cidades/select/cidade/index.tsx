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
import { useFilialStore } from '@/hooks/cidades/useFilial';
import { ISelectCidadeProps } from '@/components/cidades/select/interfaces';



export function SelectCidade({
  cidades,
  desabilitaInput,
  onCidadeSelecionada,
}: ISelectCidadeProps) {
  const { selectedCidade, setSelectedCidade } = useFilialStore();

  const handleCidadeSelecionada = useCallback((value: string) => {
    if (value !== selectedCidade) {
      onCidadeSelecionada(value);
      setSelectedCidade(value);
    }
  }, [onCidadeSelecionada, selectedCidade, setSelectedCidade]);

  useEffect(() => {
    if (selectedCidade && cidades.some(cidade => cidade.cidade === selectedCidade)) {
      handleCidadeSelecionada(selectedCidade);
    }
  }, [selectedCidade, handleCidadeSelecionada, cidades]);

  return (
    <Select
      disabled={desabilitaInput}
      onValueChange={handleCidadeSelecionada}
      value={selectedCidade}
    >
      <SelectTrigger >
        <SelectValue placeholder="Selecione uma Cidade" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Cidades</SelectLabel>
          {cidades.map((cidade) => {
            const partes = cidade.fantasia.split(" - ");
            const nomeCidade = partes[partes.length - 1];

            return (
              <SelectItem key={cidade.id} value={cidade.cidade}>
                {nomeCidade}
              </SelectItem>
            );
          })}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
