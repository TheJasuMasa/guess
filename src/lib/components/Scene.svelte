<script lang="ts">
	import { tweened } from 'svelte/motion';
	import { cubicInOut } from 'svelte/easing';

	import type { ModelParams } from './questionDefs';

	export let model: string;
	export let params: ModelParams;

	import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
	import { useLoader, useTask, T } from '@threlte/core';

	const gltf = useLoader(GLTFLoader).load(model);

	let lightIntensity = 0;
	let zoom = params.defaultZoom;

	let rotation = 0;
	useTask((delta) => {
		rotation += delta;
	});

	setInterval(() => {
		lightIntensity += 0.01;
	}, 300);

	function handleWheelZoom(event: WheelEvent) {
		if (zoom >= 0) {
			zoom += event.deltaY * params.zoomFactor;
		}

		if (zoom < 0) {
			zoom = 0;
		}
	}
</script>

<svelte:window on:mousewheel={handleWheelZoom} />
{#if $gltf}
	<T.DirectionalLight position={[0, 10, 10]} castShadow intensity={lightIntensity} />

	<T.PerspectiveCamera
		makeDefault
		{zoom}
		position={params.placement}
		on:create={({ ref }) => {
			ref.lookAt(1, 1, 1);
		}}
	/>

	<T rotation.y={rotation} is={$gltf.scene} scale={params.scale} />
{/if}
