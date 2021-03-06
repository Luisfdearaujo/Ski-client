import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router";
import styles from "./EditSlopePage.css";

const API_URL =
	`${process.env.REACT_APP_SERVER_URL}` || "http://localhost:5005";

function EditSlopePage(props) {
	const [name, setName] = useState("");
	const [country, setCountry] = useState("");
	const [level, setLevel] = useState("");
	const [image, setImage] = useState("");
	const [created, setCreated] = useState("");
	const [comments, setComments] = useState("");
	const [rating, setRating] = useState(1);

	const { slopeId } = useParams();
	const navigate = useNavigate();

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(
					API_URL + "/api/slope/current/" + slopeId
				);
				const oneSlope = response.data;

				setName(oneSlope.name);
				setCountry(oneSlope.country);
				setLevel(oneSlope.level);
				setImage(oneSlope.image);
				setCreated(oneSlope.created);
				setComments(oneSlope.comments);
				setRating(oneSlope.rating);
			} catch (error) {}
		};
		fetchData();
	}, []);

	const handleSubmit = async (e) => {
		try {
			e.preventDefault();
			const updatedSlope = {
				name: name,
				country: country,
				level: level,
				image: image,
				created: created,
				comments: comments,
				rating: rating,
			};

			await axios.put(
				`${process.env.REACT_APP_SERVER_URL}/api/slope/current/` + slopeId,
				updatedSlope
			);

			setName("");
			setCountry("");
			setLevel("");
			setImage("");
			setCreated("");
			setComments("");
			setRating(1);
			navigate("/slope/detail/" + slopeId);
		} catch (error) {}
	};

	return (
		<div className="EditSlopePage">
			<h3>Edit Slope</h3>
			<div className="container">
				<form onSubmit={handleSubmit}>
					<label>Name:</label>
					<input
						type="text"
						name="name"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>

					<label>Country:</label>
					<input
						type="text"
						name="country"
						value={country}
						onChange={(e) => setCountry(e.target.value)}
					/>

					<label>Level:</label>
					{/* <select
						onChange={(e) => setLevel(e.target.value)}
						selected
						name="level"
						id="level"
					>
						<option value={level} selected hidden>
							{level}
						</option>
						<option value="beginner">beginner</option>
						<option value="intermediate">intermediate</option>
						<option value="pro">pro</option>
					</select> */}
					<input
						name="level"
						type="text"
						value={level}
						onChange={(e) => setLevel(e.target.value)}
					/>

					<label>Image:</label>
					<input
						type="text"
						name="name"
						value={image}
						onChange={(e) => setImage(e.target.value)}
					/>

					<label>Date:</label>
					<input
						type="date"
						name="date"
						value={created}
						onChange={(e) => setCreated(e.target.value)}
					/>

					<label>Comments:</label>
					<input
						type="text"
						name="comments"
						value={comments}
						onChange={(e) => setComments(e.target.value)}
					/>

					<label>Rating:</label>
					<input
						type="text"
						name="rating"
						value={rating}
						onChange={(e) => setRating(e.target.value)}
					/>
					<button type="submit" value="Submit">
						Submit
					</button>
				</form>
			</div>
		</div>
	);
}

export default EditSlopePage;
