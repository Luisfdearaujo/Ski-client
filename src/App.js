import "./App.css";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";

import HomePage from "./pages/HomePage/HomePage";
import SignupPage from "./pages/SignupPage/SignupPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";

import IsPrivate from "./components/IsPrivate/IsPrivate";
import IsAnon from "./components/IsAnon/IsAnon";
import SlopesListPage from "./pages/SlopesListPage/SlopesListPage";
import AddSlopePage from "./pages/AddSlopePage/AddSlopePage";
import SlopeDetailsPage from "./pages/SlopeDetailsPage/SlopeDetailsPage";
import EditSlopePage from "./pages/EditSlopePage/EditSlopePage";

function App() {
	return (
		<div className="App">
			<Navbar />

			<Routes>
				<Route path="/" element={<HomePage />} />

				<Route
					path="/profile"
					element={
						<IsPrivate>
							{" "}
							<ProfilePage />{" "}
						</IsPrivate>
					}
				/>

				<Route
					path="/signup"
					element={
						<IsAnon>
							{" "}
							<SignupPage />{" "}
						</IsAnon>
					}
				/>
				<Route
					path="/login"
					element={
						<IsAnon>
							{" "}
							<LoginPage />{" "}
						</IsAnon>
					}
				/>

				<Route
					path="/slopes"
					element={
						<IsPrivate>
							<SlopesListPage />
						</IsPrivate>
					}
				/>
				<Route path="/slopes/add" element={<AddSlopePage />} />

				<Route path="/slope/detail/:slopeId" element={<SlopeDetailsPage />} />

				<Route path="/slope/edit/:slopeId" element={<EditSlopePage />} />

				<Route path="*" element={<ErrorPage />} />
			</Routes>
		</div>
	);
}

export default App;
