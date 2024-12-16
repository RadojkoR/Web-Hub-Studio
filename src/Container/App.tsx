
import { Route, Routes } from 'react-router-dom'
import '../App.css';
import '../assets/styles/main.scss';
import { Contact, Home, Projects, SeoOptimization, Services, WebDesign, WebDevelopment } from '../Pages'
import Layout from '../Components/Layout/Layout';
import { useTranslation } from 'react-i18next';
// import { useEffect } from 'react';
import { Helmet } from 'react-helmet';

function App() {
const { t, i18n } = useTranslation();

//  useEffect(() => {
//    const language = i18n.language || "en";
//    document.documentElement.setAttribute("lang", language);
//  }, [i18n.language]);

  return (
    <>
      <Helmet>
        <html lang={i18n.language} />

        <meta
          name="description"
          content="Web Hub Studio - Professional Web Development Services"
        />
        <meta name="robots" content="index, follow" />

        <link rel="alternate" hrefLang="en" href="https://webhubstudio.netlify.app/en" />
        <link rel="alternate" hrefLang="sr" href="http://https://webhubstudio.netlify.app/sr" />
      </Helmet>

      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home metaTitle={t("meta.homeTitle")} metaDescription={t("meta.homeDescription")}/>} />
          <Route path="services">
            <Route index element={<Services metaTitle={t("meta.servicesTitle")} metaDescription={t("meta.servicesDescription")}/>} />
            <Route path="web-development" element={<WebDevelopment metaTitle={t("meta.webDevelopmentTitle")} metaDescription={t("meta.webDevelopmentDescription")}/>} />
            <Route path="seo-optimization" element={<SeoOptimization metaTitle={t("meta.seoOptimizationTitle")} metaDescription={t("meta.seoOptimizationDescription")} />} />
            <Route path="web-design" element={<WebDesign metaTitle={t("meta.webDesignTitle")} metaDescription={t("meta.webDesignDescription")}/>} />
          </Route>
          <Route path="/projects" element={<Projects metaTitle={t("meta.projectsTitle")} metaDescription={t("meta.projectsDescription")}/>} />
          <Route path="/contact" element={<Contact metaTitle={t("meta.contactTitle")} metaDescription={t("meta.contactDescription")}/>} />
        </Route>
      </Routes>
    </>
  );
}

export default App
