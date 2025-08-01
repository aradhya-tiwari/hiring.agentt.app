<script lang="ts">
    import type { PageData } from "./$types";
    import * as Card from "$lib/components/ui/card/index.js";
    import { Button } from "$lib/components/ui/button";
    import type { jobType } from "$lib/components/page-ui/jobs/states/jobs.svete";
    import ProgressBarJob from "$lib/components/page-ui/jobs/ProgressBar_Job.svelte";
    import RightSidebar from "$lib/components/page-ui/jobs/RightSidebar.svelte";
    import NotificationJob from "$lib/components/page-ui/jobs/Notification_job.svelte";
    import NotesJob from "$lib/components/page-ui/jobs/Notes_job.svelte";
    import ProcessJob from "$lib/components/page-ui/jobs/Process_Job.svelte";
    import ScrollArea from "$lib/components/ui/scroll-area/scroll-area.svelte";

    let { data } = $props();

    let job: jobType = {
        id: 5,
        title: "Project Manager",
        description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos quis expedita saepe illo voluptate mollitia porro? Corrupti voluptatibus ratione blanditiis ab numquam tempore adipisci dolor placeat natus consequuntur itaque, alias in omnis ex, ullam vero vel, veniam earum amet sed nesciunt architecto sit iure! Repudiandae vitae earum nobis! Laboriosam velit modi similique non fugiat. Labore, laborum sapiente. Vitae alias quia possimus corrupti voluptate asperiores at sunt, tempora ad. Eaque cumque pariatur veniam, adipisci dolore dolor earum sapiente, rerum qui hic dolorum deleniti vel explicabo quo culpa necessitatibus quas fugiat sunt officiis sequi! Rem quos id dolorem doloremque saepe quisquam, architecto eius similique voluptas aliquid exercitationem. Repellendus quod autem laboriosam. Ut ipsum in vero repellat, soluta, quisquam non voluptate sint veniam necessitatibus cupiditate ipsam sit ducimus sed, suscipit incidunt? Sequi sit, ut ratione, beatae libero itaque sed accusamus deleniti alias cupiditate numquam, sint quis incidunt aperiam ullam? In iusto, laboriosam explicabo eos, et distinctio maxime quas dignissimos molestiae nulla sint ex fugit harum quo ab architecto porro illum officia blanditiis sequi qui. Quasi expedita sapiente nesciunt eligendi rem fugit perspiciatis soluta nobis, odio assumenda aut eius itaque nisi adipisci? Quia numquam deserunt beatae ipsam quidem pariatur, quam autem! Enim, molestiae eligendi.",
        role: "Scrum Master",
        minExperience: 7,
        technologies: "Agile, Jira, Confluence",
        location: "On-site",
        mode: "Full-time",
        documents: [],
        extraInfo: {},
        iconUrl: "https://placehold.co/10",
        coverImg_url: "https://placehold.co/600x400",
        slug: "project-manager", // Add a sample slug
    };
</script>

{#if job}
    <div class="flex w-full gap-5 justify-between lg:p-2">
        <ScrollArea
            class="container h-[88vh] lg:w-[65%] relative mx-auto shrink-0"
        >
            <!-- Tag -->
            <span
                class="absolute right-5 top-1 z-50 border-white dark:border-primary-foreground border-3 bg-black dark:bg-white text-white dark:text-black px-4 rounded-full py-1"
            >
                {"Taking Applications"}
            </span>
            <Card.Root
                class="w-full border bg-primary-foreground max-w-4xl mx-auto shadow-lg rounded-lg overflow-hidden"
            >
                <div class="relative h-48 w-full">
                    {#if job.coverImg_url}
                        <img
                            src={job.coverImg_url}
                            alt="Cover"
                            class="w-full h-full object-cover"
                        />
                    {:else}
                        <div
                            class="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500 text-xl"
                        >
                            No Cover Image
                        </div>
                    {/if}
                    {#if job.iconUrl}
                        <img
                            src={job.iconUrl}
                            alt="Icon"
                            class="absolute -bottom-12 left-8 w-24 h-24 rounded-full border-4 border-white shadow-xl object-cover"
                        />
                    {:else}
                        <div
                            class="absolute -bottom-12 left-8 w-24 h-24 rounded-full border-4 border-white shadow-xl bg-gray-300 flex items-center justify-center text-gray-600 text-2xl"
                        >
                            No Icon
                        </div>
                    {/if}
                </div>
                <Card.Header class="pt-10 px-8 pb-4">
                    <Card.Title class="text-3xl font-bold"
                        >{job.title}</Card.Title
                    >
                    <Card.Description
                        class="px-2 text-sm text-gray-600 dark:text-gray-300"
                    >
                        {job.role} - {job.location} ({job.mode})
                    </Card.Description>
                </Card.Header>
                <div class="w-[98%] md:w-[90%] m-auto">
                    <ProgressBarJob />
                </div>
                <!-- Steps -->
                <h1 class="text-xl font-medium px-8">Process</h1>
                <ProcessJob />
                <div
                    id="notes_notification"
                    class="w-full h-[90vh] md:hidden p-2 flex flex-col gap-2"
                >
                    <NotificationJob />
                    <NotesJob />
                </div>
                <Card.Content class="md:px-8 py-4 space-y-4">
                    <div>
                        <h3 class="text-xl font-semibold mb-2">Description</h3>
                        <p class="text-gray-700 dark:text-gray-400">
                            {job.description}
                        </p>
                    </div>
                    <div>
                        <h3 class="text-xl font-semibold mb-2">Requirements</h3>
                        <p class="text-gray-700 dark:text-gray-400">
                            Minimum Experience: {job.minExperience} years
                        </p>
                        <div class="flex flex-wrap gap-2 mt-2">
                            {#each job.technologies.split(",") as item}
                                <span
                                    class="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full"
                                >
                                    {item.trim()}
                                </span>
                            {/each}
                        </div>
                    </div>
                    <div class="flex justify-end pt-4">
                        <!-- <Button>Apply Now</Button> -->
                    </div>
                </Card.Content>
            </Card.Root>
        </ScrollArea>

        <!-- Notes and Notification -->
        <div
            id="notes_notification"
            class="w-full h-[88vh] hidden lg:flex flex-col gap-2"
        >
            <NotificationJob />
            <NotesJob />
        </div>
    </div>
{:else}
    <div class="flex items-center justify-center h-full text-xl text-gray-500">
        Job not found.
    </div>
{/if}
