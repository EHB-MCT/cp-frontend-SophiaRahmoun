import React from "react";
import StoryList from "./components/StoryList";
import "./index.css";
import { useState } from "react";
import SearchFilter from "../src/components/SearchFilter";
import Stories from "./components/Stories";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import Dropdown from "react-bootstrap/Dropdown";
import { useNavigate } from "react-router-dom";
import Sprookjes from "./pages/Sprookjes";


const genres = [
	"All",
	"fantasie",
	"avontuur",
	"horror",
	"fantasy",
	"folklore",
	"magisch",
	"muzikaal",
	"historical",
];

function App() {
	const navigate = useNavigate();
	const [selectedGenre, setSelectedGenre] = useState("All");

	return (
		<div className="app">
			<Navigation />
			<div className="wrapper">
				<h1>Hot Today</h1>
				<StoryList />
				<h1>Stories</h1>
				<Stories />
			</div>
			<footer className="app-footer">
				<Footer />
			</footer>
		</div>
	);
}

export default App;
