import React from "react";
import "../index.css";

const StoryCard = ({ name, story }) => {
	return (
		<div className="story-card">
			<h3>{name}</h3>
			<p>{story}</p>
		</div>
	);
};

export default StoryCard;
