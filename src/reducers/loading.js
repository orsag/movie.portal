import { MOVIES, RESET } from '../constants'

const loadingReducer = (state = false, action) => {
	switch (action.type) {
		case MOVIES.LOAD:
		case MOVIES.LOAD_DETAIL:
			return true
		case MOVIES.LOAD_SUCCESS:
		case MOVIES.LOAD_DETAIL_SUCCESS:
			return false
		case MOVIES.LOAD_FAIL:
		case MOVIES.LOAD_DETAIL_FAIL:
		case RESET:
			return false
		default:
			return state
	}
}

export default loadingReducer
