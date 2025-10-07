import { useState, useEffect } from 'react';
import { FaChevronCircleUp } from 'react-icons/fa';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        style={{position: 'fixed', backgroundColor: 'transparent', bottom: '20px', right: '20px', padding: '10px', color: '#fff', border: 'none', cursor: 'pointer', zIndex: 1000, boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)', transition: 'opacity 0.3s'}}
        aria-label="Back to top"
      >
        <FaChevronCircleUp size={40} />
      </button>
    )
  );
};