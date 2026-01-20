import { useNavigate } from "react-router-dom";
import canvasImg from "../assets/events/canvas-chronicles.jpg";
import modernImg from "../assets/events/modern-visions.jpg";

const EVENTS = [
  {
    slug: "canvas-chronicles",
    title: "Canvas Chronicles",
    image: canvasImg,
  },
  {
    slug: "modern-visions",
    title: "Modern Visions",
    image: modernImg,
  },
];

export default function Events() {
  const navigate = useNavigate();

  return (
    <section style={{ padding: "140px 120px" }}>
      <h1 style={{ fontSize: "42px", marginBottom: "40px" }}>
        Events
      </h1>

      {EVENTS.map((event) => (
        <div
          key={event.slug}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "30px",
            marginBottom: "30px",
            cursor: "pointer",
          }}
          onClick={() => navigate(`/events/${event.slug}`)}
        >
          <img
            src={event.image}
            alt={event.title}
            style={{ width: "200px", height: "120px", objectFit: "cover" }}
          />
          <h2>{event.title}</h2>
        </div>
      ))}
    </section>
  );
}
