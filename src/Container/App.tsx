
import { Route, Routes } from 'react-router-dom'
import '../App.css';
import '../assets/styles/main.scss';
import { Contact, Home, Projects, SeoOptimization, Services, WebDesign, WebDevelopment, WebHosting } from '../Pages'
import Layout from '../Components/Layout/Layout';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import ScrollToTop from './ScrollToTop';

function App() {
  const { i18n } = useTranslation();
  return (
    <>
      <Helmet>
        <html lang={i18n.language} />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="services">
            <Route index element={<Services />} />
            <Route path="web-development" element={<WebDevelopment />} />
            <Route path="seo-optimization" element={<SeoOptimization />} />
            <Route path="web-design" element={<WebDesign />} />
            <Route path="web-hosting" element={<WebHosting  />} />
          </Route>
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}

export default App
