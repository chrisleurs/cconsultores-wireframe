// Centralized links: blog articles + related services per service slug.
// Used to drive "Lectura recomendada" and "También te puede servir" sections.

export type ServiceSlug = "contabilidad" | "fiscal" | "nomina" | "facturacion";

export interface BlogArticle {
  title: string;
  excerpt: string;
  href: string;
  readingTime: string;
}

export interface RelatedService {
  name: string;
  desc: string;
  href: string;
}

export const blogByService: Record<ServiceSlug, BlogArticle> = {
  contabilidad: {
    title: "Cómo saber si tu contabilidad está bien llevada",
    excerpt:
      "Cinco señales que indican que tu contabilidad mensual está en orden — y cinco que avisan que algo no cuadra antes de que el SAT lo note.",
    href: "/blog/contabilidad-bien-llevada",
    readingTime: "5 min de lectura",
  },
  fiscal: {
    title: "Qué hacer cuando el SAT te manda una carta",
    excerpt:
      "Guía paso a paso para responder un requerimiento del SAT sin perder tiempo, sin pagar de más y sin generar problemas adicionales.",
    href: "/blog/requerimiento-sat-paso-a-paso",
    readingTime: "7 min de lectura",
  },
  nomina: {
    title: "Errores de nómina que terminan en multa del IMSS",
    excerpt:
      "Los descuidos más comunes al calcular cuotas patronales, finiquitos y CFDI de nómina — y cómo evitarlos antes de que se acumulen.",
    href: "/blog/errores-nomina-imss",
    readingTime: "6 min de lectura",
  },
  facturacion: {
    title: "CFDI 4.0: los 7 errores que el SAT detecta primero",
    excerpt:
      "El SAT cruza información en automático. Estos son los errores de facturación que aparecen en sus alertas y cómo dejarlos de cometer.",
    href: "/blog/cfdi-4-errores-comunes",
    readingTime: "8 min de lectura",
  },
};

// Map: para cada servicio, el "siguiente" servicio que más buscan en conjunto.
export const relatedByService: Record<ServiceSlug, RelatedService> = {
  contabilidad: {
    name: "Estrategia Fiscal",
    desc: "Si tu contabilidad ya está en orden, el siguiente paso es pagar lo justo y dormir tranquilo ante el SAT.",
    href: "/version-c/servicios/fiscal",
  },
  fiscal: {
    name: "Contabilidad y Administración",
    desc: "Una estrategia fiscal solo funciona si los números de origen son confiables. Aquí empieza todo.",
    href: "/version-c/servicios/contabilidad",
  },
  nomina: {
    name: "Facturación CFDI",
    desc: "Los CFDI de nómina son solo una parte. Si emites facturas a clientes, conviene tener todo el flujo bajo el mismo equipo.",
    href: "/version-c/servicios/facturacion",
  },
  facturacion: {
    name: "Nómina Empresarial",
    desc: "Quien factura también suele tener equipo. La nómina con CFDI bien emitido evita observaciones cruzadas del SAT.",
    href: "/version-c/servicios/nomina",
  },
};