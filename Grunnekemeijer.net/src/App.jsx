import DarkModeBtn from './components/darkmodeBtn/DarkModeBtn'
// import TypeWriter from './components/TypeWriter'
import NameDiv from './components/nameDiv/NameDiv'
import GlobalStyle from './globalStyles'


function App() {

  return (
    <div className="App">
     <GlobalStyle />
     <DarkModeBtn/>
     {/* <TypeWriter/> */}
     <NameDiv/>

    </div>
  )
}

export default App
