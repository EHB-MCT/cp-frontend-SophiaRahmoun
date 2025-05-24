import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const InkDrop = () => {
	const particlesInit = useCallback(async (engine) => {
		await loadFull(engine);
	}, []);

	return (
		<div
			style={{
				position: "fixed",
				top: 0,
				left: 0,
				width: "100vw",
				height: "100vh",
				pointerEvents: "none",
				background: "transparent",
				zIndex: 9999,
				opacity: 1,
				transition: "opacity 1s ease-out",
				border: "2px solid red",
			}}
		>
			<Particles
				init={particlesInit}
				options={{
					fullScreen: { enable: false },
					particles: {
						number: { value: 15 },
						color: { value: "#8B0000" },
						shape: { type: "circle" },
						opacity: { value: 0.7 },
						size: { value: 6, random: true },
						move: {
							direction: "bottom",
							enable: true,
							outModes: { default: "out" },
							speed: 2,
						},
					},
				}}
			/>
		</div>
	);
};

export default InkDrop;
