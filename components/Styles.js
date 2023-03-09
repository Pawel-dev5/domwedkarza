import styled from 'styled-components';

export const StyledFormWrapper = styled.div`
	width: 100%;
	color: black;
	text-align: left;
`;

export const StyledForm = styled.form`
	display: flex;
	align-items: flex-start;
	justify-content: center;
	gap: 0.5rem;
	flex-flow: column nowrap;
`;

export const StyledInput = styled.input`
	width: 100%;
	max-width: 100%;
	color: #626262;
	background-color: rgba(235, 235, 235, 1);
	padding: 10px;
	outline: none;
	margin: 0;
	margin-bottom: 0.3rem;
	display: block;
	font-size: 14px;
	border-width: 1px;
	border-color: #ebebeb;
	border-style: solid;
	border-radius: 0;
	box-sizing: border-box;
	-webkit-appearance: none;

	box-shadow: inset 0 0 2px 2px rgb(0 0 0 / 2%);
`;

export const StyledTextarea = styled.textarea`
	min-height: 8rem;
	line-height: 20px;
	padding: 10px;
	outline: none;
	margin: 0;
	width: 100%;
	max-width: 100%;
	display: block;
	margin-bottom: 0.9rem;
	font-size: 14px;
	border-width: 1px;
	border-style: solid;
	border-radius: 0;
	box-sizing: border-box;
	-webkit-appearance: none;

	box-shadow: inset 0 0 2px 2px rgb(0 0 0 / 2%);

	color: #626262;
	background-color: rgba(235, 235, 235, 1);
	border-color: #ebebeb;
`;

export const StyledFormContainer = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: space-around;
	flex-flow: column nowrap;
	text-align: center;
	margin: 2.5rem auto;
	color: ${({ theme }) => theme.black};
	width: 100%;
	max-width: 1220px;
	padding: 1rem 2rem;

	@media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
		flex-flow: row nowrap;
		> div {
			width: 50%;
		}
	}
`;

export const StylesGalleryGrid = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;

	.wp-block-gallery {
		display: grid;
		grid-template-columns: repeat(1, 1fr);
		height: 100%;
		max-width: 100%;
		margin-bottom: 3rem;

		@media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			grid-template-columns: repeat(2, 1fr);
		}

		@media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
			width: 100%;
			grid-template-columns: repeat(3, 1fr);
		}

		.wp-block-image {
			margin: 1rem;
			height: 400px;
			width: 400px;

			> img {
				height: 100%;
				width: 100%;
				object-fit: cover;
				cursor: pointer;
			}
			:hover {
				transform: scale(1.05);
				transition: transform 0.5s;
			}
		}
	}

	span {
		margin: 1rem !important;
		min-height: 20rem;
	}
`;

export const StyledAboutWrapper = styled.div`
	width: 80%;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	margin: auto;
	row-gap: 4rem;
	margin-bottom: 3rem;

	li {
		list-style: disc outside none;
		margin-left: 1em;
		overflow: visible;
	}

	ul {
		margin: 1em;
		overflow: visible;
	}
`;

export const StyledSectionWrapper = styled.div`
	width: 100%;
	height: 100%;
	min-height: 550px;
	padding: 1rem;
	margin-bottom: 1rem;

	img {
		min-height: 500px !important;
		object-fit: contain;
	}

	display: flex;
	align-items: flex-start;
	justify-content: center;
	flex-direction: column;
	@media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
		flex-direction: row;
	}
`;

export const StyledListWrapper = styled.div`
	display: flex;
	align-items: flex-start;
	height: 100%;
	justify-content: flex-start;
	text-align: left;
	flex-direction: column;
	max-width: 500px;
	margin-bottom: 4rem;

	> div > ul > li {
		padding-bottom: 10px;
	}

	@media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
		margin-right: 5rem;
		margin-bottom: 0;
	}
`;

export const StyledImageWrapper = styled.div`
	position: relative;
	width: 100%;
	min-width: 500px;
	max-width: 800px;
	height: 500px;
`;

export const StyledOtherResWrapper = styled.div`
	position: relative;
	display: block;
	align-items: center;
	justify-content: center;
	margin: auto;
	cursor: pointer;

	height: 100%;
	min-height: 400px;
	span {
		min-height: 400px;
		img {
			object-fit: cover;
			min-height: 400px;
		}
	}
	width: 100%;

	@media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
		min-width: 1200px;
	}
`;

export const StyledIframeWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;

	width: 100%;
	height: 100%;
	margin-bottom: 4rem;
`;
