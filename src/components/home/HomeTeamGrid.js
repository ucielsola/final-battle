import React, { useContext } from "react";
import { TeamContext } from "../../context/TeamState";
import { HomeHeroCard } from "../home/HomeHeroCard";
import { HomeEmptyCard } from "./HomeEmptyCard";
import { HomeTeamStats } from "./HomeTeamStats";

export const HomeTeamGrid = () => {
	const { teamGood, teamBad } = useContext(TeamContext);
	function guidGenerator() {
		// random ID para cards en blanco
		var S4 = function () {
			return (((1 + Math.random()) * 0x10000) | 0)
				.toString(16)
				.substring(1);
		};
		return (
			S4() +
			S4() +
			"-" +
			S4() +
			"-" +
			S4() +
			"-" +
			S4() +
			"-" +
			S4() +
			S4() +
			S4()
		);
	}
	return (
		<>
			<HomeTeamStats />
			<ul className='row'>
				{teamGood.map((hero) => (
					<li
						className='search__results d-flex justify-content-center align-items-start col-md-4 list-group-item bg-dark border-dark p-2 mw-80 animate__animated animate__fadeIn'
						key={hero.id}>
						<HomeHeroCard hero={hero} />
					</li>
				))}
				{teamGood.length > 0 && teamGood.length < 3 && (
					<li
						className='search__results d-flex justify-content-center align-items-start col-md-4 list-group-item bg-dark border-dark p-2 mw-80 animate__animated animate__fadeIn'
						key={guidGenerator()}>
						<HomeEmptyCard />
					</li>
				)}
			</ul>
			<ul className='row d-flex'>
				{teamBad.map((hero) => (
					<li
						className='search__results d-flex justify-content-center align-items-start col-md-4 list-group-item bg-dark border-dark p-2 mw-80 animate__animated animate__fadeIn'
						key={hero.id}>
						<HomeHeroCard hero={hero} />
					</li>
				))}
				{teamBad.length > 0 && teamBad.length < 3 && (
					<li
						className='search__results d-flex justify-content-center align-items-start col-md-4 list-group-item bg-dark border-dark p-2 mw-80 animate__animated animate__fadeIn'
						key={guidGenerator()}>
						<HomeEmptyCard />
					</li>
				)}
			</ul>
		</>
	);
};
