function Reducer(state, action) {
	switch (action.type) {
		case "ADD_TO_TEAM_GOOD":
			return {
				...state,
				teamGood: [action.payload, ...state.teamGood],
			};
		case "REMOVE_FROM_TEAM_GOOD":
			return {
				...state,
				teamGood: state.teamGood.filter(
					(hero) => hero.id !== action.payload
				),
			};
		case "ADD_TO_TEAM_BAD":
			return {
				...state,
				teamBad: [action.payload, ...state.teamBad],
			};
		case "REMOVE_FROM_TEAM_BAD":
			return {
				...state,
				teamBad: state.teamBad.filter(
					(hero) => hero.id !== action.payload
				),
			};
		default:
			return state;
	}
}

export default Reducer;
