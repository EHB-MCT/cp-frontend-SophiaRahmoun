import React from "react";
import StoryCard from "./StoryCard";
import Carousel from "react-bootstrap/Carousel";

const stories = [
	{
		name: "Sophia Rahmoun",
		story: "Little Red Riding Hood",
		genres: "Fairy Tale",
	},
	{ name: "Sophia Rahmoun", story: "The Little Mermaid", genres: "Fairy Tale" },
	{ name: "Sophia Rahmoun", story: "Hansel and Gretel", genres: "Fairy Tale" },
	{
		name: "Sophia Rahmoun",
		story: "The Fairy Boy of Leith",
		genres: "Fairy Tale",
	},
];

const groupStories = (arr, groupSize) => {
	const grouped = [];
	for (let i = 0; i < arr.length; i += groupSize) {
		grouped.push(arr.slice(i, i + groupSize));
	}
	return grouped;
};

const StoryList = () => {
	const groupedStories = groupStories(stories, 2); // 2 stories per slide !

	return (
		<Carousel indicators={false} interval={null} className="custom-carousel">
			{groupedStories.map((group, index) => (
				<Carousel.Item key={index}>
					<div className="story-grid">
						{stories.map((s, index) => (
							<StoryCard key={index} name={s.name} story={s.story} />
						))}
					</div>
				</Carousel.Item>
			))}
		</Carousel>
	);
};

export default StoryList;
