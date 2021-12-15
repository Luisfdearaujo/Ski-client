import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import AddSlopePage from "../AddSlopePage/AddSlopePage";
import styles from "./SlopesListPage.css";

function SlopesListPage() {
	const [slopes, setSlopes] = useState([]);
	const [search, setSearch] = useState("");

	const getAllSlopes = async () => {
		try {
			const response = await axios.get(
				`${process.env.REACT_APP_SERVER_URL}/api/slope/current` //params filter/find
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
			<div className="SlopesListPage-all">
				<h3>
					<b> Slopes</b>
				</h3>
				<div className="container">
					<div className="row height d-flex justify-content-center align-items-center">
						<div className="col-md-6">
							<div className="form">
								{" "}
								<i className="fa fa-search"></i>{" "}
								<input
									type="text"
									class="form-control form-input"
									placeholder="Search anything..."
									onChange={(event) => {
										setSearch(event.target.value);
									}}
								/>{" "}
								<span class="left-pan">
									<i class="fa fa-search"></i>
								</span>{" "}
							</div>
						</div>
					</div>
				</div>
			</div>
			<Link to={"/slopes/add"}>
				<button>Add Slope</button>
			</Link>

			{/* <Add refreshProjects={getAllProjects} /> */}
			<div className="SlopesListPage-cointainer">
				{slopes
					.filter((val) => {
						if (search === "") {
							return val;
						} else if (val.name.toLowerCase().includes(search.toLowerCase())) {
							return val;
						}
					})
					.map((oneSlope) => {
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
