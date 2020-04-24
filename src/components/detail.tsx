import React, { Component } from 'react'
import { connect } from 'react-redux'
import StarsIcon from '@material-ui/icons/Stars'
import { Movie, MovieDetail } from "../types"
import './detail.css'
import {addToFavorites, loadDetail, removeFromFavorites, removeDetail} from "../actions";
import {Chip} from "@material-ui/core";
import {styled} from "@material-ui/core/styles";
import Divider from '@material-ui/core/Divider';
import Box from "@material-ui/core/Box";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';

interface Props {
	detail: MovieDetail,
	addToFavorites: (movie: Movie) => void,
	removeFromFavorites: (id: string) => void,
	loadDetail: (id: string) => void,
	match: any,
	removeDetail: () => void,
}

interface State {
	isAddedToFavs: boolean,
	openSnackbar: boolean,
}

class Detail extends Component<Props, State> {
	state: State = { isAddedToFavs: false, openSnackbar: false }

	componentDidMount() {
		this.props.loadDetail(this.props.match.params.id)
	}

	componentWillUnmount() {
		this.props.removeDetail()
	}

	addToFavorites = () => {
		if (!this.state.isAddedToFavs) {
			this.setState({ isAddedToFavs: true, openSnackbar: true })
			this.props.addToFavorites({
				name: this.props.detail.Title,
				year: this.props.detail.Year,
				id: this.props.detail.imdbID,
				type: this.props.detail.Type,
				image: this.props.detail.Poster,
				isFavorite: true,
			})
		}
	}

	handleClose = () => {
		this.setState({ openSnackbar: false })
	}

  render() {
  	const { detail } = this.props
		if (!detail) return null
		return (
      <div className="detail-root">
        <div>
					<img src={detail.Poster} alt="" />
				</div>
				<div className="detail-text">
					<div className="detail-header">
						{detail.Title}
						<div className="detail-star" onClick={this.addToFavorites}>
							<Tooltip title="Add to favorites" placement="bottom">
								<IconButton  aria-label="delete">
									<StarsIcon className="detail-star2" />
								</IconButton>
							</Tooltip>
						</div>
					</div>
					<Box m={2} className="detail-text-box">
						{detail.Writer}
					</Box>
					<Divider variant="middle" />
					<Box m={2} className="detail-text-box">
						{detail.Plot}
					</Box>
					<div>
						<MyChip label={`Year: ${detail.Year}`} />
						<MyChip label={`Rated: ${detail.Rated}`} />
						<MyChip label={`Released: ${detail.Released}`} />
						<MyChip label={`Runtime: ${detail.Runtime}`} />
						<MyChip label={`Genre: ${detail.Genre}`} />
						<MyChip label={`Director: ${detail.Director}`} />
						<MyChip label={`BoxOffice: ${detail.BoxOffice}`} />
						<MyChip label={`Production: ${detail.Production}`} />
					</div>
				</div>
				<Snackbar open={this.state.openSnackbar} autoHideDuration={3000} onClose={this.handleClose}>
					<Alert onClose={this.handleClose} severity="success">
						Added to favorites!
					</Alert>
				</Snackbar>
      </div>
    )
  }
}

const MyChip = styled(Chip)({
	margin: '10px',
});

// @ts-ignore
const mapStateToProps = ({ movies, isLoading }) => ({
	isLoading,
	detail: movies.detail,
})

const mapDispatchToProps = (dispatch: any) => ({
	loadDetail: (id: string) => dispatch(loadDetail(id)),
	addToFavorites: (movie: Movie) => dispatch(addToFavorites(movie)),
	removeFromFavorites: (id: string) => dispatch(removeFromFavorites(id)),
	removeDetail: () => dispatch(removeDetail()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Detail)
