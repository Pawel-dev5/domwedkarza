import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';

const StyledFBWrapper = styled.div`
	margin: auto;
	max-width: 60rem;
	padding-bottom: 4rem;

	img.wp-smiley,
	img.emoji {
		display: inline !important;
		border: none !important;
		box-shadow: none !important;
		height: 1em !important;
		width: 1em !important;
		margin: 0 0.07em !important;
		vertical-align: -0.1em !important;
		background: none !important;
		padding: 0 !important;
	}

	.efbl-thumbnail-wrapper {
		* {
			overflow: visible;
		}
	}

	.efbl-profile-title-wrap {
		padding-bottom: 0.5rem;
		h2 {
			font-size: 1.25rem !important;
		}
	}

	i {
		width: 100%;
		height: 100%;
		font-size: 1.25rem;
	}

	.description,
	.efbl_link_text {
		padding-left: 50px;
	}

	.efbl-reacted-item {
		display: flex;
		flex-direction: row-reverse;
		align-items: center;
		gap: 0.5rem;
	}
	.efbl-thumbnail-col {
		* {
			cursor: unset;
		}
	}
`;

const createIcon = (name) => {
	let i = document.createElement('i');
	i.classList = name;
	return i;
};

const FacebookWall = ({ content }) => {
	useEffect(() => {
		if (typeof window !== 'undefined') {
			const like = document.getElementsByClassName('icon-esf-thumbs-o-up');
			const comment = document.getElementsByClassName('icon-esf-comment-o');
			const facebook = document.getElementsByClassName('icon-esf-facebook');
			const linkedIn = document.getElementsByClassName('icon-esf-linkedin');
			const twitter = document.getElementsByClassName('icon-esf-twitter');
			const overlay = document.getElementsByClassName('efbl-overlay');

			if (overlay) {
				Object.values(overlay).forEach((item) => {
					item?.parentNode?.removeChild(item);
				});
			}
			if (like) {
				Object.values(like).forEach((item) => {
					item?.parentNode?.appendChild(createIcon('fa-solid fa-thumbs-up'));
					item?.parentNode?.removeChild(item);
				});
			}
			if (comment) {
				Object.values(comment).forEach((item) => {
					item?.parentNode?.appendChild(createIcon('fa-solid fa-comment'));
					item?.parentNode?.removeChild(item);
				});
			}
			if (facebook) {
				Object.values(facebook).forEach((item) => {
					item?.parentNode?.appendChild(createIcon('fa-brands fa-square-facebook'));
					item?.parentNode?.removeChild(item);
				});
			}
			if (linkedIn) {
				Object.values(linkedIn).forEach((item) => {
					item?.parentNode?.appendChild(createIcon('fa-brands fa-linkedin'));
					item?.parentNode?.removeChild(item);
				});
			}
			if (twitter) {
				Object.values(twitter).forEach((item) => {
					item?.parentNode?.appendChild(createIcon('fa-brands fa-twitter'));
					item?.parentNode?.removeChild(item);
				});
			}
		}
	}, []);

	return <>{content && <StyledFBWrapper dangerouslySetInnerHTML={{ __html: content }} />}</>;
};
export default FacebookWall;
