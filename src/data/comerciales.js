import Tvc from "../assets/videos/3d/1.SECRET_TVC_20_LIMPIAVIDRIOS_M.mp4";
import Secret from "../assets/videos/compo/secret.mp4";
import Bancoppel from "../assets/videos/compo/Bancoppel_30s_V1_R1_Luciernagas_Aprobada_23052022.mp4";
import Diddi from "../assets/videos/compo/DIDI.mp4";
import Esperancita from "../assets/videos/reels/ESPERANCITA_REEL_2023_v12.mp4";
import Pantallas from "../assets/videos/reels/REEL_PANTALLAS_v03.mp4";
import Aeromex from "../assets/videos/simulacion/Aeromexico_Beso_Master_40s_120523.mp4";
import BelightCoco from "../assets/videos/simulacion/BELIGHT_020322_MASTER_20_COCO_CUADRADO.mp4";
import BelightToronja from "../assets/videos/simulacion/BELIGHT_020322_MASTER_20_TORONJA_CUADRADO.mp4";
import Honda from "../assets/videos/simulacion/El_legado_Honda.mp4";
import Nissan from "../assets/videos/simulacion/Nissan.mp4";
import WaterSpring from "../assets/videos/simulacion/water-spring.mp4";
import Mundet from "../assets/videos/compo/04 - Sidral Mundet Director's Cut_1.mp4";
import OXXO from "../assets/videos/3d/Oxxo_TARJETAS _M.mp4"
import Runners from "../assets/videos/3d/Runners_Fuego_20.mov"
import Fargo from "../assets/videos/3d/MASTER FARGO 20s 16.9.mp4"
import Whirpool from "../assets/videos/3d/Whirpool_60s_12012022_Inglés Master.mp4"
import RAM from "../assets/videos/3d/RAM_DC_MASTER.mp4"
import TOTALPLAY from "../assets/videos/3d/TOTAL_PLAY_UNIVERSO_MASTER_06_07_23.mp4"
import About from "../assets/videos/about/Logo_Esperancitavfx_cierre_v03.mp4"


