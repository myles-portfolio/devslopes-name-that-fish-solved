import "./styles/game-board.css";
import { Images } from "../../assets/Images";
import { useState } from "react";

interface GameBoardProps {
	setScore: React.Dispatch<
		React.SetStateAction<{ correctCount: number; incorrectCount: number }>
	>;
	setFishName: React.Dispatch<React.SetStateAction<string>>;
	gameFinished: boolean;
	handleGameFinish: () => void;
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

export function FunctionalGameBoard({
	setScore,
	setFishName,
	gameFinished,
	handleGameFinish,
}: GameBoardProps) {
	const [currentFishIndex, setCurrentFishIndex] = useState(0);
	const currentFish = initialFishes[currentFishIndex];

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const formElement = event.target as HTMLFormElement;
		const userInput = (
			formElement.elements.namedItem("fish-guess") as HTMLInputElement
		).value.toLowerCase();
		const currentFishName = currentFish.name.toLowerCase();
		const isCorrect = userInput === currentFishName;

		if (isCorrect) {
			setScore((prevScore) => ({
				...prevScore,
				correctCount: prevScore.correctCount + 1,
			}));
		} else {
			setScore((prevScore) => ({
				...prevScore,
				incorrectCount: prevScore.incorrectCount + 1,
			}));
		}

		setFishName(currentFishName);

		if (currentFishIndex === initialFishes.length - 1) {
			handleGameFinish();
		} else {
			setCurrentFishIndex(currentFishIndex + 1);
			(event.target as HTMLFormElement).reset();
		}
	};

	if (gameFinished) {
		return null;
	}
	return (
		<div id="game-board">
			<div id="fish-container">
				<img src={currentFish.url} alt={currentFish.name} />
			</div>
			<form id="fish-guess-form" onSubmit={handleSubmit}>
				<label htmlFor="fish-guess">What kind of fish is this?</label>
				<input type="text" name="fish-guess" />
				<input type="submit" value="Submit" />
			</form>
		</div>
	);
}
