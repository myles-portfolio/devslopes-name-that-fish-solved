import "./styles/score-board.css";

interface ScoreBoardProps {
	score: { correctCount: number; incorrectCount: number };
	answersLeft: string[];
}

export function FunctionalScoreBoard({ score, answersLeft }: ScoreBoardProps) {
	const { correctCount, incorrectCount } = score;

	return (
		<div id="score-board">
			<div>Incorrect 🔻: {incorrectCount}</div>
			<div id="choices-left">
				{answersLeft.map((answer) => (
					<div key={answer} className="choice">
						{answer}
					</div>
				))}
			</div>
			<div>Correct ✅: {correctCount}</div>
		</div>
	);
}
