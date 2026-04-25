const TEST_ID = "t9"; 
const questions = [
 
  {
    "n": 1,
    "question": "Quin recurs s'ha d'interposar obligatòriament per exhaurir la via administrativa contra un acte que NO hi posa fi?",
    "answers": [
      { "text": "Recurs d'alçada.", "correct": true },
      { "text": "Recurs potestatiu de reposició.", "correct": false },
      { "text": "Recurs extraordinari de revisió.", "correct": false },
      { "text": "Recurs contenciós administratiu directe.", "correct": false }
    ]
  },
  {
    "n": 2,
    "question": "Davant de quin òrgan es pot presentar el recurs d'alçada?",
    "answers": [
      { "text": "Davant l'òrgan que va dictar l'acte o davant el seu superior jeràrquic.", "correct": true },
      { "text": "Exclusivament davant el superior jeràrquic del que va dictar l'acte.", "correct": false },
      { "text": "Davant el Jutjat del Contenciós Administratiu territorialment competent.", "correct": false },
      { "text": "Davant la Sindicatura de Greuges de Catalunya.", "correct": false }
    ]
  },
  {
    "n": 3,
    "question": "Quin és el termini per interposar un recurs d'alçada si l'acte ha estat notificat de forma expressa?",
    "answers": [
      { "text": "Un mes a comptar des de l'endemà de la notificació.", "correct": true },
      { "text": "Deu dies hàbils segons la Llei 39/2015.", "correct": false },
      { "text": "Tres mesos a comptar des de la data de la resolució.", "correct": false },
      { "text": "Quinze dies naturals des de la publicació al DOGC.", "correct": false }
    ]
  },
  {
    "n": 4,
    "question": "Quin és el termini màxim de què disposa l'Administració per dictar i notificar la resolució d'un recurs d'alçada?",
    "answers": [
      { "text": "Tres mesos.", "correct": true },
      { "text": "Un mes.", "correct": false },
      { "text": "Sis mesos.", "correct": false },
      { "text": "Vint dies hàbils.", "correct": false }
    ]
  },
  {
    "n": 5,
    "question": "Com s'entén el silenci administratiu si transcorre el termini de resolució d'un recurs d'alçada sense notificació?",
    "answers": [
      { "text": "Desestimatori, amb l'excepció del supòsit de 'doble silenci'.", "correct": true },
      { "text": "Estimatori per silenci positiu en tots els casos.", "correct": false },
      { "text": "Caducitat immediata de l'expedient administratiu.", "correct": false },
      { "text": "S'entén que l'Administració accepta totes les al·legacions per manca de resposta.", "correct": false }
    ]
  },
  {
    "n": 6,
    "question": "És possible interposar un nou recurs d'alçada contra la resolució d'un recurs d'alçada anterior?",
    "answers": [
      { "text": "No, contra la resolució d'un recurs d'alçada no cap cap altre recurs ordinari, només el contenciós o l'extraordinari de revisió.", "correct": true },
      { "text": "Sí, si l'òrgan que el resol és diferent de l'original.", "correct": false },
      { "text": "Sí, sempre que s'aportin noves proves documentals.", "correct": false },
      { "text": "Només si el recurs original no va ser admès a tràmit.", "correct": false }
    ]
  },
  {
    "n": 7,
    "question": "Contra quins actes es pot interposar el recurs potestatiu de reposició?",
    "answers": [
      { "text": "Contra els actes que posen fi a la via administrativa.", "correct": true },
      { "text": "Contra actes de tràmit que no decideixen el fons de l'assumpte.", "correct": false },
      { "text": "Contra reglaments i disposicions de caràcter general.", "correct": false },
      { "text": "Contra sentències judicials que ja són fermes.", "correct": false }
    ]
  },
  {
    "n": 8,
    "question": "Pot un interessat acudir a la via judicial (contenciós) mentre espera la resolució d'un recurs de reposició?",
    "answers": [
      { "text": "No, un cop interposat el de reposició cal esperar la seva resolució expressa o la desestimació per silenci.", "correct": true },
      { "text": "Sí, són vies totalment independents i es poden tramitar alhora.", "correct": false },
      { "text": "Només si el valor de la reclamació supera els 30.000 euros.", "correct": false },
      { "text": "Sí, si el jutge dicta una mesura cautelar de suspensió.", "correct": false }
    ]
  },
  {
    "n": 9,
    "question": "Quin és el termini de resolució i notificació del recurs potestatiu de reposició?",
    "answers": [
      { "text": "Un mes.", "correct": true },
      { "text": "Tres mesos.", "correct": false },
      { "text": "Quinze dies hàbils.", "correct": false },
      { "text": "Dos mesos.", "correct": false }
    ]
  },
  {
    "n": 10,
    "question": "Contra quins actes s'interposa el recurs extraordinari de revisió?",
    "answers": [
      { "text": "Contra actes ferms en via administrativa (que ja no admeten recursos ordinaris).", "correct": true },
      { "text": "Contra actes que encara estan en termini d'alçada.", "correct": false },
      { "text": "Contra informes tècnics que no són vinculants.", "correct": false },
      { "text": "Contra qualsevol comunicació verbal d'un funcionari.", "correct": false }
    ]
  },
  {
    "n": 11,
    "question": "Quin d'aquests supòsits permet interposar un recurs extraordinari de revisió?",
    "answers": [
      { "text": "L'existència d'un error de fet que resulti dels propis documents incorporats a l'expedient.", "correct": true },
      { "text": "El canvi de criteri polític de l'òrgan competent.", "correct": false },
      { "text": "La manca de signatura electrònica qualificada en la notificació.", "correct": false },
      { "text": "La disconformitat de l'interessat amb la sanció imposada.", "correct": false }
    ]
  },
  {
    "n": 12,
    "question": "Si el recurs extraordinari de revisió es basa en l'aparició de documents de valor essencial, quin és el termini d'interposició?",
    "answers": [
      { "text": "Tres mesos des del coneixement dels documents o des de la seva recuperació.", "correct": true },
      { "text": "Un mes des de la notificació de l'acte impugnat.", "correct": false },
      { "text": "Quatre anys des de la data de la resolució original.", "correct": false },
      { "text": "Sempre es pot presentar sense límit de temps.", "correct": false }
    ]
  },
  {
    "n": 13,
    "question": "Quin és el termini màxim d'interposició del recurs de revisió si es fonamenta en un error de fet?",
    "answers": [
      { "text": "Quatre anys des de la notificació de la resolució impugnada.", "correct": true },
      { "text": "Un any natural.", "correct": false },
      { "text": "Dos mesos a comptar des de l'error.", "correct": false },
      { "text": "Sis mesos des de l'auditoria de l'expedient.", "correct": false }
    ]
  },
  {
    "n": 14,
    "question": "Com a regla general, la interposició d'un recurs suspèn l'execució de l'acte impugnat?",
    "answers": [
      { "text": "No, la interposició no suspèn l'execució, llevat que l'òrgan competent ho decideixi motivadament.", "correct": true },
      { "text": "Sí, la suspensió és automàtica per garantir la tutela judicial efectiva.", "correct": false },
      { "text": "Només si el recurs va acompanyat d'un aval bancari.", "correct": false },
      { "text": "Sí, però només en els procediments de caràcter sancionador.", "correct": false }
    ]
  },
  {
    "n": 15,
    "question": "L'Administració pot suspendre l'execució de l'acte objecte de recurs si:",
    "answers": [
      { "text": "L'execució pogués causar perjudicis d'impossible o difícil reparació o si la impugnació es fonamenta en una nul·litat de ple dret.", "correct": true },
      { "text": "L'interessat és una persona en situació de vulnerabilitat econòmica.", "correct": false },
      { "text": "El procediment ha trigat més de sis mesos en tramitar-se.", "correct": false },
      { "text": "L'acte conté errors materials o aritmètics evidents.", "correct": false }
    ]
  },
  {
    "n": 16,
    "question": "Què prohibeix el principi de 'reformatio in peius' en la resolució dels recursos?",
    "answers": [
      { "text": "Que l'Administració empitjori la situació inicial de qui ha interposat el recurs com a conseqüència d'aquest.", "correct": true },
      { "text": "Que s'utilitzin proves que no estiguin en l'expedient original.", "correct": false },
      { "text": "Que la resolució trigui més del que estableix la llei.", "correct": false },
      { "text": "Que es cobrin taxes per la interposició de recursos ordinaris.", "correct": false }
    ]
  },
  {
    "n": 17,
    "question": "Si un interessat comet un error en la denominació del recurs (per exemple, diu 'alçada' quan toca 'reposició'):",
    "answers": [
      { "text": "L'Administració l'ha de tramitar igualment si se'n dedueix el seu veritable caràcter.", "correct": true },
      { "text": "El recurs es considera nul i s'arxiva sense més tràmits.", "correct": false },
      { "text": "S'ha de demanar l'esmena al ciutadà en un termini de 3 dies.", "correct": false },
      { "text": "Es perd el dret a la via judicial posterior.", "correct": false }
    ]
  },
  {
    "n": 18,
    "question": "La revisió d'ofici és el procediment mitjançant el qual l'Administració:",
    "answers": [
      { "text": "Declara la nul·litat dels seus propis actes que hagin esdevingut ferms i que estiguin afectats per un vici de nul·litat de ple dret.", "correct": true },
      { "text": "Corregit únicament els errors materials o aritmètics dels documents.", "correct": false },
      { "text": "Canvia una decisió perquè el ciutadà li ho ha demanat fora de termini.", "correct": false },
      { "text": "Revoca actes desfavorables per motius d'oportunitat o interès públic.", "correct": false }
    ]
  },
  {
    "n": 19,
    "question": "Per declarar la nul·litat d'ofici d'un acte a Catalunya, és preceptiu el dictamen favorable de:",
    "answers": [
      { "text": "La Comissió Jurídica Assessora.", "correct": true },
      { "text": "El Consell Social de la Universitat.", "correct": false },
      { "text": "La Sindicatura de Comptes.", "correct": false },
      { "text": "El Gabinet Jurídic de la Generalitat.", "correct": false }
    ]
  },
  {
    "n": 20,
    "question": "La declaració de lesivitat s'aplica a actes que són:",
    "answers": [
      { "text": "Anul·lables i favorables als interessats, com a pas previ per impugnar-los davant la via judicial.", "correct": true },
      { "text": "Nuls de ple dret i que perjudiquen el ciutadà.", "correct": false },
      { "text": "Actes de tràmit que han estat dictats per un òrgan incompetent.", "correct": false },
      { "text": "Actes ferms que s'han de revisar per error de fet.", "correct": false }
    ]
  },
  {
    "n": 21,
    "question": "Dins l'organització de la UB, contra les resolucions dictades pel Rector:",
    "answers": [
      { "text": "Es pot interposar recurs potestatiu de reposició, ja que posen fi a la via administrativa.", "correct": true },
      { "text": "S'ha d'interposar recurs d'alçada davant el Consell de Govern.", "correct": false },
      { "text": "Cal presentar una reclamació prèvia al Consell Social.", "correct": false },
      { "text": "Només cap el recurs extraordinari de revisió en qualsevol cas.", "correct": false }
    ]
  },
  {
    "n": 22,
    "question": "En quin cas la resolució d'un recurs d'alçada pot tenir efectes de silenci positiu?",
    "answers": [
      { "text": "Quan el recurs s'interposi contra la desestimació per silenci d'una sol·licitud, si el nou termini venç sense resolució (doble silenci).", "correct": true },
      { "text": "Sempre que l'Administració no hagi respost en un termini de 6 mesos.", "correct": false },
      { "text": "Quan el recurs tracti sobre matèries de medi ambient.", "correct": false },
      { "text": "Mai, el silenci en via de recurs és sempre i en tot cas negatiu.", "correct": false }
    ]
  },
  {
    "n": 23,
    "question": "Quan poden els interessats aportar noves proves en la fase de recurs?",
    "answers": [
      { "text": "Quan s'hagin produït fets nous o fets que no van poder ser aportats en el procediment original per causes justificades.", "correct": true },
      { "text": "En qualsevol moment, sense necessitat de cap justificació.", "correct": false },
      { "text": "Només si s'interposa el recurs de revisió per error material.", "correct": false },
      { "text": "Mai, en la via de recurs la prova ja està tancada.", "correct": false }
    ]
  },
  {
    "n": 24,
    "question": "L'audiència als interessats durant la tramitació d'un recurs és preceptiva quan:",
    "answers": [
      { "text": "S'hagin de tenir en compte nous fets o documents que no figuraven en l'expedient originari.", "correct": true },
      { "text": "El recurs sigui d'alçada i la quantia superi els 6.000 euros.", "correct": false },
      { "text": "L'interessat ho demani expressament en el seu escrit d'interposició.", "correct": false },
      { "text": "Sempre, per garantir el principi de contradicció.", "correct": false }
    ]
  },
  {
    "n": 25,
    "question": "Quin requisit de congruència ha de complir la resolució d'un recurs?",
    "answers": [
      { "text": "Ha de decidir totes les qüestions plantejades en el recurs, encara que no hagin estat al·legades pels interessats (prèvia audiència).", "correct": true },
      { "text": "S'ha de limitar estrictament a confirmar o anul·lar l'acte original.", "correct": false },
      { "text": "Ha de donar sempre la raó a l'interessat si l'acte era presumpte.", "correct": false },
      { "text": "Ha de redactar-se seguint el model oficial de la Seu Electrònica.", "correct": false }
    ]
  },
  {
    "n": 26,
    "question": "Si l'Administració detecta un vici de forma que no permet resoldre el recurs:",
    "answers": [
      { "text": "Pot ordenar la retroacció de les actuacions al moment procedimental on es va cometre el vici.", "correct": true },
      { "text": "Ha d'anul·lar definitivament l'expedient i arxivar-lo.", "correct": false },
      { "text": "Ha de dictar una resolució estimatòria per defecte de l'administració.", "correct": false },
      { "text": "Ha d'elevar l'expedient al Jutjat Contenciós de manera immediata.", "correct": false }
    ]
  },
  {
    "n": 27,
    "question": "Quin és el termini per interposar recurs d'alçada contra un acte presumpte (silenci)?",
    "answers": [
      { "text": "En qualsevol moment a partir de l'endemà del dia en què es produeixin els efectes del silenci.", "correct": true },
      { "text": "Tres mesos des de la data de la sol·licitud original.", "correct": false },
      { "text": "Un mes des que es té constància de la manca de resposta.", "correct": false },
      { "text": "Sis mesos a comptar des de la presentació de la instància.", "correct": false }
    ]
  },
  {
    "n": 28,
    "question": "Quin d'aquests fets permet la interposició del recurs extraordinari de revisió?",
    "answers": [
      { "text": "Que l'acte es dictés com a conseqüència de prevaricació, suborn o violència declarats en sentència judicial ferma.", "correct": true },
      { "text": "La manca de motivació suficient en els fonaments de dret de l'acte.", "correct": false },
      { "text": "Un canvi en la jurisprudència del Tribunal Suprem.", "correct": false },
      { "text": "La caducitat del termini per interposar el recurs d'alçada.", "correct": false }
    ]
  },
  {
    "n": 29,
    "question": "Contra la resolució d'un recurs extraordinari de revisió es pot interposar:",
    "answers": [
      { "text": "Recurs contenciós administratiu.", "correct": true },
      { "text": "Un nou recurs d'alçada davant el Rector.", "correct": false },
      { "text": "Una reclamació davant el Síndic de Greuges.", "correct": false },
      { "text": "No es pot recórrer de cap manera.", "correct": false }
    ]
  },
  {
    "n": 30,
    "question": "Dins l'àmbit de la UB, el Rector té competència per resoldre:",
    "answers": [
      { "text": "Els recursos d'alçada contra actes dels Decans i el recurs de reposició contra els seus propis actes.", "correct": true },
      { "text": "Només els conflictes entre estudiants i professors.", "correct": false },
      { "text": "Les queixes presentades davant el Consell Social.", "correct": false },
      { "text": "Els recursos contenciosos presentats a la via judicial.", "correct": false }
    ]
  },
  /* --- 5 EXTRAS --- */
  {
    "n": 31,
    "question": "Si el recurs d'alçada s'interposa davant l'òrgan que va dictar l'acte (inferior), aquest l'ha de remetre al superior en el termini de:",
    "answers": [
      { "text": "Deu dies, acompanyat d'un informe i una còpia completa de l'expedient.", "correct": true },
      { "text": "Tres dies hàbils segons el procediment d'urgència.", "correct": false },
      { "text": "Un mes, coincidint amb el termini màxim d'interposició.", "correct": false },
      { "text": "Cinc dies naturals per evitar la caducitat.", "correct": false }
    ]
  },
  {
    "n": 32,
    "question": "En matèria de suspensió de l'acte, si l'òrgan competent no dicta resolució sobre la petició de suspensió en un termini determinat, aquesta s'entén:",
    "answers": [
      { "text": "Concedida (suspensió per silenci positiu) si transcorre un mes sense resolució expressa.", "correct": true },
      { "text": "Denegada, segons el principi general de silenci negatiu en via de recurs.", "correct": false },
      { "text": "Pendent de validació obligatòria pel Tribunal Superior de Justícia.", "correct": false },
      { "text": "Caducada, obligant a l'interessat a reiterar la petició.", "correct": false }
    ]
  },
  {
    "n": 33,
    "question": "Quin és el termini de prescripció perquè l'Administració pugui iniciar d'ofici la revisió d'un acte nul de ple dret?",
    "answers": [
      { "text": "L'acció de nul·litat no prescriu; es pot exercir en qualsevol moment.", "correct": true },
      { "text": "Quatre anys, d'acord amb el termini de la declaració de lesivitat.", "correct": false },
      { "text": "Deu anys des de la data de notificació de l'acte original.", "correct": false },
      { "text": "Cinc anys, seguint el termini general de prescripció de la Llei 40/2015.", "correct": false }
    ]
  },
  {
    "n": 34,
    "question": "En el recurs extraordinari de revisió, si la causa és la prevaricació o suborn, quin és el termini d'interposició?",
    "answers": [
      { "text": "Tres mesos a comptar des de que la sentència judicial sigui ferma.", "correct": true },
      { "text": "Quatre anys des de la notificació de l'acte objecte de revisió.", "correct": false },
      { "text": "Un mes des del coneixement dels fets delictius.", "correct": false },
      { "text": "Quinze dies des que es publica la sentència al BOE.", "correct": false }
    ]
  },
  {
    "n": 35,
    "question": "Quan pot l'Administració desestimar un recurs de revisió 'ad limine' (sense entrar a examinar el fons)?",
    "answers": [
      { "text": "Quan el recurs no es fonamenti en cap de les causes de la llei o s'haguessin desestimat en el fons altres recursos substancialment iguals.", "correct": true },
      { "text": "Quan el recurrent no hagi pagat les taxes universitàries corresponents.", "correct": false },
      { "text": "Quan el recurs s'hagi presentat en format paper en lloc de via electrònica.", "correct": false },
      { "text": "Quan l'acte original ja hagi estat recorregut en via de reposició.", "correct": false }
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