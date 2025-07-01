import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './main-files/pages/Home.tsx';
import Skills from './main-files/pages/Skills.tsx';
import Projects from './main-files/pages/Projects.tsx';
import Contacts from './main-files/pages/Contacts.tsx';
import Blog from './main-files/pages/Blog.tsx';
import ProjectsDisplay from './main-files/pages/ProjectDisplay.tsx';
import CertificationDisplay from './main-files/pages/CertificationDisplay.tsx';
import Header from './main-files/components/Header.tsx';


function App() {
  

  return (
    
    <Router> 
      <Header />

      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/project-display" element={<ProjectsDisplay />} />
        <Route path="/certification-display" element={<CertificationDisplay />} />
        
      </Routes>
    </Router>
    
  )
}

export default App
