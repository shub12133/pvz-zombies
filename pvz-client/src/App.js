import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import ProductList from './components/ProductList'
import Details from './components/Details'
import Cart from './components/Cart'
import Default from './components/Default'

import './App.css'
import 'bootstrap/dist/css/bootstrap.css'

class App extends Component {
	render() {
		return (
			<div className="App">
				<Navbar />
				<Switch>
					{/* <Route exact path="/" render={(props) => <ProductList plants={this.state.plants} />} /> */}
					<Route exact path="/" component={ProductList} />
					<Route path="/details" component={Details} />
					<Route path="/cart" component={Cart} />
					<Route component={Default} />
				</Switch>
			</div>
		)
	}
}

export default App
