import "./styles/game-board.css";

interface GameBoardProps {
	activeFish: { name: string; url: string };
	guessValidation: (event: React.FormEvent<HTMLFormElement>) => void;
	handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	guess: string;
}

export function FunctionalGameBoard({
	activeFish,
	guessValidation,
	handleInputChange,
	guess,
}: GameBoardProps) {
	return (
		<div id="game-board">
			<div id="fish-container">
				<img src={activeFish.url} alt={activeFish.name} />
			</div>
			<form id="fish-guess-form" onSubmit={guessValidation}>
				<label htmlFor="fish-guess">What kind of fish is this?</label>
				<input
					type="text"
					name="fish-guess"
					value={guess}
					onChange={handleInputChange}
				/>
				<input type="submit" />
			</form>
		</div>
	);
}
