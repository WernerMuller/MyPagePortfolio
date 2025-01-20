import { writable } from 'svelte/store';

const createStore = () => {

    const {set, update, subscribe } = writable("")

    return {
        subscribe,
        set,
        update
    }
}


export const store = createStore();