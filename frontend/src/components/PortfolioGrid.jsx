import './PortfolioGrid.css';

const projects = [
  { category: 'STONE X', title: 'Create Your Imprint on Time', color: 'ink', wide: false },
  { category: 'APPLE', title: 'iPhone XR', color: 'onyx', wide: false },
  { category: 'COCA COLA', title: 'MAAZA GOLD', color: 'cream', wide: false },

  { category: 'BREEZER', title: 'LIFE IN COLOUR', color: 'berry', wide: false },
  { category: 'STONE X', title: 'Create Your Imprint on Time', color: 'teal', wide: false },
  { category: 'COCA COLA', title: 'MAAZA', color: 'amber', wide: true },

  { category: 'STONE LAM', title: 'NATURE IS ABOVE ALL', color: 'olive', wide: true },
  { category: 'APPLE', title: 'AIRPODS', color: 'onyx', wide: false },
  { category: 'COCA COLA', title: 'MINUTE MAID', color: 'paper', wide: false },

  { category: 'COCA COLA', title: 'MINUTE MAID', color: 'denim', wide: false },
  { category: 'ITC', title: 'WELCOME HOTEL', color: 'blush', wide: false },
  { category: 'ITC', title: "ITC'S HOTEL GROUP", color: 'maroon', wide: true },
];

function PortfolioGrid() {
  return (
    <div className="portfolio">
      {projects.map((project, index) => (
        <div key={index} className={`card ${project.wide ? 'wide' : ''}`}>
          <div className={`card-image ${project.color}`} />
          <p className="card-category">{project.category}</p>
          <p className="card-title">{project.title}</p>
        </div>
      ))}
    </div>
  );
}

export default PortfolioGrid;