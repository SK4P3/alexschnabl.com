import type {AppLocals, Blog, Project} from "$lib/common";
import {readItems, rest} from "@directus/sdk";
import type {LoadEvent} from "@sveltejs/kit";

export const load = async ({locals: {directus}}: AppLocals) => {
    const client = directus.with(rest());
    const projects = await client.request(readItems(
        "Project",
        {
            // sort: ['date_created']
        }
    )) as Project[];

    return {
        projects
    }
}