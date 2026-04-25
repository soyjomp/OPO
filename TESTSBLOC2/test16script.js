const TEST_ID = "t16"; 
const questions = [
 
  {
    question: "Quin és l'objectiu principal de la Llei Orgànica 3/2007 per a la igualtat efectiva de dones i homes?",
    answers: [
      { text: "Fer efectiu el dret d'igualtat de tracte i d'oportunitats, eliminant la discriminació sobre la dona.", correct: true },
      { text: "L'establiment de mesures de protecció integral contra la violència de gènere en l'àmbit familiar.", correct: false },
      { text: "La regulació dels processos d'incapacitació civil per raó de sexe en l'àmbit successori.", correct: false },
      { text: "La creació d'un sistema de quotes obligatòries per a totes les entitats sense ànim de lucre.", correct: false }
    ]
  },
  {
    question: "El principi de 'transversalitat de gènere' (mainstreaming) implica que:",
    answers: [
      { text: "La perspectiva de gènere s'ha d'incorporar en totes les polítiques i accions de la universitat.", correct: true },
      { text: "S'han de crear departaments exclusivament femenins per compensar el biaix històric.", correct: false },
      { text: "L'aplicació de les polítiques d'igualtat queda limitada a l'àmbit de la Unitat d'Igualtat.", correct: false },
      { text: "Tota la formació acadèmica ha d'incloure una assignatura obligatòria sobre feminisme.", correct: false }
    ]
  },
  {
    question: "Què s'entén per 'discriminació directa' per raó de sexe?",
    answers: [
      { text: "Situació en què una persona és tractada de manera menys favorable que una altra en situació comparable per ser dona o home.", correct: true },
      { text: "Aplicació de normes aparentment neutres que produeixen un impacte advers en un col·lectiu.", correct: false },
      { text: "El tracte desfavorable derivat exclusivament de la manca de formació en matèria d'igualtat.", correct: false },
      { text: "L'assetjament laboral motivat per discrepàncies en l'organització de les tasques.", correct: false }
    ]
  },
  {
    question: "I la 'discriminació indirecta'?",
    answers: [
      { text: "Quan una disposició o criteri aparentment neutre posa a persones d'un sexe en desavantatge particular respecte a les de l'altre.", correct: true },
      { text: "Aquella que s'exerceix mitjançant el llenguatge no verbal o gestual en l'entorn de treball.", correct: false },
      { text: "La que es produeix per l'absència de representació femenina en els tribunals d'oposició.", correct: false },
      { text: "L'omissió de mesures de seguretat en llocs de treball històricament masculinitzats.", correct: false }
    ]
  },
  {
    question: "Quin és l'òrgan de la UB encarregat de coordinar les polítiques d'igualtat?",
    answers: [
      { text: "La Unitat d'Igualtat.", correct: true },
      { text: "La Comissió d'Economia i Pressupostos del Consell Social.", correct: false },
      { text: "El Comitè de Seguretat i Salut de l'OSSMA.", correct: false },
      { text: "L'Oficina de Gestió de la Recerca i Transferència.", correct: false }
    ]
  },
  {
    question: "El Pla d'Igualtat de la UB s'aplica a:",
    answers: [
      { text: "Tota la comunitat universitària: PDI, PTGAS i alumnat.", correct: true },
      { text: "Exclusivament al personal sotmès al Conveni Col·lectiu de les Universitats Públiques.", correct: false },
      { text: "Només a les dones víctimes de violència de gènere reconegudes judicialment.", correct: false },
      { text: "Únicament als alts càrrecs i personal eventual del Rectorat.", correct: false }
    ]
  },
  {
    question: "Què és una 'acció positiva'?",
    answers: [
      { text: "Mesures temporals per corregir situacions de desigualtat de fet en relació amb el sexe infrarepresentat.", correct: true },
      { text: "Qualsevol conducta que millori el clima laboral dins dels equips de treball.", correct: false },
      { text: "La concessió sistemàtica de plusos salarials a col·lectius històricament vulnerables.", correct: false },
      { text: "L'anul·lació dels criteris de mèrit i capacitat en favor de la paritat numèrica.", correct: false }
    ]
  },
  {
    question: "L'assetjament sexual es defineix com:",
    answers: [
      { text: "Qualsevol comportament verbal o físic de naturalesa sexual amb el propòsit o l'efecte d'atemptar contra la dignitat de la persona.", correct: true },
      { text: "La discrepància intel·lectual entre membres de diferent gènere en l'àmbit acadèmic.", correct: false },
      { text: "L'absència de cordialitat o cortesia entre companys de diferent orientació sexual.", correct: false },
      { text: "La disparitat retributiva injustificada en el cobrament de complements de productivitat.", correct: false }
    ]
  },
  {
    question: "L'assetjament per raó de sexe és:",
    answers: [
      { text: "Un comportament realitzat en funció del sexe d'una persona amb el propòsit d'atemptar contra la seva dignitat.", correct: true },
      { text: "La discriminació salarial derivada de la manca de negociació del conveni col·lectiu.", correct: false },
      { text: "L'excés de càrrega de treball imposat de forma generalitzada a la unitat.", correct: false },
      { text: "Qualsevol crítica pública cap a les polítiques de paritat de la universitat.", correct: false }
    ]
  },
  {
    question: "Quin document de la UB recull el procediment per actuar davant de casos d'assetjament?",
    answers: [
      { text: "El Protocol de la UB per a la prevenció, la detecció i l'actuació contra l'assetjament i el masclisme.", correct: true },
      { text: "El Reglament de Règim Intern del Personal Tècnic, de Gestió i d'Administració i Serveis.", correct: false },
      { text: "El Codi Ètic i de Bones Pràctiques en la Recerca i la Docència.", correct: false },
      { text: "El Pla General de Prevenció i Autoprotecció dels Centres.", correct: false }
    ]
  },
  {
    question: "La composició dels òrgans de govern de la UB ha de tendir a:",
    answers: [
      { text: "La presència equilibrada de dones i homes.", correct: true },
      { text: "La representació exclusiva del col·lectiu PDI permanent.", correct: false },
      { text: "Una ràtio mínima del 75% de dones per compensar biaixos històrics.", correct: false },
      { text: "La designació basada únicament en l'antiguitat administrativa.", correct: false }
    ]
  },
  {
    question: "Quin percentatge es considera 'presència equilibrada' segons la Llei 3/2007?",
    answers: [
      { text: "Que cap dels dos sexes superi el 60% ni sigui inferior al 40%.", correct: true },
      { text: "Una distribució proporcional exacta del 50% de cada gènere.", correct: false },
      { text: "Que la representació de qualsevol sexe no davalli del 25% del total.", correct: false },
      { text: "La llei no defineix percentatges, deixant-ho a criteri de l'autonomia universitària.", correct: false }
    ]
  },
  {
    question: "La Llei catalana 17/2015 posa especial èmfasi en la lluita contra:",
    answers: [
      { text: "La violència masclista i la bretxa salarial.", correct: true },
      { text: "L'ús de llengües no oficials en la documentació administrativa.", correct: false },
      { text: "El frau en la concessió de beques i ajuts a la investigació.", correct: false },
      { text: "La temporalitat excessiva en els contractes del personal laboral.", correct: false }
    ]
  },
  {
    question: "Les Comissions d'Igualtat de les Facultats tenen la funció de:",
    answers: [
      { text: "Vetllar pel cumplimiento del Pla d'Igualtat en el seu centre i promoure activitats de sensibilització.", correct: true },
      { text: "Avaluar el rendiment docent amb criteris segregats per sexe.", correct: false },
      { text: "Exercir la potestat sancionadora en casos de faltes lleus de personal.", correct: false },
      { text: "Validar els títols oficials des d'una perspectiva de gènere.", correct: false }
    ]
  },
  {
    question: "En els processos de selecció del PTGAS de la UB, s'ha de garantir:",
    answers: [
      { text: "La igualtat d'oportunitats i l'absència de biaixos de gènere en les proves.", correct: true },
      { text: "La reserva de plaça per a dones sense necessitat de superar la nota de tall.", correct: false },
      { text: "La composició dels tribunals exclusivament per dones de l'escala superior.", correct: false },
      { text: "L'eliminació del temari sobre prevenció per evitar discriminacions físiques.", correct: false }
    ]
  },
  {
    question: "L'uso del llenguatge no sexista a la UB és:",
    answers: [
      { text: "Una recomanació i un compromís recollit en el Pla d'Igualtat i les guies de la universitat.", correct: true },
      { text: "Una obligació legal regulada pel Codi Penal en l'àmbit administratiu.", correct: false },
      { text: "Una pràctica facultativa que no compta amb cap guia de suport institucional.", correct: false },
      { text: "Exclusiu per a la redacció de la memòria de responsabilitat social.", correct: false }
    ]
  },
  {
    question: "La 'bretxa salarial' de gènere es refereix a:",
    answers: [
      { text: "La diferència entre la mitjana de retribucions de l'home i la dona en una organització.", correct: true },
      { text: "L'assignació de pressupostos menors a les facultats d'humanitats.", correct: false },
      { text: "La carència de complements salarials per a persones solteres.", correct: false },
      { text: "La diferència entre el salari mínim i el salari d'un Catedràtic.", correct: false }
    ]
  },
  {
    question: "La conciliació de la vida laboral, familiar i personal és un dret que:",
    answers: [
      { text: "Correspon tant a dones com a homes per fomentar la corresponsabilitat.", correct: true },
      { text: "Es limita legalment a les treballadores que han superat el període de prova.", correct: false },
      { text: "S'ha de compensar amb reduccions de sou proporcionals en tots els casos.", correct: false },
      { text: "Només es preveu per al personal PTGAS, excloent el PDI.", correct: false }
    ]
  },
  {
    question: "La Unitat d'Igualtat de la UB depèn orgànicament de:",
    answers: [
      { text: "El Rectorat.", correct: true },
      { text: "La Gerència.", correct: false },
      { text: "El Servei de Recursos Humans.", correct: false },
      { text: "El Vicerectorat de Recerca.", correct: false }
    ]
  },
  {
    question: "Dins del Pla d'Igualtat de la UB, s'inclouen mesures per a:",
    answers: [
      { text: "La prevenció de la violència de gènere i l'atenció a les víctimes.", correct: true },
      { text: "L'equiparació del preu de la matrícula segons el gènere de l'estudiant.", correct: false },
      { text: "La modificació del nom oficial de les facultats per incloure dones il·lustres.", correct: false },
      { text: "La limitació de l'edat de jubilació forçosa exclusivament per a homes.", correct: false }
    ]
  },
  {
    question: "La diagnosi prèvia a un Pla d'Igualtat serveix per:",
    answers: [
      { text: "Detectar les desigualtats i discriminacions reals dins de la institució per poder actuar.", correct: true },
      { text: "Saber el nivell d'idiomes estrangers de la plantilla femenina.", correct: false },
      { text: "Auditar els deutes econòmics de les comissions d'igualtat.", correct: false },
      { text: "Recollir el nombre de fills de cada membre de la comunitat.", correct: false }
    ]
  },
  {
    question: "El permís de paternitat actual (per naixement i cura de menor) és:",
    answers: [
      { text: "Igual i intransferible per a ambdós progenitors (16 setmanes).", correct: true },
      { text: "Transferible a la mare biològica en cas que el pare no el vulgui gaudir.", correct: false },
      { text: "De 8 setmanes per al progenitor no gestant a l'administració pública.", correct: false },
      { text: "Lliure en durada segons la negociació individual amb el cap d'unitat.", correct: false }
    ]
  },
  {
    question: "Quin paper juga la negociació col·lectiva en la igualtat?",
    answers: [
      { text: "Els plans d'igualtat s'han de negociar amb els representants dels treballadors.", correct: true },
      { text: "És una competència exclusiva del Govern de la Generalitat sense intervenció sindical.", correct: false },
      { text: "Només es negocia la part relativa a les retribucions indirectes.", correct: false },
      { text: "Està prohibit introduir clàusules de gènere en els convenis de la UB.", correct: false }
    ]
  },
  {
    question: "La discriminació per embaràs o maternitat es considera:",
    answers: [
      { text: "Discriminació directa per raó de sexe.", correct: true },
      { text: "Una situació administrativa d'especial protecció però no discriminatòria.", correct: false },
      { text: "Discriminació indirecta si afecta el còmput de l'antiguitat.", correct: false },
      { text: "Un risc psicosocial derivat de la càrrega familiar.", correct: false }
    ]
  },
  {
    question: "El 'techo de cristal' (sostre de vidre) es refereix a:",
    answers: [
      { text: "Les barreres invisibles que dificulten que les dones accedeixin a càrrecs de màxima responsabilitat.", correct: true },
      { text: "La manca de pressupost per a la neteja de les claraboies dels campus.", correct: false },
      { text: "L'absència de protocols de transparència en els concursos d'oposició.", correct: false },
      { text: "La fragilitat legal de les figures contractuals temporals femenines.", correct: false }
    ]
  },
  {
    question: "Les universitats tenen l'obligació legal de tenir un Pla d'Igualtat?",
    answers: [
      { text: "Sí, segons la Llei d'Universitats i la normativa d'igualtat.", correct: true },
      { text: "És una potestat derivada de l'autonomia universitària, no una obligació.", correct: false },
      { text: "Només si es detecta un cas d'assetjament sexual en l'àmbit del Rectorat.", correct: false },
      { text: "Únicament aquelles amb un cens d'estudiants superior a 50.000.", correct: false }
    ]
  },
  {
    question: "Què és la 'corresponsabilitat'?",
    answers: [
      { text: "El repartiment equilibrat de les tasques domèstiques i de cura entre homes i dones.", correct: true },
      { text: "La responsabilitat solidària davant sancions administratives per part del PTGAS.", correct: false },
      { text: "El fet que el PDI i el PTGAS comparteixin pressupost de formació.", correct: false },
      { text: "L'obligació del personal de cobrir les baixes dels seus companys.", correct: false }
    ]
  },
  {
    question: "El distintiu d'igualtat de gènere en l'àmbit laboral s'atorga a:",
    answers: [
      { text: "Empreses i entitats que destaquen en l'aplicació de polítiques d'igualtat.", correct: true },
      { text: "Organitzacions que tenen més del 90% de dones en plantilla.", correct: false },
      { text: "Tots els òrgans de govern que han aprovat un pla d'igualtat.", correct: false },
      { text: "Professores que han realitzat recerca d'alt impacte en estudis de gènere.", correct: false }
    ]
  },
  {
    question: "La formació en igualtat per al personal de la UB busca:",
    answers: [
      { text: "Sensibilitzar i donar eines per identificar i evitar conductes discriminatòries.", correct: true },
      { text: "Uniformar les opinions polítiques de tota la plantilla administrativa.", correct: false },
      { text: "Acreditar hores de formació sense contingut pràctic avaluable.", correct: false },
      { text: "Imposar l'ús d'un llenguatge gramaticalment incorrecte.", correct: false }
    ]
  },
  {
    question: "En cas de detectar un cas d'assetjament a la UB, qualsevol membre pot:",
    answers: [
      { text: "Activar el protocol posant-se en contacte amb la Unitat d'Igualtat o els canals establerts.", correct: true },
      { text: "Ha de tramitar una denúncia prèvia al servei de seguretat de l'edifici.", correct: false },
      { text: "Pot sol·licitar el trasllat immediat de la víctima sense el seu consentiment.", correct: false },
      { text: "Hauria d'informar primer al Síndic de Greuges de forma anònima.", correct: false }
    ]
  },
  /* --- 5 PREGUNTES EXTRAS ESTRATÈGICS --- */
  {
    question: "Quin caràcter tenen les mesures incloses en el Pla d'Igualtat de la UB?",
    answers: [
      { text: "Són d'obligat compliment per a tota la comunitat universitària.", correct: true },
      { text: "Són merament orientatives i no vinculants jurídicament.", correct: false },
      { text: "Són obligatòries només per al personal laboral, no per als funcionaris.", correct: false },
      { text: "Depenen de l'acceptació individual de cada Cap d'Unitat.", correct: false }
    ]
  },
  {
    question: "La Llei 17/2015 defineix la 'discriminació múltiple' com aquella que:",
    answers: [
      { text: "Es produeix quan concorren el sexe i altres causes de discriminació (ètnia, edat, discapacitat, etc.).", correct: true },
      { text: "Quan una persona és discriminada en més d'un centre de treball simultàniament.", correct: false },
      { text: "Quan la discriminació es repeteix més de tres vegades en un any natural.", correct: false },
      { text: "Quan afecta a més d'una persona d'una mateixa unitat administrativa.", correct: false }
    ]
  },
  {
    question: "Quin és el termini màxim general de vigència d'un Pla d'Igualtat?",
    answers: [
      { text: "Quatre anys, tot i que es pot revisar abans si és necessari.", correct: true },
      { text: "Deu anys, coincidint amb el Pla Estratègic de la Universitat.", correct: false },
      { text: "Indefinit, fins que s'aprovi una nova llei orgànica.", correct: false },
      { text: "Un any, amb pròrrogues automàtiques trimestrals.", correct: false }
    ]
  },
  {
    question: "Dins de la UB, qui constitueix la 'Comissió Negociadora del Pla d'Igualtat'?",
    answers: [
      { text: "Representants de la Universitat i representants de les organitzacions sindicals de forma paritària.", correct: true },
      { text: "Exclusivament la Unitat d'Igualtat i el Gerent.", correct: false },
      { text: "Totes les dones que formen part del Consell de Govern.", correct: false },
      { text: "El Síndic de Greuges i els Degans de les Facultats.", correct: false }
    ]
  },
  {
    question: "Segons el Protocol d'Assetjament de la UB, quina és la finalitat de les 'mesures cautelars'?",
    answers: [
      { text: "Protegir a la persona sol·licitant i garantir la integritat de la investigació mentre dura el procediment.", correct: true },
      { text: "Sancionar a la persona presumptament agressora abans de finalitzar l'expedient.", correct: false },
      { text: "Evitar que el cas surti a la llum pública per protegir la imatge de la UB.", correct: false },
      { text: "Eliminar els antecedents administratius del personal implicat.", correct: false }
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