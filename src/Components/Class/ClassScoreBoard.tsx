import React from "react";
import "./styles/score-board.css";

interface ScoreBoardProps {
	correctAnswerCount: number;
	incorrectAnswerCount: number;
	answersLeft: string[];
}

export class ClassScoreBoard extends React.Component<ScoreBoardProps> {
	render() {
		const { correctAnswerCount, incorrectAnswerCount, answersLeft } =
			this.props;

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
}
