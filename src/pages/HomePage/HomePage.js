import styles from "./HomePage.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

const ApiUrl = "https://liftie.info/api/resort/val-gardena";

function HomePage() {
	const [slope, setSlope] = useState([]);
	const { slopeId } = useParams();

	const getSlope = async () => {
		try {
			const response = await axios.get(
				"https://liftie.info/api/resort/val-gardena"
			); //with +  / the code breaks
			const oneSlope = response.data;
			setSlope(oneSlope);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getSlope();
	}, []);

	return (
		<div ClassName="container-all">
			<div ClassName="container-part">
				<h1>SnowHill</h1>
				<h3> Keep up with your favorite resorts </h3>
				<Link to={"/slopes"}>
					<button>Checkout Resorts</button>
				</Link>
				<p>{slope.name}</p>
				<p>{slope.lifts}</p>
			</div>
		</div>
	);
}

export default HomePage;
