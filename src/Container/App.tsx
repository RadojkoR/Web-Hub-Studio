
import { Route, Routes } from 'react-router-dom'
import '../App.css';
import '../assets/styles/main.scss';
import { Contact, Home, Projects, SeoOptimization, Services, WebDesign, WebDevelopment, WebHosting } from '../Pages'
import Layout from '../Components/Layout/Layout';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import ScrollToTop from './ScrollToTop';

function App() {
  const { t, i18n } = useTranslation();
  return (
    <>
      <Helmet>
        <html lang={i18n.language} />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home metaTitle={t("meta.homeTitle")} metaDescription={t("meta.homeDescription")} />} />
          <Route path="services">
            <Route index element={<Services metaTitle={t("meta.servicesTitle")} metaDescription={t("meta.servicesDescription")} />} />
            <Route path="web-development" element={<WebDevelopment metaTitle={t("meta.webDevelopmentTitle")} metaDescription={t("meta.webDevelopmentDescription")} />} />
            <Route path="seo-optimization" element={<SeoOptimization metaTitle={t("meta.seoOptimizationTitle")} metaDescription={t("meta.seoOptimizationDescription")} />} />
            <Route path="web-design" element={<WebDesign metaTitle={t("meta.webDesignTitle")} metaDescription={t("meta.webDesignDescription")} />} />
            <Route path="web-hosting" element={<WebHosting  />} />
          </Route>
          <Route path="/projects" element={<Projects metaTitle={t("meta.projectsTitle")} metaDescription={t("meta.projectsDescription")} />} />
          <Route path="/contact" element={<Contact metaTitle={t("meta.contactTitle")} metaDescription={t("meta.contactDescription")} />} />
        </Route>
      </Routes>
    </>
  );
}

export default App
