import "./PortfolioGrid.css";

const projects = [
  {
    category: "ITC",
    title: "WELCOME HOTEL",
    color: "ink",
    wide: false,
    image:"/images/ITC1.avif"
  },
  { category: "COCA COLA", title: "Minute Maid", color: "onyx", wide: false, image:"/images/MinuteMaid.avif" },
  {
    category: "COCA COLA",
    title: "MAAZA",
    color: "amber",
    image: "/images/Maaza.avif",
    wide: false,
  },
  { category: "COCA COLA", title: "MAAZA GOLD", color: "cream", wide: false },

  { category: "BREEZER", title: "LIFE IN COLOUR", color: "berry", wide: false },
  {
    category: "STONE X",
    title: "Create Your Imprint on Time",
    color: "teal",
    wide: false,
  },
  
  {
    category: "APPLE",
    title: "IPAD",
    color: "olive",
    wide: true,
    image:"/images/Apple.avif"
  },
  { category: "APPLE", title: "AIRPODS", color: "onyx", wide: true },
  { category: "COCA COLA", title: "MINUTE MAID", color: "paper", wide: false },

  { category: "COCA COLA", title: "MINUTE MAID", color: "denim", wide: false },
  { category: "ITC", title: "WELCOME HOTEL", color: "blush", wide: false },
  { category: "ITC", title: "ITC'S HOTEL GROUP",image: "/images/StoneX.gif", color: "maroon", wide: true },
];

function PortfolioGrid() {
  return (
    <div className="portfolio">
      {projects.map((project, index) => (
        <div key={index} className={`card ${project.wide ? "wide" : ""}`}>
          <div
            className={`card-image ${!project.image ? project.color : ""}`}
            style={
              project.image
                ? {
                    backgroundImage: `url(${project.image})`,
                    // backgroundSize: "contain",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "100% 100%",
                  }
                : {}
            }
          />
          <p className="card-category">{project.category}</p>
          <p className="card-title">{project.title}</p>
        </div>
      ))}
    </div>
  );
}

export default PortfolioGrid;
