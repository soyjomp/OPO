const TEST_ID = "t14"; 
const questions = [
 
  {
    "n": 1,
    "question": "Segons la normativa vigent (LOSU), el PDI de les universitats públiques està integrat per:",
    "answers": [
      { "text": "Personal docent i investigador funcionari i personal docent i investigador contractat.", "correct": true },
      { "text": "Només cossos de funcionaris de l'Estat.", "correct": false },
      { "text": "Exclusivament personal laboral amb contracte de caràcter indefinit.", "correct": false },
      { "text": "Catedràtics, titulars i personal d'administració que dóna suport.", "correct": false }
    ]
  },
  {
    "n": 2,
    "question": "Quins són els dos cossos de funcionaris docents universitaris vigents segons la LOSU?",
    "answers": [
      { "text": "Catedràtiques i Catedràtics d'Universitat i Professores i Professors Titulars d'Universitat.", "correct": true },
      { "text": "Professors Agregats i Professors Lectors.", "correct": false },
      { "text": "Catedràtics d'Escola Universitària i Professors Ajudants.", "correct": false },
      { "text": "Professors Numeraris i Professors Interins.", "correct": false }
    ]
  },
  {
    "n": 3,
    "question": "Per a l'accés a qualsevol categoria de PDI funcionari, és requisit imprescindible:",
    "answers": [
      { "text": "Estar en possessió del títol de Doctor.", "correct": true },
      { "text": "Tenir almenys dos títols de Grau.", "correct": false },
      { "text": "Haver estat degà o director de departament prèviament.", "correct": false },
      { "text": "Disposar d'un contracte indefinit prèvi a l'empresa privada.", "correct": false }
    ]
  },
  {
    "n": 4,
    "question": "Quina figura de PDI laboral està destinada a l'etapa inicial de la carrera acadèmica i té caràcter temporal?",
    "answers": [
      { "text": "Professorat Ajudant Doctor.", "correct": true },
      { "text": "Professorat Associat.", "correct": false },
      { "text": "Professorat Emèrit.", "correct": false },
      { "text": "Catedràtic Contractat.", "correct": false }
    ]
  },
  {
    "n": 5,
    "question": "A Catalunya, quina figura laboral de caràcter indefinit és equivalent a la de Professor Titular d'Universitat?",
    "answers": [
      { "text": "Professorat Agregat.", "correct": true },
      { "text": "Professorat Lector.", "correct": false },
      { "text": "Professorat Visitant.", "correct": false },
      { "text": "Professorat Substitut.", "correct": false }
    ]
  },
  {
    "n": 6,
    "question": "El Professorat Lector a Catalunya es defineix com un contracte laboral:",
    "answers": [
      { "text": "Temporal, per a doctors joves, amb una durada màxima total de 6 anys.", "correct": true },
      { "text": "Indefinit, amb dret a reserva de plaça des de l'inici.", "correct": false },
      { "text": "Que no requereix l'acreditació de l'AQU.", "correct": false },
      { "text": "Reservat a professionals de prestigi sense necessitat de títol de doctor.", "correct": false }
    ]
  },
  {
    "n": 7,
    "question": "Per accedir a una plaça de PDI funcionari o contractat permanent, cal disposar de l'acreditació de:",
    "answers": [
      { "text": "L'ANECA (àmbit estatal) o l'AQU (àmbit català).", "correct": true },
      { "text": "L'Agència Tributària de Catalunya.", "correct": false },
      { "text": "El Consell Social de la pròpia Universitat.", "correct": false },
      { "text": "L'Institut de Ciències de l'Educació.", "correct": false }
    ]
  },
  {
    "n": 8,
    "question": "El Professorat Associat és aquell personal que:",
    "answers": [
      { "text": "Desenvolupa una activitat professional fora de la universitat i aporta la seva experiència docent a temps parcial.", "correct": true },
      { "text": "Es dedica en exclusiva a la gestió administrativa del departament.", "correct": false },
      { "text": "Substitueix els professors titulars durant les seves vacances.", "correct": false },
      { "text": "Té un contracte indefinit a temps complet per fer recerca.", "correct": false }
    ]
  },
  {
    "n": 9,
    "question": "La figura del Professorat Emèrit està reservada a:",
    "answers": [
      { "text": "Docents jubilats que hagin prestat serveis destacats i continuïn col·laborant temporalment.", "correct": true },
      { "text": "Professors estrangers que venen a fer una conferència puntual.", "correct": false },
      { "text": "Personal d'administració amb més de 40 anys de servei.", "correct": false },
      { "text": "Doctors joves que no han trobat plaça com a lectors.", "correct": false }
    ]
  },
  {
    "n": 10,
    "question": "El Professorat Visitant és aquell personal que:",
    "answers": [
      { "text": "Pertany a una altra universitat o centre de recerca i s'incorpora a la UB de forma temporal.", "correct": true },
      { "text": "S'encarrega d'organitzar les jornades de portes obertes.", "correct": false },
      { "text": "Realitza tasques de guia turística pel patrimoni històric de la UB.", "correct": false },
      { "text": "No té vinculació acadèmica ni títol de doctor.", "correct": false }
    ]
  },
  {
    "n": 11,
    "question": "Correspon al Rector la competència per:",
    "answers": [
      { "text": "Convocar els concursos per a la provisió de places de PDI i nomenar o contractar els seleccionats.", "correct": true },
      { "text": "Decidir quins estudiants poden matricular-se a cada grau.", "correct": false },
      { "text": "Aprovar el pressupost general de la Generalitat en matèria de recerca.", "correct": false },
      { "text": "Intervenir en les eleccions sindicals de les empreses externes de neteja.", "correct": false }
    ]
  },
  {
    "n": 12,
    "question": "Quines són les modalitats de dedicació del PDI segons la LOSU?",
    "answers": [
      { "text": "Temps complet (preferent) o temps parcial.", "correct": true },
      { "text": "Només temps complet per als funcionaris.", "correct": false },
      { "text": "A hores lliures segons la disponibilitat del departament.", "correct": false },
      { "text": "Exclusivament 37,5 hores de docència davant l'alumne.", "correct": false }
    ]
  },
  {
    "n": 13,
    "question": "Segons la LOSU, quin percentatge mínim de PDI doctor ha de tenir una universitat pública?",
    "answers": [
      { "text": "Almenys el 55% del total del personal docent i investigador.", "correct": true },
      { "text": "El 100% de la plantilla.", "correct": false },
      { "text": "Un 25% del personal laboral i un 50% del funcionari.", "correct": false },
      { "text": "No existeix cap mínim obligatori.", "correct": false }
    ]
  },
  {
    "n": 14,
    "question": "L'Agència per a la Qualitat del Sistema Universitari de Catalunya (AQU) té la funció de:",
    "answers": [
      { "text": "Acreditar el PDI per a l'accés a les diferents categories laborals i funcionàries, i avaluar-ne els complements.", "correct": true },
      { "text": "Controlar el fitxatge diari i les hores de permanència al despatx.", "correct": false },
      { "text": "Gestionar el servei de menjador i residències universitàries.", "correct": false },
      { "text": "Dissenyar el marxandatge oficial de la Universitat de Barcelona.", "correct": false }
    ]
  },
  {
    "n": 15,
    "question": "La selecció del PDI funcionari s'articula mitjançant:",
    "answers": [
      { "text": "Concursos d'accés que garanteixin els principis constitucionals d'igualtat, mèrit i capacitat.", "correct": true },
      { "text": "Un examen tipus test igual per a totes les àrees de coneixement.", "correct": false },
      { "text": "L'ordre d'antiguitat a les llistes de substitucions de la Generalitat.", "correct": false },
      { "text": "Sorteig públic davant el Consell de Govern.", "correct": false }
    ]
  },
  {
    "n": 16,
    "question": "La categoria de Catedràtic Contractat a Catalunya es caracteritza per:",
    "answers": [
      { "text": "Ser la màxima categoria del PDI laboral amb contracte indefinit.", "correct": true },
      { "text": "Ser un càrrec honorífic per a persones sense titulació acadèmica.", "correct": false },
      { "text": "Tenir una durada màxima de 4 anys no renovables.", "correct": false },
      { "text": "Estar exempt de realitzar tasques de recerca.", "correct": false }
    ]
  },
  {
    "n": 17,
    "question": "La mobilitat del PDI funcionari entre universitats es realitza a través de:",
    "answers": [
      { "text": "Concursos de trasllat o concursos d'accés a noves places.", "correct": true },
      { "text": "Intercanvi directe d'un professor per un altre sense més tràmits.", "correct": false },
      { "text": "Permís especial del Rector de la universitat de destinació únicament.", "correct": false },
      { "text": "No es permet la mobilitat entre diferents comunitats autònomes.", "correct": false }
    ]
  },
  {
    "n": 18,
    "question": "La 'venia docendi' és l'autorització necessària perquè:",
    "answers": [
      { "text": "Personal que no pertany als cossos docents (com becaris o investigadors) pugui impartir docència.", "correct": true },
      { "text": "Un professor pugui cobrar les triennis acumulats.", "correct": false },
      { "text": "Es pugui fer classe fora del recinte universitari oficial.", "correct": false },
      { "text": "El Rector pugui delegar les seves competències en un degà.", "correct": false }
    ]
  },
  {
    "n": 19,
    "question": "Quina és la unitat bàsica encarregada d'organitzar i desenvolupar la recerca i la docència del PDI?",
    "answers": [
      { "text": "El Departament.", "correct": true },
      { "text": "La Gerència.", "correct": false },
      { "text": "El Consell Social.", "correct": false },
      { "text": "L'Administració de Centre.", "correct": false }
    ]
  },
  {
    "n": 20,
    "question": "El personal investigador contractat sota programes d'excel·lència (com el Ramón y Cajal):",
    "answers": [
      { "text": "S'integra en la plantilla de la universitat i pot col·laborar en tasques docents.", "correct": true },
      { "text": "Té prohibit fer qualsevol tipus de classe als alumnes.", "correct": false },
      { "text": "Es considera personal extern d'una empresa de serveis.", "correct": false },
      { "text": "No necessita titulació de doctor per ser contractat.", "correct": false }
    ]
  },
  {
    "n": 21,
    "question": "Quina normativa s'aplica supletòriament al PDI funcionari en el que no preveu la LOSU?",
    "answers": [
      { "text": "El TREBEP i la legislació de funció pública de la Generalitat.", "correct": true },
      { "text": "L'Estatut dels Treballadors.", "correct": false },
      { "text": "El Reglament de Règim Intern del PTGAS.", "correct": false },
      { "text": "El Codi Civil en matèria de contractació laboral.", "correct": false }
    ]
  },
  {
    "n": 22,
    "question": "La llibertat de càtedra implica que el PDI:",
    "answers": [
      { "text": "Té dret a expressar els seus coneixements i mètodes sense censura, en el marc de la Constitució.", "correct": true },
      { "text": "Pot decidir no fer classe si no li agrada l'assignatura assignada.", "correct": false },
      { "text": "Té llibertat total per no avaluar els seus estudiants.", "correct": false },
      { "text": "Pot cobrar quotes extres als alumnes per la seva formació.", "correct": false }
    ]
  },
  {
    "n": 23,
    "question": "Segons l'Estatut de la UB, el Director d'un Departament és elegit per:",
    "answers": [
      { "text": "El Consell de Departament d'entre els seus membres doctors amb vinculació permanent.", "correct": true },
      { "text": "El Rector de forma directa i discrecional.", "correct": false },
      { "text": "Els estudiants de la facultat corresponent.", "correct": false },
      { "text": "El Gerent de la Universitat.", "correct": false }
    ]
  },
  {
    "n": 24,
    "question": "Els 'sexennis' retribueixen l'activitat de recerca avaluada positivament cada sis anys per:",
    "answers": [
      { "text": "La CNEAI (àmbit estatal) o l'AQU (àmbit català).", "correct": true },
      { "text": "El Consell de Govern de la UB.", "correct": false },
      { "text": "La Junta de Facultat.", "correct": false },
      { "text": "El Ministeri d'Hisenda directament.", "correct": false }
    ]
  },
  {
    "n": 25,
    "question": "Poden els professors titulars o catedràtics exercir de Rector de la UB?",
    "answers": [
      { "text": "Sí, el Rector ha de ser elegit d'entre el personal docent i investigador doctor amb vinculació permanent.", "correct": true },
      { "text": "No, el Rector ha de ser obligatòriament un economista extern.", "correct": false },
      { "text": "Només si tenen més de 30 anys d'antiguitat.", "correct": false },
      { "text": "Sí, però han de demanar l'excedència com a professors.", "correct": false }
    ]
  },
  {
    "n": 26,
    "question": "Quin d'aquests NO és un cos de funcionari docent universitari?",
    "answers": [
      { "text": "Professorat Agregat (és laboral).", "correct": true },
      { "text": "Catedràtic d'Universitat.", "correct": false },
      { "text": "Professor Titular d'Universitat.", "correct": false },
      { "text": "Tots els anteriors són cossos funcionarials.", "correct": false }
    ]
  },
  {
    "n": 27,
    "question": "L'acreditació de 'Recerca Avançada' emesa per l'AQU és el requisit per optar a una plaça de:",
    "answers": [
      { "text": "Catedràtic Contractat.", "correct": true },
      { "text": "Professor Lector.", "correct": false },
      { "text": "Professor Ajudant.", "correct": false },
      { "text": "Investigador en formació.", "correct": false }
    ]
  },
  {
    "n": 28,
    "question": "Les retribucions bàsiques del PDI funcionari (sou i triennis) es determinen segons:",
    "answers": [
      { "text": "El que estableix la Llei de Pressupostos Generals de l'Estat per al grup A1.", "correct": true },
      { "text": "Els beneficis que obtingui la Universitat cada any.", "correct": false },
      { "text": "El que decideixi cada Rector lliurement.", "correct": false },
      { "text": "El nombre d'estudiants que aproven l'assignatura.", "correct": false }
    ]
  },
  {
    "n": 29,
    "question": "El personal PDI laboral de les universitats públiques catalanes es regeix pel:",
    "answers": [
      { "text": "Conveni Col·lectiu del PDI de les Universitats Públiques Catalanes.", "correct": true },
      { "text": "Reglament d'Estudiants de la UB.", "correct": false },
      { "text": "Codi de Comerç de Catalunya.", "correct": false },
      { "text": "Estatut del PTGAS.", "correct": false }
    ]
  },
  {
    "n": 30,
    "question": "L'edat de jubilació forçosa del PDI funcionari es pot prorrogar fins als:",
    "answers": [
      { "text": "70 anys.", "correct": true },
      { "text": "67 anys.", "correct": false },
      { "text": "75 anys.", "correct": false },
      { "text": "65 anys sense excepció.", "correct": false }
    ]
  },
  /* --- 5 EXTRAS ESTRATÈGICS --- */
  {
    "n": 31,
    "question": "Segons la LOSU, quin és el límit màxim de temporalitat permès per al PDI en una universitat?",
    "answers": [
      { "text": "El PDI amb contracte temporal no pot superar el 8% de la plantilla docent.", "correct": true },
      { "text": "El 40% com es permetia anteriorment.", "correct": false },
      { "text": "No hi ha límit, depèn del pressupost.", "correct": false },
      { "text": "El 20% només per a les escales de suport.", "correct": false }
    ]
  },
  {
    "n": 32,
    "question": "Què succeeix amb els antics 'Catedràtics d'Escola Universitària' segons la normativa actual?",
    "answers": [
      { "text": "Es mantenen en els seus cossos a extingir, amb els mateixos drets que els Catedràtics d'Universitat.", "correct": true },
      { "text": "Han estat obligats a jubilar-se anticipadament.", "correct": false },
      { "text": "S'han integrat automàticament en el PTGAS.", "correct": false },
      { "text": "Han perdut la condició de funcionaris de l'Estat.", "correct": false }
    ]
  },
  {
    "n": 33,
    "question": "La figura del Professorat Substitut s'utilitza exclusivament per:",
    "answers": [
      { "text": "Substituir PDI amb dret a reserva de lloc de treball que estigui en situació de baixa, llicència o excedència.", "correct": true },
      { "text": "Donar feina a doctors joves mentre no hi ha places de lector.", "correct": false },
      { "text": "Reforçar la docència en graus amb molts estudiants.", "correct": false },
      { "text": "Realitzar tasques d'investigació en projectes europeus.", "correct": false }
    ]
  },
  {
    "n": 34,
    "question": "Quina és la proporció de PDI amb vinculació permanent que exigeix la LOSU?",
    "answers": [
      { "text": "Almenys el 51% del PDI de la universitat ha de tenir vinculació permanent.", "correct": true },
      { "text": "El 100% per garantir la qualitat.", "correct": false },
      { "text": "Un 25% és suficient si la resta són doctors.", "correct": false },
      { "text": "La LOSU no especifica proporcions de permanència.", "correct": false }
    ]
  },
  {
    "n": 35,
    "question": "Quin requisit d'idioma és obligatori per al PDI que s'incorpora al sistema universitari de Catalunya?",
    "answers": [
      { "text": "Acreditar el coneixement suficient de les dues llengües oficials (Català i Castellà).", "correct": true },
      { "text": "Només l'anglès nivell C1.", "correct": false },
      { "text": "Cap, la ciència és universal i no requereix idiomes locals.", "correct": false },
      { "text": "Només si el professor és de fora de la Unió Europea.", "correct": false }
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
