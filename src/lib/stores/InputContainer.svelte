<script lang="ts">
	import Input from '$lib/components/Input.svelte';

	export let word: string[];
	export let input: string[];
	[];
	export let isCorrect: boolean;

	function checkIsCorrect(correct: string[], current: string[]) {
		let isCorrect = true;

		for (let i = 0; i < correct.length; i++) {
			if (current[i]?.toUpperCase() !== correct[i]?.toUpperCase()) {
				console.log('not correct');
				isCorrect = false;
				return isCorrect;
			}
		}
		console.log('correct');
		return isCorrect;
	}

	$: isCorrect = checkIsCorrect(word, input);

	$: if (isCorrect) {
		console.log('dingdingding');
	}
</script>

{#key input.length}
	{#each word as letter, i}
		<Input value={letter} currentInput={input[i]} />
	{/each}
{/key}
