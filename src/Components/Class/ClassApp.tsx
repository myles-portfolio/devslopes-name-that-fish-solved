import { Component } from "react";
import { ClassGameBoard } from "./ClassGameBoard";
import { ClassScoreBoard } from "./ClassScoreBoard";
import { ClassFinalScore } from "./ClassFinalScore";

interface AppPS {
	score: {
		correctCount: number;
		incorrectCount: number;
	};
	gameFinished: boolean;
	fishName: string;
	answersLeft: Array<string>;
	currentFishIndex: number;
}

export class ClassApp extends Component<object, AppPS> {
	state: AppPS = {
		score: {
			correctCount: 0,
			incorrectCount: 0,
		},
		gameFinished: false,
		fishName: "",
		answersLeft: [],
		currentFishIndex: 0,
	};

	handleScoreChange = (isCorrect: boolean) => {
		this.setState((prevState) => ({
			score: {
				correctCount: isCorrect
					? prevState.score.correctCount + 1
					: prevState.score.correctCount,
				incorrectCount: isCorrect
					? prevState.score.incorrectCount
					: prevState.score.incorrectCount + 1,
			},
		}));
	};

	handleGameFinish = () => {
		this.setState({ gameFinished: true });
	};

	setFishName = (newFishName: string) => {
		this.setState({ fishName: newFishName });
	};

	render() {
		const { score, fishName, gameFinished, answersLeft, currentFishIndex } =
			this.state;

		console.log("Score:", score);

		return (
			<>
				<ClassScoreBoard
					score={score}
					fishName={fishName}
					answersLeft={answersLeft}
				/>
				<ClassGameBoard
					handleScoreChange={this.handleScoreChange}
					setFishName={this.setFishName}
					gameFinished={gameFinished}
					handleGameFinish={this.handleGameFinish}
					currentFishIndex={currentFishIndex}
				/>
				{gameFinished && <ClassFinalScore score={score} />}
			</>
		);
	}
}
