import { useApp } from "../context/AppContext";
import { I18nText } from "./I18nText";

export function About() {
  const { t } = useApp();

  return (
    <section className="section" id="about">
      <h2 className="section-title">
        <span className="section-slash">/</span> <I18nText k="about.title" />
      </h2>
      <div className="section-body">
        <p>
          <I18nText k="about.p1" />
        </p>
        <p>
          <I18nText k="about.p2" />
        </p>
        <p>
          <I18nText k="about.techIntro" />
        </p>
        <ul className="tech-list">
          {t.tech.map((item) => (
            <li key={item} dangerouslySetInnerHTML={{ __html: item }} />
          ))}
        </ul>
        <p className="about-aside">
          <I18nText k="about.aside" />
        </p>
      </div>
    </section>
  );
}
