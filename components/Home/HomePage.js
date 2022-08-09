import dynamic from 'next/dynamic';
import { SRLWrapper } from 'simple-react-lightbox';

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
			</>
		)}
	</>
);

export default HomePage;
