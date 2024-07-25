import Accordion from "./components/Accordion";
import ImageSlider from "./components/ImageSlider";
import RandomColorGenerator from "./components/RandomColorGenerator";
import StarRating from "./components/StarRating";

function App() {
  return (
    <>
      {/* Accordion Component */}
      {/* <Accordion /> */}

      {/* Random Color Component */}
      {/* <RandomColorGenerator /> */}

      {/* Star Rating */}
      {/* <StarRating numberOfStar={10} /> */}

      {/* Image Slider */}
      <ImageSlider url={"https://picsum.photos/v2/list"} limit={10} />
    </>
  );
}

export default App;
