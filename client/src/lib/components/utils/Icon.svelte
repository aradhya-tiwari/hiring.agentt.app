<script lang="ts">
    import { iconStore } from "$lib/utils/icon-store";

    type props = { name: keyof typeof iconStore; className?: string };
    let { name, className = "" }: props = $props();
</script>

<span class="w-8 h-8">{@html iconStore[name]}</span>
