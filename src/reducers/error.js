import { MOVIES, RESET } from '../constants'

const errorReducer = (state = null, action) => {
	switch (action.type) {
		case MOVIES.LOAD_FAIL:
		case MOVIES.LOAD_DETAIL_FAIL:
			return action.error
		case MOVIES.LOAD:
		case MOVIES.LOAD_SUCCESS:
		case MOVIES.LOAD_DETAIL_SUCCESS:
		case RESET:
			return null
		default:
			return state
	}
}

export default errorReducer
