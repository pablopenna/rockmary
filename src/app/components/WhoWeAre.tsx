export default function WhoWeAre() {
  return (
    <section id="who-we-are" className="py-16 bg-base">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-contrast mb-8">Who We Are</h2>
        <div className="space-y-6 text-contrast text-lg">
          <p>
            We are a small team of seasoned engineers with extensive corporate experience (5+ years), dedicated to leveraging our expertise to tackle your business challenges and deliver tailored software solutions. We are ideal for fully taking care of smaller projects or temporarily increasing head count for bigger projects.
          </p>
          <p>
            At Rockmary, we will do our best to understand your unique needs and providing innovative, efficient, and scalable services to help you achieve your goals.
          </p>
          <p className="mt-6">
            <span className="font-semibold">Want to learn more about us?</span>{' '}
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-aux-2 hover:text-chocolate-plum underline transition"
            >
              Connect with us on LinkedIn
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
