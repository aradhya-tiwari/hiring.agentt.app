<script lang="ts">
    import HeaderApp from "$lib/components/utils/header_app/+HeaderApp.svelte";
    import SidebarApp from "$lib/components/utils/sidebar/+SidebarApp.svelte";
    import * as Sidebar from "$lib/components/ui/sidebar/index.js";

    let { children } = $props();
    let sidebarOpen = $state(true);
</script>

<div class="w-full">
    <Sidebar.Provider bind:open={sidebarOpen} class="">
        <SidebarApp />
        <Sidebar.Trigger class="sticky" title=" Open Sidebar "
        ></Sidebar.Trigger>
        <div class="w-screen max-h-screen overflow-auto">
            <main class="w-[96%] m-auto h-full">
                <HeaderApp />
                {@render children()}
            </main>
        </div>
    </Sidebar.Provider>
</div>
