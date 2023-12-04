<script lang="ts">
	import type { Audio } from 'three';

	export let path: string;
	export let toPlay: boolean;

	let audio: Audio;

	$: if (toPlay) {
		audio.play();
	}
</script>

<audio src={path} bind:this={audio} />
