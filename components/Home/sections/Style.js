import styled, { css } from 'styled-components';

const basicCardStyles = css`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	width: 100%;
`;

export const StyledSecondWrapper = styled.div`
	width: 100%;
	margin-top: 4rem;
	margin-bottom: 2rem;

	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	text-align: center;
`;

export const StyledThirdSection = styled.div`
	position: relative;
	height: 1000px;

	display: flex;
	flex-direction: column;
	margin: 1rem 0;
	margin-bottom: 2rem;

	@media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
		height: 300px;
		flex-direction: row;
	}
	@media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
		height: 500px;
	}

	> div {
		position: relative;
	}

	> * {
		cursor: pointer;
		aspect-ratio: 1;
		overflow: hidden;

		img {
			transition: transform 0.25s ease;
			object-fit: cover;
			width: 100%;
			height: 100%;
		}

		:hover {
			img {
				transform: scale(1.1);
				transition: transform 0.5s;
			}
		}
	}
`;

export const StyledVideo = styled.video`
	height: 100%;
`;

export const StyledVideoWrapper = styled.div`
	width: 100%;
	max-width: 100%;

	@media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
		height: 500px;
	}
	margin: 6rem 0;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const StyledFeaturesWrapper = styled.div`
	${basicCardStyles};
	margin: 1rem 0px;
`;

export const StyledItemsWrapper = styled.div`
	width: 100%;
	max-width: 100%;
	height: fit-content;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	text-align: center;

	@media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
		height: 655px;
		display: grid;
		grid-template-columns: 1fr;

		${({ imagesCount }) =>
			imagesCount &&
			css`
				grid-template-columns: repeat(${imagesCount}, 1fr);
			`}
	}

	@media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
		height: 540px;
	}
`;

export const StyledFeature = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	flex-direction: column;
	margin-top: 7rem;

	> div:nth-child(2) {
		width: 100%;
		height: auto;
		display: flex;
		align-items: center;
		justify-content: flex-start;
		flex-direction: column;
	}
`;

export const StyledIcon = styled.div`
	padding: 1rem;
	height: initial;
	:hover {
		transform: scale(1.1);
		transition: transform 0.5s;
	}
`;
