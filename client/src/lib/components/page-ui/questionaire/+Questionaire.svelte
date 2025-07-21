<script lang="ts">
	import { Button } from "$lib/components/ui/button";
	import { Input } from "$lib/components/ui/input";
	import { Label } from "$lib/components/ui/label";
	import { Separator } from "$lib/components/ui/separator";
	import Icon from "@iconify/svelte";

	let questions = $state([
		{
			id: 1,
			question: "What is your biggest weakness?",
		},
	]);
	let newQuestion = $state("");

	function addQuestion() {
		if (newQuestion.trim() === "") return;
		questions.push({
			id: Date.now(),
			question: newQuestion,
		});
		newQuestion = "";
	}

	function removeQuestion(id: number) {
		const index = questions.findIndex((q) => q.id === id);
		if (index !== -1) {
			questions.splice(index, 1);
		}
	}
</script>

<div class="p-4">
	<h1 class="text-2xl font-bold">Questionnaire</h1>
	<p class="text-gray-500">Add or remove questions for candidates.</p>

	<div class="mt-6">
		<div class="flex items-center gap-4">
			<Input
				bind:value={newQuestion}
				placeholder="Enter a new question"
			/>
			<Button onclick={addQuestion}>Add Question</Button>
		</div>
	</div>

	<Separator class="my-8" />

	<div class="space-y-4">
		{#each questions as q}
			<div
				class="flex items-center justify-between rounded-lg border p-4"
			>
				<p>{q.question}</p>
				<Button
					variant="ghost"
					size="icon"
					onclick={() => removeQuestion(q.id)}
				>
					<Icon icon="--- trash ---" />
				</Button>
			</div>
		{/each}
	</div>
</div>
