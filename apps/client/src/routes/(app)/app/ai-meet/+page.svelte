<script lang="ts">
  import * as Tabs from "$lib/components/ui/tabs/index";
  import { Textarea } from "$lib/components/ui/textarea";
  import { Button } from "$lib/components/ui/button";
  import Label from "$lib/components/ui/label/label.svelte";
  import PageTitle from "$lib/components/utils/PageTitle.svelte";
  import * as Card from "$lib/components/ui/card/index";

  // Using Svelte 5 runes for state management
  let screeningCriteria = $state("");
  // Added type annotation for interviewResults as per Svelte 5 best practices
  let interviewResults: string[] = $state([]); // Placeholder for results

  // Reverting to onclick as per user feedback, removing explicit typing
  function handleSaveCriteria() {
    // Logic to save or process screening criteria
    console.log("Screening Criteria:", screeningCriteria);
    alert("Screening criteria saved!");
  }
</script>

<PageTitle title="Interview Screening" />
<Card.Card class="container mx-auto p-4 dark:bg-white/10">
  <Card.Content>
    <Tabs.Root value="screening">
      <Tabs.List class="rounded-b-none p-1 pb-0 dark:bg-black/20">
        <Tabs.Trigger value="screening" class="rounded-b-none "
          >Screening Criteria</Tabs.Trigger
        >
        <Tabs.Trigger value="results" class="rounded-b-none  "
          >Interview Results</Tabs.Trigger
        >
      </Tabs.List>

      <Tabs.Content value="screening" class="border p-2 rounded">
        <div class="space-y-2 my-5">
          <Label
            for="screening-criteria"
            class="block text-sm font-medium text-gray-700"
          >
            Define Screening Criteria
          </Label>
          <Textarea
            id="screening-criteria"
            bind:value={screeningCriteria}
            placeholder="Enter the criteria for screening candidates..."
            rows={10}
            class="w-full"
          />
        </div>
        <div class="space-y-2 my-5">
          <Label
            for="screening-criteria"
            class="block text-sm font-medium text-gray-700"
          >
            Level Of Questions
          </Label>
          <Textarea
            id="screening-criteria"
            bind:value={screeningCriteria}
            placeholder="Enter the criteria for screening candidates..."
            rows={10}
            class="w-full"
          />
        </div>
        <Button onclick={handleSaveCriteria} class="mt-4">Save Criteria</Button>
      </Tabs.Content>

      <Tabs.Content value="results" class="mt-4">
        <div class="space-y-4">
          <h2 class="text-xl font-semibold mb-2">
            Interview Screening Results
          </h2>
          {#if interviewResults.length > 0}
            <!-- Placeholder for displaying results -->
            <p>Results will be displayed here.</p>
            <!-- Example of how results might be displayed:
          {#each interviewResults as result (result.id)}
            <div class="border p-3 rounded-md">
              <p><strong>Candidate:</strong> {result.candidateName}</p>
              <p><strong>Score:</strong> {result.score}</p>
              <p><strong>Feedback:</strong> {result.feedback}</p>
            </div>
          {/each}
          -->
          {:else}
            <p>No interview results available yet.</p>
          {/if}
        </div>
      </Tabs.Content>
    </Tabs.Root>
  </Card.Content>
</Card.Card>

<style>
  /* Add any specific styles here if needed */
</style>
