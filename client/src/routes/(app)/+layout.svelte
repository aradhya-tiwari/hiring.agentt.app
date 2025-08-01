<script lang="ts">
    import HeaderApp from "$lib/components/utils/header_app/+HeaderApp.svelte";
    import SidebarApp from "$lib/components/utils/sidebar/+SidebarApp.svelte";
    import * as Sidebar from "$lib/components/ui/sidebar/index.js";
    import { onNavigate } from "$app/navigation";

    let { children } = $props();
    let sidebarOpen = $state(true);

    onNavigate((navigation) => {
        if (!document.startViewTransition) return;

        return new Promise((resolve) => {
            document.startViewTransition(async () => {
                resolve();
                await navigation.complete;
            });
        });
    });
</script>

<div class="w-full">
    <Sidebar.Provider bind:open={sidebarOpen} class="">
        <SidebarApp />
        <Sidebar.Trigger class=" hidden md:block" title=" Open Sidebar "
        ></Sidebar.Trigger>
        <div class="w-screen rounded-md max-h-screen overflow-auto">
            <main class="w-[99%] m-auto h-full">
                <HeaderApp />
                {@render children()}
            </main>
        </div>
    </Sidebar.Provider>
</div>
