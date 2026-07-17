import './Hero.css';

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__brandmark">STONEX</div>

      <div className="hero__figures" aria-hidden="true">
        <span className="hero__figure hero__figure--1" />
        <span className="hero__figure hero__figure--2" />
        <span className="hero__figure hero__figure--3" />
        <span className="hero__figure hero__figure--4" />
        <span className="hero__figure hero__figure--5" />
      </div>

      <div className="hero__copy">
        <h1 className="hero__title">MASTERY</h1>
        <p className="hero__subtitle">FILM FESTIVAL</p>
      </div>
    </section>
  );
}

export default Hero;
