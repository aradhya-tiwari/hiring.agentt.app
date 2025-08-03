<script>
    import Button from "$lib/components/ui/button/button.svelte";

    let { title } = $props();
</script>

<Button>
    {title}
</Button>
