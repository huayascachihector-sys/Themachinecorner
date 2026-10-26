/* =====================================================================
   THEMACHINECORNER - APPLICATION ENGINE
   Interactive logic for Navigation, IB Hub, Course Search,
   HTML Document Viewer (with full IB modules library), IB Calculator & Pomodoro.
   By: theloser
   ===================================================================== */

// --- Complete Pre-installed Library Materials (IB Mathematics, History & Core) ---
const defaultMaterials = [
  // --- HISTORIA IB (Prueba 2) ---
  {
    id: "mat-hist-hitler-castro",
    title: "Prueba 2 · Tema 10 — Estados autoritarios: Hitler vs. Castro",
    category: "Historia IB / Prueba 2",
    categoryGroup: "history",
    badgeLabel: "HISTORIA",
    url: "materials/ib/HISTORIA/Prueba 2 · Tema 10 — Estados autoritarios · Hitler vs. Castro.html",
    isLocalBlob: false
  },
  {
    id: "mat-hist-guerra-fria-narracion",
    title: "Prueba 2 · Tema 12 — Guerra Fría: Narración Completa",
    category: "Historia IB / Prueba 2",
    categoryGroup: "history",
    badgeLabel: "HISTORIA",
    url: "materials/ib/HISTORIA/Prueba 2 · Tema 12 — Guerra Fría · narración completa (1).html",
    isLocalBlob: false
  },
  {
    id: "mat-hist-guerra-fria-guia",
    title: "Prueba 2 · Tema 12 — La Guerra Fría (Guía de Estudio)",
    category: "Historia IB / Prueba 2",
    categoryGroup: "history",
    badgeLabel: "HISTORIA",
    url: "materials/ib/HISTORIA/Prueba 2 · Tema 12 — La Guerra Fría (1).html",
    isLocalBlob: false
  },

  // --- MATEMÁTICAS IB (17 Módulos Completos) ---
  {
    id: "mat-math-mod-1",
    title: "Módulo 1 · Sucesiones, series, exponentes y logaritmos",
    category: "Matemáticas IB / AA & AI",
    categoryGroup: "math",
    badgeLabel: "MATH M1",
    url: "materials/ib/MATEMÁTICA/Módulo 1 · Sucesiones, series, exponentes y logaritmos (2).html",
    isLocalBlob: false
  },
  {
    id: "mat-math-mod-2",
    title: "Módulo 2 · Polinomios",
    category: "Matemáticas IB / AA & AI",
    categoryGroup: "math",
    badgeLabel: "MATH M2",
    url: "materials/ib/MATEMÁTICA/Módulo 2 · Polinomios (2).html",
    isLocalBlob: false
  },
  {
    id: "mat-math-mod-3",
    title: "Módulo 3 · Funciones",
    category: "Matemáticas IB / AA & AI",
    categoryGroup: "math",
    badgeLabel: "MATH M3",
    url: "materials/ib/MATEMÁTICA/Módulo 3 · Funciones (1).html",
    isLocalBlob: false
  },
  {
    id: "mat-math-mod-4",
    title: "Módulo 4 · Combinatoria y binomio",
    category: "Matemáticas IB / AA & AI",
    categoryGroup: "math",
    badgeLabel: "MATH M4",
    url: "materials/ib/MATEMÁTICA/Módulo 4 · Combinatoria y binomio (1).html",
    isLocalBlob: false
  },
  {
    id: "mat-math-mod-5",
    title: "Módulo 5 · Demostración (Inducción y Contradicción)",
    category: "Matemáticas IB / AA HL",
    categoryGroup: "math",
    badgeLabel: "MATH M5",
    url: "materials/ib/MATEMÁTICA/Módulo 5 · Demostración (1).html",
    isLocalBlob: false
  },
  {
    id: "mat-math-mod-6",
    title: "Módulo 6 · Números complejos",
    category: "Matemáticas IB / AA HL",
    categoryGroup: "math",
    badgeLabel: "MATH M6",
    url: "materials/ib/MATEMÁTICA/Módulo 6 · Números complejos (1).html",
    isLocalBlob: false
  },
  {
    id: "mat-math-mod-7",
    title: "Módulo 7 · Trigonometría I y geometría",
    category: "Matemáticas IB / AA & AI",
    categoryGroup: "math",
    badgeLabel: "MATH M7",
    url: "materials/ib/MATEMÁTICA/Módulo 7 · Trigonometría I y geometría (1).html",
    isLocalBlob: false
  },
  {
    id: "mat-math-mod-8",
    title: "Módulo 8 · Trigonometría II",
    category: "Matemáticas IB / AA & AI",
    categoryGroup: "math",
    badgeLabel: "MATH M8",
    url: "materials/ib/MATEMÁTICA/Módulo 8 · Trigonometría II (1).html",
    isLocalBlob: false
  },
  {
    id: "mat-math-mod-9",
    title: "Módulo 9 · Vectores, rectas y planos",
    category: "Matemáticas IB / AA HL",
    categoryGroup: "math",
    badgeLabel: "MATH M9",
    url: "materials/ib/MATEMÁTICA/Módulo 9 · Vectores, rectas y planos (1).html",
    isLocalBlob: false
  },
  {
    id: "mat-math-mod-10",
    title: "Módulo 10 · Estadística y probabilidad",
    category: "Matemáticas IB / AA & AI",
    categoryGroup: "math",
    badgeLabel: "MATH M10",
    url: "materials/ib/MATEMÁTICA/Módulo 10 · Estadística y probabilidad (1).html",
    isLocalBlob: false
  },
  {
    id: "mat-math-mod-11",
    title: "Módulo 11 · Variables aleatorias",
    category: "Matemáticas IB / AA & AI",
    categoryGroup: "math",
    badgeLabel: "MATH M11",
    url: "materials/ib/MATEMÁTICA/Módulo 11 · Variables aleatorias (1).html",
    isLocalBlob: false
  },
  {
    id: "mat-math-mod-12",
    title: "Módulo 12 · Derivación",
    category: "Matemáticas IB / AA & AI",
    categoryGroup: "math",
    badgeLabel: "MATH M12",
    url: "materials/ib/MATEMÁTICA/Módulo 12 · Derivación (1).html",
    isLocalBlob: false
  },
  {
    id: "mat-math-mod-13",
    title: "Módulo 13 · Análisis de curvas y optimización",
    category: "Matemáticas IB / AA & AI",
    categoryGroup: "math",
    badgeLabel: "MATH M13",
    url: "materials/ib/MATEMÁTICA/Módulo 13 · Análisis de curvas y optimización (1).html",
    isLocalBlob: false
  },
  {
    id: "mat-math-mod-14",
    title: "Módulo 14 · Integración",
    category: "Matemáticas IB / AA & AI",
    categoryGroup: "math",
    badgeLabel: "MATH M14",
    url: "materials/ib/MATEMÁTICA/Módulo 14 · Integración (1).html",
    isLocalBlob: false
  },
  {
    id: "mat-math-mod-15",
    title: "Módulo 15 · Ecuaciones diferenciales",
    category: "Matemáticas IB / AA HL",
    categoryGroup: "math",
    badgeLabel: "MATH M15",
    url: "materials/ib/MATEMÁTICA/Módulo 15 · Ecuaciones diferenciales (1).html",
    isLocalBlob: false
  },
  {
    id: "mat-math-mod-16",
    title: "Módulo 16 · Cinemática",
    category: "Matemáticas IB / AA HL",
    categoryGroup: "math",
    badgeLabel: "MATH M16",
    url: "materials/ib/MATEMÁTICA/Módulo 16 · Cinemática (1).html",
    isLocalBlob: false
  },
  {
    id: "mat-math-mod-17",
    title: "Módulo 17 · Límites, L'Hôpital y series de Maclaurin",
    category: "Matemáticas IB / AA HL",
    categoryGroup: "math",
    badgeLabel: "MATH M17",
    url: "materials/ib/MATEMÁTICA/Módulo 17 · Límites, L_Hôpital y series de Maclaurin (1).html",
    isLocalBlob: false
  },

  // --- CORE & TIPS THELOSER ---
  {
    id: "mat-tok",
    title: "Teoría del Conocimiento (TOK): Cómo asegurar una 'A'",
    category: "IB Core / Ensayo y Exposición",
    categoryGroup: "core",
    badgeLabel: "TOK CORE",
    url: "materials/ib/tok_guia_esencial.html",
    isLocalBlob: false
  },
  {
    id: "mat-math-aa",
    title: "Matemáticas: Análisis y Enfoques (AA SL/HL) - Fórmulas & Tips",
    category: "IB Grupo 5 / STEM",
    categoryGroup: "core",
    badgeLabel: "MATH TIPS",
    url: "materials/ib/matematicas_aa_hl_sl.html",
    isLocalBlob: false
  },
  {
    id: "mat-elite-study",
    title: "Protocolo de Estudio Elite: Active Recall & Blurting",
    category: "Metodología / theloser System",
    categoryGroup: "core",
    badgeLabel: "ESTUDIO",
    url: "materials/ib/metodos_estudio_elite.html",
    isLocalBlob: false
  }
];

