const fetchRecommend = async () => {
	return await fetch(
		'https://api.themoviedb.org/3/discover/movie?api_key=edf47991920357e9f8c81335d3f6dc59&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1'
	)
		.then((res) => res.json())
		.then((data) => {
			const movies = data.results;
			return movies;
		});
};

const fetchTitle = async (query) => {
	return await fetch(
		`https://api.themoviedb.org/3/search/movie?api_key=edf47991920357e9f8c81335d3f6dc59&query=${query}`
	)
		.then((res) => res.json())
		.then((data) => {
			const movies = data.results;
			return movies;
		});
};

export { fetchRecommend, fetchTitle };
