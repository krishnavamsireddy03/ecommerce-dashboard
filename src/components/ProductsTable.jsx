export default function ProductsTable() {
  const products = [
    { name: "iPhone 15", stock: 20, price: "₹75,000" },
    { name: "Samsung S22", stock: 15, price: "₹65,000" },
  ];

  return (
    <div className="mt-6 bg-white p-4 rounded-xl shadow">
      <h2 className="text-lg font-semibold mb-2">Product List</h2>
      <table className="w-full text-left">
        <thead>
          <tr>
            <th>Name</th>
            <th>Stock</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p, i) => (
            <tr key={i}>
              <td>{p.name}</td>
              <td>{p.stock}</td>
              <td>{p.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
