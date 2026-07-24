import { Link } from 'react-router-dom';
import './AboutPage.css';

const highlights = [
  {
    title: 'Creative studio',
    text: 'We shape premium brand stories through sharp design, immersive visuals, and campaign-ready thinking.',
  },
  {
    title: 'Built for momentum',
    text: 'Our team moves quickly from concept to execution, balancing strategy with visual polish for standout delivery.',
  },
  {
    title: 'Partnership mindset',
    text: 'We work closely with clients to turn goals into a clear brand presence that feels both modern and memorable.',
  },
];

const values = [
  'Bold storytelling',
  'Strategic collaboration',
  'Design with purpose',
  'Consistent brand impact',
];

function AboutPage() {
  return (
    <section className="about-page">
      <div className="about-page__hero">
        <p className="about-page__eyebrow">About us</p>
        <h1>We design brand experiences that feel unforgettable.</h1>
        <p className="about-page__intro">
          Happy To Brew brings together strategy, motion, and visual craft to help brands
          communicate with more confidence and clarity. Every project is built to create a
          stronger emotional connection with the audience.
        </p>

        <div className="about-page__actions">
          <Link to="/" className="about-page__button">
            Back to home
          </Link>
        </div>
      </div>

      <div className="about-page__grid">
        {highlights.map((item) => (
          <article className="about-page__card" key={item.title}>
            <h2>{item.title}</h2>
            <p>{item.text}</p>
          </article>
        ))}
      </div>

      <div className="about-page__values">
        <div>
          <p className="about-page__label">What drives us</p>
          <h2>Clear thinking. Strong visuals. Real results.</h2>
        </div>

        <ul>
          {values.map((value) => (
            <li key={value}>{value}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default AboutPage;
