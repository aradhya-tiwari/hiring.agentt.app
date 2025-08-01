<script lang="ts">
    import { goto } from "$app/navigation";
    import {
        Card,
        CardContent,
        CardDescription,
        CardFooter,
        CardHeader,
        CardTitle,
    } from "$lib/components/ui/card";
    import { Button } from "$lib/components/ui/button";
    import Icon from "@iconify/svelte";

    const tools = [
        {
            title: "Resume Screener",
            description:
                "Screen resumes based on custom criteria like experience, education, and skills.",
            icon: "file-text",
            route: "/app/resume-screener",
        },
        {
            title: "Questionnaire",
            description:
                "Create and manage custom questionnaires for candidates.",
            icon: "clipboard-list",
            route: "/app/questionaire",
        },
        {
            title: "AI Interviewer",
            description:
                "Conduct automated AI-powered interviews with candidates.",
            icon: "message-square",
            route: "/app/ai-meet",
        },
    ];

    function navigateToTool(route: string) {
        goto(route);
    }
</script>

<div class="p-6">
    <div class="flex flex-wrap gap-6">
        {#each tools as tool}
            <Card class="w-full max-w-sm">
                <CardHeader>
                    <div class="flex items-center gap-2">
                        <Icon icon={tool.icon} class="h-6 w-6" />
                        <CardTitle>{tool.title}</CardTitle>
                    </div>
                    <CardDescription>{tool.description}</CardDescription>
                </CardHeader>
                <CardFooter>
                    <Button
                        onclick={() => navigateToTool(tool.route)}
                        class="w-full"
                    >
                        Use Tool
                    </Button>
                </CardFooter>
            </Card>
        {/each}
    </div>
</div>
