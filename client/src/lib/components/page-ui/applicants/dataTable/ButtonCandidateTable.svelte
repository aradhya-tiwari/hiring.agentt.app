<script>
    import Button from "$lib/components/ui/button/button.svelte";

    let { title, ...rest } = $props();
</script>

<Button {...rest}>
    {title}
</Button>
