import { useEffect, useState } from 'react';
import { useInView } from 'react-hook-inview';

// ASSETS
import Image404 from '../../../assets/404.png';

// STYLES
import { StyledCustomWrapper, StyledImageWrapper, StyledTextWrapper, StyledHeader, StyledDesc, StyledLink } from './Styles';

const Custom404 = () => {
	const [visible, setVisible] = useState(false);

	const [ref, isVisible] = useInView({
		threshold: 1,
	});

	useEffect(() => {
		if (isVisible) {
			setVisible(true);
		}
	}, [isVisible]);

	return (
		<StyledCustomWrapper>
			<StyledTextWrapper>
				<StyledHeader ref={ref} visible={visible}>
					<a as="h1">
						Cześć,
						<br />
						miło Cię widzieć
					</a>
				</StyledHeader>
				<StyledDesc>
					Niestety trafiłeś na miejsce bez połączenia, co oznacza, że strona, której szukasz, nie istnieje.
				</StyledDesc>

				<span>Szukasz, którejś z naszych usług? Przejdź na:</span>

				<ul>
					<li>
						<a href="/oferta">Oferta</a>
					</li>
					<li>
						<a href="/o-nas">O nas</a>
					</li>
					<li>
						<a href="/kontakt">Kontakt</a>
					</li>
				</ul>

				<span>Lub wróć na stronę główną:</span>

				<StyledLink href="/">Przenieś mnie na stronę główną</StyledLink>
			</StyledTextWrapper>

			<StyledImageWrapper>
				<img src={Image404.src} alt="404 page" />
			</StyledImageWrapper>
		</StyledCustomWrapper>
	);
};

export default Custom404;
