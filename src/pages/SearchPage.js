import React, { useState } from "react";
import { SearchInput } from "../components/search/SearchInput";
import { SearchResults } from "../components/search/SearchResults";
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
						<SearchResults hero={hero} key={hero.id} />
					))}
				</ul>
			)}
		</div>
	);
};