// In-memory materials registry
let currentMaterials = [...defaultMaterials];
let activeMaterialId = defaultMaterials[0].id;
let matActiveCategory = "all";
let matSearchQuery = "";

// --- IB Knowledge Database ---
const ibResourcesData = [
  {
    id: "ib-math",
    category: "stem",
    categoryLabel: "Ciencias & Matemáticas",
    level: "17 MÓDULOS DISPONIBLES",
    title: "Matemáticas AA & AI: Colección Completa (Módulos 1 al 17)",
    desc: "Cálculo diferencial, integrales, polinomios, números complejos, cinemática, vectores y ecuaciones diferenciales con teoría rigurosa y MathJax.",
    features: ["17 Módulos temáticos completos integrados", "Explicaciones conceptuales paso a paso", "Trampas de examen y esquemas de calificación"],
    docId: "mat-math-mod-1"
  },
  {
    id: "ib-history",
    category: "humanities",
    categoryLabel: "Individuos & Sociedades",
    level: "PRUEBA 2 IB",
    title: "Historia IB: Estados Autoritarios & Guerra Fría",
    desc: "Guías completas de Prueba 2: Comparativa profunda de Hitler vs. Castro (Tema 10) y la narración exhaustiva de la Guerra Fría (Tema 12).",
    features: ["Hitler vs. Castro: Ascenso, consolidación y políticas", "Guerra Fría: Narración cronológica completa", "Historiografía y tablas comparativas"],
    docId: "mat-hist-hitler-castro"
  },
  {
    id: "ib-tok",
    category: "core",
    categoryLabel: "El Núcleo",
    level: "TOK",
    title: "Teoría del Conocimiento (TOK)",
    desc: "Desglose de las 5 Áreas de Conocimiento, la exposición con 3 objetos reales y la fórmula de 5 pasos para redactar el ensayo de 1,600 palabras.",
    features: ["Matriz de Puntos con Monografía", "Esquemas de Ensayo con Contraargumentos", "Guía de Objetos para la Exposición"],
    docId: "mat-tok"
  },
  {
    id: "ib-ee",
    category: "core",
    categoryLabel: "El Núcleo",
    level: "EE (Monografía)",
    title: "Monografía: 4,000 Palabras sin Perder la Cordura",
    desc: "Cómo formular una pregunta de investigación (RQ) precisa, criterios de reflexión (RPPF) y estructura académica para alcanzar nota A.",
    features: ["Formulación de la RQ", "Criterio E: Reflexión y RPPF", "Revisión Bibliográfica Estilo APA/MLA"],
    docId: null
  },
  {
    id: "ib-cas",
    category: "core",
    categoryLabel: "El Núcleo",
    level: "CAS",
    title: "Creatividad, Actividad y Servicio (CAS)",
    desc: "Estrategias para completar los 7 resultados de aprendizaje, estructurar tu proyecto CAS colaborativo y redactar reflexiones significativas.",
    features: ["Idea de Proyecto CAS de Impacto", "7 Resultados de Aprendizaje", "Plantillas de Registro"],
    docId: null
  },
  {
    id: "ib-physics",
    category: "stem",
    categoryLabel: "Ciencias & Matemáticas",
    level: "NM / NS",
    title: "Física IB: Mecánica, Ondas & Campos",
    desc: "Resolución de problemas de conservación de energía, relatividad, incertidumbres experimentales y diseño de la Evaluación Interna (IA).",
    features: ["Cálculo de Incertidumbres y Barras de Error", "Estrategias para Prueba 1 (Opción Múltiple)", "Ideas para el Experimento IA"],
    docId: null
  },
  {
    id: "ib-chemistry",
    category: "stem",
    categoryLabel: "Ciencias & Matemáticas",
    level: "NM / NS",
    title: "Química IB: Estequiometría a Orgánica",
    desc: "Guía visual de rutas sintéticas en química orgánica, equilibrios ácido-base, entalpía y espectroscopía (RMN, IR, Masas).",
    features: ["Mapas de Rutas de Síntesis Orgánica", "Cinética y Equilibrio Químico", "Interpretación Espectral"],
    docId: null
  },
  {
    id: "ib-guides",
    category: "guides",
    categoryLabel: "Guías & Estrategia",
    level: "EXAMEN PREP",
    title: "Protocolo de Past Papers Mayo/Noviembre",
    desc: "Cómo aplicar ingeniería inversa a los esquemas de corrección (Mark Schemes) de los últimos 7 años para anticipar las preguntas.",
    features: ["El 'Libro Negro de Errores'", "Simulacros con Cronómetro Oficial", "Verbos de Mandato Oficiales de la OBI"],
    docId: "mat-elite-study"
  }
];

