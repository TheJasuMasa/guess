<script lang="ts">
	import type { ModelParams } from './questionDefs';

	export let model: string;
	export let modelParams: ModelParams;
	import { fly } from 'svelte/transition';
	import { Canvas } from '@threlte/core';
	import Scene from './Scene.svelte';

	let cycle = false;
	$: console.log(cycle);
</script>

{#if !cycle}
	<div
		in:fly|global={{ delay: 300, x: 200 }}
		out:fly|global={{ x: -200 }}
		class="col-span-full row-span-full"
	>
		<Canvas>
			<Scene {model} params={modelParams} />
		</Canvas>
	</div>
{/if}
