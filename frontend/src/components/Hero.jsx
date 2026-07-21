import { useEffect, useState } from "react";
import "./Hero.css";

const videos = [
  "/videos/stonex1.mp4",
  "/videos/stonex2.mp4",
];

function Hero() {
  const [currentVideo, setCurrentVideo] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideo((prev) => (prev + 1) % videos.length);
    }, 15000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero" id="top">
      <video
        key={currentVideo}
        className="hero__banner"
        autoPlay
        muted
        playsInline
      >
        <source src={videos[currentVideo]} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="hero__dots">
        {videos.map((_, index) => (
          <button
            key={index}
            className={`hero__dot ${
              currentVideo === index ? "active" : ""
            }`}
            onClick={() => setCurrentVideo(index)}
            aria-label={`Go to video ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

export default Hero;