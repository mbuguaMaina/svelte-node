import type { HandleServerError } from '@sveltejs/kit';

export const handleError = (({ error }) => {
    return {
        message: `${error}`,
    };
}) satisfies HandleServerError;
