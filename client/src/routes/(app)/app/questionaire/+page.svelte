<script>
    import Questionaire from "$lib/components/page-ui/questionaire/+Questionaire.svelte";
    import * as Tabs from "$lib/components/ui/tabs/index.js";
    import { Button } from "$lib/components/ui/button";
    import { page } from "$app/state";
    import PageTitle from "$lib/components/utils/PageTitle.svelte";
    let curTab = $state("addQuestion");
    console.log(page.params);
</script>

<PageTitle title="Questionaire" />
<Tabs.Root bind:value={curTab} class="w-[400px]">
    <Tabs.List>
        <Tabs.Trigger value="addQuestion">+Add Questionaire</Tabs.Trigger>
        <Tabs.Trigger value="Analyse">Password</Tabs.Trigger>
    </Tabs.List>
    <Tabs.Content value="addQuestion">
        <Questionaire />
    </Tabs.Content>
    <Tabs.Content value="Analyse">
        <!-- Analysis compoentn -->
    </Tabs.Content>
    <Tabs.Content value="password">Change your password here.</Tabs.Content>
</Tabs.Root>
<Questionaire />
