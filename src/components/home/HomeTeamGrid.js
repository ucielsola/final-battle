import React, { useContext } from "react";
import { TeamContext } from "../../context/TeamState";
import { HomeHeroCard } from "../home/HomeHeroCard";

export const HomeTeamGrid = () => {
	const { teamGood, teamBad } = useContext(TeamContext);

	return (
		<>
			<div className='row'>
				{teamGood.map((hero) => (
					<li
						className='search__results col-md-4 list-group-item bg-dark border-dark p-2 mw-80 animate__animated animate__fadeIn'
						key={hero.id}>
						<HomeHeroCard hero={hero} />
					</li>
				))}
			</div>
			<div className='row'>
				{teamBad.map((hero) => (
					<li
						className='search__results col-md-4 list-group-item bg-dark border-dark p-2 mw-80 animate__animated animate__fadeIn'
						key={hero.id}>
						<HomeHeroCard hero={hero} />
					</li>
				))}
			</div>
		</>
	);
};
