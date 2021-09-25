import React from "react";
import { useLocation } from "react-router";
import { HeroData } from "../components/hero/HeroData";

export const HeroPage = () => {
	const location = useLocation();
	const hero = location.state;
	console.log(hero);

	return (
		<div className='animate__animated animate__fadeIn container pt-4 text-light'>
			<div className='row'>
				<div className='col-sm-12 col-md-6 d-flex justify-content-center'>
					<img
						alt={hero.name}
						src={hero.img}
						className='mw-100 mx-auto'
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
								<div className='col-md-8'>
									<span className='display-6 text-capitalize'>
										{hero.alignment}
									</span>
								</div>
							</div>
						</div>
						<div className='col-4 d-flex align-items-center justify-content-center'>
							<button
								type='button'
								className='btn btn-success w-75'
								title='Add to your Team'>
								Hire
							</button>
						</div>
						<div className='col-4 d-flex align-items-center justify-content-center'>
							<button
								type='button'
								className='btn btn-danger w-75'
								title='Remove from your Team'
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
