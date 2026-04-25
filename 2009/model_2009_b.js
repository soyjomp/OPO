const TEST_ID = "e2009b"; 
const questions = [
  {
    question: "El Comitè de Seguretat i Salut, com a òrgan de participació dels treballadors en matèria de prevenció de riscos laborals:",
    answers: [
      { text: "És un òrgan paritari i col·legiat destinat a la consulta regular i periòdica de les actuacions de l'empresa en prevenció.", correct: true },
      { text: "Ha d'estar format per un mínim de cinquanta treballadors.", correct: false },
      { text: "Ha d'estar format exclusivament pels delegats de prevenció.", correct: false },
      { text: "Ha d'estar format pels delegats sindicals de forma única.", correct: false }
    ]
  },
  {
    question: "Quin d'aquests drets pot veure's limitat o suspès segons la Constitució espanyola en determinats estats d'excepció?",
    answers: [
      { text: "El dret de vaga.", correct: true },
      { text: "El dret al treball.", correct: false },
      { text: "El dret a l'habitatge.", correct: false },
      { text: "La Constitució no permet suspendre cap dret fonamental en cap cas.", correct: false }
    ]
  },
  {
    question: "Segons l'Estatut de la UB, en la Relació de Llocs de Treball (RLT) del PTGAS, s'hi han d'explicitar per a cadascun dels llocs almenys:",
    answers: [
      { text: "La denominació, la unitat a la qual està adscrit, els requisits essencials per ocupar-lo i les retribucions complementàries.", correct: true },
      { text: "La denominació i els requisits essencials per ocupar-lo.", correct: false },
      { text: "La denominació, la unitat a la qual està adscrit i els requisits essencials per ocupar-lo.", correct: false },
      { text: "La denominació, els requisits essencials per ocupar-lo i les retribucions bàsiques.", correct: false }
    ]
  },
  {
    question: "Exhaureixen la via administrativa i són impugnables directament davant la jurisdicció contenciosa administrativa a la UB:",
    answers: [
      { text: "Les resolucions del rector.", correct: false },
      { text: "Els acords del Claustre Universitari.", correct: false },
      { text: "Els acords del Consell de Govern i del Consell Social.", correct: false },
      { text: "Totes les respostes anteriors són vàlides.", correct: true }
    ]
  },
  {
    question: "A quina classe de personal correspon el qui presta serveis amb caràcter transitori per raons d'urgència o necessitat en places reservades a funcionaris?",
    answers: [
      { text: "Personal funcionari de carrera.", correct: false },
      { text: "Personal eventual.", correct: false },
      { text: "Personal funcionari interí.", correct: true },
      { text: "Personal laboral fix.", correct: false }
    ]
  },
  {
    question: "Segons la Llei 39/2015, quan les normes no determinen el termini màxim per resoldre i notificar, el termini per defecte és de:",
    answers: [
      { text: "Tres anys.", correct: false },
      { text: "Tres mesos.", correct: true },
      { text: "Cinc anys.", correct: false },
      { text: "Sis mesos.", correct: false }
    ]
  },
  {
    question: "Segons l'Estatut de la UB, l'organització de les tutories acadèmiques depèn de:",
    answers: [
      { text: "Les juntes de facultats.", correct: false },
      { text: "Els degans.", correct: false },
      { text: "Els consells d'estudis.", correct: true },
      { text: "Les comissions acadèmiques delegades de la junta de facultat.", correct: false }
    ]
  },
  {
    question: "Segons la Llei 40/2015, els principis de l'organització i funcionament de les administracions públiques inclouen:",
    answers: [
      { text: "Eficàcia, jerarquia, descentralització, desconcentració i coordinació.", correct: true },
      { text: "Concentració, eficàcia i jerarquia.", correct: false },
      { text: "Descentralització i delegació única.", correct: false },
      { text: "Competència, centralització i avocació.", correct: false }
    ]
  },
  {
    question: "Segons l'Estatut d'autonomia de Catalunya, la Generalitat té competència sobre la regulació del règim d'accés a la universitat de tipus:",
    answers: [
      { text: "Executiva.", correct: false },
      { text: "Exclusiva.", correct: false },
      { text: "Compartida.", correct: true },
      { text: "No hi té competència.", correct: false }
    ]
  },
  {
    question: "Com s'han de practicar les notificacions administratives preferentment segons la Llei 39/2015?",
    answers: [
      { text: "Per mitjans electrònics i, en tot cas, quan l'interessat hi estigui obligat.", correct: true },
      { text: "Obligatòriament en format electrònic per a tots els ciutadans sense excepció.", correct: false },
      { text: "Sempre per mitjà de publicitat en els diaris oficials.", correct: false },
      { text: "Lliurant-los en mà a la persona interessada exclusivament.", correct: false }
    ]
  },
  {
    question: "El secretari d'un òrgan col·legiat que no és membre de ple dret d'aquest òrgan:",
    answers: [
      { text: "Sempre té veu i vot.", correct: false },
      { text: "Té veu, però no té vot.", correct: true },
      { text: "Té vot, però no té veu.", correct: false },
      { text: "No pot participar de cap manera en les sessions.", correct: false }
    ]
  },
  {
    question: "En la delegació de competències (Llei 40/2015):",
    answers: [
      { text: "Es transfereix la titularitat de la competència.", correct: false },
      { text: "Es transfereix l'exercici de la competència, però no la titularitat.", correct: true },
      { text: "Es transfereix tant la titularitat com l'exercici.", correct: false },
      { text: "No es transfereix l'exercici, només la gestió material.", correct: false }
    ]
  },
  {
    question: "Segons la Llei 39/2015, quan es presumeix que els actes administratius són vàlids i produeixen efectes?",
    answers: [
      { text: "Al cap de deu dies des de la data en què es dicten.", correct: false },
      { text: "Des de la data en què es dicten, llevat que es disposi una altra cosa.", correct: true },
      { text: "Des de l'endemà del dia en què es dicten.", correct: false },
      { text: "Al cap de deu dies de la notificació.", correct: false }
    ]
  },
  {
    question: "D'acord amb el Decret Legislatiu 1/1997, el retard o descuit en el compliment de les funcions que no afecti greument el servei es considera:",
    answers: [
      { text: "Una falta greu.", correct: false },
      { text: "Una falta molt greu.", correct: false },
      { text: "No està tipificat.", correct: false },
      { text: "Una falta lleu.", correct: true }
    ]
  },
  {
    question: "En els procediments iniciats a sol·licitud de l'interessat, si l'Administració no contesta en termini, el silenci s'entén estimat:",
    answers: [
      { text: "Sempre, per norma general, excepte que una norma amb rang de llei o dret de la UE estableixi el contrari.", correct: true },
      { text: "Sempre és negatiu en recursos d'alçada.", correct: false },
      { text: "Només quan es tracti de procediments sancionadors.", correct: false },
      { text: "Mai, el silenci és sempre desestimatori.", correct: false }
    ]
  },
  {
    question: "D'acord amb l'Estatut d'autonomia de Catalunya, l'organització territorial de Catalunya està constituïda per:",
    answers: [
      { text: "Municipis i diputacions, sense opció a altres ens.", correct: false },
      { text: "Municipis i vegueries, i comarques en l'àmbit supramunicipal, amb l'opció de creació d'altres ens.", correct: true },
      { text: "Municipis i províncies exclusivament.", correct: false },
      { text: "Diputacions i vegueries sense municipis.", correct: false }
    ]
  },
  {
    question: "Els títols universitaris oficials amb validesa en tot el territori nacional són expedits:",
    answers: [
      { text: "Pel rector de cada universitat.", correct: false },
      { text: "Pel rector de cada universitat en nom del Rei.", correct: true },
      { text: "Pel conseller de Recerca i Universitats.", correct: false },
      { text: "Pel degà de cada facultat.", correct: false }
    ]
  },
  {
    question: "Segons la Llei 39/2015, si en el primer intent de notificació al domicili no hi ha ningú, cal:",
    answers: [
      { text: "Citar la persona interessada perquè la reculli a l'oficina.", correct: false },
      { text: "Repetir l'intent una sola vegada en una hora diferent dins dels tres dies següents.", correct: true },
      { text: "Fer tres intents al mateix domicili en la mateixa franja horària.", correct: false },
      { text: "Publicar-ho directament al BOE o DOGC.", correct: false }
    ]
  },
  {
    question: "El sistema general de provisió de llocs de treball del PTGAS funcionari és:",
    answers: [
      { text: "El concurs.", correct: true },
      { text: "El concurs oposició per a tots els casos de provisió.", correct: false },
      { text: "La permuta obligatòria.", correct: false },
      { text: "La negociació col·lectiva sense convocatòria.", correct: false }
    ]
  },
  {
    question: "Respecte a l'eficàcia dels actes administratius segons la Llei 39/2015:",
    answers: [
      { text: "Tots els actes produeixen efectes des del moment en què es dicten sempre.", correct: false },
      { text: "L'eficàcia queda demorada quan estigui supeditada a la notificació, publicació o aprovació superior.", correct: true },
      { text: "L'eficàcia comença sempre a l'any de la seva signatura.", correct: false },
      { text: "Cap de les respostes anteriors no és correcta.", correct: false }
    ]
  },
  {
    question: "D'acord amb la LOSU (Llei 2/2023), els cossos docents universitaris estan formats per:",
    answers: [
      { text: "Catedràtics d'universitat, titulars d'universitat i catedràtics d'escola universitària.", correct: false },
      { text: "Catedràtics d'universitat i professors titulars d'universitat.", correct: true },
      { text: "Catedràtics d'universitat i professors emèrits.", correct: false },
      { text: "Catedràtics d'universitat, titulars i professors lectors.", correct: false }
    ]
  },
  {
    question: "Segons la Llei 39/2015, el termini màxim que pot fixar una norma per resoldre un procediment no pot excedir de:",
    answers: [
      { text: "Tres mesos invariables.", correct: false },
      { text: "Sis mesos, llevat que una llei o dret de la UE n'estableixi un de superior.", correct: true },
      { text: "Nou mesos.", correct: false },
      { text: "No hi ha límit màxim legal.", correct: false }
    ]
  },
  {
    question: "Disposar d'un servei de prevenció de riscos laborals és:",
    answers: [
      { text: "Opcional per a l'empresa.", correct: false },
      { text: "Una obligació de l'empresari (la Universitat) per garantir la protecció de la seguretat i la salut.", correct: true },
      { text: "Obligatori només si hi ha més de 500 treballadors.", correct: false },
      { text: "Opcional per decisió dels representants dels treballadors.", correct: false }
    ]
  },
  {
    question: "Segons l'Estatut de la UB, quin d'aquests NO és un dret del personal tècnic, de gestió i d'administració i serveis (PTGAS)?",
    answers: [
      { text: "Decidir de forma unilateral el contingut de la RLT.", correct: true },
      { text: "Participar en els òrgans de govern i de representació.", correct: false },
      { text: "Associar-se i sindicar-se lliurement.", correct: false },
      { text: "Participar en cursos de formació i perfeccionament.", correct: false }
    ]
  },
  {
    question: "Què ha d'incloure la Relació de Llocs de Treball (RLT)?",
    answers: [
      { text: "Només els llocs de treball ocupats.", correct: false },
      { text: "Només els llocs de personal eventual.", correct: false },
      { text: "Només els llocs de personal funcionari.", correct: false },
      { text: "Tots els llocs de treball de funcionaris, laborals i eventuals existents.", correct: true }
    ]
  },
  {
    question: "Qui elegeix el Síndic de Greuges de Catalunya?",
    answers: [
      { text: "El president de la Generalitat.", correct: false },
      { text: "El Parlament de Catalunya, per majoria de tres cinquenes parts.", correct: true },
      { text: "La Mesa del Parlament.", correct: false },
      { text: "El Tribunal Superior de Justícia de Catalunya.", correct: false }
    ]
  },
  {
    question: "Segons l'Estatut de la UB, no és competència del Claustre Universitari:",
    answers: [
      { text: "Elaborar i modificar l'Estatut.", correct: false },
      { text: "Elegir el Síndic de Greuges de la UB.", correct: false },
      { text: "Formular preguntes al Consell de Direcció.", correct: false },
      { text: "Elaborar i difondre les polítiques de prevenció de riscos laborals i medi ambient.", correct: true }
    ]
  },
  {
    question: "Què s'entén per autenticació en matèria de protecció de dades i seguretat de la informació?",
    answers: [
      { text: "La còpia de seguretat de les dades.", correct: false },
      { text: "El document informatiu del tractament.", correct: false },
      { text: "El procediment de comprovació de la identitat d'un usuari.", correct: true },
      { text: "La compulsa o compravenda de documents.", correct: false }
    ]
  },
  {
    question: "Segons el TREBEP, els empleats públics han d'actuar respectant els principis de:",
    answers: [
      { text: "Objectivitat, neutralitat, imparcialitat i confidencialitat.", correct: false },
      { text: "Honradesa, dedicació al servei públic i austeritat.", correct: false },
      { text: "Exemplaritat, accessibilitat i honradesa.", correct: false },
      { text: "Totes les respostes anteriors són vàlides com a part dels principis ètics i de conducta.", correct: true }
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