// --- Comprehensive Courses Database ---
const coursesData = [
  {
    title: "Matemáticas IB: Análisis & Enfoques (Colección 17 Módulos)",
    level: "ib",
    levelBadge: "IB Diploma",
    desc: "Programa riguroso para estudiantes con inclinación científica. Demostraciones por inducción, series de Maclaurin, derivadas, integrales y vectores 3D.",
    topics: ["Inducción matemática", "Números complejos", "Distribución normal y binomial", "Vectores 3D", "Derivadas e Integrales"],
    docId: "mat-math-mod-1"
  },
  {
    title: "Historia IB: Estados Autoritarios & La Guerra Fría",
    level: "ib",
    levelBadge: "IB Diploma",
    desc: "Análisis historiográfico de la Prueba 2: Ascenso y consolidación de Hitler y Castro, y la narrativa integral de la Guerra Fría.",
    topics: ["Hitler vs Castro", "Guerra Fría completa", "Método OPVL", "Historiografía"],
    docId: "mat-hist-hitler-castro"
  },
  {
    title: "Álgebra Fundamental & Razonamiento Numérico",
    level: "secundaria",
    levelBadge: "Secundaria",
    desc: "Dominio absoluto de factorización, ecuaciones cuadráticas, sistemas de ecuaciones lineales y leyes de exponentes para no tropezar en niveles avanzados.",
    topics: ["Factorización rápida", "Ecuaciones simultáneas", "Leyes de potencias", "Radicales"],
    docId: "mat-math-mod-1"
  },
  {
    title: "Geometría Euclidiana & Trigonometría Básica",
    level: "secundaria",
    levelBadge: "Secundaria",
    desc: "Teorema de Pitágoras, semejanza de triángulos, razones trigonométricas (seno, coseno, tangente) y áreas de figuras compuestas con rigor deductivo.",
    topics: ["Pitágoras", "Razones trigonométricas", "Semejanza", "Círculo y sectores"],
    docId: "mat-math-mod-7"
  },
  {
    title: "Fundamentos de Física Clásica & Método Científico",
    level: "secundaria",
    levelBadge: "Secundaria",
    desc: "Cinemática 1D (MRU y MRUA), Leyes del movimiento de Newton, trabajo, potencia y energía mecánica explicados de forma conceptual y aplicada.",
    topics: ["MRU y MRUA", "Leyes de Newton", "Energía Cinética/Potencial", "Vectores iniciales"],
    docId: "mat-math-mod-16"
  },
  {
    title: "Cálculo Diferencial Preuniversitario",
    level: "bachillerato",
    levelBadge: "Bachillerato",
    desc: "Límites por definición y métodos algebraicos, derivadas por regla de la cadena, máximos y mínimos, optimización y aplicaciones a la física.",
    topics: ["Límites al infinito", "Regla de la cadena", "Optimización", "Tasa de cambio relacionada"],
    docId: "mat-math-mod-12"
  },
  {
    title: "Cálculo Integral & Ecuaciones Diferenciales",
    level: "bachillerato",
    levelBadge: "Bachillerato",
    desc: "Integrales inmediatas, métodos de sustitución y por partes, sumas de Riemann, cálculo de áreas entre curvas y ecuaciones diferenciales de 1er orden.",
    topics: ["Sustitución trigonométrica", "Integración por partes", "Áreas entre curvas", "Variables separables"],
    docId: "mat-math-mod-14"
  },
  {
    title: "Física Electromagnetismo & Termodinámica",
    level: "bachillerato",
    levelBadge: "Bachillerato",
    desc: "Ley de Coulomb, campo y potencial eléctrico, circuitos de corriente continua (DC), leyes de Kirchhoff y principios de la termodinámica.",
    topics: ["Ley de Gauss conceptual", "Circuitos Kirchhoff", "Capacitores", "Ciclo de Carnot"],
    docId: null
  },
  {
    title: "Química General & Estequiometría Cuantitativa",
    level: "bachillerato",
    levelBadge: "Bachillerato",
    desc: "Balanceo por método redox, reactivo limitante y rendimiento, soluciones y concentraciones (molaridad), estequiometría de gases ideales.",
    topics: ["Balanceo Redox", "Reactivo limitante", "Gases ideales PV=nRT", "Equilibrio ácido-base"],
    docId: null
  },
  {
    title: "Teoría del Conocimiento (TOK) & Pensamiento Crítico",
    level: "ib",
    levelBadge: "IB Diploma",
    desc: "Marco de conocimiento del IB: alcance, perspectiva, métodos y herramientas, y ética en ciencias naturales, humanas, matemáticas, historia y arte.",
    topics: ["Marco de conocimiento", "Preguntas de conocimiento", "Justificación epistémica", "Ensayo TOK"],
    docId: "mat-tok"
  },
  {
    title: "Monografía IB (Extended Essay) de Excelencia",
    level: "ib",
    levelBadge: "IB Diploma",
    desc: "Guía paso a paso para investigar y redactar una tesis académica de 4,000 palabras que califique para publicación estudiantil y grado A.",
    topics: ["Formulación de hipótesis", "Metodología", "Criterios de evaluación A-E", "Entrevistas viva voce"],
    docId: null
  },
  {
    title: "Dominio de Exámenes de Admisión Universitaria (SAT / Pruebas Nacionales)",
    level: "universidad",
    levelBadge: "Universidad Prep",
    desc: "Técnicas de gestión del tiempo, resolución rápida de matemáticas de alta presión, comprensión crítica de textos académicos y descarte de trampas.",
    topics: ["Reading & Writing Evidence-based", "Math no-calculator speedrun", "Descarte estratégico", "Psicología del examen"],
    docId: "mat-math-mod-1"
  },
  {
    title: "Metodologías de Aprendizaje Acelerado de theloser",
    level: "universidad",
    levelBadge: "Universidad Prep",
    desc: "Cómo aprender el contenido de un semestre en semanas: repetición espaciada con tarjetas Anki, técnica de Feynman, blurting y arquitectura de apuntes.",
    topics: ["Active Recall profundo", "Sistemas Anki", "Fórmulas de Feynman", "Eliminación de procrastinación"],
    docId: "mat-elite-study"
  }
];

