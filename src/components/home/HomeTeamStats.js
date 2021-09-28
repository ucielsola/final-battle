import React, { useContext } from "react";
import { TeamContext } from "../../context/TeamState";

export const HomeTeamStats = () => {
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

	const calculateStats = (stat) => {
		// coerciona los string, null y undefined a 0.
		// Suma stats de ambos arrays de heroes

		let totalBad = 0;
		teamBad.forEach((hero) => {
			if (isNaN(hero[stat])) {
				hero[stat] = 0;
			}
			totalBad = totalBad + +hero[stat];
		});
		let totalGood = 0;
		teamGood.forEach((hero) => {
			if (isNaN(hero[stat])) {
				hero[stat] = 0;
			}
			totalGood = totalGood + +hero[stat];
		});
		return totalBad + totalGood;
	};

	const teamStats = {
		intelligence: calculateStats("intelligence"),
		strength: calculateStats("strength"),
		speed: calculateStats("speed"),
		durability: calculateStats("durability"),
		power: calculateStats("power"),
		combat: calculateStats("combat"),
	};

	const maxStat = () => {
		const stat = Object.keys(teamStats).reduce((a, b) =>
			teamStats[a] > teamStats[b] ? a : b
		);
		return (
			<h4 className='text-capitalize'>
				{stat}{" "}
				<span className='text-center text-success'>
					{teamStats[stat]}
				</span>
			</h4>
		);
	};
	const renderList = Object.keys(teamStats); // array con las keys para hacer un render loop

	return (
		<div className='row d-flex justify-content-center align-items-center w-100'>
			<div className='col-md-6 col-sm-6 d-flex flex-column align-items-center justify-content-start'>
				<h2>Team Stats</h2>
				<ul className='pl-0'>
					{renderList.map((stat) => {
						return (
							<li
								key={guidGenerator()}
								className='text-capitalize list-unstyled'>
								~ {stat} {teamStats[stat]}
							</li>
						);
					})}
				</ul>
			</div>
			<div className='col-md-6 col-sm-6 d-flex flex-column align-items-center align-self-baseline'>
				<h2>Best Skill</h2>
				{maxStat()}
			</div>
		</div>
	);
};
