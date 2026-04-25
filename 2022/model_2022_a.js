const TEST_ID = "e2022a"; 
const questions = [
  { "question": "Quin principi d’organització administrativa pot ser aplicat tant dins d’una mateixa Administració Pública com entre diferents Administracions Públiques:", "answers": [
      { "text": "Jerarquia", "correct": false },
      { "text": "Descentralització", "correct": false },
      { "text": "Desconcentració", "correct": false },
      { "text": "Coordinació i cooperació", "correct": true }
  ]},
  { "question": "Què és el CSV en la signatura electrònica?", "answers": [
      { "text": "Codi Segur de Verificació", "correct": true },
      { "text": "Codi Sintàctic de Vigilància", "correct": false },
      { "text": "Codi Seguer per Viatjar", "correct": false },
      { "text": "Codi simple de Verificació", "correct": false }
  ]},
  { "question": "Un funcionari crea un fitxer per a la gestió pròpia de la unitat amb dades de caràcter personal. Des del punt de vista de la legalitat vigent (RGPD i LOPDGDD):", "answers": [
      { "text": "És un tractament de dades exempt d’aplicar la normativa", "correct": false },
      { "text": "És un tractament de dades públiques exempt d’aplicar la normativa", "correct": false },
      { "text": "És un tractament de dades personals subjecte a la normativa", "correct": true },
      { "text": "No és un tractament de dades si no es comparteix amb tercers", "correct": false }
  ]},
  { "question": "D’acord amb la legislació vigent, poden oferir títols de grau:", "answers": [
      { "text": "Només les universitats públiques", "correct": false },
      { "text": "Tant les universitats públiques com les privades", "correct": true },
      { "text": "Les universitats públiques qualsevol grau i les privades només títols propis", "correct": false },
      { "text": "Només els centres adscrits de la Generalitat", "correct": false }
  ]},
  { "question": "Els serveis públics mitjançant l’Administració electrònica són accessibles per la ciutadania?", "answers": [
      { "text": "De dilluns a divendres en horari de matí", "correct": false },
      { "text": "Només els dies laborables", "correct": false },
      { "text": "24 hores els 7 dies de la setmana", "correct": true },
      { "text": "24 hores excepte els festius oficials", "correct": false }
  ]},
  { "question": "L’òrgan col·legiat de govern d’una facultat és:", "answers": [
      { "text": "El degà o degana", "correct": false },
      { "text": "La Junta de Facultat", "correct": true },
      { "text": "La Comissió de la Facultat", "correct": false },
      { "text": "El Consell de Govern de la Facultat", "correct": false }
  ]},
  { "question": "A la Llei Orgànica 2/2023, de 22 de març, del Sistema Universitari (LOSU), es regulen els següents col·lectius:", "answers": [
      { "text": "Només estudiants", "correct": false },
      { "text": "Només professorat i PTGAS", "correct": false },
      { "text": "Estudiants, personal docent i investigador (PDI) i PTGAS", "correct": true },
      { "text": "Estudiants, PDI, PTGAS i personal d'empreses de serveis", "correct": false }
  ]},
  { "question": "D’acord amb la Llei 1/2003 d’Universitats de Catalunya, correspon l’impuls i el desenvolupament del sistema universitari de Catalunya:", "answers": [
      { "text": "A les universitats, exclusivament", "correct": false },
      { "text": "A la Generalitat de Catalunya, exclusivament", "correct": false },
      { "text": "A les universitats i a la Generalitat de Catalunya", "correct": true },
      { "text": "A les universitats, la Generalitat i el Consell d'Universitats", "correct": false }
  ]},
  { "question": "No és un principi en el qual es fonamenta l’ordenació del sistema universitari de Catalunya:", "answers": [
      { "text": "Autonomia universitària", "correct": false },
      { "text": "Igualtat d’oportunitats en l’accés i la permanència a la Universitat", "correct": false },
      { "text": "Contribució a l’aprenentatge dels menors d’edat", "correct": true },
      { "text": "Foment de la recerca i la transferència", "correct": false }
  ]},
  { "question": "De qui és competència “elaborar i difondre les polítiques de prevenció de riscos laborals i de protecció del medi ambient de la Universitat de Barcelona”?", "answers": [
      { "text": "El Rector o Rectora", "correct": false },
      { "text": "El Servei de PTGAS", "correct": false },
      { "text": "El Consell de Govern", "correct": true },
      { "text": "Els degans i deganes", "correct": false }
  ]},
  { "question": "D’acord amb la Llei 1/2003 d’Universitats de Catalunya, la comunitat universitària és formada pels:", "answers": [
      { "text": "Estudiants, el PDI i el PTGAS", "correct": false },
      { "text": "Estudiants, el PDI, els investigadors de les universitats i el PTGAS", "correct": true },
      { "text": "Estudiants, els investigadors i el personal de serveis externs", "correct": false },
      { "text": "Només el personal funcionari i els estudiants", "correct": false }
  ]},
  { "question": "L’article 27.10 de la Constitució Espanyola reconeix:", "answers": [
      { "text": "L’autonomia plena de les universitats", "correct": false },
      { "text": "L’autonomia de les universitats en els termes que estableixi la llei", "correct": true },
      { "text": "L’autonomia només per a les universitats públiques", "correct": false },
      { "text": "El dret al títol universitari gratuït", "correct": false }
  ]},
  { "question": "El Claustre Universitari segons la LOSU:", "answers": [
      { "text": "És el màxim òrgan de govern executiu de la Universitat", "correct": false },
      { "text": "És l’òrgan de participació de la societat en la Universitat", "correct": false },
      { "text": "És el màxim òrgan de representació de la comunitat universitària", "correct": true },
      { "text": "És un òrgan consultiu sense competències electorals", "correct": false }
  ]},
  { "question": "Segons l’Estatut de la Universitat de Barcelona, el Síndic de Greuges de la UB:", "answers": [
      { "text": "Té un mandat de quatre anys i no pot ser reelegit", "correct": false },
      { "text": "Té un mandat de quatre anys i pot ser reelegit una única vegada", "correct": true },
      { "text": "Té un mandat de cinc anys i no es pot prorrogar", "correct": false },
      { "text": "Té un mandat indefinit fins a la jubilació", "correct": false }
  ]},
  { "question": "Quins documents no són registrables oficialment?", "answers": [
      { "text": "Trameses entre unitats d'una mateixa Administració Pública", "correct": true },
      { "text": "Sol·licituds d'interessats", "correct": false },
      { "text": "Recursos administratius", "correct": false },
      { "text": "Reclamacions de responsabilitat", "correct": false }
  ]},
  { "question": "Quina d’aquestes afirmacions és correcta:", "answers": [
      { "text": "L’Administració Pública té personalitat jurídica única", "correct": true },
      { "text": "L’Òrgan administratiu té personalitat jurídica independent", "correct": false },
      { "text": "La Unitat administrativa té capacitat per contractar", "correct": false },
      { "text": "L’òrgan administratiu no vincula mai a l’Administració", "correct": false }
  ]},
  { "question": "Segons l’Estatut de la UB, dirigir i organitzar el Registre de la Universitat de Barcelona és competència de:", "answers": [
      { "text": "El/la Gerent/a", "correct": false },
      { "text": "El/La Rector/a", "correct": false },
      { "text": "El/La Secretari/a General", "correct": true },
      { "text": "El/La Cap de l'Oficina de l'Estatut", "correct": false }
  ]},
  { "question": "Segons la llei 19/2014 de transparència de Catalunya, quin és el seu principal àmbit subjectiu d’aplicació?", "answers": [
      { "text": "Les administracions públiques de Catalunya", "correct": true },
      { "text": "Totes les administracions públiques de l'Estat Espanyol", "correct": false },
      { "text": "Només els alts càrrecs de la Generalitat", "correct": false },
      { "text": "Les administracions públiques, excepte les universitats", "correct": false }
  ]},
  { "question": "Quin d’aquests és un òrgan col·legiat de la Universitat de Barcelona:", "answers": [
      { "text": "Rector/a", "correct": false },
      { "text": "Director/a de Departament", "correct": false },
      { "text": "Claustre", "correct": true },
      { "text": "Administrador/a de centre", "correct": false }
  ]},
  { "question": "Les retribucions dels funcionaris de carrera es classifiquen en:", "answers": [
      { "text": "Bàsiques i complementàries", "correct": true },
      { "text": "Bàsiques i extraordinàries", "correct": false },
      { "text": "Bàsiques, complementàries i de productivitat", "correct": false },
      { "text": "Sou base i triennis exclusivament", "correct": false }
  ]},
  { "question": "Els actes administratius de contingut impossible són:", "answers": [
      { "text": "Anul·lables", "correct": false },
      { "text": "Actes amb defecte de forma esmenable", "correct": false },
      { "text": "Actes que no produeixen cap obligació", "correct": false },
      { "text": "Nuls de ple dret", "correct": true }
  ]},
  { "question": "Qui presideix la Comissió d’Igualtat de la Universitat de Barcelona?", "answers": [
      { "text": "El director o directora de Relacions Laborals", "correct": false },
      { "text": "La presidència és rotatòria cada any", "correct": false },
      { "text": "El rector o rectora, o la persona en qui delegui", "correct": true },
      { "text": "El/la representant del PTGAS", "correct": false }
  ]},
  { "question": "Quin és el termini assenyalat per la Llei 39/2015 per realitzar una notificació des que s'ha dictat l'acte?", "answers": [
      { "text": "15 dies", "correct": false },
      { "text": "10 dies", "correct": true },
      { "text": "20 dies", "correct": false },
      { "text": "30 dies", "correct": false }
  ]},
  { "question": "Sota la LOSU (Llei 2/2023), quina d’aquestes categories és de professorat funcionari?", "answers": [
      { "text": "Professorat Lector", "correct": false },
      { "text": "Professorat Titular d’Universitat", "correct": true },
      { "text": "Professorat Associat", "correct": false },
      { "text": "Professorat Visitant Laboral", "correct": false }
  ]},
  { "question": "Contra quin acte administratiu es pot recórrer en via administrativa?", "answers": [
      { "text": "Acte resolutori i acte de tràmit qualificat", "correct": true },
      { "text": "Només l'acte resolutori", "correct": false },
      { "text": "Qualsevol acte de tràmit simple", "correct": false },
      { "text": "Cap de les anteriors és correcta", "correct": false }
  ]},
  { "question": "Quin és el nom del programa informàtic de registre de la UB?", "answers": [
      { "text": "ERES", "correct": true },
      { "text": "ARES", "correct": false },
      { "text": "UB-Doc", "correct": false },
      { "text": "Registrum-Digital", "correct": false }
  ]},
  { "question": "Segons el TREBEP, les Administracions públiques estructuraran la seva organització mitjançant:", "answers": [
      { "text": "Relacions de llocs de treball (RLT)", "correct": true },
      { "text": "Ofertes d’ocupació pública anuals", "correct": false },
      { "text": "Plans estratègics de formació", "correct": false },
      { "text": "Enquestes de clima laboral", "correct": false }
  ]},
  { "question": "A la Universitat de Barcelona a qui correspon prendre les resolucions relatives a situacions administratives i règim disciplinari:", "answers": [
      { "text": "Al Gerent o la Gerenta", "correct": false },
      { "text": "Al Consell Social", "correct": false },
      { "text": "Al Rector o la Rectora", "correct": true },
      { "text": "Al Claustre Universitari", "correct": false }
  ]},
  { "question": "Quina d’aquestes categories és de professorat laboral sota la nova LOSU?", "answers": [
      { "text": "Catedràtic/a d’Universitat", "correct": false },
      { "text": "Titular d’universitat", "correct": false },
      { "text": "Professorat Permanent Laboral", "correct": true },
      { "text": "Totes són de caràcter funcionari", "correct": false }
  ]},
  { "question": "En el Pla d’Igualtat de la UB, quin d'aquests apartats NO és una línia principal dins de l'eix 'Igualtat en el treball'?", "answers": [
      { "text": "Medi ambient", "correct": true },
      { "text": "Accés, promoció i formació", "correct": false },
      { "text": "Organització del treball i condicions de treball", "correct": false },
      { "text": "Organització del temps i conciliació", "correct": false }
  ]},
  { "question": "Segons la llei 19/2014 de transparència de Catalunya, quin és l’instrument bàsic per donar compliment a les obligacions de transparència?", "answers": [
      { "text": "El Portal de la Transparència", "correct": true },
      { "text": "La Seu Electrònica", "correct": false },
      { "text": "El web institucional", "correct": false },
      { "text": "La publicació al DOGC", "correct": false }
  ]},
  { "question": "El procediment administratiu s’inicia d'acord amb la Llei 39/2015:", "answers": [
      { "text": "Sempre a sol·licitud de l’interessat", "correct": false },
      { "text": "D’ofici o a sol·licitud de la persona interessada", "correct": true },
      { "text": "Només quan hi ha un silenci negatiu previ", "correct": false },
      { "text": "Per imposició del Defensor del Poble", "correct": false }
  ]},
  { "question": "La Llei Orgànica 2/2023 (LOSU) del Sistema Universitari regula:", "answers": [
      { "text": "Només la creació d’universitats estatals", "correct": false },
      { "text": "Només les universitats privades amb ànim de lucre", "correct": false },
      { "text": "La creació i reconeixement d’universitats públiques i privades", "correct": true },
      { "text": "Exclusivament el règim de beques de l'Estat", "correct": false }
  ]},
  { "question": "Segons l’Estatut de la UB, el pressupost anual de la Universitat ha de ser:", "answers": [
      { "text": "Públic, únic i equilibrat", "correct": true },
      { "text": "Secret fins a la seva aprovació pel Claustre", "correct": false },
      { "text": "Sempre deficitari per garantir la inversió en recerca", "correct": false },
      { "text": "Gestionat per una empresa externa", "correct": false }
  ]},
  { "question": "L’adreça electrònica disponible per als ciutadans la titularitat de la qual correspon a una Administració pública es denomina:", "answers": [
      { "text": "Canal virtual", "correct": false },
      { "text": "Bústia de dades", "correct": false },
      { "text": "Seu electrònica", "correct": true },
      { "text": "Correu d'atenció al ciutadà", "correct": false }
  ]},
  { "question": "Quin és el procediment de tramitació d'un recurs administratiu?", "answers": [
      { "text": "Iniciació, instrucció i repàs de dades", "correct": false },
      { "text": "Audiència, proposta i arxiu", "correct": false },
      { "text": "Iniciació, instrucció i finalització", "correct": true },
      { "text": "No està subjecte a cap fase específica", "correct": false }
  ]},
  { "question": "En les ofertes d’ocupació pública (TREBEP), quin percentatge de places s’ha de reservar específicament per a persones amb discapacitat intel·lectual?", "answers": [
      { "text": "7%", "correct": false },
      { "text": "2%", "correct": true },
      { "text": "5%", "correct": false },
      { "text": "10%", "correct": false }
  ]},
  {
    "question": "D’acord amb l’Estatut de la Universitat de Barcelona, quina de les següents afirmacions sobre el Síndic de Greuges és la correcta?",
    "answers": [
      { "text": "És elegit pel Claustre Universitari per un període de quatre anys i pot ser reelegit per un mandat consecutiu més.", "correct": true },
      { "text": "Actua sota el mandat imperatiu del Consell Social per garantir la transparència econòmica de la institució.", "correct": false },
      { "text": "És un òrgan unipersonal de govern encarregat de la gestió del personal tècnic, de gestió i d'administració i serveis.", "correct": false },
      { "text": "El seu mandat és de cinc anys i la seva elecció correspon directament al Rector o Rectora entre el personal docent i investigador.", "correct": false }
    ]
  },
  {
    "question": "D’acord amb l’Estatut de la Universitat de Barcelona, quina és la durada del mandat del Síndic de Greuges i quina és la seva possibilitat de reelecció?",
    "answers": [
      { "text": "Mandat de 5 anys, reelegible de forma indefinida.", "correct": false },
      { "text": "Mandat de 4 anys, reelegible una sola vegada.", "correct": true },
      { "text": "Mandat de 4 anys, sense possibilitat de reelecció.", "correct": false },
      { "text": "Mandat de 6 anys, coincidint amb el mandat del Rector.", "correct": false }
    ]
  },
  {
    "question": "Respecte a les competències dels òrgans de la UB, a quin òrgan correspon l'exercici de la potestat disciplinària i la resolució de les situacions administratives?",
    "answers": [
      { "text": "Al Consell de Govern.", "correct": false },
      { "text": "Al Secretari o Secretària General.", "correct": false },
      { "text": "Al Rector o Rectora.", "correct": true },
      { "text": "Al Consell Social.", "correct": false }
    ]
  },
  {
    "question": "En el marc de la Llei 39/2015, quina és la naturalesa jurídica d'aquells actes administratius que tenen un contingut impossible?",
    "answers": [
      { "text": "Anul·labilitat de l'acte.", "correct": false },
      { "text": "Nul·litat de ple dret.", "correct": true },
      { "text": "Irregularitat no invalidant.", "correct": false },
      { "text": "Nul·litat relativa.", "correct": false }
    ]
  },
  {
    "question": "Quin és el termini màxim de què disposa l'Administració per dictar i notificar un acte administratiu des de la data en què ha estat dictat?",
    "answers": [
      { "text": "5 dies hàbils.", "correct": false },
      { "text": "10 dies hàbils.", "correct": true },
      { "text": "15 dies naturals.", "correct": false },
      { "text": "1 mes.", "correct": false }
    ]
  },
  {
    "question": "Segons els Criteris de la UB (CUB), quin document s'ha d'utilitzar per acreditar un tràmit de caràcter purament procedimental o intern?",
    "answers": [
      { "text": "Certificat.", "correct": false },
      { "text": "Ofici.", "correct": false },
      { "text": "Diligència.", "correct": true },
      { "text": "Informe.", "correct": false }
    ]
  },
  {
    "question": "En la redacció de les actes de reunió segons el CUB, quin és el temps verbal preferent per a l'exposició dels fets i els acords?",
    "answers": [
      { "text": "Passat simple d'indicatiu.", "correct": false },
      { "text": "Present d'indicatiu.", "correct": true },
      { "text": "Futur pròxim.", "correct": false },
      { "text": "Pretèrit imperfet de subjuntiu.", "correct": false }
    ]
  },
  {
    "question": "En un full de càlcul Excel, si es vol fer referència a un rang continu de cel·les (per exemple, de la A1 a la B10), quin símbol s'ha d'utilitzar?",
    "answers": [
      { "text": "Punt i coma (;)", "correct": false },
      { "text": "Dos punts (:)", "correct": true },
      { "text": "Barra inclinada (/)", "correct": false },
      { "text": "Asterisc (*)", "correct": false }
    ]
  },
  {
    "question": "A Microsoft Word, des de quin element de la interfície es gestionen habitualment les tabulacions per definir-ne la posició i l'alineació?",
    "answers": [
      { "text": "Des de la barra d'estat.", "correct": false },
      { "text": "Des del menú de revisió.", "correct": false },
      { "text": "Des del Regle (regla).", "correct": true },
      { "text": "Des del panell de navegació.", "correct": false }
    ]
  },
  {
    "question": "Quin principi de la Protecció de Dades estableix que només s'han de tractar les dades estrictament necessàries per a la finalitat prevista?",
    "answers": [
      { "text": "Principi de transparència.", "correct": false },
      { "text": "Principi de minimització.", "correct": true },
      { "text": "Principi de limitació del termini.", "correct": false },
      { "text": "Principi d'integritat.", "correct": false }
    ]
  },
  {
    "question": "Com es defineix oficialment el Portal de Transparencia en l'àmbit administratiu?",
    "answers": [
      { "text": "Com una eina d'accés exclusiu per al personal de la UB.", "correct": false },
      { "text": "Com l'instrument per a la publicitat activa.", "correct": true },
      { "text": "Com un repositori de dades personals protegit per CSV.", "correct": false },
      { "text": "Com la plataforma de notificacions electròniques.", "correct": false }
    ]
  },







  ];
  
  function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function renderTest() {
  const form = document.getElementById("test-form");
  form.innerHTML = "";

  // 1. Cargar u organizar el orden de las preguntas
  let currentQuestions;
  const savedOrder = localStorage.getItem(`questions-${TEST_ID}`);
  
  if (savedOrder) {
    currentQuestions = JSON.parse(savedOrder);
  } else {
    // Barajamos preguntas y respuestas y lo guardamos
    currentQuestions = questions.map(q => ({
      ...q,
      answers: shuffleArray([...q.answers])
    }));
    currentQuestions = shuffleArray(currentQuestions);
    localStorage.setItem(`questions-${TEST_ID}`, JSON.stringify(currentQuestions));
  }

  // 2. Cargar respuestas guardadas
  const savedProgress = JSON.parse(localStorage.getItem(`progress-${TEST_ID}`)) || { respuestas: {} };

  currentQuestions.forEach((q, index) => {
    const questionWrapper = document.createElement("div");
    questionWrapper.className = "question";
    questionWrapper.id = `q-container-${index}`;

    const title = document.createElement("h3");
    title.textContent = `${index + 1}. ${q.question}`;
    questionWrapper.appendChild(title);

    const answersWrapper = document.createElement("div");
    answersWrapper.className = "answers";

    q.answers.forEach((a) => {
      const label = document.createElement("label");
      label.className = "answer";

      const input = document.createElement("input");
      input.type = "radio";
      input.name = `q${index}`;
      input.value = a.text;
      input.dataset.correct = a.correct;
      
      if (savedProgress.respuestas[`q${index}`] === a.text) {
        input.checked = true;
      }

      label.appendChild(input);
      label.appendChild(document.createTextNode(a.text));
      answersWrapper.appendChild(label);
    });

    questionWrapper.appendChild(answersWrapper);
    form.appendChild(questionWrapper);

    // Corregir visualmente si ya estaba marcada
    if (savedProgress.respuestas[`q${index}`]) {
        autoCheckAnswer(questionWrapper);
    }
  });

  updateResponseCounter();
}

