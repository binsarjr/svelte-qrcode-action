<script>
	import { onMount } from 'svelte';
	import { qrcode } from '$lib/qrcode.js';

	/** @type {import('styled-qr-code').Options} */
	let options = {
		data: 'okei'
	};
	let color = 'black';
	$: options['dotsOptions'] = {
		color
	};
</script>

<h1>Svelte QrCode Action</h1>
<p>BTW: I am grateful if anyone wants to make the ui so that it is better to see.</p>

<h2>you can change the value</h2>
<input bind:value={options.data} />
<input type="color" bind:value={color} />

<div use:qrcode={options} />
