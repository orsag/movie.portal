const KEY = '215b6173'
const URL = 'http://www.omdbapi.com/?apikey='

const fetchMoviesSearch = async (searchText, page) => {
	const response = await fetch(`${URL}${KEY}&s=${searchText}&page=${page}`)
	const data = await response.json()
	if (response.status >= 400) {
		throw new Error(data.errors)
	}
	return data
}

const fetchMovieDetail = async id => {
	const response = await fetch(`${URL}${KEY}&i=${id}`)
	const data = await response.json()
	if (response.status >= 400) {
		throw new Error(data.errors)
	}
	return data
}

export { fetchMoviesSearch, fetchMovieDetail }
