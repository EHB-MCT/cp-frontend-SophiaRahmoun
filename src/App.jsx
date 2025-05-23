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
				<h1>Hot Today</h1>
				<StoryList />
				<SearchFilter onSearch={setSearchQuery} />
				<h1>Stories</h1>
				<div className="stories-wrapper" style={{ marginTop: "30px" }}>
					{filteredStories.map((story) => (
						<div
							key={story.id}
							className="story-card-narrow"
							onClick={() => handleStoryClick(story)}
							style={{ cursor: "pointer" }}
						>
							<img
								src={story.imgThumbnail || "/fallback.png"}
								alt={story.fairytale}
								className="story-image"
							/>
							<div className="card-text">
								<h3 className="story-person">{story.nameStudent}</h3>
								<p className="story-title">{story.fairytale}</p>
								<p className="story-genre">{story.genre}</p>
							</div>
							<span className="story-arrow">→</span>
						</div>
					))}
				</div>
			</div>
			<footer className="app-footer">
				<Footer />
			</footer>
			{selectedStory ? (
				<MakingOfTemplate
					story={selectedStory}
					onClose={() => setSelectedStory(null)}
				/>
			) : (
				<>
					<div className="wrapper">
						<h1>Hot Today</h1>
						<StoryList />
						<SearchFilter onSearch={setSearchQuery} />
						<h1>Stories</h1>
						<div className="stories-wrapper" style={{ marginTop: "30px" }}>
							{filteredStories.map((story) => (
								<div
									key={story.id}
									className="story-card-narrow"
									onClick={() => handleStoryClick(story)}
									style={{ cursor: "pointer" }}
								>
									<img
										src={story.imgThumbnail || "/fallback.png"}
										alt={story.fairytale}
										className="story-image"
									/>
									<div className="card-text">
										<h3 className="story-person">{story.nameStudent}</h3>
										<p className="story-title">{story.fairytale}</p>
										<p className="story-genre">{story.genre}</p>
									</div>
									<span className="story-arrow">→</span>
								</div>
							))}
						</div>
					</div>
				</>
			)}
		</div>
	);
}

export default App;
