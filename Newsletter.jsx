import "./Newsletter.css"

export default function Newsletter() {
  return (
    <section className="newsletter">
      <img src="/signup.jpg" alt="Newsletter" className="newsletter-bg" />

      <div className="newsletter-content">
        <h2>Sign up to our newsletters</h2>

        <p>
          Stay connected to the British Museum for the latest news, stories,
          exhibitions, events and visitor information.
        </p>

        <div className="newsletter-form">
          <input type="email" placeholder="Your email" />
          <button className="member-btn">SUBSCRIBE</button>
        </div>
      </div>
    </section>
  );
}
