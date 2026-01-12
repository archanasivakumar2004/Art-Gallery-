import "./Member.css"

export default function Member() {
  return (
    <section className="member-section">
      <img
        src="/hot-peppers-1236478_1920.jpg"
        alt="Member Gallery"
        className="member-bg"
      />

      <div className="member-content">
        <h2>Become a Member</h2>

        <p>
          Enjoy exclusive events, unlimited access to exhibitions and the
          Members’ Room, plus discounts in the Museum shops, cafés and
          restaurants.
        </p>

        <button className="member-btn">FIND OUT MORE →</button>
      </div>
    </section>
  );
}
