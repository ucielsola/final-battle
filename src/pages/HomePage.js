import React, { useContext } from "react";
import { TeamContext } from "../context/TeamState";
import { HomeEmptyGrid } from "../components/home/HomeEmptyGrid";
import { HomeTeamGrid } from "../components/home/HomeTeamGrid";
import { HomeTeamStats } from "../components/home/HomeTeamStats";
export const HomePage = () => {
	const { teamGood, teamBad } = useContext(TeamContext);
	const showTeam = teamGood.length > 0 || teamBad.length > 0;

	return (
		<div className='animate__animated animate__fadeIn container pt-4 text-light flex-grow-1'>
			<div className='container-fluid'>
				<h2 className='display-4'>Your Team</h2>
				<p className='display-6'>
					Are you ready for the
					<span className='text-primary'> Final Battle</span>?
				</p>
			</div>

			{showTeam ? (
				<>
					<HomeTeamStats /> <HomeTeamGrid />
				</>
			) : (
				<HomeEmptyGrid />
			)}
		</div>
	);
};
