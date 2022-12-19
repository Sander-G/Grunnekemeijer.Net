
// import TypeWriter from './components/TypeWriter'
import NameDiv from './components/nameDiv/NameDiv'
import GlobalStyle from './globalStyles'
import Navbar from './components/navbar/Navbar'
import Socials from './components/socials/Socials'




  const App = () => {

  

  return (
    <div className="App">
    
     <GlobalStyle />
     <Navbar/>
     {/* <TypeWriter/> */}
     <NameDiv />
    <Socials />
    </div>
  )
}

export default App


