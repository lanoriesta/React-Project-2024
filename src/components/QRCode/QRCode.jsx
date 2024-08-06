import React, { useState } from "react";
import QRCode from "react-qr-code";

const QRCodeGenerator = () => {
  const [QRValue, setQRCode] = useState("");
  const [inputValue, setInputValue] = useState("");

  function handleOnchangeQR() {
    setQRCode((q) => (q = inputValue));
    setInputValue("");
  }

  return (
    <div className="Parent h-screen">
      <div className="container text-center flex flex-col items-center">
        <h1>QRCode Generator</h1>
        <input
          className="block p-2 mx-3 w-3/4 border rounded-lg"
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
          type="text"
          name="qr-code"
          placeholder="Enter your value here"
        />
        <button
          disabled={inputValue && inputValue.trim() !== "" ? false : true}
          className="p-2 m-3 w-3/4 bg-slate-950 text-white rounded-lg disabled:bg-slate-600/25"
          onClick={handleOnchangeQR}
        >
          Generate QR
        </button>
        <div className="qr-container my-4">
          <QRCode
            id="qr-code-value"
            value={QRValue}
            size={300}
            bgColor="#fff"
          />
        </div>
      </div>
    </div>
  );
};

export default QRCodeGenerator;
