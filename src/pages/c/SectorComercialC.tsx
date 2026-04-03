import { Navbar } from "@/components/Navbar";
import { FooterC } from "@/components/FooterC";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Phone } from "lucide-react";

const loQueHacemos = [
  "Contabilidad mensual con registro de todas las operaciones del periodo",
  "Control de cuentas por cobrar y cuentas por pagar",
  "Facturación CFDI a clientes y validación de CFDI de proveedores",
  "Declaraciones mensuales de IVA e ISR",
  "Declaración anual",
  "Nómina del equipo de ventas, almacén y administración",
  "Conciliación bancaria mensual",
];

export default function SectorComercialC() {
  return (
    <div className="min-h-screen">
      <Navbar version="c" />

      {/* HERO */}
      <section className="min-h-[75dvh] relative flex items-end">
        <img src="https://images.unsplash.com/photo-1556740758-90de374c12ad?w=1600&h=900&fit=crop" alt="Empresa comercial" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-camhaji-base/95 via-camhaji-base/60 to-camhaji-base/30" />
        <div className="relative z-10 px-5 md:px-10 lg:px-16 pb-16 pt-32 w-full max-w-[1200px] mx-auto">
          <p className="font-sans text-xs text-white/30 mb-8">
            <a href="/version-c" className="hover:text-white/50 transition-colors">Inicio</a>
            <span className="text-white/15 mx-2">/</span><span>Sectores</span>
            <span className="text-white/15 mx-2">/</span><span>Comercial</span>
          </p>
          <p className="label-uppercase text-camhaji-accent/70 mb-6">SECTOR</p>
          <h1 className="font-sans font-bold text-white" style={{ fontSize: "clamp(40px, 7vw, 88px)", letterSpacing: "-0.04em", lineHeight: 0.95 }}>
            Contabilidad para Empresas<br />Comerciales en Cancún
          </h1>
          <p className="font-sans text-white/50 mt-6 max-w-[560px]" style={{ fontSize: "clamp(16px, 1.6vw, 19px)", lineHeight: 1.6 }}>
            Si tu empresa compra, vende y distribuye, tienes operaciones constantes que necesitan orden, registro y control puntual.
          </p>
        </div>
      </section>

      {/* LO QUE NECESITA */}
      <section className="bg-white py-24 px-5 md:px-10">
        <div className="max-w-[900px] mx-auto">
          <p className="label-uppercase text-camhaji-muted mb-4">EL SECTOR</p>
          <h2 className="font-sans font-bold text-camhaji-text mb-8" style={{ fontSize: "clamp(24px, 3.5vw, 40px)", letterSpacing: "-0.03em" }}>
            Lo que necesita una empresa comercial para estar en regla
          </h2>
          <p className="font-sans text-[16px] font-light text-camhaji-muted leading-relaxed mb-8">
            Las empresas de comercialización tienen un volumen alto de transacciones: facturas a clientes, facturas de proveedores, pagos, cobros, devoluciones, notas de crédito. Sin un proceso contable sólido, ese volumen se convierte en desorden — y el desorden en riesgo fiscal.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {["Declaración mensual de IVA e ISR", "Control de inventarios con impacto contable", "Facturación CFDI correcta a cada tipo de cliente", "Conciliación permanente de CxC y CxP"].map((item) => (
              <div key={item} className="flex items-start gap-3 py-3">
                <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-2" />
                <span className="font-sans text-[15px] text-camhaji-text">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LO QUE HACEMOS */}
      <section className="bg-camhaji-base py-24 px-5 md:px-10">
        <div className="max-w-[900px] mx-auto">
          <p className="label-uppercase text-white/30 mb-4">LO QUE HACEMOS</p>
          <h2 className="font-sans font-bold text-white mb-16" style={{ fontSize: "clamp(24px, 3vw, 36px)", letterSpacing: "-0.02em" }}>
            Nuestro servicio para empresas comerciales en Quintana Roo
          </h2>
          <div className="border-t border-white/[0.08]">
            {loQueHacemos.map((item, i) => (
              <div key={i} className="flex items-start gap-4 py-4 border-b border-white/[0.06] hover:translate-x-2.5 transition-transform duration-200">
                <span className="w-2 h-2 rounded-full bg-camhaji-accent flex-shrink-0 mt-2" />
                <span className="font-sans text-[15px] text-white/70 leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCIA */}
      <section className="bg-surface py-24 px-5 md:px-10">
        <div className="max-w-[900px] mx-auto">
          <p className="label-uppercase text-camhaji-muted mb-4">EXPERIENCIA</p>
          <h2 className="font-sans font-bold text-camhaji-text mb-8" style={{ fontSize: "clamp(22px, 3vw, 36px)", letterSpacing: "-0.02em" }}>
            Experiencia en el sector comercial de Cancún
          </h2>
          <p className="font-sans text-[16px] font-light text-camhaji-muted leading-relaxed mb-6">
            Hemos trabajado con distribuidoras, comercializadoras y empresas de venta al mayoreo y menudeo en Quintana Roo. Conocemos los ritmos de temporada del mercado local, la dinámica con proveedores regionales y las particularidades fiscales del sector.
          </p>
          <p className="font-sans font-semibold text-primary">No empezamos a aprender con cada cliente nuevo. Llegamos con experiencia acumulada.</p>
        </div>
      </section>

      {/* TESTIMONIO */}
      <section className="bg-camhaji-base py-20 px-5 md:px-10">
        <div className="max-w-[800px] mx-auto text-center">
          <span className="font-serif text-[80px] text-white/[0.08] leading-none block -mb-8" aria-hidden="true">"</span>
          <blockquote className="font-serif italic text-white/80 mb-8" style={{ fontSize: "clamp(18px, 2.5vw, 28px)", lineHeight: 1.5 }}>
            "Por fin tenemos claridad en lo que entra y lo que sale. La conciliación mensual nos ha ahorrado más de un problema con el SAT."
          </blockquote>
          <p className="font-sans text-[13px] uppercase tracking-[0.15em] text-white/40">Gerente General, empresa distribuidora · Cancún, QR</p>
          <p className="font-sans text-xs text-white/20 mt-4 italic">* Testimonio de referencia — pendiente validación</p>
        </div>
      </section>

      {/* CTA */}
      <section className="min-h-[60dvh] bg-primary flex flex-col items-center justify-center text-center px-5 md:px-10 py-20">
        <p className="label-uppercase text-white/40 mb-6">¿TU EMPRESA COMERCIAL NECESITA CONTABILIDAD ORDENADA?</p>
        <h2 className="font-sans font-bold text-white mb-6" style={{ fontSize: "clamp(36px, 6vw, 80px)", letterSpacing: "-0.04em", lineHeight: 1.0 }}>
          Hablemos de tu operación.
        </h2>
        <p className="font-sans text-white/55 max-w-[480px] mx-auto mb-12" style={{ fontSize: "clamp(15px, 1.5vw, 17px)" }}>
          Cuéntanos cómo está tu operación. Si hay desorden, lo ordenamos. Si ya tienes proceso, te decimos cómo mejorarlo.
        </p>
        <a href="/version-c/contacto" className="btn-uppercase border border-white/50 text-white px-10 py-4 hover:bg-white/10 hover:border-white transition-all duration-300 mb-5">
          ESCRÍBENOS POR WHATSAPP
        </a>
        <div className="flex items-center gap-2">
          <Phone className="w-3.5 h-3.5 text-white/40" />
          <span className="font-sans text-sm text-white/50">(998) 123-4567</span>
        </div>
      </section>

      <FooterC />
      <WhatsAppButton />
    </div>
  );
}
