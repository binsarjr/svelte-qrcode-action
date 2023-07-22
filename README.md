# svelte-qrcode-action

I have just converted https://github.com/kozakdenys/qr-code-styling to a Svelte action and added support for reactivity.

You can find the options API documentation for [kozakdenys/qr-code-styling](https://github.com/kozakdenys/qr-code-styling#api-documentation)here

# Example

Simple

```svelte
<script>
	import { qrcode } from 'svelte-qrcode-action';
</script>

<div use:qrcode={{ data: 'this content of qrcode' }} />
```

With reactive

```svelte
<script>
	import { qrcode } from 'svelte-qrcode-action';
	import { onMount } from 'svelte';

	let options = {
		data: 'qr content'
	};
	onMount(() => {
		setTimeout(() => {
			options.dotsOptions = {
				color: '#4267b2',
				type: 'rounded'
			};
		}, 2_000);
	});
</script>

<div use:qrcode={options} />
```
