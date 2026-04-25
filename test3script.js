const TEST_ID = "t3"; 
const questions = [
   {
    "n": 1,
    "question": "Segons la LUC, quina és la finalitat principal del sistema universitari de Catalunya?",
    "answers": [
      { "text": "La cohesió social, el progrés econòmic i el desenvolupament cultural de la societat catalana.", "correct": true },
      { "text": "L'exercici de la potestat reglamentària bàsica en matèria d'educació superior de l'Estat.", "correct": false },
      { "text": "La transferència exclusiva de competències executives en matèria de beques no universitàries.", "correct": false },
      { "text": "La gestió i supervisió dels ensenyaments artístics superiors i la formació professional de grau mig.", "correct": false }
    ]
  },
  {
    "n": 2,
    "question": "A qui correspon la competència de creació i reconeixement d'universitats a Catalunya?",
    "answers": [
      { "text": "Al Parlament de Catalunya mitjançant llei.", "correct": true },
      { "text": "Al Govern de la Generalitat mitjançant Decret Legislatiu d'urgència.", "correct": false },
      { "text": "Al Ministeri competent en matèria d'universitats, a proposta del CIC.", "correct": false },
      { "text": "A la comissió de govern del Consell Interuniversitari de Catalunya.", "correct": false }
    ]
  },
  {
    "n": 3,
    "question": "El Consell Interuniversitari de Catalunya (CIC) es defineix com:",
    "answers": [
      { "text": "L'òrgan de coordinació del sistema universitari de Catalunya i de consulta del Govern.", "correct": true },
      { "text": "L'òrgan col·legiat amb funcions d'auditoria externa i fiscalització financera de les universitats.", "correct": false },
      { "text": "L'agència pública amb personalitat jurídica pròpia encarregada de l'avaluació externa de la qualitat.", "correct": false },
      { "text": "L'autoritat administrativa independent encarregada de la inspecció d'obres universitàries.", "correct": false }
    ]
  },
  {
    "n": 4,
    "question": "Quin d'aquests òrgans forma part de l'estructura de govern del Consell Interuniversitari de Catalunya?",
    "answers": [
      { "text": "La Conferència de Rectors i Rectores.", "correct": true },
      { "text": "La Mesa de la Sindicatura de Comptes de Catalunya.", "correct": false },
      { "text": "La Junta de Caps d'Administració de la Generalitat de Catalunya.", "correct": false },
      { "text": "El Ple del Consell de Treball, Econòmic i Social de Catalunya.", "correct": false }
    ]
  },
  {
    "n": 5,
    "question": "Segons la LUC, quin òrgan exerceix les funcions d'avaluació, acreditació i certificació de la qualitat?",
    "answers": [
      { "text": "L'Agència per a la Qualitat del Sistema Universitari de Catalunya (AQU).", "correct": true },
      { "text": "La Comissió de Programació i Ordenació Acadèmica del CIC.", "correct": false },
      { "text": "El Consell Social de la universitat a través de la seva comissió econòmica.", "correct": false },
      { "text": "L'Institut d'Estudis Catalans en la seva funció d'assessorament lingüístic.", "correct": false }
    ]
  },
  {
    "n": 6,
    "question": "El Consell Social es defineix a la LUC com l'òrgan de:",
    "answers": [
      { "text": "Participació de la societat en la universitat.", "correct": true },
      { "text": "Govern acadèmic responsable de l'elaboració dels plans d'estudi.", "correct": false },
      { "text": "Representació estamental de l'estudiantat de postgrau i doctorat.", "correct": false },
      { "text": "Direcció administrativa i gestió dels recursos humans de caràcter funcionarial.", "correct": false }
    ]
  },
  {
    "n": 7,
    "question": "Quina és una funció econòmica pròpia del Consell Social segons la llei catalana?",
    "answers": [
      { "text": "L'aprovació del pressupost i de la programació pluriennal.", "correct": true },
      { "text": "La fixació de les retribucions individuals per mèrits docents del funcionariat.", "correct": false },
      { "text": "L'alienació de béns mobles i immobles de valor històric sense autorització del Govern.", "correct": false },
      { "text": "La determinació del tipus impositiu de les taxes universitàries anuals.", "correct": false }
    ]
  },
  {
    "n": 8,
    "question": "Qui nomena el president o presidenta del Consell Social de la UB?",
    "answers": [
      { "text": "El Govern de la Generalitat de Catalunya.", "correct": true },
      { "text": "El Rector, d'acord amb el Claustre Universitari.", "correct": false },
      { "text": "El Parlament de Catalunya, a proposta de la comissió d'universitats.", "correct": false },
      { "text": "L'Alcalde de Barcelona, un cop oït el Consell de Govern de la UB.", "correct": false }
    ]
  },
  {
    "n": 9,
    "question": "Segons la LUC, el finançament de les universitats públiques catalanes prové principalment de:",
    "answers": [
      { "text": "La Generalitat, mitjançant subvencions i fons vinculats a objectius.", "correct": true },
      { "text": "L'explotació comercial de patents i dividends de societats mercantils adscrites.", "correct": false },
      { "text": "Exclusivament dels preus públics fixats pel Consell de Ministres.", "correct": false },
      { "text": "La gestió d'actius immobiliaris cedits per l'Estat en dret de superfície.", "correct": false }
    ]
  },
  {
    "n": 10,
    "question": "La programació universitària a Catalunya és pluriennal. Quin període sol comprendre?",
    "answers": [
      { "text": "Quatre anys.", "correct": true },
      { "text": "Dos anys, revisables per la Llei de Pressupostos.", "correct": false },
      { "text": "Deu anys, en el marc del Pla Estratègic de Recerca.", "correct": false },
      { "text": "Cinc anys, coincidint amb el mandat del Consell Interuniversitari.", "correct": false }
    ]
  },
  {
    "n": 11,
    "question": "La LUC estableix que la llengua pròpia de les universitats de Catalunya és:",
    "answers": [
      { "text": "El català.", "correct": true },
      { "text": "El català i l'aranès en tot el territori de Catalunya.", "correct": false },
      { "text": "El bilingüisme simètric amb caràcter institucional obligatori.", "correct": false },
      { "text": "La que estableixi l'AQU en funció del grau d'internacionalització.", "correct": false }
    ]
  },
  {
    "n": 12,
    "question": "Quina és la funció de la Junta de Relacions Laborals del CIC?",
    "answers": [
      { "text": "La negociació col·lectiva en l'àmbit de les universitats públiques catalanes.", "correct": true },
      { "text": "L'exercici de la potestat disciplinària sobre el personal laboral.", "correct": false },
      { "text": "La supervisió de la seguretat i salut laboral de les universitats privades.", "correct": false },
      { "text": "L'organització dels processos electorals als òrgans de representació del personal.", "correct": false }
    ]
  },
  {
    "n": 13,
    "question": "Els Estatuts de la UB han de ser publicats en:",
    "answers": [
      { "text": "El Diari Oficial de la Generalitat de Catalunya (DOGC).", "correct": true },
      { "text": "Exclusivament en el Butlletí Oficial de l'Estat (BOE).", "correct": false },
      { "text": "El Butlletí Oficial de la Província de Barcelona.", "correct": false },
      { "text": "La Gaseta Universitària editada pel CIC.", "correct": false }
    ]
  },
  {
    "n": 14,
    "question": "Segons la LUC, la recerca a la universitat té com a objectiu:",
    "answers": [
      { "text": "L'avenç del coneixement i el desenvolupament de la societat.", "correct": true },
      { "text": "L'obtenció exclusiva de rendibilitat financera per a la inversió privada.", "correct": false },
      { "text": "La creació de fons de capital risc per a la Gerència universitària.", "correct": false },
      { "text": "La publicació en repositoris interns sense accés des de l'exterior.", "correct": false }
    ]
  },
  {
    "n": 15,
    "question": "La creació de centres de recerca i instituts universitaris correspon a:",
    "answers": [
      { "text": "El Govern de la Generalitat, a proposta de la universitat.", "correct": true },
      { "text": "El Ministeri de Ciència i Innovació per Reial Decret.", "correct": false },
      { "text": "La junta directiva de l'AQU Catalunya.", "correct": false },
      { "text": "El Síndic de Greuges en col·laboració amb el Consell Social.", "correct": false }
    ]
  },
  {
    "n": 16,
    "question": "El personal acadèmic contractat segons la LUC inclou les figures de:",
    "answers": [
      { "text": "Professor lector, col·laborador, agregat i catedràtic.", "correct": true },
      { "text": "Tècnics superiors de recerca i personal adscrit d'altres administracions.", "correct": false },
      { "text": "Personal funcionari dels cossos docents estatals en règim d'interinitat.", "correct": false },
      { "text": "Personal d'oficis i serveis generals amb contracte d'obra i servei.", "correct": false }
    ]
  },
  {
    "n": 17,
    "question": "Quina entitat emet els informes previs o acreditacions per a la contractació de professorat lector o agregat?",
    "answers": [
      { "text": "L'AQU Catalunya.", "correct": true },
      { "text": "L'Agència Tributària de Catalunya (ATC).", "correct": false },
      { "text": "El Claustre de la universitat mitjançant votació secreta.", "correct": false },
      { "text": "La Comissió Permanent del Consell d'Estat.", "correct": false }
    ]
  },
  {
    "n": 18,
    "question": "La LUC fomenta la mobilitat del professorat i dels investigadors entre:",
    "answers": [
      { "text": "Les universitats, els centres de recerca i les empreses.", "correct": true },
      { "text": "Les diferents seccions sindicals de la universitat.", "correct": false },
      { "text": "L'administració de la universitat i la de l'Estat exclusivament.", "correct": false },
      { "text": "Els campus d'una mateixa província per raons organitatives.", "correct": false }
    ]
  },
  {
    "n": 19,
    "question": "El Síndic de Greuges de la universitat té la funció de:",
    "answers": [
      { "text": "Vetllar pel respecte dels drets i les llibertats de la comunitat universitària.", "correct": true },
      { "text": "Iniciar procediments penals contra els membres del Consell de Govern.", "correct": false },
      { "text": "Sancionar econòmicament l'alumnat per faltes lleus de comportament.", "correct": false },
      { "text": "Dictar resolucions vinculants en matèria de contractació administrativa.", "correct": false }
    ]
  },
  {
    "n": 20,
    "question": "La representació de l'alumnat en el Consell Interuniversitari de Catalunya es canalitza a través de:",
    "answers": [
      { "text": "El Consell de l'Alumnat de Catalunya.", "correct": true },
      { "text": "La Federació d'Associacions de Famílies d'Estudiants Universitaris.", "correct": false },
      { "text": "La Direcció General de Joventut de la Generalitat.", "correct": false },
      { "text": "El sindicat majoritari de l'ensenyament secundari.", "correct": false }
    ]
  },
  {
    "n": 21,
    "question": "Les universitats de Catalunya poden crear campus d'excel·lència en col·laboració amb:",
    "answers": [
      { "text": "Altres universitats, centres de recerca i agents del sistema d'innovació.", "correct": true },
      { "text": "Organitzacions sense ànim de lucre d'àmbit exclusivament municipal.", "correct": false },
      { "text": "Agències de viatges per al foment del turisme idiomàtic.", "correct": false },
      { "text": "Entitats financeres per a l'emissió de títols de deute universitari.", "correct": false }
    ]
  },
  {
    "n": 22,
    "question": "La LUC preveu que les universitats han de garantir l'accés a l'estudi:",
    "answers": [
      { "text": "Mitjançant polítiques de beques i ajuts que complementin les de l'Estat.", "correct": true },
      { "text": "Mitjançant la supressió de totes les taxes de preinscripció i matrícula.", "correct": false },
      { "text": "Únicament als residents a Catalunya amb més de deu anys d'empadronament.", "correct": false },
      { "text": "Subordinant l'accés al patrimoni net de la unitat familiar.", "correct": false }
    ]
  },
  {
    "n": 23,
    "question": "Quin és l'òrgan superior de govern de l'Agència per a la Qualitat (AQU)?",
    "answers": [
      { "text": "El Consell de Govern.", "correct": true },
      { "text": "La Presidència de la Generalitat de Catalunya.", "correct": false },
      { "text": "La Secretaria General d'Universitats de l'Estat.", "correct": false },
      { "text": "La Comissió Acadèmica de la Conferència de Rectors.", "correct": false }
    ]
  },
  {
    "n": 24,
    "question": "L'autonomia de les universitats catalanes, segons la LUC, ha d'anar acompanyada de:",
    "answers": [
      { "text": "La rendició de comptes davant la societat.", "correct": true },
      { "text": "L'exempció total de controls per part de la Sindicatura de Comptes.", "correct": false },
      { "text": "La dependència jeràrquica orgànica del Conseller del ram.", "correct": false },
      { "text": "La reserva d'informació sobre els salaris dels alts càrrecs.", "correct": false }
    ]
  },
  {
    "n": 25,
    "question": "Qui forma part de la comunitat universitària segons la LUC?",
    "answers": [
      { "text": "Personal acadèmic, estudiants i personal tècnic, de gestió i d'administració i serveis.", "correct": true },
      { "text": "Exclusivament el personal amb vinculació funcionarial permanent.", "correct": false },
      { "text": "Tot ciutadà que hagi cursat estudis de batxillerat a Catalunya.", "correct": false },
      { "text": "El personal docent de les escoles de primària vinculades per conveni.", "correct": false }
    ]
  },
  {
    "n": 26,
    "question": "La programació de l'oferta d'ensenyaments universitaris a Catalunya la realitza:",
    "answers": [
      { "text": "El Govern de la Generalitat, oïdes les universitats.", "correct": true },
      { "text": "El Claustre de cada universitat de forma autònoma i vinculant.", "correct": false },
      { "text": "L'Assemblea General del Consell d'Estudiants de Catalunya.", "correct": false },
      { "text": "La Secretaria d'Estat d'Educació de manera centralitzada.", "correct": false }
    ]
  },
  {
    "n": 27,
    "question": "La LUC estableix la possibilitat de crear centres de formació professional integrats en la universitat?",
    "answers": [
      { "text": "Sí, per potenciar la relació entre FP i Universitat.", "correct": true },
      { "text": "No, per evitar la barreja de nivells formatius segons la normativa europea.", "correct": false },
      { "text": "Només és possible en universitats amb caràcter experimental.", "correct": false },
      { "text": "Sí, però els títols obtinguts no tindrien reconeixement oficial.", "correct": false }
    ]
  },
  {
    "n": 28,
    "question": "Quina figura de la LUC és responsable de la gestió econòmica i administrativa sota la direcció del Rector?",
    "answers": [
      { "text": "El Gerent.", "correct": true },
      { "text": "El Secretari General de l'Agència de Qualitat.", "correct": false },
      { "text": "El President de la Comissió Econòmica del Consell Social.", "correct": false },
      { "text": "El Síndic de Comptes delegat per a la universitat.", "correct": false }
    ]
  },
  {
    "n": 29,
    "question": "En les universitats públiques catalanes, el control intern de la gestió econòmica el fa:",
    "answers": [
      { "text": "Un òrgan de control intern propi de la universitat.", "correct": true },
      { "text": "La Intervenció General de l'Administració de l'Estat.", "correct": false },
      { "text": "Una empresa d'auditoria externa triada pel Rector.", "correct": false },
      { "text": "El Consell Municipal de l'ajuntament de la seu universitària.", "correct": false }
    ]
  },
  {
    "n": 30,
    "question": "La integració de la dona en tots els nivells universitaris és un principi de la LUC?",
    "answers": [
      { "text": "Sí, la llei promou la paritat i la igualtat d'oportunitats.", "correct": true },
      { "text": "No és un objectiu recollit en aquesta normativa específica.", "correct": false },
      { "text": "És un principi supeditat a la disponibilitat pressupostària anual.", "correct": false },
      { "text": "S'aplica exclusivament al personal tècnic i d'administració.", "correct": false }
    ]
  },
  {
    "n": 31,
    "question": "Quin òrgan del CIC és el responsable de la coordinació operativa de les universitats en matèria d'accés i programació?",
    "answers": [
      { "text": "La Comissió de Programació i d'Ordenació Acadèmica.", "correct": true },
      { "text": "El Comitè de Direcció de l'AQU.", "correct": false },
      { "text": "La Subdirecció General de Beques i Ajuts.", "correct": false },
      { "text": "La Mesa de Negociació del Personal Acadèmic.", "correct": false }
    ]
  },
  {
    "n": 32,
    "question": "Segons la LUC, per a la contractació de quina figura de professorat és necessari disposar d'una 'acreditació de recerca' emesa per l'AQU?",
    "answers": [
      { "text": "Professor agregat.", "correct": true },
      { "text": "Professor col·laborador permanent.", "correct": false },
      { "text": "Professor emèrit d'honor.", "correct": false },
      { "text": "Professor lector en la seva segona fase de contracte.", "correct": false }
    ]
  },
  {
    "n": 33,
    "question": "La LUC estableix que el personal acadèmic de les universitats públiques catalanes té dret a la llicència per estudis. Qui n'ha de regular les condicions?",
    "answers": [
      { "text": "Els Estatuts de cada universitat.", "correct": true },
      { "text": "La normativa de Funció Pública de l'Estat (TREBEP).", "correct": false },
      { "text": "El Consell Escolar de Catalunya.", "correct": false },
      { "text": "El President del Consell Social per delegació del Govern.", "correct": false }
    ]
  },
  {
    "n": 34,
    "question": "Quin és el règim de dedicació del personal acadèmic contractat (Lector, Agregat, etc.) segons la LUC?",
    "answers": [
      { "text": "Amb caràcter general, la dedicació és a temps complet.", "correct": true },
      { "text": "Sempre a temps parcial, exceptuant el personal de recerca d'elit.", "correct": false },
      { "text": "Flexible, depenent dels objectius anuals de publicació.", "correct": false },
      { "text": "Variable, segons les hores de tutoria assignades pel Degà.", "correct": false }
    ]
  },
  {
    "n": 35,
    "question": "Pel que fa a la transferència de tecnologia, la LUC permet a les universitats participar en el capital de societats mercantils (spin-offs)?",
    "answers": [
      { "text": "Sí, sempre que la finalitat sigui la transferència i explotació del coneixement.", "correct": true },
      { "text": "No, es considera una activitat lucrativa aliena a l'àmbit acadèmic públic.", "correct": false },
      { "text": "Només si l'aportació de capital és exclusivament en espècie (béns mobles).", "correct": false },
      { "text": "Sí, però sense possibilitat de participar en la distribució de beneficis.", "correct": false }
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