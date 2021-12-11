import styles from "./HomePage.css";
import { useState, useEffect } from "react";
import axios from "axios";

const ApiUrl = "https://liftie.info/resort/alpine";

function HomePage() {
	const [weather, setWeather] = useState([]);

	const getWeather = async () => {
		try {
			const response = await axios.get();
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