// --- Application State Initialization ---
document.addEventListener("DOMContentLoaded", () => {
  setupNavigation();
  renderIBResources("all");
  renderCourses("all", "");
  setupCourseSearch();
  setupDocumentViewer();
  setupFileUpload();
  setupIBCalculator();
  setupPomodoroTimer();
  setupModal();
});

// ================= 1. NAVIGATION =================
function setupNavigation() {
  const navButtons = document.querySelectorAll(".nav-btn");
  const brandBtn = document.getElementById("nav-brand-btn");

  navButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const targetView = btn.getAttribute("data-view");
      window.switchView(targetView);
    });
  });

  if (brandBtn) {
    brandBtn.addEventListener("click", () => {
      window.switchView("home");
    });
  }
}

window.switchView = function(viewId, subFilter = null) {
  // Update nav buttons
  document.querySelectorAll(".nav-btn").forEach(btn => {
    btn.classList.toggle("active", btn.getAttribute("data-view") === viewId);
  });

  // Update sections
  document.querySelectorAll(".view-section").forEach(sec => {
    sec.classList.remove("active");
  });

  const targetSection = document.getElementById(`view-${viewId}`);
  if (targetSection) {
    targetSection.classList.add("active");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // Handle sub-filters if passed
  if (viewId === "courses" && subFilter) {
    document.querySelectorAll(".level-tab").forEach(tab => {
      tab.classList.toggle("active", tab.getAttribute("data-level") === subFilter);
    });
    renderCourses(subFilter, document.getElementById("course-search-input")?.value || "");
  }
};

// ================= 2. ZONA IB (RESOURCES & FILTERS) =================
function renderIBResources(filter = "all") {
  const container = document.getElementById("ib-cards-container");
  if (!container) return;

  const filtered = filter === "all" 
    ? ibResourcesData 
    : ibResourcesData.filter(item => item.category === filter);

  container.innerHTML = filtered.map(item => {
    const pillClass = item.category === "core" ? "pill-core" : (item.category === "stem" ? "pill-stem" : "pill-humanities");
    
    return `
      <div class="ib-card">
        <div class="ib-card-top">
          <span class="ib-cat-pill ${pillClass}">${item.categoryLabel}</span>
          <span class="ib-level-badge">${item.level}</span>
        </div>
        <h3>${item.title}</h3>
        <p>${item.desc}</p>
        <div class="ib-card-features">
          ${item.features.map(f => `<div class="ib-feat-item">${f}</div>`).join("")}
        </div>
        <button class="ib-card-btn" onclick="openResource('${item.docId || "none"}', '${encodeURIComponent(item.title)}')">
          <span>${item.docId ? "Abrir Guía en el Visor" : "Ver Estrategia"}</span>
          <span>→</span>
        </button>
      </div>
    `;
  }).join("");

  // Setup filter buttons
  document.querySelectorAll(".filter-chip").forEach(chip => {
    chip.addEventListener("click", () => {
      document.querySelectorAll(".filter-chip").forEach(c => c.classList.remove("active"));
      chip.classList.add("active");
      const f = chip.getAttribute("data-ib-filter");
      renderIBResources(f);
    });
  });
}

window.openResource = function(docId, title) {
  if (docId && docId !== "none") {
    loadDocumentById(docId);
    window.switchView("viewer");
  } else {
    window.switchView("viewer");
  }
};

// ================= 3. CURSOS & BUSCADOR =================
function renderCourses(level = "all", searchQuery = "") {
  const container = document.getElementById("courses-container");
  if (!container) return;

  const query = searchQuery.trim().toLowerCase();

  const filtered = coursesData.filter(c => {
    const matchesLevel = level === "all" || c.level === level;
    const matchesSearch = !query || 
      c.title.toLowerCase().includes(query) || 
      c.desc.toLowerCase().includes(query) || 
      c.topics.some(t => t.toLowerCase().includes(query));
    return matchesLevel && matchesSearch;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 3rem; background: var(--bg-card); border-radius: var(--radius-md); border: 1px dashed var(--border-subtle);">
        <p style="font-size: 1.2rem; color: #fff; margin-bottom: 0.5rem;">No se encontraron resultados para "${searchQuery}"</p>
        <p style="color: var(--text-dim); font-size: 0.9rem;">Prueba con otros términos como 'Cálculo', 'IB', 'Física' o cambia de nivel.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(c => {
    const actionClick = c.docId 
      ? `window.openResource('${c.docId}')` 
      : `window.switchView('viewer')`;

    return `
      <div class="course-item-card">
        <span class="course-level-tag tag-${c.level}">${c.levelBadge}</span>
        <h3>${c.title}</h3>
        <p>${c.desc}</p>
        <div class="course-topics">
          ${c.topics.map(t => `<span class="topic-chip">${t}</span>`).join("")}
        </div>
        <button class="course-action-btn" onclick="${actionClick}">
          ${c.docId ? "Abrir Módulo Didáctico" : "Acceder a Materiales"}
        </button>
      </div>
    `;
  }).join("");
}

function setupCourseSearch() {
  const searchInput = document.getElementById("course-search-input");
  const clearBtn = document.getElementById("clear-search-btn");
  const levelTabs = document.querySelectorAll(".level-tab");

  let currentLevel = "all";

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      const q = e.target.value;
      if (clearBtn) {
        clearBtn.style.display = q.length > 0 ? "block" : "none";
      }
      renderCourses(currentLevel, q);
    });
  }

  if (clearBtn) {
    clearBtn.addEventListener("click", () => {
      searchInput.value = "";
      clearBtn.style.display = "none";
      renderCourses(currentLevel, "");
    });
  }

  levelTabs.forEach(tab => {
    tab.addEventListener("click", () => {
      levelTabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      currentLevel = tab.getAttribute("data-level");
      renderCourses(currentLevel, searchInput ? searchInput.value : "");
    });
  });
}

