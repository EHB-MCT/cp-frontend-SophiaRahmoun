import React from "react";
import "../index.css";

const MakingOfTemplate = ({ story, onClose }) => {
	if (!story) return null;

	return (
		<div className="popup-overlay">
			<div className="making-of-page popup-content">
				<button className="popup-close" onClick={onClose}>
					×
				</button>
				<main className="wrapper">
					<div className="making-banner-wrapper">
						<img src={story.imgBanner} alt="Banner" className="banner-image" />
						<div className="making-banner-info">
							<h3 className="story-title-red">{story.fairytale}</h3>
							<p className="author-name">{story.nameStudent}</p>
						</div>
					</div>

					<div className="making-story-section">
						<div className="making-story-text">
							<p className="section-title">Verhaal</p>
							<p className="story-description">{story.description}</p>
						</div>
						<div className="making-story-image-area">
							<img
								src={
									story.imgThumbnail ||
									`${import.meta.env.BASE_URL}assets/no-img2.png`
								}
								alt="Cover"
								className="story-cover"
							/>
							{story.fairytaleLink && (
								<a
									href={story.fairytaleLink}
									target="_blank"
									rel="noopener noreferrer"
								>
									<button className="view-button">View website</button>
								</a>
							)}
						</div>
					</div>

					{story.imgsExtra?.length > 0 && (
						<>
							<h1 className="standard-title">Extra Beelden</h1>
							<div className="extras-wrapper">
								{story.imgsExtra.map(
									(img, idx) =>
										img && (
											<div key={idx} className="extra-block">
												<img src={img} alt={`extra ${idx + 1}`} />
											</div>
										)
								)}
							</div>
						</>
					)}
				</main>
			</div>
		</div>
	);
};

export default MakingOfTemplate;
