import type { ColumnDef } from "@tanstack/table-core";
import type { scheduleTableType } from "./store.svelte"

export const scheduleColumns: ColumnDef<scheduleTableType>[] = [
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
