import { I18nText } from "./I18nText";

const PROJECTS = [
  { titleKey: "projects.p1Title", descKey: "projects.p1Desc", techKey: "projects.p1Tech" },
  { titleKey: "projects.p2Title", descKey: "projects.p2Desc", techKey: "projects.p2Tech" },
  { titleKey: "projects.p3Title", descKey: "projects.p3Desc", techKey: "projects.p3Tech" },
  { titleKey: "projects.p4Title", descKey: "projects.p4Desc", techKey: "projects.p4Tech" },
];

export function Projects() {
  return (
    <section className="section" id="projects">
      <h2 className="section-title">
        <span className="section-slash">/</span> <I18nText k="projects.title" />
      </h2>
      <p className="section-intro">
        <I18nText k="projects.intro" />
      </p>
      <div className="project-grid">
        {PROJECTS.map(({ titleKey, descKey, techKey }) => (
          <article key={titleKey} className="project-card pending">
            <div className="project-status">
              <I18nText k="projects.status" />
            </div>
            <h3>
              <I18nText k={titleKey} />
            </h3>
            <p>
              <I18nText k={descKey} />
            </p>
            <span className="project-tech">
              <I18nText k={techKey} />
            </span>
          </article>
        ))}
      </div>
    </section>
  );
}
