import {redirect} from "@sveltejs/kit";

export const load = async ({url}: any) => {

    // redirects for old routes so that already existing backlinks still work
    if (url.pathname === "/blog/articles/lazy-loading-images-and-components-in-svelte-and-sveltekit-using-typescript") {
        throw redirect(301, "/blog/3a3b0b3b-2add-4f60-bba4-a1f3f03318db")
    }

    if (url.pathname === "/blog/articles/using-proxyman-to-reverse-engineer-the-instagram-private-api") {
        throw redirect(301, "/blog/b98e7a07-49af-489d-9086-89f059c17201")
    }
}