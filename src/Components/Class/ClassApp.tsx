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
		correctAnswerCount: 0,
		incorrectAnswerCount: 0,
		guess: "",
		fishes: [...initialFishes],
	};

	guessValidation = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const { guess, fishes } = this.state;
		const fishName = fishes[0].name.toLowerCase();
		const isCorrect = guess.toLowerCase() === fishName;

		if (isCorrect) {
			this.setState((prevState) => ({
				correctAnswerCount: prevState.correctAnswerCount + 1,
			}));
		} else {
			this.setState((prevState) => ({
				incorrectAnswerCount: prevState.incorrectAnswerCount + 1,
			}));
		}

		const updatedFishes = fishes.slice(1);

		(event.target as HTMLFormElement).reset();

		this.setState({ fishes: updatedFishes, guess: "" });
	};

	handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		this.setState({ guess: event.target.value });
	};

	render() {
		const { correctAnswerCount, incorrectAnswerCount, guess, fishes } =
			this.state;
		const isGameFinished = fishes.length === 0;

		return (
			<>
				{isGameFinished ? (
					<ClassFinalScore
						correctAnswerCount={correctAnswerCount}
						incorrectAnswerCount={incorrectAnswerCount}
					/>
				) : (
					<>
						<ClassScoreBoard
							correctAnswerCount={correctAnswerCount}
							incorrectAnswerCount={incorrectAnswerCount}
							answersLeft={fishes.map((fish) => fish.name)}
						/>
						{!isGameFinished && (
							<ClassGameBoard
								activeFish={fishes[0]}
								guessValidation={this.guessValidation}
								handleInputChange={this.handleInputChange}
								guess={guess}
							/>
						)}
					</>
				)}
			</>
		);
	}
}
