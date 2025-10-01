import { useState } from 'react';
import Hero from "./pages/Hero";
import './index.css';
import Header from "./components/Header";
import Footer from "./pages/Footer";
import LoadingScreen from "./components/LoadingScreen";
import MobileApp from "./pages/MobileApp"

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
          <Hero />

          <Footer />
        </>
      )}
    </>
  );
}

export default App;
