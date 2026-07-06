import { I18nText } from "./I18nText";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>
        <I18nText k="footer.built" />
      </p>
      <p>
        <I18nText k="footer.rights" /> {year} mubu.dev
      </p>
      <p className="footer-credit">
        <I18nText k="footer.inspired" />
      </p>
    </footer>
  );
}
