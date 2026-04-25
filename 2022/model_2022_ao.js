const TEST_ID = "e2022ao"; 
const questions = [
  {
    question: "Com definiries una “diligència”?",
    answers: [
      { text: "Document que constata les incidències i els acords presos en una reunió.", correct: false },
      { text: "Certificat intern que es produeix en les actuacions administratives i que acredita un tràmit administratiu.", correct: true },
      { text: "Document per mitjà del qual es dona fe d’un fet, del contingut d’un document o de les circumstàncies que consten en arxius, registres, llibres d’actes, etc.", correct: false },
      { text: "Document que presenta una exposició de caràcter informatiu sobre la situació d’un afer o sobre els elements necessaris perquè es resolgui.", correct: false }
    ]
  },
  {
    question: "El Word – Microsoft Office permet definir diferents idiomes de correcció per a diferents parts d’un document?",
    answers: [
      { text: "No, tot el document s’ha de corregir amb un mateix idioma.", correct: false },
      { text: "Sí, es pot definir un idioma diferent per a distintes parts del document.", correct: true },
      { text: "Sí, sempre que el document estigui format per més d’una pàgina.", correct: false },
      { text: "No hi ha corrector ortogràfic.", correct: false }
    ]
  },
  {
    question: "Quin tipus de gràfic s’utilitza a l’Excel – Microsoft Office per presentar l’aportació d’una sèrie de valors a un total?",
    answers: [
      { text: "Gràfic de columnes.", correct: false },
      { text: "Gràfic de barres.", correct: false },
      { text: "Gràfic circular.", correct: true },
      { text: "Gràfic de línies.", correct: false }
    ]
  },
  {
    question: "En el Word – Microsoft Office, es poden utilitzar símbols diferents dels que es mostren per defecte com a pic (vinyeta)?",
    answers: [
      { text: "Sí, es pot.", correct: true },
      { text: "Sí, però només per determinats tipus de llista.", correct: false },
      { text: "No, només es poden utilitzar els models predeterminats.", correct: false },
      { text: "Al processador de textos no existeixen els pics.", correct: false }
    ]
  },
  {
    question: "D’acord amb el CUB – llibre d’estil de la Universitat de Barcelona, quines són les tipologies d’informes? (ANUL·LADA)",
    answers: [
      { text: "Descriptius o valoratius.", correct: true },
      { text: "Procedimentals o no procedimentals.", correct: false },
      { text: "Descriptius o procedimentals.", correct: false },
      { text: "Valoratius o resolutius.", correct: false }
    ]
  },
  {
    question: "En el Word – Microsoft Office com es mostra un paràgraf amb una alineació justificada?",
    answers: [
      { text: "Alinea els paràgrafs seleccionats als marges esquerre i dret.", correct: true },
      { text: "No existeix l’alineació justificada.", correct: false },
      { text: "Alinea els paràgrafs seleccionats al marge dret.", correct: false },
      { text: "Centra el text.", correct: false }
    ]
  },
  {
    question: "En el Word – Microsoft Office, les tabulacions permeten definir una posició determinada del text i...",
    answers: [
      { text: "L’alineació.", correct: true },
      { text: "L’interlineat.", correct: false },
      { text: "L’espaiat.", correct: false },
      { text: "Cap més opció.", correct: false }
    ]
  },
  {
    question: "El certificat és un document que:",
    answers: [
      { text: "Dóna fe d’un fet.", correct: true },
      { text: "Conté la manifestació feta d’un esdeveniment.", correct: false },
      { text: "Dona notícia d’un fet.", correct: false },
      { text: "Acredita un tràmit administratiu.", correct: false }
    ]
  },
  {
    question: "Quines tecles cal prémer per copiar un text d’un document?",
    answers: [
      { text: "Control+C", correct: true },
      { text: "Control+V", correct: false },
      { text: "Control+X", correct: false },
      { text: "Control+N", correct: false }
    ]
  },
  {
    question: "Es pot personalitzar la numeració al Word – Microsoft Office?",
    answers: [
      { text: "Sí, sempre que sigui numèrica.", correct: false },
      { text: "Sí, es pot modificar el tipus de numeració i el seu format.", correct: true },
      { text: "Sí, només el seu format.", correct: false },
      { text: "No, la numeració no es pot personalitzar.", correct: false }
    ]
  },
  {
    question: "En el Word – Microsoft Office, es poden combinar nombres i pics en un esquema numerat amb nivells?",
    answers: [
      { text: "Sí, es poden combinar nombres i pics.", correct: true },
      { text: "No, només es poden utilitzar nombres.", correct: false },
      { text: "No, només es poden utilitzar pics.", correct: false },
      { text: "Sí, definint-ho a la plantilla.", correct: false }
    ]
  },
  {
    question: "Segons el Llibre d’estil de la Universitat de Barcelona, quin és el temps verbal preferent en l’Acta de reunió?",
    answers: [
      { text: "Present d’indicatiu.", correct: true },
      { text: "Futur.", correct: false },
      { text: "Qualsevol.", correct: false },
      { text: "Passat.", correct: false }
    ]
  },
  {
    question: "Què són les taules?",
    answers: [
      { text: "Són autoformes de dibuix.", correct: false },
      { text: "Taules creades a un full de càlcul i copiades a un document.", correct: false },
      { text: "Són unes quadrícules que es componen de files i columnes, les interseccions de les quals formen les cel·les.", correct: true },
      { text: "Són uns estils de text creats pel processador de textos.", correct: false }
    ]
  },
  {
    question: "Quin és el document amb què es trasllada una decisió presa sobre un assumpte a la persona interessada?",
    answers: [
      { text: "Avís.", correct: false },
      { text: "Anunci.", correct: false },
      { text: "Diligència.", correct: false },
      { text: "Notificació d’una resolució.", correct: true }
    ]
  },
  {
    question: "En l’Excel – Microsoft Office, quina tecla permet desplaçar el cursor d’una cel·la a una altra cel·la de la taula?",
    answers: [
      { text: "Tabulador.", correct: true },
      { text: "Control.", correct: false },
      { text: "Majúscules.", correct: false },
      { text: "Bloqueig de majúscules.", correct: false }
    ]
  },
  {
    question: "Quin és el document pel qual es demana a un òrgan administratiu que anul·li o modifiqui una resolució perquè la considera perjudicial?",
    answers: [
      { text: "Avís.", correct: false },
      { text: "Recurs.", correct: true },
      { text: "Citació.", correct: false },
      { text: "Notificació d’una resolució.", correct: false }
    ]
  },
  {
    question: "En l’Excel – Microsoft Office, per indicar que totes les columnes tinguin la mateixa amplada seleccionarem l’opció:",
    answers: [
      { text: "Amplada fixa de columna.", correct: true },
      { text: "Ajustament automàtic al contingut.", correct: false },
      { text: "Ajustament automàtic a la finestra.", correct: false },
      { text: "Qualsevol de les opcions és correcta.", correct: false }
    ]
  },
  {
    question: "En el Word – Microsoft Office, per a què serveix la vista preliminar abans d’imprimir?",
    answers: [
      { text: "Per veure la mida del paper.", correct: false },
      { text: "Per verificar l’aspecte global del document.", correct: true },
      { text: "Per veure els marges exclusivament.", correct: false },
      { text: "Per veure només el salt de pàgina.", correct: false }
    ]
  },
  {
    question: "En el Word – Microsoft Office, l’espai editable situat dins del marge superior del document que es repeteix a totes les pàgines és...",
    answers: [
      { text: "La capçalera.", correct: true },
      { text: "El peu de pàgina.", correct: false },
      { text: "El títol del document.", correct: false },
      { text: "El cos del document.", correct: false }
    ]
  },
  {
    question: "En el Word – Microsoft Office, quina configuració cal per imprimir només les pàgines 2, 3, 4 i 10?",
    answers: [
      { text: "2-4,10", correct: true },
      { text: "2,4,10", correct: false },
      { text: "1,3,10", correct: false },
      { text: "2-10", correct: false }
    ]
  },
  {
    question: "En l’Excel – Microsoft Office, quina expressió és una referència a una cel·la?",
    answers: [
      { text: "4", correct: false },
      { text: "A", correct: false },
      { text: "4A", correct: false },
      { text: "A4", correct: true }
    ]
  },
  {
    question: "Quin és el document per mitjà del qual es demana la presència d’algú en una reunió?",
    answers: [
      { text: "Avís.", correct: false },
      { text: "Anunci.", correct: false },
      { text: "Carta.", correct: false },
      { text: "Convocatòria de reunió.", correct: true }
    ]
  },
  {
    question: "En l’Excel – Microsoft Office, què mostra la barra de fórmules?",
    answers: [
      { text: "El mateix resultat que la cel·la.", correct: false },
      { text: "La fórmula inserida.", correct: true },
      { text: "Sempre està buida.", correct: false },
      { text: "Un valor aleatori.", correct: false }
    ]
  },
  {
    question: "En l’Excel – Microsoft Office, què passa quan es copia un càlcul a altres cel·les? (ANUL·LADA)",
    answers: [
      { text: "La fórmula s’adapta variant columna i/o fila.", correct: true },
      { text: "La fórmula varia número de columna i lletra de fila.", correct: false },
      { text: "La fórmula es copia idèntica.", correct: false },
      { text: "No es poden copiar fórmules.", correct: false }
    ]
  },
  {
    question: "En l’Excel – Microsoft Office, quina eina permet copiar fórmules entre cel·les?",
    answers: [
      { text: "La barra de fórmules.", correct: false },
      { text: "El botó d’emplenament.", correct: true },
      { text: "El botó de duplicació.", correct: false },
      { text: "No es poden copiar fórmules.", correct: false }
    ]
  },
  {
    question: "En l’Excel – Microsoft Office, quina funció retorna el valor més petit d’un rang?",
    answers: [
      { text: "MIN", correct: true },
      { text: "MAX", correct: false },
      { text: "MENYS", correct: false },
      { text: "MENOR", correct: false }
    ]
  },
  {
    question: "L’Excel – Microsoft Office permet fer operacions amb dates?",
    answers: [
      { text: "No, només admet text.", correct: false },
      { text: "Sí, canviant el format a numèric.", correct: false },
      { text: "Sí, es poden fer operacions amb dates.", correct: true },
      { text: "No accepta dates.", correct: false }
    ]
  },
  {
    question: "Quina funció permet calcular el valor central d’un rang de dades?",
    answers: [
      { text: "MEDIANA", correct: true },
      { text: "CENTRAL", correct: false },
      { text: "MODA", correct: false },
      { text: "Només amb fórmula.", correct: false }
    ]
  },
  {
    question: "Quin document ha de portar peu de recurs?",
    answers: [
      { text: "Resolució.", correct: true },
      { text: "Diligència.", correct: false },
      { text: "Convocatòria de reunió.", correct: false },
      { text: "Ofici.", correct: false }
    ]
  },
  {
    question: "Com es pot canviar la mida global d’un gràfic a l’Excel – Microsoft Office?",
    answers: [
      { text: "No es pot canviar.", correct: false },
      { text: "Arrossegant l’àrea de traçat.", correct: false },
      { text: "Arrossegant els punts de control de l’àrea del gràfic.", correct: true },
      { text: "Canviant l’escala.", correct: false }
    ]
  },
  {
    question: "Per crear una taula de dades a l’Excel – Microsoft Office, quina recomanació és correcta?",
    answers: [
      { text: "Tenir files o columnes en blanc.", correct: false },
      { text: "Organitzar les dades en files i columnes.", correct: true },
      { text: "Barrejar tipus de dades a una columna.", correct: false },
      { text: "Mateix tipus de dades a tota una fila.", correct: false }
    ]
  },
  {
    question: "Quin document constata les incidències i els acords presos en una reunió?",
    answers: [
      { text: "Resolució.", correct: false },
      { text: "Diligència.", correct: false },
      { text: "Convocatòria de reunió.", correct: false },
      { text: "Acta.", correct: true }
    ]
  },
  {
    question: "A l’Excel – Microsoft Office, si un camp no té títol en una taula, el programa...",
    answers: [
      { text: "L’inserirà com a Camp1, Camp2...", correct: false },
      { text: "L’inserirà com a Columna1, Columna2...", correct: true },
      { text: "Copiarà el títol anterior.", correct: false },
      { text: "No permetrà crear la taula.", correct: false }
    ]
  },
  {
    question: "A l’Excel – Microsoft Office, si s’afegeix una nova fila al final d’una taula...",
    answers: [
      { text: "Queda fora de la taula.", correct: false },
      { text: "Passa a formar part de la taula.", correct: true },
      { text: "Cal redefinir el rang.", correct: false },
      { text: "Cal convertir-la de nou.", correct: false }
    ]
  },
  {
    question: "Els filtres de l’Excel permeten seleccionar més d’un valor per columna?",
    answers: [
      { text: "No, només un.", correct: false },
      { text: "Com a màxim dos.", correct: false },
      { text: "Com a màxim tres.", correct: false },
      { text: "Sí, tants com calgui.", correct: true }
    ]
  },

  // PREGUNTES DE RESERVA
  {
    question: "Amb quin document es demana la presència d’algú per a un tràmit administratiu?",
    answers: [
      { text: "Carta.", correct: false },
      { text: "Avís.", correct: false },
      { text: "Citació.", correct: true },
      { text: "Informe.", correct: false }
    ]
  },
  {
    question: "Al Word – Microsoft Office, les tabulacions es poden establir amb...",
    answers: [
      { text: "Les guies.", correct: false },
      { text: "El regle.", correct: true },
      { text: "Les línies de la quadrícula.", correct: false },
      { text: "La tecla Control.", correct: false }
    ]
  },
  {
    question: "Amb les eines de correcció, l’Excel – Microsoft Office permet revisar el contingut...",
    answers: [
      { text: "Gramaticalment.", correct: false },
      { text: "Ortogràficament.", correct: true },
      { text: "Gramaticalment i ortogràficament.", correct: false },
      { text: "No té eines de correcció.", correct: false }
    ]
  },
  {
    question: "A l’Excel – Microsoft Office, què indica un punt i coma entre dues cel·les en una funció?",
    answers: [
      { text: "Que s’inclou tot el rang.", correct: false },
      { text: "Que només s’inclouen les dues cel·les.", correct: true },
      { text: "Que hi ha funcions concatenades.", correct: false },
      { text: "Que els valors són fixos.", correct: false }
    ]
  },
  {
    question: "A l’Excel – Microsoft Office, les opcions d’edició de gràfics són...",
    answers: [
      { text: "Diferents segons el tipus de gràfic.", correct: true },
      { text: "Iguals per a tots.", correct: false },
      { text: "Depenen de les dades.", correct: false },
      { text: "No es poden editar.", correct: false }
    ]},
    { "question": "D’acord amb els criteris de l'estil administratiu de la UB, quina de les següents afirmacions sobre l'objectivitat i la coherència documental és correcta?", "answers": [
      { "text": "L'objectivitat s'ha d'expressar mitjançant l'ús sistemàtic de la veu passiva per distanciar l'Administració de l'administrat.", "correct": false },
      { "text": "La coherència s'aconsegueix, entre d'altres, amb l'ús sistemàtic de la primera persona de les formes verbals i una datació unificada.", "correct": true },
      { "text": "Es recomana l'ús de frases llargues i complexes per garantir el respecte a la tradició jurídica catalana.", "correct": false },
      { "text": "El tractament de 'vós' es considera un arcaisme que s'ha d'evitar per afavorir la senzillesa i la proximitat.", "correct": false }
  ]},
  { "question": "Segons els criteris del CUB, quins són els quatre pilars fonamentals que defineixen les característiques de l’estil administratiu de la Universitat de Barcelona?", "answers": [
      { "text": "L’ús de la veu passiva, la jerarquia administrativa, la formalitat extrema i la normalització del disseny gràfic.", "correct": false },
      { "text": "La modernitat lingüística, la transparència de dades, la brevetat absoluta i la uniformitat de la imatge corporativa.", "correct": false },
      { "text": "El respecte a la tradició, l’objectivitat, la claredat, concisió i senzillesa, i la coherència i homogeneïtat.", "correct": true },
      { "text": "L'atenció a la persona, la gratuïtat del tràmit, l'ús de la tercera persona i el rigor jurídic internacional.", "correct": false }
  ]},
  {
    "question": "En relació amb el criteri d'objectivitat de l'estil administratiu de la UB, quina és la forma de tractament generalitzada que s'ha d'utilitzar per democratitzar la relació amb les persones?",
    "answers": [
      { "text": "L'ús de la tercera persona de cortesia (vostè).", "correct": false },
      { "text": "L'ús de la segona persona del plural (vós).", "correct": true },
      { "text": "L'ús de la segona persona del singular (tu) per proximitat.", "correct": false },
      { "text": "L'ús de fórmules honorífiques segons el rang del destinatari.", "correct": false }
    ]
  },
  {
    "question": "Per garantir la coherència en la producció de documents a la UB, quina persona gramatical s'ha d'utilitzar de manera sistemàtica en les formes verbals?",
    "answers": [
      { "text": "La primera persona del singular (jo).", "correct": true },
      { "text": "La tercera persona del singular, per mantenir la impersonatlitat.", "correct": false },
      { "text": "La primera persona del plural (nosaltres), com a plural corporatiu.", "correct": false },
      { "text": "L'ús exclusiu de formes no personals com l'infinitiu.", "correct": false }
    ]
  },
  {
    "question": "Dins dels criteris de claredat, concisió i senzillesa del CUB, quina estructura gramatical es considera desaconsellable en la redacció de documents?",
    "answers": [
      { "text": "L'ús de paràgrafs curts i idees desglossades.", "correct": false },
      { "text": "L'ús sistemàtic de la veu passiva.", "correct": true },
      { "text": "L'ordre lògic de la frase (subjecte, verb i complements).", "correct": false },
      { "text": "L'ús d'abreviatures normalitzades i termes senzills.", "correct": false }
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