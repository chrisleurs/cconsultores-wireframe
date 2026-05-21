import danielPhoto from "@/assets/team/daniel-camhaji.jpg";
import rogelioPhoto from "@/assets/team/rogelio-moo.jpg";
import karenPhoto from "@/assets/team/karen-rosado.jpg";
import marlonPhoto from "@/assets/team/marlon-chavez.jpg";

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  /** Short tagline shown under the role (optional) */
  tagline?: string;
  photo: string;
  /** Full biography rendered inside the modal. Supports multiple paragraphs (separated by \n\n). */
  bio: string;
  email?: string;
  phone?: string;
  linkedin?: string;
  /** Logical grouping used by the Nosotros page */
  group: "direccion" | "operacion";
}

export const team: TeamMember[] = [
  {
    id: "daniel-camhaji",
    name: "Daniel Camhaji",
    role: "Socio Fundador y Director",
    tagline: "Estrategia fiscal y dirección general",
    photo: danielPhoto,
    bio:
      "[Biografía pendiente] Daniel Camhaji es el socio fundador y director de Camhaji Consultores. Con más de 10 años de trayectoria previa en grandes firmas de auditoría y consultoría fiscal en CDMX y Cancún, lidera la estrategia fiscal y la dirección general del despacho.\n\nSu visión dio origen a Camhaji Consultores: una Firma donde la consultoría fiscal y la elaboración contable van de la mano, encaminadas a un mismo objetivo — cumplir lo que se promete y dar tranquilidad real al empresario.\n\n[Pendiente de ampliar con formación académica, certificaciones, sectores de especialidad y proyectos representativos.]",
    group: "direccion",
  },
  {
    id: "rogelio-moo",
    name: "Rogelio R. Moo Ruiz",
    role: "Gerente General",
    tagline: "Operación y supervisión contable",
    photo: rogelioPhoto,
    bio:
      "Contador con trayectoria en grandes firmas del sector auditoría y en empresas del ramo hotelero, donde se desempeñó como contralor. Es la mano derecha de la dirección y el responsable de que la operación del despacho funcione con precisión.\n\nComprometido con la firma desde sus primeros años, su rol es asegurar que cada proceso interno —desde la recepción de documentos hasta la entrega de declaraciones— se ejecute con el orden y la puntualidad que distinguen a Camhaji Consultores.",
    group: "direccion",
  },
  {
    id: "karen-rosado",
    name: "Karen Rosado Ortiz",
    role: "Supervisora Administrativa",
    tagline: "Cuentas por pagar, cobrar y RRHH",
    photo: karenPhoto,
    bio:
      "Contadora con amplia experiencia en la administración de empresas medianas y grandes. Ha trabajado en firmas reconocidas a nivel nacional.\n\nEn Camhaji es responsable de cuentas por pagar, cuentas por cobrar y recursos humanos. Su orden y método son dos de los pilares operativos del despacho.",
    group: "operacion",
  },
  {
    id: "marlon-chavez",
    name: "Marlon R. Chávez Sánchez",
    role: "Supervisor de Nómina y Facturación",
    tagline: "IMSS, Infonavit y CFDI de nómina",
    photo: marlonPhoto,
    bio:
      "Especialista en nómina, ley laboral y contribuciones de seguridad social. Domina CONTPAQi con una profundidad que pocos logran.\n\nEs el referente interno cuando hay una duda compleja sobre IMSS, Infonavit o el CFDI de nómina. Lo que no sabe Marlon sobre nómina en México, probablemente no exista.",
    group: "operacion",
  },
];