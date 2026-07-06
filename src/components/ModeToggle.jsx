import { useApp } from "../context/AppContext";

export function ModeToggle() {
  const { t, productionMode, setProductionMode } = useApp();

  return (
    <div
      className="mode-toggle"
      onClick={() => setProductionMode((v) => !v)}
      title={t.mode.title}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setProductionMode((v) => !v);
        }
      }}
    >
      <span className="mode-label">
        {productionMode ? t.mode.production : t.mode.idle}
      </span>
      <span className="mode-dot" />
    </div>
  );
}
