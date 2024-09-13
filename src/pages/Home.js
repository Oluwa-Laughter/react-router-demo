import { Outlet, Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <nav>
        <li>
          <Link to="about">About</Link>
        </li>

        <li>
          <Link to="contact">Contact</Link>
        </li>

        <li>
          <Link to="privacy">Privacy</Link>
        </li>
        <Outlet />
      </nav>
    </>
  );
}
