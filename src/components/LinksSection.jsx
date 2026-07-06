import { Icon } from "./Icon";
import { I18nText } from "./I18nText";

const LINKS = [
  {
    href: "https://www.instagram.com/mystik.vv/",
    icon: "instagram",
    platformKey: "links.instagram",
    handle: "@mystik.vv",
  },
  {
    href: "https://www.linkedin.com/in/mustafa-budak-430b30231/",
    icon: "linkedin",
    platformKey: "links.linkedin",
    handle: "mustafa-budak",
  },
  {
    href: "https://github.com/MystikFRD",
    icon: "github",
    platformKey: "links.github",
    handle: "MystikFRD",
  },
  {
    href: "https://www.youtube.com/@MystikLFT",
    icon: "youtube",
    platformKey: "links.youtube",
    handle: "@MystikLFT",
  },
];

export function LinksSection() {
  return (
    <section className="section" id="links">
      <h2 className="section-title">
        <span className="section-slash">/</span> <I18nText k="links.title" />
      </h2>
      <p className="section-intro">
        <I18nText k="links.intro" />
      </p>
      <div className="social-grid">
        {LINKS.map(({ href, icon, platformKey, handle }) => (
          <a
            key={icon}
            className="social-card"
            href={href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon name={icon} className="icon icon-card" />
            <span className="social-text">
              <span className="social-platform">
                <I18nText k={platformKey} />
              </span>
              <span className="social-handle">{handle}</span>
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
