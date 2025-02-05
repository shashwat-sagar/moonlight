import { Link } from 'react-router-dom';
import NavMenu from './NavMenu';

const pages = [
  { name: "Home", id: 1, path: "/" },
  { name: "About", id: 2, path: "/about" },
  { name: "Contact", id: 3, path: "/contact" },
  { name: "Services", id: 4, path: "/services" },
  { name: "Pricing", id: 5, path: "/pricing" },
  { name: "Gallery", id: 6, path: "/gallery" },
];
const Navbar = () => {
  return (
    <nav className='flex justify-between items-center p-8'>
      <span className="navbar-text self-center text-2xl font-semibold whitespace-nowrap">
          <span className="navbar-h1">C</span>atering
        </span>

      <ul className='hidden 
      sm:flex gap-4'>
        {pages.map((page) => (
          <Link key={page.id} to={page.path}>{page.name}</Link>
        ))}
      </ul>
      <NavMenu/>
    </nav>
  )
}

export default Navbar