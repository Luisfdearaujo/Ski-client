import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

function SlopeDetailsPage() {
	const [slope, setSlope] = useState(null);
	const { slopeId } = useParams();
	// Make an axios call when the component is created
	// and get the project details from the server

	const getSlope = async () => {
		try {
			const response = await axios.get(
				"http://localhost:5005/api/slope/current" + slopeId
			);
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
		<div className="SlopesDetailsPage">
			<h3>Slopes</h3>
			<Link to={"/slopes/edit"}>
				<button>Edit Slope</button>
			</Link>

			{/* <Add refreshProjects={getAllProjects} /> */}

			{slope &&
				slope.map((oneSlope) => {
					console.log(oneSlope);
					return (
						<div className="SlopeCard card" key={oneSlope._id}>
							<img
								src={oneSlope.image}
								alt=""
								style={{ height: "300px", overflow: "scroll" }}
							/>
							<h3>{oneSlope.name}</h3>
							<h4>{oneSlope.country}</h4>
							<p> rating: {oneSlope.rating} </p>
							<p>{oneSlope.comments}</p>
							<p>Date: {oneSlope.created}</p>
							<p>By: {oneSlope.user}</p>
						</div>
					);
				})}
		</div>
	);
}

export default SlopeDetailsPage;
