<script lang="ts">
    import HeaderApp from "$lib/components/my/appHeader/+HeaderApp.svelte";
    import SidebarApp from "$lib/components/my/sidebar/+SidebarApp.svelte";
    import * as Sidebar from "$lib/components/ui/sidebar/index.js";

    let { children } = $props();
    let sidebarOpen = $state(true);
</script>

<div class="">
    <Sidebar.Provider bind:open={sidebarOpen}>
        <SidebarApp />
        <Sidebar.Trigger class="" title=" Open Sidebar "></Sidebar.Trigger>
        <div class="w-screen overflow-hidden">
            <main class="w-full h-screen overflow-auto">
                <HeaderApp />
                {@render children()}
            </main>
        </div>
    </Sidebar.Provider>
</div>
