<script lang="ts">
    import * as Card from "$lib/components/ui/card/index.js";
    import type { jobType } from "$lib/components/page-ui/jobs/states/jobs.svete";
    import { Button } from "$lib/components/ui/button";
    import { goto } from "$app/navigation";

    let { job }: { job: jobType } = $props();
</script>

<Card.Root class="min-w-xs pt-0 justify-between overflow-hidden">
    <div class="relative h-40 w-full">
        {#if job.coverImg_url}
            <img
                src={job.coverImg_url}
                alt="Cover"
                class="w-full h-full object-cover"
            />
        {:else}
            <div
                class="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500"
            >
                No Cover Image
            </div>
        {/if}
        {#if job.iconUrl}
            <img
                src={job.iconUrl}
                alt="Icon"
                class="absolute -bottom-8 left-4 w-16 h-16 rounded-full border-2 border-white shadow-md object-cover"
            />
        {:else}
            <div
                class="absolute -bottom-8 left-4 w-16 h-16 rounded-full border-2 border-white shadow-md bg-gray-300 flex items-center justify-center text-gray-600"
            >
                No Icon
            </div>
        {/if}
    </div>
    <!-- <Card.Header class="pt-10"></Card.Header> -->
    <Card.Content class="flex-grow pt-5 space-y-2">
        <Card.Title>{job.title}</Card.Title>
        <Card.Description
            >{job.role} - {job.location} ({job.mode})</Card.Description
        >
        <p class="text-sm text-gray-600 mb-2">
            Exp: {job.minExperience} years
        </p>
        <div class="flex gap-1 flex-wrap">
            {#each job.technologies.split(",") as item}
                <span
                    class="border p-1 rounded-full bg-[#119fcf] text-white text-xs px-2 py-1"
                >
                    {item.trim()}
                </span>
            {/each}
        </div>
    </Card.Content>
    <Card.Footer class="flex justify-end px-4">
        <Button
            variant="outline"
            class="shadow"
            onclick={() => goto(`/app/jobs/${job.id}`)}>View Details</Button
        >
    </Card.Footer>
</Card.Root>
