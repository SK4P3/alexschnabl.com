import type {Handle} from '@sveltejs/kit'
import {createDirectus, staticToken} from "@directus/sdk";
import {DIRECTUS_API_TOKEN} from '$env/static/private'
import {ApiRoute} from "$lib/common";

export const handle: Handle = async ({event, resolve}) => {
    event.locals.directus = createDirectus(ApiRoute)
        .with(staticToken(DIRECTUS_API_TOKEN));

    return resolve(event, {
        filterSerializedResponseHeaders(name) {
            return name === 'content-range'
        },
    })
}