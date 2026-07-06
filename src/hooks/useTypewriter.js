import { useEffect, useState } from "react";

const TYPE_SPEED = 80;

export function useTypewriter(phrases, greeting) {
  const [display, setDisplay] = useState("");

  useEffect(() => {
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let timeoutId;

    function tick() {
      const current = phrases[phraseIndex];
      const visible = isDeleting
        ? current.substring(0, charIndex - 1)
        : current.substring(0, charIndex + 1);

      setDisplay(`${greeting} <span class="typed-text">${visible}</span><span class="cursor">|</span>`);

      if (!isDeleting) charIndex++;
      else charIndex--;

      let delay = isDeleting ? 40 : TYPE_SPEED;

      if (!isDeleting && charIndex === current.length + 1) {
        delay = 2000;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        delay = 400;
      }

      timeoutId = setTimeout(tick, delay);
    }

    tick();
    return () => clearTimeout(timeoutId);
  }, [phrases, greeting]);

  return display;
}
