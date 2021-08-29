import React, { useState, useEffect, useRef } from "react";
function App() {
	const TIME_STARTER = 10;
	const [text, setText] = useState("");
	const [timer, setTimer] = useState(TIME_STARTER);
	const [countdown, setCountdown] = useState(false);
	const [wpm, setWpm] = useState(0);
	const textRef = useRef(null);

	useEffect(() => {
		if (timer > 0 && countdown) {
			setTimeout(() => {
				setTimer((time) => time - 1);
				textRef.current.focus();
			}, 1000);
		} else if (timer === 0) {
			endGame();
		}
	}, [timer, countdown]);

	const handleChange = (e) => {
		const { value } = e.target;
		setText(value);
	};

	const wordCountCalculator = (text) => {
		const wordCounter = text.trim().split(" ");
		return wordCounter.filter((word) => word !== "").length;
	};
	const startGame = () => {
		setCountdown(true);
		setText("");
		setWpm();
		setTimer(TIME_STARTER);
	};
	const endGame = () => {
		clearTimeout(timer);
		const wpmCounter = wordCountCalculator(text);
		setWpm(wpmCounter);
		setCountdown(false);
	};
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
