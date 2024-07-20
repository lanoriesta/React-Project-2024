import React from "react";
import { useEffect, useState } from "react";
import { ArrowIcon } from "../assets/arrow";

const Accordion = () => {
  const [JSONData, setJSONData] = useState([]);
  const [error, setError] = useState(null);
  const [selected, setSelected] = useState(null);
  const [multiData, setMultiData] = useState([]);
  const [multiselection, setMultiSelection] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/TestData.json");
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        setJSONData(data);
      } catch (error) {
        setError(error.message);
        console.error("Error fetching data", error);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div>Error:{error}</div>;
  }

  function handleSingleSelection(id) {
    setSelected(id === selected ? null : id);
  }

  function handleMultiSelection(id) {
    let cpyMulti = [...multiData];
    const findIndexOfCurrentID = cpyMulti.indexOf(id);
    if (findIndexOfCurrentID === -1) cpyMulti.push(id);
    else cpyMulti.splice(findIndexOfCurrentID, 1);

    setMultiData(cpyMulti);
  }
  return (
    <>
      <div className="Parent bg-myBlack text-white h-screen">
        <div className="container py-4">
          <h1 className="text-center">Accordion</h1>
          <button
            onClick={() => setMultiSelection((m) => (m = !multiselection))}
          >
            Multiple Selection is{" "}
            <span
              className={
                multiselection
                  ? "text-green-400 font-semibold"
                  : "text-red-400 font-semibold"
              }
            >
              {multiselection ? "On" : "Off"}
            </span>
          </button>
          {JSONData.map((item) => (
            <div
              className="my-6 p-4 bg-green-400 cursor-pointer text-black rounded-md"
              key={item.id}
              onClick={() =>
                multiselection
                  ? handleMultiSelection(item.id)
                  : handleSingleSelection(item.id)
              }
            >
              <div className="flex justify-between">
                <h2>{item.name}</h2>
                <div
                  className={
                    multiselection
                      ? multiData.indexOf(item.id) !== -1
                        ? "rotate-180 transition drop-shadow-md"
                        : "rotate-none transition drop-shadow-md"
                      : item.id === selected
                      ? "rotate-180 transition drop-shadow-md"
                      : "rotate-none transition drop-shadow-md"
                  }
                >
                  <ArrowIcon />
                </div>
              </div>
              {multiselection
                ? multiData.indexOf(item.id) !== -1 && (
                    <div className="transition py-4">
                      <p>{item.bio}</p>
                    </div>
                  )
                : item.id === selected && (
                    <div className="transition">
                      <p>{item.bio}</p>
                    </div>
                  )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Accordion;
