<script>
	import { onMount } from 'svelte';
	import { qrcode } from '$lib/qrcode.js';

	/** @type {import('styled-qr-code').Options} */
	let options = {
		data: 'Hello World'
	};
	let color = 'black';
	$: options['dotsOptions'] = {
		color
	};
</script>

<h1 class="text-center my-2">Svelte QrCode Action</h1>

<h2>Fill the value:</h2>
<div class="input-group mb-4">
	<input class="form-control" bind:value={options.data} />
	<input type="color" class="form-control-color input-group-text" bind:value={color} />
</div>

<div class="card">
  <div class="card-body mx-auto" use:qrcode={options} />
</div>
