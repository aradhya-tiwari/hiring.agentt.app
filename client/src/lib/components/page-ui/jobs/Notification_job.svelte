<script>
    import ScrollArea from "$lib/components/ui/scroll-area/scroll-area.svelte";

    let {} = $props();
</script>

<ScrollArea
    class="h-[50%] overflow-auto border-2 shadow rounded-xl p-2 px-3 relative"
>
    <h1 class="text-md font-medium">Notifications</h1>
    {#each new Array(5) as item}
        <div
            class="w-full bg-white dark:bg-black h-auto max-h-40 pb-8 p-2 my-2 shadow text-xs border-2 relative rounded-xl"
        >
            <!--  sample notification -->
            <p class="text-gray-700 dark:text-gray-300">
                This is a new job Notification Lorem ipsum dolor, s Lorem,
            </p>
            <p class="absolute right-4 bottom-1 text-gray-500">Just now</p>
        </div>
    {/each}
</ScrollArea>
