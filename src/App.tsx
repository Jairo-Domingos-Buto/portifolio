import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { WhoINeedToSolve } from './components/sections/WhoINeedToSolve';
import { Projects } from './components/sections/Projects';
import { Process } from './components/sections/Process';
import { Skills } from './components/sections/Skills';
import { About } from './components/sections/About';
import { Contact } from './components/sections/Contact';
import ProjectsPage from './pages/Projects';
import ProjectDetailsPage from './pages/ProjectDetails';

function HomePage() {
  return (
    <main>
        <Hero />
        <WhoINeedToSolve />
        <Projects compact />
        <Process />
        <Skills />
        <About />
        <Contact />
    </main>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:slug" element={<ProjectDetailsPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
