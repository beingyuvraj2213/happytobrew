import './PortfolioGrid.css';

// Each row mirrors the reference layout's proportions via its own
// grid-template-columns (see PortfolioGrid.css). Swap `image` for a real
// asset path when you have one — the colored div is just a placeholder.
const ROWS = [
  {
    columns: '1fr 1fr 1fr',
    items: [
      { category: 'STONE X', title: 'Create Your Imprint on Time', variant: 'ink' },
      { category: 'APPLE', title: 'iPhone XR', variant: 'onyx' },
      { category: 'Coca Cola', title: 'MAAZA GOLD', variant: 'cream' },
    ],
  },
  {
    columns: '1fr 1fr 2fr',
    items: [
      { category: 'BREEZER', title: 'LIFE IN COLOUR', variant: 'berry' },
      { category: 'STONE X', title: 'Create Your Imprint on Time', variant: 'teal' },
      { category: 'Coca Cola', title: 'MAAZA', variant: 'amber' },
    ],
  },
  {
    columns: '2fr 1fr 1fr',
    items: [
      { category: 'STONE LAM', title: 'NATURE IS ABOVE ALL', variant: 'olive' },
      { category: 'APPLE', title: 'AIRPODS', variant: 'onyx' },
      { category: 'COCA COLA', title: 'MINUTE MAID', variant: 'paper' },
    ],
  },
  {
    columns: '1fr 1fr 2fr',
    items: [
      { category: 'COCA COLA', title: 'MINUTE MAID', variant: 'denim' },
      { category: 'ITC', title: 'WELCOME HOTEL', variant: 'blush' },
      { category: 'ITC', title: "ITC'S HOTEL GROUP", variant: 'maroon' },
    ],
  },
];

function Card({ category, title, variant }) {
  return (
    <article className="card">
      <div className={`card__media card__media--${variant}`}>
        <span className="card__media-label">{title}</span>
      </div>
      <p className="card__category">{category}</p>
      <h3 className="card__title">{title}</h3>
    </article>
  );
}

function PortfolioGrid() {
  return (
    <section className="portfolio" id="work">
      {ROWS.map((row, i) => (
        <div className="portfolio__row" style={{ gridTemplateColumns: row.columns }} key={i}>
          {row.items.map((item) => (
            <Card key={item.title + item.category} {...item} />
          ))}
        </div>
      ))}
    </section>
  );
}

export default PortfolioGrid;
