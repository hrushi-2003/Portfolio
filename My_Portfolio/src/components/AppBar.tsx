import { useEffect, useRef, useState } from "react";
import { FaFileAlt, FaGithub, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";
import { LINKS, PROFILE } from "../data";

const navigation = [
  { label: "Resume", href: LINKS.resume, Icon: FaFileAlt },
  { label: "GitHub", href: LINKS.github, Icon: FaGithub },
  { label: "LinkedIn", href: LINKS.linkedin, Icon: FaLinkedin },
];

export default function AppBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(() => window.scrollY > 80);
  const nav = useRef<HTMLElement>(null);
  const menuButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const updateHeader = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", updateHeader, { passive: true });
    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const closeOnOutsidePress = (event: PointerEvent) => {
      if (event.target instanceof Node && !nav.current?.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("pointerdown", closeOnOutsidePress);
    return () => document.removeEventListener("pointerdown", closeOnOutsidePress);
  }, [menuOpen]);

  const closeMenu = () => {
    setMenuOpen(false);
    menuButton.current?.focus();
  };

  return (
    <header className={scrolled ? "site-header is-scrolled" : "site-header"}>
      <nav
        ref={nav}
        className="content-container flex items-center justify-between gap-3 py-4"
        aria-label="Main navigation"
        onKeyDown={(event) => {
          if (event.key === "Escape" && menuOpen) closeMenu();
        }}
      >
        <a href="#top" className="min-w-0 text-base font-bold md:text-lg" onClick={() => setMenuOpen(false)}>
          <span className="lg:hidden">{PROFILE.firstName}</span>
          <span className="hidden lg:inline">{PROFILE.name} | {PROFILE.role}</span>
        </a>

        <button
          ref={menuButton}
          type="button"
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg text-xl sm:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="profile-links"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <FaTimes aria-hidden="true" /> : <FaBars aria-hidden="true" />}
        </button>

        <ul
          id="profile-links"
          className={menuOpen ? "profile-links is-open" : "profile-links"}
        >
          {navigation.map(({ label, href, Icon }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="profile-link"
                onClick={() => {
                  if (menuOpen) closeMenu();
                }}
              >
                <Icon className="shrink-0 text-xl" aria-hidden="true" />
                <span className={label === "Resume" ? "" : "sm:sr-only"}>{label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
