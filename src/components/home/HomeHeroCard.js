import React from "react";
import { Link } from "react-router-dom";
import { HeroCardControls } from "../shared/HeroCardControls";

export const HomeHeroCard = ({ hero }) => {
	const maxWidth = {
		maxWidth: "18rem",
	};
	return (
		<div className='card p-2' style={maxWidth}>
			<img
				src={hero.img}
				alt={hero.name}
				className='card-img-top img-fluid mb-2 w-100'></img>
			<div className='row'>
				<h4 className='card-title col-6 text-dark'>
					<strong>{hero.name}</strong>
				</h4>
				<h5 className='col-6 text-capitalize pt-1'>
					{hero.alignment === "bad" ? "😈" : "😇"} {hero.alignment}
				</h5>
			</div>
			<h6 className='card-subtitle text-dark'>{hero.fullName}</h6>
			<Link
				to={{
					pathname: "/hero",
					state: { hero: hero }, // pasa info del heroe a la página del heroe,
				}}
				className='btn btn-primary mt-2'>
				Full Info
			</Link>
			<div className='mt-2'>
				<HeroCardControls
					hero={hero}
					exist='true'
					action='fire'
					quota='false'
				/>
			</div>
		</div>
	);
};
