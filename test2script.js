const TEST_ID = "t2"; 
const questions = [
 
  {
    "question": "Segons l'article 2 de la LOSU, quina d'aquestes és una funció del sistema universitari?",
    "answers": [
      { "text": "La creació, desenvolupament, transmissió i crítica de la ciència, la tècnica i la cultura.", "correct": true },
      { "text": "L'exercici de la potestat legislativa en matèria de títols oficials.", "correct": false },
      { "text": "La coordinació de les proves d'accés a la funció pública docent no universitària.", "correct": false },
      { "text": "La garantia de ple lloc de treball per als seus egressats.", "correct": false }
    ]
  },
  {
    "question": "La preparació per a l'exercici d'activitats professionals que exigeixin coneixements científics és:",
    "answers": [
      { "text": "Una funció del sistema universitari segons l'article 2.2 de la LOSU.", "correct": true },
      { "text": "Una competència delegada de les cambres de comerç.", "correct": false },
      { "text": "Una activitat supeditada exclusivament a l'autonomia financera.", "correct": false },
      { "text": "Un objectiu secundari vinculat només a la formació permanent.", "correct": false }
    ]
  },
  {
    "question": "L'autonomia de les universitats, segons la LOSU, comporta especialment:",
    "answers": [
      { "text": "La llibertat de càtedra, d'investigació i d'estudi.", "correct": true },
      { "text": "La inviolabilitat del recinte universitari davant de resolucions judicials.", "correct": false },
      { "text": "L'exempció de subjecció als principis de la Llei de Contractes del Sector Públic.", "correct": false },
      { "text": "La sobirania absoluta en la fixació de preus públics sense límits autonòmics.", "correct": false }
    ]
  },
  {
    "question": "Quina dimensió de l'autonomia permet a la universitat l'elaboració i reforma dels seus Estatuts?",
    "answers": [
      { "text": "L'autonomia estatutària i organitzativa.", "correct": true },
      { "text": "La potestat reglamentària d'execució estatal.", "correct": false },
      { "text": "L'autonomia legislativa interna de caràcter bàsic.", "correct": false },
      { "text": "La llibertat de creació de centres docents (Art. 27.6 CE).", "correct": false }
    ]
  },
  {
    "question": "L'autonomia universitària inclou la selecció i promoció del personal?",
    "answers": [
      { "text": "Sí, tant del PDI com del PTGAS, d'acord amb els principis constitucionals.", "correct": true },
      { "text": "Sí, però només respecte al personal contractat laboral, no al funcionari.", "correct": false },
      { "text": "No, la selecció del PDI correspon exclusivament a l'ANECA o l'AQU.", "correct": false },
      { "text": "Només respecte als òrgans de govern unipersonals.", "correct": false }
    ]
  },
  {
    "question": "En les universitats públiques, el règim específic estableix que la creació de la universitat es farà:",
    "answers": [
      { "text": "Per Llei del Parlament de la Comunitat Autònoma o de les Corts Generals.", "correct": true },
      { "text": "Per Decret del Govern a proposta del Consell d'Universitats.", "correct": false },
      { "text": "Per Acord del Consell de Govern de la Universitat amb ratificació legislativa.", "correct": false },
      { "text": "Per Ordre Ministerial prèvia inscripció al RUCT.", "correct": false }
    ]
  },
  {
    "question": "Quina figura de la universitat pública té la representació de la institució?",
    "answers": [
      { "text": "El Rector o Rectora.", "correct": true },
      { "text": "El President o Presidenta del Consell Social.", "correct": false },
      { "text": "El Secretari o Secretària General, per delegació expressa de la LOSU.", "correct": false },
      { "text": "El Consell de Govern actuant de forma col·legiada.", "correct": false }
    ]
  },
  {
    "question": "Segons la LOSU, les universitats públiques estan subjectes al dret:",
    "answers": [
      { "text": "Administratiu, sens perjudici de les excepcions previstes en matèria privada.", "correct": true },
      { "text": "Privat en tota la seva activitat acadèmica i docent.", "correct": false },
      { "text": "Mercantil per a la gestió del patrimoni i administratiu per a la resta.", "correct": false },
      { "text": "Civil, excepte en l'expedició de títols oficials.", "correct": false }
    ]
  },
  {
    "question": "L'elaboració i gestió dels pressupostos és una manifestació de l'autonomia:",
    "answers": [
      { "text": "Econòmica i financera.", "correct": true },
      { "text": "Patrimonial i tributària.", "correct": false },
      { "text": "D'autogovern acadèmic.", "correct": false },
      { "text": "Pressupostària delegada per la Hisenda Pública.", "correct": false }
    ]
  },
  {
    "question": "Quin d'aquests principis regeix l'actuació de les universitats segons la LOSU?",
    "answers": [
      { "text": "La transparència i la rendició de comptes.", "correct": true },
      { "text": "El principi d'autoritat jeràrquica ministerial.", "correct": false },
      { "text": "La confidencialitat absoluta en la selecció de personal.", "correct": false },
      { "text": "El benefici econòmic com a indicador de qualitat acadèmica.", "correct": false }
    ]
  },
  {
    "question": "Qui aprova finalment els Estatuts de la Universitat de Barcelona segons la normativa actual?",
    "answers": [
      { "text": "El Govern de la Generalitat, mitjançant Decret, després de verificar la seva legalitat.", "correct": true },
      { "text": "El Claustre de la UB, que té l'última paraula segons l'autonomia universitària.", "correct": false },
      { "text": "El Parlament de Catalunya, donat que és l'òrgan que va crear la universitat.", "correct": false },
      { "text": "El Consell Social, com a òrgan de participació de la societat.", "correct": false }
    ]
  },
  {
    "question": "La LOSU estableix que les universitats han de fomentar especialment:",
    "answers": [
      { "text": "La igualtat efectiva entre dones i homes i l'eliminació de tota discriminació.", "correct": true },
      { "text": "La competència exclusiva entre universitats del mateix territori.", "correct": false },
      { "text": "L'autarquia en la producció científica nacional.", "correct": false },
      { "text": "La preeminència dels interessos privats en els consells socials.", "correct": false }
    ]
  },
  {
    "question": "El Títol IX de la LOSU regula:",
    "answers": [
      { "text": "El règim específic de les universitats públiques.", "correct": true },
      { "text": "El règim del professorat laboral i funcionari.", "correct": false },
      { "text": "La recerca i la transferència del coneixement.", "correct": false },
      { "text": "L'assegurament de la qualitat i l'acreditació.", "correct": false }
    ]
  },
  {
    "question": "Com es tria el Rector/a en una universitat pública segons la LOSU?",
    "answers": [
      { "text": "Per sufragi universal ponderat per la comunitat universitària, en els termes estatutaris.", "correct": true },
      { "text": "Per votació directa i secreta del Claustre Universitari.", "correct": false },
      { "text": "Per designació de la Generalitat a proposta del Consell Social.", "correct": false },
      { "text": "Per elecció entre els degans i directors d'escola.", "correct": false }
    ]
  },
  {
    "question": "Quin és el mandat d'un Rector/a segons la LOSU (Llei Orgànica 2/2023)?",
    "answers": [
      { "text": "Sis anys, improrrogables i no renovables.", "correct": true },
      { "text": "Quatre anys, amb una sola possibilitat de reelecció.", "correct": false },
      { "text": "Cinc anys, prorrogables per un període màxim de tres.", "correct": false },
      { "text": "Vuit anys, sense possibilitat de renovació.", "correct": false }
    ]
  },
  {
    "question": "L'autonomia universitària permet crear estructures com facultats o escoles?",
    "answers": [
      { "text": "Sí, és part de l'autonomia organitzativa, subjecta al que digui la Llei i els Estatuts.", "correct": true },
      { "text": "No, la creació de facultats és una competència exclusiva del Govern autonòmic.", "correct": false },
      { "text": "Només si es tracta de centres adscrits de titularitat privada.", "correct": false },
      { "text": "Sí, però la decisió ha de ser ratificada per la Conferència de Política Universitària.", "correct": false }
    ]
  },
  {
    "question": "La recerca universitària, segons la LOSU, és considerada:",
    "answers": [
      { "text": "Un dret i un deure del personal docent i investigador.", "correct": true },
      { "text": "Una activitat opcional per al PDI funcionari.", "correct": false },
      { "text": "Una funció exclusiva dels Instituts Universitaris de Recerca.", "correct": false },
      { "text": "Una prestació de serveis sotmesa al dret mercantil.", "correct": false }
    ]
  },
  {
    "question": "L'autonomia acadèmica inclou la verificació dels títols?",
    "answers": [
      { "text": "La universitat té autonomia per proposar els plans d'estudi; la verificació és externa.", "correct": true },
      { "text": "L'autonomia permet l'auto-verificació sense intervenció d'agències de qualitat.", "correct": false },
      { "text": "Només les universitats catalogades com 'd'excel·lència' poden verificar títols.", "correct": false },
      { "text": "La verificació és competència del Rector/a com a màxima autoritat acadèmica.", "correct": false }
    ]
  },
  {
    "question": "El Consell Social és definit per la LOSU com:",
    "answers": [
      { "text": "L'òrgan de participació de la societat en la universitat.", "correct": true },
      { "text": "L'òrgan superior de govern acadèmic de la institució.", "correct": false },
      { "text": "La junta de patrons de la fundació universitària.", "correct": false },
      { "text": "El màxim òrgan de representació dels estudiants i el PTGAS.", "correct": false }
    ]
  },
  {
    "question": "Les universitats públiques han de tenir un pressupost:",
    "answers": [
      { "text": "Públic, anual, únic i equilibrat.", "correct": true },
      { "text": "Aprovat per la Llei de Pressupostos de l'Estat directament.", "correct": false },
      { "text": "Privat en la part corresponent a la recerca amb empreses.", "correct": false },
      { "text": "Sotmès al control exclusiu del Claustre Universitari.", "correct": false }
    ]
  },
  {
    "question": "La LOSU exigeix que les universitats públiques destinin fons específics a:",
    "answers": [
      { "text": "Programes propis de recerca i de formació de joves doctors i doctores.", "correct": true },
      { "text": "La subvenció de partits polítics amb representació al Claustre.", "correct": false },
      { "text": "L'amortització del deute històric de la Comunitat Autònoma.", "correct": false },
      { "text": "L'externalització total dels serveis de docència de postgrau.", "correct": false }
    ]
  },
  {
    "question": "Quin òrgan de govern col·legiat de la universitat representa la comunitat universitària?",
    "answers": [
      { "text": "El Claustre Universitari.", "correct": true },
      { "text": "El Consell de Govern.", "correct": false },
      { "text": "El Consell Social.", "correct": false },
      { "text": "La Conferència de Degans.", "correct": false }
    ]
  },
  {
    "question": "La coordinació del sistema universitari espanyol correspon a:",
    "answers": [
      { "text": "La Conferència General de Política Universitària.", "correct": true },
      { "text": "El Consell d'Universitats, de forma exclusiva.", "correct": false },
      { "text": "La CRUE (Conferència de Rectors de les Universitats Espanyoles).", "correct": false },
      { "text": "L'Agència Nacional d'Avaluació de la Qualitat i Acreditació (ANECA).", "correct": false }
    ]
  },
  {
    "question": "L'accés a la universitat, segons la LOSU, ha de garantir:",
    "answers": [
      { "text": "La igualtat d'oportunitats i la no discriminació per raons econòmiques.", "correct": true },
      { "text": "La preferència d'accés als residents de la ciutat seu de la universitat.", "correct": false },
      { "text": "L'admissió lliure sense cap prova d'avaluació externa.", "correct": false },
      { "text": "La reserva de plaça per a fills d'antics alumnes (alumni).", "correct": false }
    ]
  },
  {
    "question": "Les universitats públiques poden crear fundacions o altres entitats jurídiques?",
    "answers": [
      { "text": "Sí, per a la promoció i desenvolupament de les seves finalitats, segons la legislació vigent.", "correct": true },
      { "text": "No, l'autonomia universitària prohibeix l'ús de personalitat jurídica privada.", "correct": false },
      { "text": "Només si l'Estat té la participació majoritària en el seu capital.", "correct": false },
      { "text": "Sí, però només amb la finalitat de gestionar els títols de Grau.", "correct": false }
    ]
  },
  {
    "question": "El control econòmic extern de les universitats públiques catalanes correspon a:",
    "answers": [
      { "text": "La Sindicatura de Comptes de Catalunya i el Tribunal de Comptes.", "correct": true },
      { "text": "L'Interventor General de la Universitat de manera exclusiva.", "correct": false },
      { "text": "El Consell de Govern de la Generalitat mitjançant auditoria política.", "correct": false },
      { "text": "L'Agència Tributària de Catalunya.", "correct": false }
    ]
  },
  {
    "question": "La LOSU defineix la formació al llarg de la vida com:",
    "answers": [
      { "text": "Un dret dels ciutadans i una funció de la universitat mitjançant títols propis o microcredencials.", "correct": true },
      { "text": "Una modalitat d'ensenyament reservada només per a majors de 50 anys.", "correct": false },
      { "text": "Un tipus de formació que no pot tenir reconeixement de crèdits ECTS.", "correct": false },
      { "text": "L'obligació de cursar un segon grau en finalitzar el primer.", "correct": false }
    ]
  },
  {
    "question": "L'Espai Europeu d'Educació Superior (EEES) és el marc de referència per a:",
    "answers": [
      { "text": "L'homologació de títols, la mobilitat i la cooperació internacional.", "correct": true },
      { "text": "La fixació del sou dels professors titulars a tota Europa.", "correct": false },
      { "text": "La creació d'un títol únic europeu emès per la Comissió Europea.", "correct": false },
      { "text": "La regulació dels visats per a estudiants extra-comunitaris.", "correct": false }
    ]
  },
  {
    "question": "El personal de les universitats públiques segons la LOSU es divideix en:",
    "answers": [
      { "text": "Personal Docent i Investigador (PDI) i Personal Tècnic, de Gestió i d'Administració i Serveis (PTGAS).", "correct": true },
      { "text": "Personal d'Ensenyament Superior i Personal de Serveis Generals.", "correct": false },
      { "text": "Funcionaris de l'Estat i Funcionaris de la Comunitat Autònoma.", "correct": false },
      { "text": "Cossos docents universitaris i Cossos de gestió universitària.", "correct": false }
    ]
  },
  {
    "question": "L'autonomia financera té com a límit, entre d'altres:",
    "answers": [
      { "text": "Les exigències d'estabilitat pressupostària i sostenibilitat financera.", "correct": true },
      { "text": "La prohibició de rebre subvencions de caràcter privat.", "correct": false },
      { "text": "L'obligació d'invertir tots els romanents en borsa.", "correct": false },
      { "text": "La limitació de despesa imposada pel Claustre Universitari.", "correct": false }
    ]
  },
  {
    "question": "Segons l'article 12 de la LOSU, com han de ser publicats els resultats de les investigacions finançades majoritàriament amb fons públics?",
    "answers": [
      { "text": "En revistes comercials d'alt impacte amb accés restringit.", "correct": false },
      { "text": "En accés obert, mitjançant el dipòsit d'una còpia de la versió final en repositoris institucionals o temàtics.", "correct": true },
      { "text": "Sota patent exclusiva de la universitat durant els primers cinc anys.", "correct": false },
      { "text": "Només es requereix la publicació del resum executiu en el Portal de Transparència.", "correct": false }
    ]
  },
  {
    "question": "Quin percentatge mínim de reserva de places per a persones amb discapacitat estableix la LOSU per a l'accés als estudis universitaris?",
    "answers": [
      { "text": "Un 3% de les places disponibles.", "correct": false },
      { "text": "Un 5% de les places disponibles.", "correct": true },
      { "text": "Un 7% de les places disponibles.", "correct": false },
      { "text": "No estableix un percentatge fix, dependrà de la demanda anual.", "correct": false }
    ]
  },
  {
    "question": "Respecte a la composició del Consell de Govern, la LOSU estableix que la representació de l'estudiantat ha de ser d'un mínim del:",
    "answers": [
      { "text": "10 per cent dels seus membres.", "correct": true },
      { "text": "25 per cent dels seus membres.", "correct": false },
      { "text": "15 per cent dels seus membres.", "correct": false },
      { "text": "No estableix un percentatge mínim, es deixa a decisió dels Estatuts.", "correct": false }
    ]
  },
  {
    "question": "Les 'microcredencials' o títols de curta durada, segons l'article 36 de la LOSU:",
    "answers": [
      { "text": "Són títols exclusivament de postgrau per a doctors.", "correct": false },
      { "text": "Permeten certificar aprenentatges en formació permanent de manera fragmentada i acumulable.", "correct": true },
      { "text": "Són títols oficials equivalents a un Grau de 180 crèdits ECTS.", "correct": false },
      { "text": "Només poden ser impartides per fundacions privades adscrites.", "correct": false }
    ]
  },
  {
    "question": "En el marc de la igualtat de gènere, la LOSU obliga les universitats a comptar amb:",
    "answers": [
      { "text": "Un pla d'igualtat i un protocol contra l'assetjament sexual, ambdós de caràcter obligatori.", "correct": true },
      { "text": "Només un pla d'igualtat si superen els 500 empleats.", "correct": false },
      { "text": "Una unitat de gènere dependent directament del Ministeri d'Igualtat.", "correct": false },
      { "text": "Quotes del 50% de dones en totes les titulacions de l'àmbit STEM.", "correct": false }
    ]
  },
  {
    "question": "Segons la LOSU, el personal docent i investigador (PDI) de les universitats públiques pot ser de dos tipus:",
    "answers": [
      { "text": "PDI funcionari dels cossos docents universitaris i PDI contractat laboral.", "correct": true },
      { "text": "PDI titular i PDI associat, essent tots ells funcionaris.", "correct": false },
      { "text": "PDI de carrera i PDI interí de la Generalitat.", "correct": false },
      { "text": "PDI exclusivament laboral, ja que la LOSU n'ha eliminat la condició de funcionari.", "correct": false }
    ]
  },
  {
    "question": "L'article 45 de la LOSU estableix que les universitats públiques han d'assolir un objectiu de finançament mínim del:",
    "answers": [
      { "text": "1 per cent del PIB del conjunt de l'Estat.", "correct": true },
      { "text": "5 per cent del pressupost de la Comunitat Autònoma.", "correct": false },
      { "text": "0,5 per cent del PIB de la Comunitat Autònoma.", "correct": false },
      { "text": "10 per cent del deute públic estatal.", "correct": false }
    ]
  },
  {
    "question": "Qui presideix el Consell Social d'una universitat pública?",
    "answers": [
      { "text": "El Rector o Rectora de la pròpia universitat.", "correct": false },
      { "text": "Una persona nomenada per la Comunitat Autònoma, que no pot ser membre de la comunitat universitària.", "correct": true },
      { "text": "El Degà més antic de la facultat amb més alumnes.", "correct": false },
      { "text": "El Conseller o Consellera d'Universitats de la Generalitat.", "correct": false }
    ]
  }









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
