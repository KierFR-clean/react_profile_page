import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './assets/App.css';
import AboutSection from './components/About';
import HeroSection from './components/Home';
import NavBarSection from './components/NavBar';
import SkillsSection from './components/Skills';
import Contact from './Components/Contact';


function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100 ">
        <NavBarSection /> {}
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<HeroSection />} />
            <Route path="/about" element={<AboutSection />} />
            <Route path="/skills" element={<SkillsSection />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
export default App;