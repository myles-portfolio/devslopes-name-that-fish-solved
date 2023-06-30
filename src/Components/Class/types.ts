export type Score = {
	correctCount: number;
	incorrectCount: number;
};

export type Props = unknown;

export type State = {
	score: Score;
	gameFinished: boolean;
	fishes: Array<{
		name: string;
		url: string;
	}>;
	activeFish: {
		name: string;
		url: string;
	};
};
