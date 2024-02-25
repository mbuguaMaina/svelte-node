<script lang="ts">
	import { enhance } from '$app/forms';
	import type { ActionData, PageData, SubmitFunction } from './$types';

	export let data: PageData;
	export let form: ActionData;

	const submit: SubmitFunction = async () => {
		// do something before the form is submitted

		return async ({ update }) => {
			// do something after the form is submitted

			await update();
		};
	};
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<form action="" method="post" use:enhance={submit} enctype="multipart/form-data">
	<input type="file" name="images" multiple id="" />
	<input type="email" name="email" id="" />
	<button type="submit">Submit</button>
</form>
