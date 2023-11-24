import type {AppLocals} from "$lib/common";
import {readItems, rest} from "@directus/sdk";

export const load = async ({locals: {directus}}: AppLocals) => {
    const client = directus.with(rest());
    const projects = await client.request(readItems("Project"));

    return {
        projects
    }
}