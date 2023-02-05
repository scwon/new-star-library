import { writable } from 'svelte/store';

export const title = writable('');
export const hasTitle = writable(false);
export const hasTitleBackButton = writable(false);