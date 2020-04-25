import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { LinearProgress } from "@material-ui/core"
// @ts-ignore
import { compose } from 'recompose'
import './header.css'
import AppBar from "@material-ui/core/AppBar";
import makeStyles from "@material-ui/core/styles/makeStyles";

interface Props {
	isLoading: boolean,
}

const Header = (props: Props) => {
	const classes = useStyles();

	return (
		<Fragment>
			<AppBar position="sticky" className={classes.colorPrimary}>
				<div className="header-progress-fix">
					{props.isLoading && <LinearProgress />}
				</div>
				<div className="header-menu">
					<Link to='/'>Movies</Link>
					<Link to='/favorites'>Favorites</Link>
				</div>
			</AppBar>
		</Fragment>
	)
}
// @ts-ignore
const mapStateToProps = ({ isLoading }) => ({
	isLoading,
})

const useStyles = makeStyles(() => ({
	colorPrimary: {
		backgroundColor: '#fff',
		color: '#424242',
	}
}))

export default compose(connect(mapStateToProps))(Header)
