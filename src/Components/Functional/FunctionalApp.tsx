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
	const [score, setScore] = useState<{
		correctCount: number;
		incorrectCount: number;
	}>({
		correctCount: 0,
		incorrectCount: 0,
	});
	const [gameFinished, setGameFinished] = useState(false);
	const [fishes, setFishes] = useState([...initialFishes]);
	const activeFish = fishes[0];

	const handleGameFinish = () => {
		setGameFinished(true);
	};

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const formElement = event.target as HTMLFormElement;
		const userInput = (
			formElement.elements.namedItem("fish-guess") as HTMLInputElement
		).value.toLowerCase();
		const nextFishName = activeFish.name.toLowerCase();
		const isCorrect = userInput === nextFishName;

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

		const updatedFishes = fishes.filter(
			(fish) => fish.name !== activeFish.name
		);

		if (updatedFishes.length === 0) {
			handleGameFinish();
		} else {
			(event.target as HTMLFormElement).reset();
		}

		setFishes(updatedFishes);
	};

	return (
		<>
			{gameFinished ? (
				<>
					<FunctionalFinalScore score={score} />
				</>
			) : (
				<>
					<FunctionalScoreBoard
						score={score}
						answersLeft={fishes.map((fish) => fish.name)}
					/>
					<FunctionalGameBoard
						activeFish={activeFish}
						handleSubmit={handleSubmit}
					/>
				</>
			)}
		</>
	);
}
