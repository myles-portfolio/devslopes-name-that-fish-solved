import { ClassGameBoard } from "./ClassGameBoard";
import { ClassScoreBoard } from "./ClassScoreBoard";
import { ClassFinalScore } from "./ClassFinalScore";
import { Images } from "../../assets/Images";
import React from "react";
import { Props, State } from "./types";

const initialFishes = [
	{
		name: "trout",
		url: Images.trout,
	},
	{
		name: "salmon",
		url: Images.salmon,
	},
	{
		name: "tuna",
		url: Images.tuna,
	},
	{
		name: "shark",
		url: Images.shark,
	},
];

export class ClassApp extends React.Component<Props, State> {
	state = {
		score: {
			correctCount: 0,
			incorrectCount: 0,
		},
		gameFinished: false,
		fishes: [...initialFishes],
		activeFish: initialFishes[0],
	};

	updateActiveFish() {
		const { fishes, activeFish } = this.state;
		if (fishes.length > 0 && activeFish !== fishes[0]) {
			this.setState({ activeFish: fishes[0] });
		}
	}

	componentDidUpdate(prevState: State) {
		if (prevState.fishes !== this.state.fishes) {
			this.updateActiveFish();
		}
	}

	handleGameFinish = () => {
		this.setState({ gameFinished: true });
	};

	handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const formElement = event.target as HTMLFormElement;
		const userInput = (
			formElement.elements.namedItem("fish-guess") as HTMLInputElement
		).value.toLowerCase();
		const nextFishName = this.state.activeFish.name.toLowerCase();
		const isCorrect = userInput === nextFishName;

		if (isCorrect) {
			this.setState((prevState) => ({
				score: {
					...prevState.score,
					correctCount: prevState.score.correctCount + 1,
				},
			}));
		} else {
			this.setState((prevState) => ({
				score: {
					...prevState.score,
					incorrectCount: prevState.score.incorrectCount + 1,
				},
			}));
		}

		const updatedFishes = this.state.fishes.filter(
			(fish) => fish.name !== this.state.activeFish.name
		);

		if (updatedFishes.length === 0) {
			this.handleGameFinish();
		} else {
			(event.target as HTMLFormElement).reset();
		}

		this.setState({ fishes: updatedFishes });
	};

	render() {
		const { score, gameFinished, fishes, activeFish } = this.state;

		return (
			<>
				{gameFinished ? (
					<ClassFinalScore score={score} />
				) : (
					<>
						<ClassScoreBoard
							score={score}
							answersLeft={fishes.map((fish) => fish.name)}
						/>
						{!gameFinished && (
							<ClassGameBoard
								activeFish={activeFish}
								handleSubmit={this.handleSubmit}
							/>
						)}
					</>
				)}
			</>
		);
	}
}
