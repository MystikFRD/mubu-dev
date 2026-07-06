import { I18nText } from "./I18nText";

const CERTS = [
  { issuer: "TÜV Rheinland", nameKey: "education.cert1Name", date: "Jun 2025" },
  { issuer: "Ford Motor Company", nameKey: "education.cert2Name", date: "Sep 2025" },
  { issuer: "BGHM", nameKey: "education.cert3Name", date: "Nov 2025" },
];

export function Education() {
  return (
    <section className="section" id="education">
      <h2 className="section-title">
        <span className="section-slash">/</span> <I18nText k="education.title" />
      </h2>
      <div className="card-grid">
        <article className="info-card">
          <h3>
            <I18nText k="education.degree1" />
          </h3>
          <p className="card-meta">
            <I18nText k="education.school1" />
          </p>
          <p className="card-detail">
            <I18nText k="education.detail1" />
          </p>
        </article>
        <article className="info-card">
          <h3>
            <I18nText k="education.degree2" />
          </h3>
          <p className="card-meta">
            <I18nText k="education.school2" />
          </p>
          <p className="card-detail">
            <I18nText k="education.detail2" />
          </p>
        </article>
      </div>
      <h3 className="subsection-title">
        <I18nText k="education.certsTitle" />
      </h3>
      <div className="cert-grid">
        {CERTS.map(({ issuer, nameKey, date }) => (
          <div key={nameKey} className="cert-card">
            <span className="cert-issuer">{issuer}</span>
            <span className="cert-name">
              <I18nText k={nameKey} />
            </span>
            <span className="cert-date">{date}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
