import GlobalStyle from './globalStyles'
import Navbar from './components/navbar/Navbar'

import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Info from './pages/Info'
import Portfolio from './pages/Portfolio'


const App = () => {

  return (
    <div className="App">
      <GlobalStyle />
      <Navbar />
     
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/info' element={<Info />} />
          <Route path='/portfolio' element={<Portfolio />} />

        </Routes>

    </div>
  )
}

export default App


