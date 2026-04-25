const TEST_ID = "t7"; 
const questions = [
 
  {
    "n": 1,
    "question": "Segons l'article 14 de la Llei 39/2015, quin d'aquests col·lectius està OBLIGAT a relacionar-se electrònicament amb l'Administració?",
    "answers": [
      { "text": "Les persones jurídiques, entitats sense personalitat jurídica i qui exerceixi una activitat professional que requereixi col·legiació obligatòria.", "correct": true },
      { "text": "Totes les persones físiques pel sol fet de residir en un municipi amb Seu Electrònica.", "correct": false },
      { "text": "Únicament les empreses amb una facturació superior als 600.000 euros anuals.", "correct": false },
      { "text": "Els ciutadans que hagin accedit voluntàriament una vegada a la Seu Electrònica.", "correct": false }
    ]
  },
  {
    "n": 2,
    "question": "Estan obligats a la relació electrònica els estudiants de la Universitat de Barcelona?",
    "answers": [
      { "text": "Sí, per a la majoria de tràmits acadèmics, d'acord amb el Reglament de la UB i la Llei 39/2015 per la seva condició de col·lectiu amb capacitat tècnica acreditada.", "correct": true },
      { "text": "No, la llei reserva aquest dret al paper exclusivament per a qualsevol persona física sense excepció.", "correct": false },
      { "text": "Només aquells que cursen estudis de postgrau o màster oficial.", "correct": false },
      { "text": "Només si han sol·licitat prèviament l'alta en el sistema de notificacions electròniques de la Generalitat.", "correct": false }
    ]
  },
  {
    "n": 3,
    "question": "La 'Seu Electrònica' es diferencia d'un portal d'internet comú perquè:",
    "answers": [
      { "text": "És un punt d'accés sota la responsabilitat, titularitat i gestió d'una Administració, que garanteix la integritat i veracitat de la informació.", "correct": true },
      { "text": "S'hi pot accedir sense necessitat de certificat digital en tots els casos.", "correct": false },
      { "text": "Permet la compravenda de serveis públics mitjançant passarel·les de pagament privades.", "correct": false },
      { "text": "No té validesa jurídica per a la presentació de recursos administratius.", "correct": false }
    ]
  },
  {
    "n": 4,
    "question": "Respecte al Registre Electrònic General, quina de les següents afirmacions és correcta?",
    "answers": [
      { "text": "S'ha de permetre la presentació de documents tots els dies de l'any durant les 24 hores.", "correct": true },
      { "text": "El registre només admet documents en format .PDF signats per un notari.", "correct": false },
      { "text": "Si el registre es col·lapsa, l'Administració pot tancar-lo els caps de setmana per manteniment.", "correct": false },
      { "text": "La presentació d'un document en el registre electrònic és opcional per a les persones jurídiques.", "correct": false }
    ]
  },
  {
    "n": 5,
    "question": "Si un subjecte obligat a la relació electrònica presenta una sol·licitud presencialment, l'Administració:",
    "answers": [
      { "text": "Li requerirà l'esmena a través de la presentació electrònica, essent la data d'aquesta darrera la que es considerarà com a data de presentació.", "correct": true },
      { "text": "Ha d'admetre el paper i digitalitzar-lo ella mateixa sense demanar res a l'interessat.", "correct": false },
      { "text": "Declararà la inadmissió del tràmit sense possibilitat d'esmenar el defecte.", "correct": false },
      { "text": "Considerarà com a data de presentació la del lliurament del paper per evitar la caducitat.", "correct": false }
    ]
  },
  {
    "n": 6,
    "question": "Sobre l'esmena de la presentació presencial d'un obligat electrònic, quina és la conseqüència respecte als terminis?",
    "answers": [
      { "text": "La data de presentació de la sol·licitud serà la data en què s'hagi produït l'esmena (la tramesa electrònica).", "correct": true },
      { "text": "L'Administració mantindrà la data del registre presencial per silenci positiu.", "correct": false },
      { "text": "Es perd el dret a la bonificació de taxes si el termini acabava el dia del lliurament en paper.", "correct": false },
      { "text": "No té cap conseqüència si l'esmena es fa en menys de 48 hores.", "correct": false }
    ]
  },
  {
    "n": 7,
    "question": "Pel que fa al còmput de terminis en la Seu Electrònica:",
    "answers": [
      { "text": "Es regeix per la data i l'hora oficial de la Seu, que ha de comptar amb mesures de seguretat per garantir-ne la sincronització.", "correct": true },
      { "text": "L'interessat pot al·legar l'hora del seu propi dispositiu si hi ha un desfasament de menys de 5 minuts.", "correct": false },
      { "text": "Els dissabtes es consideren dies hàbils a efectes de còmput electrònic segons la Llei 39/2015.", "correct": false },
      { "text": "El registre mai no pot estar tancat, ni tan sols per interrupcions programades.", "correct": false }
    ]
  },
  {
    "n": 8,
    "question": "Les notificacions electròniques s'entendran practicades en el moment en què:",
    "answers": [
      { "text": "Es produeixi l'accés al seu contingut en la seu electrònica o adreça habilitada.", "correct": true },
      { "text": "L'Administració dipositi el document a la bústia virtual de l'interessat.", "correct": false },
      { "text": "L'interessat rebi l'avís de cortesia en el seu correu electrònic personal.", "correct": false },
      { "text": "Hagin passat 24 hores des de la signatura del document per l'autoritat competent.", "correct": false }
    ]
  },
  {
    "n": 9,
    "question": "Quan s'entén que una notificació electrònica ha estat rebutjada (notificació infructuosa)?",
    "answers": [
      { "text": "Quan hagin transcorregut 10 dies naturals des de la posada a disposició sense que s'hi accedeixi al contingut.", "correct": true },
      { "text": "Quan l'interessat enviï un correu dient que no accepta la notificació.", "correct": false },
      { "text": "Si el servidor de correu de l'interessat retorna un error de 'bústia plena'.", "correct": false },
      { "text": "Quan hagin passat 10 dies hàbils sense obrir el document.", "correct": false }
    ]
  },
  {
    "n": 10,
    "question": "L'avís de notificació enviat al dispositiu mòbil o correu electrònic de l'interessat:",
    "answers": [
      { "text": "És un mecanisme de cortesia; la seva manca no invalida la notificació practicada.", "correct": true },
      { "text": "És un requisit de validesa essencial: sense avís, la notificació és nul·la.", "correct": false },
      { "text": "Marca l'inici del còmput per a la presentació de recursos.", "correct": false },
      { "text": "Substitueix la notificació oficial si l'interessat respon al correu.", "correct": false }
    ]
  },
  {
    "n": 11,
    "question": "El Punt d'Accés General (PAG) electrònic té la funció de:",
    "answers": [
      { "text": "Facilitar l'accés als serveis i procediments de les diferents Administracions des d'un portal únic.", "correct": true },
      { "text": "Substituir totes les seus electròniques de les universitats catalanes.", "correct": false },
      { "text": "Actuar com a tribunal de recursos en matèria de digitalització.", "correct": false },
      { "text": "Ser l'únic lloc on es poden pagar les taxes universitàries.", "correct": false }
    ]
  },
  {
    "n": 12,
    "question": "Si una notificació es realitza per duplicat (en paper i electrònicament):",
    "answers": [
      { "text": "Els terminis es computaran a partir de la data en què es produeixi la primera de les notificacions.", "correct": true },
      { "text": "L'interessat pot triar quina de les dues dates l'afavoreix més.", "correct": false },
      { "text": "Prevaldrà sempre la notificació en paper per sobre de l'electrònica.", "correct": false },
      { "text": "La notificació electrònica anul·la automàticament qualsevol efecte de la de paper.", "correct": false }
    ]
  },
  {
    "n": 13,
    "question": "Els documents presentats en paper que s'hagin de digitalitzar al registre:",
    "answers": [
      { "text": "S'han de retornar a l'interessat un cop digitalitzats, llevat que la llei obligui a la seva custòdia.", "correct": true },
      { "text": "Han de ser destruïts immediatament per seguretat de dades.", "correct": false },
      { "text": "S'han d'enviar a l'arxiu històric de la universitat un cop escanejats.", "correct": false },
      { "text": "Només es digitalitzaran si ocupen menys de 10 pàgines.", "correct": false }
    ]
  },
  {
    "n": 14,
    "question": "Una 'còpia autèntica' electrònica d'un document original en paper:",
    "answers": [
      { "text": "Té la mateixa validesa que l'original i s'obté mitjançant la digitalització amb signatura electrònica de l'Administració.", "correct": true },
      { "text": "És una fotocòpia en blanc i negre enviada per escàner domèstic.", "correct": false },
      { "text": "Només és vàlida si el funcionari hi posa un segell de 'conforme'.", "correct": false },
      { "text": "No pot ser mai considerada document públic.", "correct": false }
    ]
  },
  {
    "n": 15,
    "question": "Quins sistemes d'identificació són vàlids per als interessats segons la Llei 39/2015?",
    "answers": [
      { "text": "Sistemes de signatura electrònica, segells electrònics i sistemes de clau concertada (com Cl@ve).", "correct": true },
      { "text": "Únicament el certificat digital emès per la Fábrica Nacional de Moneda y Timbre.", "correct": false },
      { "text": "La introducció del número de DNI i la data de naixement sense més seguretat.", "correct": false },
      { "text": "L'ús d'una signatura manuscrita escanejada i adjuntada en un .JPG.", "correct": false }
    ]
  },
  {
    "n": 16,
    "question": "L'expedient administratiu electrònic s'ha d'enviar complet, la qual cosa inclou:",
    "answers": [
      { "text": "Un índex numerat i autenticat electrònicament per garantir-ne la integritat i l'ordre.", "correct": true },
      { "text": "Totes les notes internes i esborranys que han dut a la resolució.", "correct": false },
      { "text": "Les dades bancàries personals de tots els funcionaris intervinents.", "correct": false },
      { "text": "Només la resolució final i el justificant de recepció.", "correct": false }
    ]
  },
  {
    "n": 17,
    "question": "La informació amb caràcter auxiliar o de suport (esborranys, opinions internes):",
    "answers": [
      { "text": "No forma part de l'expedient administratiu electrònic.", "correct": true },
      { "text": "És part essencial de l'expedient i s'ha de notificar a l'interessat.", "correct": false },
      { "text": "S'ha de publicar al portal de transparència de la UB.", "correct": false },
      { "text": "Només es conserva si l'expedient és sancionador.", "correct": false }
    ]
  },
  {
    "n": 18,
    "question": "L'arxiu electrònic únic de cada Administració ha de garantir:",
    "answers": [
      { "text": "L'autenticitat, integritat, conservació i consulta del document a llarg termini.", "correct": true },
      { "text": "Que els documents ocupin el mínim espai possible tot i perdre resolució.", "correct": false },
      { "text": "Que només el Rector pugui accedir als documents passats 5 anys.", "correct": false },
      { "text": "L'eliminació automàtica dels documents que no hagin estat consultats en un any.", "correct": false }
    ]
  },
  {
    "n": 19,
    "question": "Respecte al calendari de dies inhàbils a la Seu Electrònica de la UB:",
    "answers": [
      { "text": "S'ha de publicar de manera visible i actualitzada per a coneixement dels usuaris.", "correct": true },
      { "text": "No és necessari si ja s'ha publicat al DOGC.", "correct": false },
      { "text": "Només inclou els dies festius de la ciutat de Barcelona.", "correct": false },
      { "text": "És el mateix per a totes les universitats de l'Estat sense variacions.", "correct": false }
    ]
  },
  {
    "n": 20,
    "question": "En cas de fallada tècnica de la Seu Electrònica (interrupció no planificada):",
    "answers": [
      { "text": "L'Administració pot ampliar els terminis i ha de publicar la incidència en la pròpia Seu.", "correct": true },
      { "text": "L'interessat ha d'anar immediatament a un registre presencial d'una altra administració.", "correct": false },
      { "text": "Es considera que el termini ha expirat si l'error dura menys de 2 hores.", "correct": false },
      { "text": "L'Administració ha de declarar nul el procediment sencer.", "correct": false }
    ]
  },
  {
    "n": 21,
    "question": "El Codi Segur de Verificació (CSV) és un sistema que permet:",
    "answers": [
      { "text": "Comprovar l'autenticitat d'un document imprès mitjançant l'accés a l'original electrònic en la Seu.", "correct": true },
      { "text": "Accedir a la xarxa Wi-Fi de la Universitat de Barcelona.", "correct": false },
      { "text": "Signar documents sense necessitat de certificat digital personal.", "correct": false },
      { "text": "Xifrar les dades dels expedients perquè no siguin llegides pels jutges.", "correct": false }
    ]
  },
  {
    "n": 22,
    "question": "Què és la 'Interoperabilitat' en l'administració electrònica?",
    "answers": [
      { "text": "La capacitat dels sistemes de les diferents administracions per intercanviar dades i compartir informació.", "correct": true },
      { "text": "L'obligació del funcionari de treballar amb diversos ordinadors alhora.", "correct": false },
      { "text": "La facultat del ciutadà d'utilitzar qualsevol navegador d'internet.", "correct": false },
      { "text": "La instal·lació de fibra òptica en tots els edificis de la UB.", "correct": false }
    ]
  },
  {
    "n": 23,
    "question": "Un ciutadà NO obligat a la relació electrònica pot canviar de canal (de paper a electrònic o viceversa)?",
    "answers": [
      { "text": "Sí, en qualsevol moment del procediment pot sol·licitar el canvi de canal de comunicació.", "correct": true },
      { "text": "No, un cop iniciat un procediment en paper, s'ha d'acabar en paper.", "correct": false },
      { "text": "Sí, però només un cop cada 6 mesos.", "correct": false },
      { "text": "Només si l'Administració l'autoritza mitjançant acord motivat.", "correct": false }
    ]
  },
  {
    "n": 24,
    "question": "Si el registre electrònic rep un document a les 23:59 d'un dia inhàbil (ex. un diumenge):",
    "answers": [
      { "text": "Es considera presentat en aquesta data i hora, però per al còmput de terminis compta com el primer dia hàbil següent.", "correct": true },
      { "text": "La sol·licitud és rebutjada per haver estat enviada en dia festiu.", "correct": false },
      { "text": "Es considera presentada el dilluns a les 09:00 de forma retroactiva.", "correct": false },
      { "text": "L'Administració ha de penalitzar l'interessat per ús indegut del servei.", "correct": false }
    ]
  },
  {
    "n": 25,
    "question": "Les administracions poden obligar a les persones físiques a relacionar-se electrònicament?",
    "answers": [
      { "text": "Sí, reglamentàriament, per a certs procediments si es garanteix que tenen accés i disponibilitat dels mitjans necessaris.", "correct": true },
      { "text": "No, les persones físiques tenen el dret inalienable a l'ús del paper.", "correct": false },
      { "text": "Només en cas d'estat d'alarma o emergència sanitària.", "correct": false },
      { "text": "Únicament si són majors d'edat i tenen títol universitari.", "correct": false }
    ]
  },
  {
    "n": 26,
    "question": "L'anomenada 'Carpeta Ciutadana' permet principalment:",
    "answers": [
      { "text": "Consultar l'estat dels expedients, veure les notificacions i accedir a les dades que té l'Administració.", "correct": true },
      { "text": "Presentar queixes anònimes contra el personal de la universitat.", "correct": false },
      { "text": "Modificar el domicili fiscal d'altres ciutadans per error de sistema.", "correct": false },
      { "text": "Accedir als continguts de les classes gravades de la facultat.", "correct": false }
    ]
  },
  {
    "n": 27,
    "question": "Què és la signatura electrònica 'no criptogràfica' o basada en claus concertades?",
    "answers": [
      { "text": "Sistemes com l'idCAT Mòbil o Cl@ve PIN, que identifiquen l'usuari sense necessitat d'instal·lar certificats.", "correct": true },
      { "text": "Una signatura feta amb un bolígraf digital sobre la pantalla.", "correct": false },
      { "text": "Un sistema de seguretat que no utilitza internet per funcionar.", "correct": false },
      { "text": "L'ús de la petjada dactilar enviada per fotografia.", "correct": false }
    ]
  },
  {
    "n": 28,
    "question": "Tota Seu Electrònica ha de disposar d'un sistema de:",
    "answers": [
      { "text": "Verificació dels certificats de la Seu i dels codis segurs de verificació (CSV).", "correct": true },
      { "text": "Traducció automàtica a totes les llengües de la Unió Europea.", "correct": false },
      { "text": "Xat en viu amb el Rector de la Universitat.", "correct": false },
      { "text": "Publicitat comercial per finançar el manteniment tècnic.", "correct": false }
    ]
  },
  {
    "n": 29,
    "question": "En l'enviament d'un expedient electrònic al Jutjat, si algun document no es pot digitalitzar (ex. un plànol gegant):",
    "answers": [
      { "text": "S'ha d'enviar el suport original de manera física fent constar aquesta circumstància en l'índex.", "correct": true },
      { "text": "S'ha de demanar a l'interessat que el torni a fer en format petit.", "correct": false },
      { "text": "S'ha de prescindir d'aquest document en l'enviament judicial.", "correct": false },
      { "text": "S'ha de fotografiar per parts i enviar 50 fitxers separats.", "correct": false }
    ]
  },
  {
    "n": 30,
    "question": "L'accés a la Seu Electrònica de la UB s'ha de garantir d'acord amb els principis de:",
    "answers": [
      { "text": "Accessibilitat, usabilitat i neutralitat tecnològica.", "correct": true },
      { "text": "Exclusivitat, opacitat i seguretat nacional.", "correct": false },
      { "text": "Cost zero per a l'Administració i cost elevat per a l'usuari.", "correct": false },
      { "text": "Lliure elecció de la veritat administrativa.", "correct": false }
    ]
  },
  // --- PREGUNTES CLAU AFEGIDES (PERFECCIONAMENT TEMA 7) ---
  {
    "n": 31,
    "question": "D'acord amb el RD 203/2021, què és el 'Registre Electrònic d'Apoderaments'?",
    "answers": [
      { "text": "Un registre on consten les representacions que els ciutadans atorguen a tercers per actuar davant l'Administració.", "correct": true },
      { "text": "La llista de tots els advocats que treballen per a la Universitat.", "correct": false },
      { "text": "Un arxiu on es guarden les signatures dels alts càrrecs.", "correct": false },
      { "text": "El lloc on es registren les hipoteques dels edificis universitaris.", "correct": false }
    ]
  },
  {
    "n": 32,
    "question": "Què succeeix si un ciutadà accedeix a una notificació electrònica però no la descarrega?",
    "answers": [
      { "text": "La notificació es considera practicada des del moment de l'accés, independentment de la descàrrega.", "correct": true },
      { "text": "No es considera practicada fins que no es prem el botó de 'descàrregar'.", "correct": false },
      { "text": "El sistema ha d'enviar un segon avís indicant que el fitxer segueix allà.", "correct": false },
      { "text": "Es considera notificació defectuosa i s'ha d'enviar per correu postal.", "correct": false }
    ]
  },
  {
    "n": 33,
    "question": "El principi de 'Neutralitat Tecnològica' implica que:",
    "answers": [
      { "text": "L'Administració no pot obligar l'ús d'un navegador o programari comercial específic.", "correct": true },
      { "text": "Tots els ordinadors de l'Administració han de ser de la mateixa marca.", "correct": false },
      { "text": "L'Administració no pot fer servir internet per a tràmits oficials.", "correct": false },
      { "text": "Els ciutadans han de pagar el mateix per qualsevol tràmit digital.", "correct": false }
    ]
  },
  {
    "n": 34,
    "question": "Quin és el termini màxim que un document pot estar al 'Registre de Sortida' abans de ser notificat?",
    "answers": [
      { "text": "La llei estableix que s'ha de cursar la notificació en el termini de 10 dies des de que s'ha dictat l'acte.", "correct": true },
      { "text": "S'ha de notificar en el mateix segon en què es signa l'acte.", "correct": false },
      { "text": "L'Administració té fins a 6 mesos per enviar la notificació oficial.", "correct": false },
      { "text": "No hi ha termini mentre el procediment no hagi caducat.", "correct": false }
    ]
  },
  {
    "n": 35,
    "question": "A la Universitat de Barcelona, qui pot accedir a la consulta dels expedients electrònics?",
    "answers": [
      { "text": "Els interessats en el procediment o els seus representants degudament acreditats.", "correct": true },
      { "text": "Qualsevol persona que tingui un certificat digital vàlid.", "correct": false },
      { "text": "Únicament el personal funcionari amb rang de Cap de Servei.", "correct": false },
      { "text": "Qualsevol alumne de la mateixa facultat per principi de transparència.", "correct": false }
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