<script lang="ts">
	// export let isCorrect: boolean;
	export let currentInput: string;
	export let value: string;

	$: isCorrect = value === currentInput;

	$: console.log(isCorrect);
</script>

<div class="grid grid-rows-1 grid-cols-1 place-content-center text-center select-none">
	<p class="col-span-1 row-span-1 text-decor font-lucky">
		{#key currentInput}
			{#if currentInput}
				{currentInput.toUpperCase()}
			{:else}
				{''}
			{/if}
		{/key}
	</p>
	<p class="col-span-1 row-span-1 mt-[1rem] text-decor">_</p>
</div>

<style lang="postcss">
	.text-decor {
		text-shadow:
			5px 5px 5px rgba(0, 0, 0, 1),
			8px 8px 8px rgba(0, 0, 0, 0.25);
		text-stroke: 3px #f472b6;
		-webkit-text-stroke: 3px #f472b6;
	}
</style>
