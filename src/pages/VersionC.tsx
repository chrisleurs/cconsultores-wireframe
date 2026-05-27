import { useState, useEffect, useRef } from "react";
import { Navbar } from "@/components/Navbar";
import { FooterC } from "@/components/FooterC";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ClientLogos } from "@/components/ClientLogos";
import { SEO } from "@/components/SEO";
import { Phone, ChevronLeft, ChevronRight } from "lucide-react";

import heroBg from "@/assets/hero-cancun-skyline.jpg";
import heroVideo from "@/assets/camhaji-hero-loop.mp4";
import { testimonials as testimonialsData, homeTestimonialsOrder } from "@/data/testimonials";
import { team } from "@/data/team";
import { TeamGrid } from "@/components/TeamGrid";
import { useLang } from "@/i18n/lang";
import { getHomeContent, serviceBgs } from "@/i18n/homeContent";

const homeTestimonials = homeTestimonialsOrder.map((id) => testimonialsData[id]);

/* ── Counter animation hook ── */
function useCountUp(target: number, duration = 1400) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const animated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated.current) {
          animated.current = true;
          const start = performance.now();
          const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);
          function step(ts: number) {
            if (!start) return;
            const progress = Math.min((ts - start) / duration, 1);
            setCount(Math.floor(easeOut(progress) * target));
            if (progress < 1) requestAnimationFrame(step);
            else setCount(target);
          }
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return { count, ref };
}

function CifraCell({ value, suffix, label, context }: { value: number; suffix: string; label: string; context: string }) {
  const { count, ref } = useCountUp(value);
  return (
    <div
      ref={ref}
      className="text-center md:text-left md:px-6 md:border-r md:last:border-r-0 md:border-border-subtle"
    >
      <div
        className="font-serif text-camhaji-base mb-3 flex items-baseline justify-center md:justify-start gap-0.5"
        style={{ fontSize: "clamp(40px, 5.5vw, 68px)", letterSpacing: "-0.03em", lineHeight: 1 }}
      >
        <span>{count}</span>
        {suffix && <span className="text-[0.7em]">{suffix}</span>}
      </div>
      <p className="font-sans text-xs uppercase tracking-[0.12em] text-camhaji-muted leading-relaxed mb-2">
        {label}
      </p>
      <p className="font-sans text-sm font-light text-[#9A9589] leading-relaxed">{context}</p>
    </div>
  );
}

