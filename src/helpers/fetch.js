const key = process.env.REACT_APP_KEY;
const baseUrl = process.env.REACT_APP_URL;

const page = 1;
const language = 'es-ES';

const fetchRecommend = async () => {
	return await fetch(
		`${baseUrl}discover/movie?api_key=${key}&language=${language}S&sort_by=popularity.desc&page=${page}`
	)
		.then((res) => res.json())
		.then((data) => {
			const movies = data.results;
			console.log(movies);
			return movies;
		});
};

const fetchTitle = async (query) => {
	return await fetch(
		`${baseUrl}search/movie?api_key=${key}&query=${query}&language=${language}&page=${page}`
	)
		.then((res) => res.json())
		.then((data) => {
			const movies = data.results;
			return movies;
		});
};

export { fetchRecommend, fetchTitle };
