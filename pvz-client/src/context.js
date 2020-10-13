import React, { Component } from 'react'

const ProductContext = React.createContext()
// Provider
// Consumer

class ProductProvider extends Component {
	state = {
		plants: [],
		detailProduct: []
	}

	componentDidMount() {
		this.getPlants()
	}

	getPlants = () => {
		fetch('/products')
			.then((res) => res.json())
			.then((res) => this.setState({ plants: res.data }))
			.catch((err) => console.error(err))
	}

	handleDetail = () => {
		console.log('Hello from Detail')
	}

	addToCart = () => {
		console.log('Hello from Add to Cart')
	}

	render() {
		// const { plants } = this.state
		// prettier-ignore
		return <ProductContext.Provider 
				value={{
					...this.state,
					handleDetail: this.handleDetail,
					addToCart: this.addToCart
				}}
			>
                {this.props.children}
            </ProductContext.Provider>
	}
}

const ProductConsumer = ProductContext.Consumer

export { ProductProvider, ProductConsumer, ProductContext }
