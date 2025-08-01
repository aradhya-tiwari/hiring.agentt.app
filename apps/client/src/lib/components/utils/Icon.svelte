<script lang="ts">
    import { cn } from "$lib/utils";
    import { iconStore } from "$lib/utils/icon-store";

    type props = { name: keyof typeof iconStore; className?: string };
    let { name, className = "" }: props = $props();
</script>

<span class={cn(["w-8 h-8 text-gray-500", className])}
    >{@html iconStore[name]}</span
>
