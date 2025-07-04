<script lang="ts">
    import Meet from "$lib/ai-meet/components/+Meet.svelte";
    import { aiInt } from "$lib/ai-meet/stores/initAi.svelte.js";
    import { onMount } from "svelte";
    import type { PageProps } from "../$types";

    // type Props = { data:  };
    let { data }: { data: any } = $props();
    onMount(() => {
        aiInt.init(data.data.client_secret.value);
    });
    // console.log(data);
</script>

<div class="bg-primary-foreground">
    <Meet />
</div>
