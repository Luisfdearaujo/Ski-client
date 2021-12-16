import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../../context/auth.context";
import { useNavigate } from "react-router-dom";
import styles from "./AddSlopePage.css";

import fileService from "../../services/file.services";

function AddSlopePage() {
	const [name, setName] = useState("");
	const [country, setCountry] = useState("");
	const [level, setLevel] = useState("");
	const [image, setImage] = useState("");
	const [created, setCreated] = useState("");
	const [comments, setComments] = useState("");
	const [rating, setRating] = useState(1);
	const [imageUrl, setImageUrl] = useState("");
	const [allowSubmit, setAllowSubmit] = useState(false);
	const [errorMessage, setErrorMessage] = useState(undefined);

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
			await axios.post(
				`${process.env.REACT_APP_SERVER_URL}/api/slope/current`,
				slopeData
			);
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

	// const handleFileUpload = async (e) => {
	// 	setAllowSubmit(true);
	// 	try {
	// 		const uploadData = new FormData();

	// 		uploadData.append("imageUrl", e.target.files[0]); // <-- set the file in the form

	// 		const response = await fileService.uploadImage(uploadData);

	// 		setImageUrl(response.data.secure_url);
	// 		setAllowSubmit(false);
	// 	} catch (error) {
	// 		console.log(error);
	// 		setErrorMessage("Failed to upload the file");
	// 	}
	// };

	return (
		<div className="AddSlopePage">
			<div className="image">
				<div className="AddSlopePage-container">
					<h1>Add Slope</h1>

					<form className="form" onSubmit={handleSubmit}>
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

						{/* <img src={imageUrl} width="100px" alt="" />
						<input type="file" onChange={handleFileUpload} /> */}

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

						<button type="submit" disabled={allowSubmit}>
							Create Slope
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}

export default AddSlopePage;
