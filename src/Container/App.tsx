
import { Route, Routes } from 'react-router-dom'
import '../App.css';
import '../assets/styles/main.scss';
import { Contact, Home, Projects, SeoOptimization, Services, WebDesign, WebDevelopment } from '../Pages'
import Layout from '../Components/Layout/Layout';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

function App() {
const { i18n } = useTranslation();

 useEffect(() => {
   const language = i18n.language || "en";
   document.documentElement.setAttribute("lang", language);
 }, [i18n.language]);

  return (
    <>
      
        <Routes>
          <Route  element={<Layout />}>
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
