import { writable } from "svelte/store";

export const entries = writable([
    {id: 1, lineItem: 'Entry 1'},
    {id: 2, lineItem: 'Entry 2'},
    {id: 3, lineItem: 'Entry 3'},
    {id: 4, lineItem: 'Entry 4'},
    {id: 5, lineItem: 'Entry 5'},
    {id: 6, lineItem: 'Entry 6'},
    {id: 7, lineItem: 'Entry 7'},
    {id: 8, lineItem: 'Entry 8'},
    {id: 9, lineItem: 'Entry 9'},
    {id: 10, lineItem: 'Entry 10'}
] as any[]);