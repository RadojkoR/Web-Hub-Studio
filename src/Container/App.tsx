
import { Route, Routes } from 'react-router'
import '../App.css';
import '../assets/styles/main.scss';
import { Home, Services } from '../Pages'
import { Footer, Nav } from '../Components/Layout'

function App() {
  

  return (
    <>
      <Nav />
      <section>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/services' element={<Services />}></Route>
        </Routes>
      </section>
      <Footer />
    </>
  )
}

export default App
