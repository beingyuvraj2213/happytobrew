import './Navbar.css';

const NAV_LINKS = ['Work', 'Expertise', 'About', 'Contact us'];

function Navbar() {
  return (
    <header className="navbar">
      <a href="#top" className="navbar__logo" aria-label="Home">
        <img src="/images/Logo1.png" alt="logo" width={230} height={60} />
      </a>

      <nav className="navbar__nav">
        <ul>
          {NAV_LINKS.map((link) => (
            <li key={link}>
              <a href={`#${link.toLowerCase().replace(/\s/g, '-')}`}>{link}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
