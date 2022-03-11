import dynamic from "next/dynamic";

// COMPONENTS
const FirstSection = dynamic(() => import("./sections/FirstSection"));
const SecondSection = dynamic(() => import("./sections/SecondSection"));
const ThirdSection = dynamic(() => import("./sections/ThirdSection"));
const Features = dynamic(() => import("./sections/Features"));
const Video = dynamic(() => import("./sections/Video"));

const HomePage = ({ mainData }) => (
  <>
    <FirstSection
      data={mainData?.galeriaGlowna}
      naglowek={mainData?.glownaNaglowek?.glownaNaglowek}
    />
    <SecondSection data={mainData?.sekcjaDruga} />
    <ThirdSection data={mainData?.sekcjaTrzecia} />
    <Features
      features={mainData?.features?.features}
      heading={mainData?.features?.featuresHeading}
    />
    <Video src={mainData?.glownaWideo?.wideo} />
  </>
);

export default HomePage;
