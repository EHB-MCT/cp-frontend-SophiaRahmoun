import React from "react";
import "../index.css";

const stories = [
	{
		id: 1,
		name: "Sophia",
		title: "Little Red Riding Hood",
		image: "/images/red.jpg",
	},
	{ id: 2, name: "Sophia", title: "Bluebeard", image: "/images/bluebeard.jpg" },
	{
		id: 3,
		name: "Sophia",
		title: "The 3 Little Pigs",
		image: "/images/pigs.jpg",
	},
];

const Stories = () => {
	return (
		<div className="stories-wrapper">
			{stories.map((story) => (
				<div key={story.id} className="story-card-narrow">
					<img src={story.image} alt={story.title} className="story-image" />
					<h3 className="story-person">{story.name}</h3>
					<p className="story-title">{story.title}</p>
				</div>
			))}
		</div>
	);
};

export default Stories;
