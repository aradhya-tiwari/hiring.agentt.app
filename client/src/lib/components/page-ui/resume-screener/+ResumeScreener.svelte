<script lang="ts">
    import { Button } from "$lib/components/ui/button";
    import { Input } from "$lib/components/ui/input";
    import { Label } from "$lib/components/ui/label";
    import {
        Card,
        CardContent,
        CardHeader,
        CardTitle,
    } from "$lib/components/ui/card";
    import * as Tabs from "$lib/components/ui/tabs/index";
    import DataTableCandidate from "$lib/components/page-ui/candidate/dataTable/DataTableCandidate.svelte";
    import { sampleCandidatesData } from "$lib/components/page-ui/candidate/stores/sampleCandidateData.svelte";
    import { candidateColumns } from "$lib/components/page-ui/candidate/stores/Columns.svelte";

    let keywords: string = "";
    let minExperience: number | null = null;
    let requiredEducation: string = "";
    let specificSkills: string = "";

    // This function would typically send the criteria to the backend
    function applyScreeningCriteria() {
        console.log("Applying screening criteria:", {
            keywords,
            minExperience,
            requiredEducation,
            specificSkills,
        });
        // In a real application, you would make an API call here
        // to fetch candidates based on these criteria.
    }
</script>

<div class="p-4 flex">
    <Card class="w-full">
        <CardContent class="flex-grow">
            <Tabs.Root value="parameters" class="">
                <Tabs.List class="">
                    <Tabs.Trigger value="parameters"
                        >Setup Parameters</Tabs.Trigger
                    >
                    <Tabs.Trigger value="candidates"
                        >Screened Candidates</Tabs.Trigger
                    >
                </Tabs.List>
                <Tabs.Content value="parameters" class=" w-full">
                    <div
                        class="flex flex-wrap items-center justify-between p-4 w-full"
                    >
                        <div class="w-full max-w-sm items-start my-5">
                            <Label for="keywords"
                                >Keywords (comma-separated)</Label
                            >
                            <Input
                                type="text"
                                id="keywords"
                                placeholder="e.g., JavaScript, React, Node.js"
                                bind:value={keywords}
                                class="my-2"
                            />
                        </div>
                        <div class="w-full max-w-sm items-start my-5">
                            <Label for="minExperience"
                                >Minimum Experience (years)</Label
                            >
                            <Input
                                type="number"
                                id="minExperience"
                                placeholder="e.g., 3"
                                bind:value={minExperience}
                                min="0"
                            />
                        </div>
                        <div class="w-full max-w-sm items-start my-5">
                            <Label for="requiredEducation"
                                >Required Education</Label
                            >
                            <Input
                                type="text"
                                id="requiredEducation"
                                placeholder="e.g., Bachelor's Degree, Master's in CS"
                                bind:value={requiredEducation}
                            />
                        </div>
                        <div class="w-full max-w-sm items-start my-5">
                            <Label for="specificSkills"
                                >Specific Skills (comma-separated)</Label
                            >
                            <Input
                                type="text"
                                id="specificSkills"
                                placeholder="e.g., Python, AWS, Machine Learning"
                                bind:value={specificSkills}
                            />
                        </div>
                    </div>
                    <Button
                        onclick={applyScreeningCriteria}
                        class="flex justify-end">Apply Screening</Button
                    >
                </Tabs.Content>
                <Tabs.Content value="candidates" class="">
                    <DataTableCandidate
                        data={sampleCandidatesData}
                        columns={candidateColumns}
                    />
                </Tabs.Content>
            </Tabs.Root>
        </CardContent>
    </Card>
</div>
