import React from "react";
import StoryCard from "./StoryCard";

const stories = [
	{ name: "Sophia Rahmoun", story: "Little Red Riding Hood" },
	{ name: "Sophia Rahmoun", story: "The Little Mermaid" },
	{ name: "Sophia Rahmoun", story: "Hansel and Gretel" },
	{ name: "Sophia Rahmoun", story: "The Fairy Boy of Leith" },
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
