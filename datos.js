/* ============================================================================
   DATOS DE LA ACTIVIDAD  —  Coevaluación de pódcast
   Curso: Sistemas de producción bovina especializada en leche (5007583)
   ----------------------------------------------------------------------------
   Este es el ÚNICO archivo que el docente necesita editar si cambia algo
   (nombres, grupos, rúbrica). No toque index.html ni notas/index.html.
   ========================================================================== */

window.DATOS = {
  curso:     "Sistemas de producción bovina especializada en leche",
  codigo:    "5007583",
  actividad: "Coevaluación de pódcast — revisión crítica de artículo científico",
  valor:     "2,5 % de la nota del curso",
  escalaMax: 5.0,          // escala institucional UdeA (0.0 – 5.0)

  // --- Rúbrica (la misma de la actividad del pódcast, sobre 100 puntos) ------
  rubrica: [
    { id:"c1", nombre:"Comprensión del estudio",
      desc:"Explica correctamente el objetivo, el diseño y la metodología.", max:25 },
    { id:"c2", nombre:"Análisis crítico",
      desc:"Identifica fortalezas y limitaciones reales y fundamentadas.", max:25 },
    { id:"c3", nombre:"Resultados e interpretación",
      desc:"Distingue lo relevante; no confunde significancia con importancia.", max:20 },
    { id:"c4", nombre:"Aplicabilidad / transferencia",
      desc:"Conecta los resultados con el contexto productivo de forma argumentada.", max:15 },
    { id:"c5", nombre:"Claridad y estructura del discurso",
      desc:"Organización lógica, lenguaje técnico correcto y manejo del tiempo.", max:10 },
    { id:"c6", nombre:"Calidad técnica del audio",
      desc:"Audio audible, sin fallas que impidan seguir el contenido.", max:5 }
  ],

  // --- Grupos / materiales --------------------------------------------------
  // Cada estudiante DEBE coevaluar todos los grupos excepto el suyo.
  grupos: [
    { id:"grupo1", nombre:"Grupo 1",
      tema:"Revisión crítica de artículo (Journal of Dairy Science)",
      articulo:"",
      integrantes:["ZAPATA NOREÑA PAULA ANDREA","LONDOÑO ARANGO TATIANA",
                   "YEPES OSPINA JUAN DAVID","PATERNINA VILLEGAS ALEJANDRO"],
      podcast:"materiales/grupo1/podcast.mp3", guion:"materiales/grupo1/guion.pdf" },

    { id:"grupo2", nombre:"Grupo 2",
      tema:"Balance catión–anión (DCAD) y prevención de hipocalcemia",
      articulo:"",
      integrantes:["QUIROZ GOMEZ FABIANA","LIEVANO RINCON JOSE GABRIEL",
                   "CARVAJAL ALZATE SANTIAGO","OROZCO CORTES JUAN ANDRES",
                   "MURILLO TREJOS MARIA CAMILA"],
      podcast:"materiales/grupo2/podcast.mp3", guion:"materiales/grupo2/guion.pdf" },

    { id:"grupo3", nombre:"Grupo 3",
      tema:"Metabolismo mamario y síntesis de componentes de la leche",
      articulo:"Anger, J. C., Loncke, C., Onfalio, C., Boutinaud, M., Guinard-Flament, J., Lapierre, H., & Lemosquet, S.",
      integrantes:["ARBELAEZ CARDONA MARIA FERNANDA","FLOREZ ARENAS SARA",
                   "GRISALES ORTIZ LEIDY JHOANA"],
      podcast:"materiales/grupo3/podcast.mp3", guion:"materiales/grupo3/guion.pdf" },

    { id:"grupo4", nombre:"Grupo 4",
      tema:"Lactancias extendidas en vacas lecheras",
      articulo:"Han, R., Kok, A., Mourits, M., & Hogeveen, H. (2024). Journal of Dairy Science, 107(9), 6902–6912.",
      integrantes:["GALLÓN TOBÓN VALENTINA","PULGARIN GAÑAN VERONICA",
                   "PINEDA PUERTA ANGY MANUELA","LALINDE GARZÓN CARLOS ANDRES"],
      podcast:"materiales/grupo4/podcast.mp3", guion:"materiales/grupo4/guion.pdf" },

    { id:"grupo5", nombre:"Grupo 5",
      tema:"Protocolo Doble-Ovsynch e IATF",
      articulo:"Laplacette et al. (2025). Journal of Dairy Science, 108(1), 1103–1124.",
      integrantes:["BALZAN SANCHEZ NATALIA ANDREA","TANGARIFE CHIRIVI MARIA FERNANDA",
                   "MARTÍNEZ VELÁSQUEZ GERALDINE"],
      podcast:"materiales/grupo5/podcast.mp3", guion:"materiales/grupo5/guion.pdf" },

    { id:"grupo6", nombre:"Grupo 6",
      tema:"¿Cuánto le cuestan las enfermedades a la producción lechera mundial?",
      articulo:"Rasmussen et al. (2024). Global losses due to dairy cattle diseases: A comorbidity-adjusted economic analysis. Journal of Dairy Science.",
      integrantes:["DORADO MORA ANDRÉ ALEXANDRA","HINCAPIE URIBE JULIETA",
                   "RAMÍREZ PELAEZ DIANA CAROLINA"],
      podcast:"materiales/grupo6/podcast.mp3", guion:"materiales/grupo6/guion.pdf" }
  ],

  // --- Listado oficial de estudiantes (grupo 1) -----------------------------
  estudiantes: [
    { cedula:"1000534595", nombre:"ARBELAEZ CARDONA MARIA FERNANDA",  grupo:"grupo3" },
    { cedula:"1000921215", nombre:"BALZAN SANCHEZ NATALIA ANDREA",    grupo:"grupo5" },
    { cedula:"1001015917", nombre:"CARVAJAL ALZATE SANTIAGO",         grupo:"grupo2" },
    { cedula:"1061819738", nombre:"DORADO MORA ANDRÉ ALEXANDRA",      grupo:"grupo6" },
    { cedula:"1007343550", nombre:"FLOREZ ARENAS SARA",               grupo:"grupo3" },
    { cedula:"1000870005", nombre:"GALLÓN TOBÓN VALENTINA",           grupo:"grupo4" },
    { cedula:"1036967541", nombre:"GRISALES ORTIZ LEIDY JHOANA",      grupo:"grupo3" },
    { cedula:"1036669033", nombre:"HINCAPIE URIBE JULIETA",           grupo:"grupo6" },
    { cedula:"1020484183", nombre:"LALINDE GARZÓN CARLOS ANDRES",     grupo:"grupo4" },
    { cedula:"1017224139", nombre:"LIEVANO RINCON JOSE GABRIEL",      grupo:"grupo2" },
    { cedula:"1000914473", nombre:"LONDOÑO ARANGO TATIANA",           grupo:"grupo1" },
    { cedula:"1214725522", nombre:"MARTÍNEZ VELÁSQUEZ GERALDINE",     grupo:"grupo5" },
    { cedula:"1036962418", nombre:"MURILLO TREJOS MARIA CAMILA",      grupo:"grupo2" },
    { cedula:"1036925741", nombre:"OROZCO CORTES JUAN ANDRES",        grupo:"grupo2" },
    { cedula:"1000768431", nombre:"PATERNINA VILLEGAS ALEJANDRO",     grupo:"grupo1" },
    { cedula:"1007104862", nombre:"PINEDA PUERTA ANGY MANUELA",       grupo:"grupo4" },
    { cedula:"1007408225", nombre:"PULGARIN GAÑAN VERONICA",          grupo:"grupo4" },
    { cedula:"1000764782", nombre:"QUIROZ GOMEZ FABIANA",             grupo:"grupo2" },
    { cedula:"1152470032", nombre:"RAMÍREZ PELAEZ DIANA CAROLINA",    grupo:"grupo6" },
    { cedula:"1000920710", nombre:"TANGARIFE CHIRIVI MARIA FERNANDA", grupo:"grupo5" },
    { cedula:"1035852596", nombre:"YEPES OSPINA JUAN DAVID",          grupo:"grupo1" },
    { cedula:"1000205745", nombre:"ZAPATA NOREÑA PAULA ANDREA",       grupo:"grupo1" }
  ]
};
