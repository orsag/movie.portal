import { MOVIES } from '../constants'
import { filterDuplicates } from '../utils/index.js'

const initialState = {
	favorites: [],
}

const favoritesReducer = (state = initialState, action) => {
	switch (action.type) {
		case MOVIES.ADD_TO_FAVORITES:
			return {
				...state,
				favorites: filterDuplicates([...state.favorites, action.movie]),
			}
		case MOVIES.REMOVE_FROM_FAVORITES:
			return {
				...state,
				favorites: state.favorites.filter((movie) => movie.id !== action.id),
			}
		default:
			return state
	}
}

export default favoritesReducer
