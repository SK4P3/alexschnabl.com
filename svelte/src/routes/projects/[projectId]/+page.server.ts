import type {AppLocals, Project} from "$lib/common";
import {readItems, rest} from "@directus/sdk";
import type {LoadEvent} from "@sveltejs/kit";

export const load = async ({params, locals: {directus}}: LoadEvent & AppLocals) => {


    const client = directus.with(rest());
    const projects = await client.request(readItems(
        "Project",
        {
            filter: {id: {_eq: params.projectId}},
            sort: ['sort']
        }
    )) as Project[];

    // if(projects.length === 0)
    // todo redirect to not found page

    return {
        project: projects[0]
    }
}