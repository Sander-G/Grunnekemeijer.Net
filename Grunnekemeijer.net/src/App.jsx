import GlobalStyle from './globalStyles'
import Navbar from './components/navbar/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Info from './pages/Info'
import Portfolio from './pages/Portfolio'
import NotFound from './pages/NotFound'
import { MuteProvider } from './context/MuteContext'


const App = () => {

  return (
    <MuteProvider>
    <div className="App">
      <GlobalStyle />
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/info' element={<Info />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='*' element={<NotFound />} />
      </Routes>

    </div>
    </MuteProvider>
  )
}

export default App


