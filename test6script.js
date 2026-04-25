const TEST_ID = "t6"; 
const questions = [
 
  {
    "n": 1,
    "question": "Segons la Llei 39/2015, els actes administratius es produiran per escrit a través de mitjans electrònics, llevat que:",
    "answers": [
      { "text": "La seva naturalesa exigeixi una altra forma més adequada d'expressió i constància.", "correct": true },
      { "text": "L'interessat manifesti la seva voluntat de relacionar-se en paper i no estigui obligat a la relació electrònica.", "correct": false },
      { "text": "Es tracti d'actes de tràmit que no decideixin el fons de l'assumpte.", "correct": false },
      { "text": "L'òrgan dictant no tingui habilitada la seu electrònica en el moment de l'emissió.", "correct": false }
    ]
  },
  {
    "n": 2,
    "question": "Quin d'aquests es considera l'element subjectiu essencial de l'acte administratiu?",
    "answers": [
      { "text": "L'Administració Pública com a subjecte i la investidura legítima i competència de l'òrgan dictant.", "correct": true },
      { "text": "La lícita adequació del contingut a la finalitat perseguida pel dret.", "correct": false },
      { "text": "La causa o motiu pel qual es dicta la resolució.", "correct": false },
      { "text": "La capacitat d'obrar plena de l'interessat en el procediment.", "correct": false }
    ]
  },
  {
    "n": 3,
    "question": "La motivació dels actes administratius, segons l'article 35 de la Llei 39/2015, implica:",
    "answers": [
      { "text": "La succinta referència de fets i fonaments de dret en l'acte que es dicta.", "correct": true },
      { "text": "L'exposició detallada de totes les al·legacions presentades pels interessats encara que siguin impertinents.", "correct": false },
      { "text": "La inclusió de la signatura electrònica del titular de l'òrgan i el segell de temps.", "correct": false },
      { "text": "La notificació obligatòria del peu de recurs als interessats.", "correct": false }
    ]
  },
  {
    "n": 4,
    "question": "Quin d'aquests actes ha de ser obligatòriament motivat segons la llei?",
    "answers": [
      { "text": "Els actes que limitin drets subjectius o interessos legítims i els que resolguin procediments de revisió d'ofici.", "correct": true },
      { "text": "Tots els actes que posin fi a la via administrativa sense excepció.", "correct": false },
      { "text": "Els actes que confirmin acords de suspensió d'actes impugnats.", "correct": false },
      { "text": "Els actes dictats en virtut d'una potestat reglada on no hi hagi marge de discrecionalitat.", "correct": false }
    ]
  },
  {
    "n": 5,
    "question": "Un acte administratiu que es dicta prescindint totalment i absoluta del procediment legalment establert és:",
    "answers": [
      { "text": "Nul de ple dret.", "correct": true },
      { "text": "Anul·lable, però convalidable si l'interessat no presenta recurs.", "correct": false },
      { "text": "Una irregularitat no invalidant que només comporta sancions disciplinàries.", "correct": false },
      { "text": "Vàlid si es demostra que el resultat final hauria estat el mateix.", "correct": false }
    ]
  },
  {
    "n": 6,
    "question": "Els actes de les Administracions Públiques subjectes al Dret Administratiu es presumeixen:",
    "answers": [
      { "text": "Vàlids i produeixen efectes des de la data en què es dicten, llevat que se'n disposi el contrari.", "correct": true },
      { "text": "Vàlids només a partir del moment de la seva notificació efectiva.", "correct": false },
      { "text": "Legals, però la seva eficàcia està supeditada sempre a la publicació en un diari oficial.", "correct": false },
      { "text": "Nuls si no contenen expressament el fonament de dret de la competència.", "correct": false }
    ]
  },
  {
    "n": 7,
    "question": "L'eficàcia d'un acte quedarà demorada (retardada) quan:",
    "answers": [
      { "text": "Així ho exigeixi el seu contingut o estigui supeditada a la seva notificació, publicació o aprovació superior.", "correct": true },
      { "text": "L'administració no disposi de pressupost per a l'execució material de l'acte.", "correct": false },
      { "text": "S'interposi un recurs administratiu ordinari que suspengui automàticament l'acte.", "correct": false },
      { "text": "Es tracti d'un acte dictat per un òrgan col·legiat amb vots particulars en contra.", "correct": false }
    ]
  },
  {
    "n": 8,
    "question": "Es pot donar eficàcia retroactiva a un acte administratiu?",
    "answers": [
      { "text": "Sí, excepcionalment, quan es dictin en substitució d'actes anul·lats i produeixin efectes favorables a l'interessat.", "correct": true },
      { "text": "No, la irretroactivitat és un principi absolut segons la Constitució Espanyola.", "correct": false },
      { "text": "Sí, sempre que l'Administració ho consideri convenient per a l'interès general.", "correct": false },
      { "text": "Només si l'acte és de caràcter sancionador i afavoreix el procediment de recaptació.", "correct": false }
    ]
  },
  {
    "n": 9,
    "question": "Els actes que incorrin en qualsevol infracció de l'ordenament jurídic, inclosa la desviació de poder, són:",
    "answers": [
      { "text": "Anul·lables.", "correct": true },
      { "text": "Nuls de ple dret.", "correct": false },
      { "text": "Vàlids, sempre que no causin indefensió formal.", "correct": false },
      { "text": "Inexistents per falta d'un dels elements essencials.", "correct": false }
    ]
  },
  {
    "n": 10,
    "question": "La desviació de poder es defineix jurídicament com:",
    "answers": [
      { "text": "L'exercici de potestats administratives per a fins diferents dels fixats per l'ordenament jurídic.", "correct": true },
      { "text": "L'ús de la competència administrativa per un òrgan manifestament incompetent.", "correct": false },
      { "text": "L'alteració de l'ordre de tramitació dels expedients sense causa justificada.", "correct": false },
      { "text": "L'incompliment dels terminis de resolució per part de l'autoritat.", "correct": false }
    ]
  },
  {
    "n": 11,
    "question": "Un defecte de forma només determinarà l'anul·labilitat de l'acte quan:",
    "answers": [
      { "text": "Mantingui l'acte sense els requisits formals indispensables per assolir la seva finalitat o causi indefensió.", "correct": true },
      { "text": "L'error s'hagi produït en el nom o cognoms de l'interessat.", "correct": false },
      { "text": "L'acte s'hagi dictat en una llengua no oficial en el territori de la comunitat autònoma.", "correct": false },
      { "text": "No s'hagi utilitzat el model normalitzat previst en la seu electrònica.", "correct": false }
    ]
  },
  {
    "n": 12,
    "question": "L'acte pel qual l'Administració esmena errors materials, de fet o aritmètics s'anomena:",
    "answers": [
      { "text": "Rectificació d'errors.", "correct": true },
      { "text": "Revocació d'ofici.", "correct": false },
      { "text": "Revisió de l'acte anul·lable.", "correct": false },
      { "text": "Conversió de l'acte invàlid.", "correct": false }
    ]
  },
  {
    "n": 13,
    "question": "En quin termini es pot procedir a la rectificació d'errors materials o aritmètics?",
    "answers": [
      { "text": "En qualsevol moment, d'ofici o a instància dels interessats.", "correct": true },
      { "text": "Dins del termini d'un mes des de la notificació de l'acte.", "correct": false },
      { "text": "Mentre l'acte no hagi estat impugnat en via contenciosa administrativa.", "correct": false },
      { "text": "Només durant l'exercici pressupostari en què s'ha dictat l'acte.", "correct": false }
    ]
  },
  {
    "n": 14,
    "question": "Són nuls de ple dret els actes que tinguin un contingut:",
    "answers": [
      { "text": "Impossible.", "correct": true },
      { "text": "Il·lícit però realitzable materialment.", "correct": false },
      { "text": "Contrari a un informe no preceptiu de l'òrgan consultiu.", "correct": false },
      { "text": "Desfavorable i no motivat suficientment.", "correct": false }
    ]
  },
  {
    "n": 15,
    "question": "Un acte dictat per un òrgan manifestament incompetent per raó de la matèria o del territori és:",
    "answers": [
      { "text": "Nul de ple dret.", "correct": true },
      { "text": "Anul·lable, i pot ser convalidat pel superior jeràrquic.", "correct": false },
      { "text": "Vàlid si l'interessat el consent de forma expressa.", "correct": false },
      { "text": "Inexistent per falta total de voluntat administrativa.", "correct": false }
    ]
  },
  {
    "n": 16,
    "question": "La convalidació de l'acte anul·lable consisteix en:",
    "answers": [
      { "text": "L'esmena dels vicis de què pateixi l'acte, produint efectes des de la data de la convalidació.", "correct": true },
      { "text": "La repetició de tot el procediment administratiu des de la fase d'inici.", "correct": false },
      { "text": "La declaració judicial que l'acte és vàlid tot i les seves infraccions.", "correct": false },
      { "text": "L'acceptació per part de l'interessat de les irregularitats comeses.", "correct": false }
    ]
  },
  {
    "n": 17,
    "question": "Si un vici d'anul·labilitat consisteix en la manca d'una autorització d'un òrgan superior, l'acte es convalidarà mitjançant:",
    "answers": [
      { "text": "L'atorgament posterior de l'autorització per l'òrgan competent.", "correct": true },
      { "text": "La ratificació del Rector en qualitat de representant legal.", "correct": false },
      { "text": "L'aprovació dels pressupostos de l'any següent.", "correct": false },
      { "text": "No es pot convalidar si el vici és de competència.", "correct": false }
    ]
  },
  {
    "n": 18,
    "question": "Els actes de tràmit es defineixen com aquells que:",
    "answers": [
      { "text": "Integren el procediment però no decideixen directament el fons de l'assumpte.", "correct": true },
      { "text": "Posen fi a la via administrativa i permeten anar al jutjat.", "correct": false },
      { "text": "Són dictats exclusivament per les Secretaries de les Facultats.", "correct": false },
      { "text": "Tenen caràcter definitiu i són sempre impugnables.", "correct": false }
    ]
  },
  {
    "n": 19,
    "question": "Quan es pot impugnar de forma separada un acte de tràmit?",
    "answers": [
      { "text": "Quan decideixi el fons de l'assumpte, determini la impossibilitat de continuar el procediment o causi indefensió.", "correct": true },
      { "text": "En qualsevol moment que l'interessat consideri que s'ha vulnerat la llei.", "correct": false },
      { "text": "Només quan es tracti d'informes tècnics vinculants.", "correct": false },
      { "text": "Mai, els actes de tràmit s'han d'impugnar sempre amb la resolució final.", "correct": false }
    ]
  },
  {
    "n": 20,
    "question": "L'acte que ja no pot ser impugnat en via administrativa perquè han transcorregut els terminis es denomina:",
    "answers": [
      { "text": "Acte ferm.", "correct": true },
      { "text": "Acte definitiu.", "correct": false },
      { "text": "Acte originari.", "correct": false },
      { "text": "Acte reproductor.", "correct": false }
    ]
  },
  {
    "n": 21,
    "question": "Què implica que un acte 'posi fi a la via administrativa'?",
    "answers": [
      { "text": "Que la via administrativa s'ha exhaurit i es pot interposar recurs de reposició o anar directament a la jurisdicció contenciosa.", "correct": true },
      { "text": "Que l'expedient queda arxivat definitivament i no es pot fer res més.", "correct": false },
      { "text": "Que l'acte ha estat dictat pel President del Govern.", "correct": false },
      { "text": "Que s'ha d'interposar obligatòriament el recurs d'alçada.", "correct": false }
    ]
  },
  {
    "n": 22,
    "question": "A la Universitat de Barcelona, quins actes exhaureixen la via administrativa?",
    "answers": [
      { "text": "Les resolucions del Rector i els acords del Consell Social.", "correct": true },
      { "text": "Totes les resolucions dictades per les Juntes de Facultat.", "correct": false },
      { "text": "Únicament les que porten el vistiplau de la Gerència.", "correct": false },
      { "text": "Tots els actes de tràmit qualificats.", "correct": false }
    ]
  },
  {
    "n": 23,
    "question": "L'element teleològic de l'acte administratiu es refereix a:",
    "answers": [
      { "text": "L'adequació de l'acte a la finalitat d'interès públic que justifica la potestat administrativa.", "correct": true },
      { "text": "La verificació que l'acte ha estat signat en temps i forma.", "correct": false },
      { "text": "L'objecte material sobre el qual recau la decisió.", "correct": false },
      { "text": "La distància geogràfica on l'acte produeix els seus efectes.", "correct": false }
    ]
  },
  {
    "n": 24,
    "question": "L'acte administratiu es diferencia d'un contracte perquè el primer és:",
    "answers": [
      { "text": "Una declaració unilateral emanada d'una Administració Pública.", "correct": true },
      { "text": "Un acord de voluntats entre dues parts amb igualtat de condicions.", "correct": false },
      { "text": "Sempre de caràcter onerós i amb contraprestació econòmica.", "correct": false },
      { "text": "Regulat exclusivament pel Dret Civil i Mercantil.", "correct": false }
    ]
  },
  {
    "n": 25,
    "question": "Són nuls de ple dret els actes que constitueixen infracció penal?",
    "answers": [
      { "text": "Sí, els que constitueixin infracció penal o es dictin com a conseqüència d'aquesta.", "correct": true },
      { "text": "No, per a la nul·litat cal que hi hagi una sentència penal ferma prèvia.", "correct": false },
      { "text": "Només si l'infracció penal és comesa per un alt càrrec.", "correct": false },
      { "text": "Són anul·lables, excepte si hi ha violència o intimidació.", "correct": false }
    ]
  },
  {
    "n": 26,
    "question": "La conservació d'actes en un procediment implica:",
    "answers": [
      { "text": "Que l'òrgan que anul·li actuacions ha de conservar aquells actes el contingut dels quals s'hauria mantingut igual.", "correct": true },
      { "text": "L'obligació de guardar els expedients físics en un arxiu durant 50 anys.", "correct": false },
      { "text": "Que tots els actes previs a un error són vàlids per defecte.", "correct": false },
      { "text": "La prohibició de destruir documents electrònics sense permís del Rector.", "correct": false }
    ]
  },
  {
    "n": 27,
    "question": "Els actes administratius es poden classificar com a declaracions de:",
    "answers": [
      { "text": "Voluntat, judici, desig o coneixement.", "correct": true },
      { "text": "Llei, reglament, decret o ordre.", "correct": false },
      { "text": "Sanció, subvenció, expropiació o nomenament.", "correct": false },
      { "text": "Totes les respostes són incorrectes.", "correct": false }
    ]
  },
  {
    "n": 28,
    "question": "Un acte és anul·lable si es dicta mitjançant una norma de rang reglamentari que vulnera una Llei?",
    "answers": [
      { "text": "No, en aquest cas l'acte és nul de ple dret per vulnerar la jerarquia normativa.", "correct": true },
      { "text": "Sí, és una causa típica d'anul·labilitat administrativa.", "correct": false },
      { "text": "L'acte és vàlid fins que el Tribunal Constitucional digui el contrari.", "correct": false },
      { "text": "L'acte és ineficaç però no invàlid.", "correct": false }
    ]
  },
  {
    "n": 29,
    "question": "L'obligació de motivar els actes que se separen del criteri seguit en actuacions precedents busca:",
    "answers": [
      { "text": "Garantir el principi d'igualtat i evitar l'arbitrarietat administrativa.", "correct": true },
      { "text": "Permetre que l'interessat pugui copiar el model de l'administració.", "correct": false },
      { "text": "Reduir el nombre de recursos interposats contra la Universitat.", "correct": false },
      { "text": "Acreditar que el funcionari ha llegit els antecedents del cas.", "correct": false }
    ]
  },
  {
    "n": 30,
    "question": "Un acte administratiu 'confirmatori' és aquell que:",
    "answers": [
      { "text": "Es limita a reiterar un acte anterior ferm i consentit per l'interessat.", "correct": true },
      { "text": "Necessita la signatura de l'interessat per ser eficaç.", "correct": false },
      { "text": "Ratifica un acte dictat per un òrgan incompetent.", "correct": false },
      { "text": "Dóna el vistiplau a una proposta d'un òrgan consultiu.", "correct": false }
    ]
  },
  // --- PREGUNTES ESSENCIALS AFEGIDES (TEMA 6 COMPLERT) ---
  {
    "n": 31,
    "question": "Segons l'article 40 de la Llei 39/2015, el termini per a dictar una notificació és de:",
    "answers": [
      { "text": "10 dies a partir de la data en què l'acte hagi estat dictat.", "correct": true },
      { "text": "5 dies des de la resolució final.", "correct": false },
      { "text": "15 dies hàbils, excloent els dissabtes.", "correct": false },
      { "text": "No hi ha termini legal, depèn de la càrrega de feina de la unitat.", "correct": false }
    ]
  },
  {
    "n": 32,
    "question": "Una notificació que contingui el text íntegre de l'acte però no indiqui els recursos procedents es considera:",
    "answers": [
      { "text": "Una notificació defectuosa, que només tindrà efectes si l'interessat realitza actuacions que suposin el coneixement de l'acte.", "correct": true },
      { "text": "Nul·la de ple dret automàticament.", "correct": false },
      { "text": "Vàlida a tots els efectes, ja que el text de l'acte és el més important.", "correct": false },
      { "text": "Una irregularitat que obliga a repetir l'acte original.", "correct": false }
    ]
  },
  {
    "n": 33,
    "question": "El silenci administratiu en els procediments iniciats a sol·licitud de l'interessat té, com a norma general, efecte:",
    "answers": [
      { "text": "Estimatori (positiu), llevat que una norma amb rang de llei o de dret de la UE disposi el contrari.", "correct": true },
      { "text": "Desestimatori (negatiu) en tots els casos per seguretat jurídica.", "correct": false },
      { "text": "Estimatori només si es tracta de beques i ajuts a l'estudi.", "correct": false },
      { "text": "De caducitat del procediment i arxiu de les actuacions.", "correct": false }
    ]
  },
  {
    "n": 34,
    "question": "En quina de les següents matèries el silenci administratiu és SEMPRE desestimatori (negatiu)?",
    "answers": [
      { "text": "En activitats que puguin danyar el medi ambient i en procediments de responsabilitat patrimonial.", "correct": true },
      { "text": "En sol·licituds de trasllat d'expedient entre facultats de la UB.", "correct": false },
      { "text": "En peticions de revisió de notes d'exàmens oficials.", "correct": false },
      { "text": "En sol·licituds de vacances i permisos del personal de la UB.", "correct": false }
    ]
  },
  {
    "n": 35,
    "question": "L'acte exprés dictat amb posterioritat al silenci administratiu positiu:",
    "answers": [
      { "text": "Només pot ser confirmatori de l'estimació produïda pel silenci.", "correct": true },
      { "text": "Pot ser denegatori si l'Administració s'adona que el sol·licitant no tenia dret.", "correct": false },
      { "text": "És nul de ple dret si no es dicta en un termini de 10 dies.", "correct": false },
      { "text": "No té cap valor jurídic, ja que el silenci ja ha tancat el cas.", "correct": false }
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