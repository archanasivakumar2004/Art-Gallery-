import "./Exhibitions.css"
export default function Exhibitions() {
  return (
    <section className="exhibitions-section">
      <h1 className="exhibitions-title">Exhibitions</h1>

      <div className="exhibitions-grid">
        {/* Exhibition 1 */}
        <article className="exhibition">
          <div className="image-wrapper">
            <img src="/img1.jpg" alt="Abstract Fusion" />
            <button className="book-btn">BOOK</button>
          </div>

          <p className="date">18 Oct – 22 Oct</p>
          <h3>Abstract Fusion</h3>
          <button className="paint-box">Painting</button>
        </article>

        {/* Exhibition 2 */}
        <article className="exhibition">
          <div className="image-wrapper">
            <img src="/img2.jpg" alt="Brushstrokes & Beyond" />
            <button className="book-btn">BOOK</button>
          </div>

          <p className="date">18 Nov – 22 Nov</p>
          <h3>Brushstrokes & Beyond</h3>
          <button className="paint-box">Painting</button>
        </article>

        {/* Exhibition 3 */}
        <article className="exhibition">
          <div className="image-wrapper">
            <img src="/img3.jpg" alt="Artistic Odyssey" />
            <button className="book-btn">BOOK</button>
          </div>

          <p className="date">18 Nov – 22 Nov</p>
          <h3>Artistic Odyssey</h3>
          <button className="paint-box">Sculpture</button>
        </article>
      </div>
    </section>
  );
}
