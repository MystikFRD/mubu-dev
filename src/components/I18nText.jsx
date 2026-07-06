import { getNested, useApp } from "../context/AppContext";

export function I18nText({ k, as: Tag = "span", className }) {
  const { t } = useApp();
  const value = getNested(t, k);
  if (value === undefined) return null;
  return (
    <Tag
      className={className}
      dangerouslySetInnerHTML={{ __html: value }}
    />
  );
}
