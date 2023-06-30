import { Component } from "react";
interface FinalScoreProps {
	score: { correctCount: number; incorrectCount: number };
}

export class ClassFinalScore extends Component<FinalScoreProps> {
	render() {
		const { score } = this.props;

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
}
