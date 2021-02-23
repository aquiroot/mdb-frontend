import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card } from './Card';
import { uiIsLoading } from '../../actions/uiAction';
import { startGetRecommendMovies } from '../../actions/moviesAction';

export const Dashboard = () => {
	const dispatch = useDispatch();

	const { isLoading } = useSelector((state) => state.ui);
	const { movies } = useSelector((state) => state.movies);

	useEffect(() => {
		dispatch(startGetRecommendMovies()).then(() => {
			dispatch(uiIsLoading());
		});
	}, [dispatch]);

	return (
		<div className="container">
			<div className="row row-col-1">
				{isLoading ? (
					<h3>Wait, loading...</h3>
				) : (
					movies.map((movie) => <Card key={movie.id} movie={movie} />)
				)}
			</div>
		</div>
	);
};
