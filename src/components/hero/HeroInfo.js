import React from "react";

export const HeroInfo = ({ hero }) => {
	return (
		<>
			<h4 className='text-decoration-underline'>- Info -</h4>
			<ul>
				{hero.height === "null" ? null : <li>Height: {hero.height}</li>}
				{hero.weight === "null" ? null : <li>Weight: {hero.weight}</li>}
				{hero.eyes === "null" ? null : <li>Eyes: {hero.eyes}</li>}
				{hero.hair === "null" ? null : <li>Hair: {hero.hair}</li>}
				{hero.work === "null" ? null : <li>Work: {hero.work}</li>}
			</ul>
		</>
	);
};
