import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";

const FairyTale = () => {
	const navigate = useNavigate();
	const [showPath, setShowPath] = useState(false);
	const [showAnimatedGirl, setShowAnimatedGirl] = useState(false);
	const [showBasket, setShowBasket] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const scrollY = window.scrollY;

			const back = document.getElementById("intro-back");
			const middle = document.getElementById("intro-middle");
			const front = document.getElementById("intro-front");
			const textBlock = document.getElementById("scene2-text");
			const basket = document.querySelector(".scene2-basket");
			const walkingGirl = document.querySelector(".scene3-girl-walk");

			if (back) back.style.transform = `translateY(${scrollY * 0.1}px)`;
			if (middle) middle.style.transform = `translateY(${scrollY * 0.6}px)`;
			if (front) front.style.transform = `translateY(-${scrollY * 0.9}px)`;

			if (textBlock && basket) {
				const scene2Start = window.innerHeight;
				const fadePoint = 200;
				const opacity = Math.min(1, (scrollY - scene2Start + fadePoint) / 300);
				textBlock.style.opacity = opacity;
			}

			if (scrollY > window.innerHeight) {
				setShowBasket(true);
			} else {
				setShowBasket(false);
			}

			if (walkingGirl && showAnimatedGirl) {
				const scene3 = document.getElementById("scene-3");
				const sceneTop = scene3.offsetTop;
				const sceneHeight = scene3.offsetHeight;

				const progress = Math.min(
					1,
					Math.max(0, (scrollY - sceneTop) / (sceneHeight - window.innerHeight))
				);

				const maxTranslateX = 60; // vw
				const maxTranslateY = 60; // vh

				walkingGirl.style.transform = `translate(${
					maxTranslateX * progress
				}vw, ${maxTranslateY * progress}vh)`;
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [showAnimatedGirl]);

	return (
		<div className="fairytale-wrapper">
			<button className="back-button" onClick={() => navigate("/")}>
				Going back
			</button>

			{/* SCENE 1 */}
			<section id="scene-1" className="scene scene-1">
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

			{/* SCENE 2 */}
			<section id="scene-2" className="scene scene-2">
				<img
					src="/cp-frontend-SophiaRahmoun/assets/scene2-backgr.png"
					className="scene2-bg"
					alt="background"
				/>

				<div className="scene2-content">
					<img
						src="/cp-frontend-SophiaRahmoun/assets/scene1-basket.png"
						className={`scene2-basket ${showBasket ? "visible" : ""}`}
						alt="basket"
						style={{ pointerEvents: "auto" }}
						onClick={() => {
							console.log("clicked!");

							setShowPath(true);
						}}
					/>

					<div id="scene2-text" className="scene2-text">
						<p className="scene2-i">I</p>
						<p className="scene2-normal">
							In the heart of a darkening forest, <br />a red-cloaked girl
							clutched a basket of sweet offerings.
						</p>
						<p className="scene2-quote">
							“Go straight to your grandmother’s house... and speak to no one.”
						</p>
					</div>
				</div>
			</section>

			{/* SCENE 3 */}
			<section id="scene-3" className="scene scene-3">
				<img
					src="/cp-frontend-SophiaRahmoun/assets/scene2-backgr.png"
					className="scene3-bg"
					alt="background"
				/>

				{showPath && (
					<img
						src="/cp-frontend-SophiaRahmoun/assets/scene1-way.png"
						alt="path"
						className="scene3-path"
					/>
				)}

				{showPath && !showAnimatedGirl && (
					<img
						src="/cp-frontend-SophiaRahmoun/assets/scene2-girl-walk1.png"
						alt="girl static"
						className="scene3-girl"
					/>
				)}

				{showAnimatedGirl && (
					<img
						src="/cp-frontend-SophiaRahmoun/assets/scene2-walkinggirl.gif"
						alt="girl walking"
						className="scene3-girl-walk"
					/>
				)}
			</section>
		</div>
	);
};

export default FairyTale;
