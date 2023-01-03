
// import TypeWriter from './components/TypeWriter'
// import NameDiv from './components/nameDiv/NameDiv'
import GlobalStyle from './globalStyles'
// import Navbar from './components/navbar/Navbar'
// import Socials from './components/socials/Socials'

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Info from './pages/Info'
import Portfolio from './pages/Portfolio'


const App = () => {



  return (
    <div className="App">
      <GlobalStyle />

      <BrowserRouter>

      <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/info' element={<Info />}/>
      <Route path='/portfolio' element={<Portfolio />}/>

      </Routes>

        {/* <Navbar /> */}
        {/* <TypeWriter/> */}
        {/* <NameDiv /> */}
        {/* <Socials /> */}


      </BrowserRouter>


    </div>
  )
}

export default App


