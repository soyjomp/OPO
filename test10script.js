const TEST_ID = "t10"; 
const questions = [
 
  {
    "n": 1,
    "question": "Quin és l'objecte principal de la Llei 19/2014, del 29 de desembre?",
    "answers": [
      { "text": "Regular la transparència i el dret d'accés a la informació pública, i establir els principis de bon govern i les obligacions dels grups d'interès.", "correct": true },
      { "text": "Substituir el Codi Penal en l'àmbit de la corrupció administrativa.", "correct": false },
      { "text": "Regular exclusivament el pressupost i la comptabilitat de la Generalitat.", "correct": false },
      { "text": "Establir el règim de protecció de dades privades de les empreses adjudicatàries.", "correct": false }
    ]
  },
  {
    "n": 2,
    "question": "S'aplica la Llei de transparència a les universitats públiques de Catalunya?",
    "answers": [
      { "text": "Sí, estan incloses plenament dins de l'àmbit d'aplicació com a part de l'Administració de la Generalitat i el seu sector públic.", "correct": true },
      { "text": "No, a causa de la seva autonomia constitucional només s'hi regeixen de forma voluntària.", "correct": false },
      { "text": "Només pel que fa a la informació sobre la contractació pública superior a 100.000 €.", "correct": false },
      { "text": "Només en relació amb les dades dels òrgans de govern, no de la gestió acadèmica.", "correct": false }
    ]
  },
  {
    "n": 3,
    "question": "Dins del marc de la transparència, què defineix la 'publicitat activa'?",
    "answers": [
      { "text": "L'obligació dels subjectes obligats de difondre d'ofici la informació pública de manera constant, fàcil i actualitzada.", "correct": true },
      { "text": "L'acció de fer propaganda institucional sobre els èxits de la Universitat.", "correct": false },
      { "text": "El dret del ciutadà a demanar informació que encara no ha estat elaborada.", "correct": false },
      { "text": "L'obligació de respondre a les preguntes de la premsa en roda de premsa.", "correct": false }
    ]
  },
  {
    "n": 4,
    "question": "On s'ha de centralitzar la publicació de la informació relativa a la transparència activa a la UB?",
    "answers": [
      { "text": "Al Portal de la Transparència, integrat a la Seu Electrònica de la Universitat.", "correct": true },
      { "text": "En el tauler d'anuncis físic situat a l'Edifici Històric de la UB.", "correct": false },
      { "text": "En una secció específica dins del Butlletí Oficial de l'Estat (BOE).", "correct": false },
      { "text": "En una base de dades privada d'accés restringit per a la comunitat universitària.", "correct": false }
    ]
  },
  {
    "n": 5,
    "question": "Qui pot exercir el dret d'accés a la informació pública segons la normativa catalana?",
    "answers": [
      { "text": "Totes les persones, físiques o jurídiques, sense que calgui acreditar cap interès ni motivació.", "correct": true },
      { "text": "Només els ciutadans de la Unió Europea que resideixin a Catalunya.", "correct": false },
      { "text": "Només les persones que acreditin un interès legítim i directe en l'expedient.", "correct": false },
      { "text": "Exclusivament els periodistes col·legiats i els partits polítics.", "correct": false }
    ]
  },
  {
    "n": 6,
    "question": "L'exercici del dret d'accés a la informació pública requereix motivació?",
    "answers": [
      { "text": "No, no requereix motivació, tot i que el sol·licitant pot exposar els motius per facilitar la ponderació.", "correct": true },
      { "text": "Sí, és un requisit formal imprescindible per admetre la sol·licitud a tràmit.", "correct": false },
      { "text": "Només si la informació sol·licitada afecta l'ordre públic.", "correct": false },
      { "text": "Sí, si la informació té més de deu anys d'antiguitat.", "correct": false }
    ]
  },
  {
    "n": 7,
    "question": "Quin és el termini màxim per resoldre una sol·licitud d'accés a la informació pública?",
    "answers": [
      { "text": "Un mes, amb possibilitat de pròrroga d'un mes addicional per raons de complexitat.", "correct": true },
      { "text": "Deu dies hàbils impròrrogables.", "correct": false },
      { "text": "Tres mesos, tal com estableix el procediment administratiu comú.", "correct": false },
      { "text": "Vint dies naturals des de la recepció al registre.", "correct": false }
    ]
  },
  {
    "n": 8,
    "question": "Quin òrgan independent té la funció de resoldre les reclamacions en matèria d'accés a la informació a Catalunya?",
    "answers": [
      { "text": "La Comissió de Garantia del Dret d'Accés a la Informació Pública (GAIP).", "correct": true },
      { "text": "La Sindicatura de Greuges de Catalunya.", "correct": false },
      { "text": "L'Oficina Antifrau de Catalunya.", "correct": false },
      { "text": "L'Agència de Transparència de l'Àrea Metropolitana.", "correct": false }
    ]
  },
  {
    "n": 9,
    "question": "Quin d'aquests es considera un límit que pot restringir el dret d'accés a la informació?",
    "answers": [
      { "text": "La protecció de dades personals, la seguretat pública i el secret professional.", "correct": true },
      { "text": "La càrrega excessiva de feina per al funcionari encarregat.", "correct": false },
      { "text": "El fet que la informació encara no estigui penjada al Portal de Transparència.", "correct": false },
      { "text": "La manca de pressupost per fer les fotocòpies del document.", "correct": false }
    ]
  },
  {
    "n": 10,
    "question": "Segons la Llei 19/2014, el silenci administratiu en sol·licituds d'accés a la informació és:",
    "answers": [
      { "text": "Estimatori (positiu), tret que la pròpia llei estableixi una excepció per límits o tercers.", "correct": true },
      { "text": "Sempre desestimatori per aplicació de la Llei 39/2015.", "correct": false },
      { "text": "Considerat com una caducitat automàtica del dret d'accés.", "correct": false },
      { "text": "Una infracció greu que anul·la el procediment.", "correct": false }
    ]
  },
  {
    "n": 11,
    "question": "Pel que fa als alts càrrecs de la UB, quina informació s'ha de publicar per transparència activa?",
    "answers": [
      { "text": "Les retribucions, indemnitzacions, dietes i les declaracions d'activitats i bens.", "correct": true },
      { "text": "Únicament el nom, cognoms i la data de nomenament.", "correct": false },
      { "text": "La seva adreça particular i dades familiars per transparència total.", "correct": false },
      { "text": "Només si el seu sou supera el d'un Conseller de la Generalitat.", "correct": false }
    ]
  },
  {
    "n": 12,
    "question": "Si la informació sol·licitada conté dades personals de tercers, l'Administració ha de:",
    "answers": [
      { "text": "Realitzar una ponderació raonada entre l'interès públic de l'accés i el dret a la intimitat o protecció de dades.", "correct": true },
      { "text": "Denegar l'accés immediatament per evitar infraccions de la RGPD.", "correct": false },
      { "text": "Donar tota la informació anonimitzant només el DNI de les persones.", "correct": false },
      { "text": "Consultar obligatòriament a l'Autoritat Catalana de Protecció de Dades en cada cas.", "correct": false }
    ]
  },
  {
    "n": 13,
    "question": "El concepte de 'bon govern' obliga els alts càrrecs de la Universitat a:",
    "answers": [
      { "text": "Actuar amb integritat, objectivitat i a retre comptes de la seva gestió davant la ciutadania.", "correct": true },
      { "text": "Prioritzar la imatge pública de la institució per sobre de la fiscalització.", "correct": false },
      { "text": "Seguir exclusivament les ordres polítiques del Consell Social.", "correct": false },
      { "text": "Publicar les seves opinions personals sobre la política universitària.", "correct": false }
    ]
  },
  {
    "n": 14,
    "question": "Respecte al cost econòmic del dret d'accés:",
    "answers": [
      { "text": "L'accés a la informació i la consulta de les dades en el seu lloc de dipòsit són gratuïts.", "correct": true },
      { "text": "Totes les sol·licituds tenen una taxa administrativa de tramitació de 15 €.", "correct": false },
      { "text": "L'enviament de qualsevol fitxer digital comporta el pagament d'un cànon.", "correct": false },
      { "text": "És gratuït només si es demostra que s'està en situació d'atur.", "correct": false }
    ]
  },
  {
    "n": 15,
    "question": "Si la informació sol·licitada ja està disponible al Portal de la Transparència, l'òrgan pot:",
    "answers": [
      { "text": "Indicar al sol·licitant la font o el lloc on pot consultar-la de manera directa.", "correct": true },
      { "text": "Ignorar la sol·licitud per considerar-la repetitiva o abusiva.", "correct": false },
      { "text": "Cobrar un recàrrec per fer una gestió que el ciutadà podria haver fet sol.", "correct": false },
      { "text": "Denegar l'accés sense donar cap explicació addicional.", "correct": false }
    ]
  },
  {
    "n": 16,
    "question": "Què es considera informació pública segons la definició legal?",
    "answers": [
      { "text": "La informació en qualsevol format elaborada o obtinguda pels subjectes obligats en l'exercici de la seva funció pública.", "correct": true },
      { "text": "Únicament els expedients que hagin estat finalitzats i arxivats.", "correct": false },
      { "text": "La correspondència personal i els xats privats entre el personal de la UB.", "correct": false },
      { "text": "Només la informació que hagi estat publicada al Diari Oficial.", "correct": false }
    ]
  },
  {
    "n": 17,
    "question": "Davant quin òrgan s'ha de presentar la sol·licitud d'accés?",
    "answers": [
      { "text": "Davant l'òrgan que posseeix la informació o el servei de transparència de la pròpia UB.", "correct": true },
      { "text": "Exclusivament davant la unitat de Registre Central de la Generalitat.", "correct": false },
      { "text": "Davant la seu del Parlament de Catalunya per ser la font de la llei.", "correct": false },
      { "text": "Davant la unitat de Mossos d'Esquadra assignada a la vigilància pública.", "correct": false }
    ]
  },
  {
    "n": 18,
    "question": "La UB ha de publicar informació sobre les subvencions concedides?",
    "answers": [
      { "text": "Sí, incloent l'import, l'objecte, els beneficiaris i el control de la seva justificació.", "correct": true },
      { "text": "No, per garantir la igualtat i la privacitat dels investigadors beneficiats.", "correct": false },
      { "text": "Només si la subvenció supera els 100.000 euros anuals.", "correct": false },
      { "text": "Només si el beneficiari és una entitat amb ànim de lucre.", "correct": false }
    ]
  },
  {
    "n": 19,
    "question": "A partir de quina edat es pot exercir el dret d'accés a la informació a Catalunya?",
    "answers": [
      { "text": "A partir dels 16 anys.", "correct": true },
      { "text": "Només a partir de la majoria d'edat (18 anys).", "correct": false },
      { "text": "A partir dels 14 anys amb autorització del tutor legal.", "correct": false },
      { "text": "No hi ha límit d'edat, fins i tot els infants el poden exercir.", "correct": false }
    ]
  },
  {
    "n": 20,
    "question": "En relació amb la transparència en la contractació, la UB ha de publicar:",
    "answers": [
      { "text": "Tots els contractes, inclosos els menors, amb dades de l'adjudicatari i l'import.", "correct": true },
      { "text": "Només els contractes que es fan per procediment obert.", "correct": false },
      { "text": "Les factures individuals de cada compra inferior a 100 €.", "correct": false },
      { "text": "Únicament el llistat d'empreses que han participat en licitacions.", "correct": false }
    ]
  },
  {
    "n": 21,
    "question": "Com s'han d'interpretar els límits al dret d'accés segons la normativa?",
    "answers": [
      { "text": "De manera restrictiva i proporcional, prioritzant sempre el dret d'accés sobre la denegació.", "correct": true },
      { "text": "De manera extensiva per protegir els interessos de la Universitat.", "correct": false },
      { "text": "De forma automàtica sempre que hi hagi una dada personal implicada.", "correct": false },
      { "text": "No existeixen criteris d'interpretació, depèn de la discrecionalitat de l'òrgan.", "correct": false }
    ]
  },
  {
    "n": 22,
    "question": "L'incompliment de les obligacions de transparència es considera:",
    "answers": [
      { "text": "Una infracció que pot comportar responsabilitats disciplinàries per als empleats públics responsables.", "correct": true },
      { "text": "Una falta administrativa que només afecta la reputació institucional.", "correct": false },
      { "text": "Un delicte previst al Codi Penal de manera automàtica.", "correct": false },
      { "text": "Causa d'anul·lació del pressupost de la Universitat.", "correct": false }
    ]
  },
  {
    "n": 23,
    "question": "Quina és la finalitat principal de les dades obertes (Open Data)?",
    "answers": [
      { "text": "Permetre que la informació sigui reutilitzable per tercers per crear valor social o econòmic.", "correct": true },
      { "text": "Reduir el nombre de sol·licituds d'accés que rep la Universitat.", "correct": false },
      { "text": "Publicar fotos i vídeos d'actes acadèmics sense restriccions.", "correct": false },
      { "text": "Assegurar que tota la web de la UB estigui traduïda a 5 idiomes.", "correct": false }
    ]
  },
  {
    "n": 24,
    "question": "Quina informació normativa ha de publicar la UB en el seu portal de transparència?",
    "answers": [
      { "text": "Els reglaments, instruccions, circulars i les respostes a consultes jurídiques freqüents.", "correct": true },
      { "text": "Només la Llei d'Universitats aprovada pel Parlament.", "correct": false },
      { "text": "Els esborranys de les actes de les reunions del departament.", "correct": false },
      { "text": "Exclusivament la normativa que ja hagi estat publicada al DOGC.", "correct": false }
    ]
  },
  {
    "n": 25,
    "question": "Es pot denegar l'accés si la informació està en fase d'elaboració?",
    "answers": [
      { "text": "Sí, és una causa d'inadmissió si la informació és un esborrany o està en procés de producció.", "correct": true },
      { "text": "No, s'ha de lliurar l'esborrany indicant que no és definitiu.", "correct": false },
      { "text": "Només si l'elaboració triga més de dos anys.", "correct": false },
      { "text": "Sí, però s'ha de cobrar el temps de treball que falta per acabar-la.", "correct": false }
    ]
  },
  {
    "n": 26,
    "question": "Respecte a la vida sexual o la religió de les persones, la Llei de Transparència:",
    "answers": [
      { "text": "Denega l'accés tret que es disposi del consentiment exprés i per escrit de l'afectat.", "correct": true },
      { "text": "Permet l'accés si hi ha un interès periodístic rellevant.", "correct": false },
      { "text": "Realitza una ponderació per veure si la dada és rellevant per a la feina.", "correct": false },
      { "text": "Publica la dada anonimitzant només el cognom de la persona.", "correct": false }
    ]
  },
  {
    "n": 27,
    "question": "Les resolucions de la GAIP (Comissió de Garantia):",
    "answers": [
      { "text": "Són d'obligat compliment per a l'òrgan o entitat a la qual es dirigeixen.", "correct": true },
      { "text": "Tenen caràcter merament orientatiu i no vinculant.", "correct": false },
      { "text": "Només s'han de complir si la Universitat hi està d'acord.", "correct": false },
      { "text": "Són simples recomanacions que s'envien al Parlament.", "correct": false }
    ]
  },
  {
    "n": 28,
    "question": "La informació institucional que la UB ha de publicar inclou:",
    "answers": [
      { "text": "L'estructura organitzativa, les funcions dels òrgans i les dades de contacte oficials.", "correct": true },
      { "text": "El llistat complet de tots els números de mòbil privats del professorat.", "correct": false },
      { "text": "Els plans de vacances personals dels oficials d'administració.", "correct": false },
      { "text": "La ideologia política declarada dels membres del Consell Social.", "correct": false }
    ]
  },
  {
    "n": 29,
    "question": "Quin format ha de tenir preferentment la informació lliurada per dret d'accés?",
    "answers": [
      { "text": "El format triat pel sol·licitant, sempre que no sigui desproporcionat per a l'Administració.", "correct": true },
      { "text": "Sempre el format .PDF per evitar modificacions posteriors.", "correct": false },
      { "text": "Obligatòriament el format original en què es va crear la informació.", "correct": false },
      { "text": "Només es dóna en format paper si la informació té dades sensibles.", "correct": false }
    ]
  },
  {
    "n": 30,
    "question": "La transparència econòmica obliga la UB a publicar:",
    "answers": [
      { "text": "El pressupost, el nivell d'execució trimestral, els comptes anuals i l'inventari de bens.", "correct": true },
      { "text": "Totes les factures superiors a 5 € de la cafeteria de la facultat.", "correct": false },
      { "text": "Les dades bancàries personals de tots els proveïdors habituals.", "correct": false },
      { "text": "Únicament la xifra total de despesa anual sense detallar conceptes.", "correct": false }
    ]
  },
  /* --- 5 EXTRAS --- */
  {
    "n": 31,
    "question": "Què és el Registre de Grups d'Interès (Lobbies) segons la Llei 19/2014?",
    "answers": [
      { "text": "Un registre públic on s'han d'inscriure les persones i entitats que fan activitats per influir en les polítiques públiques.", "correct": true },
      { "text": "Una llista de correu per enviar propaganda electoral de la Universitat.", "correct": false },
      { "text": "Un inventari de totes les empreses que volen contractar amb la UB.", "correct": false },
      { "text": "El llistat de sindicats que representen el personal d'administració.", "correct": false }
    ]
  },
  {
    "n": 32,
    "question": "En cas que una sol·licitud d'accés sigui molt imprecisa, l'òrgan té l'obligació de:",
    "answers": [
      { "text": "Demanar al sol·licitant que l'esmeni o la concreti en un termini de 10 dies, donant-li suport.", "correct": true },
      { "text": "Arxivar la petició directament per manca de claredat.", "correct": false },
      { "text": "Interpretar la petició de la manera que sigui més fàcil per a l'Administració.", "correct": false },
      { "text": "Cobrar un recàrrec pel temps perdut intentant entendre la petició.", "correct": false }
    ]
  },
  {
    "n": 33,
    "question": "Què estableix la llei respecte a l'accés a la informació que pugui perjudicar la prevenció de delictes?",
    "answers": [
      { "text": "Es pot denegar o limitar l'accés si posa en perill la seguretat pública o la investigació de delictes.", "correct": true },
      { "text": "S'ha de donar sempre, ja que la transparència està per sobre de la seguretat.", "correct": false },
      { "text": "Només es pot denegar si el jutge ho ordena expressament.", "correct": false },
      { "text": "Es dona la informació però s'obliga al sol·licitant a signar un acord de confidencialitat.", "correct": false }
    ]
  },
  {
    "n": 4,
    "question": "L'accés a la informació pública mitjançant l'examen directe 'in situ' és:",
    "answers": [
      { "text": "Sempre gratuït, incloent-hi l'assistència de personal si és necessari.", "correct": true },
      { "text": "De pagament, ja que consumeix temps d'un funcionari per vigilar.", "correct": false },
      { "text": "Prohibit per motius de seguretat de les instal·lacions.", "correct": false },
      { "text": "Només permès si el ciutadà porta el seu propi equip de seguretat.", "correct": false }
    ]
  },
  {
    "n": 35,
    "question": "Abans de denegar una sol·licitud que afecta drets de tercers, l'Administració ha de:",
    "answers": [
      { "text": "Donar trasllat als tercers afectats perquè puguin presentar al·legacions en un termini de 10 dies.", "correct": true },
      { "text": "Denegar-la sense avisar ningú per protegir el secret estadístic.", "correct": false },
      { "text": "Demanar l'opinió al Rector de manera no vinculant.", "correct": false },
      { "text": "Publicar el nom del sol·licitant al Portal de Transparència.", "correct": false }
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