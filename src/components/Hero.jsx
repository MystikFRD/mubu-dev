import { useState } from "react";
import { useApp } from "../context/AppContext";
import { useTypewriter } from "../hooks/useTypewriter";
import { I18nText } from "./I18nText";
import profilePhoto from "../assets/profile.jpg";

export function Hero() {
  const { t } = useApp();
  const [photoFailed, setPhotoFailed] = useState(false);
  const taglineHtml = useTypewriter(t.hero.phrases, t.hero.greeting);

  return (
    <header className="hero" id="home">
      <div className="hero-grid">
        <div className="hero-text">
          <p className="hero-eyebrow">mubu.dev</p>
          <h1 className="hero-name">Mustafa Budak</h1>
          <p
            className="hero-tagline"
            dangerouslySetInnerHTML={{ __html: taglineHtml }}
          />
          <p className="hero-bio">
            <I18nText k="hero.bio" />
          </p>
          <a
            className="cta-button"
            href="https://www.linkedin.com/in/mustafa-budak-430b30231/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <I18nText k="hero.cta" />
          </a>
        </div>
        <div className="hero-photo-wrap">
          <div className="hero-photo-frame">
            {!photoFailed && (
              <img
                src={profilePhoto}
                alt={t.hero.photoAlt}
                className="hero-photo"
                onError={() => setPhotoFailed(true)}
              />
            )}
            {photoFailed && (
              <div className="hero-photo-fallback" aria-hidden="true">
                MB
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
