export default function Principles() {
  const principles = [
    {
      title: "Clients Above All",
      description: "Our success is measured by the value we create for our clients. We focus on understanding their needs and exceeding their expectations, ensuring they feel confident in their investment."
    },
    {
      title: "Results That Matter",
      description: "We don't just complete projects, we solve problems. Our team is dedicated to delivering effective, practical solutions that drive real impact, always on time."
    },
    {
      title: "Commitment to Quality",
      description: "Every project, big or small, deserves our best work. We hold ourselves to high standards, ensuring that every solution we deliver is reliable, efficient, and built to last."
    }
  ];

  return (
    <section id="principles" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Principles</h2>
        <p className="text-lg text-gray-700 mb-12">Our principles guide how we work, make decisions, and collaborate with clients. They reflect our commitment to integrity, purpose, and delivering real value in every project.</p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {principles.map((principle, index) => (
            <div key={index} className="border-l-4 border-blue-600 pl-6 py-4">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{principle.title}</h3>
              <p className="text-gray-700">{principle.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
