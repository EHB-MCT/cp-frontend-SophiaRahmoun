import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import SearchFilter from "./SearchFilter";
import Stories from "./Stories";
import "index.css";

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


function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

const Sprookjes = () => {
    const query = useQuery();
	const [selectedGenre, setSelectedGenre] = useState("All");
	const [searchQuery, setSearchQuery] = useState("");
	const [allStories, setAllStories] = useState([]);

	useEffect(() => {
		// fake data --> will change to API later !!
		setAllStories([
			{
				id: 1,
				name: "Sophia Rahmoun",
				title: "Little Red Riding Hood",
				genre: "fantasy, folklore",
				image: "/images/red.jpg",
			},
			{
				id: 2,
				name: "Sophia Rahmoun",
				title: "Bluebeard",
				genre: "horror",
				image: "/images/bluebeard.jpg",
			},
			{
				id: 3,
				name: "Sophia Rahmoun",
				title: "The 3 Little Pigs",
				genre: "fantasie, avontuur",
				image: "/images/pigs.jpg",
			},
		]);
	}, []);

	const filteredStories = allStories.filter((story) => {
		const matchesGenre =
			selectedGenre === "All" ||
			story.genre.toLowerCase().includes(selectedGenre.toLowerCase());
		const matchesSearch = story.title
			.toLowerCase()
			.includes(searchQuery.toLowerCase());
		return matchesGenre && matchesSearch;
	});

	return (
		<div className="sprookjes-page">
			<div className="filter-bar">
				{genres.map((genre, i) => (
					<button
						key={i}
						className={`genre-button ${
							selectedGenre === genre ? "active" : ""
						}`}
						onClick={() => setSelectedGenre(genre)}
					>
						{genre}
					</button>
				))}
				<SearchFilter onSearch={setSearchQuery} />
			</div>

			<Stories stories={filteredStories} />
		</div>
	);
};

export default Sprookjes;
