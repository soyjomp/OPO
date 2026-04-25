const TEST_ID = "t5"; 
const questions = [
 
  {
    "n": 1,
    "question": "Segons la Llei 40/2015, de règim jurídic del sector públic, tenen la consideració d'òrgans administratius:",
    "answers": [
      { "text": "Les unitats administratives a les quals se'ls atribueixin funcions que tinguin efectes jurídics davant tercers o la preceptivitat dels quals sigui necessària.", "correct": true },
      { "text": "Qualsevol lloc de treball previst a la Relació de Llocs de Treball (RLT).", "correct": false },
      { "text": "Únicament les unitats integrades per funcionaris del subgrup A1.", "correct": false },
      { "text": "Totes les unitats que componen l'estructura orgànica de la Universitat.", "correct": false }
    ]
  },
  {
    "n": 2,
    "question": "Quin d'aquests NO és un principi d'organització administrativa segons l'article 3 de la Llei 40/2015?",
    "answers": [
      { "text": "Lucratiu o de benefici econòmic.", "correct": true },
      { "text": "Jerarquia i coordinació.", "correct": false },
      { "text": "Descentralització funcional i desconcentració.", "correct": false },
      { "text": "Simplicitat, claredat i proximitat als ciutadans.", "correct": false }
    ]
  },
  {
    "n": 3,
    "question": "La creació de qualsevol òrgan administratiu exigeix, segons la normativa vigent:",
    "answers": [
      { "text": "La determinació de la seva integració en l'Administració, la seva dependència, funcions i dotació pressupostària.", "correct": true },
      { "text": "L'aprovació per decret llei del Parlament en tots els casos.", "correct": false },
      { "text": "Que el titular sigui nomenat directament per la Junta de Govern de la Universitat.", "correct": false },
      { "text": "Un període d'exposició pública de 30 dies abans de la seva entrada en funcionament.", "correct": false }
    ]
  },
  {
    "n": 4,
    "question": "La competència administrativa es defineix legalment com a:",
    "answers": [
      { "text": "Irrenunciable, i s'exerceix pels òrgans que la tinguin atribuïda com a pròpia, llevat de delegació o advocació.", "correct": true },
      { "text": "Delegable en la seva titularitat però irrenunciable en el seu exercici.", "correct": false },
      { "text": "Una facultat discrecional que l'òrgan pot decidir no exercir per motius d'oportunitat.", "correct": false },
      { "text": "La capacitat de l'òrgan de cedir la seva titularitat a altres òrgans inferiors.", "correct": false }
    ]
  },
  {
    "n": 5,
    "question": "En la delegació de competències, la responsabilitat de les decisions correspon a:",
    "answers": [
      { "text": "L'òrgan delegat (el que rep la facultat d'exercir-la).", "correct": true },
      { "text": "L'òrgan delegant de forma exclusiva.", "correct": false },
      { "text": "L'Administració a la qual pertany l'òrgan, tot i que l'acte es considera dictat pel delegant.", "correct": false },
      { "text": "El superior jeràrquic de l'òrgan delegat en virtut del principi de jerarquia.", "correct": false }
    ]
  },
  {
    "n": 6,
    "question": "Les resolucions administratives que es dictin per delegació:",
    "answers": [
      { "text": "S'han de considerar dictades per l'òrgan delegant i n'han de fer constar aquesta circumstància.", "correct": true },
      { "text": "Exclouen la possibilitat d'interposar recurs d'alçada.", "correct": false },
      { "text": "Tenen caràcter de provisionals fins que l'òrgan delegant les ratifica.", "correct": false },
      { "text": "S'atribueixen a l'òrgan delegat a tots els efectes jurídics.", "correct": false }
    ]
  },
  {
    "n": 7,
    "question": "Perquè la delegació de competències i la seva revocació siguin eficaces:",
    "answers": [
      { "text": "S'han de publicar en el butlletí oficial corresponent segons l'Administració a la qual pertanyi el delegant.", "correct": true },
      { "text": "Basta amb la notificació personal a l'òrgan delegat.", "correct": false },
      { "text": "Cal que l'interessat en el procediment hi doni el seu consentiment.", "correct": false },
      { "text": "Han d'estar inscrites en el Registre d'Òrgans de la Universitat.", "correct": false }
    ]
  },
  {
    "n": 8,
    "question": "Quina de les següents matèries NO pot ser objecte de delegació segons l'article 9 de la Llei 40/2015?",
    "answers": [
      { "text": "L'adopció de disposicions de caràcter general (reglaments).", "correct": true },
      { "text": "La gestió ordinària de temes de personal.", "correct": false },
      { "text": "La resolució de recursos administratius en qualsevol cas.", "correct": false },
      { "text": "La signatura de convenis amb altres administracions.", "correct": false }
    ]
  },
  {
    "n": 9,
    "question": "L'advocació és la tècnica per la qual:",
    "answers": [
      { "text": "Un òrgan superior atrau per a si el coneixement d'un assumpte la resolució del qual correspon a un inferior.", "correct": true },
      { "text": "Un òrgan cedeix la titularitat d'una competència a un superior.", "correct": false },
      { "text": "Es designa un suplent per vacant del titular de l'òrgan.", "correct": false },
      { "text": "Es traslladen les activitats materials de gestió a un altre òrgan.", "correct": false }
    ]
  },
  {
    "n": 10,
    "question": "Perquè l'advocació sigui vàlida, és necessari:",
    "answers": [
      { "text": "Un acord motivat per part de l'òrgan superior que s'ha de notificar als interessats.", "correct": true },
      { "text": "La publicació de l'acord en el Diari Oficial de la Generalitat (DOGC).", "correct": false },
      { "text": "L'informe favorable previ de la assessoria jurídica.", "correct": false },
      { "text": "Que l'òrgan inferior no hagi iniciat encara la instrucció de l'expedient.", "correct": false }
    ]
  },
  {
    "n": 11,
    "question": "L'encomana de gestió (encomanda de gestió) es caracteritza per:",
    "answers": [
      { "text": "No suposar la cessió de la titularitat de la competència ni dels elements substantius del seu exercici.", "correct": true },
      { "text": "Traslladar la responsabilitat jurídica de la resolució a l'òrgan encarregat.", "correct": false },
      { "text": "Ser d'obligat compliment entre administracions sense necessitat de conveni.", "correct": false },
      { "text": "Permetre que l'òrgan encarregat dicti actes administratius de caràcter sancionador.", "correct": false }
    ]
  },
  {
    "n": 12,
    "question": "Sobre la delegació de signatura, quina afirmació és correcta?",
    "answers": [
      { "text": "No pot aplicar-se a les resolucions de caràcter sancionador.", "correct": true },
      { "text": "Altera la competència de l'òrgan delegant.", "correct": false },
      { "text": "Requereix la publicació obligatòria en el DOGC per a la seva validesa.", "correct": false },
      { "text": "Es pot utilitzar per signar disposicions de caràcter general.", "correct": false }
    ]
  },
  {
    "n": 13,
    "question": "La suplència d'un titular d'un òrgan administratiu:",
    "answers": [
      { "text": "No implica alteració de la competència i no cal la seva publicació per a la seva validesa.", "correct": true },
      { "text": "Només és possible en casos de vacant del lloc de treball.", "correct": false },
      { "text": "Atribueix la titularitat de l'òrgan al suplent mentre dura l'absència.", "correct": false },
      { "text": "S'ha de publicar en el butlletí oficial si l'òrgan és unipersonal.", "correct": false }
    ]
  },
  {
    "n": 14,
    "question": "Els òrgans col·legiats es defineixen com aquells que:",
    "answers": [
      { "text": "Es creen formalment i estan integrats per tres o més persones.", "correct": true },
      { "text": "Pertanyen exclusivament a l'àmbit de les universitats i col·legis professionals.", "correct": false },
      { "text": "Han d'estar formats exclusivament per personal funcionari.", "correct": false },
      { "text": "Tenen la facultat de decidir per unanimitat obligatòria.", "correct": false }
    ]
  },
  {
    "n": 15,
    "question": "En un òrgan col·legiat, el vot del President:",
    "answers": [
      { "text": "Té caràcter de qualitat per decidir empats, si així ho preveuen les seves normes pròpies.", "correct": true },
      { "text": "Sempre compta doble en totes les votacions ordinàries.", "correct": false },
      { "text": "És obligatori que sigui en blanc si hi ha conflicte d'interessos.", "correct": false },
      { "text": "És l'únic que es reflecteix nominalment en l'acta.", "correct": false }
    ]
  },
  {
    "n": 16,
    "question": "El Secretari o Secretària d'un òrgan col·legiat que no en sigui membre:",
    "answers": [
      { "text": "Té dret a veu, però no a vot.", "correct": true },
      { "text": "No pot assistir a les deliberacions secretes.", "correct": false },
      { "text": "Ha de ser necessàriament el membre de menor edat de l'òrgan.", "correct": false },
      { "text": "Té veu i vot només en qüestions de caràcter procedimental.", "correct": false }
    ]
  },
  {
    "n": 17,
    "question": "L'acta d'una sessió d'un òrgan col·legiat ha de contenir, com a mínim:",
    "answers": [
      { "text": "Assistents, ordre del dia, lloc i temps de la sessió, punts principals de les deliberacions i contingut dels acords.", "correct": true },
      { "text": "La transcripció literal i paraula per paraula de totes les intervencions.", "correct": false },
      { "text": "Únicament la llista de vots a favor i en contra de cada punt.", "correct": false },
      { "text": "La signatura de tots els assistents a la sessió de forma obligatòria.", "correct": false }
    ]
  },
  {
    "n": 18,
    "question": "L'òrgan administratiu es compon d'aquestes dues dimensions:",
    "answers": [
      { "text": "L'element subjectiu (el titular o titulars) i l'element objectiu (el conjunt de competències).", "correct": true },
      { "text": "La dimensió política i la dimensió exclusivament administrativa.", "correct": false },
      { "text": "L'estructura de personal i l'estructura tecnològica.", "correct": false },
      { "text": "El rang jeràrquic i la ubicació geogràfica.", "correct": false }
    ]
  },
  {
    "n": 19,
    "question": "El principi de jerarquia administrativa suposa:",
    "answers": [
      { "text": "L'ordenació vertical dels òrgans mitjançant la qual els superiors dirigeixen l'activitat dels inferiors.", "correct": true },
      { "text": "La capacitat de qualsevol òrgan d'anul·lar actes d'altres administracions.", "correct": false },
      { "text": "L'existència d'un vincle de submissió política del funcionari al seu càrrec electe.", "correct": false },
      { "text": "Un sistema d'organització on l'òrgan inferior no pot ser mai supervisat.", "correct": false }
    ]
  },
  {
    "n": 20,
    "question": "La desconcentració es defineix com:",
    "answers": [
      { "text": "La transferència de la titularitat i l'exercici d'una competència d'un òrgan superior a un altre inferior de la mateixa administració.", "correct": true },
      { "text": "El traspàs de competències entre administracions públiques diferents (ex. Estat a CCAA).", "correct": false },
      { "text": "La delegació temporal d'una facultat per motius d'urgència.", "correct": false },
      { "text": "La supressió d'òrgans innecessaris per concentrar la feina en un de sol.", "correct": false }
    ]
  },
  {
    "n": 21,
    "question": "En les relacions entre administracions públiques independents (Estat, CCAA, Universitats), regeix el principi de:",
    "answers": [
      { "text": "Competència, cooperació i col·laboració (no existeix jerarquia entre elles).", "correct": true },
      { "text": "Jerarquia orgànica de l'Administració General de l'Estat.", "correct": false },
      { "text": "Supremazia jeràrquica de l'administració territorialment més petita.", "correct": false },
      { "text": "Delegació obligatòria per llei de pressupostos.", "correct": false }
    ]
  },
  {
    "n": 22,
    "question": "Un òrgan administratiu es considera col·legiat quan:",
    "answers": [
      { "text": "La titularitat del mateix s'atribueix a un conjunt de persones físiques de forma simultània.", "correct": true },
      { "text": "Tots els seus membres han de ser Doctors per la universitat.", "correct": false },
      { "text": "Té una seu física compartida per diversos departaments.", "correct": false },
      { "text": "Els seus actes no poden ser recorreguts en via administrativa.", "correct": false }
    ]
  },
  {
    "n": 23,
    "question": "L'autonomia organitzativa de la Universitat de Barcelona implica que:",
    "answers": [
      { "text": "Té potestat per crear les estructures que consideri necessàries per al compliment de les seves funcions.", "correct": true },
      { "text": "Pot legislar de forma contrària a la Llei 40/2015 o la LOSU.", "correct": false },
      { "text": "Els seus òrgans no estan sotmesos al dret administratiu general.", "correct": false },
      { "text": "Pot modificar la planta judicial de la ciutat de Barcelona.", "correct": false }
    ]
  },
  {
    "n": 24,
    "question": "Segons la Llei 40/2015, l'abstenció és un deure del titular d'un òrgan quan:",
    "answers": [
      { "text": "Concorren causes com parentiu, amistat íntima, plet pendent o interès personal en l'assumpte.", "correct": true },
      { "text": "L'interessat és un antic alumne de la facultat on treballa el titular.", "correct": false },
      { "text": "El funcionari considera que no té els coneixements tècnics suficients per decidir.", "correct": false },
      { "text": "L'expedient ha entrat fora de l'horari d'atenció al públic.", "correct": false }
    ]
  },
  {
    "n": 25,
    "question": "Si una persona obligada a abstenir-se no ho fa, quina conseqüència jurídica té?",
    "answers": [
      { "text": "Pot donar lloc a responsabilitat, però no implica necessàriament la invalidesa dels actes en què hagi intervingut.", "correct": true },
      { "text": "L'acte administratiu esdevé nul de ple dret automàticament.", "correct": false },
      { "text": "Es produeix la caducitat immediata de tot el procediment.", "correct": false },
      { "text": "L'Administració ha de demanar perdó públicament a l'interessat.", "correct": false }
    ]
  },
  {
    "n": 26,
    "question": "La recusació es diferencia de l'abstenció en què:",
    "answers": [
      { "text": "L'abstenció la promou el propi titular i la recusació la promouen els interessats.", "correct": true },
      { "text": "L'abstenció és per a funcionaris i la recusació per a personal laboral.", "correct": false },
      { "text": "La recusació només es pot fer davant d'un jutge i l'abstenció no.", "correct": false },
      { "text": "L'abstenció és voluntària i la recusació és el nom que rep quan l'obliga el Rector.", "correct": false }
    ]
  },
  {
    "n": 27,
    "question": "El principi de cooperació administrativa es diferencia de la col·laboració en què:",
    "answers": [
      { "text": "La cooperació és voluntària i la col·laboració és un deure legal.", "correct": true },
      { "text": "Són sinònims absoluts segons la Llei 40/2015.", "correct": false },
      { "text": "La cooperació implica sempre el traspàs de fons econòmics.", "correct": false },
      { "text": "La col·laboració només es dóna entre òrgans del mateix ministeri.", "correct": false }
    ]
  },
  {
    "n": 28,
    "question": "La competència per raó de la matèria és aquella que:",
    "answers": [
      { "text": "Distribueix les funcions segons les finalitats o sectors d'activitat (ex. beques, personal, patrimoni).", "correct": true },
      { "text": "Distribueix les funcions segons la posició del superior sobre l'inferior.", "correct": false },
      { "text": "Atribueix competències segons el territori on resideix el ciutadà.", "correct": false },
      { "text": "S'assigna per sorteig entre les unitats administratives.", "correct": false }
    ]
  },
  {
    "n": 29,
    "question": "Es pot delegar la competència per resoldre un recurs quan l'òrgan delegat és qui va dictar l'acte recorregut?",
    "answers": [
      { "text": "No, està expressament prohibit per evitar que algú jutgi els seus propis actes.", "correct": true },
      { "text": "Sí, si l'òrgan delegant ho autoritza per escrit.", "correct": false },
      { "text": "Només si el recurs és d'alçada.", "correct": false },
      { "text": "Sí, si no hi ha cap altre òrgan disponible a la Universitat.", "correct": false }
    ]
  },
  {
    "n": 30,
    "question": "Quan un òrgan rep un assumpte i es considera incompetent per raó de la matèria, ha de:",
    "answers": [
      { "text": "Remetre directament les actuacions a l'òrgan que consideri competent.", "correct": true },
      { "text": "Arxivar l'expedient i notificar a l'interessat que s'ha equivocat.", "correct": false },
      { "text": "Resoldre l'assumpte igualment per no causar indefensió.", "correct": false },
      { "text": "Demanar permís al Rector per traslladar el document.", "correct": false }
    ]
  },
  // --- PREGUNTAS NUEVAS PARA COMPLETAR EL TEMA 5 ---
  {
    "n": 31,
    "question": "Segons l'article 8 de la Llei 40/2015, quina és la conseqüència d'exercir una competència sense tenir-la atribuïda?",
    "answers": [
      { "text": "L'acte és nul de ple dret o anul·lable segons la gravetat de la infracció.", "correct": true },
      { "text": "L'acte és vàlid si el superior jeràrquic el ratifica en menys de 24 hores.", "correct": false },
      { "text": "L'acte només té efectes interns però no davant tercers.", "correct": false },
      { "text": "S'ha de repetir tot el procediment des del pagament de les taxes.", "correct": false }
    ]
  },
  {
    "n": 32,
    "question": "En els òrgans col·legiats, es poden adoptar acords sobre assumptes que no figurin a l'ordre del dia?",
    "answers": [
      { "text": "Només si estan presents tots els membres i es declara la urgència pel vot favorable de la majoria.", "correct": true },
      { "text": "No, en cap cas és possible per garantir el dret de defensa dels membres.", "correct": false },
      { "text": "Sí, si el President ho decideix de forma unilateral.", "correct": false },
      { "text": "Sempre que es tracti de temes de caràcter informatiu.", "correct": false }
    ]
  },
  {
    "n": 33,
    "question": "El deure de col·laboració entre Administracions Públiques inclou:",
    "answers": [
      { "text": "El subministrament de dades, documents o informació que sol·licitin altres administracions.", "correct": true },
      { "text": "La cessió obligatòria de personal funcionari entre la UB i la Generalitat.", "correct": false },
      { "text": "El pagament de les deutes de l'Estat per part de la Universitat.", "correct": false },
      { "text": "L'ús compartit de les claus d'accés als servidors informàtics.", "correct": false }
    ]
  },
  {
    "n": 34,
    "question": "Què succeeix si en una votació d'un òrgan col·legiat algun membre vol salvar el seu vot?",
    "answers": [
      { "text": "Ha de fer constar el seu vot particular per quedar lliure de les responsabilitats que es puguin derivar de l'acord.", "correct": true },
      { "text": "Ha d'abandonar la sala i no signar l'acta.", "correct": false },
      { "text": "Ha de demanar la repetició de la votació tres vegades.", "correct": false },
      { "text": "No es pot salvar el vot, la responsabilitat és sempre de tot l'òrgan de forma indivisible.", "correct": false }
    ]
  },
  {
    "n": 35,
    "question": "La relació de jerarquia és possible entre una Universitat i el Ministeri d'Universitats?",
    "answers": [
      { "text": "No, perquè les universitats gaudeixen d'autonomia constitucionalment protegida.", "correct": true },
      { "text": "Sí, perquè l'Estat és sempre superior a qualsevol entitat pública.", "correct": false },
      { "text": "Només en temes relacionats amb el pressupost ordinari.", "correct": false },
      { "text": "Sí, si el Rector no és funcionari de carrera.", "correct": false }
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