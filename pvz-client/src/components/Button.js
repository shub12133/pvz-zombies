import styled from 'styled-components'

export const ButtonContainer = styled.button`
	font-size: 1.4rem;
	background: transparent;
	border: 0.05rem solid var(--mediumBrown);
	color: var(--mediumBrown);
	border-radius: 0.5rem;
	padding: 0.2rem 0.5rem;
	cursor: pointer;
	margin: 0.2rem 0.5rem 0.2rem 0;
	transition: all 0.3s ease-in-out;

	&:hover {
		background: var(--mediumBrown);
		color: var(--lightBrown);
	}

	&:focus {ss
		outline: none;
	}
`
