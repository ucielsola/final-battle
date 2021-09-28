import React from "react";

export const TheFooter = () => {
	return (
		<div className='d-flex justify-content-center container border-top border-light bg-dark px-4'>
			<span className='text-light'>
				Made with <span> 💜 </span> by <span> </span>
				<a
					href='https://ucielsola.com'
					title='Visit my portfolio!'
					className='lead text-decoration-none'
					target='_blank'
					rel='noopener noreferrer'>
					Uciel Sola
				</a>
				<span> || </span>
				<span className='text-light'>
					Final Batle <span> </span>
					<a
						href='https://github.com/ucielsola/final-battle'
						title='Visit repo'
						className='lead text-decoration-none'
						target='_blank'
						rel='noopener noreferrer'>
						GitHub Repo
					</a>
				</span>
			</span>
		</div>
	);
};
