import React from "react";
import StoryCard from "./StoryCard";

const stories = [
	{ name: "Sophia Rahmoun", story: "Little Red Riding Hood", genres: "Fairy Tale" },
	{ name: "Sophia Rahmoun", story: "The Little Mermaid", genres: "Fairy Tale" },
	{ name: "Sophia Rahmoun", story: "Hansel and Gretel", genres: "Fairy Tale" },
	{ name: "Sophia Rahmoun", story: "The Fairy Boy of Leith", genres: "Fairy Tale" },
];

const StoryList = () => {
	return (
		<div className="story-grid">
			{stories.map((s, index) => (
				<StoryCard key={index} name={s.name} story={s.story} />
			))}
		</div>
	);
};

export default StoryList;
