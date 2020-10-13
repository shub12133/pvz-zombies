import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo.png'
import styled from 'styled-components'
import { ButtonContainer } from './Button'

const Navbar = () => {
	return (
		<NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
			<Link to="/">
				<img src={logo} alt="store" className="navbar-brand" />
			</Link>
			<ul className="navbar-nav align-items-center">
				<li className="nav-item ml-5">
					<Link to="/" className="nav-link">
						Products
					</Link>
				</li>
			</ul>
			<Link to="/cart" className="ml-auto">
				<ButtonContainer>
					<span className="mr-2">
						<i className="fas fa-cart-plus" />
					</span>
					My Cart
				</ButtonContainer>
			</Link>
		</NavWrapper>
	)
}

const NavWrapper = styled.nav`
	background-color: var(--lightBrown);

	.nav-link {
		font-family: 'Oswald', sans-serif;
		letter-spacing: 0.05rem;
		color: var(--mediumBrown) !important;
		font-size: 1.3rem;
		transition: 0.3s ease-out;

		&:hover {
			color: var(--headingWhite) !important;
		}
	}
`

export default Navbar
