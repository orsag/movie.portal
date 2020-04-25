import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import {loadMovies, resetPaging} from '../actions'
import {Box} from "@material-ui/core"
import CustomGrid from './custom-grid'
import Search from './search'
import { Movie } from '../types'
import './movies-grid.css'

interface Props {
	history: any,
	location: any,
	movies: Movie[],
	error: string,
	loadMovies: (search: string) => void,
	lastSearchedText: string,
	resetPaging: () => void,
	resetApplicationState: () => void,
}

class MoviesGrid extends Component<Props> {
	onSearchClick = (searchText: string) => {
		this.props.resetPaging()
		this.props.loadMovies(searchText)
	}

	onKeyPress = (event: React.KeyboardEvent, searchText: string) => {
		if (event.charCode === 13) {
			this.props.resetPaging()
			this.props.loadMovies(searchText)
		}
	}

	onMovieClick = (id: string) => {
		this.props.history.push(`/detail/${id}`)
	}

	onPageChange = () => {
		this.props.loadMovies(this.props.lastSearchedText)
	}

	render() {
		const { movies, error } = this.props
		return (
			<Box className="movie-grid-root">
				<Box className="movie-grid-search">
					<Search onKeyPress={this.onKeyPress} onClick={this.onSearchClick} />
				</Box>
				<CustomGrid
					movies={movies}
					onClick={this.onMovieClick}
					onPageChange={this.onPageChange}
					error={error}
					hideActionButtons />
			</Box>
		)
	}
}

// @ts-ignore
const mapStateToProps = ({ movies, error }) => ({
	lastSearchedText: movies.lastSearchedText,
	movies: movies.movies,
	error,
})

const mapDispatchToProps = (dispatch: any) => ({
	loadMovies: (searchText: string) => dispatch(loadMovies(searchText)),
	resetPaging: () => dispatch(resetPaging()),
})

// @ts-ignore
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(MoviesGrid))
