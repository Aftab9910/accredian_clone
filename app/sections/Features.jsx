import Card from "@/components/Card";
import features from "@/data/features.json";

export default function Features() {
  return (
    <section className="py-16 text-center text-black">
      <h2 className="text-2xl font-bold mb-8">Features</h2>

      <div className="grid md:grid-cols-3 gap-6 px-6">
        {features.map((item, index) => (
          <Card key={index} title={item.title} description={item.description} />
        ))}
      </div>
    </section>
  );
}
