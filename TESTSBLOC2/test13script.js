const TEST_ID = "t13"; 
const questions = [
 
  {
    "n": 1,
    "question": "Què signifiquen les sigles PTGAS segons la normativa universitària vigent?",
    "answers": [
      { "text": "Personal Tècnic, de Gestió i d'Administració i Serveis.", "correct": true },
      { "text": "Personal de Treball, Gestió i Atenció Social.", "correct": false },
      { "text": "Professorat Tècnic i de Gestió Administrativa Superior.", "correct": false },
      { "text": "Personal de Tecnologia, Gestió i Administració de Sistemes.", "correct": false }
    ]
  },
  {
    "n": 2,
    "question": "Segons l'Estatut de la UB, quina és la missió del PTGAS?",
    "answers": [
      { "text": "El suport, l'assistència i l'assessorament a les autoritats acadèmiques, així com la gestió i administració, especialment en les àrees de recursos humans, organització administrativa, assumptes econòmics i suport a la recerca.", "correct": true },
      { "text": "L'exercici exclusiu de la docència i la recerca universitària en departaments i instituts.", "correct": false },
      { "text": "La seguretat ciutadana i el manteniment de l'ordre dins dels recintes universitaris.", "correct": false },
      { "text": "La representació legal i defensa judicial de la institució davant qualsevol instància.", "correct": false }
    ]
  },
  {
    "n": 3,
    "question": "El PTGAS de la Universitat de Barcelona es regeix per:",
    "answers": [
      { "text": "La LOSU, l'Estatut de la UB, el TREBEP, la legislació de la funció pública de la Generalitat i els convenis col·lectius aplicables.", "correct": true },
      { "text": "Exclusivament per la Llei de Contractes del Sector Públic.", "correct": false },
      { "text": "Només per les circulars i instruccions del Rector.", "correct": false },
      { "text": "El dret laboral comú sense aplicació de cap normativa administrativa.", "correct": false }
    ]
  },
  {
    "n": 4,
    "question": "Sota la direcció del Rector, a qui correspon la gestió del PTGAS i l'exercici de la seva direcció?",
    "answers": [
      { "text": "Al Gerent.", "correct": true },
      { "text": "Al Consell Social.", "correct": false },
      { "text": "Al Vicerector de Personal Docent.", "correct": false },
      { "text": "Al Consell de Govern.", "correct": false }
    ]
  },
  {
    "n": 5,
    "question": "L'Oferta d'Ocupació Pública (OOP) de la UB, que inclou les places de PTGAS, ha de ser aprovada per:",
    "answers": [
      { "text": "El Consell de Govern.", "correct": true },
      { "text": "El Claustre Universitari.", "correct": false },
      { "text": "El Consell Social a proposta del Gerent.", "correct": false },
      { "text": "La Direcció General d'Universitats de la Generalitat.", "correct": false }
    ]
  },
  {
    "n": 6,
    "question": "Quin és el sistema ordinari i general de provisió de llocs de treball per al PTGAS funcionari a la UB?",
    "answers": [
      { "text": "El concurs de mèrits i capacitats.", "correct": true },
      { "text": "La lliure designació discrecional.", "correct": false },
      { "text": "L'oposició lliure per a qualsevol canvi de lloc.", "correct": false },
      { "text": "L'adscripció directa per resolució de la Gerència.", "correct": false }
    ]
  },
  {
    "n": 7,
    "question": "El sistema de 'lliure designació' es reserva per a aquells llocs que:",
    "answers": [
      { "text": "Siguin de caràcter directiu o d'especial responsabilitat, tal com s'especifica a la Relació de Llocs de Treball (RLT).", "correct": true },
      { "text": "Pertanyin al Subgrup C2 per agilitzar la seva cobertura.", "correct": false },
      { "text": "Siguin ocupats per personal interí amb més de 5 anys d'experiència.", "correct": false },
      { "text": "Tinguin caràcter temporal per cobrir baixes de maternitat.", "correct": false }
    ]
  },
  {
    "n": 8,
    "question": "En els concursos de provisió del PTGAS funcionari, s'han de valorar, entre d'altres:",
    "answers": [
      { "text": "L'antiguitat, el grau personal consolidat, el treball desenvolupat i els cursos de formació i perfeccionament.", "correct": true },
      { "text": "L'expedient acadèmic del títol d'accés a la funció pública.", "correct": false },
      { "text": "La proximitat del domicili al centre de treball.", "correct": false },
      { "text": "Les cartes de recomanació del cap de la unitat anterior.", "correct": false }
    ]
  },
  {
    "n": 9,
    "question": "La reassignació de llocs de treball és un mecanisme de mobilitat que s'aplica quan:",
    "answers": [
      { "text": "Es produeixen reformes organitzatives o per necessitats del servei degudament motivades.", "correct": true },
      { "text": "El funcionari ho demana per motius de conciliació familiar.", "correct": false },
      { "text": "S'ha de sancionar un treballador per una falta lleu.", "correct": false },
      { "text": "Es vol augmentar el sou base de determinades escales.", "correct": false }
    ]
  },
  {
    "n": 10,
    "question": "Els tribunals de selecció han de garantir el compliment dels següents principis:",
    "answers": [
      { "text": "Imparcialitat, professionalitat, especialitat dels seus membres i paritat de gènere.", "correct": true },
      { "text": "Secret de les deliberacions però publicitat dels vots individuals.", "correct": false },
      { "text": "Representació política dels grups del Claustre.", "correct": false },
      { "text": "Jerarquia administrativa directa respecte al Gerent.", "correct": false }
    ]
  },
  {
    "n": 11,
    "question": "La selecció del personal PTGAS laboral s'ha de realitzar mitjançant convocatòria pública i sistemes que respectin:",
    "answers": [
      { "text": "Els principis d'igualtat, mèrit, capacitat i publicitat.", "correct": true },
      { "text": "El dret de preferència dels qui ja han treballat a la UB anteriorment.", "correct": false },
      { "text": "La llibertat de contractació pròpia de les empreses privades.", "correct": false },
      { "text": "L'ordre cronològic d'inscripció a les llistes d'atur.", "correct": false }
    ]
  },
  {
    "n": 12,
    "question": "A quina escala pertanyen els llocs de treball que realitzen tasques d'execució i tràmits administratius generals?",
    "answers": [
      { "text": "Escala Administrativa o Escala Auxiliar Administrativa pròpies de la UB.", "correct": true },
      { "text": "Escala de Gestió Acadèmica Exclusiva.", "correct": false },
      { "text": "Cossos de l'Administració General de l'Estat adscrits a la UB.", "correct": false },
      { "text": "Escales de Suport Tècnic Especialitzat.", "correct": false }
    ]
  },
  {
    "n": 13,
    "question": "La mobilitat forçosa del personal PTGAS funcionari:",
    "answers": [
      { "text": "S'ha de fonamentar en necessitats del servei i s'ha de realitzar mitjançant una resolució motivada.", "correct": true },
      { "text": "Està prohibida pel Codi de Conducta de la UB.", "correct": false },
      { "text": "Es pot aplicar lliurement sense necessitat d'explicar el motiu.", "correct": false },
      { "text": "Només es pot fer si el treballador està d'acord.", "correct": false }
    ]
  },
  {
    "n": 14,
    "question": "La comissió de serveis permet cobrir temporalment un lloc de treball en cas de:",
    "answers": [
      { "text": "Urgent i inajornable necessitat, amb un funcionari que compleixi els requisits del lloc.", "correct": true },
      { "text": "Vacances o dies de lliure disposició de l'anterior titular.", "correct": false },
      { "text": "Inauguració de nous campus fora de Barcelona.", "correct": false },
      { "text": "Com a premi per un bon rendiment en l'avaluació de l'exercici.", "correct": false }
    ]
  },
  {
    "n": 15,
    "question": "El període de prova per al personal laboral PTGAS de nou ingrés:",
    "answers": [
      { "text": "Té la durada prevista al conveni col·lectiu i té com a objectiu acreditar l'aptitud per al lloc.", "correct": true },
      { "text": "És de 6 mesos per a tothom, sense excepcions.", "correct": false },
      { "text": "És voluntari i només s'aplica si el Gerent ho decideix.", "correct": false },
      { "text": "Substitueix la fase d'oposició en el procés selectiu.", "correct": false }
    ]
  },
  {
    "n": 16,
    "question": "Per participar en un procés de promoció interna vertical a la UB cal:",
    "answers": [
      { "text": "Pertànyer a un cos d'un subgrup inferior i tenir una antiguitat mínima de 2 anys en el mateix.", "correct": true },
      { "text": "Ser personal interí amb més de 3 anys d'antiguitat.", "correct": false },
      { "text": "Haver nascut a Catalunya o acreditar 10 anys de residència.", "correct": false },
      { "text": "Tenir un informe favorable del Rectorat sobre la lleialtat institucional.", "correct": false }
    ]
  },
  {
    "n": 17,
    "question": "Per accedir al Subgrup A2 de les escales de PTGAS de la UB, quina titulació s'exigeix?",
    "answers": [
      { "text": "Títol universitari de Grau o equivalent.", "correct": true },
      { "text": "Títol de Tècnic Superior de FP.", "correct": false },
      { "text": "Títol de Batxillerat.", "correct": false },
      { "text": "No es demana titulació si es té experiència prèvia.", "correct": false }
    ]
  },
  {
    "n": 18,
    "question": "El personal que ocupa un lloc per lliure designació pot ser cessat:",
    "answers": [
      { "text": "Amb caràcter discrecional per l'òrgan que va fer el nomenament.", "correct": true },
      { "text": "Només si es jubila o demana l'excedència.", "correct": false },
      { "text": "Únicament si la plaça s'amortitza a la RLT.", "correct": false },
      { "text": "Si ho decideix la Junta de Personal per majoria absoluta.", "correct": false }
    ]
  },
  {
    "n": 19,
    "question": "On s'ha de publicar oficialment la convocatòria de les proves selectives per a funcionaris de la UB?",
    "answers": [
      { "text": "Al Diari Oficial de la Generalitat de Catalunya (DOGC) i a la Gaseta Universitària.", "correct": true },
      { "text": "Només al lloc web de la Gerència.", "correct": false },
      { "text": "Al Butlletí Oficial de l'Estat (BOE) exclusivament.", "correct": false },
      { "text": "En un diari de premsa escrita nacional.", "correct": false }
    ]
  },
  {
    "n": 20,
    "question": "L'acreditació del coneixement del català en els processos selectius del PTGAS:",
    "answers": [
      { "text": "És un requisit de participació, excepte en els casos previstos per la normativa de funció pública.", "correct": true },
      { "text": "S'avalua com un mèrit més en la fase de concurs.", "correct": false },
      { "text": "És opcional si es té un títol d'anglès nivell B2.", "correct": false },
      { "text": "No és necessària per al personal laboral temporal.", "correct": false }
    ]
  },
  {
    "n": 21,
    "question": "Quin òrgan col·legiat té la funció de representació del personal funcionari PTGAS?",
    "answers": [
      { "text": "La Junta de Personal.", "correct": true },
      { "text": "El Comitè d'Empresa.", "correct": false },
      { "text": "El Consell Social.", "correct": false },
      { "text": "La Taula de Negociació del PTGAS.", "correct": false }
    ]
  },
  {
    "n": 22,
    "question": "El Comitè d'Empresa representa els interessos de:",
    "answers": [
      { "text": "El PTGAS laboral de la Universitat.", "correct": true },
      { "text": "Tot el personal docent i investigador (PDI).", "correct": false },
      { "text": "Exclusivament el personal funcionari interí.", "correct": false },
      { "text": "Els representants del Rectorat a la Gerència.", "correct": false }
    ]
  },
  {
    "n": 23,
    "question": "La RLT (Relació de Llocs de Treball) és un instrument de planificació que ha d'incloure obligatòriament:",
    "answers": [
      { "text": "La denominació dels llocs, els grups de classificació, els sistemes de provisió i les retribucions complementàries.", "correct": true },
      { "text": "El llistat nominal de tots els treballadors amb el seu DNI.", "correct": false },
      { "text": "L'horari de fitxatge diari de cada treballador.", "correct": false },
      { "text": "La valoració de l'exercici dels darrers tres anys.", "correct": false }
    ]
  },
  {
    "n": 24,
    "question": "Respecte a la recerca, el PTGAS pot:",
    "answers": [
      { "text": "Col·laborar en tasques de gestió i suport tècnic a la recerca i a la transferència de coneixements.", "correct": true },
      { "text": "Dirigir tesis doctorals de forma autònoma.", "correct": false },
      { "text": "Ser l'investigador principal d'un projecte europeu sense titulació acadèmica.", "correct": false },
      { "text": "Cap de les anteriors, té la recerca prohibida per l'Estatut.", "correct": false }
    ]
  },
  {
    "n": 25,
    "question": "La reserva de places per a persones amb discapacitat en la UB:",
    "answers": [
      { "text": "S'ha d'ajustar a la normativa general de funció pública (mínim 7%).", "correct": true },
      { "text": "És una decisió voluntària del Consell Social.", "correct": false },
      { "text": "Només s'aplica en les places de caràcter eventual.", "correct": false },
      { "text": "S'ha reduït al 2% pel caràcter tècnic de la universitat.", "correct": false }
    ]
  },
  {
    "n": 26,
    "question": "El personal funcionari interí de la UB cessa la seva relació:",
    "answers": [
      { "text": "Quan la plaça s'ocupa per un funcionari de carrera, s'amortitza el lloc o finalitza la causa del nomenament.", "correct": true },
      { "text": "Automàticament cada sis mesos per llei.", "correct": false },
      { "text": "Si l'interessat agafa una baixa mèdica de llarga durada.", "correct": false },
      { "text": "En el moment que s'aprova el nou pressupost de la UB.", "correct": false }
    ]
  },
  {
    "n": 27,
    "question": "La mobilitat interuniversitària a la UB es basa en:",
    "answers": [
      { "text": "El principi de reciprocitat i mitjançant els convenis subscrits entre universitats.", "correct": true },
      { "text": "L'obligació de canviar d'universitat cada 10 anys.", "correct": false },
      { "text": "La lliure elecció del funcionari sense necessitat de vacant.", "correct": false },
      { "text": "Només és possible entre universitats públiques i privades.", "correct": false }
    ]
  },
  {
    "n": 28,
    "question": "El dret i deure de formació del PTGAS té com a objectiu:",
    "answers": [
      { "text": "L'actualització professional, la millora de la gestió i la promoció en la carrera professional.", "correct": true },
      { "text": "L'obtenció de títols de Grau de forma gratuïta durant la jornada laboral.", "correct": false },
      { "text": "Substituir la manca de personal amb cursos d'autoaprenentatge.", "correct": false },
      { "text": "Exclusivament l'aprenentatge d'idiomes estrangers.", "correct": false }
    ]
  },
  {
    "n": 29,
    "question": "En matèria de situacions administratives, el PTGAS funcionari es regeix per:",
    "answers": [
      { "text": "La normativa aplicable als funcionaris de l'Administració de la Generalitat de Catalunya.", "correct": true },
      { "text": "El Conveni Col·lectiu d'Oficines i Despatxos de Barcelona.", "correct": false },
      { "text": "L'Estatut dels Treballadors exclusivament.", "correct": false },
      { "text": "Les normes de l'Organització Internacional del Treball (OIT).", "correct": false }
    ]
  },
  {
    "n": 30,
    "question": "Les proves selectives per al PTGAS poden incloure:",
    "answers": [
      { "text": "Proves de coneixements, exercicis pràctics, psicotècnics i el coneixement de llengües.", "correct": true },
      { "text": "Només una entrevista amb el futur cap directe.", "correct": false },
      { "text": "Una valoració del currículum sense cap examen presencial en l'oposició.", "correct": false },
      { "text": "L'entrega d'un treball de recerca sobre la Universitat.", "correct": false }
    ]
  },
  /* --- 5 EXTRAS ESTRATÈGICS --- */
  {
    "n": 31,
    "question": "Quina és la diferència principal entre el concurs general i el concurs específic a la UB?",
    "answers": [
      { "text": "En l'específic es valoren mèrits adequats a les característiques del lloc mitjançant mètodes com memòries o entrevistes.", "correct": true },
      { "text": "El general és per a laborals i l'específic per a funcionaris.", "correct": false },
      { "text": "El concurs específic només es convoca per al personal del Subgrup A1.", "correct": false },
      { "text": "No hi ha diferència; són dos noms per al mateix procediment.", "correct": false }
    ]
  },
  {
    "n": 32,
    "question": "El personal de les escales de PTGAS d'altres universitats que s'incorpori a la UB per concurs:",
    "answers": [
      { "text": "S'integra plenament en el PTGAS de la UB en la situació de servei actiu.", "correct": true },
      { "text": "Ha de passar una nova oposició de consolidació en el termini d'un any.", "correct": false },
      { "text": "Manté la dependència orgànica de la seva universitat d'origen.", "correct": false },
      { "text": "Només pot ocupar llocs de caràcter eventual o interí.", "correct": false }
    ]
  },
  {
    "n": 33,
    "question": "Segons l'Estatut de la UB, qui nomena els funcionaris de les escales pròpies de la Universitat?",
    "answers": [
      { "text": "El Rector.", "correct": true },
      { "text": "El Gerent.", "correct": false },
      { "text": "El Consell Social.", "correct": false },
      { "text": "El Conseller d'Universitats.", "correct": false }
    ]
  },
  {
    "n": 34,
    "question": "En el cas del personal laboral, la pèrdua de la condició de PTGAS pot produir-se per:",
    "answers": [
      { "text": "Despatx disciplinari que sigui declarat procedent o per les causes previstes al contracte i legislació laboral.", "correct": true },
      { "text": "Per voluntat unilateral del Gerent sense necessitat de causa.", "correct": false },
      { "text": "Per complir 60 anys d'edat de forma obligatòria.", "correct": false },
      { "text": "Per canvi de sindicat representatiu.", "correct": false }
    ]
  },
  {
    "n": 35,
    "question": "L'instrument que permet la reordenació dels llocs de treball per raons d'eficàcia i economia es denomina:",
    "answers": [
      { "text": "Plans d'ordenació de recursos humans.", "correct": true },
      { "text": "Convocatòria d'Oferta Pública extraoficial.", "correct": false },
      { "text": "Protocol de trasllats discrecionals.", "correct": false },
      { "text": "Acord de modificació salarial.", "correct": false }
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
