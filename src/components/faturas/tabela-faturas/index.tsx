"use client";

import React from "react";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { IFaturas } from "@/types/routes/faturas";
import { columns } from "@/components/faturas/tabela-faturas/column";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ICliente } from "@/types/routes/clientes";


interface TabelaFaturasProps {
  data: IFaturas[];
  cliente: ICliente | null;
}
export const TabelaFaturas: React.FC<TabelaFaturasProps> = ({ data, cliente }) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  if (!data || data.length === 0) {
    return <div>Não há faturas disponíveis.</div>;
  }

  return (
    <Card className="p-6">
      <CardHeader>
        <CardTitle className="text-center text-xs md:text-lg">Faturas Disponíveis</CardTitle>
        <CardDescription className="text-center text-xs md:text-md">
          Olá, {cliente?.razao}, abaixo estão suas faturas disponíveis.
        </CardDescription>
      </CardHeader>
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHead key={header.id}>
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows.map((row) => (
            <TableRow key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <TableCell key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
};
