import type { ColumnDef } from "@tanstack/table-core";
import type { candidatesType } from '../../../../../../design/schema';
import { renderComponent } from "$lib/components/ui/data-table";
import CheckboxDataTable from "../dataTable/CheckboxDataTableCandidate.svelte";
import { Button } from '$lib/components/ui/button';
import Icon from "../../../utils/Icon.svelte";
import DropDownCandidateTable from "../dataTable/DropDownCandidateTable.svelte";
import ButtonCandidateTable from "../dataTable/ButtonCandidateTable.svelte";
import { goto } from "$app/navigation";

export const candidateColumns: ColumnDef<candidatesType>[] = [
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
        accessorKey: "name",
        header: ({ column }) => {
            return renderComponent(ButtonCandidateTable, ({
                variant: "ghost",
                title: "Name",
                onclick: () => column.toggleSorting(column.getIsSorted() === "asc"),
            }));
        },
        cell: ({ row }) => row.getValue("name"),
    },
    {
        accessorKey: "email",
        header: "Email",
        cell: ({ row }) => row.getValue("email"),
    },
    {
        accessorKey: "phone",
        header: "Phone",
        cell: ({ row }) => row.getValue("phone"),
    },
    {
        accessorKey: "createdAt",
        header: ({ column }) => {
            return renderComponent(ButtonCandidateTable, ({
                variant: "ghost",
                onclick: () => column.toggleSorting(column.getIsSorted() === "asc"),
                title: "Created At",
            }));
        },
        cell: ({ row }) => new Date(row.getValue("createdAt")).toLocaleDateString(),
    },
    {
        accessorKey: "description",
        header: "Description",
        cell: ({ row }) => row.getValue("description"),
        maxSize: 0
    },
    {
        id: "actions",
        enableHiding: false,
        cell: ({ row }) => {
            const candidate = row.original;

            return renderComponent(DropDownCandidateTable, {
                title: "View",
                label: "More Options",
                options: [{ name: "View Resume", value: 'resume', onClick: () => { goto("/resume") } }]
            });
        },
    },
];
