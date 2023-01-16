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

    <div className='App'>
      <MuteProvider>
        <GlobalStyle />
        <Navbar />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/info' element={<Info />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </MuteProvider>
    </div>

  )
}

export default App


