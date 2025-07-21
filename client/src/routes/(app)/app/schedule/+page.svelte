<script lang="ts">
    import ScheduleTable from "$lib/components/page-ui/schedules/+ScheduleTable.svelte";
    import HeaderSchedule from "$lib/components/page-ui/schedules/HeaderSchedule.svelte";
    import PageTitle from "$lib/components/utils/PageTitle.svelte";

    let currentTab = $state("");
    $effect(() => {
        if (currentTab === "today") {
            let query = "";
        }
    });
    let { data } = $props();
</script>

<PageTitle title="Schedules" />
<HeaderSchedule />
<!-- Add Data from query -->
<ScheduleTable data={data.data} />
