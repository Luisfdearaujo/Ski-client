import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../../context/auth.context";
import { useNavigate } from "react-router-dom";

function AddSlopePage() {
	const [name, setName] = useState("");
	const [country, setCountry] = useState("");
	const [level, setLevel] = useState("");
	const [image, setImage] = useState("");
	const [created, setCreated] = useState("");
	const [comments, setComments] = useState("");
	const [rating, setRating] = useState(1);

	const { user } = useContext(AuthContext);

	const handleName = (e) => setName(e.target.value);
	const handleCountry = (e) => setCountry(e.target.value);
	const handleLevel = (e) => setLevel(e.target.value);
	const handleImage = (e) => setImage(e.target.value);
	const handleCreate = (e) => setCreated(e.target.value);
	const handleComments = (e) => setComments(e.target.value);
	const handleRating = (e) => setRating(e.target.value);

	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		try {
			e.preventDefault(); //prevent the page reload

			const slopeData = {
				name,
				country,
				level,
				image,
				created,
				comments,
				rating,
				user: user._id,
			};
			console.log("test", slopeData);
			await axios.post("http://localhost:5005/api/slope/current", slopeData);
			//Clear the form
			setName("");
			setCountry("");
			setLevel("");
			setImage("");
			setCreated("");
			setComments("");
			setRating(1);

			navigate("/slopes");
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="AddSlopePage">
			<div className="image">
				<h1>Add Slope</h1>

				<form onSubmit={handleSubmit}>
					<label>Name</label>
					<input type="text" name="name" value={name} onChange={handleName} />

					<label>Country</label>
					<input
						type="text"
						name="country"
						value={country}
						onChange={handleCountry}
					/>

					<label>Level</label>
					<input
						type="text"
						name="level"
						value={level}
						onChange={handleLevel}
					/>

					<label>image</label>
					<input
						type="text"
						name="image"
						value={image}
						onChange={handleImage}
					/>

					<label>Date</label>
					<input
						type="date"
						name="created"
						value={created}
						onChange={handleCreate}
					/>

					<label>Comments</label>
					<input
						type="text"
						name="comments"
						value={comments}
						onChange={handleComments}
					/>

					<label>Rating</label>
					<input
						type="number"
						name="rating"
						value={rating}
						onChange={handleRating}
					/>

					<button type="submit">Create Slope</button>
				</form>
			</div>
		</div>
	);
}

export default AddSlopePage;
