import React from "react";

export const HeroData = ({ hero, type }) => {
	// hero trae la info del heroe, type trae pedido de Stats o Info
	const heroStats = (
		<>
			<h4 className='text-decoration-underline'>- PowerStats -</h4>
			<ul className='list-unstyled'>
				{hero.intelligence === "null" ? null : (
					<li>~ Intelligence: {hero.intelligence}</li>
				)}
				{hero.strength === "null" ? null : (
					<li>~ Strength: {hero.strength}</li>
				)}
				{hero.speed === "null" ? null : <li>~ Speed: {hero.speed}</li>}
				{hero.durability === "null" ? null : (
					<li>~ Durability: {hero.durability}</li>
				)}
				{hero.power === "null" ? null : <li>~ Power: {hero.power}</li>}
				{hero.combat === "null" ? null : (
					<li>~ Combat: {hero.combat}</li>
				)}
			</ul>
		</>
	);
	const heroInfo = (
		<>
			<h4 className='text-decoration-underline'>- Info -</h4>
			<ul className='list-unstyled'>
				{hero.height === "null" ? null : (
					<li>~ Height: {hero.height}</li>
				)}
				{hero.weight === "null" ? null : (
					<li>~ Weight: {hero.weight}</li>
				)}
				{hero.eyes === "null" ? null : <li>~ Eyes: {hero.eyes}</li>}
				{hero.hair === "null" ? null : <li>~ Hair: {hero.hair}</li>}
				{hero.work === "null" ? null : <li>~ Work: {hero.work}</li>}
			</ul>
		</>
	);
	return (
		<>{type === "stats" ? heroStats : type === "info" ? heroInfo : null}</>
	);
};
