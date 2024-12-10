import React, { useState, useEffect } from 'react';

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll back to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div>
      {isVisible && (
        <button
          onClick={scrollToTop}
          style={styles.backToTopButton}
        >
          ↑ 
        </button>
      )}
    </div>
  );
};

const styles = {
  backToTopButton: {
    position: 'fixed',
    bottom: '50px',
    right: '30px',
    backgroundColor: '#007BFF',
    color: 'white',
    border: 'none',
    borderRadius: '50%',
    padding: '10px 15px',
    fontSize: '20px',
    cursor: 'pointer',
    boxShadow: '0 2px 5px rgba(0,0,0,0.3)',
    zIndex: 1000,
  },
};

export default BackToTopButton;
