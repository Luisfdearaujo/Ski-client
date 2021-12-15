import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import styles from "./SlopeDetailsPage.css";
import exampleService from "../../services/slope.service";

function SlopeDetailsPage() {
	const [slope, setSlope] = useState([]);
	const [slopeData, setSlopeData] = useState("");
	const { slopeId } = useParams();
	// Make an axios call when the component is created
	// and get the project details from the server
	const apiRest = `${process.env.REACT_APP_SERVER_URL}/api/slope/current`;

	useEffect(() => {
		const getSlope = async () => {
			try {
				const response = await axios.get(`${apiRest}/${slopeId}`); //with +  / the code breaks
				const oneSlope = response.data;
				setSlope(oneSlope);

				const dataStr = response.data.created.toString();
				const data = dataStr.substring(0, 10);
				console.log(data);
				setSlopeData(data);
			} catch (error) {
				console.log(error);
			}
		};

		getSlope();
	}, []);

	const deleteSlope = async () => {
		const response = await exampleService.deleteProject(slopeId);
		const responseData = response.data;
		setSlope(responseData);
	};

	return (
		<div className="SlopesDetailsPage">
			<h3>
				<b>Slopes</b>
			</h3>
			<div className="SlopeCard card" key={slope._id}>
				<div className="container">
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

					<p>Date: {slopeData}</p>
				</div>
				<form>
					<label>
						<textarea name="" id="" cols="10" rows="1">
							{slope.comments}
						</textarea>
					</label>
				</form>
				{slope.user && <p>Created by: {slope.user.name}</p>}
				<Link to={"/slopes"}>
					<button onClick={deleteSlope}>Delete</button>
				</Link>
			</div>
		</div>
	);
}

export default SlopeDetailsPage;
