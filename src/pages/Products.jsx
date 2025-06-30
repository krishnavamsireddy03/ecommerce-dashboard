import React from "react";

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: "₹2,999",
    stock: 25,
  },
  {
    id: 2,
    name: "Smartphone Case",
    price: "₹499",
    stock: 100,
  },
  {
    id: 3,
    name: "Bluetooth Speaker",
    price: "₹1,799",
    stock: 10,
  },
  {
    id: 4,
    name: "Fitness Band",
    price: "₹999",
    stock: 50,
  },
];

export default function Products() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">🛒 Product Inventory</h1>
      <table className="min-w-full border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="text-left p-2 border">ID</th>
            <th className="text-left p-2 border">Product Name</th>
            <th className="text-left p-2 border">Price</th>
            <th className="text-left p-2 border">Stock</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item) => (
            <tr key={item.id} className="border-t">
              <td className="p-2 border">{item.id}</td>
              <td className="p-2 border">{item.name}</td>
              <td className="p-2 border">{item.price}</td>
              <td className="p-2 border">{item.stock}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
