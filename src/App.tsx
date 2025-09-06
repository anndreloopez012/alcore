import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageTransition from "./components/PageTransition";
import PWAWrapper from "./components/PWAWrapper";
import Index from "./pages/Index";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";
import ContactCardPage from "./pages/ContactCardPage";
import CloudServersPage from "./pages/CloudServersPage";
import ServerCXPage from "./pages/ServerCXPage";
import ServerCPXPage from "./pages/ServerCPXPage";
import ServerCAXPage from "./pages/ServerCAXPage";
import ServerCCXPage from "./pages/ServerCCXPage";
import CustomDevelopmentPage from "./pages/CustomDevelopmentPage";
import ProductsPage from "./pages/ProductsPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <PWAWrapper>
        <Toaster />
        <Sonner />
        <BrowserRouter>
        <PageTransition>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/proyectos" element={<ProjectsPage />} />
          <Route path="/servidores-cloud" element={<CloudServersPage />} />
          <Route path="/servidores-cloud/cx" element={<ServerCXPage />} />
          <Route path="/servidores-cloud/cpx" element={<ServerCPXPage />} />
          <Route path="/servidores-cloud/cax" element={<ServerCAXPage />} />
          <Route path="/servidores-cloud/ccx" element={<ServerCCXPage />} />
          <Route path="/desarrollo-medida" element={<CustomDevelopmentPage />} />
          <Route path="/productos" element={<ProductsPage />} />
            <Route path="/contacto" element={<ContactPage />} />
            <Route path="/tarjeta" element={<ContactCardPage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </PageTransition>
        </BrowserRouter>
      </PWAWrapper>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
