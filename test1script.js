const TEST_ID = "t1"; 
const questions = [
  {
    "question": "En quin article de la Constitució Espanyola (CE) es reconeix expressament l’autonomia de les Universitats?",
    "answers": [
      { "text": "Article 27.1", "correct": false },
      { "text": "Article 27.10", "correct": true },
      { "text": "Article 149.1.30", "correct": false },
      { "text": "Article 20.1.c", "correct": false }
    ]
  },
  {
    "question": "L'autonomia universitària es troba dins de quin títol de la Constitució?",
    "answers": [
      { "text": "Títol Preliminar.", "correct": false },
      { "text": "Títol I, Capítol II, Secció 1a.", "correct": true },
      { "text": "Títol I, Capítol II, Secció 2a.", "correct": false },
      { "text": "Títol VIII (De l'organització territorial).", "correct": false }
    ]
  },
  {
    "question": "Segons la literalitat de la CE, l'autonomia de les Universitats es reconeix:",
    "answers": [
      { "text": "Com una potestat administrativa originària.", "correct": false },
      { "text": "En els termes que la llei estableixi.", "correct": true },
      { "text": "Sota la coordinació exclusiva de l'Estat.", "correct": false },
      { "text": "Com un dret civil d'associació docent.", "correct": false }
    ]
  },
  {
    "question": "L’autonomia universitària té la naturalesa jurídica de:",
    "answers": [
      { "text": "Principi rector de la política social i econòmica.", "correct": false },
      { "text": "Dret fonamental (Secció 1a, Capítol II del Títol I).", "correct": true },
      { "text": "Dret i deure dels ciutadans (Secció 2a, Capítol II del Títol I).", "correct": false },
      { "text": "Garantia institucional no prestacional.", "correct": false }
    ]
  },
  {
    "question": "Quin d'aquests recursos protegeix el dret a l’autonomia universitària davant el Tribunal Constitucional?",
    "answers": [
      { "text": "Conflicte positiu de competències.", "correct": false },
      { "text": "Recurs d'emparament.", "correct": false },
      { "text": "Recurs extraordinari de revisió.", "correct": false },
      { "text": "Qüestió d'inconstitucionalitat interposada per la pròpia Universitat.", "correct": true }
    ]
  },
  {
    "question": "La dimensió normativa de l'autonomia universitària inclou:",
    "answers": [
      { "text": "La potestas legislativa delegada per l'Estat.", "correct": false },
      { "text": "L'elaboració i l'aprovació dels seus propis Estatuts.", "correct": true },
      { "text": "L'aprovació de normes amb rang de Llei Ordinària.", "correct": false },
      { "text": "La capacitat de dictar reglaments de caràcter bàsic estatal.", "correct": false }
    ]
  },
  {
    "question": "L'article 27 de la CE estableix que l'educació té per objecte:",
    "answers": [
      { "text": "El ple desenvolupament de la personalitat humana en el respecte als principis democràtics.", "correct": true },
      { "text": "La lliure recerca de la veritat i la transmissió de la cultura universal.", "correct": false },
      { "text": "La garantia de la llibertat de càtedra en tots els nivells educatius.", "correct": false },
      { "text": "La formació integral per a l'exercici de les professions regulades.", "correct": false }
    ]
  },
  {
    "question": "La llibertat de càtedra es diferencia de l'autonomia universitària en què:",
    "answers": [
      { "text": "L'autonomia és un dret de configuració legal i la llibertat de càtedra no.", "correct": false },
      { "text": "La llibertat de càtedra és un dret individual i l'autonomia és una garantia institucional i dret de la institució.", "correct": true },
      { "text": "L'autonomia només s'aplica a la recerca i la llibertat de càtedra a la docència.", "correct": false },
      { "text": "Són conceptes intercanviables segons la doctrina del Tribunal Suprem.", "correct": false }
    ]
  },
  {
    "question": "L'autonomia de les universitats inclou l'elecció dels seus òrgans de govern?",
    "answers": [
      { "text": "Sí, és la dimensió auto-organitzativa de l'autonomia.", "correct": true },
      { "text": "No, el Rector és un òrgan nomenat pel Govern de la Generalitat.", "correct": false },
      { "text": "Només si els Estatuts no preveuen la participació del Consell Social.", "correct": false },
      { "text": "Sí, però els representants han de ser validats pel Ministeri.", "correct": false }
    ]
  },
  {
    "question": "L'autonomia universitària permet a la UB, en l'àmbit financer:",
    "answers": [
      { "text": "L'exempció total de qualsevol control de la Sindicatura de Comptes.", "correct": false },
      { "text": "L'elaboració, aprovació i gestió dels seus propis pressupostos i l'administració dels seus béns.", "correct": true },
      { "text": "La creació de figures impositives pròpies per al seu finançament.", "correct": false },
      { "text": "La lliure disposició de fons sense subjecció a la Llei de Pressupostos de la CCAA.", "correct": false }
    ]
  },
  {
    "question": "Quin d'aquestes facultats forma part del contingut acadèmic de l'autonomia?",
    "answers": [
      { "text": "L'elaboració i aprovació de plans d'estudi i d'investigació.", "correct": true },
      { "text": "L'homologació de títols estrangers de manera unilateral.", "correct": false },
      { "text": "La fixació discrecional dels preus públics per sobre del límit estatal.", "correct": false },
      { "text": "La reserva de plaça per a col·lectius sense títol habilitant.", "correct": false }
    ]
  },
  {
    "question": "Segons l'article 27.2 de la CE, el límit i objectiu de l'ensenyament és:",
    "answers": [
      { "text": "El respecte als principis democràtics de convivència i als drets i llibertats fonamentals.", "correct": true },
      { "text": "La subjecció a la planificació general de l'Estat en matèria econòmica.", "correct": false },
      { "text": "L'equilibri entre la llibertat religiosa i la laïcitat acadèmica.", "correct": false },
      { "text": "El compliment dels objectius fixats pel Consell d'Universitats.", "correct": false }
    ]
  },
  {
    "question": "L'ajuda de l'Estat als centres docents que reuneixin els requisits legals es recull a l'article:",
    "answers": [
      { "text": "27.9 de la CE.", "correct": true },
      { "text": "27.7 de la CE.", "correct": false },
      { "text": "149.3 de la CE.", "correct": false },
      { "text": "20.2 de la CE.", "correct": false }
    ]
  },
  {
    "question": "L'autonomia universitària és, segons el Tribunal Constitucional:",
    "answers": [
      { "text": "Una dimensió de la llibertat acadèmica que protegeix la institució de pressions externes.", "correct": true },
      { "text": "Un dret que permet l'incompliment de les lleis generals del treball.", "correct": false },
      { "text": "Una competència delegada de les Comunitats Autònomes.", "correct": false },
      { "text": "Un dret exclusiu dels alumnes a participar en la gestió.", "correct": false }
    ]
  },
  {
    "question": "El procediment per a la creació d'una Universitat Pública requereix:",
    "answers": [
      { "text": "Llei del Parlament de la Comunitat Autònoma o de les Corts Generals.", "correct": true },
      { "text": "Un Decret Llei en casos d'extraordinària i urgent necessitat.", "correct": false },
      { "text": "Un conveni multilateral entre el Consell Social i el Rectorat.", "correct": false },
      { "text": "Ordre Ministerial publicada al BOE i al DOGC.", "correct": false }
    ]
  },
  {
    "question": "Quin rang ha de tenir la llei que reguli el desenvolupament del dret fonamental a l'educació?",
    "answers": [
      { "text": "Llei Orgànica.", "correct": true },
      { "text": "Llei de Bases.", "correct": false },
      { "text": "Llei Marc.", "correct": false },
      { "text": "Llei d'Harmonització.", "correct": false }
    ]
  },
  {
    "question": "La titularitat del dret a l'autonomia universitària correspon a:",
    "answers": [
      { "text": "La Universitat com a institució, tant pública com privada.", "correct": true },
      { "text": "Només a les universitats creades directament per l'Estat.", "correct": false },
      { "text": "Exclusivament als membres del Claustre Universitari.", "correct": false },
      { "text": "A la comunitat autònoma on resideix la universitat.", "correct": false }
    ]
  },
  {
    "question": "L'article 27.5 de la CE diu que els poders públics garanteixen el dret a l'educació mitjançant:",
    "answers": [
      { "text": "Una programació general de l'ensenyament, amb participació efectiva de tots els sectors afectats.", "correct": true },
      { "text": "L'establiment d'un cos únic de funcionaris docents a tot l'Estat.", "correct": false },
      { "text": "La gratuïtat total de tots els nivells, inclòs el postgrau.", "correct": false },
      { "text": "La gestió compartida amb les entitats locals i patronals.", "correct": false }
    ]
  },
  {
    "question": "El dret a la creació de centres docents (Art. 27.6):",
    "answers": [
      { "text": "Es reconeix a les persones físiques i jurídiques, dins el respecte als principis constitucionals.", "correct": true },
      { "text": "És una facultat exclusiva de les confessions religioses.", "correct": false },
      { "text": "Requereix una autorització prèvia del Tribunal Suprem.", "correct": false },
      { "text": "Està limitat per la planificació urbanística municipal.", "correct": false }
    ]
  },
  {
    "question": "En relació al personal, l'autonomia universitària permet:",
    "answers": [
      { "text": "La selecció, formació i promoció del personal docent i investigador i d'administració.", "correct": true },
      { "text": "L'exempció d'aplicar el règim disciplinari dels funcionaris públics.", "correct": false },
      { "text": "La contractació laboral sense publicitat ni concurrència.", "correct": false },
      { "text": "El nomenament de professors emèrits sense títol de doctor.", "correct": false }
    ]
  },
  {
    "question": "L'elaboració de les normes de convivència a la universitat s'emmarca en:",
    "answers": [
      { "text": "La capacitat d'autogovern i la potestat reglamentària interna.", "correct": true },
      { "text": "La Llei d'Enjudiciament Criminal per analogia.", "correct": false },
      { "text": "La normativa estatal sobre seguretat privada.", "correct": false },
      { "text": "La potestat sancionadora delegada del Ministeri d'Interior.", "correct": false }
    ]
  },
  {
    "question": "L'autonomia universitària implica que la UB pot:",
    "answers": [
      { "text": "Contractar amb entitats públiques o privades per a la realització de treballs científics o tècnics.", "correct": true },
      { "text": "Cedir de franc el seu patrimoni a entitats amb ànim de lucre.", "correct": false },
      { "text": "Actuar al marge de la Llei de Contractes del Sector Públic.", "correct": false },
      { "text": "Subscriure tractats internacionals de cooperació acadèmica sense l'Estat.", "correct": false }
    ]
  },
  {
    "question": "L'article 27.7 de la CE reconeix el dret d'intervenció en el control i gestió dels centres sostinguts amb fons públics a:",
    "answers": [
      { "text": "Professors, pares i, si escau, alumnes.", "correct": true },
      { "text": "Sindicats, patronals i administració local.", "correct": false },
      { "text": "L'Estat mitjançant la Intervenció General.", "correct": false },
      { "text": "Només al Claustre universitari.", "correct": false }
    ]
  },
  {
    "question": "L'autonomia universitària pot ser limitada pel legislador?",
    "answers": [
      { "text": "Sí, però sense afectar el seu contingut essencial i per Llei Orgànica.", "correct": true },
      { "text": "No, perquè és un dret preconstitucional de caràcter absolut.", "correct": false },
      { "text": "Sí, mitjançant decrets reguladors de l'Administració de l'Estat.", "correct": false },
      { "text": "Només per ordre del Tribunal de Comptes en cas de dèficit.", "correct": false }
    ]
  },
  {
    "question": "L'aprovació del pressupost de la UB correspon a:",
    "answers": [
      { "text": "El Consell Social, a proposta del Consell de Govern.", "correct": true },
      { "text": "El Rectorat, un cop oït el Consell de l'Alumnat.", "correct": false },
      { "text": "La Comissió d'Economia del Parlament de Catalunya.", "correct": false },
      { "text": "El Claustre Universitari per majoria absoluta.", "correct": false }
    ]
  },
  {
    "question": "L'ensenyament bàsic és, segons la CE:",
    "answers": [
      { "text": "Obligatori i gratuït.", "correct": true },
      { "text": "Laic i finançat íntegrament per l'Estat.", "correct": false },
      { "text": "Gratuït només en centres de titularitat pública.", "correct": false },
      { "text": "Dret irrenunciable i voluntari.", "correct": false }
    ]
  },
  {
    "question": "La llibertat d'estudi s'entén com una vessant del dret a l'educació de:",
    "answers": [
      { "text": "L'article 27 de la CE.", "correct": true },
      { "text": "L'article 10.1 (dignitat de la persona).", "correct": false },
      { "text": "L'article 16 (llibertat ideològica).", "correct": false },
      { "text": "L'article 44.1 (accés a la cultura).", "correct": false }
    ]
  },
  {
    "question": "L'autonomia financera de les universitats significa que:",
    "answers": [
      { "text": "Tenen autonomia de despesa i gestió subjecta a rendició de comptes.", "correct": true },
      { "text": "Poden demanar crèdit sense límit d'endeutament públic.", "correct": false },
      { "text": "No estan subjectes a la Llei General Pressupostària.", "correct": false },
      { "text": "Poden fixar el sou dels seus funcionaris sense límit legal.", "correct": false }
    ]
  },
  {
    "question": "Quina d'aquestes és una característica de l'autonomia universitària segons el TC?",
    "answers": [
      { "text": "És una garantia del pluralisme ideològic i la llibertat acadèmica.", "correct": true },
      { "text": "És un dret de sobirania territorial interior.", "correct": false },
      { "text": "És una competència compartida entre Rector i Degà.", "correct": false },
      { "text": "És una potestat exclusiva per a les universitats amb recerca bàsica.", "correct": false }
    ]
  },
  {
    "question": "L'obligació dels poders públics d'inspeccionar i homologar el sistema educatiu es troba a:",
    "answers": [
      { "text": "L'article 27.8 de la CE.", "correct": true },
      { "text": "L'article 149.1.1 de la CE.", "correct": false },
      { "text": "L'article 27.3 de la CE.", "correct": false },
      { "text": "L'article 9.2 de la CE.", "correct": false }
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
