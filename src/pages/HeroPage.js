import React, { useEffect } from "react";
import { Route, Redirect, useLocation } from "react-router";
import { HeroStats } from "../components/hero/HeroStats";
import { HeroInfo } from "../components/hero/HeroInfo";

export const HeroPage = () => {
	const location = useLocation();
	const hero = location.state;
	console.log(hero);

	return (
		<div className='animate__animated animate__fadeIn container pt-4 text-light'>
			<div className='row'>
				<div className='col-md-6 d-flex justify-content-center'>
					<img alt={hero.name} src={hero.img} className='mx-auto' />
				</div>
				<div className='col-sm-8 col-md-8 col-lg-6 px-4'>
					<h2 className='display-4'>{hero.name}</h2>
					<h3 className='display-6'>[ {hero.fullName} ]</h3>
					<div className='row'>
						<div className='col-6'>
							<HeroStats hero={hero} />
						</div>
						<div className='col-6'>
							<HeroInfo hero={hero} />
						</div>
					</div>
					<div className='row'>
						<div className='col-md-6'>
							<div className='row border p-2 text-center'>
								<div className='col-md-4'>
									<span className='display-6'>
										{hero.alignment === "good"
											? "😇"
											: "😈"}
									</span>
								</div>
								<div className='col-md-8'>
									<span className='display-6 text-capitalize'>
										{hero.alignment}
									</span>
								</div>
							</div>
						</div>
						<div className='col-md-3 d-flex align-items-center justify-content-center'>
							<button
								type='button'
								className='btn btn-success btn-block'>
								Hire
							</button>
						</div>
						<div className='col-md-3 d-flex align-items-center justify-content-center'>
							<button
								type='button'
								className='btn btn-block btn-danger'
								disabled>
								Fire
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
