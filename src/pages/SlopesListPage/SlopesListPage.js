import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import AddSlopePage from "../AddSlopePage/AddSlopePage";

function SlopesListPage() {
	const [slopes, setSlopes] = useState([]);

	const getAllSlopes = async () => {
		try {
			const response = await axios.get(
				"http://localhost:5005/api/slope/current" //params filter/find
			);
			setSlopes(response.data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getAllSlopes();
	}, []);

	return (
		<div className="SlopesListPage">
			<h3>Slopes</h3>
			<Link to={"/slopes/add"}>
				<button>Add Slope</button>
			</Link>

			{/* <Add refreshProjects={getAllProjects} /> */}

			{slopes.map((oneSlope) => {
				return (
					<div className="SlopeCard card" key={oneSlope._id}>
						<Link to={"/slope/detail/" + oneSlope._id}>
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
						</Link>
					</div>
				);
			})}
		</div>
	);
}

export default SlopesListPage;
