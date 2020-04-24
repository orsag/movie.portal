import React, {Component} from 'react'
import { Provider } from 'react-redux'
import configureStore from './store'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Container from '@material-ui/core/Container'
import Favorites from './components/favorites'
import Detail from './components/detail'
import Header from './components/header'
import MoviesGrid from './components/movies-grid'
import './App.css'

const store = configureStore()

class App extends Component {
  render() {
    return (
			<Router>
				<Switch>
					<Provider store={store}>
						<Header />
						<Container className="app-container" maxWidth={"md"}>
							<Route path="/" exact component={MoviesGrid} />
							<Route path="/search" component={MoviesGrid} />
							<Route path="/favorites" component={Favorites} />
							<Route path="/detail/:id" component={Detail} />
						</Container>
					</Provider>
				</Switch>
			</Router>
    )
  }
}

export default App
