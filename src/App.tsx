import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import FeaturedWork from './components/FeaturedWork';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MedicalPortalProject from './components/projects/medical-portal-project';
import PaymentDashboardProject from './components/projects/payment-dashboard-project';
import LeaderboardProject from './components/projects/leaderboard-project';
import KanbanBoardProject from './components/projects/kanban-project';
import ResuLensProject from './components/projects/resumelens_project';
export default function App() {
  return (
    <div className="min-h-screen">
      <Routes>
        <Route path="/medical" element={<MedicalPortalProject />} />
        <Route path="/leaderboard" element={<LeaderboardProject />} />
        <Route path="/kanban" element={<KanbanBoardProject />} />
        <Route path="/resumelens" element={<ResuLensProject />} />
        <Route path="/payment-dashboard" element={<PaymentDashboardProject />} />
        <Route path="/" element={
          <>
            <Navigation />
            <Hero />
            <About />
            <div id="featured-work">
              <FeaturedWork />
            </div>
            {/* <Projects /> */}
            <Skills />
            <Contact />
            <Footer />
          </>
        } />
      </Routes>
    </div>
  );
}