// ================= 4. VISOR DE MATERIALES & HTMLs =================
function setupDocumentViewer() {
  setupMaterialFiltersAndSearch();
  renderMaterialsList();
  loadDocumentById(activeMaterialId);

  // Setup toolbar buttons
  const btnFullscreen = document.getElementById("btn-fullscreen-doc");
  const btnNewTab = document.getElementById("btn-open-newtab");
  const btnReload = document.getElementById("btn-reload-doc");
  const frameContainer = document.getElementById("frame-container");
  const iframe = document.getElementById("doc-iframe");

  if (btnFullscreen && frameContainer) {
    btnFullscreen.addEventListener("click", () => {
      if (!document.fullscreenElement) {
        frameContainer.requestFullscreen().catch(err => {
          alert(`Error al activar pantalla completa: ${err.message}`);
        });
      } else {
        document.exitFullscreen();
      }
    });
  }

  if (btnNewTab) {
    btnNewTab.addEventListener("click", () => {
      const activeDoc = currentMaterials.find(m => m.id === activeMaterialId);
      if (activeDoc) {
        window.open(activeDoc.url, "_blank");
      }
    });
  }

  if (btnReload && iframe) {
    btnReload.addEventListener("click", () => {
      iframe.src = iframe.src;
    });
  }
}

