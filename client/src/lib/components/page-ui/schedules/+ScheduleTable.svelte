<script lang="ts">
    import DataTable from "$lib/components/page-ui/schedules/dataTable/DataTable.svelte";
    import DataTableCheckbox from "$lib/components/page-ui/schedules/dataTable/CheckboxDataTable.svelte";
    import type { scheduleTableType } from "$lib/components/page-ui/schedules/stores/store.svelte";
    import Button from "$lib/components/ui/button/button.svelte";
    import { renderComponent } from "$lib/components/ui/data-table";
    import type { ColumnDef } from "@tanstack/table-core";
    import { scheduleColumns } from "./stores/Columns";
    import ScheduleDataTable from "./ScheduleDataTable.svelte";
    import SliderSchedule from "./SliderSchedule.svelte";
    import { scheduleDrawerStore } from "./stores/drawer.svelte";

    let { data } = $props();
    let openDrawer = $state(false);
    const dataLocal: Array<scheduleTableType> = [
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
</script>

<!-- Todo change it to data -->
<DataTable data={dataLocal} columns={scheduleColumns} />
<SliderSchedule bind:open={scheduleDrawerStore.open} />
