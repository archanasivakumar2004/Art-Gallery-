import "./DontMiss.css"
export default function DontMiss() {
  return (
    <section className="dont-miss">
      <h2 className="dont-miss-title">Don't Miss</h2>
      <hr />

      {/* ITEM 1 */}
      <div className="dont-miss-item">
        <div className="dont-miss-date">
          <h3>18 Nov</h3>
          <p>18 Nov – 22 Nov</p>
        </div>

        <div className="dont-miss-heading">
          <h1>Chromatic Reverie</h1>
        </div>

        <div className="dont-miss-image">
          <img src="/dontmiss1.jpg" alt="Chromatic Reverie" />
          <button className="book-btn-round">BOOK</button>
        </div>
      </div>

      <hr className="item-divider" />

      {/* ITEM 2 */}
      <div className="dont-miss-item">
        <div className="dont-miss-date">
          <h3>02 Dec</h3>
          <p>02 Dec – 10 Dec</p>
        </div>

        <div className="dont-miss-heading">
          <h1>Echoes of Form</h1>
        </div>

        <div className="dont-miss-image">
          <img src="/dontmiss2.jpg" alt="Echoes of Form" />
          <button className="book-btn-round">BOOK</button>
        </div>
      </div>

      <hr className="item-divider" />

      {/* ITEM 3 */}
      <div className="dont-miss-item">
        <div className="dont-miss-date">
          <h3>15 Jan</h3>
          <p>15 Jan – 30 Jan</p>
        </div>

        <div className="dont-miss-heading">
          <h1>Visions in Motion</h1>
        </div>

        <div className="dont-miss-image">
          <img src="/dontmiss3.jpg" alt="Visions in Motion" />
          <button className="book-btn-round">BOOK</button>
        </div>
      </div>
    </section>
  );
}
