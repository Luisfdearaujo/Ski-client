import { Link } from "react-router-dom";
import styles from "./Navbar.css";

import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";

function Navbar() {
	// Get the value from the context
	const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

	return (
		<nav className="Navbar">
			<div className="navbar-shortcuts">
				<Link to="/">
					<button className="button-home">Home</button>
				</Link>

				{isLoggedIn && (
					<>
						<Link to="/slopes">
							<button>Ski Resort</button>
						</Link>
						<button onClick={logOutUser}>Logout</button>
					</>
				)}

				{!isLoggedIn && (
					<>
						<Link to="/signup">
							<button>Sign Up</button>
						</Link>

						<Link to="/login">
							<button>Login</button>
						</Link>
					</>
				)}
			</div>
			<div className="profile-img-wrapper">
				{user && (
					<Link to="/profile">
						<img className="profile-img" src={user.image} alt="profile" />
					</Link>
				)}
			</div>
		</nav>
	);
}

export default Navbar;
