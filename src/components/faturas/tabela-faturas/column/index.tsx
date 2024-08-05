import { createColumnHelper } from "@tanstack/react-table";
import { IFaturas } from "@/types/routes/faturas";
import { Badge } from "@/components/ui/badge";
import { ActionsCell } from "@/components/faturas/tabela-faturas/actions";
import { cn } from "@/lib/utils";

const columnHelper = createColumnHelper<IFaturas>();

export const columns = [
  columnHelper.accessor("valor", {
    header: "Valor",
    cell: (info) => {
      const valor = info.getValue();
      const formattedValue = parseFloat(valor).toLocaleString("pt-BR", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
      return `R$ ${formattedValue}`;
    },
  }),
  columnHelper.accessor("status", {
    header: "Status",
    cell: (info) => {
      const status = info.row.original.status;
      const dataVencimento = new Date(info.row.original.data_vencimento);
      const hoje = new Date();
      const diffTime = dataVencimento.getTime() - hoje.getTime();
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

      const statusColor = cn({
        "bg-green-500": diffDays >= 0,
        "bg-yellow-500": diffDays < 0 && diffDays >= -2,
        "bg-red-500": diffDays < -2,
      });

      return (
        <Badge className={`text-white ${statusColor}`}>
          {status === "A" ? "Aberto" : "Recebido"}
        </Badge>
      );
    },
  }),
  columnHelper.accessor("data_vencimento", {
    header: "Vencimento",
    cell: (info) => {
      const dataVencimento = new Date(info.getValue());
      const formattedDate = dataVencimento.toLocaleDateString("pt-BR");
      return formattedDate;
    },
  }),
  columnHelper.display({
    id: "actions",
    header: () => <span>Ações</span>,
    cell: (info) => <ActionsCell row={info.row.original} />,
  }),
];