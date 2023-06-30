export type Props = unknown;

export type State = {
	correctAnswerCount: number;
	incorrectAnswerCount: number;
	guess: string;
	fishes: Array<{
		name: string;
		url: string;
	}>;
};
