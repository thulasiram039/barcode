"use client";

import { useState, useEffect } from "react";
import Barcode from "react-barcode";

export default function BarcodeGeneratorPage() {
  const [productId, setProductId] = useState("choco1");
  const [origin, setOrigin] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setOrigin(window.location.origin);
    }
  }, []);

  // Barcode encodes a URL pointing to the scan page
  const barcodeData = origin ? `${origin}/scan/${productId}` : "";

  return (
    <div className="p-4 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">Generate Barcode for Product</h1>

      <select
        value={productId}
        onChange={(e) => setProductId(e.target.value)}
        className="border p-2 mb-4"
      >
        <option value="choco1">Chocolate Pack</option>
        <option value="choco2">Nutty Chocolates</option>
      </select>

      {barcodeData && (
        <Barcode value={barcodeData} format="CODE128" width={2} height={100} />
      )}
    </div>
  );
}
