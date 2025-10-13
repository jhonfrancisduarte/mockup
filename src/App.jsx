import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Hero from "./components/layout/Hero";
import './index.css';
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import LoadingScreen from "./components/common/LoadingScreen";
import SocialSidebar from "./components/common/SocialSidebar";
import BusinessSolution from "./pages/BusinessSolution";
import Company from "./pages/Company";
import Support from "./pages/Support";

export default function App() {
  const [showContent, setShowContent] = useState(false);

  return (
    <>
      {!showContent ? (
        <LoadingScreen onLoadingComplete={() => setShowContent(true)} />
      ) : (
        <>
          <Header />

          <main className="app-main">
            <Routes>
              <Route path="/" element={<Hero />} />
              <Route path="/business-solutions" element={<BusinessSolution />} />
              <Route path="/company" element={<Company />} />
              <Route path="/support" element={<Support />} />
            </Routes>
          </main>
          <Footer />
          <SocialSidebar />
        </>
      )}
    </>
  );
}
