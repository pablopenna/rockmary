export default function Header() {
  return (
    <header className="bg-aux-2 text-base">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="text-3xl font-bold">Rockmary</div>
        <ul className="hidden md:flex gap-8">
          <li><a href="#who-we-are" className="hover:text-base-two transition">Who We Are</a></li>
          <li><a href="#how-we-help" className="hover:text-base-two transition">How We Help</a></li>
          <li><a href="#principles" className="hover:text-base-two transition">Principles</a></li>
          <li><a href="#technologies" className="hover:text-base-two transition">Technologies</a></li>
          <li><a href="#contact" className="hover:text-base-two transition">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}
