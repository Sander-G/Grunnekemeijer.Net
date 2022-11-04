import DarkModeBtn from './components/darkmodeBtn/DarkModeBtn'
// import TypeWriter from './components/TypeWriter'
import NameDiv from './components/nameDiv/NameDiv'
import GlobalStyle from './globalStyles'
import Navbar from './components/navbar/Navbar'

function App() {

  return (
    <div className="App">
    
     <GlobalStyle />
     <Navbar/>
     {/* <TypeWriter/> */}
     <NameDiv/>

    </div>
  )
}

export default App
