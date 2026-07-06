import { useEffect, useState } from "react";
import { useApp } from "../context/AppContext";
import { Icon } from "./Icon";
import { I18nText } from "./I18nText";

const NAV_ITEMS = [
  { id: "about", key: "nav.about" },
  { id: "experience", key: "nav.experience" },
  { id: "education", key: "nav.education" },
  { id: "languages", key: "nav.languages" },
  { id: "projects", key: "nav.projects" },
  { id: "links", key: "nav.links" },
  { id: "contact", key: "nav.contact" },
];

const SOCIAL_LINKS = [
  { href: "https://www.instagram.com/mystik.vv/", label: "Instagram", icon: "instagram" },
  {
    href: "https://www.linkedin.com/in/mustafa-budak-430b30231/",
    label: "LinkedIn",
    icon: "linkedin",
  },
  { href: "https://github.com/MystikFRD", label: "GitHub", icon: "github" },
  { href: "https://www.youtube.com/@MystikLFT", label: "YouTube", icon: "youtube" },
];

export function SideNav() {
  const { lang, setLang, t, navOpen, setNavOpen } = useApp();
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id], header[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const closeNav = () => setNavOpen(false);

  return (
    <>
      <nav className="side-nav" aria-label={t.nav.aria}>
        <a href="#" className="nav-logo" aria-label="mubu.dev home" onClick={closeNav}>
          mubu.dev
        </a>
        <button
          className="nav-toggle"
          type="button"
          aria-expanded={navOpen}
          aria-controls="navMenu"
          aria-label={navOpen ? t.nav.menuClose : t.nav.menuOpen}
          onClick={() => setNavOpen(!navOpen)}
        >
          <span className="nav-toggle-bar" />
          <span className="nav-toggle-bar" />
          <span className="nav-toggle-bar" />
        </button>
        <div className="nav-menu" id="navMenu">
          <ol className="nav-links">
            {NAV_ITEMS.map(({ id, key }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={activeSection === id ? "active" : ""}
                  onClick={closeNav}
                >
                  <span className="nav-slash">/</span> <I18nText k={key} />
                </a>
              </li>
            ))}
          </ol>
        </div>
        <div className="nav-social">
          {SOCIAL_LINKS.map(({ href, label, icon }) => (
            <a
              key={icon}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
            >
              <Icon name={icon} className="icon icon-nav" />
            </a>
          ))}
        </div>
        <div className="lang-toggle" role="group" aria-label={t.nav.langAria}>
          {["en", "de"].map((code) => (
            <button
              key={code}
              className={`lang-btn${lang === code ? " active" : ""}`}
              type="button"
              onClick={() => setLang(code)}
            >
              {code.toUpperCase()}
            </button>
          ))}
        </div>
      </nav>
      <div
        className="nav-backdrop"
        hidden={!navOpen}
        onClick={closeNav}
        aria-hidden="true"
      />
    </>
  );
}
