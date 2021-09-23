import React, { useState } from "react";
import axios from "axios";
import "animate.css";

export const SearchInput = () => {
	const [results, setResults] = useState([]);
	const [error, setError] = useState("");

	const Search = (e) => {
		e.preventDefault();
		setError(false);
		if (e.target.value.length < 3) return; // habilitar búsqueda después del 3er caracter

		axios
			.get(
				`https://superheroapi.com/api/10225316027789056/search/${e.target.value}`
			)
			.then((res) => {
				if (!res.data.results) {
					// avisa al usuario que la búsqueda no arroja resultados
					setError(
						"There are no heros with that name 🧐 Try another! 🦹‍♀️"
					);
				}
				setResults(res.data.results);
			})
			.catch((err) => {
				console.warn(err);
				setResults([]);
			});
	};
	return (
		<div className='container-fluid w-70'>
			<input
				type='text'
				placeholder='Ironman'
				onChange={Search}
				autoFocus={true}
				className='w-100'
			/>
			{error && (
				<p className='animate__animated animate__bounceIn text-light bg-danger text-center lead mt-2'>
					{error}
				</p>
			)}
		</div>
	);
};
