<script lang="ts">
    import { MediaQuery } from "svelte/reactivity";
    import * as Dialog from "$lib/components/ui/dialog/index.js";
    import * as Drawer from "$lib/components/ui/drawer/index.js";
    import { Input } from "$lib/components/ui/input/index.js";
    import { Button, buttonVariants } from "$lib/components/ui/button/index.js";
    import { scheduleDrawerStore } from "./stores/drawer.svelte";
    import { type scheduleTableType } from "./stores/store.svelte";

    const isDesktop = new MediaQuery("(min-width: 768px)");

    let scheduleData: scheduleTableType = $state(
        scheduleDrawerStore.data as scheduleTableType,
    );
    let { open = $bindable(false) } = $props();
    $effect(() => {
        scheduleData = scheduleDrawerStore.data as scheduleTableType;
    });
</script>

{#if isDesktop.current}
    <Dialog.Root bind:open={scheduleDrawerStore.open}>
        <Dialog.Content class="sm:max-w-[425px]">
            <Dialog.Header>
                <Dialog.Title>Schedule Details</Dialog.Title>
                <Dialog.Description>
                    View and edit schedule details.
                </Dialog.Description>
            </Dialog.Header>
            <form class="grid items-start gap-4">
                <div class="grid gap-2">
                    <label>ID:</label>
                    <Input type="text" value={scheduleData.id} readonly />
                </div>
                <div class="grid gap-2">
                    <label>Date:</label>
                    <Input
                        type="text"
                        value={scheduleData.date?.toDateString()}
                        readonly
                    />
                </div>
                <div class="grid gap-2">
                    <label>Type:</label>
                    <Input type="text" value={scheduleData.type} readonly />
                </div>
                <div class="grid gap-2">
                    <label>Name:</label>
                    <Input type="text" value={scheduleData.name} readonly />
                </div>
                <div class="grid gap-2">
                    <label>Candidate Name:</label>
                    <Input
                        type="text"
                        value={scheduleData.candidateName}
                        readonly
                    />
                </div>
                <div class="grid gap-2">
                    <label>Status:</label>
                    <Input type="text" value={scheduleData.status} readonly />
                </div>
                <Button type="submit">Save changes</Button>
            </form>
        </Dialog.Content>
    </Dialog.Root>
{:else}
    <Drawer.Root bind:open={scheduleDrawerStore.open}>
        <Drawer.Content>
            <Drawer.Header class="text-left pt-0">
                <Drawer.Title>Schedule Details</Drawer.Title>
                <Drawer.Description>
                    View and edit schedule details.
                </Drawer.Description>
            </Drawer.Header>
            <hr class=" shadow" />
            <form class="grid items-start text-sm gap-4 px-4 overflow-auto">
                <div class="">
                    <label>ID:</label>
                    <Input type="text" value={scheduleData.id} readonly />
                </div>
                <div class="">
                    <label>Date:</label>
                    <Input
                        type="text"
                        value={scheduleData.date?.toDateString()}
                        readonly
                    />
                    <Input
                        type="text"
                        value={scheduleData.date?.toTimeString()}
                        readonly
                    />
                </div>
                <div class="grid gap-2">
                    <label>Type:</label>
                    <Input type="text" value={scheduleData.type} readonly />
                </div>
                <div class="grid gap-2">
                    <label>Name:</label>
                    <Input type="text" value={scheduleData.name} readonly />
                </div>
                <div class="grid gap-2">
                    <label>Status:</label>
                    <Input type="text" value={scheduleData.status} readonly />
                </div>
                <div class="grid gap-2">
                    <label>Candidate Name:</label>
                    <Input
                        type="text"
                        value={scheduleData.candidateName}
                        readonly
                    />
                </div>
                <div class="grid g"></div>
                <div class=" flex justify-between flex-row w-full gap-3">
                    <div class="w-full">
                        <Button type="submit" class="w-full"
                            >Save changes</Button
                        >
                    </div>
                    <div class="w-full">
                        <Drawer.Close
                            class={buttonVariants({
                                variant: "outline",
                                class: "w-full",
                            })}>Cancel</Drawer.Close
                        >
                    </div>
                </div>
            </form>
            <hr />
            <Drawer.Footer
                class="pt-2 flex justify-between flex-row w-full gap-1"
            ></Drawer.Footer>
        </Drawer.Content>
    </Drawer.Root>
{/if}
