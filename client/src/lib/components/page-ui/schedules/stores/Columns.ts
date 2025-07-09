import type { ColumnDef } from "@tanstack/table-core";
import type { scheduleTableType } from "./store.svelte"
import { renderComponent } from "$lib/components/ui/data-table";
import CheckboxDataTable from "../dataTable/CheckboxDataTable.svelte";

export const scheduleColumns: ColumnDef<scheduleTableType>[] = [
    {
        id: "select",
        header: ({ table }) =>
            renderComponent(CheckboxDataTable, {
                checked: table.getIsAllPageRowsSelected(),
                indeterminate:
                    table.getIsSomePageRowsSelected() &&
                    !table.getIsAllPageRowsSelected(),
                onCheckedChange: (value) => table.toggleAllPageRowsSelected(!!value),
                "aria-label": "Select all",
            }),
        cell: ({ row }) =>
            renderComponent(CheckboxDataTable, {
                checked: row.getIsSelected(),
                onCheckedChange: (value) => row.toggleSelected(!!value),
                "aria-label": "Select row",
            }),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "type",
        header: "Type",
    },
    {
        accessorKey: "name",
        header: "Title",
    },
    {
        accessorKey: "candidateName",
        header: "Candidate",
    },
    {
        accessorKey: "status",
        header: "Status",
    },
    {
        accessorKey: "assignedTo",
        header: "Assigned To",
    },
    {
        accessorKey: "notes",
        header: "Notes",
    },
];
