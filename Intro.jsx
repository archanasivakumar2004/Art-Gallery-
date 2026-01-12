import "./Intro.css";
import { FiTag } from "react-icons/fi";
import { LuCalendarClock, LuClock } from "react-icons/lu";

export default function Intro() {
  return (
    <section className="below-content">
      <div className="content-top">
        <h1>
          Uncover the rich tapestry of human history and culture spanning two
          million years.
        </h1>

        <div className="info">
          <p>
            <FiTag /> Free entry –
            <a href="#" className="book-link">
              book online
            </a>
          </p>

          <p>
            <LuCalendarClock /> Open today: 10.00–17.00
          </p>

          <p>
            <LuClock /> Last entry: 16.45
          </p>
        </div>
      </div>

      <hr />
    </section>
  );
}
