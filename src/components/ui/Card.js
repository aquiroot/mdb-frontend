import React from 'react';

export const Card = ({ movie }) => {
	const imgURL = 'https://image.tmdb.org/t/p/original';

	const handleDetails = (e) => {
		e.preventDefault();
	};

	return (
		<div className="col">
			<div className="card w-25">
				<img
					src={imgURL + movie.poster_path}
					className="card-img-top"
					alt="movie poster"
				/>
				<div className="card-body">
					<h5 className="card-title fs-3 text-center">{movie.title}</h5>
					<h6 className="fw-light text-center">Date: {movie.release_date}</h6>
					<p className="card-text p-3">{movie.overview}</p>
					<hr />
					<h6 className="fs-6 text-center">Rate: {movie.vote_average}</h6>
					<a
						href="/details"
						onClick={handleDetails}
						className="btn btn-primary d-block"
					>
						Details
					</a>
				</div>
			</div>
		</div>
	);
};
