import React from "react";
import StoryList from "./components/StoryList";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import SearchFilter from "./components/SearchFilter";

<BrowserRouter basename="/cp-frontend-SophiaRahmoun/">
	<App />
</BrowserRouter>;

function App() {
	return (
		<div className="app">
			<header className="app-header">
				<img src="./src/assets/logo.png" alt="Logo" className="logo" />
				<nav className="nav">
					<ul className="nav-list">
						<li>
							<a href="/">SPROOKJES</a>
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
				<StoryList />
			</div>
			<footer className="app-footer">
				<p>&copy; 2023 Sophia Rahmoun</p>
				<p>All rights reserved</p>
				</footer>
		</div>
	);
}

export default App;
