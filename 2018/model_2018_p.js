const TEST_ID = "e2018p"; 
const questions = [
  {
    question: "Un auxiliar d'una facultat rep l'encàrrec de convocar una reunió ordinària del Consell d'Estudis pel proper 10 de febrer. Quina és la primera acció preparatòria que hauria de realitzar abans de formalitzar la convocatòria?",
    answers: [
      { text: "Redactar l'acta de la sessió anterior.", correct: false },
      { text: "Comunicar als membres la data prevista per tal que realitzin una reserva d'agenda.", correct: true },
      { text: "Enviar directament la documentació tècnica per correu electrònic.", correct: false },
      { text: "Publicar l'ordre del dia al tauler d'anuncis de la Facultat.", correct: false }
    ]
  },
  {
    question: "En redactar la convocatòria per a un Consell d'Estudis, on s'ha d'aprovar un Informe d'Avaluació Intern, quina fórmula s'ha d'utilitzar per a aquest punt de l'Ordre del dia?",
    answers: [
      { text: "Aprovació, si escau, de l'Informe d'Avaluació Intern.", correct: true },
      { text: "Debat i lectura obligatòria de l'Informe d'Avaluació.", correct: false },
      { text: "Resolució ferma i definitiva de l'Informe d'Avaluació.", correct: false },
      { text: "Aprovació per silenci administratiu de l'Informe.", correct: false }
    ]
  },
  {
    question: "D'acord amb l'Estatut de la Universitat de Barcelona, quina d'aquestes funcions correspon als Consells d'Estudis de l'ensenyament?",
    answers: [
      { text: "La contractació de personal administratiu de suport.", correct: false },
      { text: "Vetllar per la coherència i la interrelació de les matèries del pla d'estudis.", correct: true },
      { text: "L'aprovació del pressupost anual de la Universitat.", correct: false },
      { text: "La resolució de recursos d'alçada contra el Rector.", correct: false }
    ]
  },

  // --- BLOQUE: ORGANIZACIÓN DE ACTOS Y PREVENCIÓN ---
  {
    question: "En l'organització d'un acte de graduació que inclou una conferència, un lliurament de diplomes i un refrigeri final, quina gestió logística es considera essencial des del punt de vista de l'auxiliar organitzador?",
    answers: [
      { text: "Contractar un servei de seguretat privada per a cada alumne.", correct: false },
      { text: "Reservar els espais necessaris (sala d'actes i vestíbul) i coordinar els serveis de suport (neteja i audiovisuals).", correct: true },
      { text: "Enviar una invitació per correu postal certificat a cada professor de la universitat.", correct: false },
      { text: "Comprar obsequis de luxe per a tots els assistents de l'acte.", correct: false }
    ]
  },
  {
    question: "Segons el Pla de Prevenció de la UB, quina obligació té el personal (PTGAS i PDI) davant una situació que pugui comportar un risc per a la seguretat a l'edifici?",
    answers: [
      { "text": "Esperar a la revisió anual del servei de manteniment.", "correct": false },
      { "text": "Informar l'OSSMA (Oficina de Seguretat, Salut i Medi Ambient) sobre la situació de risc.", "correct": true },
      { "text": "Intentar solucionar el problema tècnic de forma autònoma.", "correct": false },
      { "text": "No fer res si el risc no afecta directament el seu lloc de treball.", "correct": false }
    ]
  },

  // --- BLOQUE: DOCUMENTACIÓN ADMINISTRATIVA Y CLASSIFICACIÓN ---
  {
    question: "Una tècnica que ha superat un curs de formació necessita acreditar-ho immediatament per a un concurs, però els diplomes encara no s'han imprès. Quin document hauria d'emetre l'Oficina de Formació per acreditar aquesta superació?",
    answers: [
      { text: "Una diligència de 'Faig constar' o un certificat signat per la persona responsable.", correct: true },
      { text: "Una nota informativa sense segell oficial.", correct: false },
      { text: "Una còpia del llistat d'assistència firmat pels alumnes.", correct: false },
      { text: "Una declaració responsable de l'alumna interessada.", correct: false }
    ]
  },
  {
    question: "D'acord amb el text refós de l'Estatut Bàsic de l'Empleat Públic (EBEP), en quin subgrup de classificació professional s'enquadra l'Escala Auxiliar Administrativa de la UB?",
    answers: [
      { text: "Subgrup A2.", correct: false },
      { text: "Subgrup C1.", correct: false },
      { text: "Subgrup C2.", correct: true },
      { text: "Grup B.", correct: false }
    ]
  },
  {
    question: "En la redacció d'un certificat oficial, quina és la fórmula de tancament estàndard utilitzada per indicar la finalitat del document?",
    answers: [
      { text: "Atentament, us saluda la secretaria.", correct: false },
      { text: "I, perquè consti i tingui els efectes que corresponguin, expedeixo aquest certificat a petició de la persona interessada.", correct: true },
      { text: "Aquest document és vàlid només per a ús intern universitari.", correct: false },
      { text: "Es dóna per finalitzat el tràmit de certificació en el dia d'avui.", correct: false }
    ]},








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