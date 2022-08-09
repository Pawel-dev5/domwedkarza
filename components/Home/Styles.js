import styled from 'styled-components';

export const StyledCarouselWrapper = styled.div`
	height: 800px;
	width: 100%;
	position: absolute;

	.container-with-dots {
		* {
			min-height: 800px;
		}
		img {
			min-height: 800px !important;
			object-fit: cover;
		}
	}
`;

export const StyledMainOverlay = styled.div`
	position: relative;
	width: 100%;
	min-height: 800px;

	display: flex;
	align-items: center;
	justify-content: center;
	text-align: center;
	flex-direction: column;
`;

export const StyledOverlay = styled.div`
	width: 100%;
	height: 100%;
	min-height: 800px;

	position: absolute;

	${({ theme }) => theme.overlay}
`;

export const StyledFirstSectionWrapper = styled.div`
	@media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
		margin-top: 40px;
	}
`;
