import styles from "./HomePage.css";
import { useState, useEffect } from "react";
import axios from "axios";

const ApiUrl = "https://liftie.info/api/resort/";

function HomePage() {
	const [weather, setWeather] = useState([]);

	const getWeather = async () => {
		try {
			const response = await axios.get(
				"https://liftie.info/api/resort/val-gardena"
			);
			console.log(response.data);
			setWeather(response.data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getWeather();
	}, []);
	return (
		<div>
			<h1>Home Page</h1>
			<p>{weather.name}</p>
		</div>
	);
}

export default HomePage;
