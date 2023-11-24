import {writable} from "svelte/store";

export const currentSection = writable<number>(0);
export const sections = writable<HTMLAnchorElement[]>([]);
