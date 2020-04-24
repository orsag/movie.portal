import { MOVIES, RESET } from '../constants'

const initialState = {
	movies: [],
	detail: null,
	lastSearchedText: '',
}

const moviesReducer = (state = initialState, action) => {
	switch (action.type) {
		case MOVIES.LOAD_SUCCESS:
			return {
				...state,
				movies: [...action.movies],
				lastSearchedText: action.searchText,
			}
		case MOVIES.LOAD_DETAIL_SUCCESS:
			return {
				...state,
				detail: action.detail,
			}
		case MOVIES.REMOVE_DETAIL:
			return {
				...state,
				detail: null,
			}
		case MOVIES.LOAD_FAIL:
			return {
				...state,
				movies: [],
			}
		case RESET:
			return {
				...initialState,
			}
		default:
			return state
	}
}

export default moviesReducer
