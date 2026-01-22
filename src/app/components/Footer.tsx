export default function Footer() {
  return (
    <footer className="bg-aux-3 text-base py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Rockmary</h3>
            <p className="text-base-two">
              Seasoned engineers delivering tailored software solutions.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-base-two">
              <li><a href="#who-am-i" className="hover:text-base transition">Who We Are</a></li>
              <li><a href="#how-i-can-help" className="hover:text-base transition">How We Help</a></li>
              <li><a href="#principles" className="hover:text-base transition">Our Principles</a></li>
              <li><a href="#technologies" className="hover:text-base transition">Technologies</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <p className="text-base-two mb-2">
              <a href="mailto:contact@rockmary.com" className="hover:text-base transition">
                contact@rockmary.com
              </a>
            </p>
            <p className="text-base-two text-sm">Available for new projects and team augmentation</p>
          </div>
        </div>
        <div className="border-t border-contrast-three pt-8 text-center text-base-two">
          <p>&copy; 2024 Rockmary. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
