import React from 'react'
import Grid from "@material-ui/core/Grid"
import {Movie} from "../types"
import MovieItem from "./movie-item"
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import './movies-grid.css'
import {Box} from "@material-ui/core";
import {connect} from "react-redux";
import {compose} from "redux";
import {moveToExactPage} from "../actions";

interface Props {
	movies: Movie[],
	onClick: (id: string) => void,
	hideActionButtons?: boolean,
	removeFromFavorites?: (id: string) => void,
	page: number,
	moveToExactPage: (page: number) => void,
	onPageChange?: () => void,
	error?: string,
}

const CustomGrid = (props: Props) => {
	const classes = useStyles();
	const displayPagination = props.onPageChange && props.movies.length > 5
	const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
		props.moveToExactPage(value)
		props.onPageChange && props.onPageChange()
	};

	return (
		<Box p={5} className="movie-grid-root">
			{props.movies.length > 0 && (
				<Grid container spacing={3}>
					{props.movies.map((movie: Movie, idx: number) => (
						<Grid key={`${movie.id}${idx}`} item xs={3}>
							<MovieItem
								movie={movie}
								onClick={props.onClick}
								hideActionButtons={props.hideActionButtons}
								removeFromFavorites={props.removeFromFavorites}
							/>
						</Grid>
					))}
				</Grid>
			)}
			{!props.error && props.movies.length === 0 && (
				<Box style={{ marginTop: !props.hideActionButtons ? '136px' : 0 }} className="movie-grid-empty">
					<h2>No movies to show</h2>
				</Box>
			)}
			{props.error && (
				<Box style={{ marginTop: !props.hideActionButtons ? '136px' : 0 }} className="movie-grid-error">
					<h2>Search has failed, please try again</h2>
				</Box>
			)}
			{displayPagination && (
				<div className={classes.root}>
					<Pagination count={10} variant="outlined" color="primary" page={props.page} onChange={handleChange} />
				</div>
			)}
		</Box>
	)
}

const useStyles = makeStyles((theme) =>
	createStyles({
		root: {
			'& > *': {
				marginTop: theme.spacing(2),
			},
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
		},
	}),
);

// @ts-ignore
const mapStateToProps = ({ paging }) => ({
	page: paging,
})

const mapDispatchToProps = (dispatch: any) => ({
	moveToExactPage: (page: number) => dispatch(moveToExactPage(page)),
})

export default compose(connect(mapStateToProps, mapDispatchToProps))(CustomGrid)
