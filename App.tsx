
import React, { Suspense, lazy } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Assistant from './components/Assistant';

const Home = lazy(() => import('./pages/Home'));

const LoadingScreen = () => (
  <div className="h-screen w-full flex items-center justify-center bg-[#FAF9F6]">
    <div className="text-center animate-pulse">
      <h2 className="text-3xl font-serif text-[#1E3A34] mb-2">Ubuntu Asili</h2>
      <p className="text-[#C5A059] text-sm uppercase tracking-widest">Preparing your journey...</p>
    </div>
  </div>
);

// Placeholder pages for demonstration
const PlaceholderPage: React.FC<{ title: string }> = ({ title }) => (
  <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto min-h-screen">
    <h1 className="text-5xl font-serif text-[#1E3A34] mb-8">{title}</h1>
    <div className="bg-white p-12 rounded-3xl border border-gray-100 shadow-sm">
      <p className="text-gray-600 text-xl font-light leading-relaxed">
        We are building the most trusted gateway to Africa for the diaspora. 
        This section is currently under development to ensure every piece of information we share meets our rigorous standards for safety and cultural integrity.
      </p>
      <div className="mt-12 p-8 bg-[#F5F1E9] rounded-2xl">
        <h3 className="text-[#7C4632] font-bold mb-4 uppercase text-sm tracking-wider">Stay Tuned</h3>
        <p className="text-[#1E3A34]">For urgent inquiries, please book a direct consultation via our home page.</p>
      </div>
    </div>
  </div>
);

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Suspense fallback={<LoadingScreen />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<PlaceholderPage title="Our Story & Vision" />} />
          <Route path="/services" element={<PlaceholderPage title="Relocation & Property Services" />} />
          <Route path="/trust" element={<PlaceholderPage title="The Trust & Protection Protocol" />} />
          <Route path="/contact" element={<PlaceholderPage title="Book Your Consultation" />} />
        </Routes>
      </Suspense>
      <Assistant />
    </Router>
  );
};

export default App;
