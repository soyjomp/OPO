const TEST_ID = "t4"; 
const questions = [
 
  {
    "n": 1,
    "question": "Quina és la unitat de mesura de l'haver acadèmic en els ensenyaments de l'EEES?",
    "answers": [
      { "text": "El crèdit ECTS (European Credit Transfer System).", "correct": true },
      { "text": "L'hora lectiva de presencialitat obligatòria.", "correct": false },
      { "text": "El crèdit de l'antiga LRU.", "correct": false },
      { "text": "La unitat de càrrega docent departamental.", "correct": false }
    ]
  },
  {
    "n": 2,
    "question": "Quantes hores de treball de l'estudiant representa, de mitjana, un crèdit ECTS?",
    "answers": [
      { "text": "Entre 25 i 30 hores.", "correct": true },
      { "text": "Exactament 10 hores de classe teòrica.", "correct": false },
      { "text": "Un mínim de 50 hores per assignatura.", "correct": false },
      { "text": "Entre 15 i 20 hores segons el grau de dificultat.", "correct": false }
    ]
  },
  {
    "n": 3,
    "question": "Els ensenyaments universitaris oficials s'estructuren en quins tres cicles?",
    "answers": [
      { "text": "Grau, Màster Universitari i Doctorat.", "correct": true },
      { "text": "Diplomatura, Llicenciatura i Doctorat.", "correct": false },
      { "text": "Grau, Postgrau propi i Doctorat.", "correct": false },
      { "text": "Cicle de formació bàsica, Cicle d'especialització i Cicle de recerca.", "correct": false }
    ]
  },
  {
    "n": 4,
    "question": "Quina és la finalitat principal dels ensenyaments de Grau?",
    "answers": [
      { "text": "L'obtenció d'una formació acadèmica i professional de caràcter general orientada a la preparació per a l'exercici professional.", "correct": true },
      { "text": "L'especialització altament avançada en una única línia d'investigació.", "correct": false },
      { "text": "La preparació exclusiva per a l'accés als cossos docents universitaris.", "correct": false },
      { "text": "L'obtenció d'un certificat d'aptitud tècnica sense validesa acadèmica.", "correct": false }
    ]
  },
  {
    "n": 5,
    "question": "Com a norma general, quants crèdits ECTS té un títol de Grau?",
    "answers": [
      { "text": "240 crèdits, llevat que una directiva comunitària estableixi una durada superior.", "correct": true },
      { "text": "180 crèdits en tots els casos per a l'homologació europea.", "correct": false },
      { "text": "300 crèdits per a totes les enginyeries i graus d'Humanitats.", "correct": false },
      { "text": "120 crèdits de formació bàsica i 120 d'optativitat.", "correct": false }
    ]
  },
  {
    "n": 6,
    "question": "El Treball de Final de Grau (TFG):",
    "answers": [
      { "text": "És obligatori, té caràcter autònom i s'ha de realitzar en la fase final del pla d'estudis.", "correct": true },
      { "text": "És opcional si es realitza un període de pràctiques externes equivalents.", "correct": false },
      { "text": "S'ha d'avaluar obligatòriament mitjançant una prova tipus test a nivell nacional.", "correct": false },
      { "text": "No computa dins de la càrrega lectiva total dels 240 crèdits.", "correct": false }
    ]
  },
  {
    "n": 7,
    "question": "La finalitat del Màster universitari és:",
    "answers": [
      { "text": "L'adquisició d'una formació avançada, especialitzada o multidisciplinària, o la iniciació en la recerca.", "correct": true },
      { "text": "Substituir la tesi doctoral per als qui no vulguin fer carrera acadèmica.", "correct": false },
      { "text": "Obtenir una formació generalista de base idèntica a la del Grau.", "correct": false },
      { "text": "L'acreditació d'un nivell de competència lingüística en llengües estrangeres.", "correct": false }
    ]
  },
  {
    "n": 8,
    "question": "Quina és la càrrega lectiva habitual dels ensenyaments de Màster oficial?",
    "answers": [
      { "text": "Entre 60 i 120 crèdits ECTS.", "correct": true },
      { "text": "Un mínim fix de 90 crèdits anuals.", "correct": false },
      { "text": "Sempre 120 crèdits per permetre l'accés al Doctorat.", "correct": false },
      { "text": "240 crèdits, seguint la mateixa estructura que el Grau.", "correct": false }
    ]
  },
  {
    "n": 9,
    "question": "Per accedir a un Màster oficial és necessari estar en possessió de:",
    "answers": [
      { "text": "Un títol universitari oficial espanyol o un d'expedit per una institució de l'EEES que faculti per a aquest accés.", "correct": true },
      { "text": "Un títol de Doctorat previ.", "correct": false },
      { "text": "L'homologació pel Ministeri de les notes de Batxillerat.", "correct": false },
      { "text": "Un contracte laboral relacionat amb la matèria del Màster.", "correct": false }
    ]
  },
  {
    "n": 10,
    "question": "El títol de Doctor/a representa:",
    "answers": [
      { "text": "El nivell de qualificació més elevat de l'educació superior (Nivell 4 del MECES).", "correct": true },
      { "text": "Un requisit obligatori per a qualsevol plaça administrativa de la UB.", "correct": false },
      { "text": "Un grau acadèmic que s'obté per antiguitat després del Màster.", "correct": false },
      { "text": "Un títol de caràcter estrictament professional sense vessant de recerca.", "correct": false }
    ]
  },
  {
    "n": 11,
    "question": "La formació doctoral inclou obligatòriament:",
    "answers": [
      { "text": "L'elaboració i defensa d'una tesi doctoral que incorpori resultats originals de recerca.", "correct": true },
      { "text": "L'assistència diària a classes magistrals durant quatre anys.", "correct": false },
      { "text": "El pagament d'un cànon de recerca a l'Agència Europea de l'Educació.", "correct": false },
      { "text": "Un període obligatori de docència en centres de secundària.", "correct": false }
    ]
  },
  {
    "n": 12,
    "question": "Què és el Suplement Europeu al Títol (SET)?",
    "answers": [
      { "text": "Un document que acompanya el títol oficial per millorar la transparència i facilitar el reconeixement.", "correct": true },
      { "text": "Una ajuda financera per a la mobilitat d'estudiants amb pocs recursos.", "correct": false },
      { "text": "Un carnet de serveis per a graduats en l'àmbit europeu.", "correct": false },
      { "text": "El certificat de competències digitals de la Unió Europea.", "correct": false }
    ]
  },
  {
    "n": 13,
    "question": "L'homologació d'un títol estranger implica:",
    "answers": [
      { "text": "El reconeixement oficial de l'equivalència a un títol espanyol que dóna accés a una professió regulada.", "correct": true },
      { "text": "Que el títol només té validesa per a l'empresa privada i no pública.", "correct": false },
      { "text": "La repetició obligatòria de la meitat dels crèdits del títol en una universitat espanyola.", "correct": false },
      { "text": "L'enviament del diploma original al Registre Civil central.", "correct": false }
    ]
  },
  {
    "n": 14,
    "question": "L'equivalència a nivell acadèmic d'un títol estranger es diferencia de l'homologació en què:",
    "answers": [
      { "text": "L'equivalència reconeix el nivell (Grau o Màster) però no un títol específic habilitant.", "correct": true },
      { "text": "L'equivalència només s'aplica a títols de l'àmbit de la salut.", "correct": false },
      { "text": "L'equivalència és temporal i l'homologació és definitiva.", "correct": false },
      { "text": "L'equivalència és competència del Rector i l'homologació del Govern de la Generalitat.", "correct": false }
    ]
  },
  {
    "n": 15,
    "question": "Quin organisme és competent per a l'homologació de títols estrangers d'educació superior a Espanya?",
    "answers": [
      { "text": "El Ministeri competent en matèria d'universitats de l'Estat.", "correct": true },
      { "text": "El Rectorat de la UB per delegació del Govern.", "correct": false },
      { "text": "El Consell Interuniversitari de Catalunya.", "correct": false },
      { "text": "L'ambaixada del país on s'ha expedit el títol.", "correct": false }
    ]
  },
  {
    "n": 16,
    "question": "Dins l'EEES, la mobilitat d'estudiants es fomenta principalment a través del programa:",
    "answers": [
      { "text": "Erasmus+.", "correct": true },
      { "text": "Sèneca-UB.", "correct": false },
      { "text": "Programa Cervantes de mobilitat no oficial.", "correct": false },
      { "text": "Bolonya-Mobil.", "correct": false }
    ]
  },
  {
    "n": 17,
    "question": "En un pla d'estudis de Grau, les assignatures de 'Formació Bàsica' han de tenir almenys:",
    "answers": [
      { "text": "60 crèdits ECTS.", "correct": true },
      { "text": "120 crèdits ECTS.", "correct": false },
      { "text": "El 50% de la càrrega lectiva total.", "correct": false },
      { "text": "No hi ha un mínim establert legalment.", "correct": false }
    ]
  },
  {
    "n": 18,
    "question": "Els títols propis de les universitats:",
    "answers": [
      { "text": "Són ensenyaments de formació permanent i no donen accés al Doctorat ni tenen caràcter oficial.", "correct": true },
      { "text": "Són exactament iguals als oficials però aprovats pel Rector.", "correct": false },
      { "text": "Tenen validesa d'oficialitat automàtica en passar dos anys des de la seva creació.", "correct": false },
      { "text": "Són els únics que es poden valorar en una fase de concurs d'oposició.", "correct": false }
    ]
  },
  {
    "n": 19,
    "question": "El Registre on s'inscriuen Universitats, Centres i Títols s'anomena:",
    "answers": [
      { "text": "RUCT.", "correct": true },
      { "text": "SIIU.", "correct": false },
      { "text": "REBIUN.", "correct": false },
      { "text": "DOGC-Títols.", "correct": false }
    ]
  },
  {
    "n": 20,
    "question": "Per accedir al doctorat, quants crèdits oficials s'han d'haver superat en total (sumant Grau i Màster)?",
    "answers": [
      { "text": "Un mínim de 300 crèdits ECTS.", "correct": true },
      { "text": "240 crèdits ECTS.", "correct": false },
      { "text": "180 crèdits ECTS de segon cicle.", "correct": false },
      { "text": "400 crèdits ECTS si la tesi es fa en llengua estrangera.", "correct": false }
    ]
  },
  {
    "n": 21,
    "question": "Quina declaració es considera l'origen formal de l'EEES?",
    "answers": [
      { "text": "La Declaració de Bolonya (1999).", "correct": true },
      { "text": "La Declaració de la Sorbona.", "correct": false },
      { "text": "El Tractat de Maastrich.", "correct": false },
      { "text": "La Carta Magna d'Universitats de Barcelona.", "correct": false }
    ]
  },
  {
    "n": 22,
    "question": "L'avaluació contínua és un principi fonamental de:",
    "answers": [
      { "text": "El model d'aprenentatge centrat en l'estudiant de l'EEES.", "correct": true },
      { "text": "L'antic sistema de llicenciatures i diplomatures.", "correct": false },
      { "text": "Exclusivament dels exàmens finals de carrera.", "correct": false },
      { "text": "Només de les universitats privades i a distància.", "correct": false }
    ]
  },
  {
    "n": 23,
    "question": "Què s'entén per reconeixement de crèdits?",
    "answers": [
      { "text": "L'acceptació per part d'una universitat dels crèdits obtinguts en altres ensenyaments oficials.", "correct": true },
      { "text": "L'obtenció d'una bonificació econòmica per l'excel·lència acadèmica.", "correct": false },
      { "text": "L'enviament del certificat de notes al Ministeri d'Educació.", "correct": false },
      { "text": "La publicació de l'expedient acadèmic en el tauler d'anuncis.", "correct": false }
    ]
  },
  {
    "n": 24,
    "question": "L'acreditació d'un títol oficial és un procés que ha de realitzar-se periòdicament per:",
    "answers": [
      { "text": "Garantir que el títol compleix els estàndards de qualitat i mantenir la seva oficialitat al RUCT.", "correct": true },
      { "text": "Actualitzar el nom de la titulació segons les tendències del mercat.", "correct": false },
      { "text": "Modificar el preu de la matrícula per sota de la inflació.", "correct": false },
      { "text": "Validar la jubilació del professorat que imparteix el títol.", "correct": false }
    ]
  },
  {
    "n": 25,
    "question": "Els plans d'estudi de Grau han de contenir obligatòriament pràctiques externes?",
    "answers": [
      { "text": "No, poden ser obligatòries o optatives segons la configuració del pla d'estudis.", "correct": true },
      { "text": "Sí, tots els Graus han de tenir 60 crèdits de pràctiques segons l'EEES.", "correct": false },
      { "text": "Només és obligatori en Graus de Ciències Socials.", "correct": false },
      { "text": "Estan expressament prohibides en el primer curs acadèmic.", "correct": false }
    ]
  },
  {
    "n": 26,
    "question": "La 'Menció Europea' o 'Doctorat Internacional' requereix, entre d'altres:",
    "answers": [
      { "text": "Una estada mínima de 3 mesos fora d'Espanya en una institució d'ensenyament superior.", "correct": true },
      { "text": "Tenir la nacionalitat d'almenys dos països de la Unió Europea.", "correct": false },
      { "text": "Que la tesi estigui escrita íntegrament en una llengua morta (Llatí o Grec).", "correct": false },
      { "text": "Presentar la tesi davant del Parlament Europeu.", "correct": false }
    ]
  },
  {
    "n": 27,
    "question": "Les universitats poden impartir ensenyaments conjunts amb altres universitats?",
    "answers": [
      { "text": "Sí, mitjançant convenis per a títols conjunts de Grau, Màster o Doctorat.", "correct": true },
      { "text": "No, la llei prohibeix la col·laboració docent entre universitats públiques.", "correct": false },
      { "text": "Només amb centres de recerca que no siguin universitaris.", "correct": false },
      { "text": "Únicament si es tracta de títols propis no oficials.", "correct": false }
    ]
  },
  {
    "n": 28,
    "question": "El nivell 3 del Marc Espanyol de Qualificacions per a l'Educació Superior (MECES) correspon a:",
    "answers": [
      { "text": "Màster Universitari.", "correct": true },
      { "text": "Grau Universitari.", "correct": false },
      { "text": "Doctorat.", "correct": false },
      { "text": "Tècnic de Formació Professional.", "correct": false }
    ]
  },
  {
    "n": 29,
    "question": "El nivell 4 del MECES correspon a:",
    "answers": [
      { "text": "Doctorat.", "correct": true },
      { "text": "Màster Universitari.", "correct": false },
      { "text": "Grau de llarga durada.", "correct": false },
      { "text": "Catedràtic d'Universitat.", "correct": false }
    ]
  },
  {
    "n": 30,
    "question": "L'aprenentatge al llarg de la vida (Lifelong Learning) es concreta en la universitat a través de:",
    "answers": [
      { "text": "Títols propis, microcredencials i activitats de formació permanent.", "correct": true },
      { "text": "Exclusivament mitjançant el títol de Grau inicial.", "correct": false },
      { "text": "L'accés directe sense examen per a majors de 18 anys.", "correct": false },
      { "text": "La repetició d'assignatures ja aprovades anteriorment.", "correct": false }
    ]
  },
  // --- PREGUNTAS NUEVAS PARA COMPLETAR EL TEMA (BASADAS EN RD 822/2021) ---
  {
    "n": 31,
    "question": "Segons el RD 822/2021, quina és la durada màxima de l'acreditació d'un títol oficial de Grau?",
    "answers": [
      { "text": "6 anys.", "correct": true },
      { "text": "4 anys.", "correct": false },
      { "text": "8 anys.", "correct": false },
      { "text": "10 anys.", "correct": false }
    ]
  },
  {
    "n": 32,
    "question": "Què s'entén per 'Transferència de crèdits' en l'àmbit oficial?",
    "answers": [
      { "text": "La inclusió en l'expedient oficial de crèdits obtinguts anteriorment que no van conduir a títol.", "correct": true },
      { "text": "El canvi de diners de la matrícula entre facultats de la mateixa universitat.", "correct": false },
      { "text": "L'enviament de crèdits d'un estudiant a un altre per proximitat familiar.", "correct": false },
      { "text": "El reconeixement de competències adquirides en el batxillerat.", "correct": false }
    ]
  },
  {
    "n": 33,
    "question": "Les 'Microcredencials' són ensenyaments que permeten:",
    "answers": [
      { "text": "Certificar resultats d'aprenentatge d'ensenyaments de curta durada (menys de 15 ECTS).", "correct": true },
      { "text": "Obtenir un títol de Grau en un sol semestre.", "correct": false },
      { "text": "Accedir al Doctorat sense haver fet cap Màster oficial.", "correct": false },
      { "text": "Acreditar el coneixement del funcionament del campus virtual.", "correct": false }
    ]
  },
  {
    "n": 34,
    "question": "Quin nivell del Marc Europeu de Qualificacions (EQF) correspon al títol de Grau?",
    "answers": [
      { "text": "Nivell 6.", "correct": true },
      { "text": "Nivell 7.", "correct": false },
      { "text": "Nivell 5.", "correct": false },
      { "text": "Nivell 8.", "correct": false }
    ]
  },
  {
    "n": 35,
    "question": "Dins d'un pla d'estudis de Grau, quants crèdits poden ser reconeguts per experiència professional?",
    "answers": [
      { "text": "Fins a un màxim del 15% del total de crèdits del títol.", "correct": true },
      { "text": "Fins al 50% si l'experiència és de més de 10 anys.", "correct": false },
      { "text": "No es pot reconèixer cap crèdit per experiència laboral.", "correct": false },
      { "text": "Tots els crèdits optatius sense límit.", "correct": false }
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