import { useState, useEffect } from 'react';

const useResponsiveStyles = (mobileStyles, desktopStyles) => {
  const [styles, setStyles] = useState(() => 
    window.innerWidth < 768 ? mobileStyles : desktopStyles
  );

  useEffect(() => {
    const handleResize = () => {
      setStyles(window.innerWidth < 768 ? mobileStyles : desktopStyles);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [mobileStyles, desktopStyles]);

  return styles;
};

export default useResponsiveStyles;