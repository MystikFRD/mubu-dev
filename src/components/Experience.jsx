import { useState } from "react";
import { useApp } from "../context/AppContext";
import { I18nText } from "./I18nText";

const TABS = [
  { id: "ford-apprenticeship", labelKey: "experience.tabApprenticeship" },
  { id: "ford-production", labelKey: "experience.tabProduction" },
];

export function Experience() {
  const { t } = useApp();
  const [activeTab, setActiveTab] = useState("ford-apprenticeship");

  return (
    <section className="section" id="experience">
      <h2 className="section-title">
        <span className="section-slash">/</span> <I18nText k="experience.title" />
      </h2>
      <div className="tabs" role="tablist" aria-label={t.experience.tabAria}>
        {TABS.map(({ id, labelKey }) => (
          <button
            key={id}
            className={`tab${activeTab === id ? " active" : ""}`}
            role="tab"
            type="button"
            aria-selected={activeTab === id}
            onClick={() => setActiveTab(id)}
          >
            <I18nText k={labelKey} />
          </button>
        ))}
      </div>
      <div className="tab-panels">
        <article
          className={`tab-panel${activeTab === "ford-apprenticeship" ? " active" : ""}`}
          id="ford-apprenticeship"
          role="tabpanel"
          hidden={activeTab !== "ford-apprenticeship"}
        >
          <header className="role-header">
            <h3>
              <I18nText k="experience.roleApprenticeship" />{" "}
              <span className="role-badge">
                <I18nText k="experience.badgeApprenticeship" />
              </span>
            </h3>
            <p className="role-meta">
              <I18nText k="experience.metaApprenticeship" />
            </p>
          </header>
          <ul className="role-bullets">
            {t.experience.bulletsApprenticeship.map((item) => (
              <li key={item} dangerouslySetInnerHTML={{ __html: item }} />
            ))}
          </ul>
        </article>
        <article
          className={`tab-panel${activeTab === "ford-production" ? " active" : ""}`}
          id="ford-production"
          role="tabpanel"
          hidden={activeTab !== "ford-production"}
        >
          <header className="role-header">
            <h3>
              <I18nText k="experience.roleProduction" />
            </h3>
            <p className="role-meta">
              <I18nText k="experience.metaProduction" />
            </p>
          </header>
          <ul className="role-bullets">
            {t.experience.bulletsProduction.map((item) => (
              <li key={item} dangerouslySetInnerHTML={{ __html: item }} />
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}
