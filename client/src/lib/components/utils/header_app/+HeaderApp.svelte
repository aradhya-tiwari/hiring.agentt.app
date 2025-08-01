<script>
    import Input from "$lib/components/ui/input/input.svelte";
    import Icon from "@iconify/svelte";
    import { ModeWatcher, toggleMode } from "mode-watcher";
    import Button from "$lib/components/ui/button/button.svelte";
    import * as Sidebar from "$lib/components/ui/sidebar/index.js";
    import SidebarTrigger from "$lib/components/ui/sidebar/sidebar-trigger.svelte";
</script>

<div class="flex h-20 w-full items-center justify-between">
    <SidebarTrigger class=" md:hidden mr-2" title="Open Sidebar">
        <Icon icon="material-symbols:menu-rounded" width="24px" height="24px" />
    </SidebarTrigger>
    <!-- <div class="h-full"></div -->
    <div class="md:w-[70%] w-full relative">
        <Input
            class="hidde md:block shadow-md rounded-lg  bg-white"
            placeholder="Search"
        />
        <Icon
            icon="si:search-line"
            width="24"
            height="24"
            class="absolute scale-70 md:scale-100 right-2 top-1"
        />
    </div>
    <div class="flex gap-3 md:gap-5">
        <a href="/app/notification" class="relative p-1">
            <span
                class="bg-red-500 text-white text-xs p-1 py-0 absolute right-0 top-0 rounded-full"
            >
                {3}
            </span>
            <Icon
                icon="mdi:bell-outline"
                width="24"
                height="24"
                class="hover:animate-spin scale-75 md:scale-100 transition-all"
            />
        </a>
        <!-- light mode dark mode -->
        <button
            onclick={toggleMode}
            class="text-center relative cursor-pointer flex"
        >
            <!-- <Icon
                icon="lightMode"
                className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 !transition-all dark:-rotate-90 dark:scale-0"
            /> -->
            <Icon
                icon="ri:sun-fill"
                width="24"
                height="24"
                class="rotate-0 mt-[2px] scale-70 md:scale-100 !transition-all dark:-rotate-90 dark:scale-0"
            />
            <Icon
                icon="line-md:moon-twotone"
                width="24"
                height="24"
                class="absolute rotate-90 scale-0 top-[2px] !transition-all dark:rotate-0 dark:scale-100"
            />
            <!-- <Icon
                icon="darkMode"
                className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 !transition-all dark:rotate-0 dark:scale-100"
            /> -->
            <!-- <span class="sr-only">Toggle theme</span>   -->
        </button>
    </div>
</div>
