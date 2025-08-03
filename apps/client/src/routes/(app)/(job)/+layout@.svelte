<script lang="ts">
    import Button from "$lib/components/ui/button/button.svelte";
    import { ModeWatcher } from "mode-watcher";

    let { children } = $props();
</script>

<ModeWatcher />
<Button variant="outline" class="border-2 bg-background  m-10"
    >Ese teese tere</Button
>
{@render children()}
