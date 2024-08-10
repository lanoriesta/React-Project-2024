import Accordion from "./components/Accordion";
import ImageSlider from "./components/ImageSlider";
import LightDarkTheme from "./components/LightAndDarkTheme";
import LoadMoreBtn from "./components/LoadMoreBtn";
import QRCodeGenerator from "./components/QRCode/QRCode";
import RandomColorGenerator from "./components/RandomColorGenerator";
import StarRating from "./components/StarRating";
import TreeviewMenu from "./components/TreeView";

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
      {/* <ImageSlider url={"https://picsum.photos/v2/list"} limit={10} /> */}

      {/* Load More btn */}
      {/* <LoadMoreBtn /> */}

      {/* Tree View Menu */}
      {/* <TreeviewMenu /> */}

      {/* QR CODE Generator */}
      {/* <QRCodeGenerator /> */}

      {/* Light & Dark Theme */}
      <LightDarkTheme />
    </>
  );
}

export default App;
