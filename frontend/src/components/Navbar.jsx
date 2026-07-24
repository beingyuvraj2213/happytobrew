import { Link } from 'react-router-dom';
import './Navbar.css';

const NAV_LINKS = [
  { label: 'Work', href: '/#work' },
  { label: 'Expertise', href: '/#expertise' },
  { label: 'About', href: '/about' },
  { label: 'Contact us', href: '/#contact-us' },
];

function Navbar() {
  return (
    <header className="navbar">
      <Link to="/" className="navbar__logo" aria-label="Home">
        <img src="/images/Logo1.png" alt="logo" width={230} height={60} />
      </Link>

      <nav className="navbar__nav">
        <ul>
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              {link.href.startsWith('/about') ? (
                <Link to="/about">{link.label}</Link>
              ) : (
                <a href={link.href}>{link.label}</a>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
