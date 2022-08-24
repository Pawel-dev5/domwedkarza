import styled, { css } from 'styled-components';

export const StyledMobileBodyWrapper = styled.div`
	position: fixed;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 0.6rem;
`;

// NAVIGATION
export const StyledNavText = styled.a`
	text-decoration: none;
	color: ${({ theme }) => theme.white};
	font-size: 0.9rem;

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

	${({ submenu }) =>
		submenu &&
		css`
			padding: 0 0.8rem;
			font-size: 0.85rem;
		`}
  
  ${({ customPadding }) =>
		customPadding &&
		css`
			padding: ${customPadding};
		`}
`;

export const StyledNavMenuWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-end;
	gap: 1.6rem;
	padding: 0 3rem;

	@media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
		padding: 0 0.5rem;
	}
`;

export const StyledNavWrapper = styled.nav`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	max-width: 1200px;
	height: 6rem;

	${({ submenu }) =>
		submenu &&
		css`
			height: 2.5rem;
			max-width: none;
			background: ${({ theme }) => theme.black};

			@media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
				padding: 6rem 0;
				height: 100%;
				flex-direction: column;

				> div {
					display: flex;
					-webkit-box-align: center;
					align-items: center;
					-webkit-box-pack: justify;
					justify-content: space-between;
					flex-direction: column;
					padding-top: 4rem;
					gap: 0.6rem;
				}
			}
		`}

	${({ hideSubMenu }) =>
		hideSubMenu &&
		css`
			display: none;
		`}
`;

export const StyledSubMenuWrapper = styled.div`
	max-width: 1110px;
	display: flex;
	width: 100%;
	align-items: center;
	justify-content: space-between;
	margin: auto;

	@media (min-width: ${({ theme }) => theme.breakpoints.lg}) and (max-width: ${({ theme }) => theme.breakpoints.xl}) {
		padding: 0 2rem;
	}
`;

// LAYOUT
export const StyledLayout = styled.main`
	position: relative;
	width: 100%;
	height: 100%;
	min-height: 800px;
	background: ${({ theme }) => theme.white};
`;

export const StyledImageWrapper = styled.div`
	position: relative;
	min-width: 300px;
	min-height: 100px;
	max-width: 400px;
	display: flex;
	align-items: flex-start;
	justify-content: center;
	height: 100%;
	width: 100%;
	span {
		object-fit: cover;
		img {
			object-fit: cover;
		}
	}
`;

// FOOTER
export const StyledFooterWrapper = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: space-around;
	width: 100%;
	max-width: 1220px;
	flex-direction: column;
	padding: 1rem 2rem;

	@media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
		padding: 3rem 0;
		flex-direction: row;
	}

	> div {
		width: 100%;
		margin: 1.5rem 0px;
		@media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			width: 33%;
			margin: 0;
		}
	}
`;

export const StyledFooter = styled.footer`
	background-color: ${({ theme }) => theme.black};
	display: flex;
	align-items: center;
	flex-direction: column;

	svg {
		cursor: pointer;
		color: ${({ theme }) => theme.white};
		:hover {
			color: ${({ theme }) => theme.darken({ amount: 0.2, color: theme.white })};
		}
	}
`;

export const StyledIconWrapper = styled.div`
	height: 3rem;
	display: flex;
	align-items: center;
	justify-content: flex-end;
	gap: 1rem;
`;

export const StyledCopyright = styled.div`
	width: 100%;
	height: 2rem;
`;

export const StyledMenuWrapper = styled.div`
	display: none;

	@media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
		position: -webkit-fixed; /* Safari */
		position: fixed;
		width: 100%;
		z-index: 999;
		top: 0;
		background-color: ${({ theme }) => theme.transparentize({ amount: 0.3, color: theme.black })};
		display: flex;
		align-items: center;
		flex-direction: column;
	}

	svg {
		cursor: pointer;

		color: ${({ theme }) => theme.white};
		:hover {
			color: ${({ theme }) => theme.darken({ amount: 0.2, color: theme.white })};
		}
	}
`;

export const StyledMobileMenuWrapper = styled.div`
	position: -webkit-fixed; /* Safari */
	position: fixed;
	width: 100%;
	z-index: 999;
	top: 0;
	background-color: ${({ theme }) => theme.black};
	display: flex;
	align-items: center;
	justify-content: space-between;

	@media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
		display: none;
	}
`;

