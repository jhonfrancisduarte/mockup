import { useState } from 'react';
import Hero from "./components/layout/Hero";
import './index.css';
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import LoadingScreen from "./components/common/LoadingScreen";

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
