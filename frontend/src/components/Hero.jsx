import './Hero.css';

function Hero() {
  return (
    <section className="hero" id="top">
      <video
        className="hero__banner"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/videos/stonex1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </section>
  );
}

export default Hero;