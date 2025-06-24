export default function StatCard({ title, value }) {
  return (
    <div className="bg-white rounded-xl shadow p-4">
      <h3 className="text-gray-500 text-sm">{title}</h3>
      <p className="text-xl font-bold">{value}</p>
    </div>
  );
}
