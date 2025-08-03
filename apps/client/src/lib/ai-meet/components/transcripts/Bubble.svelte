<script lang="ts">
    type props = {
        msg: string;
        sender: "assistant" | "user" | "info";
    };
    let { msg, sender }: props = $props();
</script>

{#if sender === "assistant"}
    <!-- content here -->

    <div class="w-auto flex gap-2 max-w-[80%] p-2 m-2 rounded-lg">
        <span class="w-10 h-10 rounded-full self-end shrink-0 shadow border">
        </span>
        <p class="rounded-lg p-2 inset-shadow-sm shadow">{msg}</p>
    </div>
{:else if sender === "user"}
    <div
        class="w-auto flex gap-2 self-end max-w-[80%] m-2 rounded-lg
    "
    >
        <p class=" rounded-lg p-2 inset-shadow-sm shadow">{msg}</p>
        <span class="w-10 h-10 rounded-full self-end shrink-0 shadow border">
        </span>
    </div>
{/if}
