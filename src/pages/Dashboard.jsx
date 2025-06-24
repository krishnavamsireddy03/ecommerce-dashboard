import StatCard from "../components/StatCard";
import ChartSection from "../components/ChartSection";
import ProductsTable from "../components/ProductsTable";

export default function Dashboard() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className="grid grid-cols-3 gap-4">
        <StatCard title="Total Sales" value="₹1,20,000" />
        <StatCard title="Orders" value="325" />
        <StatCard title="Customers" value="178" />
      </div>
      <ChartSection />
      <ProductsTable />
    </div>
  );
}
