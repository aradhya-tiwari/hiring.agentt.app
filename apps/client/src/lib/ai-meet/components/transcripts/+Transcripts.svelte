<script>
    import Input from "$lib/components/ui/input/input.svelte";
    import ChatBubble from "./Bubble.svelte";
    import { transcripts } from "$lib/ai-meet/stores/transcripts.svelte";
</script>

<div class=" md:min-w-[150px] flex flex-col justify-between">
    <div class=" flex flex-col rounded-2xl">
        {#each transcripts.getChats() as item}
            <!-- content here -->
            <ChatBubble sender={item.by} msg={item.msg} />
        {/each}
    </div>

    <!-- <Input class="m-2 w-[90%]" /> -->
</div>