export const StyledMobileMenu = styled.div`
	position: absolute;
	z-index: 998;
	top: 0;
	width: 100%;
	height: 100%;
	min-height: 800px;
	min-width: 100%;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	flex-direction: column;
	margin-top: 90px;
	padding-top: 100px;
	background-color: ${({ theme }) => theme.black};

	right: -480px;
	transition: 1s;

	@media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		right: -800px;
		transition: 1s;
	}

	${({ asideMenu }) =>
		asideMenu &&
		css`
			right: 0;
			transition: 1s;

			@media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
				right: 0;
			}
		`}

	@media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
		display: none;
	}
`;

export const StyledMobileNavWrapper = styled.div`
	overflow: hidden;
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	flex-direction: column;
`;

export const StyledSubFooter = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-direction: column;

	border-top: 1px solid rgba(255, 255, 255, 0.1);
	width: 100%;
	max-width: 1220px;
	min-height: 2.8rem;
	padding: 2rem;

	@media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
		flex-direction: row;
	}
	@media (min-width: ${({ theme }) => theme.breakpoints.lg}) and (max-width: ${({ theme }) => theme.breakpoints.xl}) {
		padding: 0 7rem 0 2rem;
	}
`;

export const StyledIframe = styled.iframe`
	border: none;
	width: 100%;
	height: 300px;

	@media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
		width: 55%;
	}
`;

export const StyledLayoutHeader = styled.div`
	${({ src }) =>
		src &&
		css`
			margin-top: 40px;
			min-height: 400px;
			width: 100%;
			background-image: url(${src});
			background-repeat: no-repeat;
			background-size: cover;
			background-position-x: center;
			background-position-y: center;
		`}
`;

export const StyledLayoutHeaderText = styled.div`
	width: 60%;
	border-bottom: 1px solid gray;
	min-height: 100px;
	text-align: center;
	margin: auto;
	display: flex;
	align-items: center;
	margin-bottom: 3rem;
	margin-top: 1rem;
	justify-content: center;
	flex-direction: column;

	${({ isImg }) =>
		!isImg &&
		css`
			margin-top: 7rem;
		`}

	@media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
		width: 30%;
		${({ isImg }) =>
			!isImg &&
			css`
				margin-top: 10rem;
			`}
	}
`;

export const StyledBurgerWrapper = styled.div`
	align-items: center;
	display: flex;
	height: 100px;
	justify-content: center;
	margin: 0;

	.container {
		cursor: pointer;
		display: flex;
		width: 50px;
		height: 100px;
	}
	svg {
		transition: transform 500ms cubic-bezier(0.4, 0, 0.2, 1);
	}

	path {
		transition: transform 500ms cubic-bezier(0.4, 0, 0.2, 1), stroke-dasharray 500ms cubic-bezier(0.4, 0, 0.2, 1),
			stroke-dashoffset 500ms cubic-bezier(0.4, 0, 0.2, 1);
	}
	path:nth-child(1) {
		transform-origin: 36% 40%;
	}
	path:nth-child(2) {
		stroke-dasharray: 29 299;
	}
	path:nth-child(3) {
		transform-origin: 35% 63%;
	}
	path:nth-child(4) {
		stroke-dasharray: 29 299;
	}
	path:nth-child(5) {
		transform-origin: 61% 52%;
	}
	path:nth-child(6) {
		transform-origin: 62% 52%;
	}

	${({ asideMenu }) =>
		asideMenu &&
		css`
			path:nth-child(1) {
				transform: translateX(9px) translateY(1px) rotate(45deg);
			}
			path:nth-child(2) {
				stroke-dasharray: 225 299;
				stroke-dashoffset: -72px;
			}
			path:nth-child(3) {
				transform: translateX(9px) translateY(1px) rotate(-45deg);
			}
			path:nth-child(4) {
				stroke-dasharray: 225 299;
				stroke-dashoffset: -72px;
			}
			path:nth-child(5) {
				transform: translateX(9px) translateY(1px) rotate(-45deg);
			}
			path:nth-child(6) {
				transform: translateX(9px) translateY(1px) rotate(45deg);
			}
			svg {
				transform: rotate(90deg);
			}
		`}
`;

export const StyledMobileButtonsWrapper = styled.div`
	display: flex;
	flex-flow: row nowrap;
	align-items: center;
	gap: 1rem;
	a {
		color: ${({ theme }) => theme.white};
	}
`;
