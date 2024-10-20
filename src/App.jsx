import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './assets/App.css';
import AboutSection from './Components/About.jsx';
import HeroSection from './components/Home.jsx';
import NavBarSection from './components/NavBar.jsx';
import SkillsSection from './components/Skills.jsx';
import Contact from './Components/Contact.jsx';


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