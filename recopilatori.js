const TEST_ID = "recopilatori"; 

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
    {
    question: "Un auxiliar d'una facultat rep l'encàrrec de convocar una reunió ordinària del Consell d'Estudis pel proper 10 de febrer. Quina és la primera acció preparatòria que hauria de realitzar abans de formalitzar la convocatòria?",
    answers: [
      { text: "Redactar l'acta de la sessió anterior.", correct: false },
      { text: "Comunicar als membres la data prevista per tal que realitzin una reserva d'agenda.", correct: true },
      { text: "Enviar directament la documentació tècnica per correu electrònic.", correct: false },
      { text: "Publicar l'ordre del dia al tauler d'anuncis de la Facultat.", correct: false }
    ]
  },
  {
    question: "En redactar la convocatòria per a un Consell d'Estudis, on s'ha d'aprovar un Informe d'Avaluació Intern, quina fórmula s'ha d'utilitzar per a aquest punt de l'Ordre del dia?",
    answers: [
      { text: "Aprovació, si escau, de l'Informe d'Avaluació Intern.", correct: true },
      { text: "Debat i lectura obligatòria de l'Informe d'Avaluació.", correct: false },
      { text: "Resolució ferma i definitiva de l'Informe d'Avaluació.", correct: false },
      { text: "Aprovació per silenci administratiu de l'Informe.", correct: false }
    ]
  },
  {
    question: "D'acord amb l'Estatut de la Universitat de Barcelona, quina d'aquestes funcions correspon als Consells d'Estudis de l'ensenyament?",
    answers: [
      { text: "La contractació de personal administratiu de suport.", correct: false },
      { text: "Vetllar per la coherència i la interrelació de les matèries del pla d'estudis.", correct: true },
      { text: "L'aprovació del pressupost anual de la Universitat.", correct: false },
      { text: "La resolució de recursos d'alçada contra el Rector.", correct: false }
    ]
  },

  // --- BLOQUE: ORGANIZACIÓN DE ACTOS Y PREVENCIÓN ---
  {
    question: "En l'organització d'un acte de graduació que inclou una conferència, un lliurament de diplomes i un refrigeri final, quina gestió logística es considera essencial des del punt de vista de l'auxiliar organitzador?",
    answers: [
      { text: "Contractar un servei de seguretat privada per a cada alumne.", correct: false },
      { text: "Reservar els espais necessaris (sala d'actes i vestíbul) i coordinar els serveis de suport (neteja i audiovisuals).", correct: true },
      { text: "Enviar una invitació per correu postal certificat a cada professor de la universitat.", correct: false },
      { text: "Comprar obsequis de luxe per a tots els assistents de l'acte.", correct: false }
    ]
  },
  {
    question: "Segons el Pla de Prevenció de la UB, quina obligació té el personal (PTGAS i PDI) davant una situació que pugui comportar un risc per a la seguretat a l'edifici?",
    answers: [
      { "text": "Esperar a la revisió anual del servei de manteniment.", "correct": false },
      { "text": "Informar l'OSSMA (Oficina de Seguretat, Salut i Medi Ambient) sobre la situació de risc.", "correct": true },
      { "text": "Intentar solucionar el problema tècnic de forma autònoma.", "correct": false },
      { "text": "No fer res si el risc no afecta directament el seu lloc de treball.", "correct": false }
    ]
  },

  // --- BLOQUE: DOCUMENTACIÓN ADMINISTRATIVA Y CLASSIFICACIÓN ---
  {
    question: "Una tècnica que ha superat un curs de formació necessita acreditar-ho immediatament per a un concurs, però els diplomes encara no s'han imprès. Quin document hauria d'emetre l'Oficina de Formació per acreditar aquesta superació?",
    answers: [
      { text: "Una diligència de 'Faig constar' o un certificat signat per la persona responsable.", correct: true },
      { text: "Una nota informativa sense segell oficial.", correct: false },
      { text: "Una còpia del llistat d'assistència firmat pels alumnes.", correct: false },
      { text: "Una declaració responsable de l'alumna interessada.", correct: false }
    ]
  },
  {
    question: "D'acord amb el text refós de l'Estatut Bàsic de l'Empleat Públic (EBEP), en quin subgrup de classificació professional s'enquadra l'Escala Auxiliar Administrativa de la UB?",
    answers: [
      { text: "Subgrup A2.", correct: false },
      { text: "Subgrup C1.", correct: false },
      { text: "Subgrup C2.", correct: true },
      { text: "Grup B.", correct: false }
    ]
  },
  {
    question: "En la redacció d'un certificat oficial, quina és la fórmula de tancament estàndard utilitzada per indicar la finalitat del document?",
    answers: [
      { text: "Atentament, us saluda la secretaria.", correct: false },
      { text: "I, perquè consti i tingui els efectes que corresponguin, expedeixo aquest certificat a petició de la persona interessada.", correct: true },
      { text: "Aquest document és vàlid només per a ús intern universitari.", correct: false },
      { text: "Es dóna per finalitzat el tràmit de certificació en el dia d'avui.", correct: false }
    ]},
    { "question": "Quin principi d’organització administrativa pot ser aplicat tant dins d’una mateixa Administració Pública com entre diferents Administracions Públiques:", "answers": [
      { "text": "Jerarquia", "correct": false },
      { "text": "Descentralització", "correct": false },
      { "text": "Desconcentració", "correct": false },
      { "text": "Coordinació i cooperació", "correct": true }
  ]},
  { "question": "Què és el CSV en la signatura electrònica?", "answers": [
      { "text": "Codi Segur de Verificació", "correct": true },
      { "text": "Codi Sintàctic de Vigilància", "correct": false },
      { "text": "Codi Seguer per Viatjar", "correct": false },
      { "text": "Codi simple de Verificació", "correct": false }
  ]},
  { "question": "Un funcionari crea un fitxer per a la gestió pròpia de la unitat amb dades de caràcter personal. Des del punt de vista de la legalitat vigent (RGPD i LOPDGDD):", "answers": [
      { "text": "És un tractament de dades exempt d’aplicar la normativa", "correct": false },
      { "text": "És un tractament de dades públiques exempt d’aplicar la normativa", "correct": false },
      { "text": "És un tractament de dades personals subjecte a la normativa", "correct": true },
      { "text": "No és un tractament de dades si no es comparteix amb tercers", "correct": false }
  ]},
  { "question": "D’acord amb la legislació vigent, poden oferir títols de grau:", "answers": [
      { "text": "Només les universitats públiques", "correct": false },
      { "text": "Tant les universitats públiques com les privades", "correct": true },
      { "text": "Les universitats públiques qualsevol grau i les privades només títols propis", "correct": false },
      { "text": "Només els centres adscrits de la Generalitat", "correct": false }
  ]},
  { "question": "Els serveis públics mitjançant l’Administració electrònica són accessibles per la ciutadania?", "answers": [
      { "text": "De dilluns a divendres en horari de matí", "correct": false },
      { "text": "Només els dies laborables", "correct": false },
      { "text": "24 hores els 7 dies de la setmana", "correct": true },
      { "text": "24 hores excepte els festius oficials", "correct": false }
  ]},
  { "question": "L’òrgan col·legiat de govern d’una facultat és:", "answers": [
      { "text": "El degà o degana", "correct": false },
      { "text": "La Junta de Facultat", "correct": true },
      { "text": "La Comissió de la Facultat", "correct": false },
      { "text": "El Consell de Govern de la Facultat", "correct": false }
  ]},
  { "question": "A la Llei Orgànica 2/2023, de 22 de març, del Sistema Universitari (LOSU), es regulen els següents col·lectius:", "answers": [
      { "text": "Només estudiants", "correct": false },
      { "text": "Només professorat i PTGAS", "correct": false },
      { "text": "Estudiants, personal docent i investigador (PDI) i PTGAS", "correct": true },
      { "text": "Estudiants, PDI, PTGAS i personal d'empreses de serveis", "correct": false }
  ]},
  { "question": "D’acord amb la Llei 1/2003 d’Universitats de Catalunya, correspon l’impuls i el desenvolupament del sistema universitari de Catalunya:", "answers": [
      { "text": "A les universitats, exclusivament", "correct": false },
      { "text": "A la Generalitat de Catalunya, exclusivament", "correct": false },
      { "text": "A les universitats i a la Generalitat de Catalunya", "correct": true },
      { "text": "A les universitats, la Generalitat i el Consell d'Universitats", "correct": false }
  ]},
  { "question": "No és un principi en el qual es fonamenta l’ordenació del sistema universitari de Catalunya:", "answers": [
      { "text": "Autonomia universitària", "correct": false },
      { "text": "Igualtat d’oportunitats en l’accés i la permanència a la Universitat", "correct": false },
      { "text": "Contribució a l’aprenentatge dels menors d’edat", "correct": true },
      { "text": "Foment de la recerca i la transferència", "correct": false }
  ]},
  { "question": "De qui és competència “elaborar i difondre les polítiques de prevenció de riscos laborals i de protecció del medi ambient de la Universitat de Barcelona”?", "answers": [
      { "text": "El Rector o Rectora", "correct": false },
      { "text": "El Servei de PTGAS", "correct": false },
      { "text": "El Consell de Govern", "correct": true },
      { "text": "Els degans i deganes", "correct": false }
  ]},
  { "question": "D’acord amb la Llei 1/2003 d’Universitats de Catalunya, la comunitat universitària és formada pels:", "answers": [
      { "text": "Estudiants, el PDI i el PTGAS", "correct": false },
      { "text": "Estudiants, el PDI, els investigadors de les universitats i el PTGAS", "correct": true },
      { "text": "Estudiants, els investigadors i el personal de serveis externs", "correct": false },
      { "text": "Només el personal funcionari i els estudiants", "correct": false }
  ]},
  { "question": "L’article 27.10 de la Constitució Espanyola reconeix:", "answers": [
      { "text": "L’autonomia plena de les universitats", "correct": false },
      { "text": "L’autonomia de les universitats en els termes que estableixi la llei", "correct": true },
      { "text": "L’autonomia només per a les universitats públiques", "correct": false },
      { "text": "El dret al títol universitari gratuït", "correct": false }
  ]},
  { "question": "El Claustre Universitari segons la LOSU:", "answers": [
      { "text": "És el màxim òrgan de govern executiu de la Universitat", "correct": false },
      { "text": "És l’òrgan de participació de la societat en la Universitat", "correct": false },
      { "text": "És el màxim òrgan de representació de la comunitat universitària", "correct": true },
      { "text": "És un òrgan consultiu sense competències electorals", "correct": false }
  ]},
  { "question": "Segons l’Estatut de la Universitat de Barcelona, el Síndic de Greuges de la UB:", "answers": [
      { "text": "Té un mandat de quatre anys i no pot ser reelegit", "correct": false },
      { "text": "Té un mandat de quatre anys i pot ser reelegit una única vegada", "correct": true },
      { "text": "Té un mandat de cinc anys i no es pot prorrogar", "correct": false },
      { "text": "Té un mandat indefinit fins a la jubilació", "correct": false }
  ]},
  { "question": "Quins documents no són registrables oficialment?", "answers": [
      { "text": "Trameses entre unitats d'una mateixa Administració Pública", "correct": true },
      { "text": "Sol·licituds d'interessats", "correct": false },
      { "text": "Recursos administratius", "correct": false },
      { "text": "Reclamacions de responsabilitat", "correct": false }
  ]},
  { "question": "Quina d’aquestes afirmacions és correcta:", "answers": [
      { "text": "L’Administració Pública té personalitat jurídica única", "correct": true },
      { "text": "L’Òrgan administratiu té personalitat jurídica independent", "correct": false },
      { "text": "La Unitat administrativa té capacitat per contractar", "correct": false },
      { "text": "L’òrgan administratiu no vincula mai a l’Administració", "correct": false }
  ]},
  { "question": "Segons l’Estatut de la UB, dirigir i organitzar el Registre de la Universitat de Barcelona és competència de:", "answers": [
      { "text": "El/la Gerent/a", "correct": false },
      { "text": "El/La Rector/a", "correct": false },
      { "text": "El/La Secretari/a General", "correct": true },
      { "text": "El/La Cap de l'Oficina de l'Estatut", "correct": false }
  ]},
  { "question": "Segons la llei 19/2014 de transparència de Catalunya, quin és el seu principal àmbit subjectiu d’aplicació?", "answers": [
      { "text": "Les administracions públiques de Catalunya", "correct": true },
      { "text": "Totes les administracions públiques de l'Estat Espanyol", "correct": false },
      { "text": "Només els alts càrrecs de la Generalitat", "correct": false },
      { "text": "Les administracions públiques, excepte les universitats", "correct": false }
  ]},
  { "question": "Quin d’aquests és un òrgan col·legiat de la Universitat de Barcelona:", "answers": [
      { "text": "Rector/a", "correct": false },
      { "text": "Director/a de Departament", "correct": false },
      { "text": "Claustre", "correct": true },
      { "text": "Administrador/a de centre", "correct": false }
  ]},
  { "question": "Les retribucions dels funcionaris de carrera es classifiquen en:", "answers": [
      { "text": "Bàsiques i complementàries", "correct": true },
      { "text": "Bàsiques i extraordinàries", "correct": false },
      { "text": "Bàsiques, complementàries i de productivitat", "correct": false },
      { "text": "Sou base i triennis exclusivament", "correct": false }
  ]},
  { "question": "Els actes administratius de contingut impossible són:", "answers": [
      { "text": "Anul·lables", "correct": false },
      { "text": "Actes amb defecte de forma esmenable", "correct": false },
      { "text": "Actes que no produeixen cap obligació", "correct": false },
      { "text": "Nuls de ple dret", "correct": true }
  ]},
  { "question": "Qui presideix la Comissió d’Igualtat de la Universitat de Barcelona?", "answers": [
      { "text": "El director o directora de Relacions Laborals", "correct": false },
      { "text": "La presidència és rotatòria cada any", "correct": false },
      { "text": "El rector o rectora, o la persona en qui delegui", "correct": true },
      { "text": "El/la representant del PTGAS", "correct": false }
  ]},
  { "question": "Quin és el termini assenyalat per la Llei 39/2015 per realitzar una notificació des que s'ha dictat l'acte?", "answers": [
      { "text": "15 dies", "correct": false },
      { "text": "10 dies", "correct": true },
      { "text": "20 dies", "correct": false },
      { "text": "30 dies", "correct": false }
  ]},
  { "question": "Sota la LOSU (Llei 2/2023), quina d’aquestes categories és de professorat funcionari?", "answers": [
      { "text": "Professorat Lector", "correct": false },
      { "text": "Professorat Titular d’Universitat", "correct": true },
      { "text": "Professorat Associat", "correct": false },
      { "text": "Professorat Visitant Laboral", "correct": false }
  ]},
  { "question": "Contra quin acte administratiu es pot recórrer en via administrativa?", "answers": [
      { "text": "Acte resolutori i acte de tràmit qualificat", "correct": true },
      { "text": "Només l'acte resolutori", "correct": false },
      { "text": "Qualsevol acte de tràmit simple", "correct": false },
      { "text": "Cap de les anteriors és correcta", "correct": false }
  ]},
  { "question": "Quin és el nom del programa informàtic de registre de la UB?", "answers": [
      { "text": "ERES", "correct": true },
      { "text": "ARES", "correct": false },
      { "text": "UB-Doc", "correct": false },
      { "text": "Registrum-Digital", "correct": false }
  ]},
  { "question": "Segons el TREBEP, les Administracions públiques estructuraran la seva organització mitjançant:", "answers": [
      { "text": "Relacions de llocs de treball (RLT)", "correct": true },
      { "text": "Ofertes d’ocupació pública anuals", "correct": false },
      { "text": "Plans estratègics de formació", "correct": false },
      { "text": "Enquestes de clima laboral", "correct": false }
  ]},
  { "question": "A la Universitat de Barcelona a qui correspon prendre les resolucions relatives a situacions administratives i règim disciplinari:", "answers": [
      { "text": "Al Gerent o la Gerenta", "correct": false },
      { "text": "Al Consell Social", "correct": false },
      { "text": "Al Rector o la Rectora", "correct": true },
      { "text": "Al Claustre Universitari", "correct": false }
  ]},
  { "question": "Quina d’aquestes categories és de professorat laboral sota la nova LOSU?", "answers": [
      { "text": "Catedràtic/a d’Universitat", "correct": false },
      { "text": "Titular d’universitat", "correct": false },
      { "text": "Professorat Permanent Laboral", "correct": true },
      { "text": "Totes són de caràcter funcionari", "correct": false }
  ]},
  { "question": "En el Pla d’Igualtat de la UB, quin d'aquests apartats NO és una línia principal dins de l'eix 'Igualtat en el treball'?", "answers": [
      { "text": "Medi ambient", "correct": true },
      { "text": "Accés, promoció i formació", "correct": false },
      { "text": "Organització del treball i condicions de treball", "correct": false },
      { "text": "Organització del temps i conciliació", "correct": false }
  ]},
  { "question": "Segons la llei 19/2014 de transparència de Catalunya, quin és l’instrument bàsic per donar compliment a les obligacions de transparència?", "answers": [
      { "text": "El Portal de la Transparència", "correct": true },
      { "text": "La Seu Electrònica", "correct": false },
      { "text": "El web institucional", "correct": false },
      { "text": "La publicació al DOGC", "correct": false }
  ]},
  { "question": "El procediment administratiu s’inicia d'acord amb la Llei 39/2015:", "answers": [
      { "text": "Sempre a sol·licitud de l’interessat", "correct": false },
      { "text": "D’ofici o a sol·licitud de la persona interessada", "correct": true },
      { "text": "Només quan hi ha un silenci negatiu previ", "correct": false },
      { "text": "Per imposició del Defensor del Poble", "correct": false }
  ]},
  { "question": "La Llei Orgànica 2/2023 (LOSU) del Sistema Universitari regula:", "answers": [
      { "text": "Només la creació d’universitats estatals", "correct": false },
      { "text": "Només les universitats privades amb ànim de lucre", "correct": false },
      { "text": "La creació i reconeixement d’universitats públiques i privades", "correct": true },
      { "text": "Exclusivament el règim de beques de l'Estat", "correct": false }
  ]},
  { "question": "Segons l’Estatut de la UB, el pressupost anual de la Universitat ha de ser:", "answers": [
      { "text": "Públic, únic i equilibrat", "correct": true },
      { "text": "Secret fins a la seva aprovació pel Claustre", "correct": false },
      { "text": "Sempre deficitari per garantir la inversió en recerca", "correct": false },
      { "text": "Gestionat per una empresa externa", "correct": false }
  ]},
  { "question": "L’adreça electrònica disponible per als ciutadans la titularitat de la qual correspon a una Administració pública es denomina:", "answers": [
      { "text": "Canal virtual", "correct": false },
      { "text": "Bústia de dades", "correct": false },
      { "text": "Seu electrònica", "correct": true },
      { "text": "Correu d'atenció al ciutadà", "correct": false }
  ]},
  { "question": "Quin és el procediment de tramitació d'un recurs administratiu?", "answers": [
      { "text": "Iniciació, instrucció i repàs de dades", "correct": false },
      { "text": "Audiència, proposta i arxiu", "correct": false },
      { "text": "Iniciació, instrucció i finalització", "correct": true },
      { "text": "No està subjecte a cap fase específica", "correct": false }
  ]},
  { "question": "En les ofertes d’ocupació pública (TREBEP), quin percentatge de places s’ha de reservar específicament per a persones amb discapacitat intel·lectual?", "answers": [
      { "text": "7%", "correct": false },
      { "text": "2%", "correct": true },
      { "text": "5%", "correct": false },
      { "text": "10%", "correct": false }
  ]},
  {
    "question": "D’acord amb l’Estatut de la Universitat de Barcelona, quina de les següents afirmacions sobre el Síndic de Greuges és la correcta?",
    "answers": [
      { "text": "És elegit pel Claustre Universitari per un període de quatre anys i pot ser reelegit per un mandat consecutiu més.", "correct": true },
      { "text": "Actua sota el mandat imperatiu del Consell Social per garantir la transparència econòmica de la institució.", "correct": false },
      { "text": "És un òrgan unipersonal de govern encarregat de la gestió del personal tècnic, de gestió i d'administració i serveis.", "correct": false },
      { "text": "El seu mandat és de cinc anys i la seva elecció correspon directament al Rector o Rectora entre el personal docent i investigador.", "correct": false }
    ]
  },
  {
    "question": "D’acord amb l’Estatut de la Universitat de Barcelona, quina és la durada del mandat del Síndic de Greuges i quina és la seva possibilitat de reelecció?",
    "answers": [
      { "text": "Mandat de 5 anys, reelegible de forma indefinida.", "correct": false },
      { "text": "Mandat de 4 anys, reelegible una sola vegada.", "correct": true },
      { "text": "Mandat de 4 anys, sense possibilitat de reelecció.", "correct": false },
      { "text": "Mandat de 6 anys, coincidint amb el mandat del Rector.", "correct": false }
    ]
  },
  {
    "question": "Respecte a les competències dels òrgans de la UB, a quin òrgan correspon l'exercici de la potestat disciplinària i la resolució de les situacions administratives?",
    "answers": [
      { "text": "Al Consell de Govern.", "correct": false },
      { "text": "Al Secretari o Secretària General.", "correct": false },
      { "text": "Al Rector o Rectora.", "correct": true },
      { "text": "Al Consell Social.", "correct": false }
    ]
  },
  {
    "question": "En el marc de la Llei 39/2015, quina és la naturalesa jurídica d'aquells actes administratius que tenen un contingut impossible?",
    "answers": [
      { "text": "Anul·labilitat de l'acte.", "correct": false },
      { "text": "Nul·litat de ple dret.", "correct": true },
      { "text": "Irregularitat no invalidant.", "correct": false },
      { "text": "Nul·litat relativa.", "correct": false }
    ]
  },
  {
    "question": "Quin és el termini màxim de què disposa l'Administració per dictar i notificar un acte administratiu des de la data en què ha estat dictat?",
    "answers": [
      { "text": "5 dies hàbils.", "correct": false },
      { "text": "10 dies hàbils.", "correct": true },
      { "text": "15 dies naturals.", "correct": false },
      { "text": "1 mes.", "correct": false }
    ]
  },
  {
    "question": "Segons els Criteris de la UB (CUB), quin document s'ha d'utilitzar per acreditar un tràmit de caràcter purament procedimental o intern?",
    "answers": [
      { "text": "Certificat.", "correct": false },
      { "text": "Ofici.", "correct": false },
      { "text": "Diligència.", "correct": true },
      { "text": "Informe.", "correct": false }
    ]
  },
  {
    "question": "En la redacció de les actes de reunió segons el CUB, quin és el temps verbal preferent per a l'exposició dels fets i els acords?",
    "answers": [
      { "text": "Passat simple d'indicatiu.", "correct": false },
      { "text": "Present d'indicatiu.", "correct": true },
      { "text": "Futur pròxim.", "correct": false },
      { "text": "Pretèrit imperfet de subjuntiu.", "correct": false }
    ]
  },
  {
    "question": "En un full de càlcul Excel, si es vol fer referència a un rang continu de cel·les (per exemple, de la A1 a la B10), quin símbol s'ha d'utilitzar?",
    "answers": [
      { "text": "Punt i coma (;)", "correct": false },
      { "text": "Dos punts (:)", "correct": true },
      { "text": "Barra inclinada (/)", "correct": false },
      { "text": "Asterisc (*)", "correct": false }
    ]
  },
  {
    "question": "A Microsoft Word, des de quin element de la interfície es gestionen habitualment les tabulacions per definir-ne la posició i l'alineació?",
    "answers": [
      { "text": "Des de la barra d'estat.", "correct": false },
      { "text": "Des del menú de revisió.", "correct": false },
      { "text": "Des del Regle (regla).", "correct": true },
      { "text": "Des del panell de navegació.", "correct": false }
    ]
  },
  {
    "question": "Quin principi de la Protecció de Dades estableix que només s'han de tractar les dades estrictament necessàries per a la finalitat prevista?",
    "answers": [
      { "text": "Principi de transparència.", "correct": false },
      { "text": "Principi de minimització.", "correct": true },
      { "text": "Principi de limitació del termini.", "correct": false },
      { "text": "Principi d'integritat.", "correct": false }
    ]
  },
  {
    "question": "Com es defineix oficialment el Portal de Transparencia en l'àmbit administratiu?",
    "answers": [
      { "text": "Com una eina d'accés exclusiu per al personal de la UB.", "correct": false },
      { "text": "Com l'instrument per a la publicitat activa.", "correct": true },
      { "text": "Com un repositori de dades personals protegit per CSV.", "correct": false },
      { "text": "Com la plataforma de notificacions electròniques.", "correct": false }
    ]
  },
  {
    question: "Com definiries una “diligència”?",
    answers: [
      { text: "Document que constata les incidències i els acords presos en una reunió.", correct: false },
      { text: "Certificat intern que es produeix en les actuacions administratives i que acredita un tràmit administratiu.", correct: true },
      { text: "Document per mitjà del qual es dona fe d’un fet, del contingut d’un document o de les circumstàncies que consten en arxius, registres, llibres d’actes, etc.", correct: false },
      { text: "Document que presenta una exposició de caràcter informatiu sobre la situació d’un afer o sobre els elements necessaris perquè es resolgui.", correct: false }
    ]
  },
  {
    question: "El Word – Microsoft Office permet definir diferents idiomes de correcció per a diferents parts d’un document?",
    answers: [
      { text: "No, tot el document s’ha de corregir amb un mateix idioma.", correct: false },
      { text: "Sí, es pot definir un idioma diferent per a distintes parts del document.", correct: true },
      { text: "Sí, sempre que el document estigui format per més d’una pàgina.", correct: false },
      { text: "No hi ha corrector ortogràfic.", correct: false }
    ]
  },
  {
    question: "Quin tipus de gràfic s’utilitza a l’Excel – Microsoft Office per presentar l’aportació d’una sèrie de valors a un total?",
    answers: [
      { text: "Gràfic de columnes.", correct: false },
      { text: "Gràfic de barres.", correct: false },
      { text: "Gràfic circular.", correct: true },
      { text: "Gràfic de línies.", correct: false }
    ]
  },
  {
    question: "En el Word – Microsoft Office, es poden utilitzar símbols diferents dels que es mostren per defecte com a pic (vinyeta)?",
    answers: [
      { text: "Sí, es pot.", correct: true },
      { text: "Sí, però només per determinats tipus de llista.", correct: false },
      { text: "No, només es poden utilitzar els models predeterminats.", correct: false },
      { text: "Al processador de textos no existeixen els pics.", correct: false }
    ]
  },
  {
    question: "D’acord amb el CUB – llibre d’estil de la Universitat de Barcelona, quines són les tipologies d’informes? (ANUL·LADA)",
    answers: [
      { text: "Descriptius o valoratius.", correct: true },
      { text: "Procedimentals o no procedimentals.", correct: false },
      { text: "Descriptius o procedimentals.", correct: false },
      { text: "Valoratius o resolutius.", correct: false }
    ]
  },
  {
    question: "En el Word – Microsoft Office com es mostra un paràgraf amb una alineació justificada?",
    answers: [
      { text: "Alinea els paràgrafs seleccionats als marges esquerre i dret.", correct: true },
      { text: "No existeix l’alineació justificada.", correct: false },
      { text: "Alinea els paràgrafs seleccionats al marge dret.", correct: false },
      { text: "Centra el text.", correct: false }
    ]
  },
  {
    question: "En el Word – Microsoft Office, les tabulacions permeten definir una posició determinada del text i...",
    answers: [
      { text: "L’alineació.", correct: true },
      { text: "L’interlineat.", correct: false },
      { text: "L’espaiat.", correct: false },
      { text: "Cap més opció.", correct: false }
    ]
  },
  {
    question: "El certificat és un document que:",
    answers: [
      { text: "Dóna fe d’un fet.", correct: true },
      { text: "Conté la manifestació feta d’un esdeveniment.", correct: false },
      { text: "Dona notícia d’un fet.", correct: false },
      { text: "Acredita un tràmit administratiu.", correct: false }
    ]
  },
  {
    question: "Quines tecles cal prémer per copiar un text d’un document?",
    answers: [
      { text: "Control+C", correct: true },
      { text: "Control+V", correct: false },
      { text: "Control+X", correct: false },
      { text: "Control+N", correct: false }
    ]
  },
  {
    question: "Es pot personalitzar la numeració al Word – Microsoft Office?",
    answers: [
      { text: "Sí, sempre que sigui numèrica.", correct: false },
      { text: "Sí, es pot modificar el tipus de numeració i el seu format.", correct: true },
      { text: "Sí, només el seu format.", correct: false },
      { text: "No, la numeració no es pot personalitzar.", correct: false }
    ]
  },
  {
    question: "En el Word – Microsoft Office, es poden combinar nombres i pics en un esquema numerat amb nivells?",
    answers: [
      { text: "Sí, es poden combinar nombres i pics.", correct: true },
      { text: "No, només es poden utilitzar nombres.", correct: false },
      { text: "No, només es poden utilitzar pics.", correct: false },
      { text: "Sí, definint-ho a la plantilla.", correct: false }
    ]
  },
  {
    question: "Segons el Llibre d’estil de la Universitat de Barcelona, quin és el temps verbal preferent en l’Acta de reunió?",
    answers: [
      { text: "Present d’indicatiu.", correct: true },
      { text: "Futur.", correct: false },
      { text: "Qualsevol.", correct: false },
      { text: "Passat.", correct: false }
    ]
  },
  {
    question: "Què són les taules?",
    answers: [
      { text: "Són autoformes de dibuix.", correct: false },
      { text: "Taules creades a un full de càlcul i copiades a un document.", correct: false },
      { text: "Són unes quadrícules que es componen de files i columnes, les interseccions de les quals formen les cel·les.", correct: true },
      { text: "Són uns estils de text creats pel processador de textos.", correct: false }
    ]
  },
  {
    question: "Quin és el document amb què es trasllada una decisió presa sobre un assumpte a la persona interessada?",
    answers: [
      { text: "Avís.", correct: false },
      { text: "Anunci.", correct: false },
      { text: "Diligència.", correct: false },
      { text: "Notificació d’una resolució.", correct: true }
    ]
  },
  {
    question: "En l’Excel – Microsoft Office, quina tecla permet desplaçar el cursor d’una cel·la a una altra cel·la de la taula?",
    answers: [
      { text: "Tabulador.", correct: true },
      { text: "Control.", correct: false },
      { text: "Majúscules.", correct: false },
      { text: "Bloqueig de majúscules.", correct: false }
    ]
  },
  {
    question: "Quin és el document pel qual es demana a un òrgan administratiu que anul·li o modifiqui una resolució perquè la considera perjudicial?",
    answers: [
      { text: "Avís.", correct: false },
      { text: "Recurs.", correct: true },
      { text: "Citació.", correct: false },
      { text: "Notificació d’una resolució.", correct: false }
    ]
  },
  {
    question: "En l’Excel – Microsoft Office, per indicar que totes les columnes tinguin la mateixa amplada seleccionarem l’opció:",
    answers: [
      { text: "Amplada fixa de columna.", correct: true },
      { text: "Ajustament automàtic al contingut.", correct: false },
      { text: "Ajustament automàtic a la finestra.", correct: false },
      { text: "Qualsevol de les opcions és correcta.", correct: false }
    ]
  },
  {
    question: "En el Word – Microsoft Office, per a què serveix la vista preliminar abans d’imprimir?",
    answers: [
      { text: "Per veure la mida del paper.", correct: false },
      { text: "Per verificar l’aspecte global del document.", correct: true },
      { text: "Per veure els marges exclusivament.", correct: false },
      { text: "Per veure només el salt de pàgina.", correct: false }
    ]
  },
  {
    question: "En el Word – Microsoft Office, l’espai editable situat dins del marge superior del document que es repeteix a totes les pàgines és...",
    answers: [
      { text: "La capçalera.", correct: true },
      { text: "El peu de pàgina.", correct: false },
      { text: "El títol del document.", correct: false },
      { text: "El cos del document.", correct: false }
    ]
  },
  {
    question: "En el Word – Microsoft Office, quina configuració cal per imprimir només les pàgines 2, 3, 4 i 10?",
    answers: [
      { text: "2-4,10", correct: true },
      { text: "2,4,10", correct: false },
      { text: "1,3,10", correct: false },
      { text: "2-10", correct: false }
    ]
  },
  {
    question: "En l’Excel – Microsoft Office, quina expressió és una referència a una cel·la?",
    answers: [
      { text: "4", correct: false },
      { text: "A", correct: false },
      { text: "4A", correct: false },
      { text: "A4", correct: true }
    ]
  },
  {
    question: "Quin és el document per mitjà del qual es demana la presència d’algú en una reunió?",
    answers: [
      { text: "Avís.", correct: false },
      { text: "Anunci.", correct: false },
      { text: "Carta.", correct: false },
      { text: "Convocatòria de reunió.", correct: true }
    ]
  },
  {
    question: "En l’Excel – Microsoft Office, què mostra la barra de fórmules?",
    answers: [
      { text: "El mateix resultat que la cel·la.", correct: false },
      { text: "La fórmula inserida.", correct: true },
      { text: "Sempre està buida.", correct: false },
      { text: "Un valor aleatori.", correct: false }
    ]
  },
  {
    question: "En l’Excel – Microsoft Office, què passa quan es copia un càlcul a altres cel·les? (ANUL·LADA)",
    answers: [
      { text: "La fórmula s’adapta variant columna i/o fila.", correct: true },
      { text: "La fórmula varia número de columna i lletra de fila.", correct: false },
      { text: "La fórmula es copia idèntica.", correct: false },
      { text: "No es poden copiar fórmules.", correct: false }
    ]
  },
  {
    question: "En l’Excel – Microsoft Office, quina eina permet copiar fórmules entre cel·les?",
    answers: [
      { text: "La barra de fórmules.", correct: false },
      { text: "El botó d’emplenament.", correct: true },
      { text: "El botó de duplicació.", correct: false },
      { text: "No es poden copiar fórmules.", correct: false }
    ]
  },
  {
    question: "En l’Excel – Microsoft Office, quina funció retorna el valor més petit d’un rang?",
    answers: [
      { text: "MIN", correct: true },
      { text: "MAX", correct: false },
      { text: "MENYS", correct: false },
      { text: "MENOR", correct: false }
    ]
  },
  {
    question: "L’Excel – Microsoft Office permet fer operacions amb dates?",
    answers: [
      { text: "No, només admet text.", correct: false },
      { text: "Sí, canviant el format a numèric.", correct: false },
      { text: "Sí, es poden fer operacions amb dates.", correct: true },
      { text: "No accepta dates.", correct: false }
    ]
  },
  {
    question: "Quina funció permet calcular el valor central d’un rang de dades?",
    answers: [
      { text: "MEDIANA", correct: true },
      { text: "CENTRAL", correct: false },
      { text: "MODA", correct: false },
      { text: "Només amb fórmula.", correct: false }
    ]
  },
  {
    question: "Quin document ha de portar peu de recurs?",
    answers: [
      { text: "Resolució.", correct: true },
      { text: "Diligència.", correct: false },
      { text: "Convocatòria de reunió.", correct: false },
      { text: "Ofici.", correct: false }
    ]
  },
  {
    question: "Com es pot canviar la mida global d’un gràfic a l’Excel – Microsoft Office?",
    answers: [
      { text: "No es pot canviar.", correct: false },
      { text: "Arrossegant l’àrea de traçat.", correct: false },
      { text: "Arrossegant els punts de control de l’àrea del gràfic.", correct: true },
      { text: "Canviant l’escala.", correct: false }
    ]
  },
  {
    question: "Per crear una taula de dades a l’Excel – Microsoft Office, quina recomanació és correcta?",
    answers: [
      { text: "Tenir files o columnes en blanc.", correct: false },
      { text: "Organitzar les dades en files i columnes.", correct: true },
      { text: "Barrejar tipus de dades a una columna.", correct: false },
      { text: "Mateix tipus de dades a tota una fila.", correct: false }
    ]
  },
  {
    question: "Quin document constata les incidències i els acords presos en una reunió?",
    answers: [
      { text: "Resolució.", correct: false },
      { text: "Diligència.", correct: false },
      { text: "Convocatòria de reunió.", correct: false },
      { text: "Acta.", correct: true }
    ]
  },
  {
    question: "A l’Excel – Microsoft Office, si un camp no té títol en una taula, el programa...",
    answers: [
      { text: "L’inserirà com a Camp1, Camp2...", correct: false },
      { text: "L’inserirà com a Columna1, Columna2...", correct: true },
      { text: "Copiarà el títol anterior.", correct: false },
      { text: "No permetrà crear la taula.", correct: false }
    ]
  },
  {
    question: "A l’Excel – Microsoft Office, si s’afegeix una nova fila al final d’una taula...",
    answers: [
      { text: "Queda fora de la taula.", correct: false },
      { text: "Passa a formar part de la taula.", correct: true },
      { text: "Cal redefinir el rang.", correct: false },
      { text: "Cal convertir-la de nou.", correct: false }
    ]
  },
  {
    question: "Els filtres de l’Excel permeten seleccionar més d’un valor per columna?",
    answers: [
      { text: "No, només un.", correct: false },
      { text: "Com a màxim dos.", correct: false },
      { text: "Com a màxim tres.", correct: false },
      { text: "Sí, tants com calgui.", correct: true }
    ]
  },

  // PREGUNTES DE RESERVA
  {
    question: "Amb quin document es demana la presència d’algú per a un tràmit administratiu?",
    answers: [
      { text: "Carta.", correct: false },
      { text: "Avís.", correct: false },
      { text: "Citació.", correct: true },
      { text: "Informe.", correct: false }
    ]
  },
  {
    question: "Al Word – Microsoft Office, les tabulacions es poden establir amb...",
    answers: [
      { text: "Les guies.", correct: false },
      { text: "El regle.", correct: true },
      { text: "Les línies de la quadrícula.", correct: false },
      { text: "La tecla Control.", correct: false }
    ]
  },
  {
    question: "Amb les eines de correcció, l’Excel – Microsoft Office permet revisar el contingut...",
    answers: [
      { text: "Gramaticalment.", correct: false },
      { text: "Ortogràficament.", correct: true },
      { text: "Gramaticalment i ortogràficament.", correct: false },
      { text: "No té eines de correcció.", correct: false }
    ]
  },
  {
    question: "A l’Excel – Microsoft Office, què indica un punt i coma entre dues cel·les en una funció?",
    answers: [
      { text: "Que s’inclou tot el rang.", correct: false },
      { text: "Que només s’inclouen les dues cel·les.", correct: true },
      { text: "Que hi ha funcions concatenades.", correct: false },
      { text: "Que els valors són fixos.", correct: false }
    ]
  },
  {
    question: "A l’Excel – Microsoft Office, les opcions d’edició de gràfics són...",
    answers: [
      { text: "Diferents segons el tipus de gràfic.", correct: true },
      { text: "Iguals per a tots.", correct: false },
      { text: "Depenen de les dades.", correct: false },
      { text: "No es poden editar.", correct: false }
    ]},
    { "question": "D’acord amb els criteris de l'estil administratiu de la UB, quina de les següents afirmacions sobre l'objectivitat i la coherència documental és correcta?", "answers": [
      { "text": "L'objectivitat s'ha d'expressar mitjançant l'ús sistemàtic de la veu passiva per distanciar l'Administració de l'administrat.", "correct": false },
      { "text": "La coherència s'aconsegueix, entre d'altres, amb l'ús sistemàtic de la primera persona de les formes verbals i una datació unificada.", "correct": true },
      { "text": "Es recomana l'ús de frases llargues i complexes per garantir el respecte a la tradició jurídica catalana.", "correct": false },
      { "text": "El tractament de 'vós' es considera un arcaisme que s'ha d'evitar per afavorir la senzillesa i la proximitat.", "correct": false }
  ]},
  { "question": "Segons els criteris del CUB, quins són els quatre pilars fonamentals que defineixen les característiques de l’estil administratiu de la Universitat de Barcelona?", "answers": [
      { "text": "L’ús de la veu passiva, la jerarquia administrativa, la formalitat extrema i la normalització del disseny gràfic.", "correct": false },
      { "text": "La modernitat lingüística, la transparència de dades, la brevetat absoluta i la uniformitat de la imatge corporativa.", "correct": false },
      { "text": "El respecte a la tradició, l’objectivitat, la claredat, concisió i senzillesa, i la coherència i homogeneïtat.", "correct": true },
      { "text": "L'atenció a la persona, la gratuïtat del tràmit, l'ús de la tercera persona i el rigor jurídic internacional.", "correct": false }
  ]},
  {
    "question": "En relació amb el criteri d'objectivitat de l'estil administratiu de la UB, quina és la forma de tractament generalitzada que s'ha d'utilitzar per democratitzar la relació amb les persones?",
    "answers": [
      { "text": "L'ús de la tercera persona de cortesia (vostè).", "correct": false },
      { "text": "L'ús de la segona persona del plural (vós).", "correct": true },
      { "text": "L'ús de la segona persona del singular (tu) per proximitat.", "correct": false },
      { "text": "L'ús de fórmules honorífiques segons el rang del destinatari.", "correct": false }
    ]
  },
  {
    "question": "Per garantir la coherència en la producció de documents a la UB, quina persona gramatical s'ha d'utilitzar de manera sistemàtica en les formes verbals?",
    "answers": [
      { "text": "La primera persona del singular (jo).", "correct": true },
      { "text": "La tercera persona del singular, per mantenir la impersonatlitat.", "correct": false },
      { "text": "La primera persona del plural (nosaltres), com a plural corporatiu.", "correct": false },
      { "text": "L'ús exclusiu de formes no personals com l'infinitiu.", "correct": false }
    ]
  },
  {
    "question": "Dins dels criteris de claredat, concisió i senzillesa del CUB, quina estructura gramatical es considera desaconsellable en la redacció de documents?",
    "answers": [
      { "text": "L'ús de paràgrafs curts i idees desglossades.", "correct": false },
      { "text": "L'ús sistemàtic de la veu passiva.", "correct": true },
      { "text": "L'ordre lògic de la frase (subjecte, verb i complements).", "correct": false },
      { "text": "L'ús d'abreviatures normalitzades i termes senzills.", "correct": false }
    ]
  },
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
  {
    question: "El Word – Microsoft Office permet definir diferents idiomes de correcció per a diferents parts d’un document?",
    answers: [
      { text: "No, tot el document s’ha de corregir amb un mateix idioma.", correct: false },
      { text: "Sí, es pot definir un idioma diferent per a distintes parts del document.", correct: true },
      { text: "Sí, sempre que el document estigui format per més d’una pàgina.", correct: false },
      { text: "No hi ha corrector ortogràfic.", correct: false }
    ]
  },
  {
    question: "Quin tipus de gràfic s’utilitza a l’Excel – Microsoft Office per presentar l’aportació d’una sèrie de valors a un total?",
    answers: [
      { text: "Gràfic de columnes.", correct: false },
      { text: "Gràfic de barres.", correct: false },
      { text: "Gràfic circular.", correct: true },
      { text: "Gràfic de línies.", correct: false }
    ]
  },
  {
    question: "Com definiries una “diligència”?",
    answers: [
      { text: "Document que constata les incidències i els acords presos en una reunió.", correct: false },
      { text: "Certificat intern que es produeix en les actuacions administratives i que acredita un tràmit administratiu.", correct: true },
      { text: "Document per mitjà del qual es dona fe d’un fet, del contingut d’un document o de les circumstàncies que consten en arxius, registres, llibres d’actes, etc.", correct: false },
      { text: "Document que presenta una exposició de caràcter informatiu sobre la situació d’un afer o sobre els elements necessaris perquè es resolgui.", correct: false }
    ]
  },
  {
    question: "En el Word – Microsoft Office com es mostra un paràgraf amb una alineació justificada?",
    answers: [
      { text: "Alinea els paràgrafs seleccionats als marges esquerre i dret.", correct: true },
      { text: "No existeix l’alineació justificada.", correct: false },
      { text: "Alinea els paràgrafs seleccionats al marge dret.", correct: false },
      { text: "Centra el text.", correct: false }
    ]
  },
  {
    question: "En el Word – Microsoft Office, les tabulacions permeten definir una posició determinada del text i...",
    answers: [
      { text: "L’alineació.", correct: true },
      { text: "L’interlineat.", correct: false },
      { text: "L’espaiat.", correct: false },
      { text: "Cap més opció.", correct: false }
    ]
  },
  {
    question: "El certificat és un document que:",
    answers: [
      { text: "Dóna fe d’un fet.", correct: true },
      { text: "Conté la manifestació feta d’un esdeveniment.", correct: false },
      { text: "Dona notícia d’un fet.", correct: false },
      { text: "Acredita un tràmit administratiu.", correct: false }
    ]
  },
  {
    question: "Es pot personalitzar la numeració al Word – Microsoft Office?",
    answers: [
      { text: "Sí, sempre que sigui numèrica.", correct: false },
      { text: "Sí, es pot modificar el tipus de numeració i el seu format.", correct: true },
      { text: "Sí, només el seu format.", correct: false },
      { text: "No, la numeració no es pot personalitzar.", correct: false }
    ]
  },
  {
    question: "En el Word – Microsoft Office, es poden combinar nombres i pics en un esquema numerat amb nivells?",
    answers: [
      { text: "Sí, es poden combinar nombres i pics.", correct: true },
      { text: "No, només es poden utilitzar nombres.", correct: false },
      { text: "No, només es poden utilitzar pics.", correct: false },
      { text: "Sí, definint-ho a la plantilla.", correct: false }
    ]
  },
  {
    question: "Segons el Llibre d’estil de la Universitat de Barcelona, quin és el temps verbal preferent en l’Acta de reunió?",
    answers: [
      { text: "Present d’indicatiu.", correct: true },
      { text: "Futur.", correct: false },
      { text: "Qualsevol.", correct: false },
      { text: "Passat.", correct: false }
    ]
  },
  {
    question: "En el Word – Microsoft Office, es poden utilitzar símbols diferents dels que es mostren per defecte com a pic (vinyeta)?",
    answers: [
      { text: "Sí, es pot.", correct: true },
      { text: "Sí, però només per determinats tipus de llista.", correct: false },
      { text: "No, només es poden utilitzar els models predeterminats.", correct: false },
      { text: "Al processador de textos no existeixen els pics.", correct: false }
    ]
  },
  {
    question: "En l’Excel – Microsoft Office, què passa quan es realitza un càlcul i es copia a altres cel·les? (ANUL·LADA)",
    answers: [
      { text: "La fórmula s’adapta a cada nova posició variant columna i/o fila.", correct: true },
      { text: "La fórmula varia número de columna i lletra de fila.", correct: false },
      { text: "La fórmula es copia idèntica.", correct: false },
      { text: "El full de càlcul no permet copiar fórmules.", correct: false }
    ]
  },
  {
    question: "Què són les taules?",
    answers: [
      { text: "Són autoformes de dibuix.", correct: false },
      { text: "Taules creades a un full de càlcul i copiades a un document.", correct: false },
      { text: "Són unes quadrícules que es componen de files i columnes, les interseccions de les quals formen les cel·les.", correct: true },
      { text: "Són uns estils de text creats pel processador de textos.", correct: false }
    ]
  },
  {
    question: "Quin és el document amb què es trasllada una decisió presa sobre un assumpte a la persona interessada?",
    answers: [
      { text: "Avís.", correct: false },
      { text: "Anunci.", correct: false },
      { text: "Diligència.", correct: false },
      { text: "Notificació d’una resolució.", correct: true }
    ]
  },
  {
    question: "En l’Excel – Microsoft Office, quina tecla permet desplaçar el cursor d’una cel·la a una altra cel·la de la taula?",
    answers: [
      { text: "Tabulador.", correct: true },
      { text: "Control.", correct: false },
      { text: "Majúscules.", correct: false },
      { text: "Bloqueig de majúscules.", correct: false }
    ]
  },
  {
    question: "En el Word – Microsoft Office, l’espai editable situat dins del marge superior del document que es repeteix a totes les pàgines és...",
    answers: [
      { text: "La capçalera.", correct: true },
      { text: "El peu de pàgina.", correct: false },
      { text: "El títol del document.", correct: false },
      { text: "El cos del document.", correct: false }
    ]
  },
  {
    question: "Quin és el document pel qual es demana a un òrgan administratiu que anul·li o modifiqui una resolució perquè la considera perjudicial?",
    answers: [
      { text: "Avís.", correct: false },
      { text: "Recurs.", correct: true },
      { text: "Citació.", correct: false },
      { text: "Notificació d’una resolució.", correct: false }
    ]
  },
  {
    question: "En l’Excel – Microsoft Office, per indicar que totes les columnes tinguin la mateixa amplada seleccionarem l’opció:",
    answers: [
      { text: "Amplada fixa de columna.", correct: true },
      { text: "Ajustament automàtic al contingut.", correct: false },
      { text: "Ajustament automàtic a la finestra.", correct: false },
      { text: "Qualsevol de les opcions és correcta.", correct: false }
    ]
  },
  {
    question: "En el Word – Microsoft Office, per a què serveix la vista preliminar abans d’imprimir?",
    answers: [
      { text: "Per veure la mida del paper.", correct: false },
      { text: "Per verificar l’aspecte global del document.", correct: true },
      { text: "Per veure els marges exclusivament.", correct: false },
      { text: "Per veure només el salt de pàgina.", correct: false }
    ]
  },
  {
    question: "En el Word – Microsoft Office, quina configuració cal seleccionar per imprimir només les pàgines 2, 3, 4 i 10?",
    answers: [
      { text: "2-4,10", correct: true },
      { text: "2,4,10", correct: false },
      { text: "1,3,10", correct: false },
      { text: "2-10", correct: false }
    ]
  },
  {
    question: "En l’Excel – Microsoft Office, quina expressió és una referència a una cel·la?",
    answers: [
      { text: "4", correct: false },
      { text: "A", correct: false },
      { text: "4A", correct: false },
      { text: "A4", correct: true }
    ]
  },
  {
    question: "Quin document es fa servir per demanar la presència d’algú en una reunió?",
    answers: [
      { text: "Avís.", correct: false },
      { text: "Anunci.", correct: false },
      { text: "Carta.", correct: false },
      { text: "Convocatòria de reunió.", correct: true }
    ]
  },
  {
    question: "En l’Excel – Microsoft Office, què mostra la barra de fórmules?",
    answers: [
      { text: "El mateix resultat que la cel·la.", correct: false },
      { text: "La fórmula inserida.", correct: true },
      { text: "Sempre està buida.", correct: false },
      { text: "Un valor aleatori.", correct: false }
    ]
  },
  {
    question: "Quines tecles cal prémer per copiar un text d’un document?",
    answers: [
      { text: "Control+C", correct: true },
      { text: "Control+V", correct: false },
      { text: "Control+X", correct: false },
      { text: "Control+N", correct: false }
    ]
  },
  {
    question: "D’acord amb el CUB – llibre d’estil de la Universitat de Barcelona, quines són les tipologies d’informes? (ANUL·LADA)",
    answers: [
      { text: "Descriptius o valoratius.", correct: true },
      { text: "Procedimentals o no procedimentals.", correct: false },
      { text: "Descriptius o procedimentals.", correct: false },
      { text: "Valoratius o resolutius.", correct: false }
    ]
  },
  {
    question: "En l’Excel – Microsoft Office, quina eina permet copiar fórmules entre cel·les?",
    answers: [
      { text: "La barra de fórmules.", correct: false },
      { text: "El botó d’emplenament.", correct: true },
      { text: "El botó de duplicació.", correct: false },
      { text: "No es poden copiar fórmules.", correct: false }
    ]
  },
  {
    question: "En l’Excel – Microsoft Office, quina funció retorna el valor més petit d’un rang?",
    answers: [
      { text: "MIN", correct: true },
      { text: "MAX", correct: false },
      { text: "MENYS", correct: false },
      { text: "MENOR", correct: false }
    ]
  },
  {
    question: "L’Excel – Microsoft Office permet fer operacions amb dates?",
    answers: [
      { text: "No, només admet text.", correct: false },
      { text: "Sí, però cal canviar el format.", correct: false },
      { text: "Sí, es poden fer operacions amb dates.", correct: true },
      { text: "No accepta dates.", correct: false }
    ]
  },
  {
    question: "Quina funció permet calcular el valor central d’un rang de dades?",
    answers: [
      { text: "MEDIANA", correct: true },
      { text: "CENTRAL", correct: false },
      { text: "MODA", correct: false },
      { text: "Només amb fórmula.", correct: false }
    ]
  },
  {
    question: "Quin document ha de portar peu de recurs?",
    answers: [
      { text: "Resolució.", correct: true },
      { text: "Diligència.", correct: false },
      { text: "Convocatòria de reunió.", correct: false },
      { text: "Ofici.", correct: false }
    ]
  },
  {
    question: "Com es pot canviar la mida global d’un gràfic a l’Excel – Microsoft Office?",
    answers: [
      { text: "No es pot canviar.", correct: false },
      { text: "Arrossegant àrea de traçat i llegenda.", correct: false },
      { text: "Arrossegant els punts de control de l’àrea del gràfic.", correct: true },
      { text: "Canviant l’escala.", correct: false }
    ]
  },
  {
    question: "Per crear una taula de dades a l’Excel – Microsoft Office, quina recomanació és correcta?",
    answers: [
      { text: "Tenir files o columnes en blanc.", correct: false },
      { text: "Organitzar les dades en files i columnes.", correct: true },
      { text: "Barrejar tipus de dades en una columna.", correct: false },
      { text: "Mateix tipus de dades a una fila.", correct: false }
    ]
  },
  {
    question: "Quin document constata les incidències i els acords presos en una reunió?",
    answers: [
      { text: "Resolució.", correct: false },
      { text: "Diligència.", correct: false },
      { text: "Convocatòria de reunió.", correct: false },
      { text: "Acta.", correct: true }
    ]
  },
  {
    question: "A l’Excel – Microsoft Office, si un camp no té títol en una taula, el programa...",
    answers: [
      { text: "L’inserirà com a Camp1, Camp2...", correct: false },
      { text: "L’inserirà com a Columna1, Columna2...", correct: true },
      { text: "Copiarà el títol anterior.", correct: false },
      { text: "No permetrà crear la taula.", correct: false }
    ]
  },
  {
    question: "A l’Excel – Microsoft Office, si s’afegeix una nova fila al final d’una taula...",
    answers: [
      { text: "Queda fora de la taula.", correct: false },
      { text: "Passa a formar part de la taula.", correct: true },
      { text: "Cal redefinir el rang.", correct: false },
      { text: "Cal convertir-la de nou.", correct: false }
    ]
  },
  {
    question: "Els filtres de l’Excel permeten seleccionar més d’un valor per columna?",
    answers: [
      { text: "No, només un.", correct: false },
      { text: "Com a màxim dos.", correct: false },
      { text: "Com a màxim tres.", correct: false },
      { text: "Sí, tants com calgui.", correct: true }
    ]
  },
  // RESERVA
  {
    question: "Amb quin document es demana la presència d’algú per a un tràmit administratiu?",
    answers: [
      { text: "Carta.", correct: false },
      { text: "Avís.", correct: false },
      { text: "Citació.", correct: true },
      { text: "Informe.", correct: false }
    ]
  },
  {
    question: "Al Word – Microsoft Office, les tabulacions es poden establir amb...",
    answers: [
      { text: "Les guies.", correct: false },
      { text: "El regle.", correct: true },
      { text: "Les línies de la quadrícula.", correct: false },
      { text: "La tecla Control.", correct: false }
    ]
  },
  {
    question: "Amb les eines de correcció, l’Excel – Microsoft Office permet revisar el contingut...",
    answers: [
      { text: "Gramaticalment.", correct: false },
      { text: "Ortogràficament.", correct: true },
      { text: "Gramaticalment i ortogràficament.", correct: false },
      { text: "No té eines de correcció.", correct: false }
    ]
  },
    {
    question: "Amb les eines de correcció, l’Excel – Microsoft 365 / Office 2024 permet revisar el contingut...",
    answers: [
      { text: "Gramaticalment.", correct: false },
      { text: "Ortogràficament.", correct: false },
      { text: "Gramaticalment i ortogràficament.", correct: true },
      { text: "No té eines de correcció.", correct: false }
    ]
  },
  {
    question: "A l’Excel – Microsoft Office, què indica un punt i coma entre dues cel·les en una funció?",
    answers: [
      { text: "Inclou tot el rang.", correct: false },
      { text: "Només inclou les dues cel·les.", correct: true },
      { text: "Hi ha funcions concatenades.", correct: false },
      { text: "Els valors són fixos.", correct: false }
    ]
  },
  {
    question: "A l’Excel – Microsoft Office, les opcions d’edició de gràfics són...",
    answers: [
      { text: "Diferents segons el tipus de gràfic.", correct: true },
      { text: "Iguals per a tots.", correct: false },
      { text: "Depenen de les dades.", correct: false },
      { text: "No es poden editar.", correct: false }
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
