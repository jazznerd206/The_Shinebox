import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AUTH_LINKS, NAV_LINKS } from '../config/nav'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  useEffect(() => {
    if (!menuOpen) return undefined

    const handleEscape = (event) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [menuOpen])

  const navLinkClass = ({ isActive }) =>
    isActive ? 'header__nav-link header__nav-link--active' : 'header__nav-link'

  return (
    <header className="header">
      <div className="header__bar">
        <Link to="/" className="header__logo">
          The Shinebox
        </Link>
        <button
          type="button"
          className={`header__menu-button ${menuOpen ? 'header__menu-button--open' : ''}`}
          aria-expanded={menuOpen}
          aria-controls="site-navigation"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="header__menu-icon" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
        </button>
      </div>

      <button
        type="button"
        className={`header__backdrop ${menuOpen ? 'header__backdrop--visible' : ''}`}
        aria-label="Close menu"
        tabIndex={menuOpen ? 0 : -1}
        onClick={() => setMenuOpen(false)}
      />

      <nav
        id="site-navigation"
        className={`header__nav ${menuOpen ? 'header__nav--open' : ''}`}
        aria-label="Main navigation"
        aria-hidden={!menuOpen}
      >
        <ul className="header__nav-list">
          {NAV_LINKS.map(({ to, label }) => (
            <li key={to}>
              <NavLink to={to} className={navLinkClass} onClick={() => setMenuOpen(false)}>
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        <ul className="header__nav-list header__nav-list--auth">
          {AUTH_LINKS.map(({ to, label }) => (
            <li key={to}>
              <NavLink to={to} className={navLinkClass} onClick={() => setMenuOpen(false)}>
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header
