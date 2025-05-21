import React from "react";
import StoryList from "./components/StoryList";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { useState } from "react";
import SearchFilter from "./components/SearchFilter";
import Stories from "./components/Stories";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";
import Dropdown from "react-bootstrap/Dropdown";

<BrowserRouter basename="/cp-frontend-SophiaRahmoun/">
	<App />
</BrowserRouter>;

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
	const [selectedGenre, setSelectedGenre] = useState("All");

	return (
		<div className="app">
			<header className="app-header">
				<img src="./src/assets/logo.png" alt="Logo" className="logo" />
				<nav className="nav">
					<ul className="nav-list">
						<li>
							<Dropdown>
								<Dropdown.Toggle variant="dark" id="dropdown-basic">
									Sprookjes
								</Dropdown.Toggle>
								<Dropdown.Menu>
									{genres.map((genre, i) => (
										<Dropdown.Item
											key={i}
											onClick={() => setSelectedGenre(genre)}
										>
											{genre}
										</Dropdown.Item>
									))}
								</Dropdown.Menu>
							</Dropdown>
						</li>
						<li>
							<a href="/stories">MAKING OF</a>
						</li>
						<li>
							<a href="/about">ABOUT US</a>
						</li>
						<li>
							<SearchFilter />
						</li>
					</ul>
				</nav>
			</header>
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
