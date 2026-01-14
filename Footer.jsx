import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      {/* TOP BOXED SECTION */}
      <div className="footer-top-box">
        {/* BOX 1 */}
        <div className="footer-box">
          <h2 className="footer-logo">Unimate</h2>
          <p className="footer-sub">Museum</p>

          <h3>Opening hours</h3>
          <p>Daily: 10.00–17.00 (Fridays: 20.30)</p>
          <p>Last entry: 16.45 (Fridays: 20.15)</p>
        </div>

        {/* BOX 2 */}
        <div className="footer-box">
          <h3>About Us</h3>
          <p className="footer-about">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Ut elit tellus, luctus nec ullamcorper mattis.
          </p>

          <div className="footer-links">
            <div>
              <h4>Visitors</h4>
              <p>Buy tickets</p>
              <p>Find Us</p>
              <p>Our History</p>
            </div>

            <div>
              <h4>Links</h4>
              <p>Work With Us</p>
              <p>Privacy Policy</p>
              <p>Terms and Condition</p>
            </div>
          </div>
        </div>

        {/* BOX 3 */}
        <div className="footer-box">
          <h3>Stay Tuned</h3>

          <div className="footer-newsletter">
            <input type="email" placeholder="Your email" />
            <button>SUBSCRIBE</button>
          </div>

          <h3 className="follow-title">Follow Us</h3>
          <div className="footer-social">
            <span>ⓕ</span>
            <span>✕</span>
            <span>◎</span>
          </div>
        </div>
      </div>

      {/* LOGO ROW */}
      <div className="footer-logos">
        <span>GRAND GREEK MUSEUM</span>
        <span>BRONTE</span>
        <span>NORDIC ACADEMY</span>
        <span>NATURA</span>
      </div>

      {/* BOTTOM TEXT */}
      <div className="footer-bottom">
        <p>
          All Rights Reserved © Unimate 2025 · Terms & Conditions · Privacy Policy
        </p>
      </div>

      
    </footer>
  );
}
