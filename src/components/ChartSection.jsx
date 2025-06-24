import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";

const data = [
  { name: "Jan", sales: 400 },
  { name: "Feb", sales: 600 },
  { name: "Mar", sales: 300 },
];

export default function ChartSection() {
  return (
    <div className="mt-6 bg-white p-4 rounded-xl shadow">
      <h2 className="text-lg font-semibold mb-2">Sales Overview</h2>
      <LineChart width={500} height={250} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="sales" stroke="#6366f1" />
      </LineChart>
    </div>
  );
}
