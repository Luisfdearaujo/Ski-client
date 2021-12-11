import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import AddSlopePage from "../AddSlopePage/AddSlopePage";
import styles from "./SlopesListPage.css";

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
			<div className="SlopesListPage-cointainer">
				{slopes.map((oneSlope) => {
					return (
						<div className="SlopeCard card" key={oneSlope._id}>
							<Link to={"/slope/detail/" + oneSlope._id}>
								<div className="slope-list-card">
									<div className="slope-card-image-col">
										<img
											src={oneSlope.image}
											alt=""
											style={{
												height: "300px",
												width: "75%",
												overflow: "scroll",
											}}
										/>
									</div>
									<div className="slope-card-info-col">
										<h3>
											<b>{oneSlope.name}</b>
										</h3>
										<h4>{oneSlope.country}</h4>
										<p> Rating: {oneSlope.rating} </p>
									</div>
								</div>
							</Link>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default SlopesListPage;
