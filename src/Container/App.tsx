
import { Route, Routes } from 'react-router-dom'
import '../App.css';
import '../assets/styles/main.scss';
import { Contact, Home, Projects, SeoOptimization, Services, WebDesign, WebDevelopment } from '../Pages'
// import { Footer, Nav } from '../Components/Layout';
import Layout from '../Components/Layout/Layout';


function App() {


  return (
    <>
      {/* <Nav /> */}
      {/* <section> */}
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
      {/* </section> */}

      {/* <Footer /> */}
    </>
  );
}

export default App
