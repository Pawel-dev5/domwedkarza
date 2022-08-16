import styled, { css } from 'styled-components';

export const StyledCustomWrapper = styled.div`
	width: 100%;
	height: 100%;
	min-height: 700px;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 4rem;
	margin: 6rem 0;
	background: ${({ theme }) => theme.white};
	* {
		color: ${({ theme }) => theme.black};
	}

	@media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
		flex-direction: column;
	}
`;

export const StyledImageWrapper = styled.div`
	width: 50%;
	max-width: 465px;
	height: 530px;
	padding-top: 2rem;
	overflow: visible;

	@media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
		display: none;
	}
`;

export const StyledTextWrapper = styled.div`
	width: 50%;
	max-width: 599px;
	height: 100%;
	padding: 2rem;
	display: flex;
	align-items: flex-start;
	justify-content: flex-start;
	flex-direction: column;
	overflow: visible;

	@media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
		width: 100%;
	}
	ul {
		padding: 0 2rem;
		margin-bottom: 2.1rem;
		margin-top: 0.8rem;
		li {
			overflow: visible;
			a {
				font-weight: ${({ theme }) => theme.bold};
				font-size: 1rem;
				text-decoration: underline;
				color: ${({ theme }) => theme.black};
				:hover {
					color: ${({ theme }) => theme.black};
				}
			}
		}
	}
`;

export const StyledDesc = styled.div`
	margin-bottom: 2rem;
`;

export const StyledHeader = styled.div`
	padding: 4rem 0;
	a {
		font-weight: ${({ theme }) => theme.bold};
		line-height: 6.5rem;
		font-size: 4rem;
		min-height: 16rem;
		text-decoration: none;
		background: linear-gradient(to right, #d00060, #d00060);
		background-position: 0 100%;
		background-size: 0 8px;
		background-repeat: no-repeat;
		transition: background-size 1000ms;
		padding-bottom: 1rem;

		${({ visible }) =>
			visible &&
			css`
				background-size: 100% 8px;
				color: ${({ theme }) => theme.black};
			`}
	}
	@media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
		padding-top: 0;
		padding-bottom: 2rem;

		a {
			font-size: 2.7rem;
			line-height: 5rem;
			min-width: 100%;
		}
	}
`;

export const StyledLink = styled.a`
	color: ${({ theme }) => theme.black};
	border: 1px solid ${({ theme }) => theme.black};
	padding: 0.7rem 2rem;
	font-size: 1rem;
	margin-bottom: 2rem;
	margin-top: 1.4rem;

	:hover {
		background: ${({ theme }) => theme.black};
		color: ${({ theme }) => theme.white};
		text-decoration: none;
	}

	@media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
		width: fit-content;
		margin: 0 auto;
		margin-bottom: 2rem;
		margin-top: 1.4rem;
		text-align: center;
	}
`;
