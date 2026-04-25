import dynamic from 'next/dynamic';
import Image from 'next/image';
import { SRLWrapper } from 'simple-react-lightbox';
import styled from 'styled-components';

// COMPONENTS
const FirstSection = dynamic(() => import('./sections/FirstSection'));
const SecondSection = dynamic(() => import('./sections/SecondSection'));
const ThirdSection = dynamic(() => import('./sections/ThirdSection'));
const Features = dynamic(() => import('./sections/Features'));
const Video = dynamic(() => import('./sections/Video'));

const HomePage = ({ mainData }) => (
	<>
		{mainData && (
			<>
				<FirstSection
					data={mainData?.galeriaglownastronaglowna}
					naglowek={mainData?.glownaNaglowek?.glownaNaglowek}
					naglowek2={mainData?.glownaNaglowek?.glownaNaglowek2}
				/>

				<SecondSection data={mainData?.sekcjaDruga} />

				<SRLWrapper>
					<ThirdSection data={mainData?.sekcjaTrzecia} />
				</SRLWrapper>

				<Features features={mainData?.features?.features} heading={mainData?.features?.featuresHeading} />

				<Video src={mainData?.glownaWideo?.wideo} />

				<StyledImageWrapper>
					<StyledKpoImageInner>
						<Image
							src="/assets/image.png"
							alt="KPO, Next Generation EU"
							width={633}
							height={894}
							layout="intrinsic"
						/>
					</StyledKpoImageInner>
				</StyledImageWrapper>
			</>
		)}
	</>
);

export const StyledImageWrapper = styled.div`
	width: 100%;
	max-width: 100%;
	margin: 2.5rem 0 4.5rem;
	padding: 0 1.5rem;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const StyledKpoImageInner = styled.div`
	width: 100%;
	max-width: 28rem;
	margin: 0 auto;

	@media (min-width: ${({ theme }) => theme.breakpoints.md}) {
		max-width: 34rem;
	}

	@media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
		max-width: 38rem;
	}
`;
export default HomePage;
