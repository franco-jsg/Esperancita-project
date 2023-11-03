const data = [
  {
    name: "Aeromexico Beso",
    id: 0,
    category: ["3D"],
    // description: {
    //   ES: "lorem",
    //   EN: "lorem ENGLISH",
    // },
    description:
      "lorem",
    year: "2023",
    date: "15/05/2023",
    video: "src/assets/videos/simulacion/Aeromexico_Beso_Master_40s_120523.mp4",
  },
  {
    name: "OXXO",
    id: 1,
    category: ["3D"],
    description:
      "Generamos e integramos en la escena las piernas del Demogorgon.Llevamos a cabo transiciones suaves, cleans y particulas en el ambiente.",
    year: "2022",
    date: "24/05/2022",
    video: "src/assets/videos/reels/ESPERANCITA_REEL_2023_v12.mp4",
  },
  {
    name: "Nissan Kicks",
    id: 2,
    category: ["Simulación"],
    description:
      "En este comercial, aplicamos la técnica de simulación de partículas para crear las llamativas estelas de luz de colores que emanan de las camionetas Nissan en movimiento. Mediante el uso de la técnica de -match move-, sincronizamos un modelo 3D idéntico a la camioneta, permitiéndole seguir su trayectoria y actuar como fuente de partículas, generando así las deslumbrantes estelas de luz cuando las camionetas están en movimiento.",
    year: "2023",
    date: "30/06/2023",
    video: "src/assets/videos/simulacion/Nissan.mp4",
  },
  {
    name: "Honda",
    id: 3,
    category: ["3D"],
    description:
      "En el comercial de Honda, creamos los portales por donde ingresan el nuevo Honda Accord y C-RV utilizando simulación de partículas. Posteriormente, desarrollamos un entorno en 3D que presenta los vehículos Honda con un aspecto holográfico, permitiendo así demostrar el funcionamiento del motor híbrido.",
    year: "2023",
    date: "24/05/2023",
    video: "src/assets/videos/simulacion/El_legado_Honda.mp4",
  },
  {
    name: "CHIREY",
    id: 4,
    category: ["Simulación", "3D"],
    description:
      "Simulación / 3D / Matte Painting e integracion con live action",
    year: "2023",
    date: "21/09/2023",
    video: "src/assets/videos/reels/ESPERANCITA_REEL_2023_v12.mp4",
  },
  {
    name: "RAM",
    id: 5,
    category: ["3D"],
    description: "Background 3D",
    year: "2023",
    date: "17/02/2023",
    video: "src/assets/videos/reels/ESPERANCITA_REEL_2023_v12.mp4",
  },
  {
    name: "MG",
    id: 6,
    category: ["Simulación", "3D"],
    description:
      "Simulacion / 3D / Motion graphics / Integracion con live action",
    year: "2023",
    date: "21/09/2023",
    video: "src/assets/videos/reels/ESPERANCITA_REEL_2023_v12.mp4",
  },
  {
    name: "Total play",
    id: 7,
    category: ["Simulación", "3D"],
    description:
      "Simulacion de particulas / 3D / Motion graphics / e integracion con live action",
    year: "2023",
    date: "21/09/2023",
    video: "src/assets/videos/reels/ESPERANCITA_REEL_2023_v12.mp4",
  },
  {
    name: "BBVA",
    id: 8,
    category: ["Compo"],
    description: "Cleanings / transiciones / motion graphics",
    year: "2023",
    date: "06/02/2023",
    video: "src/assets/videos/reels/ESPERANCITA_REEL_2023_v12.mp4",
  },
  {
    name: "SALADITAS",
    id: 9,
    category: ["Compo"],
    description: "Cleanings / transiciones / motion graphics",
    year: "2023",
    date: "16/08/2023",
    video: "src/assets/videos/reels/ESPERANCITA_REEL_2023_v12.mp4",
  },
  {
    name: "BANCO AZTECA",
    id: 10,
    category: ["Compo"],
    description: "",
    year: "2022",
    date: "09/06/2022",
    video: "src/assets/videos/reels/ESPERANCITA_REEL_2023_v12.mp4",
  },
  {
    name: "Mundet",
    id: 11,
    category: ["Compo"],
    description: "Cleanings / transiciones / motion graphics",
    year: "2022",
    date: "04/03/2022",
    video: "src/assets/videos/reels/ESPERANCITA_REEL_2023_v12.mp4",
  },
  {
    name: "Bancopel",
    id: 12,
    category: ["Compo"],
    description: "Cleanings / transiciones",
    year: "2022",
    date: "12/04/2022",
    video:
      "src/assets/videos/compo/Bancoppel_30s_V1_R1_Luciernagas_Aprobada_23052022.mp4",
  },
  {
    name: "Didi Ratchet",
    id: 13,
    category: ["Compo"],
    description: "Cleanings / transiciones / integracion de pantallas",
    year: "2022",
    date: "06/09/2022",
    video: "src/assets/videos/compo/DIDI.mp4",
  },
  {
    name: "Secret pateadora",
    id: 14,
    category: ["Compo"],
    description: "Cleanings / completiva de crowds ",
    year: "2023",
    date: "24/03/2023",
    video: "src/assets/videos/compo/secret.mp4",
  },
  {
    name: "Belight coco",
    id: 15,
    category: ["Compo"],
    description: " ",
    year: "2022",
    date: "24/04/2022",
    video:
      "src/assets/videos/simulacion/BELIGHT_020322_MASTER_20_COCO_CUADRADO.mp4",
  },
  {
    name: "FARGO",
    id: 16,
    category: ["3D"],
    description:
      "Modelamos el logo de Fargo en una camiseta de Argentina, creando una transicion que traspasa la camiseta y llegando a un reloj hecho en 3d.",
    year: "2022",
    date: "22/09/2022",
    video: "src/assets/videos/reels/ESPERANCITA_REEL_2023_v12.mp4",
  },
  {
    name: "Runners Fuego",
    id: 17,
    category: ["3D", "Compo"],
    description: "3D / motion graphics",
    year: "2022",
    date: "18/03/2022",
    video: "src/assets/videos/reels/ESPERANCITA_REEL_2023_v12.mp4",
  },
  {
    name: "Secret limpiavidirios",
    id: 18,
    category: ["3D"],
    description:
      "A traves de 3d generamos la continuacion del edificio para generar  mas altura y distancia.",
    year: "2023",
    date: "24/04/2023",
    video: "src/assets/videos/reels/ESPERANCITA_REEL_2023_v12.mp4",
  },
  {
    name: "Whirpool",
    id: 19,
    category: ["Compo"],
    description: " ",
    year: "2023",
    date: "13/09/2023",
    video: "src/assets/videos/reels/ESPERANCITA_REEL_2023_v12.mp4",
  },
  {
    name: "Belight toranja",
    id: 20,
    category: ["Compo"],
    description: " ",
    year: "2023",
    date: "24/04/2022",
    video:
      "src/assets/videos/simulacion/BELIGHT_020322_MASTER_20_TORONJA_CUADRADO.mp4",
  },
  {
    name: "Water",
    id: 21,
    category: ["Simulación", "3D"],
    description: "Simulacion de fluidos / 3D ",
    year: "XXXX",
    date: "XXXX",
    video: "src/assets/videos/simulacion/water-spring.mp4",
  },
  {
    name: "Reels pantallas",
    id: 22,
    category: ["3D", "Compo"],
    description: " ",
    year: "XXXX",
    date: "XXXX",
    video: "src/assets/videos/reels/REEL_PANTALLAS_v03.mp4",
  },
];

export default data;
