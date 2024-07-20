import React, { useEffect, useState } from "react";

const RandomColorGenerator = () => {
  const [typeOfColor, setTypeOfColor] = useState("");
  const [color, setColor] = useState("");

  function randomNumberUtility(length) {
    return Math.floor(Math.random() * length);
  }

  function handleGenerateRandomColor(type) {
    if (type === "rgb") {
      const red = randomNumberUtility(256);
      const green = randomNumberUtility(256);
      const blue = randomNumberUtility(256);

      setColor(`rgb(${red},${green},${blue})`);
    } else if (type === "hex") {
      const char = "abcdef0123456789";
      let result = "";

      for (let i = 0; i < 6; i++) {
        result += char.charAt(randomNumberUtility(char.length));
      }

      setColor(`#${result}`);
    }
  }

  function handleTypeColor(type) {
    setColor("");
    setTypeOfColor((t) => (t = type));
  }

  return (
    <>
      <div
        className="Parent py-6 h-screen text-center"
        style={{ background: color }}
      >
        <h1>Random Color Generator</h1>
        <div className="container flex space-x-4">
          <button onClick={() => handleTypeColor("hex")}>
            Create HEX Color
          </button>
          <button onClick={() => handleTypeColor("rgb")}>
            Create RGB Color
          </button>
        </div>
        <div className="container flex flex-col space-y-4">
          {!typeOfColor ? (
            <h1 className="text-4xl">Choose type of color</h1>
          ) : (
            <>
              <h1 className="text-4xl">{typeOfColor.toUpperCase()}</h1>
              <button onClick={() => handleGenerateRandomColor(typeOfColor)}>
                Generate Random Colors
              </button>
              <h1 className=" text-9xl">{color}</h1>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default RandomColorGenerator;
