import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import styles from "./SlopeDetailsPage.css";

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
				<div>
					<Link to={"/slope/edit/" + slope._id}>
						<button>Edit Slope</button>
					</Link>
				</div>
				<img
					className="image"
					src={slope.image}
					alt=""
					style={{ height: "350px", overflow: "scroll" }}
				/>
				<div className="slope-heading">
					<h3>{slope.name}</h3>
					<h4>{slope.country}</h4>
				</div>
				<div className="slope-subheading">
					<p> Rating: {slope.rating} </p>

					<p>Date: {slope.created}</p>
				</div>
				<form>
					<label>
						<textarea name="" id="" cols="10" rows="2">
							{slope.comments}
						</textarea>
					</label>
				</form>
				<p>By: {slope.user}</p>
			</div>
		</div>
	);
}

export default SlopeDetailsPage;
