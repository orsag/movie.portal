import { PAGE } from '../constants'

const pageReducer = (state = 1, action) => {
	switch (action.type) {
		case PAGE.RESET_PAGING:
			return 1
		case PAGE.EXACT_PAGE:
			return action.pageNumber
		default:
			return state
	}
}

export default pageReducer
