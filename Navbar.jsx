import "./Navbar.css";

const Navbar = () => {
  const menus = [
    "HOME",
    "PAGES",
    "SHOP",
    "EVENTS",
    "BLOG",
    "PORTFOLIO",
    "SHOWS",
  ];

  return (
    <header className="navbar">
      <div className="nav-box logo-box">
        <h1>Unimate</h1>
      </div>

      <div className="nav-box menu-box">
        <ul className="nav-links">
          {menus.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="nav-box ticket-box">
        <button>TICKETS</button>
      </div>

      <div className="nav-box icon-box">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
};

export default Navbar;
