import React from "react";
import { Link } from "react-router-dom";

export const SearchResults = ({ hero }) => {
	const heroData = {
		// almacena solo la info necesaria y para pasar a la HeroPage. Evita más llamadadas a la API.
		name: `${hero.name}`,
		img: `${hero.image.url}`,
		fullName: `${hero.biography["full-name"]}`,
		alignment: `${hero.biography["alignment"]}`,
		intelligence: `${hero.powerstats["intelligence"]}`,
		strength: `${hero.powerstats["strength"]}`,
		speed: `${hero.powerstats["speed"]}`,
		durability: `${hero.powerstats["durability"]}`,
		power: `${hero.powerstats["power"]}`,
		combat: `${hero.powerstats["combat"]}`,
		height: `${hero.appearance["height"]}`,
		weight: `${hero.appearance["weight"]}`,
		eyes: `${hero.appearance["eye-color"]}`,
		hair: `${hero.appearance["hair-color"]}`,
		work: `${hero.work["ocupation"]}`,
	};

	return (
		<div className='card'>
			<img
				src={heroData.img}
				alt={heroData.name}
				className='card-img-top img-fluid'></img>
			<h4 className='card-title text-dark'>{heroData.name}</h4>
			<h6 className='card-subtitle text-dark'>{heroData.fullName}</h6>
			<Link
				to={{
					pathname: "/hero",
					state: { herodata: heroData }, // pasa info del heroe a la página del heroe,
				}}
				className='btn btn-primary'>
				Full Info
			</Link>
			<button>Add to Team</button>
		</div>
	);
};
