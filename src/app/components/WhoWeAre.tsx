export default function WhoWeAre() {
  return (
    <section id="who-am-i" className="py-16 bg-base">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-contrast mb-8">Who am I</h2>
        <div className="space-y-6 text-contrast text-lg">
          <p>
            My name is Pablo and I do freelancing through my company Rockmary. I am a software engineer with more than 8 years of corporate experience (5+ in big companies). I specialize in Web Applications although I have also worked in other areas (see the technologies section below).
          </p>
          <p>
            I will do my best to understand your unique needs and provide innovative, efficient, and scalable services to help you achieve your goals.
          </p>
          <p className="mt-6">
            <span className="font-semibold">Want to know more details about me?</span>{' '}
            <a 
              href="https://linkedin.com/in/pprdev/"
              target="_blank" 
              rel="noopener noreferrer"
              className="text-aux-2 hover:text-chocolate-plum underline transition"
            >
              Connect with me on LinkedIn
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
