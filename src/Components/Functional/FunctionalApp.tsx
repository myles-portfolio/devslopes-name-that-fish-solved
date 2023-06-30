import { FunctionalGameBoard } from "./FunctionalGameBoard";
import { FunctionalScoreBoard } from "./FunctionalScoreBoard";
import { FunctionalFinalScore } from "./FunctionalFinalScore";
import { useState } from "react";
import { Images } from "../../assets/Images";

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

export function FunctionalApp() {
	const [correctAnswerCount, setCorrectAnswerCount] = useState(0);
	const [incorrectAnswerCount, setIncorrectAnswerCount] = useState(0);
	const [fishes, setFishes] = useState([...initialFishes]);
	const [guess, setGuess] = useState("");

	const activeFish = fishes[0];
	const isGameFinished = fishes.length === 0;

	const guessValidation = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const fishName = activeFish.name.toLowerCase();
		const isCorrect = guess === fishName;

		if (isCorrect) {
			setCorrectAnswerCount((prevCount) => prevCount + 1);
		} else {
			setIncorrectAnswerCount((prevCount) => prevCount + 1);
		}

		const updatedFishes = fishes.filter(
			(fish) => fish.name !== activeFish.name
		);

		setGuess("");
		setFishes(updatedFishes);
	};

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setGuess(event.target.value);
	};

	return (
		<>
			{isGameFinished ? (
				<>
					<FunctionalFinalScore
						correctAnswerCount={correctAnswerCount}
						incorrectAnswerCount={incorrectAnswerCount}
					/>
				</>
			) : (
				<>
					<FunctionalScoreBoard
						correctAnswerCount={correctAnswerCount}
						incorrectAnswerCount={incorrectAnswerCount}
						answersLeft={fishes.map((fish) => fish.name)}
					/>
					<FunctionalGameBoard
						activeFish={activeFish}
						guessValidation={guessValidation}
						handleInputChange={handleInputChange}
						guess={guess}
					/>
				</>
			)}
		</>
	);
}
