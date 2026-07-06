import { I18nText } from "./I18nText";

const LANG_CARDS = [
  { key: "de", className: "fluent" },
  { key: "en", className: "fluent" },
  { key: "tr", className: "" },
  { key: "ja", className: "learning", barWidth: "25%" },
  { key: "ko", className: "planned", barWidth: "5%" },
];

export function LanguagesSection() {
  return (
    <section className="section" id="languages">
      <h2 className="section-title">
        <span className="section-slash">/</span> <I18nText k="languages.title" />
      </h2>
      <div className="lang-grid">
        {LANG_CARDS.map(({ key, className, barWidth }) => (
          <div key={key} className={`lang-card ${className}`.trim()}>
            <span className="lang-name">
              <I18nText k={`languages.${key}.name`} />
            </span>
            <span className="lang-level">
              <I18nText k={`languages.${key}.level`} />
            </span>
            {barWidth && (
              <span className="lang-bar">
                <span style={{ width: barWidth }} />
              </span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
