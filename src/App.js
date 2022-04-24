import './App.css';
import { Home, About, Skills, Projects } from './components/PortFolioFiles';
import NavBar from './components/Navigationbar';
// import { Routes, Route } from 'react-router-dom';




function App() {
  return (
    <>
      <NavBar />
      <Home />
      <About />
      <Skills />
      <Projects />
    </>
  )
}

export default App;
