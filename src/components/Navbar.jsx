import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-green-500 text-white p-4 fixed top-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">Conscious Consumption</Link>
        <div className="space-x-4 flex">
          <Link
            to="/tips"
            className="hover:scale-105 transform transition-transform duration-200"
          >
            Tips
          </Link>
          <Link
            to="/global-warming"
            className="hover:scale-105 transform transition-transform duration-200"
          >
            Global Warming
          </Link>
          <Link
            to="/gallery"
            className="hover:scale-105 transform transition-transform duration-200"
          >
            Gallery
          </Link>
          <Link
            to="/contact"
            className="hover:scale-105 transform transition-transform duration-200"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;