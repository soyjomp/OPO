const TEST_ID = "e2018a"; 
const questions = [
  {
    question: "Entre les següents afirmacions sobre els delegats de prevenció de la Universitat de Barcelona n’hi ha una que és incorrecta. Quina és?",
    answers: [
      { text: "Són els representants dels treballadors amb funcions específiques en matèria de prevenció de riscos en el treball.", correct: false },
      { text: "Estan facultats per visitar els llocs de treball a efectes de controlar l’estat de les condicions de treball.", correct: false },
      { text: "Són designats pel rector.", correct: true },
      { text: "Han d’exercir la tasca de vigilància i control sobre el compliment de la normativa de prevenció de riscos laborals.", correct: false }
    ]
  },
  {
    question: "A què fa referència la carrera professional horitzontal?",
    answers: [
      { text: "A la progressió en la carrera professional mitjançant l’assoliment d’un nivell superior dins el mateix grup o subgrup, a partir dels sistemes de provisió de llocs de treball.", correct: false },
      { text: "A la progressió en la carrera professional mitjançant l’assoliment de graus o categories a partir de la valoració de l’acompliment, la trajectòria i l’actuació professional.", correct: true },
      { text: "A la progressió en la carrera professional mitjançant l’assoliment d’un nivell superior amb canvi de grup o subgrup, a partir dels sistemes de provisió de llocs de treball.", correct: false },
      { text: "Al canvi de cos o escala dins del mateix grup o subgrup.", correct: false }
    ]
  },
  {
    question: "Quina d’aquestes matèries es troba exclosa de la obligatorietat de la negociació col·lectiva:",
    answers: [
      { text: "La determinació de condicions de treball del personal directiu.", correct: true },
      { text: "Els criteris generals d’acció social.", correct: false },
      { text: "Les normes que fixen els criteris i mecanismes generals en matèria d’avaluació de l’acompliment.", correct: false },
      { text: "Els criteris generals sobre ofertes d’ocupació pública.", correct: false }
    ]
  },
  {
    question: "El sistema integral d’informació i coneixement en format electrònic de la informació subjecta al règim de transparència s’anomena:",
    answers: [
      { text: "Seu electrònica.", correct: false },
      { text: "Portal web.", correct: false },
      { text: "Portal de transparència.", correct: true },
      { text: "Punt d’accés general.", correct: false }
    ]
  },
  {
    question: "De conformitat amb la legislació de procediment administratiu, la revocació es pot realitzar en relació a:",
    answers: [
      { text: "Actes favorables a l’administrat.", correct: false },
      { text: "Actes desfavorables o de gravamen per a l’administrat.", correct: true },
      { text: "Qualsevol tipus d’actes.", correct: false },
      { text: "Actes en els que concorrin errors materials, de fet o aritmètics.", correct: false }
    ]
  },
  {
    question: "D’acord amb la normativa vigent (RD 822/2021), els ensenyaments de doctorat han de renovar l’acreditació en el termini màxim de:",
    answers: [
      { "text": "Tres anys.", "correct": false },
      { "text": "Sis anys.", "correct": false },
      { "text": "Deu anys.", "correct": true },
      { "text": "Vuit anys.", "correct": false }
    ]
  },
  {
    question: "La convocatòria d’eleccions a rector o rectora per part del Claustre Universitari requereix la iniciativa de:",
    answers: [
      { "text": "Iniciativa d'un terç i aprovació per dos terços dels membres del Claustre.", "correct": true },
      { "text": "Iniciativa de la meitat i aprovació per tres quartes parts.", "correct": false },
      { "text": "Iniciativa d'un quart i aprovació per majoria absoluta.", "correct": false },
      { "text": "Aquesta figura ja no existeix a la nova llei.", "correct": false }
    ]
  },
  {
    question: "En relació al finançament universitari, les aportacions genèriques es realitzen:",
    answers: [
      { text: "Segons criteris objectius, transparents i compatibles, a partir de paràmetres generals comuns a totes les universitats.", correct: true },
      { text: "Mitjançant contractes-programes, estant lligats a objectius específics per la millora de la qualitat de les universitats i per atendre’n les especificitats.", correct: false },
      { text: "Prèvia convocatòria pública dirigida a estimular la millora de la qualitat i a premiar l’excel·lència.", correct: false },
      { text: "Totes les anteriors són certes.", correct: false }
    ]
  },
  {
    question: "Un dels motius que va justificar l’aprovació de la Llei 1/2003, de 19 de febrer, d’universitats de Catalunya va ser la constitució de:",
    answers: [
      { text: "Un espai local d’ensenyament superior.", correct: false },
      { text: "Un espai català d’ensenyament superior.", correct: false },
      { text: "Un espai estatal d’ensenyament superior.", correct: false },
      { text: "Un espai europeu d’ensenyament superior.", correct: true }
    ]
  },
  {
    question: "Una de les conseqüències derivades de la llibertat acadèmica és:",
    answers: [
      { text: "La possibilitat de que la Universitat determini els objectius obligatoris en l’activitat investigadora.", correct: false },
      { text: "La llibertat d’investigació per part dels departaments.", correct: false },
      { text: "La llibertat d’investigació per part dels professors universitaris.", correct: true },
      { text: "La possibilitat de que els Departaments determinin els objectius obligatoris en l’activitat investigadora.", correct: false }
    ]
  },
  {
    question: "Quina definició es correspon a condició de treball, segons la Llei de Prevenció de Riscos Laborals:",
    answers: [
      { text: "La durada de la jornada laboral i la remuneració percebuda.", correct: false },
      { text: "Totes aquelles característiques del treball relatiu a l'organització i ordenació.", correct: false },
      { text: "Les condicions de las màquines, instal·lacions i equips i les de l'entorn mediambiental.", correct: false },
      { text: "Qualsevol característica del treball que pugui tenir una influència significativa a generar riscos per a la seguretat i salut dels treballadors.", correct: true }
    ]
  },
  {
    question: "Assenyala la afirmació correcta:",
    answers: [
      { text: "El professorat honorari és una figura prevista amb vinculació contractual per als professors en edat de jubilació.", correct: false },
      { text: "La condició de professor honorari requereix l’acreditació corresponent emesa per l’Agència per a la Qualitat del Sistema Universitari de Catalunya.", correct: false },
      { text: "L’activitat acadèmica honorària pot ser exercida per professorat contractat en edat de jubilació, a petició de la universitat.", correct: true },
      { text: "La condició de professor honorari requereix la prestació prèvia d’un mínim de vint anys d’activitat en docència i recerca.", correct: false }
    ]
  },
  {
    question: "Quin és el règim respecte als drets de Seguretat Social d’una persona funcionària en situació d’excedència per tenir cura d’un fill?",
    answers: [
      { text: "Mentre estigui en aquesta situació se li computa el temps transcorregut als efectes de drets de Seguretat Social.", correct: true },
      { text: "Durant els dos primers anys se li computa el temps transcorregut als efectes de drets de Seguretat Social.", correct: false },
      { text: "Mentre estigui en aquesta situació no se li computa el temps transcorregut als efectes de drets de Seguretat Social.", correct: false },
      { text: "Durant els dos primers anys, a comptar des de la data de naixement o resolució judicial o administrativa, se li computa el temps transcorregut als efectes de drets de Seguretat Social.", correct: false }
    ]
  },
  {
    question: "D’acord amb el Reglament (UE) 2016/679 del Parlament Europeu i del Consell, el dret de rectificació permet:",
    answers: [
      { text: "Obtenir sense dilació indeguda del responsable del tractament la rectificació de les dades personals inexactes que s’hi refereixin.", correct: true },
      { text: "Obtenir sense dilació indeguda la supressió de les dades personals que li concerneixin.", correct: false },
      { text: "Obtenir la limitació del tractament, exceptuant la seva conservació.", correct: false },
      { text: "Oposar-se en qualsevol moment, per motius relacionats amb la seva situació particular, a que les dades que li concerneixin siguin tractades.", correct: false }
    ]
  },
  {
    question: "La informació pública subjecta al règim de transparència s’ha de difondre:",
    answers: [
      { text: "De manera constant, i actualitzar-se de manera permanent.", correct: true },
      { text: "Anualment.", correct: false },
      { text: "Coincidint amb la finalització dels mandats els òrgans de govern.", correct: false },
      { text: "En el moment en què l’Administració ho consideri convenient.", correct: false }
    ]
  },
  {
    question: "Per a interposar un recurs contenciós-administratiu és necessari:",
    answers: [
      { text: "Que l’acte sigui ferm.", correct: false },
      { text: "Haver esgotat la via administrativa.", correct: true },
      { text: "Haver interposat recurs de reposició.", correct: false },
      { text: "Haver interposat recurs extraordinari de revisió.", correct: false }
    ]
  },
  {
    question: "Els actes de contingut impossible són:",
    answers: [
      { text: "Anul·lables.", correct: false },
      { text: "Actes amb defectes que es poden esmenar.", correct: false },
      { text: "Actes que només produeixen efectes parcials.", correct: false },
      { text: "Nuls de ple dret.", correct: true }
    ]
  },
  {
    question: "D’acord amb el RD 822/2021, al Registro de Universidades, Centros y Títulos (RUCT) s’hi han d’inscriure:",
    answers: [
      { "text": "Els ensenyaments de grau, de màster universitari i de doctorat.", "correct": true },
      { "text": "Els ensenyaments de grau.", "correct": false },
      { "text": "Els ensenyaments de grau i de màster universitari.", "correct": false },
      { "text": "Tots els ensenyaments universitaris, inclosos els títols propis.", "correct": false }
    ]
  },
  {
    question: "La Comissió Econòmica, delegada del Consell de Govern, està conformada per:",
    answers: [
      { text: "El gerent, 8 representants del professorat, 4 estudiants i 2 membres del PAS.", correct: false },
      { text: "El gerent, 8 representants del professorat, 2 estudiants i 4 membres del PAS.", correct: false },
      { text: "El gerent, 8 representants del professorat, 2 estudiants i 2 membres del PAS.", correct: true },
      { text: "El gerent, 8 representants del professorat, 4 estudiants i 4 membres del PAS.", correct: false }
    ]
  },
  {
    question: "Una de les novetats de la Llei 1/2003, de 19 de febrer, d’universitats de Catalunya, va ser:",
    answers: [
      { text: "La regulació del professorat funcionari.", correct: false },
      { text: "La regulació del professorat contractat.", correct: true },
      { text: "La regulació del professorat eventual.", correct: false },
      { text: "La regulació de totes les figures de professorat.", correct: false }
    ]
  },
  {
    question: "El principi de llibertat acadèmica es manifesta en:",
    answers: [
      { text: "La llibertat acadèmica i la possibilitat d’autoorganització.", correct: false },
      { text: "La llibertat de càtedra i l’avaluació de la qualitat de la investigació.", correct: false },
      { text: "Les llibertats de càtedra, investigació i estudi.", correct: true },
      { text: "La llibertat d’estudi i la definició de polítiques socials.", correct: false }
    ]
  },
  {
    question: "L'article 27 de la Constitució reconeix:",
    answers: [
      { text: "La possibilitat que el legislador admeti l'autonomia universitària.", correct: false },
      { text: "L'autonomia universitària i defineix el contingut d'aquesta autonomia.", correct: false },
      { text: "L'autonomia universitària remetent el seu desenvolupament a una Llei.", correct: true },
      { text: "L'autonomia universitària remetent el seu desenvolupament a un Reglament.", correct: false }
    ]
  },
  {
    question: "Qui té el deure de protegir als treballadors de la Universitat de Barcelona davant els riscos laborals:",
    answers: [
      { text: "Els sindicats.", correct: false },
      { text: "L’empresari (i les administracions públiques quan fan la funció d’empresari).", correct: true },
      { text: "El comitè de seguretat i salut.", correct: false },
      { text: "La inspecció de treball i seguretat social.", correct: false }
    ]
  },
  {
    question: "Pel que fa al professorat emèrit, quina de les següents afirmacions és certa:",
    answers: [
      { text: "La seva vinculació amb la universitat és materialitza via contracte laboral.", correct: false },
      { text: "La seva vinculació es realitza mitjançant un contracte de caràcter col·laboratiu.", correct: true },
      { text: "La condició d’emèrit fa que es posposi la jubilació del professor fins la seva finalització.", correct: false },
      { text: "El professorat emèrit té vinculació funcionarial amb la universitat.", correct: false }
    ]
  },
  {
    question: "Segons l’Estatut Bàsic de l’Empleat Públic, quin és el termini de prescripció de les sancions imposades per faltes disciplinàries?",
    answers: [
      { text: "Dos anys per a les sancions imposades per faltes molt greus, un i un any per les greus i sis mesos per les lleus.", correct: false },
      { text: "Tres anys per a les sancions imposades per faltes molt greus, dos anys per les greus i sis mesos per les lleus.", correct: true },
      { text: "Dos anys per a les sancions imposades per faltes molt greus, un i un any per les greus i tres mesos per les lleus.", correct: false },
      { text: "Tres anys per a les sancions imposades per faltes molt greus, dos anys per les greus i un any per les lleus.", correct: false }
    ]
  },
  {
    question: "Quan el tractament de dades es basi en el consentiment de l’interessat:",
    answers: [
      { text: "El consentiment es presumeix al facilitar les dades personals.", correct: false },
      { text: "El responsable ha de ser capaç de demostrar que l’interessat va consentir el tractament de les seves dades personals.", correct: true },
      { text: "El responsable ha de ser capaç de demostrar que l’interessat no es va oposar al tractament de les seves dades personals.", correct: false },
      { text: "L’interessat ha de ser capaç de demostrar que no s’oposa al tractament de les seves dades personals.", correct: false }
    ]
  },
  {
    question: "La informació relativa a la gestió econòmica i pressupostària ha d’incloure:",
    answers: [
      { text: "La informació específica de les retribucions, indemnitzacions i dietes percebudes per cada empleat públic, identificant-los de manera individual.", correct: false },
      { text: "La informació general sobre les retribucions dels empleats públics, sense incloure la informació relativa a indemnitzacions, dietes o altres conceptes.", correct: false },
      { text: "La informació general sobre les retribucions, indemnitzacions i dietes percebudes pels empleats públics, agrupada en funció dels nivells i els cossos.", correct: true },
      { text: "La informació general sobre les retribucions, indemnitzacions i dietes percebudes pels empleats públics que autoritzin expressament.", correct: false }
    ]
  },
  {
    question: "El termini per a la interposició d’un recurs d’alçada és:",
    answers: [
      { text: "1 mes per a actes expressos i 3 mesos per a actes presumptes.", correct: false },
      { text: "1 mes per a actes presumptes i 3 mesos per a actes expressos.", correct: false },
      { text: "1 mes per a actes tant expressos com presumptes.", correct: false },
      { text: "1 mes per a actes expressos i sense termini en relació als actes presumptes.", correct: true }
    ]
  },
  {
    question: "Amb caràcter general, la vàlida constitució d’un òrgan col·legiat requereix:",
    answers: [
      { text: "Únicament l’assistència del President i el Secretari.", correct: false },
      { text: "L’assistència del President, el Secretari i una quarta part dels membres.", correct: false },
      { text: "L’assistència del President, el Secretari i la meitat dels membres.", correct: true },
      { text: "L’assistència de tots els membres de l’òrgan col·legiat.", correct: false }
    ]
  },
  {
    question: "D’acord amb la legislació vigent en els plans d’estudis dels ensenyaments de Grau:",
    answers: [
      { text: "S’hi pot incloure l’elaboració i defensa d’un treball final de Grau.", correct: false },
      { text: "S’ha d’incloure l’elaboració i defensa d’un treball final de Grau només quan sigui de 240 crèdits o més.", correct: false },
      { text: "S’ha d’incloure sempre l’elaboració i defensa d’un treball final de Grau.", correct: true },
      { text: "S’ha d’incloure l’elaboració i defensa d’un treball final de Grau només quan sigui de 300 crèdits o més.", correct: false }
    ]
  },
  {
    question: "En el Consell de Govern s’integren:",
    answers: [
      { text: "Tots els membres del Consell Social.", correct: false },
      { text: "Tots els membres del Consell Social que no pertanyen a la Comunitat Universitària.", correct: false },
      { text: "3 membres del Consell Social que no pertanyin a la Comunitat Universitària.", correct: true },
      { text: "5 membres del Consell Social que no pertanyin a la Comunitat Universitària.", correct: false }
    ]
  },
  {
    question: "L’autonomia universitària comprèn:",
    answers: [
      { text: "L’elaboració dels propis Estatuts i de les restants normes de règim intern.", correct: false },
      { text: "L’elecció, designació i remoció dels corresponents òrgans de govern i representació.", correct: false },
      { text: "L’admissió, règim de permanència i verificació del coneixement dels estudiants.", correct: false },
      { text: "Totes les anteriors són certes.", correct: true }
    ]
  },
  {
    question: "Quines figures de professorat contractat amb caràcter permanent estan previstes actualment a la LOSU i la LUC adaptada?",
    answers: [
      { "text": "Catedràtic d’Universitat i Titular d’Universitat.", "correct": false },
      { "text": "Professorat permanent laboral.", "correct": true },
      { "text": "Professor Agregat i Professor Lector.", "correct": false },
      { "text": "Catedràtic i Professor Agregat (figures antigues de la LUC).", "correct": false }
    ]
  },
  {
    question: "L’Estatut Bàsic de l’Empleat Públic és d’aplicació al personal laboral de les administracions públiques?",
    answers: [
      { text: "Sí, en la seva totalitat.", correct: false },
      { text: "No, el personal laboral es regeix per la legislació laboral.", correct: false },
      { text: "Li són d’aplicació aquelles disposicions que així ho assenyalen.", correct: true },
      { text: "El personal laboral està equiparat al personal funcionari.", correct: false }
    ]
  },
  {
    question: "El principi de “minimització de dades” comporta que:",
    answers: [
      { text: "Les dades han de ser tractades de manera lícita, lleial i transparent.", correct: false },
      { text: "Les dades han de ser recollides amb finalitats determinades, explícites i legítimes.", correct: false },
      { text: "Les dades recollides han de ser adequades, pertinents i limitades a allò necessari.", correct: true },
      { text: "Les dades han de ser exactes i, si fos necessari, actualitzades.", correct: false }
    ]
  },
  {
    question: "Amb caràcter general, els actes administratius són eficaços des del moment en què:",
    answers: [
      { text: "Es dicten.", correct: true },
      { text: "Es dicten i es notifiquen.", correct: false },
      { text: "Esdevenen ferms en via administrativa.", correct: false },
      { text: "Esdevenen ferms en qualsevol instància.", correct: false }
    ]
  },
  {
    question: "Els òrgans administratius:",
    answers: [
      { text: "Tenen personalitat jurídica.", correct: false },
      { text: "No tenen personalitat jurídica, però les seves decisions vinculen a l’Administració.", correct: true },
      { text: "No tenen personalitat jurídica, i les seves decisions no vinculen.", correct: false },
      { text: "No tenen personalitat jurídica ni capacitat d’adoptar decisions.", correct: false }
    ]
  },
  {
    question: "D’acord amb la LOSU, són ensenyaments universitaris oficials:",
    answers: [
      { "text": "Els ensenyaments de grau.", "correct": false },
      { "text": "Els ensenyaments de grau i màster universitari.", "correct": false },
      { "text": "Els ensenyaments de grau, màster universitari i doctorat.", "correct": true },
      { "text": "Tots els ensenyaments que imparteix la Universitat.", "correct": false }
    ]
  },
  {
    question: "Les resolucions administratives adoptades per delegació es consideraran dictades:",
    answers: [
      { text: "Per l’òrgan delegat.", correct: false },
      { text: "Per l’òrgan delegant.", correct: true },
      { text: "Conjuntament per l’òrgan delegat i per l’òrgan delegant.", correct: false },
      { text: "De manera solidària per l’òrgan delegat i per l’òrgan delegant.", correct: false }
    ]
  },
  {
    question: "El Síndic de Greuges de la Universitat de Barcelona, en la seva actuació:",
    answers: [
      { text: "Està sotmès al mandat imperatiu del Consell Social.", correct: false },
      { text: "Està sotmès al mandat imperatiu del Rectorat.", correct: false },
      { text: "Està sotmès al mandat imperatiu de les instàncies universitàries superiors.", correct: false },
      { text: "No està sotmès al mandat imperatiu de cap instància i es regeix per independència.", correct: true }
    ]
  },
  {
    question: "Quins són els elements a establir i valorar en el sistema de provisió de llocs de treball mitjançant concurs?",
    answers: [
      { text: "els mèrits i la capacitat dels aspirants.", correct: false },
      { text: "els mèrits, la capacitat, la valoració del treball desenvolupat, formació, antiguitat, grau, titulacions i català.", correct: false },
      { text: "els mèrits, la capacitat i la valoració del treball desenvolupat.", correct: true },
      { text: "els mèrits, la capacitat, la valoració del treball, formació, antiguitat, iniciativa, grau, titulacions i català.", correct: false }
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
