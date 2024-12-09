
import { Route, Routes } from 'react-router-dom'
import '../App.css';
import '../assets/styles/main.scss';
import { Contact, Home, Projects, Services } from '../Pages'
import { Footer, Nav } from '../Components/Layout'


function App() {


  return (
    <>
      <Nav />
      <section>
        <Routes>
          <Route path={`/`} element={<Home />}></Route>
          <Route path='/services' element={<Services />}></Route>
          <Route path='/projects' element={<Projects />}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
        </Routes>
      </section>
      <Footer />
    </>
  )
}

export default App
