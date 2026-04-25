const TEST_ID = "t15"; 
const questions = [
 
  {
    question: "Quin és l'objectiu principal de la Llei 31/1995 de prevenció de riscos laborals?",
    answers: [
      { text: "Promoure la seguretat i la salut dels treballadors mitjançant l'aplicació de mesures i el desenvolupament d'activitats preventives.", correct: true },
      { text: "L'establiment d'un règim sancionador exclusivament orientat a la negligència del treballador.", correct: false },
      { text: "La transferència de la responsabilitat civil de l'accident cap a les entitats gestores de la Seguretat Social.", correct: false },
      { text: "La regulació de les relacions laborals i els sistemes de negociació col·lectiva en l'àmbit universitari.", correct: false }
    ]
  },
  {
    question: "A quin tipus de personal de la UB s'aplica la Llei de prevenció de riscos laborals?",
    answers: [
      { text: "Tant al personal funcionari com al personal laboral.", correct: true },
      { text: "Exclusivament al personal amb contracte laboral regulat per l'Estatut dels Treballadors.", correct: false },
      { text: "Només al personal de recerca i tècnic vinculat a laboratoris d'alt risc.", correct: false },
      { text: "Únicament al personal de serveis externs que desenvolupen la seva activitat als campus.", correct: false }
    ]
  },
  {
    question: "Què s'entén per 'risc laboral' segons la llei?",
    answers: [
      { text: "La possibilitat que un treballador pateixi un determinat dany derivat del treball.", correct: true },
      { text: "La certesa absoluta de l'ocurrència d'un accident en condicions de treball perilloses.", correct: false },
      { text: "Qualsevol malaltia que pateixi el treballador durant la seva vida laboral activa.", correct: false },
      { "text": "L'incompliment per part de l'empresa de la normativa de seguretat vigent.", "correct": false }
    ]
  },
  {
    question: "L'empresari (en aquest cas la UB) té el deure de:",
    answers: [
      { text: "Garantir la seguretat i la salut dels treballadors en tots els aspectes relacionats amb el treball.", correct: true },
      { text: "Compensar econòmicament qualsevol deficiència en les condicions ergonòmiques del lloc de treball.", correct: false },
      { text: "Substituir tota activitat que comporti esforç físic per sistemes automatitzats.", correct: false },
      { text: "Monitoritzar la salut del personal de forma constant, incloent-hi la seva vida privada i temps de lleure.", correct: false }
    ]
  },
  {
    question: "Quin és el principi preventiu bàsic segons la llei?",
    answers: [
      { text: "Evitar els riscos sempre que sigui possible.", correct: true },
      { text: "Minimitzar el cost de les mesures de protecció col·lectiva davant les individuals.", correct: false },
      { text: "Prioritzar la protecció individual sobre la col·lectiva en qualsevol cas d'emergència.", correct: false },
      { text: "Adaptar el treballador a les exigències tecnològiques de la màquina.", correct: false }
    ]
  },
  {
    question: "L'avaluació de riscos és un procés que s'ha de realitzar:",
    answers: [
      { text: "Inicialment i quan es produeixin canvis en les condicions de treball o en els equips.", correct: true },
      { text: "Periòdicament cada cinc anys, sense considerar canvis en l'organització del treball.", correct: false },
      { text: "Exclusivament després de la comunicació d'un accident de treball greu o molt greu.", correct: false },
      { text: "Només quan hi hagi un requeriment formal de la Inspecció de Treball i Seguretat Social.", correct: false }
    ]
  },
  {
    question: "Què és el Pla de Prevenció de la UB?",
    answers: [
      { text: "L'instrument on s'integra l'activitat preventiva en el sistema general de gestió de la universitat.", correct: true },
      { text: "Un document d'informació pública sobre la gestió de residus als centres universitaris.", correct: false },
      { text: "El contracte signat amb la Mútua col·laboradora amb la Seguretat Social.", correct: false },
      { text: "El recull anual de dades epidemiològiques de la comunitat universitària.", correct: false }
    ]
  },
  {
    question: "Qui són els 'Delegats de Prevenció'?",
    answers: [
      { text: "Els representants dels treballadors amb funcions específiques en matèria de prevenció de riscos.", correct: true },
      { text: "Els directors de centre encarregats de la supervisió tècnica de l'edifici.", correct: false },
      { text: "Els membres de l'OSSMA encarregats de realitzar les auditories internes.", correct: false },
      { text: "Personal de seguretat privada que vetlla pel compliment de l'ordre intern.", correct: false }
    ]
  },
  {
    question: "El Comitè de Seguretat i Salut és l'òrgan:",
    answers: [
      { text: "Paritari i col·legiat de participació destinat a la consulta regular de les actuacions preventives.", correct: true },
      { text: "Encarregat d'imposar sancions disciplinàries per incompliment de les normes preventives.", correct: false },
      { text: "Que té la capacitat unilateral de modificar el pressupost d'inversions en seguretat.", correct: false },
      { text: "Integrat exclusivament pel Rector, el Gerent i els Degans de les facultats.", correct: false }
    ]
  },
  {
    question: "La vigilància de la salut dels treballadors és, generalment:",
    answers: [
      { text: "Voluntària per al treballador, llevat de casos excepcionals de risc per a tercers.", correct: true },
      { text: "Obligatòria segons l'Estatut de la UB per a tot el personal sense distinció.", correct: false },
      { text: "Una facultat discrecional de la Universitat que es pot exercir en qualsevol moment.", correct: false },
      { text: "Exclusiva per al personal que declara patir una malaltia professional.", correct: false }
    ]
  },
  {
    question: "Quina unitat de la UB s'encarrega de la seguretat, la salut i el medi ambient?",
    answers: [
      { text: "OSSMA (Oficina de Seguretat, Salut i Medi Ambient).", correct: true },
      { text: "Servei de Gestió del Patrimoni i Espais.", correct: false },
      { text: "Àrea de Relacions Laborals i Funció Pública.", correct: false },
      { text: "Servei de Prevenció de Riscos Psicosocials i Formació.", correct: false }
    ]
  },
  {
    question: "Els Equips de Protecció Individual (EPI) s'han de fer servir quan:",
    answers: [
      { text: "Els riscos no s'han pogut evitar o limitar per mitjans tècnics de protecció col·lectiva.", correct: true },
      { text: "Sigui la mesura més econòmica per a l'administració universitària.", correct: false },
      { text: "El treballador prefereixi utilitzar protecció personal en lloc d'organitzativa.", correct: false },
      { text: "Es realitzi qualsevol tasca fora del despatx habitual.", correct: false }
    ]
  },
  {
    question: "En cas de risc greu i imminent, el treballador té dret a:",
    answers: [
      { text: "Interrompre la seva activitat i, si és necessari, abandonar el lloc de treball.", correct: true },
      { text: "Denunciar immediatament la situació davant el Jutjat de Guàrdia.", correct: false },
      { text: "Exigir una indemnització immediata per exposició al risc.", correct: false },
      { text: "Traslladar-se a un altre centre universitari de la seva elecció.", correct: false }
    ]
  },
  {
    question: "La formació en matèria de prevenció que rep el treballador de la UB ha de ser:",
    answers: [
      { text: "Teòrica i pràctica, suficient i adequada, i realitzada dins de la jornada laboral.", correct: true },
      { text: "Merament informativa mitjançant l'entrega de guies en format digital.", correct: false },
      { text: "Computada com a temps de descans retribuït a petició del treballador.", correct: false },
      { text: "Un prerequisit formatiu que el treballador ha de portar adquirit abans del nomenament.", correct: false }
    ]
  },
  {
    question: "Quin d'aquestes és un risc específic del PTGAS d'oficina?",
    answers: [
      { text: "Fatiga visual i trastorns musculoesquelètics per l'ús de pantalles de visualització de dades (PVD).", correct: true },
      { text: "Exposició crònica a sorolls industrials superiors a 85 decibels.", correct: false },
      { text: "Risc d'atrapament per elements mecànics en rotació.", correct: false },
      { text: "Inhalació de fums metàl·lics derivats de processos de soldadura.", correct: false }
    ]
  },
  {
    question: "En relació amb les treballadores embarassades, la UB ha de:",
    answers: [
      { text: "Adaptar les condicions o el temps de treball si hi ha risc per a la mare o el fetus.", correct: true },
      { text: "Aplicar una baixa mèdica automàtica per contingència professional des del moment de la comunicació.", correct: false },
      { text: "Garantir que tot el període de gestació es realitzi mitjançant teletreball obligatori.", correct: false },
      { text: "Delegar la responsabilitat de la seguretat en la mútua d'accidents de treball.", correct: false }
    ]
  },
  {
    question: "Qui té la responsabilitat de vetllar per la seva pròpia seguretat i la dels companys segons la llei?",
    answers: [
      { text: "Cada treballador, d'acord amb la seva formació i les instruccions de l'empresari.", correct: true },
      { text: "Exclusivament el Director de Departament o el Cap d'Unitat administrativa.", correct: false },
      { text: "Només el personal tècnic titulat de l'OSSMA.", correct: false },
      { text: "La representació legal dels treballadors en exclusiva.", correct: false }
    ]
  },
  {
    question: "Un accident 'in itinere' és aquell que:",
    answers: [
      { text: "Es produeix en anar o tornar del lloc de treball.", correct: true },
      { text: "Ocorre durant un viatge de servei oficial autoritzat per la UB.", correct: false },
      { text: "Succeeix dins del recinte universitari durant el temps de descans.", correct: false },
      { text: "Passa en el domicili particular mentre es realitzen tasques de teletreball.", correct: false }
    ]
  },
  {
    question: "El 'Protocol contra l'assetjament sexual' de la UB forma part de:",
    answers: [
      { text: "Les polítiques de salut laboral i prevenció de riscos psicosocials.", correct: true },
      { text: "Els criteris de selecció i promoció interna del personal.", correct: false },
      { text: "La normativa de disciplina acadèmica aplicable als estudiants.", correct: false },
      { text: "Els plans de manteniment preventiu dels espais universitaris.", correct: false }
    ]
  },
  {
    question: "Què és la 'ergonomia' en l'àmbit laboral?",
    answers: [
      { text: "L'adaptació del treball i l'equipament a les característiques del treballador.", correct: true },
      { text: "L'estudi dels mètodes de treball per maximitzar el rendiment administratiu.", correct: false },
      { text: "La normativa que regula els materials de fabricació del mobiliari d'oficina.", correct: false },
      { text: "La ciència que estudia l'impacte dels salaris en la motivació laboral.", correct: false }
    ]
  },
  {
    question: "Cada quant s'ha de revisar el Pla de Prevenció de la UB?",
    answers: [
      { text: "Quan es detectin deficiències o es produeixin canvis significatius en l'organització.", correct: true },
      { text: "Cada cop que s'aprovin els Pressupostos de la Generalitat de Catalunya.", correct: false },
      { text: "Periòdicament a l'inici de cada curs acadèmic oficial.", correct: false },
      { text: "Només després de la celebració d'eleccions a la Junta de Personal.", correct: false }
    ]
  },
  {
    question: "L'ús correcte dels equips de treball i mitjans de protecció és un deure de:",
    answers: [
      { text: "El treballador.", correct: true },
      { text: "L'empresa de subministraments oficial de la universitat.", correct: false },
      { text: "Els serveis mèdics externs contractats.", correct: false },
      { text: "El personal becari en pràctiques de cada unitat.", correct: false }
    ]
  },
  {
    question: "La 'Seguretat en el treball' s'ocupa principalment de:",
    answers: [
      { text: "Evitar els accidents de treball (caigudes, talls, cops).", correct: true },
      { text: "La vigilància dels agents patògens en l'aire condicionat.", correct: false },
      { text: "La protecció de dades personals en els entorns laborals.", correct: false },
      { text: "La seguretat ciutadana i l'ordre públic dins del campus.", correct: false }
    ]
  },
  {
    question: "La 'Higiene Industrial' se centra en:",
    answers: [
      { text: "El control dels agents físics, químics i biològics de l'entorn laboral.", correct: true },
      { text: "La desinfecció i neteja diària dels espais comuns i aules.", correct: false },
      { text: "L'estat de conservació del mobiliari i l'estructura de l'edifici.", correct: false },
      { text: "La correcta disposició dels arxius físics a les unitats.", correct: false }
    ]
  },
  {
    question: "El temps dedicat a la vigilància de la salut (revisions mèdiques):",
    answers: [
      { text: "Es considera temps de treball efectiu.", correct: true },
      { text: "S'ha de recuperar mitjançant el sistema de borsa d'hores.", correct: false },
      { text: "És un permís retribuït de caràcter no recuperable ni computable.", correct: false },
      { text: "Es dedueix del crèdit horari per a assumptes personals.", correct: false }
    ]
  },
  {
    question: "Quin document ha de consultar un treballador de la UB per saber què fer en cas d'incendi a la seva facultat?",
    answers: [
      { text: "El Pla d'Autoprotecció o Pla d'Emergència del centre.", correct: true },
      { text: "La Llei d'Universitats de Catalunya.", correct: false },
      { text: "El manual d'identitat institucional de la UB.", correct: false },
      { text: "El Quadre de Comandament Integral de l'OSSMA.", correct: false }
    ]
  },
  {
    question: "L'ordre i la neteja en el lloc de treball són factors que:",
    answers: [
      { text: "Contribueixen directament a la prevenció d'accidents.", correct: true },
      { text: "Són exclusivament obligacions estètiques del centre.", correct: false },
      { text: "Es regulen fora de la Llei de Prevenció de Riscos Laborals.", correct: false },
      { text: "Han de ser supervisats pel servei de protocol de la UB.", correct: false }
    ]
  },
  {
    question: "Les situacions d'estrès o 'burnout' es consideren dins de l'àmbit de:",
    answers: [
      { text: "La Psicosociologia aplicada a la prevenció.", correct: true },
      { text: "La higiene ambiental en espais tancats.", correct: false },
      { text: "La medicina assistencial de caràcter privat.", correct: false },
      { text: "La gestió d'infraestructures i equipaments.", correct: false }
    ]
  },
  {
    question: "En cas d'accident de treball, el treballador ha de:",
    answers: [
      { text: "Informar immediatament al seu superior jeràrquic i a l'OSSMA.", correct: true },
      { text: "Esperar a la finalització de la jornada laboral per notificar-ho.", correct: false },
      { text: "Contactar directament amb el Ministeri de Treball.", correct: false },
      { text: "Comunicar-ho únicament al representant sindical de la seva unitat.", correct: false }
    ]
  },
  {
    question: "La Llei de prevenció estableix que el cost de les mesures de seguretat:",
    answers: [
      { text: "No ha de recaure en cap cas sobre els treballadors.", correct: true },
      { text: "S'ha de finançar mitjançant les aportacions de la mútua patronal.", correct: false },
      { text: "Es pot compartir mitjançant deduccions en els complements salarials.", correct: false },
      { text: "És responsabilitat solidària entre l'estudiantat i el personal.", correct: false }
    ]
  },
  /* --- 5 PREGUNTES EXTRAS ESSENCIALS --- */
  {
    question: "Quina és la funció de la Coordinació d'Activitats Preventives (CAP)?",
    answers: [
      { text: "Intercanviar informació sobre riscos quan treballadors de diferents empreses coincideixen en un mateix centre.", correct: true },
      { text: "Organitzar els horaris de neteja i manteniment del campus.", correct: false },
      { text: "Gestionar les relacions amb la policia i serveis d'emergència exteriors.", correct: false },
      { text: "Coordinar les vacances de la plantilla per evitar sobrecàrregues.", correct: false }
    ]
  },
  {
    question: "Què és la 'Malaltia Professional' segons la normativa de prevenció?",
    answers: [
      { text: "La contreta a conseqüència del treball per compte d'altri i provocada pels agents determinats en el quadre legal.", correct: true },
      { text: "Qualsevol patologia que impedeixi al treballador assistir al seu lloc de treball.", correct: false },
      { text: "Aquella que es produeix de forma sobtada durant la jornada laboral.", correct: false },
      { text: "L'agreujament d'una patologia prèvia a causa de l'edat de l'empleat.", correct: false }
    ]
  },
  {
    question: "En la jerarquia preventiva, la 'Protecció Col·lectiva' ha de ser:",
    answers: [
      { text: "Prioritària respecte a la protecció individual (EPI).", correct: true },
      { text: "Complementària i sempre posterior a l'ús de l'EPI.", correct: false },
      { text: "Només d'obligada aplicació si el pressupost ho permet.", correct: false },
      { text: "Prescindible si el treballador manifesta estar ben format.", correct: false }
    ]
  },
  {
    question: "L'auditoria del sistema de prevenció té com a objectiu:",
    answers: [
      { text: "Verificar si el sistema de prevenció s'ha implantat i és adequat per garantir la seguretat i salut.", correct: true },
      { text: "Controlar el compliment horari del personal de l'OSSMA.", correct: false },
      { text: "Investigar deutes econòmics en la compra de material de seguretat.", correct: false },
      { text: "Avaluar el rendiment acadèmic dels professors de la universitat.", correct: false }
    ]
  },
  {
    question: "Quin dret té el treballador davant l'existència d'un 'risc especialment sensible' per la seva condició física?",
    answers: [
      { text: "A una protecció específica mitjançant l'adaptació del lloc o del mètode de treball.", correct: true },
      { text: "A una reducció salarial a canvi de realitzar tasques menys arriscades.", correct: false },
      { text: "A l'exempció total d'assistir al centre sense necessitat de teletreballar.", correct: false },
      { text: "A l'accés directe a la jubilació per incapacitat parcial.", correct: false }
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