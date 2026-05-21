// Testimoniales reales — fuente única de verdad.
// `quote` = versión completa para la Home.
// `short` = versión recortada (1-2 frases) para páginas interiores con espacio limitado.

export interface Testimonial {
  id: string;
  quote: string;
  short: string;
  author: string;
  role: string;
}

export const testimonials: Record<string, Testimonial> = {
  edgar: {
    id: "edgar",
    author: "Mtro. Edgar Karim Domínguez",
    role: "Socio de Propiedades Cancún · Dir. de Ventas en Grupo GUÍA",
    quote:
      "Trabajar con Daniel ha sido de las mejores decisiones que he tomado para mí y para mi empresa. Más allá de llevar una contabilidad ordenada, siempre he sentido respaldo, claridad y mucha confianza en cada paso. En los negocios, tener a alguien que cuide tus números, te asesore bien y te ayude a tomar mejores decisiones vale muchísimo. No se trata solo de impuestos o trámites, se trata de tener paz mental y saber que todo está en orden. Después de tantos años trabajando juntos, puedo decir que además de ser un gran contador, es una persona leal, profesional y siempre pendiente de ayudar. Recomiendo a Daniel y a su despacho con los ojos cerrados.",
    short:
      "Más allá de llevar una contabilidad ordenada, siempre he sentido respaldo, claridad y mucha confianza. No se trata solo de impuestos o trámites — se trata de paz mental y saber que todo está en orden.",
  },
  paola: {
    id: "paola",
    author: "Lic. Paola Pérez Corona",
    role: "Dir. General de EcoSupply",
    quote:
      "Llevo trabajando con Camhaji Consultores desde 2020 y ha sido de las mejores decisiones para EcoSupply. Cada mes me presentan un pre cierre fiscal que me permite anticipar impuestos y optimizar gastos con mayor claridad y control. Además, cuentan con un equipo altamente preparado en distintas áreas, lo que me da mucha tranquilidad, y siempre están disponibles cuando los necesito. Su nivel de organización y seguimiento realmente marca la diferencia. Sin duda, los recomiendo para empresas que buscan orden, estrategia y confianza en su contabilidad.",
    short:
      "Cada mes me presentan un pre cierre fiscal que me permite anticipar impuestos y optimizar gastos. Su nivel de organización y seguimiento realmente marca la diferencia.",
  },
  efrain: {
    id: "efrain",
    author: "Ing. Efraín Molineros Mesrage",
    role: "Dir. General de MOME CORP",
    quote:
      "Trabajar con ellos ha sido una gran tranquilidad para nosotros. Se han encargado de nuestra contabilidad con gran profesionalismo, asegurando el cumplimiento puntual de todas nuestras obligaciones fiscales. Además, nos han brindado asesoría clara y estratégica en temas contables, fiscales y de nómina. Destacamos especialmente su apoyo en el proceso de registro y cumplimiento del REPSE, lo cual ha sido clave para nuestra operación como constructora. Son un equipo muy confiable, profesional y siempre atentos.",
    short:
      "Destacamos especialmente su apoyo en el proceso de registro y cumplimiento del REPSE, lo cual ha sido clave para nuestra operación como constructora. Un equipo muy confiable, profesional y siempre atento.",
  },
  david: {
    id: "david",
    author: "Ing. David Camhaji Guzmán",
    role: "Dir. General de Megaled del Sureste",
    quote:
      "Desde 2020, en Megaled hemos confiado plenamente en los servicios contables recibidos, destacando por su atención personalizada, cumplimiento puntual y alto nivel de profesionalismo. Gracias a su acompañamiento constante, hemos mantenido en orden nuestras obligaciones fiscales y atendido de manera eficiente los requerimientos de la autoridad, lo que nos ha permitido enfocarnos en el crecimiento del negocio con total tranquilidad. Más que un proveedor, hemos encontrado un aliado estratégico que aporta valor real a la operación y desarrollo de nuestra empresa.",
    short:
      "Hemos mantenido en orden nuestras obligaciones fiscales y atendido de manera eficiente los requerimientos de la autoridad. Más que un proveedor, un aliado estratégico que aporta valor real.",
  },
  elias: {
    id: "elias",
    author: "Ing. Elias Camhaji Guzmán",
    role: "Dir. General de Ingenierías CAMBI",
    quote:
      "Desde el 2022 hemos trabajado de la mano con su despacho contable, recibiendo un servicio altamente profesional, cercano y orientado a resultados. Su experiencia en la gestión contable y fiscal de contratos de obra y servicios de ingeniería ha sido clave para mantener un control financiero preciso, así como para asegurar el cumplimiento oportuno de nuestras obligaciones fiscales. Destaco especialmente su capacidad de asesoría estratégica y atención puntual a cada detalle requerido en la operación de la empresa. Sin duda, es un aliado confiable para empresas del sector que buscan orden, cumplimiento y eficiencia en su operación.",
    short:
      "Su experiencia en la gestión contable y fiscal de contratos de obra y servicios de ingeniería ha sido clave para mantener un control financiero preciso y asegurar el cumplimiento oportuno de nuestras obligaciones fiscales.",
  },
  luis: {
    id: "luis",
    author: "Luis Carlos Cortés",
    role: "Cofundador y asesor en Here and Now Real Estate",
    quote:
      "Trabajar con Camhaji Consultores ha sido una excelente experiencia. Es un despacho altamente profesional, con gran atención al detalle y un servicio muy confiable. Brindan asesoría clara y soluciones efectivas, lo que genera mucha tranquilidad y confianza en cada proceso. Sin duda muy recomendable.",
    short:
      "Un despacho altamente profesional, con gran atención al detalle y un servicio muy confiable. Asesoría clara y soluciones efectivas que generan tranquilidad y confianza en cada proceso.",
  },
  eduardo: {
    id: "eduardo",
    author: "Ing. Eduardo Bierge Balandran",
    role: "Dir. General de EMC MEP INSTALACIONES",
    quote:
      "Trabajar con Daniel y su equipo ha sido un factor clave en la consolidación y crecimiento de nuestra empresa. Más que un despacho contable, se han convertido en un socio estratégico que opera como una extensión directa de nuestra organización. Su nivel de atención es excepcional: contamos con seguimiento diario, información financiera siempre actualizada y controles internos sólidos que nos permiten tomar decisiones con oportunidad y certeza. Además, su acompañamiento en materia fiscal y regulatoria ha sido integral. Uno de los mayores diferenciadores es su capacidad para analizar, proponer e implementar estrategias fiscales alineadas a los objetivos del negocio, generando eficiencias reales y valor tangible para la empresa.",
    short:
      "Más que un despacho contable, se han convertido en un socio estratégico que opera como una extensión directa de nuestra organización. Información financiera siempre actualizada y controles internos sólidos.",
  },
};

// Orden de aparición en el carrusel de la Home.
export const homeTestimonialsOrder: string[] = [
  "eduardo",
  "edgar",
  "paola",
  "david",
  "efrain",
  "elias",
  "luis",
];