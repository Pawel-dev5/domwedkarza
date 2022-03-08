// COPONENTS
import FirstSection from "./sections/FirstSection";
import SecondSection from "./sections/SecondSection";

const HomePage = ({ mainGallery }) => {
  const gallery = Object.values(mainGallery?.galeriaGlowna);

  return (
    <>
      <FirstSection gallery={gallery} />
      <SecondSection data={mainGallery?.sekcjaDruga} />
    </>
  );
};

export default HomePage;
