import { useState } from "react";
import { FunctionalGameBoard } from "./FunctionalGameBoard";
import { FunctionalScoreBoard } from "./FunctionalScoreBoard";
import { FunctionalFinalScore } from "./FunctionalFinalScore";

export function FunctionalApp() {
	const [score, setScore] = useState<{
		correctCount: number;
		incorrectCount: number;
	}>({
		correctCount: 0,
		incorrectCount: 0,
	});
	const [gameFinished, setGameFinished] = useState(false);
	const [fishName, setFishName] = useState("");

	const handleGameFinish = () => {
		setGameFinished(true);
	};

	return (
		<>
			<FunctionalScoreBoard score={score} fishName={fishName} />
			<FunctionalGameBoard
				setScore={setScore}
				setFishName={setFishName}
				gameFinished={gameFinished}
				handleGameFinish={handleGameFinish}
			/>
			{gameFinished && <FunctionalFinalScore score={score} />}
		</>
	);
}
