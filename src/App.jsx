// src/App.jsx
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Hero from "./components/layout/Hero";
import './index.css';
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import LoadingScreen from "./components/common/LoadingScreen";
import BusinessSolution from "./pages/BusinessSolution";

function App() {
  const [showContent, setShowContent] = useState(false);

  return (
    <>
      {!showContent && (
        <LoadingScreen onLoadingComplete={() => setShowContent(true)} />
      )}

      {showContent && (
        <>
          <Header />

          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <Footer />
                </>
              }
            />
            <Route path="/business-solutions" element={<BusinessSolution />} />
          </Routes>
        </>
      )}
    </>
  );
}

export default App;
