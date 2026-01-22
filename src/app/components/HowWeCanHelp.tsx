export default function HowICanHelp() {
  const services = [
    {
      title: "Refine",
      description: "I can fix, improve, and/or add features to your existing codebases."
    },
    {
      title: "Build",
      description: "I can design and launch new websites and systems from scratch."
    },
    {
      title: "Support",
      description: "I provide on-demand development power to help you quickly scale and move faster."
    }
  ];

  return (
    <section id="how-i-can-help" className="py-16 bg-base-two">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-contrast mb-4">How I Can Help</h2>
        <p className="text-lg text-contrast-two mb-12">I can help you build and scale software with direct communication, no agency overhead</p>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div key={index} className="bg-base p-8 rounded-lg shadow-md hover:shadow-lg transition border-t-4 border-aux-1">
              <h3 className="text-xl font-bold text-contrast mb-4">{service.title}</h3>
              <p className="text-contrast-two">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-lg font-semibold text-contrast mb-4">Sounds good? <a href="#contact" className="text-aux-2 hover:text-chocolate-plum underline">Get in touch to get started!</a></p>
        </div>
      </div>
    </section>
  );
}
