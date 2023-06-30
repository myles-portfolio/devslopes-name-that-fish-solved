import "./styles/final-score.css";

interface FinalScoreProps {
	correctAnswerCount: number;
	incorrectAnswerCount: number;
}

export function FunctionalFinalScore({
	correctAnswerCount,
	incorrectAnswerCount,
}: FinalScoreProps) {
	return (
		<div id="final-score">
			<h1>Your Final Score Was</h1>
			<div id="score">
				<p id="final-correct">{correctAnswerCount}</p>
				<hr />
				<p id="final-incorrect">{incorrectAnswerCount}</p>
			</div>
		</div>
	);
}
