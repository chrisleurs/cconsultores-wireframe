import { useState } from "react";
import { Link } from "react-router-dom";
import { Check, ChevronDown, FileText, ArrowLeft } from "lucide-react";

interface Section {
  title: string;
  content: string[];
}

interface PageDoc {
  id: string;
  name: string;
  category: "General" | "Servicios" | "Sectores";
  sections: Section[];
}

const pages: PageDoc[] = [
  {
    id: "home",
    name: "Homepage",
    category: "General",
    sections: [
      {
        title: "Hero",
        content: [
          "DESPACHO CONTABLE · CANCÚN, MÉXICO",
          "Despacho Contable en Cancún con Compromiso Real.",
          "Llevamos la contabilidad, el fiscal y la administración de tu empresa para que tú te dediques a lo que sabes hacer. Sin sorpresas con el SAT. Sin desorden. Sin promesas vacías.",
        ],
      },
      {
        title: "Lo que nos diferencia",
        content: [
          "Lo que nos diferencia de otros despachos contables en Cancún",
          "Atención Inmediata · Todo en un Solo Lugar · Compromiso Real",
        ],
      },
      {
        title: "Diferenciadores",
        content: [
          "Atención Inmediata — Cuando tienes una duda urgente sobre el SAT o necesitas una factura hoy, no puedes esperar tres días. Respondemos el mismo día — por correo o WhatsApp, como prefieras.",
          "Todo en un Solo Lugar — Contabilidad, fiscal, nómina, facturación y administración. Un solo equipo que conoce tu negocio de arriba a abajo.",
          "Para el Negocio que Quiere Hacer las Cosas Bien — Atendemos desde empresas pequeñas hasta medianas. No prometemos milagros fiscales — prometemos que tu empresa estará en regla y que sabrás exactamente qué pasa con tus números.",
        ],
      },
      {
        title: "Servicios",
        content: [
          "01 — Contabilidad y Administración: Registro mensual, conciliación bancaria, declaraciones y control administrativo integral. Para que tus números siempre reflejen lo que realmente está pasando en tu empresa.",
          "02 — Estrategia Fiscal: Cumplimiento correcto de tus obligaciones ante el SAT. No prometemos magia fiscal. Prometemos que no habrá sorpresas.",
          "03 — Nómina Empresarial: Cálculo de nómina, altas y bajas ante el IMSS y CFDI de nómina con CONTPAQi. Sin errores, sin multas, sin retrasos.",
          "04 — Facturación CFDI: Emisión, timbrado y administración de facturas electrónicas para tu empresa. Que ningún comprobante salga mal ni te cueste una deducción.",
        ],
      },
      {
        title: "Cifras",
        content: [
          "10+ AÑOS DE TRAYECTORIA — Antes de ser firma, ya éramos expertos.",
          "6 AÑOS COMO FIRMA — Una sociedad construida para durar.",
          "10 PROFESIONALES — Cada expediente, con nombre propio.",
        ],
      },
      {
        title: "Nuestra historia",
        content: [
          "Camhaji Consultores nació hace 6 años de una idea simple pero poderosa: un despacho donde el área fiscal y el área contable trabajan juntos, bajo el mismo techo, para el mismo cliente. Antes de la firma, nuestro equipo acumuló más de 10 años de trayectoria en grandes firmas, auditoría y administración de empresas en Cancún y la Riviera Maya.",
          "Hoy somos un equipo de 10 profesionales comprometidos con algo concreto: cumplir lo que decimos que vamos a hacer. No más. No menos.",
        ],
      },
      {
        title: "Principios",
        content: [
          "Cumplir la Palabra — Si lo decimos, lo hacemos. Sin pretextos.",
          "Honestidad — Decimos lo que pensamos aunque no sea lo esperado.",
          "Transparencia — No hay letra chica. Tu contabilidad es tuya.",
          "Responsabilidad — Nos hacemos cargo. Siempre, sin condiciones.",
          "Empatía — Nos adaptamos a cada cliente y su realidad.",
        ],
      },
      {
        title: "Sectores",
        content: [
          "Construcción — Costos de obra, estimaciones, subcontratistas, retenciones. Llevamos años en el sector.",
          "Empresas Comerciales — Distribuidoras, comercializadoras y empresas de venta bajo un proceso mensual ordenado.",
          "RESICO — Freelancers, consultores e independientes. Régimen Simplificado de Confianza con acompañamiento real.",
          "Agentes Inmobiliarios — Comisiones inmobiliarias con reglas fiscales específicas. CFDI correcto y régimen óptimo.",
          "Pequeños Negocios — Tienda, taller, restaurante o venta en línea. Si facturas como persona física, te ayudamos.",
        ],
      },
      {
        title: "Testimonios",
        content: [
          "\"Llevábamos años sin claridad en nuestros números. En pocos meses ya sabíamos exactamente cómo estaba la empresa — y dejamos de tenerle miedo al SAT.\" — Director General, empresa comercial · Cancún, QR",
          "\"Cuando tuve dudas a mitad de mes, respondieron ese mismo día. Eso no lo encontraba en el despacho anterior.\" — Propietario, empresa constructora · Cancún, QR",
          "\"Me explicaron el RESICO en términos que entendí. Por primera vez sé cuánto voy a pagar antes de que llegue el 17.\" — Consultora independiente · Cancún, QR",
        ],
      },
      {
        title: "FAQ",
        content: [
          "¿Cuánto cobra un contador en Cancún? — El costo varía según los servicios requeridos. La contabilidad básica para una empresa pequeña puede empezar desde $2,000–$4,000 MXN/mes. Para empresas medianas con nómina y facturación incluidas, el rango es de $5,000–$15,000 MXN/mes. En Camhaji hacemos una cotización personalizada sin costo — cuéntanos tu operación y te damos un número real.",
          "¿Cómo elegir un buen despacho contable en Cancún? — Busca un despacho con equipo certificado, experiencia en tu sector, uso de software actualizado y comunicación clara y accesible. Que te expliquen lo que hacen — no solo que te manden el comprobante de declaración.",
          "¿Qué incluye el servicio de contabilidad mensual? — Solicitud y revisión de documentos, registro contable, conciliación de estado de cuenta con facturas, cálculo de impuestos, llenado de declaraciones y envío al cliente para autorizar el pago. Nos adaptamos al canal que prefiere el cliente — correo o WhatsApp.",
          "¿Atienden empresas fuera de Cancún? — Sí. Trabajamos con empresas en todo Quintana Roo. Nos adaptamos al canal de comunicación del cliente, por lo que la distancia no es un obstáculo.",
          "¿Tienen experiencia con empresas que están atrasadas en el SAT? — Sí. Es uno de los casos más frecuentes con los que llegan nuevos clientes. El primer paso es un diagnóstico de la situación fiscal, sin juicios, para entender exactamente dónde está el problema y qué se necesita para regularizarse.",
        ],
      },
      {
        title: "CTA final",
        content: [
          "Hablemos de tu negocio.",
          "Si llevas tiempo postergando el orden en tu contabilidad, o quieres un despacho que de verdad responda cuando lo necesitas, es buen momento para hablar.",
        ],
      },
    ],
  },
  {
    id: "nosotros",
    name: "Nosotros",
    category: "General",
    sections: [
      {
        title: "Hero",
        content: [
          "NUESTRA FIRMA",
          "El Equipo que Respalda tu Tranquilidad Financiera",
          "Detrás de cada declaración, cada nómina y cada conciliación hay una persona con nombre, experiencia y responsabilidad clara. Estos son algunos de ellos.",
        ],
      },
      {
        title: "Historia",
        content: [
          "Cómo nació Camhaji Consultores",
          "Hace 6 años, dos primos con trayectorias distintas dentro del mundo contable se sentaron a hablar de un problema real: sus clientes necesitaban atención fiscal y contable al mismo tiempo, y tenían que ir a dos lugares distintos para conseguirla.",
          "La solución fue sencilla. Uno se hacía cargo de la parte fiscal. El otro, de la parte contable. Juntos, podían ofrecer lo que ninguno podía dar solo: un servicio integral, coordinado, sin huecos.",
          "Así nació Camhaji Consultores.",
          "Desde entonces, hemos crecido a un equipo de 10 personas. Hemos atendido empresas de construcción, comercializadoras, freelancers en RESICO, agentes inmobiliarios y empresarios que llegaron con años de obligaciones atrasadas y salieron con sus finanzas en orden.",
        ],
      },
      {
        title: "Cifras",
        content: [
          "10+ Años de trayectoria individual",
          "6 Años como firma constituida",
          "10 Profesionales en el equipo",
        ],
      },
      {
        title: "Equipo — Dirección y Gerencia",
        content: [
          "[Fundador — PENDIENTE] · Fundador y Director — [Biografía pendiente — solicitar al cliente: origen profesional, motivación para fundar el despacho, especialidad o sector de mayor experiencia.]",
          "Rogelio Ramón Moo Ruiz · Gerente General — Contador con trayectoria en grandes firmas del sector auditoría y en empresas del ramo hotelero, donde se desempeñó como contralor. Es la mano derecha de la dirección y el responsable de que la operación del despacho funcione con precisión. Comprometido con la firma desde sus primeros años.",
        ],
      },
      {
        title: "Equipo — Administración, Nómina y Facturación",
        content: [
          "Karen Rosado Ortiz · Supervisora Administrativa — Contadora con amplia experiencia en la administración de empresas medianas y grandes. Ha trabajado en firmas reconocidas a nivel nacional. En Camhaji es responsable de cuentas por pagar, cuentas por cobrar y recursos humanos. Su orden y método son dos de los pilares operativos del despacho.",
          "Marlon Rafael Chávez Sánchez · Supervisor de Nómina y Facturación — Especialista en nómina, ley laboral y contribuciones de seguridad social. Domina CONTPAQi con una profundidad que pocos logran. Es el referente interno cuando hay una duda compleja sobre IMSS, Infonavit o el CFDI de nómina. Lo que no sabe Marlon sobre nómina en México, probablemente no exista.",
        ],
      },
      {
        title: "Filosofía",
        content: [
          "No tenemos un slogan corporativo enmarcado en la pared. Tenemos cinco principios que aplicamos en cada proceso, con cada cliente:",
          "01 — Cumplimos lo que prometemos: Si decimos que tu declaración estará lista el día 15, estará lista el día 15. La confianza se construye en los detalles.",
          "02 — Honestidad sobre todo: Si tu situación fiscal es complicada, te lo decimos con claridad. Si algo no es posible, también. No vendemos humo ni prometemos lo que no podemos garantizar.",
          "03 — Transparencia en cada proceso: Tienes derecho a saber en qué estado está tu contabilidad en cualquier momento. Y nos aseguramos de que siempre puedas preguntarlo y recibir una respuesta clara.",
          "04 — Responsabilidad sin excusas: Tu empresa tiene obligaciones con fechas. Esas fechas son nuestras fechas. El SAT no espera y nosotros tampoco.",
          "05 — Empatía con el cliente: Para muchos empresarios, el mundo fiscal es opaco y estresante. No juzgamos el punto de partida. Nos enfocamos en el destino.",
        ],
      },
      {
        title: "Visión",
        content: [
          "Queremos que Camhaji Consultores sea reconocida como la firma de referencia en Cancún para empresarios que quieren hacer las cosas bien. No por publicidad, sino por resultados comprobables.",
          "Una firma donde los clientes saben que sus números están en orden, donde el equipo tiene nombre y apellido, y donde el compromiso no es una palabra en un folleto.",
        ],
      },
      {
        title: "Diferenciadores",
        content: [
          "Respuesta el mismo día — Cuando tienes una duda urgente o necesitas algo, respondemos — no al día siguiente.",
          "Adaptabilidad — Nos comunicamos como el cliente prefiera. Correo, WhatsApp, llamada. Sin rigidez de horario o canal.",
          "Equipo con nombre — 10 profesionales especializados, cada uno responsable de un área concreta. Sabes con quién hablas.",
        ],
      },
    ],
  },
  {
    id: "contacto",
    name: "Contacto",
    category: "General",
    sections: [
      {
        title: "Hero",
        content: [
          "CONTACTO",
          "Hablemos de tu Negocio",
          "Sin compromisos. Sin formularios interminables. Solo una conversación para entender en qué punto está tu empresa y cómo podemos ayudarte.",
        ],
      },
      {
        title: "Formulario",
        content: [
          "Campos: Nombre completo, Empresa (opcional), Servicio de interés (dropdown), Mensaje",
          "Opciones de servicio: Contabilidad, Fiscal, Nómina, Facturación, Sector Construcción, RESICO, Agentes Inmobiliarios, Otro",
          "Respondemos el mismo día en horario de oficina. Si es urgente, escríbenos directamente por WhatsApp.",
        ],
      },
      {
        title: "Datos de contacto",
        content: [
          "WhatsApp: (998) 123-4567",
          "Ubicación: Cancún, Quintana Roo, México",
          "Teléfono: [PENDIENTE]",
          "Correo: [PENDIENTE]",
          "Horario: Lunes a Viernes · [PENDIENTE]",
        ],
      },
    ],
  },
  {
    id: "contabilidad",
    name: "Contabilidad",
    category: "Servicios",
    sections: [
      {
        title: "Hero",
        content: [
          "SERVICIO 01",
          "Contabilidad y Administración para tu Empresa en Cancún",
          "Muchos empresarios llegan con la misma frase: \"Sé que algo está mal, pero no sé qué.\" El resultado es siempre el mismo: incertidumbre y riesgo fiscal.",
        ],
      },
      {
        title: "Adaptabilidad",
        content: [
          "Un servicio que se adapta a tu empresa",
          "Atendemos desde negocios en etapa temprana hasta empresas medianas con operaciones complejas. Tenemos experiencia particular en el sector construcción y en empresas de comercialización en Quintana Roo.",
          "El proceso es el mismo en todos los casos: ordenado, mensual y transparente. Lo que cambia es la profundidad y el volumen de operaciones — no el nivel de atención.",
        ],
      },
      {
        title: "Proceso contable mensual",
        content: [
          "01 — Solicitud de documentación (Día 1–5): A principios de cada mes te pedimos la documentación del periodo anterior por el canal que tú elijas: correo electrónico o WhatsApp. Nos adaptamos a cómo trabaja tu empresa, no al revés.",
          "02 — Revisión y validación (Día 5–10): Revisamos que la documentación esté completa y correcta antes de registrar cualquier cosa. Un error en el origen genera problemas en cascada — lo prevenimos desde aquí.",
          "03 — Registro contable (Día 10–14): Registramos todas las operaciones del periodo conforme a la normatividad contable vigente. Nada queda fuera, nada se registra de más.",
          "04 — Conciliación bancaria (Día 14–17): Comparamos el estado de cuenta con las facturas y comprobantes. Si hay una diferencia, la encontramos y la explicamos antes de seguir.",
          "05 — Cálculo de impuestos y declaraciones (Día 17–20): Calculamos el ISR, IVA y cualquier otra obligación del periodo. Llenamos las declaraciones correspondientes y las revisamos internamente antes de presentarlas.",
          "06 — Envío al cliente para pago (Día 20–25): Te enviamos el resumen del periodo con el monto a pagar, las declaraciones y cualquier observación relevante. Tú autorizas y pagas. Sin sorpresas de último minuto.",
        ],
      },
      {
        title: "Gestión administrativa",
        content: [
          "Gestión administrativa completa para tu negocio",
          "Tesorería centralizada y control de flujo de efectivo",
          "Gestiones y trámites ante autoridades (SAT, IMSS, Infonavit)",
          "Cuentas por cobrar y cuentas por pagar",
          "Recursos humanos operativos",
          "Un solo despacho. Un solo proceso. Todo en orden.",
        ],
      },
      {
        title: "¿Para quién es este servicio?",
        content: [
          "Empresas del sector construcción en Cancún — Costos de obra, subcontratistas, estimaciones y retenciones. Tenemos página dedicada con detalle completo.",
          "Empresas de comercialización en Quintana Roo — Control de inventarios, facturación a clientes, cuentas por cobrar y por pagar para distribuidoras y comercializadoras.",
          "Pymes y medianas empresas en crecimiento — Si tu empresa está creciendo y la contabilidad informal ya no alcanza, es el momento de hacer el cambio.",
        ],
      },
      {
        title: "FAQ",
        content: [
          "¿Qué incluye el servicio de contabilidad mensual? — Solicitud y revisión de documentos, registro contable completo, conciliación bancaria, cálculo de impuestos, llenado de declaraciones y envío al cliente para autorizar el pago. Nos adaptamos al canal de comunicación que prefiere el cliente — correo o WhatsApp.",
          "¿Por qué tercerizar la contabilidad de mi empresa? — Tercerizar la contabilidad significa tener a un equipo especializado que conoce la normatividad vigente, que detecta errores antes de que lleguen al SAT y que te explica lo que pasa con tus números. Es más económico que un contador interno con las mismas capacidades y elimina el riesgo de errores por falta de actualización.",
          "¿Atienden empresas fuera de Cancún? — Sí. Trabajamos con empresas en todo Quintana Roo. Nos adaptamos al canal de comunicación del cliente — correo o WhatsApp — por lo que la distancia no es un obstáculo.",
        ],
      },
    ],
  },
  {
    id: "fiscal",
    name: "Fiscal",
    category: "Servicios",
    sections: [
      {
        title: "Hero",
        content: [
          "SERVICIO 02",
          "Asesoría Fiscal en Cancún: Cumple, no Improvises",
          "El SAT no espera. No negocia plazos informales ni acepta excusas. No los juzgamos. Los resolvemos.",
        ],
      },
      {
        title: "El problema",
        content: [
          "El problema más común que vemos en empresas de Cancún",
          "Hay un patrón que se repite: el empresario sabe que algo está mal con su situación fiscal, pero no sabe exactamente qué. A veces llegó con años de declaraciones sin presentar. Otras veces tiene un crédito fiscal en el portal del SAT que apareció sin que lo esperara.",
          "El resultado en todos los casos es el mismo: incertidumbre permanente y riesgo real de multas, recargos y auditorías.",
        ],
      },
      {
        title: "Enfoque",
        content: [
          "Cumplimiento correcto, sin atajos",
          "Nuestra asesoría fiscal en Cancún no se centra en pagar lo mínimo posible. Se centra en pagar lo justo — ni más, ni menos — cumpliendo correctamente con todas las obligaciones que la ley establece para tu empresa.",
          "No ofrecemos esquemas grises ni estrategias que hoy funcionan y mañana generan problemas. Ofrecemos algo más valioso: la tranquilidad de saber que tu empresa está en regla.",
        ],
      },
      {
        title: "Qué incluye",
        content: [
          "01 — Diagnóstico inicial de situación fiscal: Antes de cualquier cosa, revisamos el estado real de tu empresa ante el SAT: obligaciones vigentes, declaraciones presentadas, créditos fiscales pendientes y cumplimiento por régimen. Sin diagnóstico no hay estrategia.",
          "02 — Cumplimiento de obligaciones mensuales: IVA, ISR, IMSS, declaraciones informativas. Cada obligación en su fecha, correctamente calculada y presentada.",
          "03 — Declaración anual: La declaración anual es uno de los momentos de mayor riesgo fiscal. La preparamos con tiempo, la revisamos a detalle y la presentamos antes de que el SAT tenga que recordártelo.",
          "04 — Atención a requerimientos del SAT: Si ya recibiste una carta del SAT, no la ignores. Te acompañamos en el proceso de respuesta, reunimos la documentación necesaria y gestionamos la resolución dentro de los plazos legales.",
          "05 — Normatividad aplicable a tu sector: Las constructoras, las comercializadoras, los agentes inmobiliarios y quienes están en RESICO tienen obligaciones específicas. Nos aseguramos de que conozcas y cumplas las que corresponden a tu negocio.",
        ],
      },
      {
        title: "Por qué Camhaji",
        content: [
          "Más de 10 años de trayectoria en el ámbito fiscal — en grandes firmas de auditoría y en la operación directa con clientes de distintos sectores en Cancún. Nuestro equipo conoce cómo funciona el SAT, qué revisa y qué espera. Eso nos permite protegerte con precisión, no con suposiciones.",
        ],
      },
      {
        title: "FAQ",
        content: [
          "¿Qué pasa si tengo obligaciones fiscales atrasadas? — Es más común de lo que imaginas. El primer paso es un diagnóstico: saber exactamente cuánto tiempo llevas atrasado, qué obligaciones están pendientes y cuál es la deuda acumulada con recargos. A partir de ahí trazamos un plan de regularización ordenado, empezando por lo más urgente.",
          "¿Puedo reducir legalmente lo que pago de impuestos? — Sí, dentro de lo que la ley permite: deducciones autorizadas, regímenes adecuados para tu tipo de empresa y estructura correcta de operaciones. Lo que no hacemos es usar esquemas que trasladan el problema al futuro o que te ponen en riesgo ante una auditoría.",
          "¿Atienden requerimientos del SAT ya emitidos? — Sí. Si ya tienes un requerimiento en mano, contáctanos a la brevedad — los plazos de respuesta son cortos y cada día que pasa reduce las opciones disponibles para resolverlo correctamente.",
          "¿Manejan declaraciones anuales de personas físicas con actividad empresarial? — Sí. Atendemos personas morales y físicas con actividad empresarial o profesional, incluyendo quienes tributan en el RESICO. La declaración anual de una persona física tiene sus propias particularidades — sobre todo si tienes ingresos de más de una fuente.",
        ],
      },
    ],
  },
  {
    id: "nomina",
    name: "Nómina",
    category: "Servicios",
    sections: [
      {
        title: "Hero",
        content: [
          "SERVICIO 03",
          "Nómina Empresarial en Cancún: Sin Errores, sin Retrasos",
          "La nómina parece un proceso operativo — hasta que falla. Un error en las cuotas patronales puede derivar en una diferencia con el IMSS que aparece meses después, con recargos incluidos.",
        ],
      },
      {
        title: "El costo de equivocarse",
        content: [
          "El costo real de equivocarse en nómina",
          "Multas por diferencias con el IMSS. Conflictos laborales por finiquitos mal calculados. Trabajadores con recibos que no sirven para nada porque el CFDI tiene errores. Los tres casos tienen una causa común: nómina hecha sin el nivel de especialización que requiere.",
          "Tercerizar la nómina con especialistas no es un gasto extra — es la forma más inteligente de eliminar ese riesgo.",
        ],
      },
      {
        title: "Qué incluye",
        content: [
          "Cálculo de nómina mensual o quincenal",
          "Altas y bajas ante el IMSS e Infonavit",
          "Cálculo de cuotas patronales y aportaciones",
          "Generación de recibos de nómina en CFDI correctamente timbrados",
          "Finiquitos, liquidaciones y cálculo de prestaciones",
          "Atención a requerimientos del IMSS",
        ],
      },
      {
        title: "CONTPAQi Nómina",
        content: [
          "Usamos CONTPAQi para nómina — el sistema más utilizado en México y reconocido por el SAT y el IMSS. Los cálculos son correctos, los CFDI se timbran sin error y los reportes son compatibles con cualquier revisión o auditoría.",
        ],
      },
      {
        title: "Especialista",
        content: [
          "Marlon Rafael Chávez Sánchez · Supervisor de Nómina y Facturación",
          "Especialista en nómina, ley laboral y contribuciones de seguridad social. Domina CONTPAQi con una profundidad que pocos alcanzan y conoce la Ley Federal del Trabajo con la precisión de quien la aplica cada semana. Cuando contratas nuestro servicio de nómina en Cancún, tienes a Marlon y su equipo trabajando para que ningún número esté mal.",
        ],
      },
      {
        title: "Testimonio",
        content: [
          "\"Antes teníamos errores en el IMSS todos los meses. Desde que Camhaji lleva la nómina, no hemos tenido ni una sola observación.\" — Gerente Administrativo, empresa comercial · Cancún, QR",
          "* Testimonio de referencia — pendiente validación",
        ],
      },
      {
        title: "FAQ",
        content: [
          "¿Cuánto cuesta el servicio de nómina para mi empresa? — El costo depende del número de empleados, la frecuencia de pago (quincenal o mensual) y la complejidad de la operación. Hacemos una cotización personalizada sin costo.",
          "¿Qué pasa si pago mal la nómina en México? — Las consecuencias más comunes son: diferencias con el IMSS por cuotas patronales incorrectas, multas por CFDI de nómina con errores, conflictos laborales por finiquitos mal calculados, y observaciones del IMSS en caso de auditoría.",
          "¿Qué incluye el outsourcing de nómina? — Cálculo de nómina, altas y bajas en IMSS e Infonavit, cálculo de cuotas patronales, emisión de CFDI de nómina, finiquitos, liquidaciones, cálculo de prestaciones y atención a requerimientos del IMSS. Todo con CONTPAQi.",
        ],
      },
    ],
  },
  {
    id: "facturacion",
    name: "Facturación",
    category: "Servicios",
    sections: [
      {
        title: "Hero",
        content: [
          "SERVICIO 04",
          "Facturación CFDI para tu Empresa en Cancún",
          "Un CFDI mal emitido no es solo un problema técnico. Es una factura que el SAT no reconoce, una deducción que tu cliente pierde y una multa que llega meses después.",
        ],
      },
      {
        title: "Por qué tercerizar",
        content: [
          "Por qué tercerizar tu facturación CFDI",
          "Las empresas que facturan por su cuenta cometen los mismos errores una y otra vez: datos del receptor incorrectos, uso del CFDI equivocado, complementos de pago que no cuadran, cancelaciones hechas fuera de tiempo. Ninguno es grave por sí solo. El problema es cuando se acumulan.",
          "Cuando tercerizar con Camhaji, ese problema desaparece. Nosotros emitimos, timbramos, archivamos y revisamos. Tu equipo se dedica a vender.",
        ],
      },
      {
        title: "Qué incluye",
        content: [
          "01 — Emisión de CFDI: Facturas ordinarias, notas de crédito, complementos de pago, CFDI de nómina. Cada tipo con el uso del CFDI correcto, los datos del receptor verificados y el régimen fiscal bien asignado.",
          "02 — Timbrado ante el SAT en tiempo real: Usamos CONTPAQi conectado directamente al SAT. El timbrado es inmediato y el comprobante queda registrado desde el primer momento.",
          "03 — Archivo digital y administración de comprobantes: Todos los CFDI emitidos y recibidos quedan archivados de forma organizada. El SAT exige conservarlos por un mínimo de 5 años.",
          "04 — Verificación de facturas de proveedores: No solo emitimos — también verificamos que los CFDI que recibes de tus proveedores sean válidos y deducibles.",
          "05 — Cancelaciones y sustituciones: Cuando hay un error, lo corregimos con el procedimiento correcto conforme a la normatividad del SAT.",
        ],
      },
      {
        title: "Tecnología",
        content: [
          "CONTPAQi Facturación: el estándar en México",
          "CONTPAQi es el software de facturación más utilizado en México y está integrado directamente con el SAT. Lo usamos porque garantiza compatibilidad, trazabilidad y reportes que funcionan en cualquier revisión.",
        ],
      },
      {
        title: "FAQ",
        content: [
          "¿Qué es el CFDI 4.0 y qué cambió? — El CFDI 4.0 es la versión vigente de la factura electrónica en México desde 2022. Los cambios más relevantes: el código postal del receptor es obligatorio, el régimen fiscal del receptor debe declararse en cada factura, y el uso del CFDI es verificado automáticamente por el SAT.",
          "¿Cómo emitir una factura CFDI correctamente? — Verifica que el RFC del receptor esté activo en el SAT, confirma su código postal y régimen fiscal, selecciona el uso del CFDI adecuado para la operación, indica si el pago es inmediato (PUE) o en crédito (PPD), y emite el complemento de pago cuando se liquide.",
          "¿Qué pasa si emito una factura CFDI con errores? — Si afecta datos fundamentales como RFC, importe o concepto, hay que cancelar el CFDI y reemitirlo. Las cancelaciones tienen plazos.",
          "¿Cuánto tiempo debo conservar mis facturas CFDI? — El SAT exige conservar los CFDI y su representación digital por un mínimo de 5 años. Lo fiscalmente válido es el XML original — no el PDF.",
        ],
      },
    ],
  },
  {
    id: "construccion",
    name: "Construcción",
    category: "Sectores",
    sections: [
      {
        title: "Hero",
        content: [
          "ESPECIALIZACIÓN PRINCIPAL",
          "Contabilidad para Constructoras en Cancún",
          "La contabilidad de una constructora no funciona igual que la de cualquier otra empresa. Si tu contador no conoce el sector, tarde o temprano lo vas a notar — y no de buena manera.",
        ],
      },
      {
        title: "El sector",
        content: [
          "Por qué la construcción necesita contabilidad especializada",
          "Una empresa de servicios factura, cobra y declara con cierta regularidad. Una constructora, no. Sus ingresos entran por estimaciones que no siempre reflejan el avance real. Sus costos se acumulan por etapas durante meses. Sus subcontratistas generan obligaciones de retención que la ley te pone a ti como responsable.",
          "Nosotros ya trabajamos con constructoras en Cancún y la Riviera Maya. Conocemos las particularidades del mercado local, los criterios que el SAT aplica al sector construcción en auditorías, y los errores que se repiten con más frecuencia. Llegamos con experiencia.",
        ],
      },
      {
        title: "Retos fiscales",
        content: [
          "Facturación de estimaciones y anticipos — Las constructoras facturan por avance de obra, anticipos y estimaciones. Cada uno tiene un tratamiento fiscal distinto en IVA e ISR. Un error de clasificación genera diferencias que el SAT detecta — y cobra con recargos.",
          "Retenciones a subcontratistas — Cuando contratas subcontratistas para obra, la ley te obliga a retenerles el 6% de IVA sobre los servicios de construcción. Si no lo haces correctamente, la responsabilidad es tuya — no del subcontratista.",
          "Deducción de materiales y activos de obra — Materiales, herramientas, maquinaria y equipo de construcción tienen formas de deducción distintas entre sí. Deducir mal significa pagar más impuestos de lo necesario o exponer tu empresa a observaciones.",
          "Nómina de trabajadores eventuales — La construcción trabaja con personal por obra y por tiempo determinado. Sus prestaciones son proporcionales a los días trabajados. Sus cuotas al IMSS e Infonavit se calculan de una forma diferente al empleado de planta.",
        ],
      },
      {
        title: "Lo que hacemos",
        content: [
          "Contabilidad mensual adaptada al ciclo de obra y tipo de contrato",
          "Registro y control de costos por proyecto (directos e indirectos)",
          "Facturación de estimaciones, anticipos y complementos de pago",
          "Retenciones correctas a subcontratistas (ISR e IVA)",
          "Declaraciones mensuales y anuales del sector construcción",
          "Nómina de trabajadores eventuales y de planta con altas y bajas en IMSS",
          "Revisión de CFDI de proveedores y materiales para evitar deducciones rechazadas",
          "Respuesta ante requerimientos del SAT relacionados con el sector",
        ],
      },
      {
        title: "Experiencia regional",
        content: [
          "El sector construcción en Cancún y la Riviera Maya tiene dinámicas propias: proyectos turísticos, desarrollos inmobiliarios, obra civil, obra comercial. El volumen de operaciones, los tipos de contrato y el perfil de los subcontratistas son distintos a los de otras regiones del país.",
          "Llevamos años trabajando con empresas de este sector en la región. Conocemos las características del mercado local y los criterios que el SAT aplica en revisiones al sector construcción en Quintana Roo.",
          "No aprendemos contigo. Llegamos con experiencia.",
        ],
      },
      {
        title: "Testimonio",
        content: [
          "\"Llevábamos meses sin claridad en los costos de obra. Camhaji ordenó todo, separó cada proyecto y por primera vez tuvimos números que realmente reflejaban lo que estaba pasando en la empresa.\" — Director General, empresa constructora · Cancún, QR",
          "* Testimonio de referencia — pendiente validación",
        ],
      },
      {
        title: "FAQ",
        content: [
          "¿Qué régimen fiscal usan las constructoras en México? — Las constructoras persona moral usan el Régimen General. Las micro-constructoras persona física pueden tributar en RESICO si sus ingresos no superan $35 millones.",
          "¿Cómo se llevan los costos de obra en contabilidad? — Se clasifican en directos e indirectos y se registran por proyecto. Se reconocen como gasto conforme avanza la obra o al momento de la estimación.",
          "¿Las constructoras deben retener IVA a sus subcontratistas? — Sí. Se retiene el 6% de IVA sobre servicios de construcción y se entera al SAT. No hacerlo pone la responsabilidad en tu empresa.",
          "¿Cómo se manejan los trabajadores eventuales en el IMSS? — Se dan de alta antes de iniciar labores y de baja al terminar. Las cuotas son proporcionales a los días trabajados.",
          "¿Qué pasa si no llevo bien la contabilidad de mi constructora? — Deducciones rechazadas, pago excesivo de impuestos, multas del IMSS y créditos fiscales con recargos.",
        ],
      },
    ],
  },
  {
    id: "comercial",
    name: "Empresas Comerciales",
    category: "Sectores",
    sections: [
      {
        title: "Hero",
        content: [
          "SECTOR",
          "Contabilidad para Empresas Comerciales en Cancún",
          "Si tu empresa compra, vende y distribuye, tienes operaciones constantes que necesitan orden, registro y control puntual.",
        ],
      },
      {
        title: "Lo que necesita una empresa comercial",
        content: [
          "Las empresas de comercialización tienen un volumen alto de transacciones: facturas a clientes, facturas de proveedores, pagos, cobros, devoluciones, notas de crédito. Sin un proceso contable sólido, ese volumen se convierte en desorden — y el desorden en riesgo fiscal.",
          "Declaración mensual de IVA e ISR",
          "Control de inventarios con impacto contable",
          "Facturación CFDI correcta a cada tipo de cliente",
          "Conciliación permanente de CxC y CxP",
        ],
      },
      {
        title: "Lo que hacemos",
        content: [
          "Contabilidad mensual con registro de todas las operaciones del periodo",
          "Control de cuentas por cobrar y cuentas por pagar",
          "Facturación CFDI a clientes y validación de CFDI de proveedores",
          "Declaraciones mensuales de IVA e ISR",
          "Declaración anual",
          "Nómina del equipo de ventas, almacén y administración",
          "Conciliación bancaria mensual",
        ],
      },
      {
        title: "Experiencia",
        content: [
          "Hemos trabajado con distribuidoras, comercializadoras y empresas de venta al mayoreo y menudeo en Quintana Roo. Conocemos los ritmos de temporada del mercado local, la dinámica con proveedores regionales y las particularidades fiscales del sector.",
          "No empezamos a aprender con cada cliente nuevo. Llegamos con experiencia acumulada.",
        ],
      },
      {
        title: "Testimonio",
        content: [
          "\"Por fin tenemos claridad en lo que entra y lo que sale. La conciliación mensual nos ha ahorrado más de un problema con el SAT.\" — Gerente General, empresa distribuidora · Cancún, QR",
          "* Testimonio de referencia — pendiente validación",
        ],
      },
    ],
  },
  {
    id: "inmobiliario",
    name: "Agentes Inmobiliarios",
    category: "Sectores",
    sections: [
      {
        title: "Hero",
        content: [
          "SECTOR",
          "Contabilidad para Agentes Inmobiliarios en Cancún",
          "El mercado inmobiliario de Cancún mueve comisiones altas. Pero muchos agentes llegan a nosotros cuando el SAT ya les mandó una carta.",
        ],
      },
      {
        title: "Obligaciones fiscales",
        content: [
          "ISR sobre comisiones — Cada comisión que recibes es un ingreso gravado. Dependiendo de tu régimen, la tasa puede ir del 1% al 2.5% en RESICO o hasta el 35% en régimen general.",
          "IVA — Si cobras comisiones por intermediación, en la mayoría de los casos el servicio está gravado con IVA al 16%.",
          "Retenciones — Cuando tu cliente es una empresa, está obligada a retenerte parte del ISR e IVA de tu factura.",
          "CFDI obligatorio — Por cada comisión debes emitir una factura electrónica con los datos correctos.",
        ],
      },
      {
        title: "CFDI por comisiones",
        content: [
          "La factura de una comisión inmobiliaria no es igual a la de cualquier servicio. El uso del CFDI, la clave de producto y la forma de pago tienen que ser correctos para que sea deducible para tu cliente y válida para ti.",
          "Los errores más comunes: régimen fiscal incorrecto, clave de servicio equivocada, IVA mal calculado cuando hay retención parcial, y cancelaciones hechas fuera de tiempo.",
          "Con Camhaji, cada CFDI por comisión sale correcto desde el primer momento.",
        ],
      },
      {
        title: "RESICO para agentes inmobiliarios",
        content: [
          "Depende. El RESICO es una opción atractiva si tus ingresos anuales no superan los $3.5 millones de pesos: tasas de ISR bajas, declaración mensual simplificada, menos trámites.",
          "Pero hay condiciones que hay que verificar antes: cómo está constituida tu relación con la inmobiliaria, si tienes empleados, si tienes ingresos de otras fuentes. No es una decisión que deba tomarse sin diagnóstico previo.",
        ],
      },
      {
        title: "Lo que hacemos",
        content: [
          "Diagnóstico de tu situación fiscal actual (régimen, obligaciones, historial)",
          "Emisión correcta de CFDI por cada comisión",
          "Cálculo y declaración mensual de ISR e IVA",
          "Manejo de retenciones de clientes personas morales",
          "Declaración anual",
          "Asesoría sobre si el RESICO es el régimen más conveniente para tu nivel de ingresos",
        ],
      },
      {
        title: "FAQ",
        content: [
          "¿Qué impuestos paga un agente inmobiliario en México? — En RESICO, entre 1% y 2.5% de ISR. En Régimen General, hasta 35% pero con más deducciones. Más IVA del 16%.",
          "¿Cómo facturar comisiones inmobiliarias con CFDI? — Emitir CFDI por el monto de la comisión con concepto de 'servicios de intermediación inmobiliaria'. Incluir retenciones si aplica.",
          "¿Conviene el RESICO para un agente inmobiliario en Cancún? — Para agentes con ingresos por debajo de $3.5M, generalmente sí. Para volúmenes altos o gastos deducibles significativos, puede convenir el Régimen General.",
        ],
      },
    ],
  },
  {
    id: "resico",
    name: "RESICO",
    category: "Sectores",
    sections: [
      {
        title: "Hero",
        content: [
          "SECTOR",
          "Contador para RESICO en Cancún",
          "El RESICO existe para simplificar tus obligaciones fiscales. Pero muchos freelancers, consultores y profesionistas independientes llegan con meses de declaraciones sin presentar, CFDI emitidos con el régimen incorrecto o sin saber si el RESICO realmente les conviene. Nosotros resolvemos eso.",
        ],
      },
      {
        title: "¿Qué es el RESICO?",
        content: [
          "El Régimen Simplificado de Confianza es una opción fiscal para personas físicas con actividad empresarial o ingresos por servicios profesionales que no superen los 3.5 millones de pesos al año. Ofrece tasas de ISR más bajas que el régimen general y una mecánica de declaración más simple.",
          "Pueden tributar en RESICO: freelancers, consultores, diseñadores, arquitectos, médicos, abogados, agentes inmobiliarios y cualquier persona física que preste servicios de forma independiente y cumpla con el límite de ingresos.",
          "Lo que el RESICO no te exime: seguir emitiendo CFDI por cada ingreso, presentar declaraciones mensuales y anuales, y en algunos casos calcular retenciones. Simple no es sinónimo de automático.",
        ],
      },
      {
        title: "Obligaciones fiscales",
        content: [
          "Declaraciones mensuales — ISR antes del día 17 de cada mes, tasas entre 1% y 2.5%.",
          "Declaración anual — En abril, consolidando el ISR del ejercicio.",
          "Facturación CFDI obligatoria — Régimen fiscal correcto y clave de producto adecuada en cada comprobante.",
          "Retenciones — Si tus clientes son personas morales, pueden retenerte parte del IVA e ISR.",
        ],
      },
      {
        title: "Lo que hacemos",
        content: [
          "Cálculo mensual del ISR y presentación de la declaración a tiempo",
          "Emisión correcta de CFDI con régimen fiscal y claves adecuadas",
          "Preparación y presentación de la declaración anual",
          "Revisión y acreditamiento de retenciones de tus clientes",
          "Asesoría sobre si el RESICO es el régimen que más te conviene — o si hay que cambiar",
        ],
      },
      {
        title: "Perfiles que atendemos",
        content: [
          "Freelancers y consultores independientes — Diseñadores, desarrolladores, redactores, fotógrafos, consultores de cualquier especialidad.",
          "Agentes inmobiliarios en Cancún — Comisiones con tratamiento fiscal propio.",
          "Profesionistas independientes — Médicos, abogados, arquitectos, psicólogos, ingenieros.",
          "Prestadores de servicios en general — Cualquier persona física que preste servicios de forma independiente.",
        ],
      },
      {
        title: "Testimonio",
        content: [
          "\"Tenía 8 meses sin presentar declaraciones. Camhaji puso todo al corriente, me explicó qué debía y por qué, y desde entonces no he faltado un mes.\" — Consultora de marketing independiente · Cancún, QR",
          "* Testimonio de referencia — pendiente validación",
        ],
      },
      {
        title: "FAQ",
        content: [
          "¿Qué es el RESICO y quién puede tributar en él? — Personas físicas con ingresos anuales hasta $3.5M: freelancers, consultores, profesionistas independientes, agentes inmobiliarios. Personas morales también bajo otras condiciones.",
          "¿Cuánto se paga de impuestos en el RESICO? — Tasas de 1% a 2.5% mensual sobre ingresos cobrados. Considerablemente menor que el Régimen General (hasta 35%).",
          "¿Puedo cambiarme al RESICO en cualquier momento? — No. Solo en enero de cada año.",
          "¿Qué pasa si mis ingresos superan el límite del RESICO? — El SAT te mueve automáticamente al Régimen General desde ese mes.",
          "¿El RESICO lleva contabilidad electrónica? — Personas físicas no. Personas morales sí. En ambos casos es obligatorio emitir CFDI.",
        ],
      },
    ],
  },
  {
    id: "pequenos-negocios",
    name: "Pequeños Negocios",
    category: "Sectores",
    sections: [
      {
        title: "Hero",
        content: [
          "SECTOR",
          "Contador para tu Pequeño Negocio en Cancún",
          "Tienes un negocio. Trabajas duro. Y en algún momento el SAT, las facturas y los impuestos se volvieron algo que pospones porque no sabes bien por dónde empezar. Eso tiene solución.",
        ],
      },
      {
        title: "¿Este servicio es para ti?",
        content: [
          "Si tienes un negocio propio y facturas como persona física",
          "Comercio y venta de productos — Tienda de abarrotes, ferretería, papelería, distribuidora pequeña, venta de ropa, tianguis con RFC.",
          "Servicios y talleres — Mecánico, carpintero, herrero, plomero, electricista, remodelador.",
          "Restaurantes y food service independiente — Taquería, lonchería, cafetería, servicio de catering.",
          "Venta en línea — Mercado Libre, Etsy, tienda en Instagram, Facebook Marketplace.",
          "Contratistas y constructores persona física — Obra pequeña, remodelaciones o trabajos de construcción.",
        ],
      },
      {
        title: "El problema real",
        content: [
          "El patrón es siempre parecido. El negocio arranca bien, crece poco a poco, y las obligaciones fiscales se van postergando — porque nadie las explicó, porque parecen complicadas, o porque el día a día no deja tiempo para nada más.",
          "Hasta que llega un requerimiento del SAT, un crédito fiscal que apareció \"de la nada\", o un cliente importante que exige facturas en regla para seguir comprando. Regularizar a tiempo es siempre más económico que hacerlo cuando ya hay presión.",
        ],
      },
      {
        title: "Obligaciones fiscales",
        content: [
          "Declaración mensual de ISR — El impuesto sobre la renta se calcula y se declara cada mes. En RESICO, la tasa va del 1% al 2.5% sobre los ingresos.",
          "IVA mensual — Si vendes productos o servicios gravados con IVA, tienes que cobrarlo, declararlo y pagar la diferencia.",
          "Facturación CFDI — Todo ingreso debe tener su comprobante digital timbrado ante el SAT.",
          "Declaración anual — En abril de cada año se consolida el ejercicio fiscal.",
        ],
      },
      {
        title: "RESICO vs Régimen de Actividades Empresariales",
        content: [
          "No hay respuesta universal — depende de cuánto factura tu negocio, qué tipo de gastos tienes y cómo está proyectado crecer.",
          "RESICO Personas Físicas — Si tus ingresos anuales no superan los $3.5 millones, pagas ISR a tasas de entre el 1% y el 2.5%, con un proceso de declaración simplificado.",
          "Régimen de Actividades Empresariales — Puede ser más conveniente si tus ingresos superan ese límite o si tienes gastos deducibles significativos. Las tasas son más altas, pero la deducción real puede hacer que el impuesto efectivo sea menor.",
        ],
      },
      {
        title: "Lo que hacemos",
        content: [
          "Diagnóstico inicial: régimen correcto, historial ante el SAT, obligaciones vigentes y pendientes",
          "Regularización de declaraciones atrasadas si las hay",
          "Declaraciones mensuales de ISR e IVA presentadas en tiempo",
          "Emisión de CFDI correctos por cada venta, cobro o servicio",
          "Declaración anual con acreditamiento de retenciones y cálculo correcto del resultado del ejercicio",
          "Asesoría sobre si en algún momento conviene cambiar a una sociedad (SA de CV o SRL)",
          "Atención a requerimientos del SAT si ya llegó alguna notificación",
        ],
      },
      {
        title: "Experiencia regional",
        content: [
          "Hemos trabajado con dueños de negocios de distintos giros en Quintana Roo — desde comerciantes con una sola tienda hasta contratistas con varios proyectos simultáneos. Conocemos las preguntas que se repiten, los errores más comunes y las situaciones que el SAT revisa con más frecuencia en este segmento. No empezamos a aprender con cada cliente nuevo. Llegamos con experiencia y con respuestas concretas.",
        ],
      },
      {
        title: "Testimonio",
        content: [
          "\"Tenía un negocio desde hacía 3 años y nunca había declarado. Pensé que debía una fortuna. Camhaji revisó todo, me explicó lo que realmente correspondía pagar y lo pusimos al corriente en pocos meses. Mucho menos de lo que esperaba.\" — Dueño de taller · Cancún, QR",
          "* Testimonio de referencia — pendiente de validación",
        ],
      },
      {
        title: "FAQ",
        content: [
          "¿Puede una persona física tener empleados en México? — Sí. Tener empleados no obliga a constituir una sociedad, pero implica cumplir con obligaciones patronales: IMSS, Infonavit, ISN estatal y nómina correcta.",
          "¿Qué régimen fiscal debo usar si tengo un negocio pequeño? — Para la mayoría, el RESICO personas físicas con tasas de 1% a 2.5%. Si tus gastos deducibles son significativos, puede convenir el Régimen de Actividades Empresariales.",
          "¿Qué pasa si tengo un negocio y no declaro? — El SAT cruza información de facturas, depósitos bancarios y plataformas de pago. La regularización voluntaria siempre sale más económica.",
          "Vendo en efectivo y sin factura. ¿El SAT puede saberlo? — El SAT tiene acceso a movimientos bancarios y reportes de plataformas digitales. Depósitos frecuentes sin declarar generan discrepancia fiscal.",
          "¿Cuándo conviene cambiar de persona física a empresa (SA de CV)? — Generalmente cuando los ingresos superan $3.5M anuales, cuando requieres socios formales, o cuando las deducciones como persona moral hacen más eficiente el pago.",
        ],
      },
    ],
  },
];

