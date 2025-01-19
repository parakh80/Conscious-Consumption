import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import GalleryPage from './pages/GalleryPage';
import GlobalWarmingPage from './pages/GlobalWarmingPage';
import TipsPage from './pages/TipsPage';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow mt-16">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/global-warming" element={<GlobalWarmingPage />} />
          <Route path="/tips" element={<TipsPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;