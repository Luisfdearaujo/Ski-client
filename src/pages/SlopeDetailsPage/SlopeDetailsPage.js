import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

function SlopeDetailsPage() {
	const [slope, setSlope] = useState([]);
	const { slopeId } = useParams();
	// Make an axios call when the component is created
	// and get the project details from the server
	const apiRest = "http://localhost:5005/api/slope/current";

	useEffect(() => {
		const getSlope = async () => {
			try {
				const response = await axios.get(`${apiRest}/${slopeId}`); //with +  / the code breaks
				const oneSlope = response.data;
				setSlope(oneSlope);
			} catch (error) {
				console.log(error);
			}
		};

		getSlope();
	}, []);

	return (
		<div className="SlopesDetailsPage">
			<h3>Slopes</h3>
			<div className="SlopeCard card" key={slope._id}>
				<img
					src={slope.image}
					alt=""
					style={{ height: "300px", overflow: "scroll" }}
				/>
				<h3>{slope.name}</h3>
				<h4>{slope.country}</h4>
				<p> rating: {slope.rating} </p>
				<p>{slope.comments}</p>
				<p>Date: {slope.created}</p>
				<p>By: {slope.user}</p>
			</div>
		</div>
	);
}

export default SlopeDetailsPage;
