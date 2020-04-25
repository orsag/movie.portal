import React, { Component } from 'react'
import { Movie } from "../types"
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from '@material-ui/icons/Delete';
import ImageIcon from '@material-ui/icons/Image';
import './movie-item.css'
import {Paper} from "@material-ui/core";
import styled from "@material-ui/core/styles/styled";
import Box from "@material-ui/core/Box";

interface Props {
	movie: Movie,
	onClick: (id: string) => void,
	hideActionButtons?: boolean,
	removeFromFavorites?: (id: string) => void,
}

class MovieItem extends Component<Props> {
	onClick = () => {
		this.props.onClick(this.props.movie.id)
	}

	removeFromFavorites = (event: React.MouseEvent) => {
		event.stopPropagation()
		this.props.removeFromFavorites && this.props.removeFromFavorites(this.props.movie.id)
	}

	noImageRenderer = () => {
		const { movie } = this.props
		return (
			<div>
				<Box p={1}>
					<ImageIcon style={{ fontSize: 50 }} />
				</Box>
				<Box p={1}>
					<h3>{movie.name}</h3>
				</Box>
			</div>
		)
	}

	render() {
		const { movie } = this.props
		return (
			<Paper2 onClick={this.onClick} className="movie-item-root">
				{movie.image === 'N/A' ? this.noImageRenderer() : (
					<div>
						<img src={movie.image} height='220' alt={''} className="movie-item-image" />
					</div>
				)}
				{!this.props.hideActionButtons &&	(
					<div className="movie-item-icon-box">
						<Tooltip title="Remove from favorites" placement="bottom">
							<IconButton onClick={this.removeFromFavorites} aria-label="delete">
								<DeleteIcon className="movie-item-icon" />
							</IconButton>
						</Tooltip>
					</div>
				)}
			</Paper2>
		)
	}
}

const Paper2 = styled(Paper)({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	padding: '16px',
	textAlign: 'center',
	minHeight: '257px',
	position: 'relative',
	border: '1px solid transparent',
});

export default MovieItem
