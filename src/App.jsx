import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        {/* Header and footer stay consistent */}
        <Header />

        {/* Routes control what appears in the main content area */}
        <main className="main-content">
          <Routes>
            {/* Define the home page content */}
            <Route path="/" element={
              <div className="text-section">
                <p className="welcome-text">Hello, Welcome</p>
                <h2 className="name-heading">I am <span>Oglesby Rodriguez</span></h2>
                <p className="description">
                <h2><strong>"I am a dedicated and creative web developer passionate about crafting user-friendly and visually appealing websites."</strong></h2>
                </p>
                <button className="cta-button">Contact Me</button>
                <img 
                  className="profile-image" 
                  src="https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1200" 
                  alt="Profile Image" 
                />
              </div>
            }/>

            {/* Define other pages (About, Portfolio, Contact) */}
            <Route path="/about" element={<AboutMe />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* Footer remains consistent */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;

  


