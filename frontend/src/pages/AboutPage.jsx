import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";
import "./AboutPage.css";

const teamMembers = [
  {
    name: "RAAJ GIRDHAR",
    role: "Partner & Creative Director",
    thought:
      "I believe in simplicity. My work reflects the nuances and flavors of India's diverse culture. It's something inherent, impossible to hide. There's a unique quirkiness to where I come from. Hyperbole and subtlety coexist peacefully. From insights to craft, my work showcases all that I have observed and grown with over two decades",
  },
  {
    name: "RASHI AJMANI",
    role: "Partner & Design Director",
    thought:
      "You spot something. You take a look at it.  You think about it. And you are left wondering about the simplicity of the scheme of things. It's my handbook towards approaching my work. And every single thing, every single piece that I try to pursue, bears this mark. As a Design Director, I have successfully translated strategic objectives into compelling visual concepts across various mediums, including print, digital, and multimedia platforms.",
  },
  {
    name: "ARYAN SHARMA",
    role: "Director Strategy",
    thought:
      "Simplicity stands as a guiding principle, revealing profound insights and unlocking pathways to success. As a Director of Strategy, I navigate this landscape with precision and foresight, recognizing the power of clarity in shaping impactful outcomes. Every endeavor is a calculated move, meticulously crafted to translate strategic objectives into actionable plans that resonate across diverse mediums.I leverage the art of strategy to drive tangible results and shape the future of our organization.",
  },
];

const highlights = [
  {
    title: "Creative studio",
    text: "We shape premium brand stories through sharp design, immersive visuals, and campaign-ready thinking.",
  },
  {
    title: "Built for momentum",
    text: "Our team moves quickly from concept to execution, balancing strategy with visual polish for standout delivery.",
  },
  {
    title: "Partnership mindset",
    text: "We work closely with clients to turn goals into a clear brand presence that feels both modern and memorable.",
  },
];

const values = [
  "Bold storytelling",
  "Strategic collaboration",
  "Design with purpose",
  "Consistent brand impact",
];

function AboutPage() {
  return (
    <section className="about-page">
      <Reveal as="div" className="about-page__hero" delay={1}>
        <p className="about-page__eyebrow">About us</p>
        <h1>
          We Specialize in Brand Development, Graphic Design and Visual Content
          Creation
        </h1>
        <p className="about-page__intro">
          Happy To Brew brings together strategy, motion, and visual craft to
          help brands communicate with more confidence and clarity. Every
          project is built to create a stronger emotional connection with the
          audience.
        </p>

        <div className="about-page__actions">
          <Link to="/" className="about-page__button">
            Back to home
          </Link>
        </div>
      </Reveal>

      <Reveal as="div" className="about-page__team" delay={1}>
        <div className="about-page__team-header">
          <p className="about-page__label">Meet the people</p>
          <h2>The minds behind the work</h2>
        </div>

        <div className="about-page__team-grid">
          {teamMembers.map((member, index) => (
            <Reveal as="article" className="about-page__person-card" key={member.name} delay={index + 1}>
              <div className="about-page__person-ring" aria-hidden="true" />
              <span className="about-page__person-index">0{index + 1}</span>
              <h3>{member.name}</h3>
              <p className="about-page__person-role">{member.role}</p>
              <p className="about-page__person-thought">“{member.thought}”</p>
            </Reveal>
          ))}
        </div>
      </Reveal>

      <div className="about-page__grid">
        {highlights.map((item, index) => (
          <Reveal as="article" className="about-page__card" key={item.title} delay={index + 1}>
            <h2>{item.title}</h2>
            <p>{item.text}</p>
          </Reveal>
        ))}
      </div>

      <Reveal as="div" className="about-page__values" delay={1}>
        <div>
          <p className="about-page__label">What drives us</p>
          <h2>Clear thinking. Strong visuals. Real results.</h2>
        </div>

        <ul>
          {values.map((value) => (
            <li key={value}>{value}</li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}

export default AboutPage;
