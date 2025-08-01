<script>
    import ScrollArea from "$lib/components/ui/scroll-area/scroll-area.svelte";
</script>

<ScrollArea
    class="h-[50%] bg-white/50 overflow-auto border px-3 shadow rounded-xl p-2"
>
    <h1 class="text-md font-medium p-2">Notes</h1>

    <div class="shadow border p-2 bg-accent rounded-lg">
        <div class="  flex justify-between">
            {#if true}
                <div class="rounded-full overflow-hidden w-12 h-12">
                    <img
                        src="https://placehold.co/600x400/960/111"
                        alt="Cover"
                        class="w-full h-full object-cover"
                    />
                </div>
            {:else}
                <div
                    class="w-full h-full bg-gray-300 flex items-center justify-center text-gray-600"
                >
                    No Icon
                </div>
            {/if}
            <span class="text-xs self-center underline text-gray-500"
                >Just now</span
            >
        </div>
        <p class="text-xs dark:text-gray-400 my-2 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex amet
            nulla rem temporibus, ea numquam animi reprehenderit cumque sequi
            reiciendis?
        </p>
    </div>
</ScrollArea>
