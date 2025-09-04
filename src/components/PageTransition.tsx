import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

interface PageTransitionProps {
  children: React.ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [displayChildren, setDisplayChildren] = useState(children);
  const location = useLocation();

  useEffect(() => {
    setIsTransitioning(true);
    
    const timer = setTimeout(() => {
      setDisplayChildren(children);
      setIsTransitioning(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [location.pathname, children]);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Loading overlay */}
      <div 
        className={`fixed inset-0 z-50 bg-background transition-all duration-300 ease-in-out ${
          isTransitioning 
            ? 'opacity-100 pointer-events-auto' 
            : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
        
        {/* Animated logo and loading */}
        <div className="flex items-center justify-center h-full">
          <div className="text-center">
            <div className="mb-8 animate-pulse">
              <img 
                src="/lovable-uploads/04ac750a-ff32-4fc0-b575-89a9aa6bda51.png" 
                alt="ALCORE Logo" 
                className="h-16 mx-auto glow-primary"
              />
            </div>
            
            {/* Loading animation */}
            <div className="flex justify-center space-x-2 mb-4">
              <div className="w-2 h-2 bg-accent rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
              <div className="w-2 h-2 bg-primary-light rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
              <div className="w-2 h-2 bg-accent rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
            </div>
            
            <p className="text-muted-foreground font-mono text-sm">
              Loading...
            </p>
          </div>
        </div>

        {/* Sliding panels effect */}
        <div className="absolute inset-0 pointer-events-none">
          <div 
            className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-r from-primary/10 to-accent/10 transform transition-transform duration-500"
            style={{ 
              transform: isTransitioning ? 'translateX(0)' : 'translateX(-100%)',
              transitionDelay: '0ms'
            }}
          />
          <div 
            className="absolute top-1/3 left-0 w-full h-1/3 bg-gradient-to-r from-accent/10 to-primary-light/10 transform transition-transform duration-500"
            style={{ 
              transform: isTransitioning ? 'translateX(0)' : 'translateX(-100%)',
              transitionDelay: '100ms'
            }}
          />
          <div 
            className="absolute top-2/3 left-0 w-full h-1/3 bg-gradient-to-r from-primary-light/10 to-primary/10 transform transition-transform duration-500"
            style={{ 
              transform: isTransitioning ? 'translateX(0)' : 'translateX(-100%)',
              transitionDelay: '200ms'
            }}
          />
        </div>
      </div>

      {/* Page content */}
      <div 
        className={`transition-all duration-500 ease-out ${
          isTransitioning 
            ? 'opacity-0 transform scale-95' 
            : 'opacity-100 transform scale-100'
        }`}
      >
        {displayChildren}
      </div>
    </div>
  );
};

export default PageTransition;