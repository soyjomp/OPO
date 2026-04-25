const TEST_ID = "t19"; 
const questions = [
 
  {
    question: "Quin és l'objectiu principal de la renovació del llenguatge administratiu a la UB?",
    answers: [
      { text: "Racionalitzar, clarificar i acostar la institució a la ciutadania amb un llenguatge clar i planer.", correct: true },
      { text: "Augmentar el nombre de paraules tècniques per semblar més professionals.", correct: false },
      { text: "Eliminar completament l'ús del català en els documents oficials.", correct: false },
      { text: "Fer els documents més llargs per incloure tota la normativa possible.", correct: false }
    ]
  },
  {
    question: "Quin tractament s'utilitza de manera generalitzada a la UB per adreçar-se a la persona administrada en català?",
    answers: [
      { text: "El tractament de vós.", correct: true },
      { text: "El tractament de vostè.", correct: false },
      { text: "El tractament de tu.", correct: false },
      { text: "L'ús de títols nobiliaris (Il·lustríssim).", correct: false }
    ]
  },
  {
    question: "En les formes verbals per part de l'emissor del document, quina persona s'ha d'utilitzar de manera sistemàtica?",
    answers: [
      { text: "La primera persona (jo/nosaltres).", correct: true },
      { text: "La tercera persona del singular (l'Administració diu...).", correct: false },
      { text: "La forma passiva sempre.", correct: false },
      { text: "L'impersonal (es fa saber...).", correct: false }
    ]
  },
  {
    question: "Quina és la característica principal de l'estil administratiu pel que fa a la construcció de frases?",
    answers: [
      { text: "Claredat, concisió i senzillesa, evitant frases excessivament llargues.", correct: true },
      { text: "Complexitat gramatical per demostrar autoritat.", correct: false },
      { text: "Ús sistemàtic de la veu passiva.", correct: false },
      { text: "Eliminar la puntuació per guanyar espai.", correct: false }
    ]
  },
  {
    question: "Quin document de transmissió s'utilitza per fer pública una notícia d'interès general?",
    answers: [
      { text: "Anunci.", correct: true },
      { text: "Ofici.", correct: false },
      { text: "Diligència.", correct: false },
      { text: "Recurs.", correct: false }
    ]
  },
  {
    question: "Quina és la diferència clau entre un 'Avís' i un 'Anunci' segons el CUB?",
    answers: [
      { text: "L'avís és més breu, menys formal i per a fets concrets com canvis d'horari o exàmens.", correct: true },
      { text: "L'anunci és només per a la premsa i l'avís per a la web.", correct: false },
      { text: "L'avís té caràcter de norma legal i l'anunci no.", correct: false },
      { text: "No hi ha cap diferència, són sinònims exactes.", correct: false }
    ]
  },
  {
    question: "Quin document comunicatiu s'utilitza formalment entre òrgans administratius o amb altres entitats?",
    answers: [
      { text: "Ofici.", correct: true },
      { text: "Carta.", correct: false },
      { text: "Nota interna.", correct: false },
      { text: "Instrucció.", correct: false }
    ]
  },
  {
    question: "La 'Carta' administrativa es caracteritza per:",
    answers: [
      { text: "Ser una comunicació interpersonal no prevista en la tramitació administrativa formal.", correct: true },
      { text: "Ser el document obligatori per notificar una multa.", correct: false },
      { text: "Tenir sempre una mida ISO A3.", correct: false },
      { text: "Haver d'anar signada pel Rector obligatòriament.", correct: false }
    ]
  },
  {
    question: "Quin document requereix la presència d'una persona en un lloc, dia i hora determinats?",
    answers: [
      { text: "Citació.", correct: true },
      { text: "Convocatòria de reunió.", correct: false },
      { text: "Notificació.", correct: false },
      { text: "Avís.", correct: false }
    ]
  },
  {
    question: "Una 'Convocatòria de reunió' ha d'incloure obligatòriament:",
    answers: [
      { text: "L'ordre del dia.", correct: true },
      { text: "El pressupost de la unitat.", correct: false },
      { text: "La biografia dels assistents.", correct: false },
      { text: "Un resum de la reunió anterior.", correct: false }
    ]
  },
  {
    question: "Quin document de constància recull el que s'ha tractat i acordat en una sessió de treball?",
    answers: [
      { text: "Acta de reunió.", correct: true },
      { text: "Certificat.", correct: false },
      { text: "Informe.", correct: false },
      { text: "Diligència.", correct: false }
    ]
  },
  {
    question: "Quin document 'dóna fe' d'un fet o d'una dada d'un expedient?",
    answers: [
      { text: "Certificat.", correct: true },
      { text: "Diligència.", correct: false },
      { text: "Resolució.", correct: false },
      { text: "Ofici.", correct: false }
    ]
  },
  {
    question: "Quina és la funció d'una 'Diligència'?",
    answers: [
      { text: "Deixar constància de l'execució d'un acte o d'un fet administratiu dins un tràmit.", correct: true },
      { text: "Demandar un dret a l'administració.", correct: false },
      { text: "Avaluar tècnicament una situació.", correct: false },
      { text: "Convocar els membres d'un òrgan.", correct: false }
    ]
  },
  {
    question: "Un 'Informe' es defineix com un document de:",
    answers: [
      { text: "Valoració tècnica o administrativa que serveix de base per a una decisió.", correct: true },
      { text: "Decisió final del procediment.", correct: false },
      { text: "Petició d'informació de l'alumne.", correct: false },
      { text: "Constància de fets passats.", correct: false }
    ]
  },
  {
    question: "Quin document posa fi a un procediment administratiu decidint sobre la qüestió plantejada?",
    answers: [
      { text: "Resolució.", correct: true },
      { text: "Informe.", correct: false },
      { text: "Instrucció.", correct: false },
      { text: "Notificació.", correct: false }
    ]
  },
  {
    question: "Les 'Instruccions' s'utilitzen per a:",
    answers: [
      { text: "Dictar pautes de funcionament intern per a unitats o personal.", correct: true },
      { text: "Comunicar-se amb els ciutadans de manera personal.", correct: false },
      { text: "Demanar un permís de vacances.", correct: false },
      { text: "Certificar les notes d'un alumne.", correct: false }
    ]
  },
  {
    question: "Com s'anomena el document amb el qual una persona s'adreça a la UB per demanar un dret o servei?",
    answers: [
      { text: "Sol·licitud o Petició.", correct: true },
      { text: "Recurs.", correct: false },
      { text: "Ofici.", correct: false },
      { text: "Diligència.", correct: false }
    ]
  },
  {
    question: "Si un interessat considera que un acte administratiu és incorrecte i vol impugnar-lo, ha de presentar un:",
    answers: [
      { text: "Recurs.", correct: true },
      { text: "Informe de queixa.", correct: false },
      { text: "Avís.", correct: false },
      { text: "Conveni.", correct: false }
    ]
  },
  {
    question: "Què és una 'Declaració jurada'?",
    answers: [
      { text: "Una manifestació personal feta sota jurament o promesa de dir la veritat.", correct: true },
      { text: "Un document on el Rector promet millorar la universitat.", correct: false },
      { text: "Una certificació emesa per la Secretaria General.", correct: false },
      { text: "L'acta final d'una reunió de govern.", correct: false }
    ]
  },
  {
    question: "Segons el CUB, per què s'ha d'evitar l'ús excessiu de la veu passiva?",
    answers: [
      { text: "Perquè dificulta la comprensió i l'agilitat de la lectura.", correct: true },
      { text: "Perquè és gramaticalment incorrecte en català.", correct: false },
      { text: "Perquè gasta més tinta en el moment d'imprimir.", correct: false },
      { text: "Perquè només s'ha de fer servir en documents jurídics.", correct: false }
    ]
  },
  {
    question: "Mides de paper: Quina és la mida estàndard ISO per a avisos, cartes i oficis a la UB?",
    answers: [
      { text: "ISO A4.", correct: true },
      { text: "ISO A3.", correct: false },
      { text: "ISO B5.", correct: false },
      { text: "ISO A1.", correct: false }
    ]
  },
  {
    question: "L'objectivitat en el llenguatge administratiu s'aconsegueix amb:",
    answers: [
      { text: "Un tractament igualitari i respectuós.", correct: true },
      { text: "L'eliminació dels noms propis en els documents.", correct: false },
      { text: "L'ús de codis numèrics per a cada tràmit.", correct: false },
      { text: "Evitant signar els documents.", correct: false }
    ]
  },
  {
    question: "Dins la coherència del document, és important fer servir:",
    answers: [
      { text: "Una datació unificada i abreviatures normalitzades.", correct: true },
      { text: "Diferents tipus de lletra per a cada paràgraf.", correct: false },
      { text: "La data escrita en números romans.", correct: false },
      { text: "Abreviatures inventades pel redactor.", correct: false }
    ]
  },
  {
    question: "La documentació de la UB ha de seguir unes normes gràfiques específiques. Com s'anomenen?",
    answers: [
      { text: "Imatge corporativa.", correct: true },
      { text: "Format lliure universitari.", correct: false },
      { text: "Estil gòtic administratiu.", correct: false },
      { text: "Disseny de campus.", correct: false }
    ]
  },
  {
    question: "Els documents de 'transmissió' serveixen principalment per a:",
    answers: [
      { text: "Comunicar informació, fets o actes administratius.", correct: true },
      { text: "Recollir signatures per a una petició.", correct: false },
      { text: "Pagar les nòmines del personal.", correct: false },
      { text: "Avaluar el rendiment dels alumnes.", correct: false }
    ]
  },
  {
    question: "Què és un 'Conveni' en el context de la UB?",
    answers: [
      { text: "Un acord entre la universitat i altres entitats públiques o privades.", correct: true },
      { text: "Un contracte de lloguer d'una fotocopiadora.", correct: false },
      { text: "El document que regula les vacances del PTGAS.", correct: false },
      { text: "Una reunió informal entre degans.", correct: false }
    ]
  },
  {
    question: "La claredat d'un document també depèn de la seva estructura. El CUB aconsella:",
    answers: [
      { text: "Desglossar les idees en diferents paràgrafs per fer la informació assimilable.", correct: true },
      { text: "Escriure tot el text en un sol bloc compacte.", correct: false },
      { text: "No deixar espais en blanc entre seccions.", correct: false },
      { text: "Utilitzar només lletres majúscules.", correct: false }
    ]
  },
  {
    question: "El document que comunica formalment una resolució a l'interessat perquè en tingui coneixement legal és:",
    answers: [
      { text: "Notificació.", correct: true },
      { text: "Avís.", correct: false },
      { text: "Carta de presentació.", correct: false },
      { text: "Diligència de tràmit.", correct: false }
    ]
  },
  {
    question: "L'estil administratiu de la UB respecta la tradició però busca:",
    answers: [
      { text: "Democratitzar les relacions entre l'Administració i les persones.", correct: true },
      { text: "Mantenir el llatí com a llengua preferent.", correct: false },
      { text: "Que ningú entengui els documents sense un advocat.", correct: false },
      { text: "Augmentar el secretisme professional.", correct: false }
    ]
  },
  {
    question: "Quan s'utilitza la mida ISO A5 en una 'Carta'?",
    answers: [
      { text: "Quan el text és molt breu.", correct: true },
      { text: "Només per a cartes enviades a l'estranger.", correct: false },
      { text: "Quan la carta la signa el Rector.", correct: false },
      { text: "Per a comunicacions massives d'exàmens.", correct: false }
    ]
  }, 
  {
    question: "En una 'Convocatòria de reunió', on se sol situar la llista de temes que es tractaran (ordre del dia)?",
    answers: [
      { text: "En el cos del document, numerats correlativament.", correct: true },
      { text: "En un annex separat que s'entrega el dia de la reunió.", correct: false },
      { text: "A l'encapçalament, al costat del logotip de la UB.", correct: false },
      { text: "Al peu de pàgina, després de la signatura.", correct: false }
    ]
  },
  {
    question: "Segons les plantilles de la UB, quina dada NO sol faltar mai en l'encapçalament d'un 'Ofici'?",
    answers: [
      { text: "La referència de l'expedient o de la unitat (codi de referència).", correct: true },
      { text: "L'índex de preus al consum (IPC).", correct: false },
      { text: "El telèfon personal del funcionari que l'escriu.", correct: false },
      { text: "La signatura del conseller de la Generalitat.", correct: false }
    ]
  },
  {
    question: "En quina part de l'estructura d'una 'Acta de reunió' apareixen els noms dels assistents i dels que s'han excusat?",
    answers: [
      { text: "A l'inici, després de les dades d'identificació de la sessió.", correct: true },
      { text: "Al final, com a annex de l'acta.", correct: false },
      { text: "Dins de cada punt de l'ordre del dia.", correct: false },
      { text: "No és obligatori posar els noms, només el total de persones.", correct: false }
    ]
  },
  {
    question: "La 'Notificació' és un document que sempre acompanya a:",
    answers: [
      { text: "Una resolució o un acte administratiu que afecta directament l'interessat.", correct: true },
      { text: "Una carta de felicitació pel curs acadèmic.", correct: false },
      { text: "Un anunci de canvi d'horari de la biblioteca.", correct: false },
      { text: "Una invitació a un acte institucional.", correct: false }
    ]
  },
  {
    question: "En la plantilla d'una 'Sol·licitud', quina és l'estructura lògica del text?",
    answers: [
      { text: "Exposició de motius (Exposo) i petició concreta (Demano).", correct: true },
      { text: "Salutació, cos de la notícia i comiat.", correct: false },
      { text: "Ordre del dia, acords i tancament.", correct: false },
      { text: "Títol, dades tècniques i conclusions.", correct: false }
    ]
  },
  {
    question: "On es col·loca habitualment la 'Datació' (lloc i data) en els documents formals de la UB?",
    answers: [
      { text: "Al final del document, abans de la signatura.", correct: true },
      { text: "A la part superior dreta, abans del logotip.", correct: false },
      { text: "Dins del primer paràgraf del text.", correct: false },
      { text: "Al marge esquerre, en vertical.", correct: false }
    ]
  },
  {
    question: "Si hem de deixar constància en un expedient que s'ha publicat un anunci al tauler d'edictes, quin document farem servir?",
    answers: [
      { text: "Diligència.", correct: true },
      { text: "Certificat.", correct: false },
      { text: "Ofici.", correct: false },
      { text: "Resolució.", correct: false }
    ]
  },
  {
    question: "Quin d'aquests documents té caràcter 'normatiu' intern per a tot el personal d'una unitat?",
    answers: [
      { text: "Instrucció.", correct: true },
      { text: "Informe.", correct: false },
      { text: "Notificació.", correct: false },
      { text: "Avís.", correct: false }
    ]
  },
  {
    question: "En un 'Certificat', quina paraula s'utilitza tradicionalment com a nexe abans de descriure el fet que es certifica?",
    answers: [
      { text: "CERTIFICO: (en majúscules i seguida de dos punts).", correct: true },
      { text: "Dades:", correct: false },
      { text: "Faig saber:", correct: false },
      { text: "Atenció:", correct: false }
    ]
  },
  {
    question: "Les plantilles de la UB segueixen els criteris de 'Llenguatge planer'. Això implica que les frases han de ser preferentment:",
    answers: [
      { text: "Senzilles, amb l'ordre lògic: subjecte, verb i complements.", correct: true },
      { text: "Amb molts adjectius per fer el text més elegant.", correct: false },
      { text: "Extenses per detallar tota la base legal.", correct: false },
      { text: "Sense verbs per ser més directes.", correct: false }
    ]
  },
  {
    question: "A la plantilla d'un 'Anunci', el títol ha de ser:",
    answers: [
      { text: "Clar i destacat, que identifiqui ràpidament el tema.", correct: true },
      { text: "Molt llarg per explicar tota la notícia.", correct: false },
      { text: "Inexistent, es comença directament amb el text.", correct: false },
      { text: "Escrit sempre en llatí.", correct: false }
    ]
  },
  {
    question: "Quin document de la UB sol acabar amb la frase: 'I, perquè consti i tingui els efectes que corresponguin...'?",
    answers: [
      { text: "El Certificat.", correct: true },
      { text: "L'Ofici.", correct: false },
      { text: "La Convocatòria.", correct: false },
      { text: "L'Anunci.", correct: false }
    ]
  },
  {
    question: "En una 'Notificació', és obligatori incloure informació sobre:",
    answers: [
      { text: "Els recursos que es poden interposar contra l'acte notificat.", correct: true },
      { text: "El salari del funcionari que dicta la resolució.", correct: false },
      { text: "La previsió meteorològica del dia de la firma.", correct: false },
      { text: "La llista de tots els alumnes de la facultat.", correct: false }
    ]
  },
  {
    question: "Dins de l'estil UB, com s'escriuen habitualment els càrrecs (Rector/a, Degà/ana, Gerent/a)?",
    answers: [
      { text: "Amb majúscula inicial quan actuen com a títol del document o signatura.", correct: true },
      { text: "Sempre en minúscula en qualsevol part del document.", correct: false },
      { text: "Sempre en negreta i cursiva.", correct: false },
      { text: "Només s'escriu el nom de la persona, mai el càrrec.", correct: false }
    ]
  },
  {
    question: "Si la UB arriba a un acord amb l'Ajuntament de Barcelona per fer pràctiques d'alumnes, el document que signaran és:",
    answers: [
      { text: "Un Conveni.", correct: true },
      { text: "Una Resolució.", correct: false },
      { text: "Una Instrucció.", correct: false },
      { text: "Una Diligència.", correct: false }
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
