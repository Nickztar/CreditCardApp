import { writable } from 'svelte/store';

export const type = writable("visa");
//Number
export const creditNumber = writable("");
export const numberFocused = writable(false);
//Name
export const holderName = writable("");
export const nameFocused = writable(false);
//Expire
export const expireFocused = writable(false);
export const month = writable("");
export const year = writable("");
//CVV
export const CVV = writable("");
export const CVVLength = writable(3);
export const CVVFocused = writable(false);