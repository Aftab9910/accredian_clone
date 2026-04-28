export default function Card({ title, description }) {
  return (
    <div className="p-6 shadow-md rounded-lg bg-white hover:shadow-lg transition">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}
