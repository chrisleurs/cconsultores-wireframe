import type { Lang } from "./lang";

export interface NosotrosContent {
  seo: { title: string; description: string };
  breadcrumbCurrent: string;
  heroLabel: string;
  heroH1: string;
  heroIntro: string;
  filo: {
    label: string;
    title: string;
    intro: string;
    items: { num: string; name: string; desc: string }[];
  };
  historia: {
    label: string;
    title: string;
    paragraphs: string[];
    closingHTML: string; // contains <a> links
  };
  lideres: { label: string; payrollLabel: string; teamNote: string };
  vision: { label: string; title: string; p1: string; p2: string };
  cta: { label: string; title: string; cta1: string; cta2: string };
}

const base = (lang: Lang) => (lang === "en" ? "/en/version-c" : "/version-c");

export function getNosotrosContent(lang: Lang): NosotrosContent {
  const b = base(lang);
  if (lang === "en") {
    return {
      seo: {
        title: "About — Accounting Firm in Cancún | Camhaji Consultores",
        description:
          "Meet Camhaji Consultores: an accounting firm in Cancún with over 10 years of experience. Team, values and real commitment.",
      },
      breadcrumbCurrent: "About",
      heroLabel: "ACCOUNTING FIRM IN CANCÚN",
      heroH1: "A Young Accounting Firm With Over 10 Years of Experience",
      heroIntro: "Some firms sell themselves with catalogs. We'd rather tell you who we are.",
      filo: {
        label: "CAMHAJI CONSULTORES — VALUES",
        title: "Our work philosophy",
        intro:
          "We don't have a corporate slogan framed on the wall. We have five principles we apply to every process, with every client:",
        items: [
          { num: "01", name: "We deliver what we promise", desc: "If we say your return will be ready on the 15th, it will be ready on the 15th. Trust is built in the details." },
          { num: "02", name: "Honesty above all", desc: "If your tax situation is complicated, we tell you clearly. If something isn't possible, that too. We don't sell smoke or promise what we can't guarantee." },
          { num: "03", name: "Transparency in every process", desc: "You have the right to know the status of your accounting at any time. And we make sure you can always ask and get a clear answer." },
          { num: "04", name: "Responsibility without excuses", desc: "Your company has obligations with deadlines. Those deadlines are our deadlines. The SAT doesn't wait, and neither do we." },
          { num: "05", name: "Empathy with the client", desc: "For many entrepreneurs, the tax world is opaque and stressful. We don't judge the starting point. We focus on the destination." },
        ],
      },
      historia: {
        label: "CAMHAJI CONSULTORES — JOURNEY",
        title: "How Camhaji Consultores was born",
        paragraphs: [
          "Six years ago, two cousins with different paths within the accounting world sat down to talk about a real problem: their clients needed tax and accounting attention at the same time, and they had to go to two different places to get it.",
          "The solution was simple. One took care of the tax side. The other, of the accounting side. Together, they could offer what neither could give alone: an integrated, coordinated service, with no gaps.",
          "That's how Camhaji Consultores was born.",
        ],
        closingHTML: `Since then, we have grown to a team of 10 people. We have served <a href="${b}/sectores/construccion" class="text-primary hover:underline">construction companies</a>, distributors, <a href="${b}/sectores/resico" class="text-primary hover:underline">freelancers under RESICO</a>, real estate agencies and entrepreneurs who arrived with years of overdue obligations and left with their finances in order.`,
      },
      lideres: {
        label: "ACCOUNTING FIRM LEADERSHIP",
        payrollLabel: "PAYROLL & BILLING TEAM",
        teamNote: "The full Camhaji Consultores team is made up of <strong>10 specialized professionals</strong>. Each area has a lead with a name, experience and direct communication with the client.",
      },
      vision: {
        label: "FIRM VISION IN CANCÚN",
        title: "Our vision",
        p1: "We want Camhaji Consultores to be recognized as the reference firm in Cancún for entrepreneurs who want to do things right. Not through advertising, but through provable results.",
        p2: "A firm where clients know their numbers are in order, where the team has a first and last name, and where commitment isn't a word in a brochure.",
      },
      cta: {
        label: "CONTACT CAMHAJI CONSULTORES",
        title: "Let's talk about your business.",
        cta1: "MESSAGE US ON WHATSAPP",
        cta2: "SEE HOW WE WORK →",
      },
    };
  }

  return {
    seo: {
      title: "Nosotros — Despacho Contable en Cancún | Camhaji Consultores",
      description:
        "Conoce a Camhaji Consultores: despacho contable en Cancún con más de 10 años de trayectoria. Equipo, valores y compromiso real.",
    },
    breadcrumbCurrent: "Nosotros",
    heroLabel: "DESPACHO CONTABLE EN CANCÚN",
    heroH1: "Una firma contable joven con más de 10 años de trayectoria",
    heroIntro: "Hay firmas que se venden con catálogos. Nosotros preferimos contarte quiénes somos.",
    filo: {
      label: "VALORES DE CAMHAJI CONSULTORES",
      title: "Nuestra filosofía de trabajo",
      intro: "No tenemos un slogan corporativo enmarcado en la pared. Tenemos cinco principios que aplicamos en cada proceso, con cada cliente:",
      items: [
        { num: "01", name: "Cumplimos lo que prometemos", desc: "Si decimos que tu declaración estará lista el día 15, estará lista el día 15. La confianza se construye en los detalles." },
        { num: "02", name: "Honestidad sobre todo", desc: "Si tu situación fiscal es complicada, te lo decimos con claridad. Si algo no es posible, también. No vendemos humo ni prometemos lo que no podemos garantizar." },
        { num: "03", name: "Transparencia en cada proceso", desc: "Tienes derecho a saber en qué estado está tu contabilidad en cualquier momento. Y nos aseguramos de que siempre puedas preguntarlo y recibir una respuesta clara." },
        { num: "04", name: "Responsabilidad sin excusas", desc: "Tu empresa tiene obligaciones con fechas. Esas fechas son nuestras fechas. El SAT no espera y nosotros tampoco." },
        { num: "05", name: "Empatía con el cliente", desc: "Para muchos empresarios, el mundo fiscal es opaco y estresante. No juzgamos el punto de partida. Nos enfocamos en el destino." },
      ],
    },
    historia: {
      label: "TRAYECTORIA DE CAMHAJI CONSULTORES",
      title: "Cómo nació Camhaji Consultores",
      paragraphs: [
        "Hace 6 años, dos primos con trayectorias distintas dentro del mundo contable se sentaron a hablar de un problema real: sus clientes necesitaban atención fiscal y contable al mismo tiempo, y tenían que ir a dos lugares distintos para conseguirla.",
        "La solución fue sencilla. Uno se hacía cargo de la parte fiscal. El otro, de la parte contable. Juntos, podían ofrecer lo que ninguno podía dar solo: un servicio integral, coordinado, sin huecos.",
        "Así nació Camhaji Consultores.",
      ],
      closingHTML: `Desde entonces, hemos crecido a un equipo de 10 personas. Hemos atendido <a href="${b}/sectores/construccion" class="text-primary hover:underline">empresas de construcción</a>, comercializadoras, <a href="${b}/sectores/resico" class="text-primary hover:underline">freelancers en RESICO</a>, agencias inmobiliarias y empresarios que llegaron con años de obligaciones atrasadas y salieron con sus finanzas en orden.`,
    },
    lideres: {
      label: "LIDERAZGO DEL DESPACHO CONTABLE",
      payrollLabel: "EQUIPO DE NÓMINA Y FACTURACIÓN",
      teamNote: "El equipo completo de Camhaji Consultores está integrado por <strong>10 profesionales especializados</strong>. Cada área tiene un responsable con nombre, experiencia y comunicación directa con el cliente.",
    },
    vision: {
      label: "VISIÓN DEL DESPACHO EN CANCÚN",
      title: "Nuestra visión",
      p1: "Queremos que Camhaji Consultores sea reconocida como la firma de referencia en Cancún para empresarios que quieren hacer las cosas bien. No por publicidad, sino por resultados comprobables.",
      p2: "Una firma donde los clientes saben que sus números están en orden, donde el equipo tiene nombre y apellido, y donde el compromiso no es una palabra en un folleto.",
    },
    cta: {
      label: "CONTACTA A CAMHAJI CONSULTORES",
      title: "Hablemos de tu negocio.",
      cta1: "ESCRÍBENOS POR WHATSAPP",
      cta2: "CONOCE CÓMO TRABAJAMOS →",
    },
  };
}