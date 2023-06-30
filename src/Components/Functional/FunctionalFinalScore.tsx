import "./styles/final-score.css";

interface FinalScorePS {
	score: { correctCount: number; incorrectCount: number };
}

export const FunctionalFinalScore: React.FC<FinalScorePS> = ({ score }) => {
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
};
