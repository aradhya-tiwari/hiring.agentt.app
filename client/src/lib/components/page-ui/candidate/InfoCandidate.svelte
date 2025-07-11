<script lang="ts">
    import { MediaQuery } from "svelte/reactivity";
    import * as Dialog from "$lib/components/ui/dialog/index.js";
    import * as Drawer from "$lib/components/ui/drawer/index.js";
    import { Input } from "$lib/components/ui/input/index.js";
    import { Button, buttonVariants } from "$lib/components/ui/button/index.js";
    import { candidateDrawerStore } from "./stores/drawerCandidateStore.svelte";
    import { type candidatesType } from "./stores/candidateType";

    const isDesktop = new MediaQuery("(min-width: 768px)");

    let candidateData: candidatesType = $state(
        candidateDrawerStore.data as candidatesType,
    );
    // let { open = $bindable(false) } = $props();
    $effect(() => {
        candidateData = candidateDrawerStore.data as candidatesType;
    });
</script>

{#if isDesktop.current}
    <Dialog.Root bind:open={candidateDrawerStore.open}>
        <Dialog.Content class="w-[1000px] ">
            <Dialog.Header>
                <Dialog.Title>Candidate Details</Dialog.Title>
                <Dialog.Description>
                    View and edit candidate details.
                </Dialog.Description>
            </Dialog.Header>
            <form class="grid items-start gap-4">
                <div class="grid gap-2">
                    <label>ID:</label>
                    <Input type="text" value={candidateData.id} readonly />
                </div>
                <div class="grid gap-2">
                    <label>Name:</label>
                    <Input type="text" value={candidateData.name} readonly />
                </div>
                <div class="grid gap-2">
                    <label>Email:</label>
                    <Input type="text" value={candidateData.email} readonly />
                </div>
                <div class="grid gap-2">
                    <label>Phone:</label>
                    <Input type="text" value={candidateData.phone} readonly />
                </div>
                <div class="grid gap-2">
                    <label>Description:</label>
                    <Input
                        type="text"
                        value={candidateData.description}
                        readonly
                    />
                </div>
                <div class="grid gap-2">
                    <label>Resume URL:</label>
                    <Input
                        type="text"
                        value={candidateData.resumeUrl}
                        readonly
                    />
                </div>
                <div class="grid gap-2">
                    <label>AI Details:</label>
                    <textarea
                        class="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        value={candidateData.ai_details}
                        readonly
                    ></textarea>
                </div>
                <Button type="submit">Save changes</Button>
            </form>
        </Dialog.Content>
    </Dialog.Root>
{:else}
    <Drawer.Root bind:open={candidateDrawerStore.open}>
        <Drawer.Content>
            <Drawer.Header class="text-left pt-0">
                <Drawer.Title>Candidate Details</Drawer.Title>
                <Drawer.Description>
                    View and edit candidate details.
                </Drawer.Description>
            </Drawer.Header>
            <hr class=" shadow" />
            <form class="grid items-start text-sm gap-4 px-4 overflow-auto">
                <div class="">
                    <label>ID:</label>
                    <Input type="text" value={candidateData.id} readonly />
                </div>
                <div class="">
                    <label>Name:</label>
                    <Input type="text" value={candidateData.name} readonly />
                </div>
                <div class="">
                    <label>Email:</label>
                    <Input type="text" value={candidateData.email} readonly />
                </div>
                <div class="grid gap-2">
                    <label>Phone:</label>
                    <Input type="text" value={candidateData.phone} readonly />
                </div>
                <div class="grid gap-2">
                    <label>Description:</label>
                    <Input
                        type="text"
                        value={candidateData.description}
                        readonly
                    />
                </div>
                <div class="grid gap-2">
                    <label>Resume URL:</label>
                    <Input
                        type="text"
                        value={candidateData.resumeUrl}
                        readonly
                    />
                </div>
                <div class="grid gap-2">
                    <label>AI Details:</label>
                    <textarea
                        class="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        value={candidateData.ai_details}
                        readonly
                    ></textarea>
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
