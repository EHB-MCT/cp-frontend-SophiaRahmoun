import React from "react";
import StoryList from "./components/StoryList";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import SearchFilter from "./components/SearchFilter";
import Stories from "./components/Stories";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";

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
				<Stories />
			</div>
			<footer className="app-footer">
				<Footer />
			</footer>
		</div>
	);
}

export default App;
