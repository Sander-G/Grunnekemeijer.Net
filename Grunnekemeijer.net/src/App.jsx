
// import TypeWriter from './components/TypeWriter'
import NameDiv from './components/nameDiv/NameDiv'
import GlobalStyle from './globalStyles'
import Navbar from './components/navbar/Navbar'



  const App = () => {

  

  return (
    <div className="App">
    
     <GlobalStyle />
     <Navbar/>
     {/* <TypeWriter/> */}
     <NameDiv />
 
    </div>
  )
}

export default App


