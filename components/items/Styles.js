import styled, { css } from 'styled-components';

export const StyledFooterAdres = styled.div`
	display: flex;
	align-items: flex-start;
	flex-direction: column;
	align-items: flex-start;
`;

export const StyledTelWrapper = styled.div`
	display: flex;
	flex-direction: column;
	padding: 0;
	padding-bottom: 1rem;
	padding-top: 0.5rem;
	align-items: flex-start;
`;

export const StyledContact = styled.div`
	color: ${({ theme }) => theme.black};

	* {
		color: ${({ theme }) => theme.black};
	}

	${({ color }) =>
		color === 'white' &&
		css`
			color: ${({ theme }) => theme.white};

			* {
				color: ${({ theme }) => theme.white};
			}
		`}

	${({ color }) =>
		color === 'black' &&
		css`
			color: ${({ theme }) => theme.black};

			* {
				color: ${({ theme }) => theme.black};
			}
		`}
`;

export const StyledAdressWrapper = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 2rem;

	span {
		width: 90%;
		line-height: 1.5rem;
	}
`;

export const StyledNavText = styled.a`
	text-decoration: none;
	color: ${({ theme }) => theme.white};
	font-size: 1rem;

	:hover,
	:active,
	:focus {
		text-decoration: underline;
		color: ${({ theme }) => theme.darken({ amount: 0.2, color: theme.white })};
	}

	${({ active }) =>
		active &&
		css`
			font-weight: ${({ theme }) => theme.semiBold};
			text-decoration: underline;
			color: ${({ theme }) => theme.darken({ amount: 0.2, color: theme.white })};
		`}

	${({ customPadding }) =>
		customPadding &&
		css`
			padding: ${customPadding};
		`}
`;

export const StyledMessangerIcon = styled.a`
	position: fixed;
	display: flex;
	align-items: center;
	justify-content: center;
	bottom: 0px;
	right: 0px;
	width: 80px;
	height: 80px;
	border-radius: 50%;

	@media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
		bottom: 20px;
		right: 20px;
	}

	transition: all 0.2s ease-in-out;
	:hover {
		transform: scale(1.2);
	}
`;
