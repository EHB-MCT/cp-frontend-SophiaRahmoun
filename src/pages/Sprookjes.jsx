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
        <Navigation /> 
        <main className="wrapper">
          <h1>Sprookjes per genre</h1>
          <div className="genre-buttons" style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center' }}>
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
						<div key={story.id} className="story-card-narrow">
							<img src={story.image} alt={story.title} className="story-image" />
							<h3 className="story-person">{story.name}</h3>
							<p className="story-title">{story.title}</p>
						</div>
					))}
				</div>
        </main>
        <Footer />
      </div>
	);
};

export default Sprookjes;
