import Accordion from "./components/Accordion";
import ImageSlider from "./components/ImageSlider";
import LightDarkTheme from "./components/LightAndDarkTheme";
import LoadMoreBtn from "./components/LoadMoreBtn";
import QRCodeGenerator from "./components/QRCode/QRCode";
import RandomColorGenerator from "./components/RandomColorGenerator";
import ScrollIndicator from "./components/Scrollindicator";
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
      {/* <LightDarkTheme /> */}

      {/* Scroll Indicator */}
      <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} />
    </>
  );
}

export default App;
