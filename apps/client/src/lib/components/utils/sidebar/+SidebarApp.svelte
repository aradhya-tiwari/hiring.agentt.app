<script lang="ts">
    import * as Sidebar from "$lib/components/ui/sidebar/index";
    import ChevronDown from "@lucide/svelte/icons/chevron-down";
    // import Icon from "../Icon.svelte";
    import type { iconStore } from "$lib/utils/icon-store";
    import Divider from "../Divider.svelte";
    import Icon from "@iconify/svelte";
    import { CogIcon } from "@lucide/svelte";
    import { page } from "$app/state";

    const sidebarItems1: Array<{
        title: string;
        url: string;
        icon: string;
    }> = [
        {
            title: "Home",
            url: "/app",
            icon: "iconamoon:home-light",
        },
        {
            title: "Jobs",
            url: "/app/jobs",
            icon: "basil:bag-outline",
        },
        {
            title: "Schedule",
            url: "/app/schedule",
            icon: "ion:timer-outline",
        },
        {
            title: "Candidates",
            url: "/app/candidates",
            icon: "fluent:people-16-regular",
        },
    ];
    let sidebarItems2: Array<{
        title: string;
        url: string;
        icon: string;
    }> = [
        {
            title: "Resume Screener",
            icon: "qlementine-icons:resume-16",
            url: "/app/resume-screener",
        },
        {
            title: "A.I. Interviewer",
            icon: "mage:robot",
            url: "/app/ai-meet",
        },
        {
            title: "Questionaire",
            icon: "mingcute:book-line",
            url: "/app/questionaire",
        },
    ];
    let cuurentPage = $state("Home");
    $effect(() => {
        console.log(page.route.id);
    });
</script>

<Sidebar.Root class="" variant="floating">
    <Sidebar.Header class="">
        <div
            class=" relative text-center text-xl w-[90%] font-semibold m-auto py-8 border-b rounded"
        >
            <span class="absolute left-1/2 -translate-1/2 top-1/2">
                hiring.agentT.app
            </span>
        </div>
    </Sidebar.Header>

    <!-- <img
            src="https://i.pinimg.com/736x/7f/5d/85/7f5d858e53d7ae90243447ebd37cd7e5.jpg"
            class="max-h-20 w-auto m-auto"
        /> -->
    <!-- </div> -->

    <Sidebar.Content class="text-sm">
        <Sidebar.Group class="">
            <p class="text-xs">Links</p>
            <!-- <Sidebar.MenuItem> -->
            {@render content(sidebarItems1)}
            <!-- </Sidebar.MenuItem> -->
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
        <button class="flex gap-1">
            <Icon icon="akar-icons:gear" width="24" height="24" /> Settings
        </button>
    </Sidebar.Footer>
</Sidebar.Root>

{#snippet content(
    links: Array<{
        title: string;
        url: string;
        icon: string;
    }>,
)}
    <Sidebar.Menu>
        {#each links as item}
            <Sidebar.MenuItem>
                <Sidebar.MenuButton
                    isActive={page.route.id === `/(app)${item.url}`}
                >
                    <a href={item.url} class="flex gap-2">
                        <!-- <div
                            class=""
                        > -->
                        <Icon
                            icon={item.icon}
                            width="24px"
                            height="24px"
                            className=" "
                        />
                        {item.title}
                        <!-- </div> -->
                    </a>
                </Sidebar.MenuButton></Sidebar.MenuItem
            >
        {/each}
    </Sidebar.Menu>
{/snippet}
