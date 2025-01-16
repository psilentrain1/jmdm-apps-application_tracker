import { NavLink } from "react-router";

export function Sidebar() {
  return (
    <>
      <section className="sidebar">
        <div className="title">JMDM Application Tracker</div>
        <nav>
          <NavLink to="/">Dashboard</NavLink>
          <NavLink to="/applications">Applications</NavLink>
        </nav>
      </section>
    </>
  );
}
