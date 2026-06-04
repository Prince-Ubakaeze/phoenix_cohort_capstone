import './index.css'
import Navbar from './components/Navbar.jsx'
import Homepage from './components/Homepage.jsx'
import Planetarydata from './components/Planetarydata.jsx'
import Planets from './components/Planets.jsx'
import PlanetTable from './components/Planettable.jsx'
import Contactform from './components/Contactform.jsx'
import Footer from './components/Footer.jsx'

const App = () => {
  return (
    <div>
      <Navbar />
      <Homepage />
      <Planetarydata />
      <Planets />
      <PlanetTable /> 
      <Contactform /> 
      <Footer />  
    </div>
  )
}

export default App
