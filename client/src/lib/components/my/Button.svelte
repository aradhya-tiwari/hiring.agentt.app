<script lang="ts">
    import { cn } from "$lib/utils";
    let { children, className } = $props();
</script>

<button class={cn(["border shadown px-4 py-2", className])}>
    {@render children?.()}
</button>