function setupMaterialFiltersAndSearch() {
  const searchInput = document.getElementById("mat-search-input");
  const filterPills = document.querySelectorAll(".mat-pill");

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      matSearchQuery = e.target.value.trim().toLowerCase();
      renderMaterialsList();
    });
  }

  filterPills.forEach(pill => {
    pill.addEventListener("click", () => {
      filterPills.forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      matActiveCategory = pill.getAttribute("data-cat") || "all";
      renderMaterialsList();
    });
  });
}

function renderMaterialsList() {
  const listEl = document.getElementById("materials-list");
  const countEl = document.getElementById("library-count");
  if (!listEl) return;

  const filtered = currentMaterials.filter(mat => {
    const matchCat = matActiveCategory === "all" || mat.categoryGroup === matActiveCategory;
    const matchQuery = !matSearchQuery || 
      mat.title.toLowerCase().includes(matSearchQuery) || 
      mat.category.toLowerCase().includes(matSearchQuery);
    return matchCat && matchQuery;
  });

  if (countEl) {
    countEl.textContent = `${currentMaterials.length} listos`;
  }

  if (filtered.length === 0) {
    listEl.innerHTML = `
      <div style="text-align: center; padding: 2rem 1rem; color: var(--text-dim); font-size: 0.8rem;">
        No hay documentos que coincidan con la búsqueda.
      </div>
    `;
    return;
  }

  listEl.innerHTML = filtered.map(mat => {
    const isActive = mat.id === activeMaterialId;
    const catClass = mat.categoryGroup === "math" 
      ? "cat-math" 
      : (mat.categoryGroup === "history" 
          ? "cat-history" 
          : (mat.categoryGroup === "core" ? "cat-core" : "cat-user"));

    return `
      <div class="material-item ${isActive ? "active" : ""}" onclick="selectMaterial('${mat.id}')">
        <div class="mat-item-info">
          <span class="mat-name" title="${mat.title}">${mat.title}</span>
          <div class="mat-meta">
            <span class="mat-cat-tag ${catClass}">${mat.badgeLabel || mat.categoryGroup.toUpperCase()}</span>
            <span class="mat-source">${mat.category}</span>
          </div>
        </div>
        <span class="mat-icon">${isActive ? "▶" : "📄"}</span>
      </div>
    `;
  }).join("");
}

window.selectMaterial = function(id) {
  activeMaterialId = id;
  renderMaterialsList();
  loadDocumentById(id);
};

function loadDocumentById(id) {
  const mat = currentMaterials.find(m => m.id === id);
  if (!mat) return;

  activeMaterialId = id;
  const iframe = document.getElementById("doc-iframe");
  const emptyState = document.getElementById("frame-empty-state");
  const titleEl = document.getElementById("viewer-doc-title");
  const badgeEl = document.getElementById("viewer-doc-badge");

  if (titleEl) titleEl.textContent = mat.title;
  if (badgeEl) badgeEl.textContent = mat.isLocalBlob ? "HTML_LOCAL" : (mat.badgeLabel || "OFICIAL");

  if (iframe) {
    iframe.style.display = "block";
    iframe.src = mat.url;
    if (emptyState) emptyState.style.display = "none";
  }

  renderMaterialsList();
}

// --- Drag & Drop / File Input Handling ---
function setupFileUpload() {
  const dropZone = document.getElementById("html-drop-zone");
  const fileInput = document.getElementById("html-file-input");
  const quickUploadBtn = document.getElementById("quick-upload-btn");

  if (dropZone && fileInput) {
    dropZone.addEventListener("click", () => fileInput.click());

    dropZone.addEventListener("dragover", (e) => {
      e.preventDefault();
      dropZone.classList.add("dragover");
    });

    dropZone.addEventListener("dragleave", () => {
      dropZone.classList.remove("dragover");
    });

    dropZone.addEventListener("drop", (e) => {
      e.preventDefault();
      dropZone.classList.remove("dragover");
      if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
        handleUploadedFiles(e.dataTransfer.files);
      }
    });

    fileInput.addEventListener("change", (e) => {
      if (e.target.files && e.target.files.length > 0) {
        handleUploadedFiles(e.target.files);
      }
    });
  }

  if (quickUploadBtn) {
    quickUploadBtn.addEventListener("click", () => {
      window.openUploadModal();
    });
  }
}

