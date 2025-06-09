import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom"





export const useMeta = () => {
    const location = useLocation();
    const {t} = useTranslation();
    const path = location.pathname;
    const baseUrl = "https://www.webhubstudio.com";
    const cleanPath = path !== "/" && path.endsWith("/") ? path.slice(0, -1) : path;
    const canonicalUrl = `${baseUrl}${cleanPath}`;
    
    const pathToKeyMap: Record<string, string> = {
        "/": "home",
        "/services": "services",
        "/services/web-development": "webDevelopment",
        "/services/seo-optimization": "seoOptimization",
        "/services/web-design": "webDesign",
        "/services/web-hosting": "webHosting",
        "/projects": "projects",
        "/contact": "contact",
      };

      const key = pathToKeyMap[path] || "home";
      
  return {
    title: `${t(`meta.${key}Title`)} | Web Hub Studio`,
    description: t(`meta.${key}Description`),
    keywords: t(`meta.${key}Keywords`, ""), // fallback ako ne postoji
    ogImage: t(`meta.${key}OgImage`, "/images/seo/default-og-image.jpg"),
    canonicalUrl: canonicalUrl
  };
    
}