<script lang="ts">
	import type Question from '$lib/components/Question.svelte';

	import { onMount } from 'svelte';
	import { tick } from 'svelte';
	import { questions } from '$lib/components/questionDefs';

	import CanvasContainer from '$lib/components/CanvasContainer.svelte';
	import SoundEffect from '$lib/components/SoundEffect.svelte';
	import InputContainer from '$lib/stores/InputContainer.svelte';

	import Blob from '$lib/components/Blob.svelte';

	let word = questions[0].word.split('');
	let currentInput: string[] = [];

	let currentQuestion: Question;
	let letterIndex = 0;
	let questionIndex = 0;
	let isCorrect = false;

	onMount(() => {
		//@ts-expect-error quiet
		currentQuestion = questions[0];
	});

	async function handleKeydown(event: KeyboardEvent) {
		console.log(event.key);
		let alphabetRegex = /^[a-zA-Z]+$/;

		if (alphabetRegex.test(event.key) && event.key.length === 1) {
			if (currentInput.length < word.length) {
				console.log('pushing');
				currentInput.push(event.key);
				currentInput = currentInput;
				letterIndex++;
			}
		}
		if (event.key === 'Delete' || event.key === 'Backspace') {
			console.log('pop');
			currentInput.pop();
			currentInput = currentInput;
		}

		await tick();
		console.log(currentInput);
	}

	function cycleQuestion() {
		letterIndex = 0;
		questionIndex++;
		currentInput = [];
		word = questions[questionIndex].word.split('');
	}

	$: currentInput = currentInput;
	//@ts-expect-error quiet
	$: currentQuestion = questions[questionIndex];

	$: console.log(word);

	$: if (isCorrect && questions.length - 1 !== questionIndex) {
		cycleQuestion();
	}
</script>

<svelte:window on:keydown={handleKeydown} />
<main class="bg-gradient-to-b from-pink-300 via-pink-500 to-purple-600 h-[100vh] overflow-clip">
	<div class="w-full flex flex-row-reverse px-3">
		<p class="font-lucky text-white text-decor text-3xl">SCORE:{questionIndex}</p>
	</div>
	<div class="text-decor-big text-8xl text-center mt-5 text-white font-lucky">Guess The Thing</div>
	<div class="h-2/3 grid grid-cols-1 grid-rows-1">
		<div
			class="mx-auto w-full h-full col-span-full row-span-full flex flex-row place-content-center"
		>
			<Blob />
		</div>
		{#each [questions[questionIndex]] as question (questionIndex)}
			<CanvasContainer model={question.model} modelParams={question.params} />
		{/each}
	</div>
	<div
		class="w-full flex flex-row place-content-center text-decor h-[4rem] text-white text-9xl gap-5"
	>
		{#key currentQuestion}
			<InputContainer {word} bind:isCorrect input={currentInput} />
		{/key}
	</div>

	<SoundEffect path={questions[0].correct} toPlay={isCorrect} />
</main>

<style lang="postcss">
	:global(body) {
		margin: 0;
	}

	.text-decor {
		text-shadow: 2px 2px 2px rgba(0, 0, 0, 1);
		text-stroke: 1px #f472b6;
		-webkit-text-stroke: 1px #f472b6;
	}

	.text-decor-big {
		text-shadow: 8px 8px 8px rgba(0, 0, 0, 1);
		text-stroke: 6px #f472b6;
		-webkit-text-stroke: 6px #f472b6;
	}
</style>
