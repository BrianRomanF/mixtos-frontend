import ResponsiveAppBar from './components/NavBar.jsx'
import './App.css'
import HeroSection from './components/HeroSection.jsx'
import Album from './components/Album/Album.jsx'

function App() {
  
  return (
    <div>
      <ResponsiveAppBar  position="fixed"/>
      <HeroSection/>
      <Album/>
    </div>
  )
}

export default App
