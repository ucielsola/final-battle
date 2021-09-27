import React, { useContext } from "react";
import { TeamContext } from "../../context/TeamState";

export const SearchResultsControls = ({ action, hero, exist, quota }) => {
	const {
		addToTeamGood,
		addToTeamBad,
		removeFromTeamGood,
		removeFromTeamBad,
	} = useContext(TeamContext);

	const fireDisabled = exist && quota ? false : exist ? false : true;

	return (
		<>
			{action === "hire" ? (
				<button
					className={`col-6 btn btn-success w-100 text-light text-capitalize`}
					onClick={() => {
						hero.alignment === "good"
							? addToTeamGood(hero)
							: addToTeamBad(hero);
					}}
					disabled={exist || quota}>
					{action}
				</button>
			) : (
				<button
					className={`col-6 btn btn-danger w-100 text-light text-capitalize`}
					onClick={() => {
						hero.alignment === "good"
							? removeFromTeamGood(hero.id)
							: removeFromTeamBad(hero.id);
					}}
					disabled={fireDisabled}>
					{action}
				</button>
			)}
		</>
	);
};
