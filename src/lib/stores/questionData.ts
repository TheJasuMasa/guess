import type { Question } from '$lib/components/questionDefs';
import { writable } from 'svelte/store';

const defaultQuestion: null | Question = null;

export const currentQuestion = writable(defaultQuestion);
