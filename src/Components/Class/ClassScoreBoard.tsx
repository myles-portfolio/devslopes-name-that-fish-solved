import { Component } from "react";
import "./styles/score-board.css";

interface ScoreBoardPS {
	score: {
		correctCount: number;
		incorrectCount: number;
	};
	fishName: string;
	answersLeft: string[];
}

export class ClassScoreBoard extends Component<ScoreBoardPS> {
	state = {
		answersLeft: ["trout", "salmon", "tuna", "shark"],
	};

	componentDidMount() {
		const { fishName } = this.props;
		this.setAnswersLeft((prevAnswersLeft) =>
			prevAnswersLeft.filter((answer) => answer !== fishName)
		);
	}

	componentDidUpdate(prevProps: ScoreBoardPS) {
		const { fishName } = this.props;
		if (fishName !== prevProps.fishName) {
			this.setAnswersLeft((prevAnswersLeft) =>
				prevAnswersLeft.filter((answer) => answer !== fishName)
			);
		}
	}

	setAnswersLeft = (callback: (prevAnswersLeft: string[]) => string[]) => {
		this.setState((prevState: ScoreBoardPS) => ({
			answersLeft: callback(prevState.answersLeft),
		}));
	};

	render() {
		const { score } = this.props;
		const { answersLeft } = this.state;

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
}
