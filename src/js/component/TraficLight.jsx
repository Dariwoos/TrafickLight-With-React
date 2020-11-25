import React, { useState } from "react";
import "../../styles/TraficLight.css";

function TraficLight() {
	const [red, setRed] = useState(false);
	const [yellow, setYellow] = useState(false);
	const [green, setGreen] = useState(false);

	const redClicked = () => {
		setRed(true);
		setYellow(false);
		setGreen(false);
	};
	const yellowClicked = () => {
		setRed(false);
		setYellow(true);
		setGreen(false);
	};
	const greenClicked = () => {
		setRed(false);
		setYellow(false);
		setGreen(true);
	};

	return (
		<div>
			<div className="holder" />
			<div className="container">
				{red ? (
					<div className="red active" onClick={redClicked} />
				) : (
					<div className="red" onClick={redClicked} />
				)}
				{yellow ? (
					<div className="yellow active" onClick={yellowClicked} />
				) : (
					<div className="yellow" onClick={yellowClicked} />
				)}
				{green ? (
					<div className="green active" onClick={greenClicked} />
				) : (
					<div className="green" onClick={greenClicked} />
				)}
			</div>
		</div>
	);
}
export default TraficLight;
