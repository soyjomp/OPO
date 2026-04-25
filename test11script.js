const TEST_ID = "t11"; 
const questions = [
 
  {
    "n": 1,
    "question": "Quin és l'objectiu principal del Reglament (UE) 2016/679 (RGPD)?",
    "answers": [
      { "text": "Protegir els drets i llibertats fonamentals de les persones físiques i, en particular, el seu dret a la protecció de dades personals.", "correct": true },
      { "text": "Harmonitzar la lliure circulació de mercaderies digitals i dispositius electrònics a la UE.", "correct": false },
      { "text": "Garantir el dret a la intimitat de les persones jurídiques i entitats sense ànim de lucre.", "correct": false },
      { "text": "Regular el règim disciplinari dels empleats públics en l'ús de xarxes socials corporatives.", "correct": false }
    ]
  },
  {
    "n": 2,
    "question": "L'àmbit d'aplicació del RGPD s'estén al tractament de dades personals de:",
    "answers": [
      { "text": "Persones físiques vives, independentment de la seva nacionalitat o lloc de residència.", "correct": true },
      { "text": "Societats mercantils i entitats amb personalitat jurídica pròpia.", "correct": false },
      { "text": "Persones difuntes, excepte en l'exercici de drets per part dels seus hereus segons la LOPDGDD.", "correct": false },
      { "text": "Objectes inanimats i actius digitals sense vinculació a una persona identificada.", "correct": false }
    ]
  },
  {
    "n": 3,
    "question": "El principi de 'licitud, lleialtat i transparència' exigeix que les dades siguin:",
    "answers": [
      { "text": "Tractades de manera lícita d'acord amb una base jurídica i comunicades a l'interessat de forma intel·ligible.", "correct": true },
      { "text": "Publicades al Portal de Transparència sense cap tipus de restricció.", "correct": false },
      { "text": "Emmagatzemades en servidors situats exclusivament dins del territori nacional.", "correct": false },
      { "text": "Xifrades mitjançant algorismes d'alta seguretat abans de qualsevol ús.", "correct": false }
    ]
  },
  {
    "n": 4,
    "question": "Segons el principi de 'minimització de dades', aquestes han de ser:",
    "answers": [
      { "text": "Adequades, pertinents i limitades al que és necessari en relació amb les finalitats per a les quals són tractades.", "correct": true },
      { "text": "Reduïdes al mínim nombre de caràcters possibles per estalviar espai d'emmagatzematge.", "correct": false },
      { "text": "Conservades durant un termini màxim de dos anys des de la finalització del tràmit.", "correct": false },
      { "text": "Anonimitzades de manera irreversible en el moment de la seva recollida.", "correct": false }
    ]
  },
  {
    "n": 5,
    "question": "A la Universitat de Barcelona, qui ostenta la condició de 'Responsable del tractament'?",
    "answers": [
      { "text": "La Universitat de Barcelona com a institució.", "correct": true },
      { "text": "El Rector de la Universitat a títol personal.", "correct": false },
      { "text": "El Cap d'Àrea que gestiona la base de dades específica.", "correct": false },
      { "text": "L'Agència Catalana de Protecció de Dades com a òrgan supervisor.", "correct": false }
    ]
  },
  {
    "n": 6,
    "question": "Quins requisits ha de complir el consentiment per ser considerat vàlid sota el RGPD?",
    "answers": [
      { "text": "Ha de ser una manifestació de voluntat lliure, específica, informada i inequívoca (mitjançant una clara acció afirmativa).", "correct": true },
      { "text": "Pot ser tàcit sempre que l'interessat no hagi marcat la casella d'oposició.", "correct": false },
      { "text": "Ha de ser prestat davant de notari en cas de tractament de dades acadèmiques.", "correct": false },
      { "text": "És vàlid per a qualsevol finalitat relacionada, encara que no s'hagi especificat originalment.", "correct": false }
    ]
  },
  {
    "n": 7,
    "question": "A Espanya, quina és l'edat mínima per prestar el consentiment de forma autònoma en serveis de la societat de la informació?",
    "answers": [
      { "text": "14 anys (segons estableix la LOPDGDD).", "correct": true },
      { "text": "16 anys (mínim genèric previst pel RGPD).", "correct": false },
      { "text": "18 anys (majoria d'edat civil).", "correct": false },
      { "text": "12 anys.", "correct": false }
    ]
  },
  {
    "n": 8,
    "question": "El dret de l'interessat a obtenir una còpia de les dades personals que són objecte de tractament s'anomena:",
    "answers": [
      { "text": "Dret d'accés.", "correct": true },
      { "text": "Dret de portabilitat.", "correct": false },
      { "text": "Dret de rectificació.", "correct": false },
      { "text": "Dret d'informació.", "correct": false }
    ]
  },
  {
    "n": 9,
    "question": "El dret que permet sol·licitar l'eliminació de dades quan ja no són necessàries o s'ha retirat el consentiment és:",
    "answers": [
      { "text": "Dret de supressió (dret a l'oblit).", "correct": true },
      { "text": "Dret d'oposició.", "correct": false },
      { "text": "Dret de limitació del tractament.", "correct": false },
      { "text": "Dret de bloqueig definitiu.", "correct": false }
    ]
  },
  {
    "n": 10,
    "question": "Quina figura assessora i supervisa de manera independent el compliment del RGPD dins de la Universitat?",
    "answers": [
      { "text": "El Delegat de Protecció de Dades (DPD).", "correct": true },
      { "text": "El Gerent de la Universitat.", "correct": false },
      { "text": "El Síndic de Greuges de la UB.", "correct": false },
      { "text": "El responsable de Seguretat de la Informació de l'ENS.", "correct": false }
    ]
  },
  {
    "n": 11,
    "question": "Davant d'una violació de seguretat que suposi un risc per als drets de les persones, el responsable ha de:",
    "answers": [
      { "text": "Notificar-ho a l'APDCAT en un termini màxim de 72 hores des de que se'n tingui constància.", "correct": true },
      { "text": "Publicar un anunci al tauler d'edictes electrònic en 24 hores.", "correct": false },
      { "text": "Comunicar-ho al Rectorat en el termini de 10 dies hàbils.", "correct": false },
      { "text": "Denunciar els fets davant el Ministeri Fiscal de forma immediata.", "correct": false }
    ]
  },
  {
    "n": 12,
    "question": "La base jurídica principal per al tractament de dades en l'àmbit universitari públic sol ser:",
    "answers": [
      { "text": "El compliment d'una missió realitzada en interès públic o l'exercici de poders públics.", "correct": true },
      { "text": "L'interès legítim del responsable del tractament.", "correct": false },
      { "text": "El consentiment lliure del professorat i personal d'administració.", "correct": false },
      { "text": "La protecció d'interessos vitals de l'estudiant.", "correct": false }
    ]
  },
  {
    "n": 13,
    "question": "Quines dades formen part de les 'categories especials' (dades sensibles)?",
    "answers": [
      { "text": "Dades biomètriques, dades de salut, orientació sexual i creences religioses o polítiques.", "correct": true },
      { "text": "Dades de contacte, correu electrònic i número de compte bancari.", "correct": false },
      { "text": "Expedient acadèmic, qualificacions i títols obtinguts.", "correct": false },
      { "text": "Dades relatives al vehicle particular del personal de la UB.", "correct": false }
    ]
  },
  {
    "n": 14,
    "question": "El principi de 'responsabilitat proactiva' (accountability) implica:",
    "answers": [
      { "text": "L'obligació del responsable d'aplicar mesures tècniques i organitzatives i poder demostrar el seu compliment.", "correct": true },
      { "text": "Que l'interessat és el responsable de vetllar per l'actualització de les seves dades.", "correct": false },
      { "text": "Que l'Administració només respon si hi ha una reclamació prèvia davant l'APDCAT.", "correct": false },
      { "text": "La responsabilitat penal directa de tots els empleats públics que accedeixen a dades.", "correct": false }
    ]
  },
  {
    "n": 15,
    "question": "El dret a la portabilitat s'exerceix quan el tractament:",
    "answers": [
      { "text": "Es basa en el consentiment o en un contracte i es realitza per mitjans automatitzats.", "correct": true },
      { "text": "Es realitza en compliment d'una missió d'interès públic.", "correct": false },
      { "text": "Afecta exclusivament a documents en suport paper.", "correct": false },
      { "text": "És necessari per complir una obligació legal del responsable.", "correct": false }
    ]
  },
  {
    "n": 16,
    "question": "La seguretat del tractament segons el RGPD implica:",
    "answers": [
      { "text": "Aplicar mesures d'estat de la tècnica per garantir la confidencialitat, integritat, disponibilitat i resiliència dels sistemes.", "correct": true },
      { "text": "L'anonimització obligatòria de tots els fitxers d'estudiants.", "correct": false },
      { "text": "L'emmagatzematge de dades exclusivament en unitats de disc xifrades amb clau de 256 bits.", "correct": false },
      { "text": "La prohibició d'utilitzar el núvol (cloud) per guardar dades personals.", "correct": false }
    ]
  },
  {
    "n": 17,
    "question": "L'Encarregat del tractament és la persona o entitat que:",
    "answers": [
      { "text": "Tracta dades personals per compte del responsable del tractament.", "correct": true },
      { "text": "Té la propietat legal de la base de dades de la Universitat.", "correct": false },
      { "text": "Supervisa de manera externa que la UB compleix la LOPD.", "correct": false },
      { "text": "Gestiona l'accés físic als servidors de dades.", "correct": false }
    ]
  },
  {
    "n": 18,
    "question": "En què consisteix la 'Privacitat des de la dada' (per defecte)?",
    "answers": [
      { "text": "En garantir que, per defecte, només es tractin les dades personals necessàries per a cada finalitat específica.", "correct": true },
      { "text": "En dissenyar una web que no demani cap dada a l'usuari.", "correct": false },
      { "text": "En fer que tota la informació de la UB sigui invisible per a Google.", "correct": false },
      { "text": "En l'obligació de signar un document de privacitat en cada tràmit acadèmic.", "correct": false }
    ]
  },
  {
    "n": 19,
    "question": "L'Avaluació d'Impacte (AIPD) és preceptiva quan el tractament:",
    "answers": [
      { "text": "Suposa un alt risc per als drets i llibertats, especialment en l'ús de noves tecnologies.", "correct": true },
      { "text": "Implica la recollida de dades bàsiques de contacte per a una enquesta interna.", "correct": false },
      { "text": "Afecta a menys de 100 persones dins de la comunitat universitària.", "correct": false },
      { "text": "S'ha de fer un canvi de proveïdor d'ordinadors a l'oficina.", "correct": false }
    ]
  },
  {
    "n": 20,
    "question": "Quin d'aquests NO és un dret ARPOL (drets dels interessats)?",
    "answers": [
      { "text": "Dret de modificació arbitrària.", "correct": true },
      { "text": "Dret de limitació del tractament.", "correct": false },
      { "text": "Dret d'oposició.", "correct": false },
      { "text": "Dret a no ser objecte de decisions individuals automatitzades.", "correct": false }
    ]
  },
  {
    "n": 21,
    "question": "El tractament de dades sobre condemnes o infraccions penals requereix:",
    "answers": [
      { "text": "Estar autoritzat per una norma amb rang de llei o realitzar-se sota supervisió de l'autoritat pública.", "correct": true },
      { "text": "Únicament el consentiment per escrit de la persona condemnada.", "correct": false },
      { "text": "Que l'expedient estigui obert al públic per transparència.", "correct": false },
      { "text": "Que la Universitat hagi demanat permís previ al Síndic de Greuges.", "correct": false }
    ]
  },
  {
    "n": 22,
    "question": "Les transferències internacionals de dades es poden realitzar si:",
    "answers": [
      { "text": "Hi ha una decisió d'adequació de la Comissió Europea o existeixen garanties suficients.", "correct": true },
      { "text": "El país de destinació és un paradís fiscal reconegut.", "correct": false },
      { "text": "S'utilitzen servidors d'empreses amb seu a la Xina o Rússia sense més garanties.", "correct": false },
      { "text": "L'Administració ho considera necessari per estalviar costos de manteniment.", "correct": false }
    ]
  },
  {
    "n": 23,
    "question": "El Registre d'Activitats de Tractament (RAT) ha de contenir:",
    "answers": [
      { "text": "La identificació del responsable, les finalitats del tractament i la descripció de les categories de dades.", "correct": true },
      { "text": "El nom i cognoms de tots els funcionaris que accedeixen a les dades.", "correct": false },
      { "text": "Les contrasenyes de seguretat de les bases de dades corporatives.", "correct": false },
      { "text": "Un resum de les multes pagades per la Universitat a l'APDCAT.", "correct": false }
    ]
  },
  {
    "n": 24,
    "question": "El dret d'oposició faculta l'interessat per demanar el cessament del tractament:",
    "answers": [
      { "text": "Per motius relacionats amb la seva situació personal o per a finalitats de màrqueting directe.", "correct": true },
      { "text": "Sempre que no estigui d'acord amb una decisió acadèmica.", "correct": false },
      { "text": "Únicament quan el tractament sigui il·legal.", "correct": false },
      { "text": "Per evitar que el seu nom surti a la llista de matriculats d'un curs.", "correct": false }
    ]
  },
  {
    "n": 25,
    "question": "L'òrgan competent per supervisar el compliment de la normativa a les Universitats Públiques de Catalunya és:",
    "answers": [
      { "text": "L'Autoritat Catalana de Protecció de Dades (APDCAT).", "correct": true },
      { "text": "L'Agència Espanyola de Protecció de Dades (AEPD).", "correct": false },
      { "text": "El Comitè Europeu de Protecció de Dades.", "correct": false },
      { "text": "La Inspecció de Serveis de la Generalitat.", "correct": false }
    ]
  },
  {
    "n": 26,
    "question": "El principi de 'limitació del termini de conservació' estableix que les dades han de ser:",
    "answers": [
      { "text": "Mantingudes de forma que permetin la identificació durant no més temps del necessari per a les finalitats.", "correct": true },
      { "text": "Esborrades automàticament cada 31 de desembre.", "correct": false },
      { "text": "Conservades per sempre en el cas de títols acadèmics oficials.", "correct": false },
      { "text": "Eliminades un cop el ciutadà ha rebut la notificació de l'acte.", "correct": false }
    ]
  },
  {
    "n": 27,
    "question": "El tractament de dades amb finalitats d'investigació històrica o estadística:",
    "answers": [
      { "text": "És lícit i permet limitar determinats drets sota salvaguardes adequades (com la pseudonimització).", "correct": true },
      { "text": "Requereix sempre un nou consentiment de l'interessat.", "correct": false },
      { "text": "Està prohibit si les dades són de salut.", "correct": false },
      { "text": "Només es pot fer amb dades que hagin estat prèviament publicades al BOE.", "correct": false }
    ]
  },
  {
    "n": 28,
    "question": "Què garanteix la tècnica de la 'pseudonimització'?",
    "answers": [
      { "text": "Que les dades no es puguin atribuir a un interessat sense utilitzar informació addicional guardada per separat.", "correct": true },
      { "text": "La destrucció total de la vinculació entre la dada i la persona.", "correct": false },
      { "text": "L'accés lliure a la informació per part de qualsevol investigador.", "correct": false },
      { "text": "El xifratge d'extrem a extrem de les comunicacions per correu.", "correct": false }
    ]
  },
  {
    "n": 29,
    "question": "La designació d'un DPD a les administracions públiques (com la UB):",
    "answers": [
      { "text": "És obligatòria en tots els casos.", "correct": true },
      { "text": "És voluntària segons la mida de la plantilla de funcionaris.", "correct": false },
      { "text": "Només es requereix si es tracten dades de condemnes penals.", "correct": false },
      { "text": "Depèn de si la Universitat té o no conveni amb la Generalitat.", "correct": false }
    ]
  },
  {
    "n": 30,
    "question": "El dret de rectificació s'exerceix quan les dades són:",
    "answers": [
      { "text": "Inexactes o incompletes.", "correct": true },
      { "text": "Massa antigues.", "correct": false },
      { "text": "Irrellevants per a l'interessat.", "correct": false },
      { "text": "Dificils de llegir pel sistema informàtic.", "correct": false }
    ]
  },
  /* --- 5 EXTRAS --- */
  {
    "n": 31,
    "question": "Què s'entén pel 'bloqueig de dades' segons la LOPDGDD?",
    "answers": [
      { "text": "L'obligació d'identificar i reservar les dades per impedir-ne el tractament un cop rectificades o suprimides, tret de la seva posada a disposició de jutges o autoritats.", "correct": true },
      { "text": "La suspensió de l'accés a internet d'un funcionari que ha comès una infracció.", "correct": false },
      { "text": "L'encriptació dels servidors de la UB durant un atac informàtic.", "correct": false },
      { "text": "La prohibició de cedir dades a altres universitats durant un procés electoral.", "correct": false }
    ]
  },
  {
    "n": 32,
    "question": "Dins del deure de transparència, la informació a l'interessat s'ha de facilitar preferentment mitjançant:",
    "answers": [
      { "text": "Un sistema de capes (informació bàsica en primer nivell i detallada en un segon).", "correct": true },
      { "text": "Un document únic de més de 50 pàgines per assegurar el màxim detall.", "correct": false },
      { "text": "L'enviament d'un SMS amb un enllaç a la Llei Orgànica completa.", "correct": false },
      { "text": "Una trucada telefònica obligatòria a cada estudiant matriculat.", "correct": false }
    ]
  },
  {
    "n": 33,
    "question": "El Delegat de Protecció de Dades (DPD) ha de retre comptes directament davant de:",
    "answers": [
      { "text": "El més alt nivell jeràrquic del responsable (Rector/a o Consell de Govern a la UB).", "correct": true },
      { "text": "El Cap del Servei d'Informàtica.", "correct": false },
      { "text": "L'Autoritat Catalana de Protecció de Dades exclusivament.", "correct": false },
      { "text": "El Ministeri d'Educació i Ciència.", "correct": false }
    ]
  },
  {
    "n": 34,
    "question": "Es pot denegar l'exercici del dret d'accés si l'interessat ja ha exercit aquest dret prèviament?",
    "answers": [
      { "text": "Sí, si la sol·licitud és manifestament infundada o excessiva, especialment pel seu caràcter repetitiu.", "correct": true },
      { "text": "No, el dret d'accés es pot exercir cada dia sense cap restricció.", "correct": false },
      { "text": "Només si l'anterior petició es va fer fa menys de deu anys.", "correct": false },
      { "text": "Sí, però cal retornar-li la meitat de la taxa administrativa.", "correct": false }
    ]
  },
  {
    "n": 35,
    "question": "El tractament de dades amb la finalitat de publicació de les notes dels estudiants a la UB es basa en:",
    "answers": [
      { "text": "L'existència d'una norma amb rang de llei que legitima l'exercici de poders públics per a la funció docent.", "correct": true },
      { "text": "El consentiment exprés signat per l'alumne en el moment de la matrícula.", "correct": false },
      { "text": "L'interès legítim de la resta d'estudiants per conèixer el rànquing de la classe.", "correct": false },
      { "text": "El dret a la llibertat d'expressió del professorat universitari.", "correct": false }
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