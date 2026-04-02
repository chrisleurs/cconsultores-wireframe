import { Link } from "react-router-dom";

export default function Index() {
  return (
    <div className="min-h-screen bg-surface flex items-center justify-center px-5">
      <div className="max-w-2xl text-center">
        <div className="w-16 h-16 mx-auto mb-8 flex items-center justify-center bg-primary rounded-sm">
          <span className="font-serif text-2xl font-bold text-white">CC</span>
        </div>
        <h1 className="font-serif text-3xl md:text-4xl font-bold text-camhaji-text mb-4">
          Camhaji Consultores
        </h1>
        <p className="font-sans text-base text-camhaji-muted mb-12 leading-relaxed">
          Selecciona una propuesta para visualizar.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto">
          <Link
            to="/version-c"
            className="block bg-camhaji-base border border-white/[0.08] rounded-sm p-8 hover:border-white/20 transition-colors group"
          >
            <span className="label-uppercase text-white/40 mb-2 block">
              PROPUESTA
            </span>
            <span className="font-sans text-xl font-bold text-white group-hover:text-camhaji-accent transition-colors">
              Digital Confidence
            </span>
            <p className="font-sans text-xs text-white/40 mt-3">
              Preciso · Dark · Cinematic
            </p>
          </Link>

          <Link
            to="/propuesta-seo"
            className="block bg-camhaji-base border border-camhaji-accent/20 rounded-sm p-8 hover:border-camhaji-accent/50 transition-colors group"
          >
            <span className="label-uppercase text-camhaji-accent/60 mb-2 block">
              ESTRATEGIA
            </span>
            <span className="font-sans text-xl font-bold text-white group-hover:text-camhaji-accent transition-colors">
              SEO HiFi
            </span>
            <p className="font-sans text-xs text-white/40 mt-3">
              Keywords · Clusters · Schemas
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
