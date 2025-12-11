import { NavLink } from 'react-router-dom';
import { ThemeToggle } from '../common/ThemeToggle';
import './Header.css';

export function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
          Home
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
          About
        </NavLink>
        <NavLink to="/now" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
          Now
        </NavLink>
        <NavLink to="/blog" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
          Blog
        </NavLink>
        <NavLink to="/work" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
          Work
        </NavLink>
        <ThemeToggle />
      </nav>
    </header>
  );
}
