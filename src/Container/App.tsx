
import { Route, Routes } from 'react-router-dom'
import '../App.css';
import '../assets/styles/main.scss';
import { Contact, Home, Projects, SeoOptimization, Services, WebDesign, WebDevelopment } from '../Pages'
import Layout from '../Components/Layout/Layout';
import { useTranslation } from 'react-i18next';
// import { useEffect } from 'react';
import { Helmet } from 'react-helmet';

function App() {
const { i18n } = useTranslation();

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
          <Route path="/" element={<Home />} />
          <Route path="services">
            <Route index element={<Services />} />
            <Route path="web-development" element={<WebDevelopment />} />
            <Route path="seo-optimization" element={<SeoOptimization />} />
            <Route path="web-design" element={<WebDesign />} />
          </Route>
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}

export default App
