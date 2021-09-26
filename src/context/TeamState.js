import React, { createContext, useReducer, useEffect } from "react";
import Reducer from "./Reducer";

// recupera equipo de localStorage, o devuelve array vacio.
const initialState = {
	teamGood: localStorage.getItem("teamGood")
		? JSON.parse(localStorage.getItem("teamGood"))
		: [],
	teamBad: localStorage.getItem("teamBad")
		? JSON.parse(localStorage.getItem("teamBad"))
		: [],
};

// crea contexto
export const TeamContext = createContext(initialState);

// crea component proveedor
export const TeamProvider = (props) => {
	const [state, dispatch] = useReducer(Reducer, initialState);

	useEffect(() => {
		localStorage.setItem("teamGood", JSON.stringify(state.teamGood));
		localStorage.setItem("teamBad", JSON.stringify(state.teamBad));
	}, [state]);

	// actions
	const addToTeamGood = (hero) => {
		dispatch({ type: "ADD_TO_TEAM_GOOD", payload: hero });
	};
	const removeFromTeamGood = (id) => {
		dispatch({ type: "REMOVE_FROM_TEAM_GOOD", payload: id });
	};
	const addToTeamBad = (hero) => {
		dispatch({ type: "ADD_TO_TEAM_BAD", payload: hero });
	};
	const removeFromTeamBad = (id) => {
		dispatch({ type: "REMOVE_FROM_TEAM_BAD", payload: id });
	};

	return (
		<TeamContext.Provider
			value={{
				teamGood: state.teamGood,
				teamBad: state.teamBad,
				addToTeamGood,
				removeFromTeamGood,
				addToTeamBad,
				removeFromTeamBad,
			}}>
			{props.children}
		</TeamContext.Provider>
	);
};
