<script lang="ts">
    import * as DropdownMenu from "$lib/components/ui/dropdown-menu/index";
    let {
        title,
        options = [],
        label = "",
    }: {
        title: string;
        options: Array<{
            name: string;
            value: string;
            onClick?: (a: any) => any;
        }>;
        label?: string;
    } = $props();
</script>

<DropdownMenu.Root>
    <DropdownMenu.Trigger>{title}</DropdownMenu.Trigger>
    <DropdownMenu.Content>
        <DropdownMenu.Group>
            <DropdownMenu.Label>{label}</DropdownMenu.Label>
            <DropdownMenu.Separator />
            {#each options as item}
                <!-- content here -->
                <DropdownMenu.Item onclick={item.onClick}
                    >{item.name}</DropdownMenu.Item
                >
                <!-- <DropdownMenu.Item>Billing</DropdownMenu.Item>
                <DropdownMenu.Item>Team</DropdownMenu.Item>
                <DropdownMenu.Item>Subscription</DropdownMenu.Item> -->
            {:else}
                <!-- empty list -->
                <DropdownMenu.Item>No Item</DropdownMenu.Item>
            {/each}
        </DropdownMenu.Group>
    </DropdownMenu.Content>
</DropdownMenu.Root>
