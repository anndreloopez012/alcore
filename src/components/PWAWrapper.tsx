import { useEffect } from 'react';

interface PWAWrapperProps {
  children: React.ReactNode;
}

const PWAWrapper = ({ children }: PWAWrapperProps) => {
  useEffect(() => {
    // Ensure PWA is fully functional
    const handlePWALoad = () => {
      // Force show all content in PWA mode
      const allElements = document.querySelectorAll('*');
      allElements.forEach(el => {
        const element = el as HTMLElement;
        if (element.style.display === 'none' && !element.hasAttribute('data-pwa-hidden')) {
          element.style.display = '';
        }
        if (element.style.visibility === 'hidden' && !element.hasAttribute('data-pwa-hidden')) {
          element.style.visibility = 'visible';
        }
      });
    };

    // Check if running as PWA
    const isPWA = window.matchMedia('(display-mode: standalone)').matches ||
                  (window.navigator as any).standalone ||
                  document.referrer.includes('android-app://');

    if (isPWA) {
      handlePWALoad();
      // Also run after a short delay to catch any delayed content
      setTimeout(handlePWALoad, 1000);
    }

    // Listen for display mode changes
    const mediaQuery = window.matchMedia('(display-mode: standalone)');
    mediaQuery.addEventListener('change', handlePWALoad);

    return () => {
      mediaQuery.removeEventListener('change', handlePWALoad);
    };
  }, []);

  return <>{children}</>;
};

export default PWAWrapper;