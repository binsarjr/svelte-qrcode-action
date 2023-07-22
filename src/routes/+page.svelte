<script>
    import { onMount} from 'svelte'
	import { qrcode } from "$lib/qrcode.js";

    /** @type {import('qr-code-styling').Options} */
    let options = {
        data: 'okei'
    }
   

    onMount(() => {
        setTimeout(() => {
            options.dotsOptions = {
                 color: "#4267b2",
            type: "rounded"
            }
        }, 2_000);
    })
</script>
<h1>Welcome to your library project</h1>
<p>Create your package using @sveltejs/package and preview/showcase your work with SvelteKit</p>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<input bind:value={options.data} />

<div use:qrcode={options}></div>