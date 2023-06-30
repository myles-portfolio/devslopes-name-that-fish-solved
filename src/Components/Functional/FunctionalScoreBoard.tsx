import { useEffect, useState } from "react";
import "./styles/score-board.css";

interface ScorePS {
	score: { correctCount: number; incorrectCount: number };
	fishName: string;
}

export function FunctionalScoreBoard({ score, fishName }: ScorePS) {
	const initialAnswersLeft = ["trout", "salmon", "tuna", "shark"];
	const [answersLeft, setAnswersLeft] = useState(initialAnswersLeft);

	useEffect(() => {
		setAnswersLeft((prevAnswersLeft) =>
			prevAnswersLeft.filter((answer) => answer !== fishName)
		);
	}, [fishName]);

	return (
		<div id="score-board">
			<div>Incorrect 🔻: {score.incorrectCount}</div>
			<div id="choices-left">
				{answersLeft.map((answer) => (
					<div key={answer} className="choice">
						{answer}
					</div>
				))}
			</div>
			<div>Correct ✅: {score.correctCount}</div>
		</div>
	);
}
