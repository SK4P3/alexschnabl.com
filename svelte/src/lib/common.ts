import {writable} from "svelte/store";
// @ts-ignore
import Locals = App.Locals;

export const ApiRoute = "http://146.190.178.255/as"

export const currentSection = writable<number>(0);
export const sections = writable<HTMLAnchorElement[]>([]);

export interface AppLocals {
    locals: Locals
}

export enum ImageQuality {
    LOW = 30
}

export function getWebpUrl(id: string, quality: ImageQuality) {
    return ApiRoute+`/assets/${id}?key=webp${quality}`
}