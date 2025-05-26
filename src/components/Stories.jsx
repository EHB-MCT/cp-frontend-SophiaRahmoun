import React, { use } from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "../index.css";

const Stories = ({ searchQuery = "", onStoryClick }) => {
	const [stories, setStories] = useState([]);
	const [visibleCount, setVisibleCount] = useState(6);
	const navigate = useNavigate();

	useEffect(() => {
		fetch(
			"https://raw.githubusercontent.com/EHB-MCT/cp-frontend-MaximWesterbeek/refs/heads/main/course-project/public/api/fairytaleList.json"
		)
			.then((res) => res.json())
			.then((data) => setStories(data))
			.catch((err) => console.error("Error while fetching :", err));
	}, []);
	const filteredStories = stories.filter((story) =>
		story.fairytale?.toLowerCase().includes(searchQuery.toLowerCase())
	);
	const showMoreButton = true;

	const handleClick = (story) => {
		if (onStoryClick) {
			onStoryClick(story);
		} else {
			navigate(`/fairytales/${story.id}`);
		}
	};
	const handleShowMore = () => {
		setVisibleCount(stories.length);
	};

	const visibleStories = filteredStories.slice(0, visibleCount);
	return (
		<div className="stories-section">
			<div className="stories-wrapper">
				{visibleStories.map((story) => (
					<div
						key={story.id}
						className="story-card-narrow"
						style={{ cursor: "pointer" }}
						onClick={() => handleClick(story)}
					>
						<img
							className="story-image"
							src={
								story.imgThumbnail && story.imgThumbnail.trim() !== ""
									? story.imgThumbnail
									: `${import.meta.env.BASE_URL}assets/no-img.png`
							}
							alt={story.fairytale}
							onError={(e) => {
								e.target.onerror = null;
								e.target.src = `${import.meta.env.BASE_URL}assets/no-img.png`;
							}}
						/>
						<div className="card-text">
							<h3 className="story-person">{story.nameStudent}</h3>
							<p className="story-title">{story.fairytale}</p>
							<p className="story-genre">{story.genre}</p>
						</div>
						{story.fairytaleLink && <span className="story-arrow">→</span>}{" "}
					</div>
				))}
			</div>

			{showMoreButton && visibleCount < stories.length && (
				<div style={{ textAlign: "center", marginTop: "20px" }}>
					<button className="view-button" onClick={handleShowMore}>
						More
					</button>
				</div>
			)}
		</div>
	);
};

export default Stories;
