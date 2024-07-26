import Highlights from "../widgets/highlights/Highlights";
import Popular from "../widgets/popular/Popular";
import AnimeSlider from "../widgets/slider/AnimeSlider";
import Videos from "../widgets/tiser-videos/Videos";

const MainPage = () => {
  return (
    <>
      <Highlights />
      <AnimeSlider />
      <Popular />
      <Videos />
    </>
  );
};

export default MainPage;
