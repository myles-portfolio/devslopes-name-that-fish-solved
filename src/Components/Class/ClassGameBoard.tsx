import { Component, FormEvent } from "react";
import { Images } from "../../assets/Images";

interface GameBoardPS {
	handleScoreChange: (isCorrect: boolean) => void;
	setFishName: (newFishName: string) => void;
	gameFinished: boolean;
	handleGameFinish: () => void;
	currentFishIndex: number;
}

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

export class ClassGameBoard extends Component<GameBoardPS> {
	handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const formElement = event.target as HTMLFormElement;
		const userInput = (
			formElement.elements.namedItem("fish-guess") as HTMLInputElement
		).value.toLowerCase();
		const {
			setFishName,
			handleGameFinish,
			handleScoreChange,
			currentFishIndex,
		} = this.props;
		const currentFish = initialFishes[currentFishIndex];
		const currentFishName = currentFish.name.toLowerCase();
		const isCorrect = userInput === currentFishName;

		handleScoreChange(isCorrect);
		setFishName(currentFishName);

		if (currentFishIndex === initialFishes.length - 1) {
			handleGameFinish();
		} else {
			formElement.reset();
		}
	};

	render() {
		const { gameFinished, currentFishIndex } = this.props;
		const currentFish = initialFishes[currentFishIndex];

		if (gameFinished) {
			return null;
		}

		return (
			<div id="game-board">
				<div id="fish-container">
					<img src={currentFish.url} alt={currentFish.name} />
				</div>
				<form id="fish-guess-form" onSubmit={this.handleSubmit}>
					<label htmlFor="fish-guess">What kind of fish is this?</label>
					<input type="text" name="fish-guess" />
					<input type="submit" value="Submit" />
				</form>
			</div>
		);
	}
}