function autoCheckAnswer(questionEl) {
  const labels = questionEl.querySelectorAll("label");
  labels.forEach(label => {
    const input = label.querySelector("input");
    if (input.checked) {
      label.classList.add(input.dataset.correct === "true" ? "correct" : "incorrect");
    } else {
      label.classList.remove("correct", "incorrect");
    }
  });
}

function updateResponseCounter() {
  const currentQuestions = JSON.parse(localStorage.getItem(`questions-${TEST_ID}`));
  if (!currentQuestions) return;
  
  const total = currentQuestions.length;
  const selectedInputs = document.querySelectorAll("input[type=radio]:checked");
  const selectedCount = selectedInputs.length;
  
  document.getElementById("response-counter").textContent = `Respostes: ${selectedCount}/${total}`;

  // Guardar progreso
  const respuestas = {};
  selectedInputs.forEach(input => {
    respuestas[input.name] = input.value;
  });
  
  localStorage.setItem(`progress-${TEST_ID}`, JSON.stringify({
    total: total,
    respuestas: respuestas
  }));
}

function evaluateTest() {
  const questionsDOM = document.querySelectorAll(".question");
  let correctCount = 0;
  let total = questionsDOM.length;

  questionsDOM.forEach((questionEl) => {
    const inputCorrecto = questionEl.querySelector('input[data-correct="true"]');
    const inputMarcado = questionEl.querySelector('input:checked');

    questionEl.querySelectorAll("label").forEach(l => l.classList.remove("correct", "incorrect"));
    inputCorrecto.parentElement.classList.add("correct");

    if (inputMarcado) {
      if (inputMarcado.dataset.correct === "true") {
        correctCount++;
      } else {
        inputMarcado.parentElement.classList.add("incorrect");
      }
    }
  });

  const fallos = total - correctCount;
  const nota = ((correctCount / total) * 10).toFixed(2);
  const aprobado = fallos <= 5; // Límite de 5 fallos

  localStorage.setItem(`result-${TEST_ID}`, JSON.stringify({
    nota: nota,
    fallos: fallos,
    aprobado: aprobado
  }));

  const scoreDiv = document.getElementById("score");
  scoreDiv.style.display = "block";
  if (aprobado) {
    scoreDiv.innerHTML = `<h2>✅ APTE</h2> Nota: ${nota}/10 <br> Fallades: ${fallos}`;
    scoreDiv.style.backgroundColor = "#e8f5e9";
    scoreDiv.style.color = "#2e7d32";
  } else {
    scoreDiv.innerHTML = `<h2>❌ NO APTE</h2> Nota: ${nota}/10 <br> Fallades: ${fallos} <br> (Màxim permès: 5)`;
    scoreDiv.style.backgroundColor = "#fce8e8";
    scoreDiv.style.color = "#e74c3c";
  }
  
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Nueva función para el botón de Reiniciar
function reiniciarTest() {
    if (confirm("Vols tornar a començar? Es canviarà l'ordre de tot.")) {
        localStorage.removeItem(`questions-${TEST_ID}`);
        localStorage.removeItem(`progress-${TEST_ID}`);
        localStorage.removeItem(`result-${TEST_ID}`);
        location.reload();
    }
}

document.addEventListener("change", (e) => {
  if (e.target.matches("input[type=radio]")) {
    updateResponseCounter();
    autoCheckAnswer(e.target.closest(".question"));
  }
});

document.getElementById("submit").addEventListener("click", evaluateTest);
window.addEventListener("DOMContentLoaded", renderTest);