import React from "react";
import TraficLight from "./TraficLight.jsx";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	return (
		<div>
			<TraficLight />
		</div>
	);
}
