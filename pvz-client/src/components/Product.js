import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { ProductConsumer } from '../context'

const Product = ({ plant }) => {
	const { name, cost, img, inCart } = plant

	return (
		<ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
			<div className="card">
				<div className="img-outline" />
				<div className="img-container p-5" onClick={() => console.log('you clicked me on the image container')}>
					<Link to="/details">
						<img src={img} alt="product" className="card-img-top" />
					</Link>
					<button
						className="cart-btn"
						disabled={inCart ? true : false}
						onClick={() => {
							console.log('added to cart')
						}}
					>
						{inCart ? (
							<p className="mb-0" disabled>
								{' '}
								In Cart
							</p>
						) : (
							<i className="fas fa-cart-plus" />
						)}
					</button>
				</div>
				{/* card footer */}
				<div className="card-footer">
					<h4 className="align-self-center mb-0">{name}</h4>
					<h5 className="mb-0">
						<span className="mr-1">$</span>
						{cost}
					</h5>
				</div>
			</div>
		</ProductWrapper>
	)
}

const ProductWrapper = styled.div`
	h4 {
		font-family: 'Cute Font', cursive;
		font-size: 32px;
		color: var(--lightBrown);
	}

	h5 {
		color: var(--titleGold);
	}

	.card {
		max-width: 200px;
		background-color: var(--mediumBrown);
		position: relative;

		border-color: transparent;
		transition: all 0.2s linear;

		&:hover {
			background-color: var(--lightBrown);
			border: 0.2rem solid var(--darkBrown);

			h4, h5 {
				color: var(--darkBrown);
			}
		}
	}

	.card-footer {
		background: transparent;
		border-top: transparent;
	}

	.img-outline {
		background-color: var(--darkBrown);
		height: 60%;
		width: 80%;
		border-radius: 4px;
		position: absolute;
		top: 10%;
		left: 10%
		z-index: 1;
	}

	.img-container {
		position: relative;
		overflow: hidden;
		z-index: 2;
	}
`

export default Product
