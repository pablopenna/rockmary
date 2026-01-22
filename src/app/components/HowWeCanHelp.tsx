export default function HowWeCanHelp() {
  const services = [
    {
      title: "Enhance existing projects",
      description: "We can seamlessly integrate into your current codebase to fix bugs, implement new features, or improve performance."
    },
    {
      title: "Kickstart New Initiatives",
      description: "From building a new website to setting up the initial architecture for a larger system, we help you get new projects off the ground quickly and effectively."
    },
    {
      title: "Scale Your Team",
      description: "Need to temporarily boost your development capacity? We seamlessly integrate with your existing team to accelerate progress without the overhead of long-term hiring."
    }
  ];

  return (
    <section id="how-we-help" className="py-16 bg-base-two">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-contrast mb-4">How We Can Help</h2>
        <p className="text-lg text-contrast-two mb-12">At Rockmary, we offer flexible software development services to meet your unique needs:</p>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div key={index} className="bg-base p-8 rounded-lg shadow-md hover:shadow-lg transition border-t-4 border-aux-1">
              <h3 className="text-xl font-bold text-contrast mb-4">{service.title}</h3>
              <p className="text-contrast-two">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-lg font-semibold text-contrast mb-4">Sounds good to you? <a href="#contact" className="text-aux-2 hover:text-chocolate-plum underline">Contact us to get started!</a></p>
        </div>
      </div>
    </section>
  );
}
