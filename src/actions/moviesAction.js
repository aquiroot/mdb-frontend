import { types } from '../types/types';
import { fetchRecommend, fetchTitle } from '../helpers/fetch';

export const startGetRecommendMovies = () => {
	return async (dispatch) => {
		const movies = await fetchRecommend();

		dispatch(getRecommendMovies(movies));
	};
};

export const startGetSearchTitle = (search) => {
	return async (dispatch) => {
		const movies = await fetchTitle(search);

		dispatch(getTitleMovies(movies));
	};
};

const getRecommendMovies = (movies) => ({
	type: types.getRecommendMovies,
	payload: movies,
});

const getTitleMovies = (movies) => ({
	type: types.getRecommendMovies,
	payload: movies,
});
