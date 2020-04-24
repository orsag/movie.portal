import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Movie } from "../types"
import CustomGrid from './custom-grid'
import {withRouter} from "react-router-dom";
import {addToFavorites, removeFromFavorites} from "../actions";

interface Props {
	history: any,
	favorites: Movie[],
	removeFromFavorites: (id: string) => void,
}

class Favorites extends Component<Props> {
	onMovieClick = (id: string) => {
		this.props.history.push(`/detail/${id}`)
	}

	onRemoveFromFavorites = (id: string) => {
		this.props.removeFromFavorites(id)
	}

  render = () => (
  	<CustomGrid
			movies={this.props.favorites}
			onClick={this.onMovieClick}
			removeFromFavorites={this.onRemoveFromFavorites}
		/>)
}

// @ts-ignore
const mapStateToProps = ({ favorites }) => ({
	favorites: favorites.favorites,
})

const mapDispatchToProps = (dispatch: any) => ({
	addToFavorites: (movie: Movie) => dispatch(addToFavorites(movie)),
	removeFromFavorites: (id: string) => dispatch(removeFromFavorites(id)),
})

// @ts-ignore
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Favorites))
