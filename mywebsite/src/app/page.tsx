import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import ExperienceSection from './components/ExperienceSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

export default function PortfolioPage() {
  return (
    <div className="bg-gradient-to-br from-slate-50 via-white to-emerald-50 text-gray-800 min-h-screen">
      <Header />
      <main className="container mx-auto px-6">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ExperienceSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
