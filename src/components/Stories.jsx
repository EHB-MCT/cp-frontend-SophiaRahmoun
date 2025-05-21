import React from "react";
import "../index.css";


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
