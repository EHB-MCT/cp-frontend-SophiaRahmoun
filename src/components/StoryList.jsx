import React from "react";
import StoryCard from "./StoryCard";
import Carousel from "react-bootstrap/Carousel";
import { useEffect, useState } from "react";

const groupStories = (arr, groupSize) => {
	const grouped = [];
	for (let i = 0; i < arr.length; i += groupSize) {
		grouped.push(arr.slice(i, i + groupSize));
	}
	return grouped;
};

const StoryList = () => {
	const [stories, setStories] = useState([]);

	useEffect(() => {
		fetch(
			"https://raw.githubusercontent.com/EHB-MCT/cp-frontend-MaximWesterbeek/refs/heads/main/course-project/public/api/fairytaleList.json"
		)
			.then((res) => res.json())
			.then((data) => {
				// Mélange les histoires aléatoirement
				const shuffled = [...data].sort(() => 0.5 - Math.random());
				setStories(shuffled.slice(0, 6)); // Garde un nombre limité si souhaité
			})
			.catch((err) => console.error("Error while fetching:", err));
	}, []);
	const groupedStories = groupStories(stories, 2);

	return (
		<Carousel indicators={false} interval={null} className="custom-carousel">
			{groupedStories.map((group, index) => (
				<Carousel.Item key={index}>
					<div className="story-grid">
						{group.map((story) => (
							<StoryCard
								key={story.id}
								name={story.nameStudent}
								story={story.fairytale}
								genre={story.genre}
								image={story.imgThumbnail}
								id={story.id}
								fairytaleLink={story.fairytaleLink}
							/>
						))}
					</div>
				</Carousel.Item>
			))}
		</Carousel>
	);
};

export default StoryList;