export default function VersionC() {
  const lang = useLang();
  const C = getHomeContent(lang);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [hoveredService, setHoveredService] = useState(0);
  const [testimonialIdx, setTestimonialIdx] = useState(0);
  const totalTestimonials = homeTestimonials.length;
  const nextTestimonial = () => setTestimonialIdx((i) => (i + 1) % totalTestimonials);
  const prevTestimonial = () => setTestimonialIdx((i) => (i - 1 + totalTestimonials) % totalTestimonials);

  return (
    <div className="min-h-screen">
      <SEO
        title={C.seo.title}
        description={C.seo.description}
        path={lang === "en" ? "/en/version-c" : "/version-c"}
        lang={lang}
        altPath="/version-c"
      />
      <Navbar version="c" />

      {/* ══ HERO — left-aligned, full-screen, arc-group style ══ */}
      <section className="min-h-[100dvh] relative flex flex-col items-start justify-center overflow-hidden" style={{ padding: "120px 40px 80px" }}>
        <video
          src={heroVideo}
          autoPlay
          loop
          muted
          playsInline
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-center"
          style={{ animation: "heroDrift 28s ease-in-out infinite alternate" }}
        />
        <img src={heroBg} alt={C.hero.heroImgAlt} className="sr-only" width={1920} height={1080} />
        <div className="absolute inset-0" style={{ background: "rgba(12, 28, 24, 0.84)" }} />
        <div className="relative z-10 flex flex-col items-start max-w-[1200px] mx-auto w-full px-5 md:px-10">
          <p className="label-uppercase text-white/35 mb-12">{C.hero.label}</p>
          <h1 className="font-sans font-bold text-white mb-8" style={{ fontSize: "clamp(40px, 7vw, 96px)", letterSpacing: "-0.04em", lineHeight: 0.95 }}>
            {C.hero.h1.map((line, i) => (
              <span key={i}>{line}{i < C.hero.h1.length - 1 && <br />}</span>
            ))}
          </h1>
          <p className="font-sans text-base font-light text-white/50 mb-12 max-w-[540px]" style={{ fontSize: "clamp(16px, 2vw, 20px)", lineHeight: 1.6 }}>
            {C.hero.intro}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a href="https://wa.me/5215543587159" target="_blank" rel="noopener noreferrer" className="btn-uppercase bg-white text-primary border border-white px-8 py-3.5 hover:bg-camhaji-accent hover:border-camhaji-accent hover:text-camhaji-base transition-all duration-300 w-full sm:w-[220px] text-center inline-flex items-center justify-center">
              {C.hero.ctaWhats}
            </a>
            <a href="#servicios" className="btn-uppercase border border-white/30 text-white/70 hover:text-white hover:border-white/60 transition-all duration-300 px-8 py-3.5 w-full sm:w-[220px] text-center inline-flex items-center justify-center">
              {C.hero.ctaServ}
            </a>
          </div>
        </div>
        {/* Scroll line */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <div className="w-px h-12 bg-white/20 animate-pulse" />
        </div>
      </section>

      <ClientLogos variant="c" />

      {/* ══ STATEMENT + DIFERENCIADORES — unified white section ══ */}
      <section className="bg-white pt-24 pb-24 px-5 md:px-10">
        <div className="max-w-[1200px] mx-auto flex flex-col items-center text-center">
          <p className="label-uppercase text-camhaji-muted mb-10">{C.statement.label}</p>
          <blockquote className="font-sans font-bold text-camhaji-text max-w-[840px] mb-10" style={{ fontSize: "clamp(28px, 4.5vw, 56px)", letterSpacing: "-0.02em", lineHeight: 1.25 }}>
            {C.statement.quote}
          </blockquote>
          <div className="flex gap-0 justify-center flex-wrap border-t border-border-subtle pt-8 max-w-[840px] w-full items-center mb-16">
            {C.statement.chips.map((p, i) => (
              <span key={p} className="flex items-center">
                {i > 0 && <span className="text-[#D0CBC0] text-sm mx-4">·</span>}
                <span className="label-uppercase text-camhaji-muted px-0">{p}</span>
              </span>
            ))}
          </div>
        </div>
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {C.differentiators.map((d) => (
            <div key={d.name}>
              <div className="w-6 h-px bg-primary mb-5" />
              <h3 className="font-sans font-bold text-camhaji-text text-lg mb-3">{d.name}</h3>
              <p className="font-sans text-sm font-light text-camhaji-muted leading-relaxed">{d.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ══ SERVICIOS — dark with background photo that changes on hover ══ */}
      <section
        id="servicios"
        className="min-h-[100dvh] relative flex flex-col overflow-hidden group/services"
        onMouseLeave={() => setHoveredService(null)}
      >
        {/* Background images — one per service, crossfade */}
        {serviceBgs.map((bg, i) => (
          <img
            key={i}
            src={bg}
            alt=""
            aria-hidden="true"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${hoveredService === i ? "opacity-100" : "opacity-0"}`}
            loading={i === 0 ? "eager" : "lazy"}
          />
        ))}
        {/* Dark overlay — lightens on hover so the photo breathes through */}
        <div
          className={`absolute inset-0 transition-colors duration-700 ${
            hoveredService !== null ? "bg-camhaji-base/[0.55]" : "bg-camhaji-base/[0.88]"
          }`}
        />

        <div className="relative z-10 flex flex-col flex-1">
          <div className="flex flex-col md:flex-row justify-between items-baseline max-w-[1200px] mx-auto w-full px-5 md:px-10 pt-20 mb-20 gap-4">
            <p className="label-uppercase text-white/35">{C.services.sectionLabel}</p>
            <p className="font-sans text-base font-light text-white/50 max-w-[360px] md:text-right leading-relaxed">{C.services.sectionSubtitle}</p>
          </div>
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-[1200px] mx-auto w-full">
            {C.services.items.map((s, i) => {
              const isHovered = hoveredService === i;
              const isDimmed = hoveredService !== null && !isHovered;
              return (
                <div
                  key={i}
                  className={`flex flex-col justify-start p-10 transition-all duration-500 ${
                    i < C.services.items.length - 1 ? "lg:border-r border-white/[0.07]" : ""
                  } border-b lg:border-b-0 border-white/[0.07] ${
                    isDimmed ? "opacity-30" : "opacity-100"
                  }`}
                  onMouseEnter={() => setHoveredService(i)}
                >
                  <span
                    className="font-sans text-xs uppercase tracking-[0.22em] mb-8 text-white/[0.25] transition-colors duration-300"
                  >
                    {s.num}
                  </span>
                  <h3
                    className={`font-sans font-bold mb-4 transition-colors duration-300 ${
                      isHovered ? "text-camhaji-accent" : "text-white"
                    }`}
                    style={{ fontSize: "clamp(20px, 3vw, 36px)", letterSpacing: "-0.02em", lineHeight: 1.1 }}
                  >
                    {s.title}
                  </h3>
                  <p
                    className="font-sans text-[15px] font-light leading-relaxed max-w-[280px] mb-8 text-white/65 transition-colors duration-300"
                  >
                    {s.desc}
                  </p>
                  <a
                    href={s.href}
                    className={`label-uppercase border-b pb-0.5 self-start mt-auto transition-colors ${
                      isHovered
                        ? "text-white border-camhaji-accent/60"
                        : "text-white/45 border-white/15 hover:text-white/80"
                    }`}
                  >
                    {s.cta}
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══ CIFRAS — 3-col horizontal with narrative ══ */}
      <section className="bg-surface py-24 px-5 md:px-10">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-[72px] border-b border-border-subtle pb-10 gap-4">
            <p className="label-uppercase text-camhaji-muted">{C.stats.label}</p>
            <h2 className="font-sans font-bold text-camhaji-text max-w-[340px] md:text-right" style={{ fontSize: "clamp(18px, 2.2vw, 26px)", letterSpacing: "-0.02em", lineHeight: 1.3 }}>
              {C.stats.title[0]}<br />{C.stats.title[1]}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {C.stats.items.map((s, i) => (
              <CifraCell key={i} value={s.value} suffix={s.suffix} label={s.label} context={s.context} />
            ))}
          </div>
        </div>
      </section>

      {/* ══ POR QUÉ CAMHAJI — principles list on primary ══ */}
      <section className="min-h-[100dvh] bg-primary flex items-center">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10 py-20 w-full">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <p className="label-uppercase text-white/40">{C.porque.label}</p>
            <h2 className="font-sans font-bold text-white max-w-[360px] md:text-right" style={{ fontSize: "clamp(20px, 2.5vw, 28px)", letterSpacing: "-0.02em", lineHeight: 1.3 }}>
              {C.porque.title}
            </h2>
          </div>

          <div className="max-w-[800px] mb-16">
            <p className="font-sans text-white/60 leading-relaxed mb-8" style={{ fontSize: "clamp(15px, 1.5vw, 17px)" }}>
              {C.porque.para1}
            </p>
            <p className="font-sans text-white/60 leading-relaxed mb-10" style={{ fontSize: "clamp(15px, 1.5vw, 17px)" }}>
              {C.porque.para2}
            </p>
            <a href={C.porque.href} className="label-uppercase text-white/50 hover:text-white transition-colors border-b border-white/20 pb-0.5">
              {C.porque.cta}
            </a>
          </div>

          <div className="border-t border-white/10">
            {C.porque.principles.map((p) => (
              <div key={p.name} className="flex flex-col md:flex-row justify-between md:items-center py-7 border-b border-white/[0.08] hover:translate-x-2.5 transition-transform duration-200 gap-2">
                <span className="font-sans font-bold text-white" style={{ fontSize: "clamp(18px, 2.5vw, 32px)", letterSpacing: "-0.02em" }}>{p.name}</span>
                <span className="font-sans text-[15px] font-light text-white/45 md:text-right max-w-[440px] leading-relaxed">{p.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ SECTORES — dark full-bleed, all 5 visible ══ */}
      <SectoresCarousel sectors={C.sectores.items} sectionLabel={C.sectores.label} sectionTitle={C.sectores.title} />

      {/* ══ EQUIPO — minimal compact ══ */}
      <section className="bg-camhaji-base py-20 md:py-28 px-5 md:px-10">
        <div className="max-w-[1200px] mx-auto">
          <div className="mb-12 md:mb-16 max-w-[560px]">
            <p className="label-uppercase text-white/40 mb-4">{C.equipo.label}</p>
            <h2 className="font-sans font-bold text-white mb-4" style={{ fontSize: "clamp(34px, 4.5vw, 56px)", letterSpacing: "-0.03em", lineHeight: 1.05 }}>
              {C.equipo.title}
            </h2>
            <p className="font-sans font-light text-white/55" style={{ fontSize: "clamp(15px, 1.4vw, 17px)", lineHeight: 1.6 }}>
              {C.equipo.desc}
            </p>
          </div>
          <TeamGrid members={team} tone="dark" columns={4} />
        </div>
      </section>

      {/* ══ TESTIMONIAL — light surface, centered ══ */}
      <section className="min-h-[100dvh] bg-surface flex flex-col items-center justify-center px-5 md:px-10 py-20">
        <div className="max-w-[960px] w-full">
          <div className="flex items-baseline justify-between mb-12 gap-6">
            <p className="label-uppercase text-primary/60">{C.testimonials.label}</p>
            <span className="font-sans text-xs text-camhaji-muted/60 tabular-nums whitespace-nowrap">
              {String(testimonialIdx + 1).padStart(2, "0")} / {String(totalTestimonials).padStart(2, "0")}
            </span>
          </div>

          {/* Quote card */}
          <div className="relative bg-white border border-border-subtle px-6 sm:px-10 md:px-16 py-12 md:py-16 min-h-[420px] md:min-h-[380px] flex flex-col justify-center">
            <span
              className="font-serif text-[120px] md:text-[160px] text-primary/[0.08] leading-none absolute top-4 left-6 md:left-10 select-none pointer-events-none"
              aria-hidden="true"
            >
              "
            </span>
            <blockquote
              key={testimonialIdx}
              className="font-sans font-light text-camhaji-text mb-8 animate-[fadeIn_0.45s_ease-out] relative z-10"
              style={{ fontSize: "clamp(15px, 1.6vw, 19px)", lineHeight: 1.65 }}
            >
              {homeTestimonials[testimonialIdx].quote}
            </blockquote>
            <div className="w-8 h-px bg-primary mb-4" />
            <p className="font-sans text-[14px] font-semibold uppercase tracking-[0.1em] text-camhaji-text mb-1">
              {homeTestimonials[testimonialIdx].author}
            </p>
            <p className="font-sans text-[13px] font-light text-camhaji-muted">
              {homeTestimonials[testimonialIdx].role}
            </p>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-10">
            <div className="flex gap-2">
              {homeTestimonials.map((t, i) => (
                <button
                  key={t.id}
                  onClick={() => setTestimonialIdx(i)}
                  aria-label={`Ver testimonio ${i + 1}`}
                  className={`h-1 transition-all duration-300 ${
                    i === testimonialIdx ? "w-10 bg-primary" : "w-4 bg-border-subtle hover:bg-camhaji-muted/40"
                  }`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button
                onClick={prevTestimonial}
                aria-label="Testimonio anterior"
                className="w-11 h-11 border border-border-subtle flex items-center justify-center hover:bg-white hover:border-primary hover:text-primary transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextTestimonial}
                aria-label="Siguiente testimonio"
                className="w-11 h-11 border border-border-subtle flex items-center justify-center hover:bg-white hover:border-primary hover:text-primary transition-colors"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ══ CTA — solid primary ══ */}
      <section className="min-h-[60dvh] bg-primary flex flex-col items-center justify-center px-5 md:px-10 py-20">
        <div className="max-w-[760px] w-full text-left">
          <p className="label-uppercase text-white/40 mb-6">{C.ctaFinal.label}</p>
          <h2 className="font-sans font-bold text-white mb-6" style={{ fontSize: "clamp(36px, 6vw, 80px)", letterSpacing: "-0.04em", lineHeight: 1.0 }}>
            {C.ctaFinal.title}
          </h2>
          <p className="font-sans text-white/55 max-w-[480px] mb-12" style={{ fontSize: "clamp(15px, 1.5vw, 17px)" }}>
            {C.ctaFinal.desc}
          </p>
          <a href="https://wa.me/5215543587159" target="_blank" rel="noopener noreferrer" className="btn-uppercase bg-white text-primary border border-white px-10 py-4 hover:bg-camhaji-accent hover:border-camhaji-accent hover:text-camhaji-base transition-all duration-300 mb-5 inline-block">
            {C.ctaFinal.cta}
          </a>
          <div className="flex items-center gap-2 mt-5">
            <Phone className="w-3.5 h-3.5 text-white/50" />
            <span className="font-sans text-sm text-white/50">(998) 887-2584</span>
          </div>
        </div>
      </section>

      {/* ══ FAQ — custom toggle ══ */}
      <section className="bg-white py-24 px-5 md:px-10">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-4">
            <p className="label-uppercase text-camhaji-muted">{C.faq.label}</p>
            <h2 className="font-sans font-bold text-camhaji-text" style={{ fontSize: "clamp(28px, 3.5vw, 40px)", letterSpacing: "-0.02em" }}>
              {C.faq.title}
            </h2>
          </div>
          <div>
            {C.faq.items.map((f, i) => {
              const isOpen = openFaq === i;
              return (
                <div key={i} className="border-b border-border-subtle">
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="w-full flex justify-between items-center py-6 text-left"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-baseline gap-4">
                      <span className="font-sans text-xs tracking-[0.1em] text-[#D0CBC0] flex-shrink-0">{String(i + 1).padStart(2, "0")}</span>
                      <span className="font-sans font-semibold text-[17px] text-camhaji-text leading-snug">{f.q}</span>
                    </div>
                    <span className={`font-sans text-2xl font-light text-primary flex-shrink-0 ml-4 transition-transform duration-200 leading-none ${isOpen ? "rotate-45" : ""}`}>+</span>
                  </button>
                  {isOpen && (
                    <p className="pl-11 pb-6 font-sans text-[15px] text-camhaji-muted leading-relaxed">{f.a}</p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <FooterC />
      <WhatsAppButton />
    </div>
  );
}

// ── Sectores Carousel ───────────────────────────────────────────
type Sector = { name: string; desc: string; href: string; img: string; cta: string };

function SectoresCarousel({
  sectors,
  sectionLabel,
  sectionTitle,
}: {
  sectors: Sector[];
  sectionLabel: string;
  sectionTitle: string;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(true);

  const check = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanLeft(el.scrollLeft > 4);
    setCanRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    check();
    el.addEventListener("scroll", check, { passive: true });
    window.addEventListener("resize", check);
    return () => {
      el.removeEventListener("scroll", check);
      window.removeEventListener("resize", check);
    };
  }, []);

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.8;
    el.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  return (
    <section className="bg-camhaji-base py-20">
      <div className="max-w-[1200px] mx-auto w-full px-5 md:px-10 mb-10">
        <div className="flex flex-col md:flex-row justify-between md:items-end gap-6">
          <div>
            <p className="label-uppercase text-white/35 mb-3">{sectionLabel}</p>
            <h2 className="font-sans font-bold text-white max-w-[640px]" style={{ fontSize: "clamp(24px, 3vw, 38px)", letterSpacing: "-0.02em", lineHeight: 1.15 }}>
              {sectionTitle}
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => scroll("left")}
              disabled={!canLeft}
              aria-label="Anterior"
              className="p-3 rounded-full border border-white/15 bg-white/[0.03] text-white transition-all duration-300 disabled:opacity-25 disabled:cursor-not-allowed hover:bg-camhaji-accent hover:border-camhaji-accent hover:text-camhaji-base"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={() => scroll("right")}
              disabled={!canRight}
              aria-label="Siguiente"
              className="p-3 rounded-full border border-white/15 bg-white/[0.03] text-white transition-all duration-300 disabled:opacity-25 disabled:cursor-not-allowed hover:bg-camhaji-accent hover:border-camhaji-accent hover:text-camhaji-base"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-5 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 px-5 md:px-10 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {sectors.map((s) => (
          <a
            key={s.name}
            href={s.href}
            className="group relative flex-shrink-0 snap-start overflow-hidden rounded-sm w-[78vw] sm:w-[55vw] md:w-[420px] lg:w-[460px] h-[520px] md:h-[560px] flex items-end"
          >
            <img
              src={s.img}
              alt={s.name}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-camhaji-base/[0.95] via-camhaji-base/45 to-transparent group-hover:from-camhaji-base/[0.97] group-hover:via-camhaji-base/[0.65] transition-all duration-300" />
            <div className="relative z-10 p-8 md:p-10">
              <h3
                className="font-sans font-bold text-white mb-3 group-hover:text-camhaji-accent transition-colors"
                style={{ fontSize: "clamp(22px, 2.4vw, 30px)", letterSpacing: "-0.02em", lineHeight: 1.1 }}
              >
                {s.name}
              </h3>
              <p className="font-sans text-sm font-light text-white/60 mb-5 leading-relaxed max-w-[340px]">
                {s.desc}
              </p>
              <span className="label-uppercase text-white/45 group-hover:text-white transition-colors">
                {s.cta}
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
