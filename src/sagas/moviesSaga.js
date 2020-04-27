import { fetchMoviesSearch, fetchMovieDetail } from '../api'

import { put, call, select, takeEvery } from 'redux-saga/effects'

import {
	setMovieList,
	setMoviesError,
	setMovieDetail,
	setMovieDetailError } from '../actions'
import { MOVIES } from '../constants'

export const getPage = (state) => state.paging

export function* handleMoviesSearch({ searchText }) {
	try {
		const page = yield select(getPage)
		const response = yield call(fetchMoviesSearch, searchText, page)
		const movies = response && response.Search && response.Search.map((movie) => ({
			name: movie.Title,
			year: movie.Year,
			id: movie.imdbID,
			type: movie.Type,
			image: movie.Poster,
		}))
		yield put(setMovieList(movies, searchText))
	} catch (error) {
		yield put(setMoviesError(error.toString()))
	}
}

export function* handleDetailLoad({ id }) {
	try {
		const detail = yield call(fetchMovieDetail, id)
		yield put(setMovieDetail(detail))
	} catch (error) {
		yield put(setMovieDetailError(error.toString()))
	}
}

export default function* watchMoviesSearch() {
	yield takeEvery(MOVIES.LOAD, handleMoviesSearch)
	yield takeEvery(MOVIES.LOAD_DETAIL, handleDetailLoad)
}
