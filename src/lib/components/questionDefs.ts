export type ModelParams = {
	zoomFactor: number;
	defaultZoom: number;
	placement: [number, number, number];
	scale: number;
};

const defaultModel: ModelParams = {
	zoomFactor: 0.01,
	defaultZoom: 5,
	placement: [10, 10, 10],
	scale: 1
};

export class Question {
	word: string;
	model: string;
	correct: string;
	params: ModelParams;

	constructor(word: string, model: string, params: ModelParams = defaultModel) {
		this.word = word;
		this.model = model;
		this.correct = '/correct.wav';
		this.params = params;
	}
}

export const questions = [
	new Question('RHINOCEROS', '/rhino.glb', {
		zoomFactor: 0.0005,
		defaultZoom: 1,
		placement: [10, 10, 10],
		scale: 0.05
	}),
	new Question('BREAD', '/bread.glb', {
		zoomFactor: 0.0005,
		defaultZoom: 1,
		placement: [10, 10, 10],
		scale: 5
	}),
	new Question('PINEAPPLE', '/pineapple.glb', {
		zoomFactor: 0.0005,
		defaultZoom: 1,
		placement: [10, 8, 10],
		scale: 8
	}),
	new Question('SANDWICH', '/sandwich.glb', {
		zoomFactor: 0.0005,
		defaultZoom: 1,
		placement: [10, 8, 10],
		scale: 8
	}),
	new Question('DEER', '/deer.glb', {
		zoomFactor: 0.0005,
		defaultZoom: 1,
		placement: [10, 10, 10],
		scale: 0.8
	}),
	new Question('ELEPHANT', '/elephant.glb', {
		zoomFactor: 0.0005,
		defaultZoom: 1,
		placement: [10, 10, 10],
		scale: 0.8
	}),
	new Question('RABBIT', '/rabbit.glb', {
		zoomFactor: 0.0005,
		defaultZoom: 1,
		placement: [10, 10, 10],
		scale: 0.8
	})
];
