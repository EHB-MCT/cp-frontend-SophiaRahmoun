import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";

const FairyTale = () => {
	const navigate = useNavigate();
	useEffect(() => {
		const handleScroll = () => {
			const scrollY = window.scrollY;

			const back = document.getElementById("intro-back");
			const middle = document.getElementById("intro-middle");
			const front = document.getElementById("intro-front");

			if (back) back.style.transform = `translateY(${scrollY * 0.1}px)`;
			if (middle) middle.style.transform = `translateY(${scrollY * 0.9}px)`;
			if (front) front.style.transform = `translateY(-${scrollY * 0.9}px)`; // monte
            
            /*if (textBlock) {
				const opacity = Math.min(1, (scrollY - window.innerHeight) / 300);
				textBlock.style.opacity = opacity;
			}*/
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<div className="fairytale-wrapper">
			<button className="back-button" onClick={() => navigate("/")}>
				Going back
			</button>

			{/* SCENE 1 */}
			<section className="scene scene-1">
				<div className="title-gothic">
					Little Red <br />
					Riding Hood
				</div>

				<img
                  id="intro-back"

					src="/cp-frontend-SophiaRahmoun/assets/intro_back.png"
					alt="background"
					className="layer layer-back"
				/>
				<img
                  id="intro-middle"

					src="/cp-frontend-SophiaRahmoun/assets/intro_middle.png"
					alt="middle"
					className="layer layer-middle"
				/>
				<img
                  id="intro-front"

					src="/cp-frontend-SophiaRahmoun/assets/intro_front.png"
					alt="front"
					className="layer layer-front"
				/>
			</section>

			{/* SCENES 2 à 6 viendront ici plus tard */}
		</div>
	);
};

export default FairyTale;
