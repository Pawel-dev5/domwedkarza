// COPONENTS
import FirstSection from "./sections/FirstSection";
import SecondSection from "./sections/SecondSection";
import ThirdSection from "./sections/ThirdSection";
import Features from "./sections/Features";
import Video from "./sections/video";

const HomePage = ({ mainData }) => (
  <>
    <FirstSection
      data={mainData?.galeriaGlowna}
      naglowek={mainData?.glownaNaglowek?.glownaNaglowek}
    />
    <SecondSection data={mainData?.sekcjaDruga} />
    <ThirdSection data={mainData?.sekcjaTrzecia} />
    <Features features={mainData?.features?.features} />
    <Video src={mainData?.glownaWideo?.wideo} />
  </>
);

export default HomePage;
