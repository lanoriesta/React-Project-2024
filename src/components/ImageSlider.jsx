import React, { useEffect, useState } from "react";
import { ArrowLeft } from "../assets/arrowLeft";
import { IndicatorImage } from "../assets/indicator";

const ImageSlider = ({ url, limit = 5 }) => {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loader, setLoaders] = useState(true);
  const [errMssg, setErrMssg] = useState(null);

  const fetchImages = async () => {
    try {
      const res = await fetch(`${url}?page=1&limit=${limit}`);
      const data = await res.json();

      if (data) {
        setImages((i) => (i = data));
        setLoaders((l) => (l = false));
      }
    } catch (error) {
      console.error("Error occured!", error);
      setErrMssg((e) => (e = error));
      setLoaders(false);
    }
  };

  useEffect(() => {
    fetchImages();
  }, [url]);

  if (errMssg !== null) {
    return <div>Error Occured, {errMssg}</div>;
  }

  function handleOnClickNext() {
    if (currentSlide >= images.length - 1) {
      setCurrentSlide((c) => (c = 0));
    } else setCurrentSlide((c) => (c += 1));
  }

  function handleOnClickPrev() {
    if (currentSlide > 0) {
      setCurrentSlide((c) => (c -= 1));
    } else setCurrentSlide((c) => (c = images.length - 1));
  }

  return (
    <div className=" Parent h-screen text-center">
      <div className="container">
        <h1>ImageSlider</h1>
        <div className="flex flex-col items-center space-y-4">
          <div className="relative flex w-2/4 h-3/4 justify-center items-center">
            <ArrowLeft onClick={() => handleOnClickPrev()} />

            {loader ? (
              <h1>The data is loading....please wait</h1>
            ) : (
              images.map((image, index) => {
                if (currentSlide === index) {
                  return (
                    <img
                      key={index}
                      className="rounded-xl drop-shadow-x w-full h-full"
                      src={image.download_url}
                    />
                  );
                }
              })
            )}
            <ArrowLeft
              className="rotate-180 cursor-pointer fill-white transition delay-75 hover:fill-green-400 absolute right-5"
              onClick={() => handleOnClickNext()}
            />
            <div className="flex absolute bottom-10">
              {images && images.length
                ? images.map((img, index) => (
                    <IndicatorImage
                      fillColor={currentSlide === index}
                      key={img.id}
                      onClick={() => setCurrentSlide((c) => (c = index))}
                    />
                  ))
                : null}
            </div>
          </div>
          {/* <div className="flex space-x-1"></div> */}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