const data = [
  {
    name: "Reel",
    id: 23,
    category: [],
    // description: "Reels pantallas",
    description: ["Somos un estudio de post-producción dedicado a la creación de efectos visuales. Nos especializamos en cleaning, mixed media y Vfx.", "We are a post-production studio dedicated to the creation of visual effects. We specialize in cleaning, mixed media and Vfx."],
    year: "2023",
    date: "24/04/2022",
    // video: "src/assets/videos/reels/REEL_PANTALLAS_v03.mp4",
    video: Esperancita,
  },
  {
    name: "Aeromexico Beso",
    id: 0,
    category: ["3D"],
    description: ["Comercial Aeromex", "Aeromex commercial"],
    // description:
    //   "lorem",
    year: "2023",
    date: "15/05/2023",
    // video: "src/assets/videos/simulacion/Aeromexico_Beso_Master_40s_120523.mp4",
    video: Aeromex,
  },
  {
    name: "OXXO",
    id: 1,
    category: ["3D"],
    // description:
    //   "Generamos e integramos en la escena las piernas del Demogorgon.Llevamos a cabo transiciones suaves, cleans y particulas en el ambiente.",
    // year: "2022",
    description: [
      "Generamos e integramos en la escena las piernas del Demogorgon.Llevamos a cabo transiciones suaves, cleans y particulas en el ambiente.",
      "We generate and integrate the legs of the Demogorgon into the scene. We carry out smooth transitions, cleans and particles in the environment.",
    ],
    year: "2022",
    date: "24/05/2022",
    // video: "src/assets/videos/reels/ESPERANCITA_REEL_2023_v12.mp4",
    video: OXXO,
  },
  {
    name: "Nissan Kicks",
    id: 2,
    category: ["Simulación"],
    // description:
    //   "En este comercial, aplicamos la técnica de simulación de partículas para crear las llamativas estelas de luz de colores que emanan de las camionetas Nissan en movimiento. Mediante el uso de la técnica de -match move-, sincronizamos un modelo 3D idéntico a la camioneta, permitiéndole seguir su trayectoria y actuar como fuente de partículas, generando así las deslumbrantes estelas de luz cuando las camionetas están en movimiento.",
    description: [
      "En este comercial, aplicamos la técnica de simulación de partículas para crear las llamativas estelas de luz de colores que emanan de las camionetas Nissan en movimiento. Mediante el uso de la técnica de -match move-, sincronizamos un modelo 3D idéntico a la camioneta, permitiéndole seguir su trayectoria y actuar como fuente de partículas, generando así las deslumbrantes estelas de luz cuando las camionetas están en movimiento.",
      "In this commercial, we apply the particle simulation technique to create the striking colored light trails that emanate from moving Nissan trucks. Using the match move technique, we synchronize a 3D model identical to the truck, allowing it to follow its trajectory and act as a source of particles, thus generating the dazzling light trails when the trucks are in motion.",
    ],
    year: "2023",
    date: "30/06/2023",
    // video: "src/assets/videos/simulacion/Nissan.mp4",
    video: Nissan,
  },
  {
    name: "Honda",
    id: 3,
    category: ["3D"],
    // description:
    //   "En el comercial de Honda, creamos los portales por donde ingresan el nuevo Honda Accord y C-RV utilizando simulación de partículas. Posteriormente, desarrollamos un entorno en 3D que presenta los vehículos Honda con un aspecto holográfico, permitiendo así demostrar el funcionamiento del motor híbrido.",

    description: [
      "En el comercial de Honda, creamos los portales por donde ingresan el nuevo Honda Accord y C-RV utilizando simulación de partículas. Posteriormente, desarrollamos un entorno en 3D que presenta los vehículos Honda con un aspecto holográfico, permitiendo así demostrar el funcionamiento del motor híbrido.",
      "In the Honda commercial, we created the portals through which the new Honda Accord and C-RV enter using particle simulation. Subsequently, we developed a 3D environment that presents the Honda vehicles with a holographic appearance, thus allowing us to demonstrate the operation of the engine hybrid.",
    ],
    year: "2023",
    date: "24/05/2023",
    // video: "src/assets/videos/simulacion/El_legado_Honda.mp4",
    video: Honda,
  },
  // {
  //   name: "CHIREY",
  //   id: 4,
  //   category: ["Simulación", "3D"],
  //   // description:
  //   //   "Simulación / 3D / Matte Painting e integracion con live action",
  //   description: [
  //     "Simulación / 3D / Matte Painting e integracion con live action",
  //     "Simulation / 3D / Matte Painting and integration with live action",
  //   ],
  //   year: "2023",
  //   date: "21/09/2023",
  //   // video: "src/assets/videos/reels/ESPERANCITA_REEL_2023_v12.mp4",
  //   video: Pantallas,
  // },
  {
    name: "RAM",
    id: 5,
    category: ["3D"],
    // description: "Background 3D",
    description: ["Background 3D", "Background 3D"],
    year: "2023",
    date: "17/02/2023",
    // video: "src/assets/videos/reels/ESPERANCITA_REEL_2023_v12.mp4",
    video: RAM,
  },
  // {
  //   name: "MG",
  //   id: 6,
  //   category: ["Simulación", "3D"],
  //   // description:
  //   //   "Simulacion / 3D / Motion graphics / Integracion con live action",
  //   description: [
  //     "Simulacion / 3D / Motion graphics / Integracion con live action",
  //     "Simulation / 3D / Motion graphics / Integration with live action",
  //   ],
  //   year: "2023",
  //   date: "21/09/2023",
  //   // video: "src/assets/videos/reels/ESPERANCITA_REEL_2023_v12.mp4",
  //   video: Pantallas,
  // },
  {
    name: "Total play",
    id: 7,
    category: ["Simulación", "3D"],
    // description:
    //   "Simulacion de particulas / 3D / Motion graphics / e integracion con live action",

    description: [
      "Simulacion de particulas / 3D / Motion graphics / e integracion con live action",
      "Particle simulation / 3D / Motion graphics / and integration with live action",
    ],
    year: "2023",
    date: "21/09/2023",
    // video: "src/assets/videos/reels/ESPERANCITA_REEL_2023_v12.mp4",
    video: TOTALPLAY,
  },
  // {
  //   name: "BBVA",
  //   id: 8,
  //   category: ["Compo"],
  //   // description: "Cleanings / transiciones / motion graphics",
  //   description: [
  //     "Cleanings / transiciones / motion graphics",
  //     "Cleanings / transitions / motion graphics",
  //   ],
  //   year: "2023",
  //   date: "06/02/2023",
  //   // video: "src/assets/videos/reels/ESPERANCITA_REEL_2023_v12.mp4",
  //   video: Pantallas,
  // },
  // {
  //   name: "SALADITAS",
  //   id: 9,
  //   category: ["Compo"],
  //   // description: "Cleanings / transiciones / motion graphics",
  //   description: [
  //     "Cleanings / transiciones / motion graphics",
  //     "Cleanings / transitions / motion graphics",
  //   ],
  //   year: "2023",
  //   date: "16/08/2023",
  //   // video: "src/assets/videos/reels/ESPERANCITA_REEL_2023_v12.mp4",
  //   video: Pantallas,
  // },
  // {
  //   name: "BANCO AZTECA",
  //   id: 10,
  //   category: ["Compo"],
  //   // description: "Banco Azteca",
  //   description: ["Banco Azteca", "Banco Azteca"],
  //   year: "2022",
  //   date: "09/06/2022",
  //   // video: "src/assets/videos/reels/ESPERANCITA_REEL_2023_v12.mp4",
  //   video: Pantallas,
  // },
  {
    name: "Mundet",
    id: 11,
    category: ["Compo"],
    // description: "Cleanings / transiciones / motion graphics",
    description: [
      "Cleanings / transiciones / motion graphics",
      "Cleanings / transitions / motion graphics",
    ],
    year: "2022",
    date: "04/03/2022",
    // video: "src/assets/videos/reels/ESPERANCITA_REEL_2023_v12.mp4",
    video: Mundet,
  },
  {
    name: "Bancopel",
    id: 12,
    category: ["Compo"],
    // description: "Cleanings / transiciones",
    description: ["Cleanings / transiciones", "Cleanings / transitions"],
    year: "2022",
    date: "12/04/2022",
    // video:
    //   "src/assets/videos/compo/Bancoppel_30s_V1_R1_Luciernagas_Aprobada_23052022.mp4",
    video: Bancoppel,
  },
  {
    name: "Didi Ratchet",
    id: 13,
    category: ["Compo"],
    // description: "Cleanings / transiciones / integracion de pantallas",
    description: [
      "Cleanings / transiciones / integracion de pantallas",
      "Cleanings / transitions / screen integration",
    ],
    year: "2022",
    date: "06/09/2022",
    // video: "src/assets/videos/compo/DIDI.mp4",
    video: Diddi,
  },
  {
    name: "Secret pateadora",
    id: 14,
    category: ["Compo"],
    // description: "Cleanings / completiva de crowds ",
    description: [
      "Cleanings / completiva de crowds",
      "Cleanings / crowd completiva",
    ],
    year: "2023",
    date: "24/03/2023",
    // video: "src/assets/videos/compo/secret.mp4",
    video: Secret,
  },
  {
    name: "Belight coco",
    id: 15,
    category: ["Compo"],
    description: "Belight coco",
    description: ["Belight coco", "Belight coco"],
    year: "2022",
    date: "24/04/2022",
    // video:
    //   "src/assets/videos/simulacion/BELIGHT_020322_MASTER_20_COCO_CUADRADO.mp4",
    video: BelightCoco,
  },
  {
    name: "FARGO",
    id: 16,
    category: ["3D"],
    // description:
    //   "Modelamos el logo de Fargo en una camiseta de Argentina, creando una transicion que traspasa la camiseta y llegando a un reloj hecho en 3d.",

    description: [
      "Modelamos el logo de Fargo en una camiseta de Argentina, creando una transicion que traspasa la camiseta y llegando a un reloj hecho en 3d.",
      "We modeled the Fargo logo on an Argentina t-shirt, creating a transition that goes beyond the t-shirt and arriving at a watch made in 3d.",
    ],
    year: "2022",
    date: "22/09/2022",
    // video: "src/assets/videos/reels/ESPERANCITA_REEL_2023_v12.mp4",
    video: Fargo,
  },
  {
    name: "Runners Fuego",
    id: 17,
    category: ["3D", "Compo"],
    // description: "3D / motion graphics",
    description: ["3D / motion graphics", "3D/motion graphics"],
    year: "2022",
    date: "18/03/2022",
    // video: "src/assets/videos/reels/ESPERANCITA_REEL_2023_v12.mp4",
    video: Runners,
  },
  {
    name: "Secret limpiavidirios",
    id: 18,
    category: ["3D"],
    // description:
    //   "A traves de 3d generamos la continuacion del edificio para generar  mas altura y distancia.",

    description: ["A traves de 3d generamos la continuacion del edificio para generar  mas altura y distancia.", "Through 3D we generate the continuation of the building to generate more height and distance"],
    year: "2023",
    date: "24/04/2023",
    // video: "src/assets/videos/reels/ESPERANCITA_REEL_2023_v12.mp4",
    video: Tvc,
  },
  {
    name: "Whirpool",
    id: 19,
    category: ["3D"],
    // description: "Whirpool",
    description: ["Whirpool", "Whirpool"],
    year: "2023",
    date: "13/09/2023",
    // video: "src/assets/videos/reels/ESPERANCITA_REEL_2023_v12.mp4",
    video: Whirpool,
  },
  {
    name: "Belight toranja",
    id: 20,
    category: ["Compo"],
    // description: "Belight toranja",
    description: ["Belight toranja", "Belight toranja"],
    year: "2023",
    date: "24/04/2022",
    // video:
    //   "src/assets/videos/simulacion/BELIGHT_020322_MASTER_20_TORONJA_CUADRADO.mp4",
    video: BelightToronja,
  },
  {
    name: "Water",
    id: 21,
    category: ["Simulación", "3D"],
    // description: "Simulacion de fluidos / 3D ",
    description: ["Simulacion de fluidos / 3D", "Fluid simulation / 3D"],
    year: "2023",
    date: "24/04/2022",
    // video: "src/assets/videos/simulacion/water-spring.mp4",
    video: WaterSpring,
  },
  {
    name: "Reels pantallas",
    id: 22,
    category: ["3D", "Compo"],
    // description: "Reels pantallas",
    description: ["Reels pantallas", "Reels screens"],
    year: "2023",
    date: "24/04/2022",
    // video: "src/assets/videos/reels/REEL_PANTALLAS_v03.mp4",
    video: Pantallas,
  },
  {
    name: "About",
    id: 24,
    category: [],
    // description: "Reels pantallas",
    description: [],
    year: "",
    date: "",
    // video: "src/assets/videos/reels/REEL_PANTALLAS_v03.mp4",
    video: About,
  },
];

export default data;
