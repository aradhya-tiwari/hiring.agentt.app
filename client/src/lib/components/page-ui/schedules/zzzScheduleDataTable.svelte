<script lang="ts">
    import {
        createTable,
        type ColumnDef,
        type Table,
        getCoreRowModel,
        getPaginationRowModel,
        getFilteredRowModel,
        getSortedRowModel,
        type SortingState,
    } from "@tanstack/table-core";
    import { Input } from "$lib/components/ui/input";
    import { Button } from "$lib/components/ui/button";
    import * as TableUI from "$lib/components/ui/table";
    import { ChevronDown, ChevronUp } from "@lucide/svelte";
    import type { scheduleTableType } from "./stores/schedule.svelte.js";
    import FlexRender from "$lib/components/ui/data-table/flex-render.svelte";

    // Sample data for scheduleTableType
    const initialData: scheduleTableType[] = [
        {
            id: 1,
            date: new Date("2025-07-01T10:00:00Z"),
            type: "Interview",
            name: "Candidate A Interview",
            candidateId: 101,
            candidateName: "John Doe",
            notes: [{ by: 201, text: "Initial interview scheduled" }],
            assignedTo: 201,
            status: "Scheduled",
        },
        {
            id: 2,
            date: new Date("2025-07-02T14:30:00Z"),
            type: "Meeting",
            name: "Team Sync",
            candidateId: 102,
            candidateName: "Jane Smith",
            notes: [{ by: 202, text: "Follow-up call" }],
            assignedTo: 202,
            status: "Completed",
        },
        {
            id: 3,
            date: new Date("2025-07-03T09:00:00Z"),
            type: "Assessment",
            name: "Technical Assessment",
            candidateId: 103,
            candidateName: "Peter Jones",
            notes: [{ by: 201, text: "Technical assessment" }],
            assignedTo: 201,
            status: "Pending",
        },
        {
            id: 4,
            date: new Date("2025-07-04T11:00:00Z"),
            type: "Interview",
            name: "HR Interview",
            candidateId: 104,
            candidateName: "Alice Brown",
            notes: [{ by: 203, text: "HR interview" }],
            assignedTo: 203,
            status: "Scheduled",
        },
    ];

    let data = $state<scheduleTableType[]>(initialData);
    let globalFilter = $state("");
    let sorting = $state<SortingState>([]);
    let pagination = $state({
        pageIndex: 0,
        pageSize: 10,
    });

    const columnDefs: ColumnDef<scheduleTableType>[] = [
        {
            accessorKey: "id",
            header: "ID",
            cell: (info) => info.getValue(),
        },
        {
            accessorKey: "date",
            header: "Date",
            cell: (info) => (info.getValue() as Date).toLocaleDateString(),
        },
        {
            accessorKey: "type",
            header: "Type",
            cell: (info) => info.getValue(),
        },
        {
            accessorKey: "name",
            header: "Name",
            cell: (info) => info.getValue(),
        },
        {
            accessorKey: "candidateId",
            header: "Candidate ID",
            cell: (info) => info.getValue(),
        },
        {
            accessorKey: "candidateName",
            header: "Candidate Name",
            cell: (info) => info.getValue(),
        },
        {
            accessorKey: "notes",
            header: "Notes",
            cell: (info) =>
                (info.getValue() as Array<{ by: number; text: string }>)
                    .map((n) => n.text)
                    .join(", "),
        },
        {
            accessorKey: "assignedTo",
            header: "Assigned To",
            cell: (info) => info.getValue(),
        },
        {
            accessorKey: "status",
            header: "Status",
            cell: (info) => info.getValue(),
        },
    ];

    // Svelte 5: derive the table reactively from other state
    const table = createTable({
        data: data,
        columns: columnDefs,
        state: {
            globalFilter: globalFilter,
            sorting: sorting,
            pagination: pagination,
        },
        onStateChange: (updater) => {
            let newState;
            if (typeof updater === "function") {
                newState = updater(table.getState());
            } else {
                newState = updater;
            }
            if (newState.globalFilter !== undefined)
                globalFilter = newState.globalFilter;
            if (newState.sorting !== undefined) sorting = newState.sorting;
            if (newState.pagination !== undefined)
                pagination = newState.pagination;
        },
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getSortedRowModel: getSortedRowModel(),
        renderFallbackValue: null,
    });

    function handleSorting(header: any) {
        if (!header.column) {
            return;
        }
        const handler = header.column.getToggleSortingHandler();
        if (handler) {
            handler(header.column.getCanSort());
        }
    }

    function goToPreviousPage() {
        table.previousPage();
    }

    function goToNextPage() {
        table.nextPage();
    }
</script>

<div class="w-full">
    <div class="flex items-center py-4">
        <Input
            placeholder="Filter all columns..."
            type="text"
            class="max-w-sm"
            bind:value={globalFilter}
        />
    </div>
    <div class="rounded-md border">
        {#if table}
            <TableUI.Root>
                <TableUI.Header>
                    {#each table.getHeaderGroups() as headerGroup}
                        <TableUI.Row>
                            {#each headerGroup.headers as header}
                                <TableUI.Head
                                    class="[&:has([role=checkbox])]:pl-3"
                                >
                                    {#if !header.isPlaceholder}
                                        <Button
                                            variant="ghost"
                                            onclick={() =>
                                                handleSorting(header)}
                                        >
                                            <FlexRender
                                                content={header.column.columnDef
                                                    .header}
                                                context={header.getContext()}
                                            />
                                            {#if header.column.getIsSorted() === "asc"}
                                                <ChevronUp
                                                    class="ml-2 h-4 w-4"
                                                />
                                            {:else if header.column.getIsSorted() === "desc"}
                                                <ChevronDown
                                                    class="ml-2 h-4 w-4"
                                                />
                                            {/if}
                                        </Button>
                                    {/if}
                                </TableUI.Head>
                            {/each}
                        </TableUI.Row>
                    {/each}
                </TableUI.Header>
                <TableUI.Body>
                    {#each table.getRowModel().rows as row}
                        <TableUI.Row>
                            {#each row.getVisibleCells() as cell}
                                <TableUI.Cell
                                    class="[&:has([role=checkbox])]:pl-3"
                                >
                                    <FlexRender
                                        content={cell.column.columnDef.cell}
                                        context={cell.getContext()}
                                    />
                                </TableUI.Cell>
                            {/each}
                        </TableUI.Row>
                    {/each}
                </TableUI.Body>
            </TableUI.Root>
        {/if}
    </div>
    <div class="flex items-center justify-end space-x-2 py-4">
        <Button
            variant="outline"
            size="sm"
            onclick={goToPreviousPage}
            disabled={!table.getCanPreviousPage()}
        >
            Previous
        </Button>
        <Button
            variant="outline"
            size="sm"
            onclick={goToNextPage}
            disabled={!table.getCanNextPage()}
        >
            Next
        </Button>
    </div>
</div>
