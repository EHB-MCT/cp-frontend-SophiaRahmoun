import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import SearchFilter from "../components/SearchFilter";
import Stories from "../components/Stories";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import "../index.css";

const genres = [
	"All",
	"fantasie",
	"avontuur",
	"horror",
	"romantiek",
	"magie",
	"mythologie",
	"dierenverhaal",
];

function useQuery() {
	return new URLSearchParams(useLocation().search);
}

const Sprookjes = () => {
	const query = useQuery();
	const [selectedGenre, setSelectedGenre] = useState("All");
	const [searchQuery, setSearchQuery] = useState("");
	const [allStories, setAllStories] = useState([]);

	useEffect(() => {
		fetch(
			"https://raw.githubusercontent.com/EHB-MCT/cp-frontend-MaximWesterbeek/refs/heads/main/course-project/public/api/fairytaleList.json"
		)
			.then((res) => res.json())
			.then((data) => setAllStories(data))
			.catch((err) => console.error("Error while fetching:", err));
	}, []);

	const filteredStories = allStories.filter((story) => {
		const genre = story.genre || "";
		const title = story.fairytale || "";
		const matchesGenre =
			selectedGenre === "All" ||
			genre.toLowerCase().includes(selectedGenre.toLowerCase());
		const matchesSearch = title
			.toLowerCase()
			.includes(searchQuery.toLowerCase());
		return matchesGenre && matchesSearch;
	});

	return (
		<div className="sprookjes-page">
			<Navigation />
			<main className="wrapper">
				<h1>Sprookjes per genre</h1>
				<div
					className="genre-buttons"
					style={{
						display: "flex",
						flexWrap: "wrap",
						gap: "10px",
						justifyContent: "center",
					}}
				>
					{genres.map((genre, i) => (
						<button
							key={i}
							className={`story-card-narrow genre-button ${
								selectedGenre === genre ? "active" : ""
							}`}
							onClick={() => setSelectedGenre(genre)}
						>
							{genre}
						</button>
					))}
				</div>

				<div className="stories-wrapper" style={{ marginTop: "50px" }}>
					{filteredStories.map((story) => (
						<div
							key={story.id}
							className="story-card-narrow"
							onClick={() => handleClick(story.fairytaleLink, story.id)}
							style={{ cursor: "pointer" }}
						>
							<img
								src={story.imgThumbnail}
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
			</main>
			<Footer />
		</div>
	);
};

export default Sprookjes;
