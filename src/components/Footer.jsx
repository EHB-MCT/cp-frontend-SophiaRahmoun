import React from "react";
import "../index.css";

const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer-content">
				<img src="./public/assets/logo.png" alt="Logo" className="logo" />

				<div className="footer-text-about">
					<p className="footer-text">
						23 studenten van de opleiding MCT die kozen voor het vak Front-End
						Design. Met een dosis creativiteit, code en een flinke scheut
						verbeelding verzamelen ze hier al hun sprookjes. Benieuwd wie wij
						zijn?
					</p>

					<button className="about-button">About us</button>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