function handleUploadedFiles(fileList) {
  Array.from(fileList).forEach(file => {
    if (file.name.endsWith(".html") || file.name.endsWith(".htm")) {
      const blobUrl = URL.createObjectURL(file);
      const newId = `user-doc-${Date.now()}-${Math.floor(Math.random() * 1000)}`;

      const newMaterial = {
        id: newId,
        title: file.name.replace(/\.[^/.]+$/, ""),
        category: "Cargado en vivo (Local)",
        categoryGroup: "user",
        badgeLabel: "USUARIO",
        url: blobUrl,
        isLocalBlob: true
      };

      currentMaterials.unshift(newMaterial);
      activeMaterialId = newId;
    } else {
      alert(`El archivo ${file.name} no parece ser un archivo HTML (.html).`);
    }
  });

  renderMaterialsList();
  loadDocumentById(activeMaterialId);
  window.switchView("viewer");
}

// ================= 5. CALCULADORA OFICIAL IB /45 =================
function setupIBCalculator() {
  const selects = [
    document.getElementById("calc-sub-1"),
    document.getElementById("calc-sub-2"),
    document.getElementById("calc-sub-3"),
    document.getElementById("calc-sub-4"),
    document.getElementById("calc-sub-5"),
    document.getElementById("calc-sub-6"),
    document.getElementById("calc-tok"),
    document.getElementById("calc-ee")
  ];

  selects.forEach(select => {
    if (select) {
      select.addEventListener("change", recalculateIBScore);
    }
  });

  recalculateIBScore();
}

// Official IB TOK/EE Matrix
function getTOKEEBonus(tok, ee) {
  if (tok === "E" || ee === "E") return { points: 0, isE: true };

  const matrix = {
    "AA": 3, "AB": 3, "BA": 3,
    "AC": 2, "CA": 2, "BB": 2,
    "AD": 2, "DA": 2, "BC": 1, "CB": 1,
    "BD": 1, "DB": 1, "CC": 1,
    "CD": 0, "DC": 0, "DD": 0
  };

  const key = `${tok}${ee}`;
  return { points: matrix[key] ?? 0, isE: false };
}

function recalculateIBScore() {
  const s1 = parseInt(document.getElementById("calc-sub-1")?.value || "6", 10);
  const s2 = parseInt(document.getElementById("calc-sub-2")?.value || "7", 10);
  const s3 = parseInt(document.getElementById("calc-sub-3")?.value || "6", 10);
  const s4 = parseInt(document.getElementById("calc-sub-4")?.value || "5", 10);
  const s5 = parseInt(document.getElementById("calc-sub-5")?.value || "6", 10);
  const s6 = parseInt(document.getElementById("calc-sub-6")?.value || "6", 10);

  const tok = document.getElementById("calc-tok")?.value || "A";
  const ee = document.getElementById("calc-ee")?.value || "B";

  const subjectsSum = s1 + s2 + s3 + s4 + s5 + s6;
  const coreResult = getTOKEEBonus(tok, ee);
  const bonus = coreResult.points;
  const total = subjectsSum + bonus;

  // Update DOM numbers
  const totalEl = document.getElementById("calc-total-score");
  const subjSumEl = document.getElementById("calc-subjects-sum");
  const bonusSumEl = document.getElementById("calc-bonus-sum");
  const statusTitle = document.getElementById("calc-status-title");
  const statusDesc = document.getElementById("calc-status-desc");
  const statusCard = document.getElementById("calc-status-card");

  if (totalEl) totalEl.textContent = total;
  if (subjSumEl) subjSumEl.textContent = subjectsSum;
  if (bonusSumEl) bonusSumEl.textContent = bonus;

  // Check official IB Diploma requirements
  const grades = [s1, s2, s3, s4, s5, s6];
  const hasGrade1 = grades.includes(1);
  const count2 = grades.filter(g => g === 2).length;
  const count3 = grades.filter(g => g === 3).length;

  let passed = true;
  let reason = "";

  if (coreResult.isE) {
    passed = false;
    reason = "Obtener una 'E' en TOK o en Monografía (EE) descalifica automáticamente para obtener el Diploma del IB (condición reprobatoria).";
  } else if (total < 24) {
    passed = false;
    reason = `Puntaje total (${total}) inferior al mínimo de 24 puntos requerido para la obtención del Diploma.`;
  } else if (hasGrade1) {
    passed = false;
    reason = "No se puede obtener el Diploma con una calificación de nivel 1 en ninguna asignatura.";
  } else if (count2 > 2) {
    passed = false;
    reason = "No se permiten más de dos calificaciones de nivel 2.";
  } else if (count3 > 3) {
    passed = false;
    reason = "No se permiten más de tres calificaciones de nivel 3 o inferior.";
  }

  if (passed) {
    if (statusCard) statusCard.style.borderLeftColor = "var(--neon-emerald)";
    if (statusTitle) {
      statusTitle.style.color = "var(--neon-emerald)";
      if (total >= 40) {
        statusTitle.textContent = "¡RANGO DE ÉLITE MUNDIAL (40+)!";
        statusDesc.textContent = "Puntaje extraordinario. Te sitúas en el percentil superior del 5% global, elegible para Oxford, Cambridge, MIT, Harvard y becas de excelencia.";
      } else if (total >= 36) {
        statusTitle.textContent = "DIPLOMA ALCANZADO CON DISTINCIÓN ALTA (36-39)";
        statusDesc.textContent = "Excelente desempeño. Rango muy competitivo para universidades de primer nivel en Europa, EE. UU. y Latinoamérica.";
      } else {
        statusTitle.textContent = "DIPLOMA IB ALCANZADO (24-35)";
        statusDesc.textContent = "Cumples con todos los criterios para la adjudicación del Diploma oficial de Bachillerato Internacional.";
      }
    }
  } else {
    if (statusCard) statusCard.style.borderLeftColor = "var(--neon-pink)";
    if (statusTitle) {
      statusTitle.style.color = "var(--neon-pink)";
      statusTitle.textContent = "DIPLOMA NO ALCANZADO SEGÚN CRITERIOS";
    }
    if (statusDesc) {
      statusDesc.textContent = reason;
    }
  }
}

