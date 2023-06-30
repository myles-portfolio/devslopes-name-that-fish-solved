import "./styles/game-board.css";

interface GameBoardProps {
	activeFish: { name: string; url: string };
	handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

export function FunctionalGameBoard({
	activeFish,
	handleSubmit,
}: GameBoardProps) {
	return (
		<div id="game-board">
			<div id="fish-container">
				<img src={activeFish.url} alt={activeFish.name} />
			</div>
			<form id="fish-guess-form" onSubmit={handleSubmit}>
				<label htmlFor="fish-guess">What kind of fish is this?</label>
				<input type="text" name="fish-guess" />
				<input type="submit" />
			</form>
		</div>
	);
}
