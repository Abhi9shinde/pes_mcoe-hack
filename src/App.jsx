import { ThemeProvider } from './components/ThemeProvider'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Benefits from './components/Benefits'
import Tracks from './components/Tracks'
import ProblemStatements from './components/ProblemStatements'
import Domains from './components/Domains'
import Prizes from './components/Prizes'
import Timeline from './components/Timeline'
import Sponsors from './components/Sponsors'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gradient-to-br from-background via-background/50 to-background relative overflow-hidden">
        {/* Animated background patterns */}
        <div className="absolute inset-0 w-full h-full z-0">
          <div className="absolute inset-0 bg-grid-white/10 bg-grid-pattern [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
        </div>

        {/* 3D Floating elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/30 rounded-full blur-3xl animate-blob" />
          <div className="absolute top-0 -left-40 w-80 h-80 bg-secondary/30 rounded-full blur-3xl animate-blob animation-delay-2000" />
          <div className="absolute -bottom-40 left-20 w-80 h-80 bg-primary/30 rounded-full blur-3xl animate-blob animation-delay-4000" />
        </div>

        <div className="relative z-10">
          <Navbar />
          <main>
            <Hero />
            <About />
            <Benefits />
            <Tracks />
            <ProblemStatements />
            <Domains />
            <Prizes />
            <Timeline />
            <Sponsors />
            <FAQ />
          </main>
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;