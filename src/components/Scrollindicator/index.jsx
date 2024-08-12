import React, { useEffect, useState } from "react";
import "./scroll.css";

const ScrollIndicator = ({ url }) => {
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const fetchData = async (getURL) => {
      try {
        const res = await fetch(getURL);
        const data = await res.json();
        console.log(data);

        if (data && data.products && data.products.length > 0) {
          setProductData(data.products);

          setLoading(false);
          console.log(productData);
        }
      } catch (error) {
        console.error("Failed to fetch data!", error);
        setLoading(false);
      }
    };

    fetchData(url);
  }, [url]);

  const hanldeScrollPercentage = () => {
    // console.log(
    //   document.body.scrollTop,
    //   document.documentElement.scrollTop,
    //   document.documentElement.scrollHeight,
    //   document.documentElement.clientHeight
    // );

    const lengthScrolled =
      document.body.scrollTop || document.documentElement.scrollTop;

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    setScrollPercentage((lengthScrolled / height) * 100);
  };

  useEffect(() => {
    window.addEventListener("scroll", hanldeScrollPercentage);

    return () => window.removeEventListener("scroll", () => []);
  }, []);

  console.log(scrollPercentage);

  return (
    <div className="Parent h-screen text-center">
      <div className="relative pt-28">
        <div className="top-container">
          <h1>Scroll Indicator</h1>
          <div className="scroll-progress-container">
            <div
              className="current-progress-bar"
              style={{ width: `${scrollPercentage}%` }}
            ></div>
          </div>
        </div>
        {loading ? (
          <h1>Loading......</h1>
        ) : (
          <>
            {productData.map((item, index) => (
              <p key={index}>{item.title}</p>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default ScrollIndicator;
