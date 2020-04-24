import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { LinearProgress } from "@material-ui/core"
// @ts-ignore
import { compose } from 'recompose'
import './header.css'

interface Props {
	isLoading: boolean,
}

const Header = (props: Props) => (
	<div className="header-box">
		<header>
			<span className="logo">
				<Link to="/">
					Movies!
				</Link>
			</span>
			<ul className="menu">
				<Link to="/search">
					<li>Search</li>
				</Link>
				<Link to="/favorites">
					<li>Favorites</li>
				</Link>
			</ul>
		</header>
		{props.isLoading && <LinearProgress style={{ position: 'relative', top: '65px' }} />}
	</div>
)

// @ts-ignore
const mapStateToProps = ({ isLoading }) => ({
	isLoading,
})

export default compose(connect(mapStateToProps))(Header)
