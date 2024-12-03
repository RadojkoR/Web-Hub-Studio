
import { Route, Routes } from 'react-router'
import '../App.css'
import { Home } from '../Pages'
import { Footer, Nav } from '../Components/Layout'

function App() {
  

  return (
    <>
      <Nav />
      <section>
        <Routes>
          <Route path='/' element={<Home />}></Route>
        </Routes>
      </section>
      <Footer />
    </>
  )
}

export default App
