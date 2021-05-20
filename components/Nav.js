import Link from "next/link";
import navStyles from "../styles/Nav.module.css";
import { useRouter } from "next/router";
function Nav({ href, children }) {

    const router = useRouter();
  return (
    <nav className={navStyles.nav}>
      <ul>
        <li >
          <Link className={router.pathname === href ? "active": "notActive"} href="/">Home</Link>
        </li>
        <li >
          <Link className={router.pathname === href ? "active": "notActive"} href="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
