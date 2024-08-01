import React, { useEffect, useState } from "react";

const LoadMoreBtn = () => {
  const [productDatas, setProductDatas] = useState([]);
  const [loader, setLoader] = useState(true);
  const [count, setCount] = useState(0);
  const [isDisabledBtn, setIsDisabledBtn] = useState(false);

  useEffect(() => {
    let isMounted = true;

    async function fetchData() {
      try {
        // const skip = count * 20;
        const res = await fetch(
          `https://dummyjson.com/products?limit=20&skip=${
            count === 0 ? 0 : count * 20
          }`
        );
        const data = await res.json();
        if (isMounted) {
          if (data && data.products && data.products.length) {
            setProductDatas((prevData) => [...prevData, ...data.products]);
            setLoader(false);
          }
        }
        console.log(productDatas.length, count);
      } catch (error) {
        if (isMounted) {
          console.error("Error Occured", error);
          setLoader(false);
        }
      }
    }

    fetchData();
    return () => (isMounted = false);
  }, [count]);

  useEffect(() => {
    if (productDatas && productDatas.length === 194) setIsDisabledBtn(true);
  }, [productDatas]);

  const loadMore = () => {
    setCount((prevCount) => prevCount + 1);
    setLoader(true);
  };

  if (loader) {
    return (
      <div>
        <h3>Data is still loading......</h3>
      </div>
    );
  }

  return (
    <div>
      <div className="Parent h-screen text-center">
        <h1>Load More Button</h1>
        <div className="container ">
          <div className="container Product grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {productDatas && productDatas.length
              ? productDatas.map((item, index) => (
                  <div
                    key={index}
                    className=" border border-gray-500/25 shadow-md p-4"
                  >
                    <img src={item.thumbnail} alt={item.title} />
                    <h3>{item.title}</h3>
                  </div>
                ))
              : null}
          </div>

          <button
            className="p-2 px-6 m-5 bg-myBlack text-white rounded-md disabled:bg-gray-400/25"
            onClick={() => {
              loadMore();
            }}
            disabled={isDisabledBtn}
          >
            Load More
          </button>
          {isDisabledBtn && <h1>NO MORE items to show</h1>}
        </div>
      </div>
    </div>
  );
};

export default LoadMoreBtn;
