import React, { useEffect, useState } from 'react';

const ScrollToTopArrow: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 200);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`fixed right-6 bottom-6 z-50 p-3 rounded-full bg-blue-700 text-white shadow-lg transition-opacity duration-300 hover:bg-blue-900 focus:outline-none ${visible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      style={{ transition: 'opacity 0.3s' }}
    >
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="19" x2="12" y2="5"/><polyline points="5 12 12 5 19 12"/></svg>
    </button>
  );
};

export default ScrollToTopArrow;
