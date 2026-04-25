const TEST_ID = "e2022b"; 
const questions = [
  { question: "Les retribucions dels funcionaris de carrera es classifiquen en:", answers: [
      { text: "Bàsiques i complementàries", correct: true },
      { text: "Bàsiques i extraordinàries", correct: false },
      { text: "Bàsiques, complementàries i extraordinàries", correct: false },
      { text: "Sou i triennis", correct: false },
  ]},
  { question: "Què és el CSV en la signatura electrònica?", answers: [
      { text: "Codi Segur de Verificació", correct: true },
      { text: "Codi Sintàctic de Vigilància", correct: false },
      { text: "Codi Seguer per Viatjar", correct: false },
      { text: "Codi simple de Verificació", correct: false },
  ]},
  { question: "Quin principi d’organització administrativa pot ser aplicat tant dins d’una mateixa Administració Pública com entre diferents Administracions Públiques:", answers: [
      { text: "Jerarquia", correct: false },
      { text: "Descentralització", correct: false },
      { text: "Desconcentració", correct: false },
      { text: "Coordinació i cooperació", correct: true },
  ]},
 {"question": "D’acord amb la Llei Orgànica 2/2023, de 22 de març, del Sistema Universitari (LOSU), la comunitat universitària és formada per:",
  "answers": [
    { "text": "L'estudiantat, el personal docent i investigador, i el personal tècnic, de gestió i d'administració i serveis.", "correct": true },
    { "text": "Els estudiants, el personal docent i investigador i el personal d’administració i serveis.", "correct": false },
    { "text": "L'estudiantat, els investigadors de les universitats i el personal d'administració i serveis.", "correct": false },
    { "text": "Els estudiants, el professorat i el personal tècnic, de gestió i d'administració i serveis.", "correct": false }
  ]},
  {
  "question": "D’acord amb la Llei 1/2003, de 19 de febrer, d’Universitats de Catalunya (LUC), la comunitat universitària de Catalunya és formada pels:",
  "answers": [
    { "text": "Estudiants, el personal docent i investigador i el personal tècnic, de gestió i d’administració i serveis.", "correct": false },
    { "text": "Estudiants, el personal docent i investigador, els investigadors de les universitats i el personal d’administració i serveis.", "correct": true },
    { "text": "L’estudiantat, el personal docent i investigador i el personal d’administració i serveis.", "correct": false },
    { "text": "Estudiants, els investigadors de les universitats i el personal tècnic, de gestió i d’administració i serveis.", "correct": false }
  ]},
  { question: "Un funcionari crea un fitxer per a la gestió pròpia de la unitat. En cap cas es compartirà amb un tercer. Des del punt de vista de la legalitat vigent en matèria de protecció de dades:", answers: [
      { text: "És un tractament de dades exempt d’aplicar la normativa", correct: false },
      { text: "És un tractament de dades públiques exempt d’aplicar la normativa", correct: false },
      { text: "És un tractament de dades personals subjecte a la normativa", correct: true },
      { text: "No és un tractament de dades", correct: false },
  ]},
  { question: "Segons l’Estatut de la Universitat de Barcelona, el Síndic de Greuges de la Universitat de Barcelona:", answers: [
      { text: "Té un mandat de quatre anys i no pot ser reelegit", correct: false },
      { text: "Té un mandat de quatre anys i pot ser reelegit una única vegada", correct: true },
      { text: "Té un mandat de quatre anys i pot ser reelegit de forma indefinida", correct: false },
      { text: "Té un mandat de cinc anys", correct: false },
  ]},
  { question: "D’acord amb la legislació vigent, poden oferir títols de grau:", answers: [
      { text: "Només les universitats públiques", correct: false },
      { text: "Tant les universitats públiques com les privades", correct: true },
      { text: "Les universitats públiques qualsevol grau i les universitats privades només els graus que tenen atribucions professionals", correct: false },
      { text: "Les universitats públiques qualsevol grau i les universitats privades tots excepte la branca de ciències de la salut", correct: false },
  ]},
  { question: "Els serveis públics mitjançant l’Administració electrònica són accessibles per la ciutadania?", answers: [
      { text: "De dilluns a divendres en horari de matí", correct: false },
      { text: "Només els dies laborables", correct: false },
      { text: "24 hores els 7 dies de la setmana", correct: true },
      { text: "24 hores excepte diumenge", correct: false },
  ]},
  { question: "L’òrgan col·legiat de govern d’una facultat és:", answers: [
      { text: "El degà", correct: false },
      { text: "La Junta de Facultat", correct: true },
      { text: "La Comissió de la Facultat", correct: false },
      { text: "La Junta de Govern de la Facultat", correct: false },
  ]},
  { question: "D’acord amb la legislació vigent, la durada dels ensenyaments de grau és de:", answers: [
      { "text": "180 crèdits en tots els casos.", "correct": false },
      { "text": "240 crèdits amb caràcter general.", "correct": true },
      { "text": "Un mínim de 300 crèdits.", "correct": false },
      { "text": "Entre 180 i 240 crèdits, a elecció de la universitat.", "correct": false },
  ]},
  { question: "A la Llei Orgànica 2/2023 (LOSU), es regulen els següents col·lectius:", answers: [
      { text: "Només estudiants", correct: false },
      { text: "Només professorat i PAS", correct: false },
      { text: "Estudiants, professorat docent i investigador, i PTGAS", correct: true },
      { text: "Estudiants, professorat, PAS i personal de les fundacions creades per les universitats", correct: false },
  ]},
  { question: "D’acord amb la Llei 1/2003, de 19 de febrer, d’Universitats de Catalunya correspon l’impuls i el desenvolupament del sistema universitari de Catalunya:", answers: [
      { text: "A les universitats, exclusivament", correct: false },
      { text: "A la Generalitat de Catalunya, exclusivament", correct: false },
      { text: "A les universitats i a la Generalitat de Catalunya", correct: true },
      { text: "A les universitats, la Generalitat de Catalunya i al Govern espanyol", correct: false },
  ]},
  { question: "D’acord amb la legislació vigent, els títols universitaris són expedits per:", answers: [
      { text: "Pel rector de cada universitat", correct: false }, // anul·lada
      { text: "Pel rector de cada universitat en nom del rei", correct: true },
      { text: "Pel rector de cada universitat en nom del president de cada comunitat autònoma", correct: false },
      { text: "Pel degà de cada facultat", correct: false },
  ]},
  { question: "No és un principi en el qual es fonamenta l’ordenació del sistema universitari de Catalunya:", answers: [
      { text: "Autonomia universitària", correct: false },
      { text: "Igualtat d’oportunitats en l’accés i la permanència en la Universitat", correct: false },
      { text: "Contribució a l’aprenentatge dels menors d’edat", correct: true },
      { text: "El foment de la recerca científica", correct: false },
  ]},
  { question: "De qui és competència 'elaborar i difondre les polítiques de prevenció de riscos laborals i de protecció del medi ambient de la Universitat de Barcelona'?", answers: [
      { text: "El Rector o Rectora", correct: false },
      { text: "El Servei de PAS", correct: false },
      { text: "El Consell de Govern", correct: true },
      { text: "Els departaments", correct: false },
  ]},
  { question: "L’article 27.10 de la Constitució Espanyola reconeix:", answers: [
      { text: "L’autonomia plena de les universitats", correct: false },
      { text: "L’autonomia de les universitats en els termes que estableixi la llei", correct: true },
      { text: "L’autonomia de les universitats públiques en els termes que estableixi la llei", correct: false },
      { text: "No fa referència a l’autonomia de les universitats", correct: false },
  ]},
  { question: "El claustre universitari:", answers: [
      { text: "És el màxim òrgan de govern de la Universitat", correct: false },
      { text: "És l’òrgan de participació de la societat en la Universitat", correct: false },
      { text: "És el màxim òrgan de representació de la comunitat universitària", correct: true },
      { text: "És el màxim òrgan consultiu de la comunitat universitària", correct: false },
  ]},
  { question: "Quins documents no són registrables?", answers: [
      { text: "Trameses entre unitats", correct: true },
      { text: "Sol·licituds", correct: false },
      { text: "Recursos", correct: false },
      { text: "Reclamacions", correct: false },
  ]},
  { question: "A la Universitat de Barcelona a qui correspon prendre les relacions relatives a les situacions administratives i al règim disciplinari:", answers: [
      { text: "Al Gerent o la Gerenta", correct: false },
      { text: "Al Director o Directora de Recursos Humans", correct: false },
      { text: "Al Rector o la Rectora", correct: true },
      { text: "Al Cap o la Cap de personal", correct: false },
  ]},
  { question: "Quina d’aquestes afirmacions és correcte:", answers: [
      { text: "L’Administració Pública té personalitat jurídica", correct: true },
      { text: "L’Òrgan administratiu té personalitat jurídica", correct: false },
      { text: "La Unitat administrativa vincula a l’Administració Pública", correct: false },
      { text: "L’òrgan administratiu no vincula a l’Administració Pública", correct: false },
  ]},
  { question: "Segons l’Estatut de la UB, dirigir i organitzar el Registre de la Universitat de Barcelona és competència de:", answers: [
      { text: "El/la Gerent/a", correct: false },
      { text: "El/La Rector/a", correct: false },
      { text: "El/La Secretari/a General", correct: true },
      { text: "El/La Director/a del Registre", correct: false },
  ]},
  { question: "Segons el preàmbul de la llei 19/2014 de transparència, accés a la informació pública i bon govern, quin és el seu principal àmbit subjectiu d’aplicació?", answers: [
      { text: "La Llei té com a principal àmbit subjectiu d’aplicació les administracions públiques de Catalunya", correct: true },
      { text: "Al preàmbul no es defineix l’àmbit subjectiu d’aplicació", correct: false },
      { text: "La Llei té com a principal àmbit subjectiu d’aplicació totes les administracions públiques", correct: false },
      { text: "La llei té com a principal àmbit subjectiu d’aplicació les administracions públiques de Catalunya, excepte els ens locals", correct: false },
  ]},
  { question: "Quin d’aquests és un òrgan col·legiat de la Universitat de Barcelona:", answers: [
      { text: "Rector", correct: false },
      { text: "Director de Departament", correct: false },
      { text: "Claustre", correct: true },
      { text: "Administrador de centre", correct: false },
  ]},
  { question: "Els actes administratius de contingut impossible són:", answers: [
      { text: "Anul·lables", correct: false },
      { text: "Actes amb defectes que es poden esmenar", correct: false },
      { text: "Actes que només produeixen efectes parcials", correct: false },
      { text: "Nuls de ple dret", correct: true },
  ]},
  { question: "Qui presideix la Comissió d’Igualtat de la Universitat de Barcelona?", answers: [
      { text: "El director o directora de Relacions Laborals", correct: false },
      { text: "La presidència és rotatòria", correct: false },
      { text: "El/La cap de Recursos Humans", correct: false },
      { text: "El rector o rectora, o la persona que delegui", correct: true },
  ]},
  { question: "Quin és el termini assenyalat per la Llei 39/2015, del procediment administratiu comú de les administracions públiques, per a realitzar una notificació per part de l’Administració:", answers: [
      { text: "15 dies", correct: false },
      { text: "10 dies", correct: true },
      { text: "20 dies", correct: false },
      { text: "30 dies", correct: false },
  ]},
  { question: "Quines d’aquestes categories és de professorat funcionari?", answers: [
      { text: "Professorat lector", correct: false },
      { text: "Professorat titular d’universitat", correct: true },
      { text: "Professorat associat", correct: false },
      { text: "Professorat col·laborador", correct: false },
  ]},
  { question: "Contra quin acte administratiu es pot recórrer?", answers: [
      { text: "Acte resolutori i acte de tràmit qualificat", correct: true },
      { text: "Acte resolutori solament", correct: false },
      { text: "Acte de tràmit solament", correct: false },
      { text: "Cap de les anteriors és correcte", correct: false },
  ]},
  { question: "El procediment administratiu s’inicia:", answers: [
      { text: "Amb el tràmit d’audiència prèvia a la persona interessada", correct: false },
      { text: "D’ofici o a sol·licitud de la persona interessada", correct: true },
      { text: "Sempre d’ofici, per acord de l’òrgan competent", correct: false },
      { text: "Sempre a petició de la persona interessada", correct: false },
  ]},
  { question: "En l’apartat “Igualtat en el treball”, corresponent a l’eix “Igualtat en el treball i en la vida acadèmica, quin dels següents apartats no és una línia principal?", answers: [
      { text: "Medi ambient", correct: true },
      { text: "Accés, promoció i formació", correct: false },
      { text: "Organització del treball i condicions de treball", correct: false },
      { text: "Organització del temps, corresponsabilitat i conciliació", correct: false },
  ]},
  { question: "Quin és el nom del programa de registre de la UB?", answers: [
      { text: "ERES", correct: true },
      { text: "ARES", correct: false },
      { text: "UBin", correct: false },
      { text: "Registrum", correct: false },
  ]},
  { question: "No és un recurs administratiu:", answers: [
      { text: "El recurs extraordinari de reposició", correct: false }, // anul·lada
      { text: "El recurs de reposició", correct: false },
      { text: "El recurs d’alçada", correct: false },
      { text: "El recurs simple de contingència", correct: true },
  ]},
  { question: "Segons el TREBEP quina d’aquestes afirmacions és correcta. Les Administracions públiques estructuraran la seva organització mitjançant:", answers: [
      { text: "Relacions de llocs de treball", correct: true },
      { text: "Oferta d’ocupació pública", correct: false },
      { text: "Planificació dels recursos humans", correct: false },
      { text: "Cossos, escales, especialitat o altres sistemes", correct: false },
  ]},
  {
  "question": "D’acord amb la Llei Orgànica 2/2023 (LOSU), quina de les següents categories de personal docent i investigador té la consideració de personal laboral permanent?",
  "answers": [
    { "text": "Professorat Titular d’Universitat", "correct": false },
    { "text": "Professorat Permanent Laboral", "correct": true },
    { "text": "Professorat Ajudant Doctor", "correct": false },
    { "text": "Professorat Associat", "correct": false }
  ]
},
  {
    "question": "Quina d’aquestes categories és de professorat laboral permanent segons la LOSU?",
    "answers": [
      { "text": "Professorat lector.", "correct": false },
      { "text": "Professorat permanent laboral.", "correct": true },
      { "text": "Professorat associat.", "correct": false },
      { "text": "Professorat visitant.", "correct": false }
    ]},
  { question: "Segons el títol II de la llei 19/2014 de transparència, accés a la informació pública i bon govern, quin és l’instrument bàsic i general de gestió de documents públics per a donar compliment i efectivitat a les obligacions de transparència?", answers: [
      { text: "El Portal de transparència", correct: true },
      { text: "La Seu Electrònica", correct: false },
      { text: "El web de l’administració", correct: false },
      { text: "Amb qualsevol de les tres opcions es dona compliment i efectivitat a les obligacions de transparència establertes per la llei", correct: false },
  ]},
  { question: "La Llei Orgànica 2/2023, de 22 de març, del Sistema Universitari (LOSU):", answers: [
      { text: "Només fa referència a la creació d’universitats", correct: false },
      { text: "Només fa referència a la creació d’universitats privades", correct: false },
      { text: "Fa referència a la creació d’universitats públiques i privades", correct: true },
      { text: "No fa referència a la creació de les universitats, ni públiques, ni privades", correct: false },
  ]},
  { question: "Segons l’Estatut de la Universitat de Barcelona, la gestió econòmica i financera de la Universitat es regeix per un pressupost anual, públic, únic i equilibrat que comprèn:", answers: [
      { text: "La totalitat d’ingressos", correct: false },
      { text: "La totalitat de les despeses", correct: false },
      { text: "La totalitat d’ingressos i despeses", correct: true },
      { text: "La totalitat de les despeses i els ingressos que provenen de les transferències de l’Estat espanyol i de la Generalitat de Catalunya", correct: false },
  ]},
  { question: "L’adreça electrònica disponible per als ciutadans a través de les xarxes de telecomunicacions, la titularitat, gestió i administració de la qual correspon a una Administració pública es denomina:", answers: [
      { text: "Canal electrònic", correct: false },
      { text: "Portal electrònic", correct: false },
      { text: "Seu electrònica", correct: true },
      { text: "Direcció electrònica", correct: false },
  ]},
  { question: "Quin és el procediment del recurs administratiu?", answers: [
      { text: "Iniciació, instrucció i repàs", correct: false },
      { text: "Instrucció, pausa i repàs", correct: false },
      { text: "Iniciació, instrucció i finalització", correct: true },
      { text: "No hi ha procediment", correct: false },
  ]},
  { question: "En les ofertes d’ocupació pública, quin percentatge de places s’ha de reservar per a persones amb discapacitat intel·lectual?", answers: [
      { text: "7%", correct: false },
      { text: "2%", correct: true },
      { text: "5%", correct: false },
      { text: "0%", correct: false },
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