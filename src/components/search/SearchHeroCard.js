import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { HeroCardControls } from "../shared/HeroCardControls";
import { TeamContext } from "../../context/TeamState";

export const SearchHeroCard = ({ hero }) => {
	const heroData = {
		// almacena solo la info necesaria y para pasar a la HeroPage. Evita más llamadadas a la API.
		id: `${hero.id}`,
		name: `${hero.name}`,
		img: `${hero.image.url}`,
		fullName: `${hero.biography["full-name"]}`,
		alignment: `${hero.biography["alignment"]}`,
		intelligence: `${hero.powerstats["intelligence"]}`,
		strength: `${hero.powerstats["strength"]}`,
		speed: `${hero.powerstats["speed"]}`,
		durability: `${hero.powerstats["durability"]}`,
		power: `${hero.powerstats["power"]}`,
		combat: `${hero.powerstats["combat"]}`,
		height: `${hero.appearance["height"]}`,
		weight: `${hero.appearance["weight"]}`,
		eyes: `${hero.appearance["eye-color"]}`,
		hair: `${hero.appearance["hair-color"]}`,
		work: `${hero.work["ocupation"]}`,
	};

	const { teamGood, teamBad } = useContext(TeamContext);
	const isInTeam = Boolean(
		teamGood.find((o) => o.id === heroData.id) ||
			teamBad.find((o) => o.id === heroData.id)
	);

	let quotaMsg = "";

	const quota = (alignment) => {
		// avisa si la cuota bueno/malo o el todo el equipo esta completo
		if (teamBad.length === 3 && teamGood.length === 3) {
			return (quotaMsg = (
				<Link
					to='/'
					title='Manage Team'
					className='text-decoration-none text-light'>
					Your team is already full!
				</Link>
			));
		}

		if (alignment === "bad") {
			if (teamBad.length === 3) {
				return (quotaMsg =
					"Your team already has 3 bad heros. Choose some goodguys now.");
			} else {
				return null;
			}
		} else {
			if (teamGood.length === 3) {
				return (quotaMsg =
					"Your team already has 3 good heros. Choose some badguys now.");
			} else {
				return null;
			}
		}
	};

	return (
		<div className='card p-2'>
			<img
				src={heroData.img}
				alt={heroData.name}
				className='card-img-top img-fluid mb-2'></img>
			<div className='row'>
				<h4 className='card-title col-6 text-dark'>
					<strong>{heroData.name}</strong>
				</h4>
				<h6 className='col-6 text-capitalize pt-1'>
					{heroData.alignment === "bad" ? "😈" : "😇"}{" "}
					{heroData.alignment}
				</h6>
			</div>
			<h6 className='card-subtitle text-dark'>{heroData.fullName}</h6>
			<Link
				to={{
					pathname: "/hero",
					state: { herodata: heroData }, // pasa info del heroe a la página del heroe,
				}}
				className='btn btn-primary mt-2'>
				Full Info
			</Link>
			<div className='row pt-2'>
				<div className='col-6'>
					<HeroCardControls
						action='hire'
						hero={heroData}
						exist={isInTeam}
						quota={!!quota(heroData.alignment)}
					/>
				</div>
				<div className='col-6'>
					<HeroCardControls
						action='fire'
						hero={heroData}
						exist={isInTeam}
						quota={!!quota(heroData.alignment)}
					/>
				</div>
			</div>
			{quota(heroData.alignment) && (
				<div className='animate__animated animate__bounceIn bg-danger rounded mt-2 p-2 text-light text-center'>
					{quotaMsg}
				</div>
			)}
		</div>
	);
};
