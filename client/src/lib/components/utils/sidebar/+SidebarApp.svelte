<script lang="ts">
    import * as Sidebar from "$lib/components/ui/sidebar/index";
    import ChevronDown from "@lucide/svelte/icons/chevron-down";
    // import Icon from "../Icon.svelte";
    import type { iconStore } from "$lib/utils/icon-store";
    import Divider from "../Divider.svelte";
    import Icon from "@iconify/svelte";
    import { CogIcon } from "@lucide/svelte";
    const sidebarItems1: Array<{
        title: string;
        url: string;
        icon: string;
    }> = [
        {
            title: "Home",
            url: "/app",
            icon: "fluent-color:home-20",
        },
        {
            title: "Jobs",
            url: "/app",
            icon: "jobs",
        },
        {
            title: "Schedule",
            url: "/app",
            icon: "schedule",
        },
        {
            title: "Candidates",
            url: "/app",
            icon: "candidates",
        },
    ];
    let sidebarItems2: Array<{
        title: string;
        url: string;
        icon: string;
    }> = [
        {
            title: "Resume Screener",
            icon: "resumeScreener",
            url: "/app/resume-screener",
        },
        {
            title: "A.I. Interviewer",
            icon: "aiMeet",
            url: "/app/ai-meet",
        },
    ];
</script>

<Sidebar.Root class="">
    <Sidebar.Header />
    <div class="border w-[90%] m-auto h-20 rounded shadow">
        <!-- <img
            src="https://i.pinimg.com/736x/7f/5d/85/7f5d858e53d7ae90243447ebd37cd7e5.jpg"
            class="max-h-20 w-auto m-auto"
        /> -->
    </div>
    <Sidebar.Trigger class="absolute -right-6 top-10" title=" Open Sidebar "
    ></Sidebar.Trigger>
    <Sidebar.Content class="text-sm">
        <Sidebar.Group class="">
            <p class="text-xs">Links</p>
            {@render content(sidebarItems1)}
        </Sidebar.Group>
        <Divider />
        <Sidebar.Group>
            <p class="text-xs">Tools</p>
            {@render content(sidebarItems2)}
        </Sidebar.Group>
    </Sidebar.Content>
    <Sidebar.Footer class="text-sm">
        <Divider />
        <div class="flex gap-2">
            <!-- <Icon name="settings" /> My Profile -->
        </div>
        <div class="flex gap-2">
            <Icon icon="" /> Settings
        </div>
    </Sidebar.Footer>
</Sidebar.Root>

{#snippet content(
    links: Array<{
        title: string;
        url: string;
        icon: string;
    }>,
)}
    <div class="ml-2">
        {#each links as item}
            <a href={item.url}>
                <div class="my-2 flex">
                    <Icon
                        icon={item.icon}
                        width="24px"
                        height="24px"
                        className=" "
                    />
                    {item.title}
                </div>
            </a>
        {/each}
    </div>
{/snippet}
