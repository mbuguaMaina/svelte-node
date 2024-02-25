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

<form
	class="flex flex-col gap-3"
	action=""
	method="post"
	use:enhance={submit}
	enctype="multipart/form-data"
>
	<input type="file" name="images" multiple id="" />

	<button class="bg-teal-400 w-max p-1 px-5" type="submit">Submit</button>
</form>
