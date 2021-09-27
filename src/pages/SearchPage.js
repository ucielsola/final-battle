import React, { useState } from "react";
import { SearchInput } from "../components/search/SearchInput";
import { SearchHeroCard } from "../components/search/SearchHeroCard";
import "animate.css";

export const SearchPage = () => {
	const [results, setResults] = useState([]);

	return (
		<div className='animate__animated animate__fadeIn container pt-4 text-light'>
			<div className='container-fluid'>
				<h2 className='display-4'>Build your team</h2>
				<p className='display-6'>
					Pick your heros and get ready for the
					<span className='text-primary'> Final Battle</span>!
				</p>
			</div>
			<SearchInput setResults={setResults} />
			{results && (
				<ul className='row row-cols-xl-3 mt-4 p-2 justify-content-center'>
					{results.map((hero) => (
						<li
							className='search__results col-md-4 list-group-item bg-dark border-dark p-2 mw-80 animate__animated animate__fadeIn'
							key={hero.id}>
							<SearchHeroCard hero={hero} />
						</li>
					))}
				</ul>
			)}
		</div>
	);
};
