import "./styles/final-score.css";

interface FinalScoreProps {
	score: { correctCount: number; incorrectCount: number };
}

export function FunctionalFinalScore({ score }: FinalScoreProps) {
	return (
		<div id="final-score">
			<h1>Your Final Score Was</h1>
			<div id="score">
				<p>{score.correctCount}</p>
				<hr />
				<p>{score.incorrectCount}</p>
			</div>
		</div>
	);
}
