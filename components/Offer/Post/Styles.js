import styled from 'styled-components';

// POST PREVIEW
export const StyledPostPreviewWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	text-align: left;
	-webkit-box-align: center;
	-webkit-box-pack: center;
	margin: 2rem auto;

	@media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
		width: 1200px;
	}

	p {
		cursor: pointer;
		overflow: hidden;
	}
`;

export const StyledPostPrevInfo = styled.div`
	min-height: 10rem;

	> div {
		display: flex;
		align-items: left;
		justify-content: space-around;
		min-height: 10rem;
		flex-flow: column wrap;
		gap: 0.5rem;
	}
`;

export const StyledCoverImg = styled.div`
	cursor: pointer;
	position: relative;
	width: 100%;
	height: 100%;
	min-height: 20rem;
	max-width: 30rem;
	${({ theme }) => theme.shadow};

	@media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
		min-width: 30rem;
	}

	:hover {
		transform: scale(1.01);
	}
	> * {
		object-fit: cover;
		width: 100%;
		height: 100%;
	}
`;
