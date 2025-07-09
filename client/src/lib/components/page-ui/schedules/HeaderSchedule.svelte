<script lang="ts">
    import * as Tabs from "$lib/components/ui/tabs/index";
    import Input from "$lib/components/ui/input/input.svelte";
    import Button from "$lib/components/ui/button/button.svelte";

    let tab = $state<"today" | "this_week">("today");
</script>

<Tabs.Root bind:value={tab} class="">
    <Tabs.List class="">
        <Tabs.Trigger value="today" class="data-[state=active]:bg-white "
            >Today</Tabs.Trigger
        >
        <Tabs.Trigger value="this_week" class="">This Week</Tabs.Trigger>
    </Tabs.List>
    <Tabs.Content value="today" class="">
        <div>today</div>
    </Tabs.Content>
    <Tabs.Content value="this_week">
        <div>this week</div>
    </Tabs.Content>
</Tabs.Root>
