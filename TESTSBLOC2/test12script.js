const TEST_ID = "t12"; 
const questions = [
 
  {
    "n": 1,
    "question": "Segons el TREBEP, quin tipus de personal és el que, en virtut de nomenament legal, està vinculat a una Administració Pública per una relació estatutària regulada pel Dret Administratiu?",
    "answers": [
      { "text": "Funcionaris de carrera.", "correct": true },
      { "text": "Personal laboral amb contracte d'alta direcció.", "correct": false },
      { "text": "Personal eventual de confiança.", "correct": false },
      { "text": "Personal directiu professional de caràcter laboral.", "correct": false }
    ]
  },
  {
    "n": 2,
    "question": "El personal que és nomenat per raons justificades de necessitat i urgència per a l'exercici de funcions pròpies de funcionaris de carrera es denomina:",
    "answers": [
      { "text": "Funcionari interí.", "correct": true },
      { "text": "Personal laboral temporal per substitució.", "correct": false },
      { "text": "Personal eventual d'assessorament.", "correct": false },
      { "text": "Personal directiu transitori.", "correct": false }
    ]
  },
  {
    "n": 3,
    "question": "Quina és la característica definisòria del personal eventual?",
    "answers": [
      { "text": "El seu nomenament i cessament són lliures i realitza funcions de confiança o assessorament especial no reservades a funcionaris.", "correct": true },
      { "text": "Ha de superar un concurs-oposició basat en els principis de mèrit i capacitat.", "correct": false },
      { "text": "La seva relació és de caràcter laboral indefinit no fix.", "correct": false },
      { "text": "Té dret a la permanència en el lloc de treball un cop cessa el càrrec que el va nomenar.", "correct": false }
    ]
  },
  {
    "n": 4,
    "question": "Els cossos i escales de funcionaris es classifiquen en grups i subgrups d'acord amb:",
    "answers": [
      { "text": "La titulació exigida per a l'accés.", "correct": true },
      { "text": "El nivell de complement de destinació mínim del lloc.", "correct": false },
      { "text": "L'antiguitat acumulada en l'Administració anterior.", "correct": false },
      { "text": "La responsabilitat jeràrquica dins de l'organigrama de la UB.", "correct": false }
    ]
  },
  {
    "n": 5,
    "question": "Per a l'accés al Grup A (Subgrups A1 i A2), és necessari estar en possessió de:",
    "answers": [
      { "text": "Títol universitari de Grau o equivalent segons la normativa vigent.", "correct": true },
      { "text": "Títol de Màster oficial obligatòriament per a l'A1.", "correct": false },
      { "text": "Títol de Tècnic Superior de Formació Professional.", "correct": false },
      { "text": "Títol de Batxillerat i cinc anys d'experiència.", "correct": false }
    ]
  },
  {
    "n": 6,
    "question": "A quin subgrup s'accedeix amb el títol de Batxiller o Tècnic?",
    "answers": [
      { "text": "Subgrup C1.", "correct": true },
      { "text": "Grup B (Tècnic Superior).", "correct": false },
      { "text": "Subgrup C2.", "correct": false },
      { "text": "Subgrup A2.", "correct": false }
    ]
  },
  {
    "n": 7,
    "question": "Quin d'aquests és un dret individual dels empleats públics recollit al TREBEP?",
    "answers": [
      { "text": "A la progressió en la carrera professional i a la promoció interna segons els principis de mèrit i capacitat.", "correct": true },
      { "text": "A l'elecció del lloc de treball segons la proximitat al domicili.", "correct": false },
      { "text": "A la immunitat davant qualsevol tipus d'avaluació de l'exercici.", "correct": false },
      { "text": "A la jubilació anticipada obligatòria als 60 anys.", "correct": false }
    ]
  },
  {
    "n": 8,
    "question": "L'avaluació de l'exercici té com a finalitat mesurar:",
    "answers": [
      { "text": "La conducta professional i el rendiment o assoliment de resultats, amb efectes en la carrera i retribucions.", "correct": true },
      { "text": "L'estat de salut físic i mental per a la prevenció de riscos.", "correct": false },
      { "text": "Exclusivament el compliment estricte de l'horari mitjançant control biomètric.", "correct": false },
      { "text": "El nivell de satisfacció dels usuaris amb el funcionari de forma aïllada.", "correct": false }
    ]
  },
  {
    "n": 9,
    "question": "Dins de les retribucions bàsiques, el 'trienni' consisteix en:",
    "answers": [
      { "text": "Una quantitat igual per a cada subgrup per cada tres anys de servei perfeccionats.", "correct": true },
      { "text": "Un increment del 3% del sou base cada tres anys.", "correct": false },
      { "text": "Una bonificació puntual que es paga cada tres exercicis pressupostaris.", "correct": false },
      { "text": "El dret a tres mesos de vacances addicionals per antiguitat.", "correct": false }
    ]
  },
  {
    "n": 10,
    "question": "El complement de destinació es determina en funció de:",
    "answers": [
      { "text": "El nivell del lloc de treball que s'ocupa.", "correct": true },
      { "text": "La titulació que té el funcionari encara que el lloc no la requereixi.", "correct": false },
      { "text": "La especial preparació tècnica o perillositat de la tasca.", "correct": false },
      { "text": "El nombre de fills o càrregues familiars de l'empleat.", "correct": false }
    ]
  },
  {
    "n": 11,
    "question": "En quina situació es troba un funcionari nomenat per a un càrrec polític com el de Conseller o Secretari General?",
    "answers": [
      { "text": "Serveis especials.", "correct": true },
      { "text": "Excedència forçosa.", "correct": false },
      { "text": "Servei actiu amb reserva de plaça.", "correct": false },
      { "text": "Excedència voluntària per incompatibilitat.", "correct": false }
    ]
  },
  {
    "n": 12,
    "question": "L'excedència per cura de fills té les següents característiques:",
    "answers": [
      { "text": "Durada no superior a 3 anys, amb reserva del lloc de treball durant els dos primers (a la UB s'ha de mirar conveni/acords).", "correct": true },
      { "text": "Pèrdua immediata de la reserva del lloc de treball.", "correct": false },
      { "text": "Durada il·limitada mentre el fill sigui menor d'edat.", "correct": false },
      { "text": "No computa a efectes de triennis ni d'antiguitat.", "correct": false }
    ]
  },
  {
    "n": 13,
    "question": "El permís per naixement per a la mare biològica és de:",
    "answers": [
      { "text": "16 setmanes, de les quals les 6 setmanes immediatament posteriors al part són de descans obligatori.", "correct": true },
      { "text": "12 setmanes ampliables per lactància.", "correct": false },
      { "text": "20 setmanes per a totes les administracions de Catalunya.", "correct": false },
      { "text": "16 setmanes d'elecció totalment voluntària per la mare.", "correct": false }
    ]
  },
  {
    "n": 14,
    "question": "El deure de no utilitzar informació privilegiada en benefici propi o de tercers forma part de:",
    "answers": [
      { "text": "Els principis ètics i el codi de conducta dels empleats públics.", "correct": true },
      { "text": "La Llei de Transparència exclusivament.", "correct": false },
      { "text": "El contracte laboral de cada treballador.", "correct": false },
      { "text": "La Llei d'Incompatibilitats però no del TREBEP.", "correct": false }
    ]
  },
  {
    "n": 15,
    "question": "La sanció de separació del servei només es pot imposar per:",
    "answers": [
      { "text": "Faltes molt greus, mitjançant expedient disciplinari i comporta la pèrdua de la condició de funcionari.", "correct": true },
      { "text": "Acumulació de tres faltes greus en un mateix any natural.", "correct": false },
      { "text": "Decisió discrecional del Rector sense necessitat d'expedient.", "correct": false },
      { "text": "Faltes greus si hi ha reincidència en el lloc de treball.", "correct": false }
    ]
  },
  {
    "n": 16,
    "question": "La 'promoció interna vertical' consisteix en l'ascens:",
    "answers": [
      { "text": "Des d'un cos o escala d'un subgrup de classificació professional a un altre de superior.", "correct": true },
      { "text": "Dins del mateix subgrup, d'un nivell 18 a un nivell 22.", "correct": false },
      { "text": "D'una escala administrativa a una escala auxiliar.", "correct": false },
      { "text": "Per antiguitat sense necessitat de superar cap prova específica.", "correct": false }
    ]
  },
  {
    "n": 17,
    "question": "Segons el TREBEP, quins són els sistemes de selecció de funcionaris de carrera?",
    "answers": [
      { "text": "Oposició i concurs-oposició, i excepcionalment el concurs de mèrits.", "correct": true },
      { "text": "Lliure designació com a norma general per a l'administració universitària.", "correct": false },
      { "text": "L'entrevista competencial i el sorteig públic.", "correct": false },
      { "text": "El concurs de mèrits per a totes les places de nova creació.", "correct": false }
    ]
  },
  {
    "n": 18,
    "question": "Els principis constitucionals que regeixen l'accés a l'ocupació pública són:",
    "answers": [
      { "text": "Igualtat, mèrit i capacitat, a més de publicitat i transparència.", "correct": true },
      { "text": "Eficàcia, jerarquia i descentralització.", "correct": false },
      { "text": "Proximitat, residència i antiguitat.", "correct": false },
      { "text": "Llibertat d'elecció, confiança i lleialtat institucional.", "correct": false }
    ]
  },
  {
    "n": 19,
    "question": "Quina és l'edat mínima i màxima per accedir a la funció pública?",
    "answers": [
      { "text": "Tenir fets els 16 anys i no excedir l'edat màxima de jubilació forçosa.", "correct": true },
      { "text": "Major d'edat (18 anys) i fins als 65 anys.", "correct": false },
      { "text": "14 anys amb permís patern i fins als 70 anys.", "correct": false },
      { "text": "18 anys i sense límit d'edat superior.", "correct": false }
    ]
  },
  {
    "n": 20,
    "question": "La suspensió de funcions ferma imposada per via disciplinària té un límit màxim de:",
    "answers": [
      { "text": "6 anys.", "correct": true },
      { "text": "2 anys per faltes greus i 4 per molt greus.", "correct": false },
      { "text": "L'exclusió definitiva de l'Administració.", "correct": false },
      { "text": "90 dies segons el Decret Legislatiu 1/1997.", "correct": false }
    ]
  },
  {
    "n": 21,
    "question": "Qui té la competència per al nomenament de funcionaris de l'escala administrativa a la Universitat?",
    "answers": [
      { "text": "El Rector, en exercici de les competències d'execució de l'oferta pública.", "correct": true },
      { "text": "El Conseller d'Universitats de la Generalitat.", "correct": false },
      { "text": "El Gerent per delegació directa de la LOU.", "correct": false },
      { "text": "El President de la Junta de Personal.", "correct": false }
    ]
  },
  {
    "n": 22,
    "question": "El personal laboral al servei de les administracions públiques es regeix per:",
    "answers": [
      { "text": "El TREBEP, la legislació laboral, els convenis col·lectius i les normes derivades de l'autonomia universitària.", "correct": true },
      { "text": "Exclusivament per l'Estatut dels Treballadors.", "correct": false },
      { "text": "Pel dret administratiu en la seva totalitat.", "correct": false },
      { "text": "Pel Codi Civil en matèria de contractació temporal.", "correct": false }
    ]
  },
  {
    "n": 23,
    "question": "Quina és una causa de pèrdua de la condició de funcionari segons el TREBEP?",
    "answers": [
      { "text": "La pena principal o accessòria d'inhabilitació absoluta o especial per a càrrec públic que tingui caràcter ferm.", "correct": true },
      { "text": "El canvi de residència a una altra comunitat autònoma.", "correct": false },
      { "text": "La sol·licitud d'una excedència per interès particular.", "correct": false },
      { "text": "L'obtenció d'una nota negativa en l'avaluació de l'exercici un sol any.", "correct": false }
    ]
  },
  {
    "n": 24,
    "question": "La reserva de places per a persones amb discapacitat ha de ser com a mínim de:",
    "answers": [
      { "text": "El 7% de les vacants, reservant almenys un 2% per a persones amb discapacitat intel·lectual.", "correct": true },
      { "text": "El 5% segons el Decret Legislatiu 1/1997.", "correct": false },
      { "text": "El 10% en les convocatòries de promoció interna.", "correct": false },
      { "text": "No és obligatòria a les Universitats per la seva autonomia.", "correct": false }
    ]
  },
  {
    "n": 25,
    "question": "Què retribueix el complement específic?",
    "answers": [
      { "text": "Les condicions de cada lloc de treball: especial dificultat tècnica, responsabilitat, dedicació o incompatibilitat.", "correct": true },
      { "text": "La possessió d'un títol de nivell superior al requerit per al cos.", "correct": false },
      { "text": "La superació de cursos de formació voluntaris.", "correct": false },
      { "text": "L'antiguitat del funcionari (triennis).", "correct": false }
    ]
  },
  {
    "n": 26,
    "question": "L'excedència voluntària per interès particular requereix haver prestat serveis previs durant:",
    "answers": [
      { "text": "Cinc anys immediatament anteriors a la sol·licitud.", "correct": true },
      { "text": "Un any (període de prova).", "correct": false },
      { "text": "Deu anys si es tracta del Subgrup A1.", "correct": false },
      { "text": "No requereix cap temps mínim de serveis previs.", "correct": false }
    ]
  },
  {
    "n": 27,
    "question": "Els principis de conducta obliguen l'empleat públic a:",
    "answers": [
      { "text": "Actuar amb neutralitat, imparcialitat, agilitat i plena dedicació al servei públic.", "correct": true },
      { "text": "Seguir les instruccions del cap encara que siguin manifestament il·legals.", "correct": false },
      { "text": "Afavorir els interessos de la Universitat per sobre de la legalitat vigent.", "correct": false },
      { "text": "Abstenir-se de participar en qualsevol tipus de sindicat.", "correct": false }
    ]
  },
  {
    "n": 28,
    "question": "La carrera horitzontal consisteix en:",
    "answers": [
      { "text": "La progressió de grau, categoria o esglaó sense necessitat de canviar de lloc de treball.", "correct": true },
      { "text": "L'ascens a un cos d'un subgrup superior.", "correct": false },
      { "text": "El canvi de departament dins de la mateixa facultat.", "correct": false },
      { "text": "L'augment de sou lineal per a tot el personal d'una escala.", "correct": false }
    ]
  },
  {
    "n": 29,
    "question": "L'instrument bàsic de planificació de l'ocupació pública on figuren els requisits dels llocs és:",
    "answers": [
      { "text": "La Relació de Llocs de Treball (RLT).", "correct": true },
      { "text": "L'Oferta Pública d'Ocupació (OPO).", "correct": false },
      { "text": "El Pressupost de la Generalitat.", "correct": false },
      { "text": "El Quadre de Comandament Integral.", "correct": false }
    ]
  },
  {
    "n": 30,
    "question": "Els òrgans de selecció han de garantir el principi de professionalitat i per tant:",
    "answers": [
      { "text": "Els seus membres han de posseir una titulació d'igual o superior nivell a l'exigida per a les places.", "correct": true },
      { "text": "Han d'estar formats majoritàriament per representants sindicals.", "correct": false },
      { "text": "Poden incloure personal eventual d'assessorament.", "correct": false },
      { "text": "Són designats lliurement pels partits polítics amb representació al Claustre.", "correct": false }
    ]
  },
  /* --- 5 EXTRAS --- */
  {
    "n": 31,
    "question": "El personal directiu professional, segons el TREBEP:",
    "answers": [
      { "text": "Està subjecte a avaluació d'acord amb els criteris d'eficàcia, eficiència i responsabilitat per la seva gestió.", "correct": true },
      { "text": "És un tipus de funcionari eventual amb dret a permanència.", "correct": false },
      { "text": "La seva designació ha de ser obligatòriament mitjançant oposició lliure.", "correct": false },
      { "text": "No pot ser mai personal laboral, només funcionari de carrera del Subgrup A1.", "correct": false }
    ]
  },
  {
    "n": 32,
    "question": "Què succeeix quan un funcionari interí ocupa una plaça vacant que és objecte d'oferta pública d'ocupació?",
    "answers": [
      { "text": "Haurà de cessar quan es produeixi la presa de possessió del funcionari de carrera que hagi superat el procés.", "correct": true },
      { "text": "Adquireix automàticament la condició de personal laboral fix.", "correct": false },
      { "text": "Té dret a una indemnització equivalent a 45 dies per any treballat.", "correct": false },
      { "text": "La seva plaça no pot sortir a oposició fins que passin 5 anys.", "correct": false }
    ]
  },
  {
    "n": 33,
    "question": "La rehabilitació de la condició de funcionari es pot demanar:",
    "answers": [
      { "text": "Amb caràcter excepcional, un cop finalitzat el temps d'inhabilitació, i és concedida pel Govern o òrgan competent.", "correct": true },
      { "text": "De forma automàtica només presentant el certificat d'antecedents penals net.", "correct": false },
      { "text": "Només si la pèrdua de la condició va ser per renúncia voluntària.", "correct": false },
      { "text": "Mai, la pèrdua de la condició de funcionari és irreversible de per vida.", "correct": false }
    ]
  },
  {
    "n": 34,
    "question": "Quina d'aquestes faltes es considera 'molt greu' segons el TREBEP?",
    "answers": [
      { "text": "L'abandonament del servei i el tancament discriminatori per raons de sexe, raça o religió.", "correct": true },
      { "text": "L'incompliment de l'horari de treball si no suposa un gran perjudici.", "correct": false },
      { "text": "La falta de consideració i respecte cap als ciutadans.", "correct": false },
      { "text": "La falta d'assistència injustificada d'un sol dia.", "correct": false }
    ]
  },
  {
    "n": 35,
    "question": "Les retribucions complementàries són aquelles que retribueixen:",
    "answers": [
      { "text": "Les característiques dels llocs de treball, la carrera professional o l'exercici i rendiment.", "correct": true },
      { "text": "El sou i els triennis acumulats.", "correct": false },
      { "text": "Les pagues extraordinàries exclusivament.", "correct": false },
      { "text": "L'ajuda familiar i el transport.", "correct": false }
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
