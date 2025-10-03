import { useState, useEffect } from 'react';
import HeroSection from '../../layout/HeroSection';
import EvoxChargeSection from './EvoxChargeSection';
import NetworkSection from './NetworkSection';
import HowToChargeSection from './HowToChargeSection';
import NewsSection from './NewsSection';

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const [sectionsVisible, setSectionsVisible] = useState({
    section1: false,
    section2: false,
    section3: false,
    networkSection: false,
    networkStats: false,
    howToCharge: false,
    newsSection: false
  });

  const [sectionOpacity, setSectionOpacity] = useState({
    hero: 1,
    evoxcharge: 1,
    network: 1,
    howToCharge: 1,
    news: 1
  });

  const [activeStep, setActiveStep] = useState(-1);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      const heroSection = document.getElementById('heroSection');
      const evoxchargeSection = document.getElementById('evoxchargeSection');
      const networkSection = document.getElementById('networkSection');
      const howToChargeSection = document.getElementById('howToCharge');
      const newsSection = document.getElementById('newsSection');

      const calculateOpacity = (element) => {
        if (!element) return 1;
        const rect = element.getBoundingClientRect();
        const elementTop = rect.top;
        const elementHeight = rect.height;
        const windowHeight = window.innerHeight;
        if (elementTop > windowHeight) return 0.3;
        if (elementTop + elementHeight < 0) return 0.2;
        if (elementTop < 0) {
          const scrolledPast = Math.abs(elementTop);
          const fadeDistance = elementHeight * 1.5;
          const rawOpacity = 1 - (scrolledPast / fadeDistance);
          const easedOpacity = Math.pow(rawOpacity, 0.6);
          return Math.max(0.2, Math.min(1, easedOpacity));
        }

        if (elementTop < windowHeight && elementTop > 0) {
          const fadeInDistance = windowHeight * 0.6;
          const rawOpacity = (windowHeight - elementTop) / fadeInDistance;

          const easedOpacity = Math.pow(rawOpacity, 0.5);
          return Math.max(0.3, Math.min(1, easedOpacity));
        }

        return 1;
      };

      setSectionOpacity({
        hero: calculateOpacity(heroSection),
        evoxcharge: calculateOpacity(evoxchargeSection),
        network: calculateOpacity(networkSection),
        howToCharge: calculateOpacity(howToChargeSection),
        news: calculateOpacity(newsSection)
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setSectionsVisible(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      },
      { threshold: 0.3 }
    );

    setTimeout(() => {
      const sections = ['section1', 'section2', 'section3', 'networkSection', 'networkStats', 'howToCharge', 'newsSection'];
      sections.forEach(id => {
        const element = document.getElementById(id);
        if (element) observer.observe(element);
      });
    }, 100);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const howToChargeSection = document.getElementById('howToCharge');
      if (!howToChargeSection) return;

      const rect = howToChargeSection.getBoundingClientRect();
      const sectionTop = rect.top;
      const sectionHeight = rect.height;
      const windowHeight = window.innerHeight;

      if (sectionTop < windowHeight && sectionTop + sectionHeight > 0) {
        const scrollProgress = Math.max(0, Math.min(1, (windowHeight - sectionTop) / (windowHeight * 0.7)));
        const stepIndex = Math.floor(scrollProgress * 5);
        setActiveStep(Math.min(stepIndex, 4));
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <HeroSection
        scrollY={scrollY}
        sectionOpacity={sectionOpacity.hero}
      />

      <EvoxChargeSection
        sectionsVisible={{
          section1: sectionsVisible.section1,
          section2: sectionsVisible.section2,
          section3: sectionsVisible.section3
        }}
        sectionOpacity={sectionOpacity.evoxcharge}
      />

      <NetworkSection
        sectionsVisible={{
          networkSection: sectionsVisible.networkSection,
          networkStats: sectionsVisible.networkStats
        }}
        sectionOpacity={sectionOpacity.network}
      />

      <HowToChargeSection
        sectionsVisible={{
          howToCharge: sectionsVisible.howToCharge
        }}
        activeStep={activeStep}
        sectionOpacity={sectionOpacity.howToCharge}
      />

      <NewsSection
        sectionsVisible={{
          newsSection: sectionsVisible.newsSection
        }}
        sectionOpacity={sectionOpacity.news}
      />
    </>
  );
}
