import { MOVIES, PAGE } from '../constants';

const loadMovies = (searchText) => ({
	type: MOVIES.LOAD,
	searchText,
})

const setMovieList = (movies, searchText) => ({
	type: MOVIES.LOAD_SUCCESS,
	movies,
	searchText,
})

const setMoviesError = (error) => ({
	type: MOVIES.LOAD_FAIL,
	error,
})

const loadDetail = id => ({
	type: MOVIES.LOAD_DETAIL,
	id,
})

const setMovieDetail = (detail) => ({
	type: MOVIES.LOAD_DETAIL_SUCCESS,
	detail,
})

const setMovieDetailError = (error) => ({
	type: MOVIES.LOAD_DETAIL_FAIL,
	error,
})

const addToFavorites = (movie) => ({
	type: MOVIES.ADD_TO_FAVORITES,
	movie,
})

const removeFromFavorites = (id) => ({
	type: MOVIES.REMOVE_FROM_FAVORITES,
	id,
})

const removeDetail = () => ({
	type: MOVIES.REMOVE_DETAIL,
})

const moveToExactPage = (pageNumber) => ({
	type: PAGE.EXACT_PAGE,
	pageNumber,
})

const resetPaging = () => ({
	type: PAGE.RESET_PAGING,
})

export {
	loadMovies,
	setMovieList,
	setMoviesError,
	loadDetail,
	setMovieDetail,
	setMovieDetailError,
	addToFavorites,
	removeFromFavorites,
	removeDetail,
	moveToExactPage,
	resetPaging,
}
