import React, { useContext } from "react";
import { useLocation } from "react-router";
import { TeamContext } from "../context/TeamState";
import { HeroData } from "../components/hero/HeroData";
import { HeroCardControls } from "../components/shared/HeroCardControls";

export const HeroPage = () => {
	const location = useLocation();
	const hero = location.state.herodata;

	const { teamGood, teamBad } = useContext(TeamContext);
	const isInTeam = Boolean(
		teamGood.find((o) => o.id === hero.id) ||
			teamBad.find((o) => o.id === hero.id)
	);

	let quotaMsg = "";
	const quota = (alignment) => {
		// avisa si la cuota bueno/malo o el todo el equipo esta completo
		if (teamBad.length === 3 && teamGood.length === 3) {
			return (quotaMsg = "Your team is already full!");
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
		<div className='animate__animated animate__fadeIn container pt-4 text-light'>
			<div className='row'>
				<div className='col-sm-12 col-md-6 d-flex justify-content-center'>
					<img
						alt={hero.name}
						src={hero.img}
						className='mw-100 mx-auto animate__animated animate__flipInY animate__delay-1s '
					/>
				</div>
				<div className='col-sm-12 col-md-8 col-lg-6 py-4 px-4'>
					<h2 className='display-4'>{hero.name}</h2>
					<h3 className='display-6'>[ {hero.fullName} ]</h3>
					<div className='row'>
						<div className='col-6'>
							<HeroData hero={hero} type='stats' />
						</div>
						<div className='col-6'>
							<HeroData hero={hero} type='info' />
						</div>
					</div>
					<div className='row'>
						<div className='col-4'>
							<div className='row border p-2 text-center'>
								<div className='col-md-4'>
									<span className='display-6'>
										{hero.alignment === "good"
											? "😇"
											: "😈"}
									</span>
								</div>
								<div className='col-md-8 d-flex justify-content-center'>
									<span className='display-6 text-capitalize'>
										{hero.alignment}
									</span>
								</div>
							</div>
						</div>
						<div className='col-4 d-flex align-items-center justify-content-center'>
							<HeroCardControls
								action='hire'
								hero={hero}
								exist={isInTeam}
								quota={!!quota(hero.alignment)}
							/>
						</div>
						<div className='col-4 d-flex align-items-center justify-content-center'>
							<HeroCardControls
								action='fire'
								hero={hero}
								exist={isInTeam}
								quota={!!quota(hero.alignment)}
							/>
						</div>
						{quota(hero.alignment) && (
							<div className='animate__animated animate__bounceIn bg-danger rounded mt-2 p-2 text-light text-center'>
								{quotaMsg}
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};
