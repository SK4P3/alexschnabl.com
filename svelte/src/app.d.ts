// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
import type {DirectusClient} from "@directus/sdk";

declare global {
    namespace App {
        // interface Error {}

        interface Locals {
            directus: DirectusClient<any>
        }

        // interface PageData {}
        // interface Platform {}
    }
}

export {};
