import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Download, X, Smartphone, Monitor, Wifi, WifiOff } from 'lucide-react';
import { usePWA } from '@/hooks/usePWA';

const PWAInstallPrompt = () => {
  const { isInstallable, isInstalled, isOnline, isUpdateAvailable, installApp, updateApp } = usePWA();
  const [showInstallPrompt, setShowInstallPrompt] = useState(false);
  const [showUpdatePrompt, setShowUpdatePrompt] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    // Show install prompt after 30 seconds if installable and not dismissed
    if (isInstallable && !isInstalled && !dismissed) {
      const timer = setTimeout(() => {
        setShowInstallPrompt(true);
      }, 30000);
      return () => clearTimeout(timer);
    }
  }, [isInstallable, isInstalled, dismissed]);

  useEffect(() => {
    if (isUpdateAvailable) {
      setShowUpdatePrompt(true);
    }
  }, [isUpdateAvailable]);

  const handleInstall = async () => {
    const success = await installApp();
    if (success) {
      setShowInstallPrompt(false);
    }
  };

  const handleUpdate = async () => {
    await updateApp();
    setShowUpdatePrompt(false);
  };

  const handleDismiss = () => {
    setShowInstallPrompt(false);
    setDismissed(true);
    // Remember dismissal for 7 days
    localStorage.setItem('pwa-install-dismissed', (Date.now() + 7 * 24 * 60 * 60 * 1000).toString());
  };

  // Check if dismissal is still valid
  useEffect(() => {
    const dismissedUntil = localStorage.getItem('pwa-install-dismissed');
    if (dismissedUntil && Date.now() < parseInt(dismissedUntil)) {
      setDismissed(true);
    }
  }, []);

  return (
    <>
      {/* Online/Offline Indicator */}
      <div className={`fixed top-20 right-4 z-[9997] transition-all duration-300 ${isOnline ? 'opacity-0' : 'opacity-100'}`}>
        <div className="bg-destructive text-destructive-foreground px-3 py-2 rounded-lg shadow-lg flex items-center gap-2">
          <WifiOff className="h-4 w-4" />
          <span className="text-sm font-medium">Sin conexión</span>
        </div>
      </div>

      {/* Install Prompt */}
      {showInstallPrompt && !isInstalled && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9999] flex items-end justify-center p-4">
          <Card className="w-full max-w-md animate-in slide-in-from-bottom-4 duration-300">
            <CardHeader className="pb-4">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Smartphone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Instalar ALCORE App</CardTitle>
                    <CardDescription>
                      Accede más rápido y úsala sin conexión
                    </CardDescription>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handleDismiss}
                  className="h-8 w-8"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Monitor className="h-4 w-4 text-muted-foreground" />
                    <span>Acceso rápido</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Wifi className="h-4 w-4 text-muted-foreground" />
                    <span>Funciona offline</span>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    onClick={handleDismiss}
                    className="flex-1"
                  >
                    Ahora no
                  </Button>
                  <Button
                    onClick={handleInstall}
                    className="flex-1"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Instalar
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Update Prompt */}
      {showUpdatePrompt && (
        <div className="fixed top-24 right-4 z-[9997]">
          <Card className="w-80 animate-in slide-in-from-right-4 duration-300">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-base">Actualización disponible</CardTitle>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setShowUpdatePrompt(false)}
                  className="h-6 w-6"
                >
                  <X className="h-3 w-3" />
                </Button>
              </div>
              <CardDescription className="text-sm">
                Nueva versión con mejoras y correcciones
              </CardDescription>
            </CardHeader>
            
            <CardContent className="pt-0">
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowUpdatePrompt(false)}
                  className="flex-1"
                >
                  Después
                </Button>
                <Button
                  size="sm"
                  onClick={handleUpdate}
                  className="flex-1"
                >
                  Actualizar
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
};

export default PWAInstallPrompt;