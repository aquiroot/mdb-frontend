import React, { useEffect, useState } from 'react';
import { fetchDiscover } from '../../helpers/fetch';
import { Card } from './Card';

export const Dashboard = () => {
	const [movies, setMovies] = useState();
	const algo = 12;

	useEffect(() => {
		fetchDiscover().then((res) => {
			setMovies(res);
		});
	}, [algo]);

	return (
		<div className="container">
			<div className="row row-col-1">
				{movies ? (
					movies.map((movie) => <Card key={movie.id} movie={movie} />)
				) : (
					<h2>Loading...</h2>
				)}
			</div>
		</div>
	);
};
