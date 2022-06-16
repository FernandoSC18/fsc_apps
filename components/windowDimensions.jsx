import { useState, useEffect } from 'react';

function getWindowDimensions() {
  return {
    width: 1920, height: 1080
  }
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

export default function WindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}