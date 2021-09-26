import React, { useContext } from "react";
import { TeamContext } from "../context/TeamState";

import { HomeEmptyGrid } from "../components/home/HomeEmptyGrid";
export const HomePage = () => {
	const { teamGood, teamBad } = useContext(TeamContext);
	console.log(teamGood);
	console.log(teamBad);

	const TeamGrid = false;
	return (
		<div className='animate__animated animate__fadeIn container pt-4 text-light'>
			<div className='container-fluid'>
				<h2 className='display-4'>Your Team</h2>
				<p className='display-6'>
					Are you ready for the
					<span className='text-primary'> Final Battle</span>?
				</p>
			</div>
			{TeamGrid ? <div></div> : <HomeEmptyGrid />}
		</div>
	);
};
