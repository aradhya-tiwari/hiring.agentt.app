<script>
    import Input from "$lib/components/ui/input/input.svelte";
    import Icon from "$lib/components/my/Icon.svelte";
    import { ModeWatcher, toggleMode } from "mode-watcher";
    import Button from "$lib/components/ui/button/button.svelte";
</script>

<div class="flex h-20 w-full items-center justify-around">
    <div>
        <img src="" alt="" srcset="">
        </div>
    <!-- <div class="h-full"></div -->
    <div class="md:w-[70%]">
        <Input
            class="hidden md:block shadow-md rounded-full bg-white"
            placeholder="Search"
        />
    </div>
    <div class="flex gap-5">
        <Button variant="outline" class=" md:hidden" size="icon">
            <Icon name="search" className="" />
        </Button>

        <Button class="relative" variant="outline" size="icon">
            <span
                class="bg-red-500 text-white text-xs p-1 py-0 absolute right-0 top-0 rounded-full"
            >
                {3}
            </span>
            <Icon name="notifications" />
        </Button>
        <!-- light mode dark mode -->
        <Button onclick={toggleMode} variant="outline" size="icon">
            <Icon
                name="lightMode"
                className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 !transition-all dark:-rotate-90 dark:scale-0"
            />
            <Icon
                name="darkMode"
                className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 !transition-all dark:rotate-0 dark:scale-100"
            />
            <span class="sr-only">Toggle theme</span>
        </Button>
    </div>
</div>
