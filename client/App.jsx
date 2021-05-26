import React, { useState, useEffect } from "react";
import Carousel from "./Carousel";
import Slide from "./Slide";

function App() {
	const [carToggle, setCarToggle] = useState(false);

	return (
		<div className='app'>
			<button
				className={carToggle ? "fashionButton" : "carButton"}
				onClick={() => setCarToggle(!carToggle)}
			>
				{carToggle ? "Show Fashion".toUpperCase() : "Show Cars".toUpperCase()}
			</button>
			{carToggle ? (
				<Carousel
					toggle={carToggle}
					url={"https://frontend-assessment-service.vcomm.io/cars"}
				/>
			) : (
				<Carousel
					toggle={carToggle}
					url={"https://frontend-assessment-service.vcomm.io/"}
				/>
			)}
		</div>
	);
}

export default App;