// ================= 6. POMODORO OVERCLOCK =================
let pomodoroTimer = null;
let pomodoroRemaining = 1500;
let pomodoroIsRunning = false;

function setupPomodoroTimer() {
  const digitsEl = document.getElementById("timer-digits");
  const stateEl = document.getElementById("timer-state");
  const startBtn = document.getElementById("pomo-start-btn");
  const resetBtn = document.getElementById("pomo-reset-btn");
  const modeButtons = document.querySelectorAll(".pomo-mode-btn");

  modeButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      modeButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const seconds = parseInt(btn.getAttribute("data-time") || "1500", 10);
      const label = btn.getAttribute("data-label") || "ENFOQUE";
      
      clearInterval(pomodoroTimer);
      pomodoroIsRunning = false;
      pomodoroRemaining = seconds;
      updateTimerDisplay(pomodoroRemaining);
      if (stateEl) stateEl.textContent = label;
      if (startBtn) startBtn.textContent = "INICIAR SESIÓN";
    });
  });

  if (startBtn) {
    startBtn.addEventListener("click", () => {
      if (pomodoroIsRunning) {
        clearInterval(pomodoroTimer);
        pomodoroIsRunning = false;
        startBtn.textContent = "CONTINUAR";
        if (stateEl) stateEl.textContent = "PAUSADO";
      } else {
        pomodoroIsRunning = true;
        startBtn.textContent = "PAUSAR";
        if (stateEl) stateEl.textContent = "SESIÓN EN CURSO // ENFOQUE MÁXIMO";

        pomodoroTimer = setInterval(() => {
          if (pomodoroRemaining > 0) {
            pomodoroRemaining--;
            updateTimerDisplay(pomodoroRemaining);
          } else {
            clearInterval(pomodoroTimer);
            pomodoroIsRunning = false;
            playNotificationSound();
            if (stateEl) stateEl.textContent = "¡SESIÓN COMPLETADA!";
            if (startBtn) startBtn.textContent = "NUEVA SESIÓN";
          }
        }, 1000);
      }
    });
  }

  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      clearInterval(pomodoroTimer);
      pomodoroIsRunning = false;
      const activeMode = document.querySelector(".pomo-mode-btn.active");
      pomodoroRemaining = parseInt(activeMode?.getAttribute("data-time") || "1500", 10);
      updateTimerDisplay(pomodoroRemaining);
      if (stateEl) stateEl.textContent = "REINICIADO - LISTO";
      if (startBtn) startBtn.textContent = "INICIAR SESIÓN";
    });
  }
}

function updateTimerDisplay(totalSeconds) {
  const digitsEl = document.getElementById("timer-digits");
  const mins = Math.floor(totalSeconds / 60);
  const secs = totalSeconds % 60;
  const formatted = `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  if (digitsEl) digitsEl.textContent = formatted;
  document.title = `(${formatted}) Themachinecorner // theloser`;
}

function playNotificationSound() {
  try {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    
    osc.type = "sine";
    osc.frequency.setValueAtTime(587.33, audioCtx.currentTime);
    osc.frequency.setValueAtTime(880, audioCtx.currentTime + 0.15);
    
    gain.gain.setValueAtTime(0.2, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.6);
    
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + 0.6);
  } catch (e) {
    // AudioContext not supported in environment
  }
}

// ================= 7. GLOBAL MODAL =================
function setupModal() {
  const modal = document.getElementById("upload-modal");
  const closeBtn = document.getElementById("modal-close-btn");

  if (closeBtn && modal) {
    closeBtn.addEventListener("click", () => {
      window.closeUploadModal();
    });

    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        window.closeUploadModal();
      }
    });
  }
}

window.openUploadModal = function() {
  const modal = document.getElementById("upload-modal");
  if (modal) modal.style.display = "flex";
};

window.closeUploadModal = function() {
  const modal = document.getElementById("upload-modal");
  if (modal) modal.style.display = "none";
};
