import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <video className="bg-video" autoPlay loop muted playsInline>
        <source src="/bg.mp4" type="video/mp4" />
      </video>

      <div className="hero-box">
        <h2>
          Welcome to Unimate Museum
        </h2>

        <p className="subtitle">Where Art Speaks Louder Than Words</p>

        <p className="desc">From the dawn of human history to the present.</p>

        <div className="hero-btn">PLAN YOUR VISIT →</div>
      </div>
    </section>
  );
}
