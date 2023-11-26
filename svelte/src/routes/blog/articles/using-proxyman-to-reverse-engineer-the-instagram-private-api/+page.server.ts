import type {AppLocals, Blog, Project} from "$lib/common";
import {readItems, rest} from "@directus/sdk";
import type {LoadEvent} from "@sveltejs/kit";
import {redirect} from "@sveltejs/kit";

export const load = async ({params, locals: {directus}}: LoadEvent & AppLocals) => {
    const client = directus.with(rest());
    const articles = await client.request(readItems(
        "Blog",
        {
            filter: {id: {_eq: "b98e7a07-49af-489d-9086-89f059c17201"}}
        }
    )) as Blog[];

    if (articles.length === 0)
        throw redirect(307, "/notfound")

    return {
        article: articles[0]
    }
}