import benefits from "@/data/benefits.json";

export default function Benefits() {
  return (
    <section className="py-16 bg-gray-50 text-center text-black">
      <h2 className="text-2xl font-bold mb-10">Benefits</h2>

      <div className="grid md:grid-cols-2 gap-6 px-6 max-w-5xl mx-auto">
        {benefits.map((item, index) => (
          <div
            key={index}
            className="p-6 bg-white shadow rounded hover:shadow-lg transition"
          >
            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>

            {/* yaha change kiya */}
            <p className="text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
