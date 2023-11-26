import type {AppLocals, Blog, Project} from "$lib/common";
import {readItems, rest} from "@directus/sdk";
import type {LoadEvent} from "@sveltejs/kit";
import {redirect} from "@sveltejs/kit";

export const load = async ({params, locals: {directus}}: LoadEvent & AppLocals) => {
    const client = directus.with(rest());
    const articles = await client.request(readItems(
        "Blog",
        {
            filter: {id: {_eq: "3a3b0b3b-2add-4f60-bba4-a1f3f03318db"}}
        }
    )) as Blog[];

    if (articles.length === 0)
        throw redirect(307, "/notfound")

    return {
        article: articles[0]
    }
}