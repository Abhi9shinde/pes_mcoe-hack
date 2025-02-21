import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './components/ThemeProvider';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProblemStatementsPage from './pages/ProblemStatementsPage';
import RegisterPage from './pages/RegisterPage';
import SchedulePage from './pages/SchedulePage';
import Team from './pages/Team'

function App() {
  return (
    <Router>
      <ThemeProvider>
        <div className="min-h-screen bg-gradient-to-br from-background via-background/50 to-background relative overflow-hidden">
          {/* Animated background patterns */}
          <div className="absolute inset-0 w-full h-full z-0">
            <div className="absolute inset-0 bg-grid-white/20 dark:bg-grid-white/10 bg-grid-pattern [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
            <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
          </div>

          {/* 3D Floating elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-auto">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/30 rounded-full blur-3xl animate-blob" />
            <div className="absolute top-0 -left-40 w-80 h-80 bg-secondary/30 rounded-full blur-3xl animate-blob animation-delay-2000" />
            <div className="absolute -bottom-40 left-20 w-80 h-80 bg-primary/30 rounded-full blur-3xl animate-blob animation-delay-4000" />
          </div>

          <div className="relative z-10">
            <Navbar />
            <main>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/problems" element={<ProblemStatementsPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/schedule" element={<SchedulePage />} />
                <Route path="/team" element={<Team />} />
                                                
              </Routes>
            </main>
            <Footer />
          </div>
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;