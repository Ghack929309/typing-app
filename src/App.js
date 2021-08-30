import React from "react";
import useWord from "./Hook/useWord";
function App() {
	const { textRef, text, handleChange, countdown, timer, startGame, wpm } =
		useWord();

	return (
		<div>
			<h1>How fast do you type ?</h1>
			<textarea
				ref={textRef}
				value={text}
				onChange={handleChange}
				disabled={!countdown}
			/>
			<h4>Time remaining:{timer}</h4>
			<button onClick={startGame} disabled={countdown}>
				Start
			</button>
			<h1>words per minutes:{wpm}</h1>
		</div>
	);
}

export default App;
