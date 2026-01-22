'use client';

export default function Pricing() {
  

  return (
    <section id="pricing" className="py-16 bg-base">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-contrast mb-4">Pricing</h2>
        <p className="text-lg text-contrast-two mb-12 leading-relaxed">
          My default rate is <span className="font-semibold text-contrast">$30 USD per hour</span> but it can vary per project depending on complexity.
        </p>

        <h3 className="text-2xl font-bold text-contrast mb-4">What's Included</h3>
        <div className="mt-12 bg-base-two p-8 rounded-lg border-l-4 border-aux-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-contrast mb-2">Quality Deliverables</h4>
              <p className="text-contrast-two">Comprehensive testing, code reviews, metrics emission and quality standards throughout development.</p>
            </div>
            <div>
              <h4 className="font-semibold text-contrast mb-2">Transparent Communication</h4>
              <p className="text-contrast-two">Regular updates and open collaboration throughout the project.</p>
            </div>
            <div>
              <h4 className="font-semibold text-contrast mb-2">Post-Launch Support</h4>
              <p className="text-contrast-two">Bug fixes, optimizations, and feature enhancements after deployment.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
