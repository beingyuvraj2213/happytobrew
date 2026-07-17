import './Footer.css';

const COLUMNS = [
  {
    heading: 'Careers',
    links: ['Job opportunities', 'Our people', 'Working at AKOA', 'Qualities we look for'],
  },
  {
    heading: 'Community',
    links: ['AKOA Insight', 'Future Lions', 'Perspectives', 'AKOA Companies'],
  },
  {
    heading: 'About',
    links: ['News', 'Sustainability', 'Privacy Policy', 'Cookie Policy'],
  },
];

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__columns">
        {COLUMNS.map((col) => (
          <div className="footer__column" key={col.heading}>
            <a href={`#${col.heading.toLowerCase()}`} className="footer__heading">
              {col.heading}
            </a>
            <ul>
              {col.links.map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(/\s/g, '-')}`}>{link}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
}

export default Footer;
