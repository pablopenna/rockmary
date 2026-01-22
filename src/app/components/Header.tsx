import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-aux-2 text-base py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logo and Title Section */}
        <div className="flex items-center gap-6 mb-8">
          <Image 
            src="/logov1_3.png" 
            alt="Rockmary Logo"
            width={80}
            height={80}
            className="rounded-lg"
          />
          <div>
            <h1 className="text-5xl font-bold text-contrast">Rockmary</h1>
            <p className="text-lg text-base-two font-light">software made simple</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex justify-between items-center">
          <ul className="hidden md:flex gap-8">
            <li><a href="#who-we-are" className="hover:text-base-two transition">Who We Are</a></li>
            <li><a href="#how-we-help" className="hover:text-base-two transition">How We Help</a></li>
            <li><a href="#principles" className="hover:text-base-two transition">Principles</a></li>
            <li><a href="#technologies" className="hover:text-base-two transition">Technologies</a></li>
            <li><a href="#contact" className="hover:text-base-two transition">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
