const TEST_ID = "t18"; 
const questions = [
 
  {
    question: "Com s'expressa una referència absoluta a la cel·la A1 per evitar que canviï en arrossegar una fórmula?",
    answers: [
      { text: "$A$1", correct: true },
      { text: "#A1", correct: false },
      { text: "!A1", correct: false },
      { text: "@A@1", correct: false }
    ]
  },
  {
    question: "Quina funció utilitzaries per sumar un rang de cel·les només si compleixen un criteri específic?",
    answers: [
      { text: "SUMA.SI", correct: true },
      { text: "TOTAL.SI", correct: false },
      { text: "SUMATORI", correct: false },
      { text: "COMPTA.SI", correct: false }
    ]
  },
  {
    question: "A Excel 2024, quina funció de cerca ha substituït CERCA.V per ser més flexible i no requerir que la columna de cerca estigui a l'esquerra?",
    answers: [
      { text: "CERCA.X", correct: true },
      { text: "BUSCA.MÀX", correct: false },
      { text: "TROBA.DADES", correct: false },
      { text: "INDEX.CERCA", correct: false }
    ]
  },
  {
    question: "Quina eina permet aplicar un color de fons automàticament a les cel·les que contenen un valor superior a 100?",
    answers: [
      { text: "Format condicional.", correct: true },
      { text: "Estils de cel·la.", correct: false },
      { text: "Validació de dades.", correct: false },
      { text: "Autoformat de taula.", correct: false }
    ]
  },
  {
    question: "Per crear un resum ràpid de grans volums de dades que permeti creuar camps i filtrar informació de manera dinàmica, utilitzarem:",
    answers: [
      { text: "Taules dinàmiques (Pivot Tables).", correct: true },
      { text: "Gràfics de barres.", correct: false },
      { text: "Filtres avançats.", correct: false },
      { text: "Consolidació de llibres.", correct: false }
    ]
  },
  {
    question: "Què passa si en una fórmula fem servir una referència relativa com 'B2' i copiem la fórmula una fila cap avall?",
    answers: [
      { text: "La referència canvia automàticament a B3.", correct: true },
      { text: "La referència es manté com a B2.", correct: false },
      { text: "Excel dóna un error de sintaxi.", correct: false },
      { text: "La fórmula s'esborra.", correct: false }
    ]
  },
  {
    question: "Quina d'aquestes funcions serveix per comptar quantes cel·les d'un rang contenen números?",
    answers: [
      { text: "COMPTA", correct: true },
      { text: "COMPTA.SI", correct: false },
      { text: "SUMA", correct: false },
      { text: "VALOR", correct: false }
    ]
  },
  {
    question: "L'eina que permet restringir els valors que un usuari pot introduir en una cel·la (per exemple, només números de l'1 al 10) és:",
    answers: [
      { text: "Validació de dades.", correct: true },
      { text: "Format de cel·la.", correct: false },
      { text: "Protecció de llibre.", correct: false },
      { text: "Filtre automàtic.", correct: false }
    ]
  },
  {
    question: "Per unir el text de dues cel·les diferents (A1 i B1) en una de sola a Excel 2024, quina funció és la més actual?",
    answers: [
      { text: "CONCAT", correct: true },
      { text: "UNEIX", correct: false },
      { text: "SUMA.TEXT", correct: false },
      { text: "VINCULA", correct: false }
    ]
  },
  {
    question: "En una taula dinàmica, com s'anomena l'eina visual que permet filtrar dades prement botons de manera més intuïtiva que els filtres convencionals?",
    answers: [
      { text: "Segmentador de dades (Slicers).", correct: true },
      { text: "Línia de temps.", correct: false },
      { text: "Filtre de camp.", correct: false },
      { text: "Selector de rang.", correct: false }
    ]
  },
  {
    question: "Quina funció de la pestanya 'Disposició de pàgina' permet que les capçaleres d'una taula s'imprimeixin en totes les fulles?",
    answers: [
      { text: "Imprimir títols.", correct: true },
      { text: "Àrea d'impressió.", correct: false },
      { text: "Salts de pàgina.", correct: false },
      { text: "Fons de pàgina.", correct: false }
    ]
  },
  {
    question: "Si volem extreure els 3 primers caràcters d'una cadena de text situada a la cel·la A1, farem servir:",
    answers: [
      { text: "ESQUERRA(A1;3)", correct: true },
      { text: "DRETA(A1;3)", correct: false },
      { text: "MID(A1;1;3)", correct: false },
      { text: "RETALLA(A1;3)", correct: false }
    ]
  },
  {
    question: "Què és Power Query a Excel?",
    answers: [
      { text: "Una eina per connectar, transformar i combinar dades de diferents orígens.", correct: true },
      { text: "Un nou tipus de gràfic en 3D.", correct: false },
      { text: "Un motor de cerca de plantilles a Internet.", correct: false },
      { text: "Un sistema per posar contrasenyes als fitxers.", correct: false }
    ]
  },
  {
    question: "El símbol que indica a Excel que estem introduint una fórmula o funció és:",
    answers: [
      { text: "L'igual (=).", correct: true },
      { text: "El de la suma (+).", correct: false },
      { text: "L'arrova (@).", correct: false },
      { text: "El percentatge (%).", correct: false }
    ]
  },
  {
    question: "Quina combinació de funcions s'utilitzava tradicionalment per fer cerques més potents que CERCA.V, abans de l'arribada de CERCA.X?",
    answers: [
      { text: "INDEX i COINCIDIR.", correct: true },
      { text: "SUMA i PROMIG.", correct: false },
      { text: "SI i I.", correct: false },
      { text: "FILTRE i ORDENA.", correct: false }
    ]
  },
  {
    question: "Dins d'una cel·la, si veiem el símbol '#####', què significa?",
    answers: [
      { text: "Que la columna no és prou ampla per mostrar el contingut.", correct: true },
      { text: "Que la fórmula té un error de divisió per zero.", correct: false },
      { text: "Que el text està escrit en un idioma que Excel no reconeix.", correct: false },
      { text: "Que la cel·la està protegida contra escriptura.", correct: false }
    ]
  },
  {
    question: "Quina funció lògica retorna el valor VERTADER si es compleixen totes les condicions especificades?",
    answers: [
      { text: "I", correct: true },
      { text: "O", correct: false },
      { text: "SI", correct: false },
      { text: "NO", correct: false }
    ]
  },
  {
    question: "Per representar l'evolució d'una dada al llarg del temps (com el pressupost per mesos), quin gràfic és el més recomanat?",
    answers: [
      { text: "Gràfic de línies.", correct: true },
      { text: "Gràfic circular (de formatge).", correct: false },
      { text: "Gràfic de dispersió.", correct: false },
      { text: "Gràfic de mapes.", correct: false }
    ]
  },
  {
    question: "Com podem fixar només la fila d'una cel·la (referència mixta) perquè en arrossegar horitzontalment canviï la columna però no la fila?",
    answers: [
      { text: "A$1", correct: true },
      { text: "$A1", correct: false },
      { text: "$A$1", correct: false },
      { text: "A1$", correct: false }
    ]
  },
  {
    question: "Quina opció permet veure només les files d'una taula que compleixen un criteri (per exemple, només 'Administratius') sense esborrar la resta?",
    answers: [
      { text: "Filtre.", correct: true },
      { text: "Ordenació.", correct: false },
      { text: "Validació.", correct: false },
      { text: "Esquema.", correct: false }
    ]
  },
  {
    question: "La funció PROMIG calcula:",
    answers: [
      { text: "La mitjana aritmètica dels valors d'un rang.", correct: true },
      { text: "El valor que més es repeteix.", correct: false },
      { text: "La suma total dividida per dos.", correct: false },
      { text: "El valor central d'una llista ordenada.", correct: false }
    ]
  },
  {
    question: "Dins d'una taula dinàmica, on hem d'arrossegar un camp si volem que les seves dades apareguin sumades o comptades?",
    answers: [
      { text: "A l'àrea de Valors.", correct: true },
      { text: "A l'àrea de Files.", correct: false },
      { text: "A l'àrea de Columnes.", correct: false },
      { text: "A l'àrea de Filtres.", correct: false }
    ]
  },
  {
    question: "Quina funció de data ens retorna el dia, mes i any actuals segons el rellotge del sistema?",
    answers: [
      { text: "AVUI", correct: true },
      { text: "ARA", correct: false },
      { text: "DIA.ACTUAL", correct: false },
      { text: "DATA", correct: false }
    ]
  },
  {
    question: "Què permet fer l'opció 'Dividir' de la pestanya Vista?",
    answers: [
      { text: "Veure dues parts diferents del mateix full de càlcul simultàniament.", correct: true },
      { text: "Partir una cel·la en dues de més petites.", correct: false },
      { text: "Dividir el llibre en dos fitxers independents.", correct: false },
      { text: "Repartir el pressupost entre diferents departaments.", correct: false }
    ]
  },
  {
    question: "En una fórmula de Excel, quin operador s'utilitza per indicar un rang de cel·les (per exemple, des de A1 fins a A10)?",
    answers: [
      { text: "Els dos punts (:).", correct: true },
      { text: "El punt i coma (;).", correct: false },
      { text: "El guionet (-).", correct: false },
      { text: "L'espai blanc.", correct: false }
    ]
  },
  {
    question: "La funció SI.MULTIPLE és útil per a:",
    answers: [
      { text: "Avaluar diverses condicions sense haver d'anuar molts SI.", correct: true },
      { text: "Multiplicar diverses cel·les alhora.", correct: false },
      { text: "Sumar només els números parells.", correct: false },
      { text: "Crear una llista desplegable.", correct: false }
    ]
  },
  {
    question: "Per canviar el format d'un número perquè aparegui amb el símbol de l'Euro (€), utilitzarem el format de:",
    answers: [
      { text: "Comptabilitat o Moneda.", correct: true },
      { text: "Percentatge.", correct: false },
      { text: "Científic.", correct: false },
      { text: "Fracció.", correct: false }
    ]
  },
  {
    question: "Quina pestanya d'Excel conté les eines per crear gràfics i taules?",
    answers: [
      { text: "Inserció.", correct: true },
      { text: "Dades.", correct: false },
      { text: "Fórmules.", correct: false },
      { text: "Inici.", correct: false }
    ]
  },
  {
    question: "Què és una 'taula estructurada' a Excel?",
    answers: [
      { text: "Un rang de dades convertit en un objecte taula amb propietats i format propis.", correct: true },
      { text: "Qualsevol conjunt de dades escrites en files i columnes.", correct: false },
      { text: "Un full de càlcul protegit amb contrasenya.", correct: false },
      { text: "Un resum fet amb Power BI.", correct: false }
    ]
  },
  {
    question: "A la funció SI(prova_lògica; valor_si_vertader; valor_si_fals), el segon argument és:",
    answers: [
      { text: "El resultat que donarà la funció si la condició es compleix.", correct: true },
      { text: "La condició que s'ha de comprovar.", correct: false },
      { text: "El resultat si la condició no es compleix.", correct: false },
      { text: "Un missatge d'error obligatori.", correct: false }
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
