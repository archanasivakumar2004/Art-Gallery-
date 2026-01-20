import { useParams,Link} from "react-router-dom";
import "./SingleEvent.css";

import canvasImg from "../assets/events/canvas-chronicles.jpg";
import modernImg from "../assets/events/modern-visions.jpg";


/* ---------------------------------------------------
   EVENT DATA (mock – later can be API)
--------------------------------------------------- */
const EVENTS_DATA = {
  "canvas-chronicles": {
    title: "Canvas Chronicles",
    image: canvasImg,
    date: "18 Nov – 22 Nov",
    category: "Sculpture",
   description: [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",

  "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur."
]

,

  },
  "modern-visions": {
    title: "Modern Visions",
    image: modernImg,
    date: "05 Dec – 20 Dec",
    category: "Modern Art",
    description:
      "A celebration of modern artistic expression blending digital and traditional forms.",
  },
};

/* ---------------------------------------------------
   COMPONENT
--------------------------------------------------- */
export default function SingleEvent() {
  const { slug } = useParams();
  const event = EVENTS_DATA[slug];

  if (!event) {
    return (
      <div className="event-not-found">
        Event not found
      </div>
    );
  }

  return (
    <div className="event-page">

      {/* ================= Breadcrumb ================= */}
      <div className="event-breadcrumb-bar">
     <div className="event-breadcrumb">
  <Link to="/" className="breadcrumb-link">
    MAIN HOME
  </Link>

  <span className="breadcrumb-separator"> / </span>

  <span className="breadcrumb-text">EVENTS</span>

  <span className="breadcrumb-separator"> / </span>

  <span className="breadcrumb-text">
    {event.title.toUpperCase()}
  </span>
</div>


      </div>

      {/* ================= Gap under breadcrumb ================= */}
      <div className="event-breadcrumb-gap"></div>

      {/* ================= Image ================= */}
      <div className="event-image-wrapper">
        <img src={event.image} alt={event.title} />
      </div>

      {/* ================= Content ================= */}
      <div className="event-content">

        {/* -------- Left column -------- */}
        <div className="event-info">

          <div className="info-block">
            <h4>Opening Hours</h4>
            <p>Open daily 09:00–19:00</p>
            <p>Closed on Monday</p>
          </div>

          <div className="info-block">
            <h4>Curators</h4>
            <p>Gwen Vega</p>
            <p>Miles Tran</p>
            <p>Monique Buckley</p>
          </div>

          <div className="info-block">
            <h4>Exhibition Design</h4>
            <p>Julie Moran</p>
            <p>Lacey Long</p>
            <p>Rex Crawford</p>
          </div>

          <div className="info-block">
            <h4>Partners</h4>
            <p>Lottie Mcclain</p>
            <p>Candice Mayo</p>
            <p>Tim Graham</p>
          </div>

         <button className="btn-primary">
  TICKETS
  
</button>


        </div>

        {/* -------- Right column -------- */}
        <div className="event-details">
          <span className="event-date">
            {event.date}
          </span>

          <h1>{event.title}</h1>

          <span className="event-tag">
            {event.category}
          </span>

         <div className="event-description">
  {event.description.map((para, index) => (
    <p key={index}>{para}</p>
  ))}
</div>

        </div>

      </div>
    </div>
  );
}
