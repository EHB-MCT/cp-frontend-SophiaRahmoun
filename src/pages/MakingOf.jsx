import React from "react";
import "../index.css";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import { Link } from "react-router-dom";

const MakingOf = () => {
	return (
		<div className="making-of-page">
			<Navigation />
			<main className="wrapper">
				<h1 className="standard-title">Making Of</h1>

				<div className="making-banner-wrapper">
					<img
						src="https://ehb-mct.github.io/cp-frontend-SophiaRahmoun/assets/banner_sophia.jpg"
						alt="Banner"
						className="banner-image"
					/>
					<div className="making-banner-info">
						<h3 className="story-title-red">The Little Red Riding Hood</h3>
						<p className="author-name">Sophia Rahmoun</p>
					</div>
				</div>

				<div className="making-story-section">
					<div className="making-story-text">
						<p className="section-title">Verhaal</p>
						<p className="story-description">
							Little Red Riding Hood, fairy tale about a young girl who wears a
							red cloak and encounters a wolf on her way to visit her ailing
							grandmother. Depending on the version of the story, the girl is
							either eaten by the wolf or saved by a woodsman or hunter.
						</p>
						<p className="section-title">Auteur</p>
						<p className="story-author">
							Charles Perrault and the Brothers Grimm.
						</p>
					</div>
					<div className="making-story-image-area">
						<img
							src="https://ehb-mct.github.io/cp-frontend-SophiaRahmoun/assets/cover_sophia.jpg"
							alt="Cover"
							className="story-cover"
						/>
						<a
							href="https://ehb-mct.github.io/cp-frontend-SophiaRahmoun/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<Link to="/fairytale">
								<button className="view-button">View website</button>
							</Link>
						</a>
					</div>
				</div>

				<h1 className="standard-title">Extra images</h1>

				<div className="extras-wrapper">
					<div className="extra-block">
						<img
							src="https://ehb-mct.github.io/cp-frontend-SophiaRahmoun/assets/extra1_sophia.png"
							alt="extra 1"
						/>
					</div>
					<div className="extra-block">
						<img
							src="https://ehb-mct.github.io/cp-frontend-SophiaRahmoun/assets/extra2_sophia.jpg"
							alt="extra 2"
						/>
					</div>
					<div className="extra-block">
						<img
							src="https://ehb-mct.github.io/cp-frontend-SophiaRahmoun/assets/extra3_sophia.jpg"
							alt="extra 3"
						/>
					</div>
				</div>
			</main>

			<footer className="app-footer">
				<Footer />
			</footer>
		</div>
	);
};

export default MakingOf;
