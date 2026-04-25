const TEST_ID = "t17"; 
const questions = [
 
  {
    question: "A quina pestanya de Word 2024 trobem les opcions per canviar el tipus de lletra, la mida i l'alineació del paràgraf?",
    answers: [
      { text: "Inici.", correct: true },
      { text: "Inserció.", correct: false },
      { text: "Disseny.", correct: false },
      { text: "Disposició.", correct: false }
    ]
  },
  {
    question: "Quina funció permet aplicar un conjunt de característiques de format (com fons, mida i color) de manera ràpida i homogènia a tot un document?",
    answers: [
      { text: "Estils.", correct: true },
      { text: "Format de caràcter.", correct: false },
      { text: "Revisió.", correct: false },
      { text: "Autoformat.", correct: false }
    ]
  },
  {
    question: "Per configurar els marges d'un document i l'orientació de la pàgina, a quina pestanya hem d'anar?",
    answers: [
      { text: "Disposició (o Configuració de pàgina).", correct: true },
      { text: "Vista.", correct: false },
      { text: "Disseny.", correct: false },
      { text: "Referències.", correct: false }
    ]
  },
  {
    question: "Com es denomina l'espai vertical que hi ha entre les línies d'un text en un paràgraf?",
    answers: [
      { text: "Interlineat.", correct: true },
      { text: "Espaiat posterior.", correct: false },
      { text: "Sangria.", correct: false },
      { text: "Marge intern.", correct: false }
    ]
  },
  {
    question: "Quina eina de Word permet que diversos usuaris revisin un document veient exactament quins canvis ha fet cadascú?",
    answers: [
      { text: "Control de canvis.", correct: true },
      { text: "Correcció automàtica.", correct: false },
      { text: "OneDrive personal.", correct: false },
      { text: "Comparació de macros.", correct: false }
    ]
  },
  {
    question: "Per crear una llista on els elements tenen una jerarquia (per exemple: 1, 1.1, 1.1.1), quina opció utilitzarem?",
    answers: [
      { text: "Llista multinivell.", correct: true },
      { text: "Llista de pics simple.", correct: false },
      { text: "Numeració automàtica.", correct: false },
      { text: "Esquema de taula.", correct: false }
    ]
  },
  {
    question: "Dins d'una taula, quina acció permet convertir dues o més cel·les adjacents en una de sola?",
    answers: [
      { text: "Combinar cel·les.", correct: true },
      { text: "Dividir cel·les.", correct: false },
      { text: "Autoajustar.", correct: false },
      { text: "Distribuir columnes.", correct: false }
    ]
  },
  {
    question: "Si volem que Word generi automàticament un índex amb els títols del document i el seu número de pàgina, hem d'utilitzar:",
    answers: [
      { text: "Taula de contingut.", correct: true },
      { text: "Taula d'il·lustracions.", correct: false },
      { text: "Índex alfabètic.", correct: false },
      { text: "Marcador de posició.", correct: false }
    ]
  },
  {
    question: "Per crear una Taula de Contingut automàtica, és imprescindible que els títols tinguin aplicat:",
    answers: [
      { text: "Un Estil de títol (Títol 1, Títol 2, etc.).", correct: true },
      { text: "Negreta i una mida superior a 14.", correct: false },
      { text: "Un subratllat doble.", correct: false },
      { text: "Una sangria de primera línia.", correct: false }
    ]
  },
  {
    question: "Quina eina s'utilitza per enviar una carta personalitzada a 100 destinataris diferents sense haver d'escriure 100 documents?",
    answers: [
      { text: "Combinar correspondència.", correct: true },
      { text: "Etiquetatge en sèrie.", correct: false },
      { text: "Macro d'enviament.", correct: false },
      { text: "Plantilles dinàmiques.", correct: false }
    ]
  },
  {
    question: "En el procés de 'Combinar correspondència', quin document conté la informació que varia (noms, adreces, etc.)?",
    answers: [
      { text: "Origen de dades (o llista de destinataris).", correct: true },
      { text: "Document principal.", correct: false },
      { text: "Full de format.", correct: false },
      { text: "Document de combinació.", correct: false }
    ]
  },
  {
    question: "Dins de la pestanya 'Referències', quina opció permet citar un text i que aparegui una petita explicació al final de la pàgina actual?",
    answers: [
      { text: "Nota al peu.", correct: true },
      { text: "Nota final.", correct: false },
      { text: "Citació bibliogràfica.", correct: false },
      { text: "Referència creuada.", correct: false }
    ]
  },
  {
    question: "Un document que ja té l'estructura, el logotip i el format predefinit per ser utilitzat com a base per a nous documents s'anomena:",
    answers: [
      { text: "Plantilla.", correct: true },
      { text: "Formulari.", correct: false },
      { text: "Estil global.", correct: false },
      { text: "Còpia mestra.", correct: false }
    ]
  },
  {
    question: "Per desar un document de Word perquè no pugui ser modificat fàcilment i mantingui el format en qualsevol dispositiu, l'exportarem a:",
    answers: [
      { text: "PDF.", correct: true },
      { text: "RTF.", correct: false },
      { text: "TXT.", correct: false },
      { text: "HTML.", correct: false }
    ]
  },
  {
    question: "A quina pestanya trobem l'opció per compartir un document directament a OneDrive o Teams?",
    answers: [
      { text: "Fitxer (o el botó Comparteix de la part superior).", correct: true },
      { text: "Enviament.", correct: false },
      { text: "Vista.", correct: false },
      { text: "Ajuda.", correct: false }
    ]
  },
  {
    question: "Quina funció permet saltar a una part específica del document (com un títol o una imatge) mitjançant un enllaç intern?",
    answers: [
      { text: "Referència creuada.", correct: true },
      { text: "Salt de secció.", correct: false },
      { text: "Marcador de text.", correct: false },
      { text: "Peu de pàgina.", correct: false }
    ]
  },
  {
    question: "Dins de les taules de Word, és possible realitzar càlculs bàsics (com sumes)?",
    answers: [
      { text: "Sí, mitjançant l'eina 'Fórmula' a la pestanya de Disseny de taula / Disposició.", correct: true },
      { text: "No, Word només serveix per a text; cal usar Excel.", correct: false },
      { text: "Sí, però només si la taula té més de 10 columnes.", correct: false },
      { text: "Només si el document es desa en format .xlsx.", correct: false }
    ]
  },
  {
    question: "Quina d'aquestes opcions NO és un tipus d'alineació de paràgraf a Word?",
    answers: [
      { text: "Vertical.", correct: true },
      { text: "Justificada.", correct: false },
      { text: "Centrada.", correct: false },
      { text: "Dreta.", correct: false }
    ]
  },
  {
    question: "Què permet fer l'opció 'Dividir cel·les' en una taula?",
    answers: [
      { text: "Partir una cel·la existent en diverses columnes o files.", correct: true },
      { text: "Separar una taula en dues taules independents.", correct: false },
      { text: "Esborrar el contingut de la cel·la.", correct: false },
      { text: "Canviar el color de la vora de la cel·la.", correct: false }
    ]
  },
  {
    question: "En un formulari de Word, com s'anomenen els elements on l'usuari pot escriure o seleccionar opcions (com quadres de text o llistes desplegables)?",
    answers: [
      { text: "Controls de contingut.", correct: true },
      { text: "Marcs de dades.", correct: false },
      { text: "Etiquetes dinàmiques.", correct: false },
      { text: "Scripts de formulari.", correct: false }
    ]
  },
  {
    question: "L'opció 'Cerca i substitueix' es troba al grup Edició de la pestanya:",
    answers: [
      { text: "Inici.", correct: true },
      { text: "Revisió.", correct: false },
      { text: "Vista.", correct: false },
      { text: "Referències.", correct: false }
    ]
  },
  {
    question: "Si volem veure el document tal com quedarà un cop imprès, quina vista hem d'utilitzar?",
    answers: [
      { text: "Disseny d'impressió.", correct: true },
      { text: "Disseny web.", correct: false },
      { text: "Esquema.", correct: false },
      { text: "Mode de lectura.", correct: false }
    ]
  },
  {
    question: "Quina tecla de drecera (shortcut) s'utilitza normalment per desar un document a Word (versió en espanyol/català)?",
    answers: [
      { text: "Ctrl + S (o Ctrl + G segons versió).", correct: true },
      { text: "Ctrl + P.", correct: false },
      { text: "Ctrl + C.", correct: false },
      { text: "Ctrl + V.", correct: false }
    ]
  },
  {
    question: "La sangria 'Francesa' és aquella on:",
    answers: [
      { text: "La primera línia es manté a l'esquerra i la resta del paràgraf es mou a la dreta.", correct: true },
      { text: "Només es mou la primera línia a la dreta.", correct: false },
      { text: "Tot el paràgraf es mou cap al centre.", correct: false },
      { text: "El text s'ajusta als dos marges simultàniament.", correct: false }
    ]
  },
  {
    question: "On es troben les opcions de 'Sinònims' i 'Comptar paraules'?",
    answers: [
      { text: "Pestanya Revisió.", correct: true },
      { text: "Pestanya Inici.", correct: false },
      { text: "Pestanya Referències.", correct: false },
      { text: "Pestanya Vista.", correct: false }
    ]
  },
  {
    question: "Quina opció de les taules permet ajustar automàticament l'amplada de les columnes al contingut que hi ha escrit?",
    answers: [
      { text: "Autoajustar al contingut.", correct: true },
      { text: "Ajust de línia.", correct: false },
      { text: "Amplada fixa de columna.", correct: false },
      { text: "Distribuir columnes uniformement.", correct: false }
    ]
  },
  {
    question: "En Combinar Correspondència, quina opció permet veure com quedaran les dades reals abans d'acabar la combinació?",
    answers: [
      { text: "Visualització prèvia dels resultats.", correct: true },
      { text: "Verificació d'errors.", correct: false },
      { text: "Editar llista de destinataris.", correct: false },
      { text: "Bloqueig de camps.", correct: false }
    ]
  },
  {
    question: "Quina pestanya de Word NO apareix per defecte i s'ha d'activar per treballar amb formularis i macros?",
    answers: [
      { text: "Desenvolupador (o Programador).", correct: true },
      { text: "Disseny de pàgina.", correct: false },
      { text: "Eines de dades.", correct: false },
      { text: "Multimèdia.", correct: false }
    ]
  },
  {
    question: "L'extensió de fitxer predeterminada per als documents de Word des de les versions recents és:",
    answers: [
      { text: ".docx", correct: true },
      { text: ".doc", correct: false },
      { text: ".dotx", correct: false },
      { text: ".wrd", correct: false }
    ]
  },
  {
    question: "Per afegir una numeració de pàgina que aparegui automàticament a la part inferior de totes les fulles, anirem a:",
    answers: [
      { text: "Inserció > Capçalera i peu de pàgina.", correct: true },
      { text: "Disposició > Pàgina.", correct: false },
      { text: "Disseny > Numeració.", correct: false },
      { text: "Fitxer > Imprimir.", correct: false }
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