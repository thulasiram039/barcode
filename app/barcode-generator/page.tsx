"use client";

import { useState, useEffect } from "react";
import Barcode from "react-barcode";

export default function BarcodeGeneratorPage() {
  const [productId, setProductId] = useState("choco1");
  const [origin, setOrigin] = useState("");
  const [showBarcode, setShowBarcode] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setOrigin(window.location.origin);
    }
  }, []);

  // Barcode encodes a URL pointing to the scan page
  const barcodeData = origin ? `${origin}/scan/${productId}` : "";

  return (
    <div className="p-4 flex flex-col items-center mt-96">
      <h1 className="text-2xl font-bold mb-4">Generate Barcode for Product</h1>
<div className="flex gap-4 items-center">
      <select
        value={productId}
        onChange={(e) => {
          setProductId(e.target.value);
          setShowBarcode(false); // Hide barcode when product changes
        }}
        className="border p-2 mb-4"
      >
        <option value="choco1">Chocolate Pack</option>
        <option value="choco2">Nutty Chocolates</option>
        <option value="choco3">Fruit Chocolates</option>
      </select>
        
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
        onClick={() => setShowBarcode(true)}
        disabled={!barcodeData}
      >
        Generate
      </button>
</div>
      {showBarcode && barcodeData && (
        <Barcode value={barcodeData} format="CODE128" 
        className="w-[450px] h-[100px]"
        />
      )}
    </div>
  );
}
