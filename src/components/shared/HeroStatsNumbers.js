import React from "react";

export const HeroStatsNumbers = ({ number }) => {
	const color =
		number <= 40
			? "text-danger"
			: number >= 60
			? "text-success"
			: "text-warning";
	return <span className={color}>{number}</span>;
};
