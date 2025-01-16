import { NavLink } from "react-router";

export function Sidebar() {
  return (
    <>
      <section className="sidebar">
        <div className="title">JMDM Application Tracker</div>
        <div className="links">
          <nav>
            <NavLink to="/">Dashboard</NavLink>
            <NavLink to="/applications">Applications</NavLink>
          </nav>
          <div className="userinfo">Username</div>
        </div>
      </section>
    </>
  );
}
