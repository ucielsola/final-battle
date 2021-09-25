import React from "react";

export const HeroStats = ({ hero }) => {
	return (
		<>
			<h4 className='text-decoration-underline'>- PowerStats -</h4>
			<ul>
				{hero.intelligence === "null" ? null : (
					<li>Intelligence: {hero.intelligence}</li>
				)}
				{hero.strength === "null" ? null : (
					<li>Strength: {hero.strength}</li>
				)}
				{hero.speed === "null" ? null : <li>Speed: {hero.speed}</li>}
				{hero.durability === "null" ? null : (
					<li>Durability: {hero.durability}</li>
				)}
				{hero.power === "null" ? null : <li>Power: {hero.power}</li>}
				{hero.combat === "null" ? null : <li>Combat: {hero.combat}</li>}
			</ul>
		</>
	);
};
