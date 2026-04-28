export default function SectionWrapper({ children, bg = "bg-white" }) {
  return (
    <section className={`${bg} py-16 px-6`}>
      <div className="max-w-6xl mx-auto">{children}</div>
    </section>
  );
}
