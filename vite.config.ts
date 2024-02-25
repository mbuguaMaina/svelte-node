import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	build: { manifest: true, outDir: './dist'},
	plugins: [sveltekit()]
});
