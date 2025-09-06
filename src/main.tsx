import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Bloquear clic derecho e inspección
document.addEventListener('contextmenu', (e) => e.preventDefault());
document.addEventListener('keydown', (e) => {
  // Bloquear F12, Ctrl+Shift+I, Ctrl+Shift+C, Ctrl+U
  if (e.key === 'F12' || 
      (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'C')) ||
      (e.ctrlKey && e.key === 'U')) {
    e.preventDefault();
  }
});

// Bloquear selección de texto
document.addEventListener('selectstart', (e) => e.preventDefault());

createRoot(document.getElementById("root")!).render(<App />);
