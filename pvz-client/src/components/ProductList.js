import React, { useContext } from 'react'
import Product from './Product'
import Title from './Title'
import { ProductConsumer, ProductContext } from '../context'

const ProductList = () => {
	// const getPlants = useContext(ProductContext)

	return (
		<div className="py-5">
			<div className="container">
				<Title name="Our" title="Products" />
				<div className="row">
					{/* <div>{plants}</div> */}

					<ProductConsumer>
						{(getPlants) => {
							return getPlants.plants.map((plant) => {
								return <Product key={plant.plantID} plant={plant} />
							})
						}}
					</ProductConsumer>
				</div>
			</div>
		</div>
	)
}

export default ProductList

