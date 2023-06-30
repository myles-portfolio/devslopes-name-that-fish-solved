import "./styles/score-board.css";

interface ScoreBoardProps {
	correctAnswerCount: number;
	incorrectAnswerCount: number;
	answersLeft: string[];
}

export function FunctionalScoreBoard({
	correctAnswerCount,
	incorrectAnswerCount,
	answersLeft,
}: ScoreBoardProps) {
	return (
		<div id="score-board">
			<div>Incorrect 🔻: {incorrectAnswerCount}</div>
			<div id="choices-left">
				{answersLeft.map((answer) => (
					<div key={answer} className="choice">
						{answer}
					</div>
				))}
			</div>
			<div>Correct ✅: {correctAnswerCount}</div>
		</div>
	);
}
