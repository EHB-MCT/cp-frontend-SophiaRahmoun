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
			const textBlock = document.getElementById("scene2-text");
			const basket = document.querySelector(".scene2-basket");

			if (back) back.style.transform = `translateY(${scrollY * 0.1}px)`;
			if (middle) middle.style.transform = `translateY(${scrollY * 0.6}px)`;
			if (front) front.style.transform = `translateY(-${scrollY * 0.9}px)`; 

			if (textBlock && basket) {
				const scene2Start = window.innerHeight;
				const fadePoint = 200;
                const opacity = Math.min(1, (scrollY - scene2Start + fadePoint) / 300);
				textBlock.style.opacity = opacity;
				basket.style.opacity = opacity;
			}
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
      className="scene2-basket"
      alt="basket"
    />

    <div id="scene2-text" className="scene2-text">
      <p className="scene2-i">I</p>
      <p className="scene2-normal">
        In the heart of a darkening forest, <br />
        a red-cloaked girl clutched a basket of sweet offerings.
      </p>
      <p className="scene2-quote">
        “Go straight to your grandmother’s house... and speak to no one.”
      </p>
    </div>
  </div>
</section>
		</div>
	);
};

export default FairyTale;
