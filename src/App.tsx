import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import VersionA from "./pages/VersionA.tsx";
import VersionB from "./pages/VersionB.tsx";
import ServicioContabilidadA from "./pages/a/ServicioContabilidadA.tsx";
import SectorConstruccionA from "./pages/a/SectorConstruccionA.tsx";
import NosotrosA from "./pages/a/NosotrosA.tsx";
import ContactoA from "./pages/a/ContactoA.tsx";
import ServicioContabilidadB from "./pages/b/ServicioContabilidadB.tsx";
import SectorConstruccionB from "./pages/b/SectorConstruccionB.tsx";
import NosotrosB from "./pages/b/NosotrosB.tsx";
import ContactoB from "./pages/b/ContactoB.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/version-a" element={<VersionA />} />
          <Route path="/version-a/servicios/contabilidad" element={<ServicioContabilidadA />} />
          <Route path="/version-a/sectores/construccion" element={<SectorConstruccionA />} />
          <Route path="/version-a/nosotros" element={<NosotrosA />} />
          <Route path="/version-a/contacto" element={<ContactoA />} />
          <Route path="/version-b" element={<VersionB />} />
          <Route path="/version-b/servicios/contabilidad" element={<ServicioContabilidadB />} />
          <Route path="/version-b/sectores/construccion" element={<SectorConstruccionB />} />
          <Route path="/version-b/nosotros" element={<NosotrosB />} />
          <Route path="/version-b/contacto" element={<ContactoB />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
