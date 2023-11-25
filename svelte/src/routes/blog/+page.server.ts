import type {AppLocals, Blog, Project} from "$lib/common";
import {readItems, rest} from "@directus/sdk";
import type {LoadEvent} from "@sveltejs/kit";

export const load = async ({locals: {directus}}: AppLocals) => {
    const client = directus.with(rest());
    const articles = await client.request(readItems(
        "Blog",
        {
            fields: ["id", "name", "description", "keywords", "image", "date_created"],
            sort: ['date_created']
        }
    )) as Blog[];

    return {
        articles
    }
}