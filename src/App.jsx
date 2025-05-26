import React from "react";
import StoryList from "./components/StoryList";
import "./index.css";
import { useState } from "react";
import SearchFilter from "../src/components/SearchFilter";
import Stories from "./components/Stories";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import MakingOfTemplate from "./components/MakingOfTemplate";

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
	const [searchQuery, setSearchQuery] = useState("");
	const [allStories, setAllStories] = useState([]);
	const [selectedStory, setSelectedStory] = useState(null);
	useEffect(() => {
		fetch(
			"https://raw.githubusercontent.com/EHB-MCT/cp-frontend-MaximWesterbeek/refs/heads/main/course-project/public/api/fairytaleList.json"
		)
			.then((res) => res.json())
			.then((data) => setAllStories(data))
			.catch((err) => console.error("Error fetching stories:", err));
	}, []);
	const filteredStories = allStories.filter((story) =>
		story.fairytale.toLowerCase().includes(searchQuery.toLowerCase())
	);

	const handleStoryClick = (story) => {
		setSelectedStory(story);
	};
	return (
		<div className="app">
			<Navigation />
			<div className="wrapper">
				<h1 className="standard-title">Hot Today</h1>
				<StoryList />
				<SearchFilter onSearch={setSearchQuery} />
				<h1 className="standard-title">Stories</h1>
				<Stories
					searchQuery={searchQuery}
					onStoryClick={setSelectedStory}
				/>{" "}
			</div>
			<footer className="app-footer">
				<Footer />
			</footer>
			{selectedStory && (
				<MakingOfTemplate
					story={selectedStory}
					onClose={() => setSelectedStory(null)}
				/>
			)}
		</div>
	);
}

export default App;
