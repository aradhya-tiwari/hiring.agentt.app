<script lang="ts">
    import Button from "$lib/components/ui/button/button.svelte";
    type propType = Array<{
        name: string;
        completed: boolean;
        slug: string;
    }>;
    let {} = $props();
</script>

<div class="flex flex-wrap justify-center md:justify-evenly gap-4 md:px-8">
    {#each new Array(5) as item, idx}
        <div
            class="md:w-60 w-[90%] bg-white border flex flex-col rounded-xl text-sm hover:scale-102 transition-all cursor-pointer shadow-lg max-w-[80%] p-3 m-1"
        >
            <b class="underline">Step {idx}</b>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <Button
                class="self-end my-3 shadow text-xs hover:scale-103 active:scale-100 "
                variant="outline">View Details</Button
            >
        </div>
    {/each}
</div>
