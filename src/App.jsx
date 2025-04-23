import React from "react";
import StoryList from "./components/StoryList";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

<BrowserRouter basename="/cp-frontend-SophiaRahmoun/">
	<App />
</BrowserRouter>;

function App() {
	return (
		<div className="app">
			<header className="app-header">
				<img src="logo.png" alt="Logo" className="logo" />
			</header>
			<h1>Hot Today</h1>
			<StoryList />
		</div>
	);
}

export default App;
