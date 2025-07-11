<script lang="ts">
    import ScheduleTable from "$lib/components/page-ui/schedules/+ScheduleTable.svelte";
    import HeaderSchedule from "$lib/components/page-ui/schedules/HeaderSchedule.svelte";

    let currentTab = $state("");
    $effect(() => {
        if (currentTab === "today") {
            let query = "";
        }
    });
    let { data } = $props();
</script>

<h1 class="text-3xl my-5">Schedule</h1>
<HeaderSchedule />
<!-- Add Data from query -->
<ScheduleTable data={data.data} />
