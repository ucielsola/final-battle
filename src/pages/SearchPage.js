import React from "react";
import { SearchInput } from "../components/search/SearchInput";
import "animate.css";

export const SearchPage = () => {
	return (
		<div className='animate__animated animate__fadeIn container pt-4 text-light'>
			<div className='container-fluid'>
				<h2 className='display-4'>Build your team</h2>
				<p className='display-6'>
					Pick your heros and get ready for the
					<span className='text-primary'> Final Battle</span>!
				</p>
			</div>
			<SearchInput />
		</div>
	);
};
