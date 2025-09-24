import { useParams } from "next/navigation";
import { products } from "../../data/products";

export default function ScanPage() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  if (!product) return <p className="p-4">Product not found.</p>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">{product.name}</h1>
      <h2 className="text-lg font-semibold mb-2">Select a Variant:</h2>
      <ul className="space-y-2">
        {product.variants.map((variant) => (
          <li key={variant}>
            <button className="border px-4 py-2 rounded hover:bg-gray-200">
              {variant}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
