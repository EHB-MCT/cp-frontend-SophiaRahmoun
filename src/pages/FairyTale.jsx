import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";

const FairyTale = () => {
	const navigate = useNavigate();
	const [showScene3Elements, setShowScene3Elements] = useState(false);
	const [showCottage, setShowCottage] = useState(false);
	const [showBasket, setShowBasket] = useState(false);
	const bushRef = useRef(null);
	const [doorOpen, setDoorOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const scrollY = window.scrollY;

			const back = document.getElementById("intro-back");
			const middle = document.getElementById("intro-middle");
			const front = document.getElementById("intro-front");
			const textBlock = document.getElementById("scene2-text");
			const basket = document.querySelector(".scene2-basket");
			const walkingGirl = document.querySelector(".scene3-girl-walk");
			const scene3 = document.getElementById("scene-3");

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

			if (scene3 && walkingGirl) {
				const sceneTop = scene3.offsetTop;
				const sceneHeight = scene3.offsetHeight;
				const windowBottom = scrollY + window.innerHeight;

				const progress = Math.min(
					1,
					Math.max(0, (windowBottom - sceneTop) / (sceneHeight * 0.4))
				);

				walkingGirl.style.transform = `translateX(${progress * 60}vw)`;
			}

			if (scene3) {
				const sceneTop = scene3.offsetTop;
				const sceneHeight = scene3.offsetHeight;

				if (scrollY + window.innerHeight > sceneTop + sceneHeight * 0.25) {
					setShowScene3Elements(true);
				}

				if (scrollY + window.innerHeight > sceneTop + sceneHeight * 0.85) {
					setShowCottage(true);
				} else {
					setShowCottage(false);
				}
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	useEffect(() => {
		if (!showScene3Elements) return;

		const bush = bushRef.current;
		if (!bush) {
			return;
		}

		let isDragging = false;
		let offsetX = 0;
		let offsetY = 0;

		const startDrag = (e) => {
			isDragging = true;
			const rect = bush.getBoundingClientRect();
			offsetX = e.clientX - rect.left;
			offsetY = e.clientY - rect.top;
			bush.style.cursor = "grabbing";
			bush.style.transition = "none";
		};

		const onDrag = (e) => {
			if (!isDragging) return;
			const x = e.clientX - offsetX;
			const y = e.clientY - offsetY;
			bush.style.left = `${x}px`;
			bush.style.top = `${y}px`;
		};

		const stopDrag = () => {
			isDragging = false;
			bush.style.cursor = "grab";
		};

		bush.addEventListener("mousedown", startDrag);
		window.addEventListener("mousemove", onDrag);
		window.addEventListener("mouseup", stopDrag);

		return () => {
			bush.removeEventListener("mousedown", startDrag);
			window.removeEventListener("mousemove", onDrag);
			window.removeEventListener("mouseup", stopDrag);
		};
	}, [showScene3Elements]);

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
			<section className="scene scene-gradient">
				<img
					src="/cp-frontend-SophiaRahmoun/assets/scene3-gradient.svg"
					className="scene3-gradient"
					alt="gradient"
				/>
			</section>
			{/* SCENE 3 */}
			<section id="scene-3" className="scene scene-3">
				<img
					src="/cp-frontend-SophiaRahmoun/assets/scene3-back.png"
					className="scene3-back"
					alt="background"
				/>
				<p className={`bush-text ${showScene3Elements ? "visible" : ""}`}>
					<span className="bush-text-b">B</span>ehind the green... <br />
					something breathes.
				</p>

				{showScene3Elements && (
					<>
						<img
							src="/cp-frontend-SophiaRahmoun/assets/scene2-bush.png"
							alt="bush"
							className="scene3-bush"
							id="scene3-bush"
							draggable="false"
							style={{ top: "620px", left: "320px" }}
							ref={bushRef}
						/>
						<img
							src="/cp-frontend-SophiaRahmoun/assets/scene2-wolf.png"
							alt="wolf"
							className="scene3-wolf"
						/>
						<img
							src="/cp-frontend-SophiaRahmoun/assets/scene2-walkinggirl.gif"
							alt="walking girl"
							className="scene3-girl-walk"
							id="scene3-girl-walk"
						/>
					</>
				)}

				{showCottage && (
					<img
						src="/cp-frontend-SophiaRahmoun/assets/scene3-cottage.png"
						alt="cottage"
						className="scene3-cottage"
						id="scene3-cottage"
					/>
				)}
				{showScene3Elements && (
					<img
						src={
							doorOpen
								? "/cp-frontend-SophiaRahmoun/assets/scene4-dooropening.gif"
								: "/cp-frontend-SophiaRahmoun/assets/scene4-doorclosed.png"
						}
						alt="door"
						className="scene3-door"
						onClick={() => setDoorOpen(true)}
					/>
				)}
			</section>
		</div>
	);
};

export default FairyTale;
