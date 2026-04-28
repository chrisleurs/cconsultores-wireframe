import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import VersionC from "./pages/VersionC.tsx";
import ServicioContabilidadC from "./pages/c/ServicioContabilidadC.tsx";
import SectorConstruccionC from "./pages/c/SectorConstruccionC.tsx";
import NosotrosC from "./pages/c/NosotrosC.tsx";
import ContactoC from "./pages/c/ContactoC.tsx";
import ServicioFiscalC from "./pages/c/ServicioFiscalC.tsx";
import ServicioNominaC from "./pages/c/ServicioNominaC.tsx";
import ServicioFacturacionC from "./pages/c/ServicioFacturacionC.tsx";
import SectorComercialC from "./pages/c/SectorComercialC.tsx";
import SectorInmobiliarioC from "./pages/c/SectorInmobiliarioC.tsx";
import SectorResicoC from "./pages/c/SectorResicoC.tsx";
import SectorPequenosNegociosC from "./pages/c/SectorPequenosNegociosC.tsx";
import PropuestaSEO from "./pages/PropuestaSEO.tsx";
import RevisionTextos from "./pages/RevisionTextos.tsx";
import NotFound from "./pages/NotFound.tsx";
import SectionReveal from "./components/SectionReveal";
import { LocalBusinessJsonLd } from "./components/SEO";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
      <LocalBusinessJsonLd />
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <SectionReveal />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/propuesta-seo" element={<PropuestaSEO />} />
          <Route path="/revision-textos" element={<RevisionTextos />} />
          <Route path="/version-c" element={<VersionC />} />
          <Route path="/version-c/servicios/contabilidad" element={<ServicioContabilidadC />} />
          <Route path="/version-c/servicios/fiscal" element={<ServicioFiscalC />} />
          <Route path="/version-c/servicios/nomina" element={<ServicioNominaC />} />
          <Route path="/version-c/servicios/facturacion" element={<ServicioFacturacionC />} />
          <Route path="/version-c/sectores/construccion" element={<SectorConstruccionC />} />
          <Route path="/version-c/sectores/comercial" element={<SectorComercialC />} />
          <Route path="/version-c/sectores/inmobiliario" element={<SectorInmobiliarioC />} />
          <Route path="/version-c/sectores/resico" element={<SectorResicoC />} />
          <Route path="/version-c/sectores/pequenos-negocios" element={<SectorPequenosNegociosC />} />
          <Route path="/version-c/nosotros" element={<NosotrosC />} />
          <Route path="/version-c/contacto" element={<ContactoC />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
