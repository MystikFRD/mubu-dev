import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { i18n } from "../i18n";

const AppContext = createContext(null);

export function getNested(obj, path) {
  return path.split(".").reduce((acc, key) => acc?.[key], obj);
}

export function AppProvider({ children }) {
  const [lang, setLang] = useState(
    () => localStorage.getItem("mubu-lang") || "en"
  );
  const [productionMode, setProductionMode] = useState(false);
  const [navOpen, setNavOpen] = useState(false);

  const t = i18n[lang];

  useEffect(() => {
    localStorage.setItem("mubu-lang", lang);
    document.documentElement.lang = lang;
  }, [lang]);

  useEffect(() => {
    document.body.classList.toggle("production-mode", productionMode);
  }, [productionMode]);

  useEffect(() => {
    document.body.classList.toggle("nav-open", navOpen);
    document.body.style.overflow = navOpen ? "hidden" : "";
  }, [navOpen]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 900) setNavOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const value = useMemo(
    () => ({
      lang,
      setLang,
      t,
      productionMode,
      setProductionMode,
      navOpen,
      setNavOpen,
    }),
    [lang, t, productionMode, navOpen]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used within AppProvider");
  return ctx;
}
