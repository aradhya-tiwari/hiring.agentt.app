<script lang="ts">
    import { Progress } from "$lib/components/ui/progress/index.js";
    let totalSteps = 5;
    let completed = 3;

    let allSteps = [
        {
            name: "resume shortlisting",
            completed: true,
        },
        {
            name: "interview scheduling",
            completed: true,
        },
        {
            name: "candidate feedback",
            completed: false,
        },
        {
            name: "offer negotiation",
            completed: false,
        },
        {
            name: "hiring decision",
            completed: false,
        },
    ];
</script>

<div
    class="h-1 w-full relative flex rounded-full bg-gray-800 dark:bg-gray-200 items-center justify-around"
>
    {#each allSteps as item, idx}
        <!-- content here -->
        <div
            class="w-3 h-3 border-2
        {item.completed
                ? 'bg-gray-800 dark:bg-white'
                : 'bg-white dark:bg-gray-800'}
         border-gray-800 text-center dark:border-white rounded-full"
        >
            {#if idx === completed - 1}
                <!-- <div
                    class="border px-2 rounded-full text-xs text-white dark:text-black bg-black dark:bg-white border-black w-max p-1 mt-3 z-0"
                >
                    {"Here is the step name" + "..."}
                </div> -->
            {/if}
        </div>
    {/each}
</div>
