import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Code2, Terminal, Database, Brackets, GitBranch, Cpu, Cloud, Zap } from "lucide-react";

interface PageTransitionProps {
  children: React.ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [displayChildren, setDisplayChildren] = useState(children);
  const [loadingText, setLoadingText] = useState("Initializing...");
  const location = useLocation();

  useEffect(() => {
    setIsTransitioning(true);
    
    // Simulate tech loading sequence
    const loadingSequence = [
      "Initializing...",
      "Loading modules...",
      "Compiling components...",
      "Rendering interface...",
      "Ready!"
    ];
    
    let currentStep = 0;
    const loadingInterval = setInterval(() => {
      if (currentStep < loadingSequence.length - 1) {
        setLoadingText(loadingSequence[currentStep]);
        currentStep++;
      }
    }, 60);
    
    const timer = setTimeout(() => {
      clearInterval(loadingInterval);
      setDisplayChildren(children);
      setIsTransitioning(false);
    }, 300);

    return () => {
      clearTimeout(timer);
      clearInterval(loadingInterval);
    };
  }, [location.pathname, children]);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Loading overlay with tech elements */}
      <div 
        className={`fixed inset-0 z-50 bg-background transition-all duration-300 ease-in-out ${
          isTransitioning 
            ? 'opacity-100 pointer-events-auto' 
            : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
        
        {/* Floating tech icons */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <Code2 className="absolute top-20 left-20 w-8 h-8 text-accent/30 animate-float" style={{ animationDelay: '0s' }} />
          <Terminal className="absolute top-32 right-32 w-6 h-6 text-primary-light/30 animate-float" style={{ animationDelay: '0.5s' }} />
          <Database className="absolute bottom-32 left-32 w-7 h-7 text-accent/25 animate-float" style={{ animationDelay: '1s' }} />
          <Brackets className="absolute bottom-48 right-48 w-6 h-6 text-primary/30 animate-float" style={{ animationDelay: '1.5s' }} />
          <GitBranch className="absolute top-48 left-1/2 w-5 h-5 text-accent/30 animate-float" style={{ animationDelay: '2s' }} />
          <Cpu className="absolute top-64 right-64 w-6 h-6 text-primary-light/25 animate-float" style={{ animationDelay: '0.3s' }} />
          <Cloud className="absolute bottom-64 left-64 w-7 h-7 text-accent/30 animate-float" style={{ animationDelay: '0.8s' }} />
          <Zap className="absolute top-40 right-40 w-5 h-5 text-primary/25 animate-float" style={{ animationDelay: '1.3s' }} />
        </div>

        {/* Floating code snippets */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-16 right-16 text-accent/10 font-mono text-xs animate-float p-2 code-highlight rounded" style={{ animationDelay: '0.2s' }}>
            {'import React from "react";'}
          </div>
          <div className="absolute bottom-16 left-16 text-primary-light/10 font-mono text-xs animate-float p-2 code-highlight rounded" style={{ animationDelay: '0.7s' }}>
            {'const App = () => { }'}
          </div>
          <div className="absolute top-1/3 right-1/4 text-accent/15 font-mono text-xs animate-float p-2 code-highlight rounded" style={{ animationDelay: '1.2s' }}>
            {'npm run build'}
          </div>
          <div className="absolute bottom-1/3 left-1/4 text-primary/10 font-mono text-xs animate-float p-2 code-highlight rounded" style={{ animationDelay: '1.7s' }}>
            {'git commit -m "update"'}
          </div>
          <div className="absolute top-1/2 left-1/3 text-accent/12 font-mono text-xs animate-float p-2 code-highlight rounded" style={{ animationDelay: '0.5s' }}>
            {'export default Component'}
          </div>
        </div>

        {/* Matrix-like data streams */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-0.5 h-full bg-gradient-to-b from-transparent via-accent/20 to-transparent animate-pulse" style={{ animationDelay: '0s' }} />
          <div className="absolute top-0 left-1/2 w-0.5 h-full bg-gradient-to-b from-transparent via-primary-light/20 to-transparent animate-pulse" style={{ animationDelay: '0.3s' }} />
          <div className="absolute top-0 left-3/4 w-0.5 h-full bg-gradient-to-b from-transparent via-accent/20 to-transparent animate-pulse" style={{ animationDelay: '0.6s' }} />
        </div>
        
        {/* Central loading interface */}
        <div className="flex items-center justify-center h-full relative z-10">
          <div className="text-center">
            {/* Terminal-style window */}
            <div className="glass-card p-6 max-w-sm mx-auto mb-8 border border-accent/20">
              <div className="flex items-center gap-2 mb-4 pb-2 border-b border-border">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
                <span className="text-xs text-muted-foreground ml-2 font-mono">ALCORE Terminal</span>
              </div>
              
              <div className="text-left font-mono text-sm space-y-1">
                <div className="text-accent">$ cd /alcore-website</div>
                <div className="text-muted-foreground">$ npm start</div>
                <div className="text-primary-light">{loadingText}</div>
                <div className="flex items-center gap-1">
                  <span className="text-accent">$</span>
                  <div className="w-2 h-4 bg-accent animate-pulse"></div>
                </div>
              </div>
            </div>

            {/* Logo with pulse effect */}
            <div className="mb-6 animate-pulse">
              <img 
                src="/lovable-uploads/77d0db25-69ef-49e6-b294-6ef7fa9d418f.png" 
                alt="ALCORE Technologies Solutions" 
                className="h-12 mx-auto glow-primary loading-pulse"
              />
            </div>
            
            {/* Progress bar */}
            <div className="w-48 mx-auto mb-4">
              <div className="h-1 bg-muted rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-300 ease-out"
                  style={{ 
                    width: isTransitioning ? '100%' : '0%',
                    transition: 'width 300ms ease-out'
                  }}
                />
              </div>
            </div>

            {/* Loading dots */}
            <div className="flex justify-center space-x-2">
              <div className="w-2 h-2 bg-accent rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
              <div className="w-2 h-2 bg-primary-light rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
              <div className="w-2 h-2 bg-accent rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
            </div>
          </div>
        </div>

        {/* Enhanced sliding panels with tech gradients */}
        <div className="absolute inset-0 pointer-events-none">
          <div 
            className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-r from-primary/20 via-accent/15 to-primary-light/20 transform transition-transform duration-700"
            style={{ 
              transform: isTransitioning ? 'translateX(0)' : 'translateX(-100%)',
              transitionDelay: '0ms'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent" />
            <div className="absolute top-2 left-4 font-mono text-xs text-white/30">
              {'> Rendering components...'}
            </div>
          </div>
          <div 
            className="absolute top-1/3 left-0 w-full h-1/3 bg-gradient-to-r from-accent/20 via-primary/15 to-accent/20 transform transition-transform duration-700"
            style={{ 
              transform: isTransitioning ? 'translateX(0)' : 'translateX(-100%)',
              transitionDelay: '100ms'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent" />
            <div className="absolute top-2 left-4 font-mono text-xs text-white/30">
              {'> Loading assets...'}
            </div>
          </div>
          <div 
            className="absolute top-2/3 left-0 w-full h-1/3 bg-gradient-to-r from-primary-light/20 via-primary/15 to-accent/20 transform transition-transform duration-700"
            style={{ 
              transform: isTransitioning ? 'translateX(0)' : 'translateX(-100%)',
              transitionDelay: '200ms'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent" />
            <div className="absolute top-2 left-4 font-mono text-xs text-white/30">
              {'> Initializing...'}
            </div>
          </div>
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