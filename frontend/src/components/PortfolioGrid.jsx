import Reveal from "./Reveal";
import "./PortfolioGrid.css";

const projects = [
  {
    category: "COCA COLA",
    title: "MAAZA",
    color: "amber",
    wide: true,
    image: "/images/Maaza.avif",
  },
  {
    category: "ITC",
    title: "WELCOME HOTEL",
    color: "ink",
    wide: false,
    image: "/images/ITC1.avif",
  },
  {
    category: "ITC",
    title: "WELCOME HOTEL",
    color: "paper",
    wide: false,
    image: "/images/ITC2.avif",
  },
  {
    category: "COCA COLA",
    title: "MINUTE MAID",
    color: "onyx",
    wide: false,
    image: "/images/MinuteMaid.avif",
  },
  {
    category: "APPLE",
    title: "AIRPODS",
    color: "onyx",
    wide: false,
    image: "/images/Apple2.avif",
  },
  {
    category: "APPLE",
    title: "IPAD",
    color: "olive",
    wide: true,
    image: "/images/Apple.avif",
  },
  {
    category: "STONE X",
    title: "Create Your Imprint on Time",
    color: "teal",
    wide: true,
    image: "/images/StoneX.gif",
  },
  {
    category: "COCA COLA",
    title: "MAAZA GOLD",
    color: "cream",
    wide: false,
  },
  {
    category: "BREEZER",
    title: "LIFE IN COLOUR",
    color: "berry",
    wide: false,
  },
  {
    category: "ITC",
    title: "ITC'S HOTEL GROUP",
    image: "/images/StoneX.gif",
    color: "maroon",
    wide: true,
    banner: true,
  },
];

function PortfolioGrid() {
  return (
    <div className="portfolio">
      {projects.map((project, index) => (
        <Reveal
          key={index}
          as="div"
          className={`card ${project.wide ? "wide" : ""} ${project.banner ? "banner" : ""}`}
        >
          <div className="card-image-wrapper">
            {project.image ? (
              <img
                src={project.image}
                alt={project.title}
                className="card-image"
              />
            ) : (
              <div className={`card-image ${project.color}`} />
            )}
          </div>

          <p className="card-category">{project.category}</p>
          <p className="card-title">{project.title}</p>
        </Reveal>
      ))}
    </div>
  );
}

export default PortfolioGrid;