import loadingReducer from './loading'
import errorReducer from './error'
import pageReducer from './page-reducer'
import moviesReducer from './movies'
import favoritesReducer from './favorites'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
	isLoading: loadingReducer,
	paging: pageReducer,
	error: errorReducer,
	movies: moviesReducer,
	favorites: favoritesReducer,
})

export default rootReducer
