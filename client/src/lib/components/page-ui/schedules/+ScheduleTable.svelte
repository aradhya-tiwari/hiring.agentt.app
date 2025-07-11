<script lang="ts">
    import DataTable from "$lib/components/page-ui/schedules/dataTable/DataTable.svelte";
    import DataTableCheckbox from "$lib/components/page-ui/schedules/dataTable/CheckboxDataTable.svelte";
    import type { scheduleTableType } from "$lib/components/page-ui/schedules/stores/schedule.svelte";
    import Button from "$lib/components/ui/button/button.svelte";
    import { renderComponent } from "$lib/components/ui/data-table";
    import type { ColumnDef } from "@tanstack/table-core";
    import { scheduleColumns } from "./stores/Columns";
    import ScheduleDataTable from "./zzzScheduleDataTable.svelte";
    import SliderSchedule from "./SliderSchedule.svelte";
    import { scheduleDrawerStore } from "./stores/drawer.svelte";

    let { data = [] } = $props();
    let openDrawer = $state(false);
</script>

<!-- Todo change it to data -->
<DataTable {data} columns={scheduleColumns} />
<SliderSchedule bind:open={scheduleDrawerStore.open} />
