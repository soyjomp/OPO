const TEST_ID = "e2009a"; 
const questions = [
  {
    question: "Segons l'Estatut de la UB, no és competència del Claustre Universitari:",
    answers: [
      { text: "Elaborar i modificar l'Estatut.", correct: false },
      { text: "Elegir el síndic de greuges.", correct: false },
      { text: "Formular preguntes al Consell de Direcció.", correct: false },
      { text: "Elaborar i difondre les polítiques de prevenció de riscos laborals i de protecció del medi ambient.", correct: true }
    ]
  },
  {
    question: "Què s'entén per autenticació, en matèria de protecció de dades i seguretat de la informació?",
    answers: [
      { text: "La còpia de les dades d'un fitxer.", correct: false },
      { text: "El document informatiu sobre el tractament.", correct: false },
      { text: "El procediment de comprovació de la identitat d'un usuari.", correct: true },
      { text: "La compulsa d'un document oficial.", correct: false }
    ]
  },
  {
    question: "D'acord amb l'Estatut d'autonomia de Catalunya, l'organització territorial de Catalunya està constituïda per:",
    answers: [
      { text: "Municipis i diputacions, i comarques en l'àmbit supramunicipal.", correct: false },
      { text: "Municipis i vegueries, i comarques en l'àmbit supramunicipal, amb l'opció de creació d'altres ens.", correct: true },
      { text: "Municipis i diputacions, sense l'opció de creació d'altres ens.", correct: false },
      { text: "Només municipis i províncies.", correct: false }
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
    question: "Segons l'Estatut de la UB, el gerent és responsable, davant el rector i davant el Consell de Govern:",
    answers: [
      { text: "De l'organització dels serveis administratius i econòmics i del personal d'administració i serveis.", correct: true },
      { text: "De la gestió directa del personal docent i investigador.", correct: false },
      { text: "De tot el personal que treballa a la UB per igual.", correct: false },
      { text: "Exclusivament davant el Claustre.", correct: false }
    ]
  },
  {
    question: "Segons la LOSU (Llei Orgànica 2/2023), el Consell de Govern de les universitats públiques:",
    answers: [
      { text: "Estarà format per un màxim de 50 membres, incloent el rector, que el presideix, el secretari general i el gerent.", correct: true },
      { text: "Estarà format per tots els degans i directors d'escola obligatòriament.", correct: false },
      { text: "Té un nombre il·limitat de representants dels estudiants.", correct: false },
      { text: "Està format exclusivament pel Consell de Direcció.", correct: false }
    ]
  },
  {
    question: "D'acord amb la LOSU (Llei 2/2023), els cossos docents universitaris estan formats per:",
    answers: [
      { text: "Catedràtics d'universitat, titulars d'universitat i catedràtics d'escola universitària.", correct: false },
      { text: "Catedràtics d'universitat i professors titulars d'universitat.", correct: true },
      { text: "Catedràtics d'universitat, titulars d'universitat i professors lectors.", correct: false },
      { text: "Professorat permanent laboral i funcionaris de carrera.", correct: false }
    ]
  },
  {
    question: "Segons la Llei 39/2015, quan són objecte de publicació els actes administratius en lloc de notificació individual?",
    answers: [
      { text: "Quan l'acte tingui per destinatari una pluralitat indeterminada de persones.", correct: true },
      { text: "Sempre que hi hagi una resolució que posi fi a la via administrativa.", correct: false },
      { text: "Quan ho sol·liciti qualsevol ciutadà interessat.", correct: false },
      { text: "Sempre que l'acte sigui dictat pel Rector.", correct: false }
    ]
  },
  {
    question: "Segons la LOSU i l'actualització de l'Estatut, quina d'aquestes categories ja NO s'integra com a nova contractació laboral de caràcter permanent?",
    answers: [
      { text: "Professorat Titular d'Universitat (és cos de funcionaris).", correct: true },
      { text: "Professorat Permanent Laboral.", correct: false },
      { text: "Professorat Lector.", correct: false },
      { text: "Professorat Associat.", correct: false }
    ]
  },
  {
    question: "Els crèdits ECTS mesuren:",
    answers: [
      { text: "El volum total de treball que l'estudiant ha de realitzar per superar l'assignatura (classes, estudi, pràctiques, etc.).", correct: true },
      { text: "Exclusivament les hores de classe presencial.", correct: false },
      { text: "Només les hores de pràctiques garantides en laboratoris.", correct: false },
      { text: "La durada dels exàmens finals.", correct: false }
    ]
  },
  {
    question: "Quin dels següents és un òrgan col·legiat a la Universitat de Barcelona?",
    answers: [
      { text: "El Rector.", correct: false },
      { text: "El Gerent.", correct: false },
      { text: "El Secretari General.", correct: false },
      { text: "La Junta de Facultat.", correct: true }
    ]
  },
  {
    question: "D'acord amb la Llei 39/2015, és un dret de les persones en les seves relacions amb les administracions públiques:",
    answers: [
      { text: "No presentar documents originals, tret que la normativa reguladora estableixi el contrari de manera excepcional.", correct: true },
      { text: "Haver de pagar per obtenir còpies simples dels expedients.", correct: false },
      { text: "Poder ser discriminat per raó de la llengua oficial triada.", correct: false },
      { text: "Tenir accés exclusiu només als registres en paper.", correct: false }
    ]
  },
  {
    question: "Segons l'Estatut de la UB, el rector:",
    answers: [
      { text: "Presideix el Claustre Universitari, el Consell de Govern i la Junta Consultiva.", correct: true },
      { text: "Presideix el Claustre Universitari, el Consell de Govern i el Consell Social.", correct: false },
      { text: "Presideix el Consell Social i el Claustre.", correct: false },
      { text: "És la màxima autoritat i presideix tots els òrgans de la Universitat sense excepció.", correct: false }
    ]
  },
  {
    question: "De conformitat amb la Llei de Contractes del Sector Públic actual, quina naturalesa té una fundació del Grup UB?",
    answers: [
      { text: "Entitat del sector públic que té la consideració de poder adjudicador no Administració pública (PANAP).", correct: true },
      { text: "Administració pública territorial.", correct: false },
      { text: "Entitat privada aliena al sector públic.", correct: false },
      { text: "Organisme autònom administratiu.", correct: false }
    ]
  },
  {
    question: "Segons l'Estatut de la UB, és competència del secretari general:",
    answers: [
      { text: "Garantir la publicitat dels acords i dirigir el Registre i l'Arxiu General de la Universitat.", correct: true },
      { text: "Exercir la representació legal de la universitat en judici.", correct: false },
      { text: "La gestió econòmica i pressupostària de la universitat.", correct: false },
      { text: "L'organització de la docència de tots els graus.", correct: false }
    ]
  },
  {
    question: "L'autonomia de les universitats és un dret reconegut a:",
    answers: [
      { text: "L'article 27.10 de la Constitució Espanyola.", correct: true },
      { text: "L'Estatut dels Treballadors.", correct: false },
      { text: "Exclusivament a la Llei de Pressupostos.", correct: false },
      { text: "Al Codi Civil.", correct: false }
    ]
  },
  {
    question: "Segons l'Estatut de la UB, el personal acadèmic (PDI) està format:",
    answers: [
      { text: "Pel professorat dels cossos docents universitaris i pel professorat contractat (permanent o temporal).", correct: true },
      { text: "Exclusivament per catedràtics i titulars.", correct: false },
      { text: "Només pel personal funcionari.", correct: false },
      { text: "Pel PAS i el PDI conjuntament.", correct: false }
    ]
  },
  {
    question: "El Comitè de Seguretat i Salut en matèria de prevenció de riscos laborals:",
    answers: [
      { text: "És l'òrgan col·legiat i paritari de participació destinat a la consulta regular de les actuacions de l'empresa en prevenció.", correct: true },
      { text: "Està format només per membres triats pel Rector.", correct: false },
      { text: "Només existeix en centres de menys de 10 treballadors.", correct: false },
      { text: "És un òrgan exclusivament sindical.", correct: false }
    ]
  },
  {
    question: "Quin d'aquests drets pot veure's limitat o suspès segons la Constitució Espanyola en els estats d'excepció o siti?",
    answers: [
      { text: "El dret de vaga.", correct: true },
      { text: "El dret a la vida.", correct: false },
      { text: "El dret a la dignitat humana.", correct: false },
      { text: "La Constitució no permet suspendre cap dret fonamental en cap cas.", correct: false }
    ]
  },
  {
    question: "Segons l'Estatut de la UB, en la Relació de Llocs de Treball (RLT) del PAS, s'ha d'explicitar per a cada lloc de treball:",
    answers: [
      { text: "La denominació, la unitat adscrita, els requisits per ocupar-lo i les retribucions complementàries.", correct: true },
      { text: "Només el nom del funcionari que l'ocupa.", correct: false },
      { text: "El pressupost total de la universitat.", correct: false },
      { text: "Exclusivament els horaris d'entrada i sortida.", correct: false }
    ]
  },
  {
    question: "Exhaureixen la via administrativa (posen fi a la via administrativa) a la Universitat:",
    answers: [
      { text: "Les resolucions del rector i els acords del Consell de Govern, del Claustre i del Consell Social.", correct: true },
      { text: "Només les decisions del Degà.", correct: false },
      { text: "Únicament les resolucions de caràcter disciplinari.", correct: false },
      { text: "Cap acte de la Universitat, tots són recurribles en alçada.", correct: false }
    ]
  },
  {
    question: "Segons la Llei 39/2015, quan una norma no determina el termini màxim per resoldre i notificar, el termini per defecte és de:",
    answers: [
      { text: "Tres mesos.", correct: true },
      { text: "Sis mesos.", correct: false },
      { text: "Un mes.", correct: false },
      { text: "Deu dies.", correct: false }
    ]
  },
  {
    question: "Segons la Llei 39/2015, si en el primer intent de notificació al domicili no hi ha ningú, cal:",
    answers: [
      { text: "Repetir l'intent una sola vegada en una hora diferent dins dels tres dies següents.", correct: true },
      { text: "Publicar-ho directament al BOE.", correct: false },
      { text: "Deixar la notificació sota la porta.", correct: false },
      { text: "Arxivar l'expedient per falta de col·laboració.", correct: false }
    ]
  },
  {
    question: "Segons l'Estatut de la UB, l'organització de les tutories acadèmiques és competència de:",
    answers: [
      { text: "Els consells d'estudis.", correct: true },
      { text: "El Rectorat directament.", correct: false },
      { text: "El Consell Social.", correct: false },
      { text: "La Secretaria General.", correct: false }
    ]
  },
  {
    question: "L'estructura actual dels ensenyaments universitaris oficials segons el RD 822/2021 és:",
    answers: [
      { text: "Grau, Màster i Doctorat.", correct: true },
      { text: "Llicenciatura, Diplomatura i Doctorat.", correct: false },
      { text: "Grau i Postgrau.", correct: false },
      { text: "Grau, Màster i Especialització.", correct: false }
    ]
  },
  {
    question: "Segons la Llei 40/2015, els principis d'organització i funcionament de les administracions públiques inclouen:",
    answers: [
      { text: "Eficàcia, jerarquia, descentralització, desconcentració i coordinació.", correct: true },
      { text: "Competència deslleial i secretisme.", correct: false },
      { text: "Centralització absoluta i opacitat.", correct: false },
      { text: "Avocació obligatòria de totes les competències.", correct: false }
    ]
  },
  {
    question: "Segons l'Estatut d'Autonomia, la Generalitat té competència en matèria d'universitats:",
    answers: [
      { text: "Competència compartida, que inclou en tot cas la regulació del règim d'accés a les universitats.", correct: true },
      { text: "Cap competència, és tot de l'Estat.", correct: false },
      { text: "Competència exclusiva en la concessió de títols del Rei.", correct: false },
      { text: "Competència només sobre els edificis.", correct: false }
    ]
  },
  {
    question: "Com s'han de practicar les notificacions preferentment segons la Llei 39/2015?",
    answers: [
      { text: "Per mitjans electrònics i, en tot cas, quan l'interessat hi estigui obligat.", correct: true },
      { text: "Sempre en paper certificat.", correct: false },
      { text: "Per telèfon mitjançant SMS.", correct: false },
      { text: "A través del tauler d'anuncis de la facultat.", correct: false }
    ]
  },
  {
    question: "El secretari d'un òrgan col·legiat que no és membre de ple dret d'aquest òrgan:",
    answers: [
      { text: "Té veu però no té vot.", correct: true },
      { text: "Té veu i vot igual que els altres.", correct: false },
      { text: "No pot parlar durant les sessions.", correct: false },
      { text: "Té vot però no veu.", correct: false }
    ]
  },
  {
    question: "En la delegació de competències (Llei 40/2015):",
    answers: [
      { text: "Es transfereix l'exercici de la competència, però no la titularitat.", correct: true },
      { text: "Es transfereix la titularitat de la competència.", correct: false },
      { text: "Es transfereix la responsabilitat última de l'òrgan delegant.", correct: false },
      { text: "Només es pot fer entre òrgans que no depenen l'un de l'altre.", correct: false }
    ]
  },
  {
    question: "En els procediments iniciats a sol·licitud de l'interessat, el silenci administratiu és generalment:",
    answers: [
      { text: "Positiu (estimatori), excepte que una norma amb rang de llei o dret de la UE disposi el contrari.", correct: true },
      { text: "Sempre negatiu.", correct: false },
      { text: "Sempre positiu en recursos d'alçada contra silencis previs.", correct: false },
      { text: "Inexistent en la nova llei.", correct: false }
    ]
  },
  {
    question: "El sistema general de provisió de llocs de treball per al personal funcionari de carrera és:",
    answers: [
      { text: "El concurs.", correct: true },
      { text: "La lliure designació per a tots els llocs.", correct: false },
      { text: "L'oposició directa interna.", correct: false },
      { text: "El sorteig públic.", correct: false }
    ]
  },
  {
    question: "L'eficàcia dels actes administratius:",
    answers: [
      { text: "Es presumeix des que es dicten, però pot quedar demorada a la notificació o publicació.", correct: true },
      { text: "És sempre immediata, encara que no se sàpiga que existeixen.", correct: false },
      { text: "Només comença quan han passat 30 dies.", correct: false },
      { text: "Requereix sempre la signatura del ciutadà.", correct: false }
    ]
  },
  {
    question: "El termini màxim que pot fixar una norma per resoldre i notificar un procediment no pot excedir de:",
    answers: [
      { text: "Six mesos, llevat que una Llei estableixi un termini més llarg o ho prevegi el dret de la UE.", correct: true },
      { text: "Tres mesos invariables.", correct: false },
      { text: "Un any.", correct: false },
      { text: "No hi ha límit màxim.", correct: false }
    ]
  },
  {
    question: "L'organització de la prevenció a la Universitat:",
    answers: [
      { text: "És una obligació de l'empresari (la Universitat) en compliment de la Llei de Prevenció de Riscos Laborals.", correct: true },
      { text: "És voluntària per als centres públics.", correct: false },
      { text: "Només és obligatòria si els sindicats ho demanen.", correct: false },
      { text: "Depèn de la decisió individual de cada degà.", correct: false }
    ]
  },
  {
    question: "Segons l'Estatut de la UB, quin d'aquests no és un dret del personal tècnic, de gestió i d'administració i serveis (PTGAS)?",
    answers: [
      { text: "Triar lliurement el seu horari sense comunicar-ho a la gerència.", correct: true },
      { text: "Participar en la formació i perfeccionament professional.", correct: false },
      { text: "La llibertat de sindicació.", correct: false },
      { text: "Participar en els òrgans de representació de la Universitat.", correct: false }
    ]
  },
  {
    question: "Què ha d'incloure la Relació de Llocs de Treball (RLT)?",
    answers: [
      { text: "Tots els llocs de treball de funcionaris i personal laboral existents.", correct: true },
      { text: "Només els llocs dels alts càrrecs.", correct: false },
      { text: "Únicament el personal interí de reforç.", correct: false },
      { text: "Només els llocs que estan buits.", correct: false }
    ]
  },
  {
    question: "Qui elegeix el Síndic de Greuges de Catalunya?",
    answers: [
      { text: "El Parlament de Catalunya, per una majoria de tres cinquenes parts.", correct: true },
      { text: "El President de la Generalitat per decret.", correct: false },
      { text: "Els jutges del Tribunal Superior de Justícia de Catalunya.", correct: false },
      { text: "El poble en eleccions directes.", correct: false }
    ]
  },
  {
    question: "Els actes de les administracions públiques subjectes al dret administratiu es presumeixen vàlids i produeixen efectes:",
    answers: [
      { text: "Des de la data en què es dicten, llevat que s'hi disposi una altra cosa.", correct: true },
      { text: "Només quan el ciutadà diu que hi està d'acord.", correct: false },
      { text: "Passat un year de la seva signatura.", correct: false },
      { text: "Quan es publiquen al Diari Oficial de la Generalitat obligatòriament.", correct: false }
    ]
  },
  {
    question: "Segons el Decret Legislatiu 1/1997, el retard o descuit en el cumplimiento de les funcions quan no suposi un dany greu és:",
    answers: [
      { text: "Una falta lleu.", correct: true },
      { text: "Una falta molt greu.", correct: false },
      { text: "No és motiu de sanció.", correct: false },
      { text: "Causa d'acomiadament immediat.", correct: false }
    ]
  },
  {
    question: "El personal que ocupa places reservades a funcionaris per raons d'urgència o necessitat, amb caràcter transitori, és:",
    answers: [
      { text: "Personal funcionari interí.", correct: true },
      { text: "Personal eventual (de confiança).", correct: false },
      { text: "Personal laboral fix.", correct: false },
      { text: "Becari.", correct: false }
    ]
  },
  {
    question: "Segons el TREBEP, són principis ètics i de conducta dels empleats públics:",
    answers: [
      { text: "Objectivitat, integritat, neutralitat i imparcialitat.", correct: true },
      { text: "Secretisme i arbitrarietat en les decisions.", correct: false },
      { text: "Lucre personal i preferència de familiars.", correct: false },
      { text: "Obediència cega encara que l'ordre sigui clarament il·legal.", correct: false }
    ]
  },
  {
    question: "Segons la Llei 39/2015, quan un termini es fixa per dies, s'entén que aquests són:",
    answers: [
      { text: "Hàbils, excloent dissabtes, diumenges i festius.", correct: true },
      { text: "Naturals (tots els dies compten).", correct: false },
      { text: "Hàbils, però incloent els dissabtes al matí.", correct: false },
      { text: "Depèn de si el ciutadà treballa o no.", correct: false }
    ]
  },
  {
    question: "En matèria de contractació a la UB, segons el llindar actual (contracte d'obres > 40.000€ o serveis/subministraments > 15.000€), qui és habitualment l'òrgan de contractació per a quanties elevades?",
    answers: [
      { text: "El Rector.", correct: true },
      { text: "El Consell d'Estudiants.", correct: false },
      { text: "El Director de Departament sense autorització.", correct: false },
      { text: "L'empresa subministradora.", correct: false }
    ]
  },
  {
    question: "Correspon al Rector de la Universitat de Barcelona:",
    answers: [
      { text: "Adoptar les decisions relatives a les situacions administratives i al règim disciplinari del personal.", correct: true },
      { text: "Només signar els títols de Grau.", correct: false },
      { text: "Exercir de Secretari en les actes del Claustre.", correct: false },
      { text: "Triar el President del Consell Social.", correct: false }
    ]
  },
  {
    question: "Segons l'Estatut de la UB, respecte a l'estructura del Consell de Direcció:",
    answers: [
      { text: "El Rector pot anomenar Vicerectors per assistir-lo en les seves funcions, sense un nombre mínim fixat per l'Estatut.", correct: true },
      { text: "És obligatori tenir un Vicerector d'Estudiants per Llei.", correct: false },
      { text: "Només pot haver-hi dos Vicerectors.", correct: false },
      { text: "Els Vicerectors són elegits pel Claustre.", correct: false }
    ]
  },
  {
    question: "Quina autoritat té la funció de vigilància i control de la normativa de prevenció de riscos laborals?",
    answers: [
      { text: "La Inspecció de Treball i Seguretat Social.", correct: true },
      { text: "Només el Consell Social de la UB.", correct: false },
      { text: "El Síndic de Greuges.", correct: false },
      { text: "Els Mossos d'Esquadra.", correct: false }
    ]
  },
  {
    question: "Segons el RGPD i la LOPDGDD, el deure de confidencialitat sobre les dades de caràcter personal recau sobre:",
    answers: [
      { text: "El responsable i l'encarregat del tractament, així com qualsevol persona que hi intervingui.", correct: true },
      { text: "Només el Rector de la universitat.", correct: false },
      { text: "És opcional si les dades són públiques.", correct: false },
      { text: "Cessa quan la persona deixa de treballar a la universitat.", correct: false }
    ]
  },
  {
    question: "Són actes nuls de ple dret (Llei 39/2015):",
    answers: [
      { text: "Els que tinguin un contingut impossible o siguin dictats prescindint totalment del procediment legal establert.", correct: true },
      { text: "Qualsevol acte que contingui una falta d'ortografia.", correct: false },
      { text: "Els que es dictin fora de termini per dos dies.", correct: false },
      { text: "Els que no agradin a l'interessat.", correct: false }
    ]
  },
  {
    question: "D'acord amb la LOSU (Llei 2/2023), el professorat lector (Ajudant Doctor):",
    answers: [
      { text: "Es contracta amb caràcter temporal per un màxim de 6 anys.", correct: true },
      { text: "És funcionari de carrera des del primer dia.", correct: false },
      { text: "No requereix el títol de Doctor.", correct: false },
      { text: "Només pot fer tasques d'investigació, mai docents.", correct: false }
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
