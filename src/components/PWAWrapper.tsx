import { useEffect } from 'react';

interface PWAWrapperProps {
  children: React.ReactNode;
}

const PWAWrapper = ({ children }: PWAWrapperProps) => {
  useEffect(() => {
    // Simple PWA optimizations without intrusive modifications
    const isPWA = window.matchMedia('(display-mode: standalone)').matches ||
                  (window.navigator as any).standalone ||
                  document.referrer.includes('android-app://');

    if (isPWA) {
      // Add PWA class to body for styling
      document.body.classList.add('pwa-mode');
      
      // Ensure proper viewport handling
      const viewport = document.querySelector('meta[name="viewport"]');
      if (viewport) {
        viewport.setAttribute('content', 
          'width=device-width, initial-scale=1.0, viewport-fit=cover, user-scalable=no'
        );
      }
    }

    return () => {
      document.body.classList.remove('pwa-mode');
    };
  }, []);

  return <>{children}</>;
};

export default PWAWrapper;