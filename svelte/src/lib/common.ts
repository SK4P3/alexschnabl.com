import {writable} from "svelte/store";
// @ts-ignore
import Locals = App.Locals;

export interface Project {
    id: string;
    name: string;
    type: string;
    url: string;
    keywords: string[];
    description: string;
    cover: string;
    image: string;
}

export interface Blog {
    id: string;
    date_created: string;
    name: string;
    keywords: string[];
    description: string;
    image: string;
    markdown: string;
}

export interface AppLocals {
    locals: Locals
}

export enum ImageQuality {
    LOW = 30,
    MEDIUM = 50,
    HIGH = 80,
}

export const ApiRoute = "https://api.alexschnabl.com/as"
export const currentSection = writable<number>(0);
export const sections = writable<HTMLAnchorElement[]>([]);

export function getWebpUrl(id: string, quality: ImageQuality) {
    return ApiRoute+`/assets/${id}?key=webp${quality}`
}