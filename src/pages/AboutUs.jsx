import React from "react";
import StoryList from "../components/StoryList";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import "../index.css";

const AboutUs = () => {
	return (
		<div className="about-page">
			<Navigation />
			<main className="wrapper">
				<div className="intro-about">
					<div className="tekst-about">
						<h1 className="standard-title">EHB Students</h1>
						<p>
							EHB-studenten Front-End Development werken dit semester met React
							aan een parallax website rond het thema sprookjes. Ze combineren
							techniek en creativiteit om een interactieve webervaring te
							creëren met diepte-effecten en animaties. Zo leren ze
							React-componenten, state management en visuele effecten toepassen
							om hun sprookjeswereld tot leven te brengen.
						</p>
						<a
							href="/cp-frontend-SophiaRahmoun/sprookjes?genre=All"
							className="about-button"
						>
							Bekijk alle sprookjes
						</a>
					</div>
					<div className="student-grid">
						<img
							src="/cp-frontend-SophiaRahmoun/assets/student1.jpg"
							alt="student1"
							className="student1"
						/>
						<img
							src="/cp-frontend-SophiaRahmoun/assets/student2.jpg"
							alt="student2"
							className="student2"
						/>
						<img
							src="/cp-frontend-SophiaRahmoun/assets/student3.jpeg"
							alt="student3"
							className="student3"
						/>
						<img
							src="/cp-frontend-SophiaRahmoun/assets/student4.jpeg"
							alt="student4"
							className="student4"
						/>
						<img
							src="/cp-frontend-SophiaRahmoun/assets/student5.jpg"
							alt="student5"
							className="student5"
						/>
						<img
							src="/cp-frontend-SophiaRahmoun/assets/student6.JPG"
							alt="student6"
							className="student6"
						/>
						<img
							src="/cp-frontend-SophiaRahmoun/assets/student7.jpg"
							alt="student7"
							className="student7"
						/>
						<img
							src="/cp-frontend-SophiaRahmoun/assets/student8.jpeg"
							alt="student8"
							className="student8"
						/>
					</div>
				</div>

				<h1 className="standard-title">Hot Today</h1>
				<StoryList />
			</main>
			<Footer />
		</div>
	);
};
export default AboutUs;
