import testimonials from "@/data/testimonials.json";

export default function Testimonials() {
  return (
    <section className="py-16 text-center text-black">
      <h2 className="text-2xl font-bold mb-8">Testimonials</h2>

      <div className="max-w-3xl mx-auto space-y-6">
        {testimonials.map((t, i) => (
          <div key={i} className="p-6 shadow rounded bg-white">
            <p className="mb-2">"{t.message}"</p>
            <h4 className="font-semibold">{t.name}</h4>

            {/* yaha change kiya */}
            <span className="text-sm">{t.role}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
