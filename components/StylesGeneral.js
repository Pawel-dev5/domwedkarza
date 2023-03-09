import styled, { css } from 'styled-components';

// GENERAL
export const StyledContainer = styled.div`
	width: 100%;
	margin: auto;
`;

export const StyledText = styled.span`
	font-size: 1rem;
	padding: 0.5rem;
	color: ${({ theme }) => theme.white};

	${({ h1 }) =>
		h1 &&
		css`
			font-size: 2rem;
			line-height: 2.4rem;
			padding: 0;
			padding-right: 0.5rem 0;
			padding-bottom: 0.5rem;
		`}

	${({ featureHeader }) =>
		featureHeader &&
		css`
			font-size: 1.5rem;
		`}
			
	${({ h2 }) =>
		h2 &&
		css`
			font-size: 1.25rem;
		`}
			
	${({ h3 }) =>
		h3 &&
		css`
			font-size: 1rem;
			line-height: 1.5rem;
		`}

	${({ h5 }) =>
		h5 &&
		css`
			font-size: 0.9rem;
			line-height: 1.3rem;
		`}

    ${({ h6 }) =>
		h6 &&
		css`
			font-size: 0.7rem;
		`}

    ${({ black }) =>
		black &&
		css`
			color: ${({ theme }) => theme.black};
		`}

    ${({ grey }) =>
		grey &&
		css`
			color: ${({ theme }) => theme.grey700};
		`}

    ${({ bold }) =>
		bold &&
		css`
			font-weight: ${({ theme }) => theme.bold};
		`}

    ${({ semiBold }) =>
		semiBold &&
		css`
			font-weight: ${({ theme }) => theme.semiBold};
		`}

    ${({ avatarName }) =>
		avatarName &&
		css`
			margin-left: 1rem;
		`}

    ${({ pointer }) =>
		pointer &&
		css`
			cursor: pointer;
		`}

    ${({ center }) =>
		center &&
		css`
			text-align: center;
		`};

	${({ footerAdres }) =>
		footerAdres &&
		css`
			width: 55%;
		`};

	${({ main }) =>
		main &&
		css`
			z-index: 9;
			padding: 10px 20px;
			@media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
				padding: 0;
			}
		`};

	${({ width }) =>
		width &&
		css`
			width: ${width};
		`}

	${({ lh }) =>
		lh &&
		css`
			line-height: ${lh};
		`}
 
 	${({ padding }) =>
		padding &&
		css`
			padding: ${padding};
		`}
 	
	${({ paddingdesktop }) =>
		paddingdesktop &&
		css`
			@media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
				padding: ${paddingdesktop};
			}
		`}
 
 	${({ textAlign }) =>
		textAlign &&
		css`
			text-align: ${textAlign};
		`}

    ${({ formStyle }) =>
		formStyle &&
		css`
			font-size: 1.5rem;
			padding: 0;
			padding-bottom: 0.5rem;
		`}
   

    ${({ footer }) =>
		footer &&
		css`
			width: 58%;
			color: ${({ theme }) => theme.black};
		`}

    ${({ hover }) =>
		hover &&
		css`
			:hover {
				cursor: pointer;
				transform: scale(1.05);
				transition: transform 0.5s ease 0s;
			}
		`}
`;

export const StyledWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-flow: column nowrap;
	text-align: center;
	margin: 2.5rem auto;

	${({ hero }) =>
		hero &&
		css`
			margin: 3rem 0.5rem;
			margin-top: 1.5rem;
			min-height: 5.5rem;
		`}

	${({ offer }) =>
		offer &&
		css`
			width: 100%;

			@media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
				width: 75%;
				margin: auto;
			}
		`}

  ${({ avatar }) =>
		avatar &&
		css`
			margin: 0;
			margin-top: 1rem;
			flex-direction: row;
		`}

  ${({ end }) =>
		end &&
		css`
			justify-content: flex-end;
		`}

  ${({ between }) =>
		between &&
		css`
			justify-content: space-between;
		`}

  ${({ width }) =>
		width &&
		css`
			width: ${width};
		`}

  ${({ noMargin }) =>
		noMargin &&
		css`
			margin: 0;
		`}
 
    ${({ row }) =>
		row &&
		css`
			flex-direction: row;
		`}
    
    ${({ column }) =>
		column &&
		css`
			flex-direction: column;
		`}
   
   ${({ wrap }) =>
		wrap &&
		css`
			flex-wrap: wrap;
		`}
    
    ${({ start }) =>
		start &&
		css`
			align-items: flex-start;
			text-align: left;
			justify-content: space-between;
			min-height: 10.5rem;
		`}

    .rounded {
		border-radius: 50%;
	}

	@media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
		flex-direction: row;
		${({ column }) =>
			column &&
			css`
				flex-direction: column;
			`}
	}
`;

export const StyledLogoWrapper = styled.div`
	position: relative;
	width: 9rem;
	height: 6rem;
	cursor: pointer;

	@media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
		width: 9rem;
		height: 6rem;
	}

	${({ footer }) =>
		footer &&
		css`
			height: 10.5rem;
			width: 100%;
			@media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
				width: 16.5rem;
				height: 8.5rem;
			}
		`}

	${({ gallery }) =>
		gallery &&
		css`
			width: 20.5rem;
			height: 30.5rem;

			@media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
				width: 36.5rem;
				height: 26.5rem;
			}
		`}
`;

export const StyledButton = styled.button`
	cursor: pointer;
	padding: 0.6rem 1.25rem;
	background-color: ${({ theme }) => theme.black};
	color: ${({ theme }) => theme.white};
	border: none;
	margin: 2rem;

	:hover {
		background-color: ${({ theme }) => theme.transparentize({ amount: 0.2, color: theme.black })};
	}

	${({ burger }) =>
		burger &&
		css`
			padding: 0;
			margin: 0;
			margin-top: -50px;
			margin-right: 20px;
		`}

	${({ customMargin }) =>
		customMargin &&
		css`
			margin: ${customMargin};
		`}
`;

// BLOG
export const StyledBlogTitle = styled.span`
	font-size: 5rem;
	font-weight: ${({ theme }) => theme.bold};
	padding: 1rem;

	${({ subTitle }) =>
		subTitle &&
		css`
			font-size: 1.3rem;
			font-weight: ${({ theme }) => theme.light};
		`}

	@media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
		padding: 0;

		${({ subTitle }) =>
			subTitle &&
			css`
				padding: 0;
			`}
	}
`;

export const StyledSubMenu = styled.a`
	text-decoration: none;
	color: ${({ theme }) => theme.white};
	padding: 0 0.8rem;
	font-size: 0.85rem;
	line-height: 1.5rem;

	:hover {
		text-decoration: underline;
		color: ${({ theme }) => theme.darken({ amount: 0.2, color: theme.white })};
	}
	${({ footer }) =>
		footer &&
		css`
			padding: 0;
		`}
`;
