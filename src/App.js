import { 
  BrowserRouter as Router,
  Routes,
 } from "react-router-dom"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"

const App = () => {
  return (
    <Router className='relative'>
      <Navbar />
      <Hero />
    </Router>
  )
}

export default App;
