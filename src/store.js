import { writable } from 'svelte/store';

export const type = writable("Visa");
export const creditNumber = writable("");
export const holderName = writable("");
export const month = writable("");
export const year = writable("");