// COPONENTS
import FirstSection from "./sections/FirstSection";
import SecondSection from "./sections/SecondSection";
import ThirdSection from "./sections/ThirdSection";

const HomePage = ({ mainGallery }) => (
  <>
    <FirstSection data={mainGallery?.galeriaGlowna} />
    <SecondSection data={mainGallery?.sekcjaDruga} />
    <ThirdSection data={mainGallery?.sekcjaTrzecia} />
  </>
);

export default HomePage;