const categories = ["General", "Servicios", "Sectores"] as const;

export default function RevisionTextos() {
  const [activeId, setActiveId] = useState("home");
  const [approvals, setApprovals] = useState<Record<string, boolean>>({});
  const [mobileOpen, setMobileOpen] = useState(false);

  const activeDoc = pages.find((p) => p.id === activeId)!;
  const approvedCount = Object.values(approvals).filter(Boolean).length;

  const toggleApproval = (id: string) => {
    setApprovals((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="min-h-screen bg-[#F5F3EF] flex flex-col">
      {/* Header */}
      <header className="bg-camhaji-base border-b border-white/[0.06] px-5 md:px-8 py-4 flex items-center justify-between sticky top-0 z-50">
        <div className="flex items-center gap-4">
          <Link to="/" className="flex items-center gap-3 group">
            <ArrowLeft className="w-4 h-4 text-white/40 group-hover:text-white/70 transition-colors" />
            <div className="w-8 h-8 bg-primary rounded-sm flex items-center justify-center">
              <span className="font-serif text-sm font-bold text-white">CC</span>
            </div>
          </Link>
          <div className="hidden md:block">
            <h1 className="font-sans text-sm font-semibold text-white">Revisión de Textos</h1>
            <p className="font-sans text-xs text-white/40">Camhaji Consultores · Sitio Web</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <span className="font-sans text-xs text-white/40">
            {approvedCount}/{pages.length} aprobadas
          </span>
          <div className="w-24 h-1.5 bg-white/[0.08] rounded-full overflow-hidden">
            <div
              className="h-full bg-camhaji-accent rounded-full transition-all duration-500"
              style={{ width: `${(approvedCount / pages.length) * 100}%` }}
            />
          </div>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Mobile dropdown */}
        <div className="md:hidden p-4 bg-white border-b border-border-subtle w-full">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="w-full flex items-center justify-between py-3 px-4 bg-surface rounded-sm font-sans text-sm text-camhaji-text"
          >
            <span className="flex items-center gap-2">
              <FileText className="w-4 h-4 text-camhaji-muted" />
              {activeDoc.name}
            </span>
            <ChevronDown className={`w-4 h-4 text-camhaji-muted transition-transform ${mobileOpen ? "rotate-180" : ""}`} />
          </button>
          {mobileOpen && (
            <div className="mt-2 bg-white rounded-sm border border-border-subtle shadow-lg">
              {categories.map((cat) => (
                <div key={cat}>
                  <p className="px-4 pt-3 pb-1 font-sans text-[10px] font-bold uppercase tracking-[0.15em] text-camhaji-muted/50">{cat}</p>
                  {pages.filter((p) => p.category === cat).map((p) => (
                    <button
                      key={p.id}
                      onClick={() => { setActiveId(p.id); setMobileOpen(false); }}
                      className={`w-full text-left px-4 py-2.5 font-sans text-sm flex items-center gap-2 transition-colors ${activeId === p.id ? "text-primary bg-primary/5" : "text-camhaji-text hover:bg-surface"}`}
                    >
                      {approvals[p.id] ? (
                        <span className="w-2 h-2 rounded-full bg-camhaji-accent flex-shrink-0" />
                      ) : (
                        <span className="w-2 h-2 rounded-full bg-camhaji-muted/20 flex-shrink-0" />
                      )}
                      {p.name}
                    </button>
                  ))}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Sidebar — desktop */}
        <aside className="hidden md:flex flex-col w-[260px] bg-white border-r border-border-subtle flex-shrink-0 overflow-y-auto">
          {categories.map((cat) => (
            <div key={cat} className="py-3">
              <p className="px-5 py-2 font-sans text-[10px] font-bold uppercase tracking-[0.18em] text-camhaji-muted/50">{cat}</p>
              {pages.filter((p) => p.category === cat).map((p) => (
                <button
                  key={p.id}
                  onClick={() => setActiveId(p.id)}
                  className={`w-full text-left px-5 py-2.5 font-sans text-[13px] flex items-center gap-3 transition-all duration-150 ${
                    activeId === p.id
                      ? "text-primary bg-primary/[0.05] font-medium border-r-2 border-primary"
                      : "text-camhaji-text hover:bg-surface"
                  }`}
                >
                  {approvals[p.id] ? (
                    <span className="w-2 h-2 rounded-full bg-camhaji-accent flex-shrink-0" />
                  ) : (
                    <span className="w-2 h-2 rounded-full bg-camhaji-muted/20 flex-shrink-0" />
                  )}
                  {p.name}
                </button>
              ))}
            </div>
          ))}
        </aside>

        {/* Document viewer */}
        <main className="flex-1 overflow-y-auto py-8 md:py-12 px-4 md:px-0">
          <div className="max-w-[816px] mx-auto">
            {/* Document card */}
            <div className="bg-white shadow-[0_1px_3px_rgba(0,0,0,0.06),0_8px_24px_rgba(0,0,0,0.04)] rounded-sm overflow-hidden">
              {/* Document header */}
              <div className="border-b border-border-subtle px-8 md:px-14 py-6 flex items-center justify-between">
                <div>
                  <p className="font-sans text-[10px] font-bold uppercase tracking-[0.18em] text-camhaji-muted/50 mb-1">{activeDoc.category}</p>
                  <h2 className="font-sans text-lg font-bold text-camhaji-text" style={{ letterSpacing: "-0.02em" }}>{activeDoc.name}</h2>
                </div>
                <button
                  onClick={() => toggleApproval(activeDoc.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-sm font-sans text-xs font-semibold uppercase tracking-[0.1em] transition-all duration-200 ${
                    approvals[activeDoc.id]
                      ? "bg-camhaji-accent/10 text-camhaji-accent border border-camhaji-accent/30"
                      : "bg-surface text-camhaji-muted border border-border-subtle hover:border-primary/30 hover:text-primary"
                  }`}
                >
                  {approvals[activeDoc.id] ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      APROBADO
                    </>
                  ) : (
                    "APROBAR TEXTO"
                  )}
                </button>
              </div>

              {/* Document body */}
              <div className="px-8 md:px-14 py-10 md:py-14">
                {activeDoc.sections.map((section, si) => (
                  <div key={si} className={si > 0 ? "mt-10 pt-10 border-t border-border-subtle" : ""}>
                    <h3
                      className="font-sans font-bold text-camhaji-text mb-5"
                      style={{ fontSize: "clamp(16px, 2vw, 20px)", letterSpacing: "-0.01em" }}
                    >
                      {section.title}
                    </h3>
                    <div className="space-y-3">
                      {section.content.map((line, li) => (
                        <p key={li} className="font-sans text-[15px] text-camhaji-muted leading-[1.75]">
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center mt-6 px-2">
              {(() => {
                const currentIdx = pages.findIndex((p) => p.id === activeId);
                const prev = currentIdx > 0 ? pages[currentIdx - 1] : null;
                const next = currentIdx < pages.length - 1 ? pages[currentIdx + 1] : null;
                return (
                  <>
                    {prev ? (
                      <button onClick={() => setActiveId(prev.id)} className="font-sans text-xs text-camhaji-muted hover:text-primary transition-colors">
                        ← {prev.name}
                      </button>
                    ) : <span />}
                    {next ? (
                      <button onClick={() => setActiveId(next.id)} className="font-sans text-xs text-camhaji-muted hover:text-primary transition-colors">
                        {next.name} →
                      </button>
                    ) : <span />}
                  </>
                );
              })()}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
