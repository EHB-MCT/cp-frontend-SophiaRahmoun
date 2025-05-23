import React from "react";
import "../index.css";
import { useNavigate } from "react-router-dom";

const StoryCard = ({ name, story, genre, image, id, fairytaleLink }) => {
	const navigate = useNavigate();

	const handleClick = () => {
		if (fairytaleLink && fairytaleLink !== "") {
			window.location.href = fairytaleLink;
		} else {
			navigate(`/fairytales/${id}`);
		}
	};

	return (
		<div
			className="story-card-narrow"
			onClick={handleClick}
			style={{ cursor: "pointer" }}
		>
			<img src={image} alt={story} className="story-image" />
			<div className="card-text">
				<h3 className="story-person">{name}</h3>
				<p className="story-title">{story}</p>
				<p className="story-genre">{genre}</p>
			</div>
			<span className="story-arrow">→</span>
		</div>
	);
};

export default StoryCard;
