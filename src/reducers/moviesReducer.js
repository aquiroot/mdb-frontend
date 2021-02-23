import { types } from '../types/types';

const initialState = {
	movies: [],
};

export const moviesReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.getRecommendMovies:
			return {
				...state,
				movies: action.payload,
			};

		case types.getTitleMovies:
			return {
				...state,
				movies: action.payload,
			};

		default:
			return state;
	}
};
