import React from "react";

export const HeroStatsNumbers = ({ number }) => {
	const className =
		number <= 40
			? "text-danger"
			: number >= 60
			? "text-success"
			: "text-warning";
	console.log(className);
	return <span className={className}>{number}</span>;
};
