import { I18nText } from "./I18nText";

export function Contact() {
  return (
    <section className="section" id="contact">
      <h2 className="section-title">
        <span className="section-slash">/</span> <I18nText k="contact.title" />
      </h2>
      <div className="contact-block">
        <p>
          <I18nText k="contact.text" />
        </p>
        <a
          className="cta-button"
          href="https://www.linkedin.com/in/mustafa-budak-430b30231/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <I18nText k="contact.cta" />
        </a>
      </div>
    </section>
  );
}
