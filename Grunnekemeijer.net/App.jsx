import DarkModeBtn from './components/DarkModeBtn'
// import TypeWriter from './components/TypeWriter'
import NameDiv from './src/components/nameDiv/NameDiv'
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
