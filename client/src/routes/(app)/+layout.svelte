<script lang="ts">
    import HeaderApp from "$lib/components/utils/appHeader/+HeaderApp.svelte";
    import SidebarApp from "$lib/components/utils/sidebar/+SidebarApp.svelte";
    import * as Sidebar from "$lib/components/ui/sidebar/index.js";

    let { children } = $props();
    let sidebarOpen = $state(true);
</script>

<div class="w-full">
    <Sidebar.Provider bind:open={sidebarOpen} class="">
        <SidebarApp />
        <div class="w-screen max-h-screen overflow-auto">
            <main class="w-[96%] m-auto h-full">
                <HeaderApp />
                {@render children()}
            </main>
        </div>
    </Sidebar.Provider>
</div>
