const TEST_ID = "tg"; 
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
      { "text": "Recurs d'emparament.", "correct": true },
      { "text": "Recurs extraordinari de revisió.", "correct": false },
      { "text": "Qüestió d'inconstitucionalitat interposada per la pròpia Universitat.", "correct": false }
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
  {
    "question": "Segons l'article 2 de la LOSU, quina d'aquestes és una funció del sistema universitari?",
    "answers": [
      { "text": "La creació, desenvolupament, transmissió i crítica de la ciència, la tècnica i la cultura.", "correct": true },
      { "text": "L'exercici de la potestat legislativa en matèria de títols oficials.", "correct": false },
      { "text": "La coordinació de les proves d'accés a la funció pública docent no universitària.", "correct": false },
      { "text": "La garantia de ple lloc de treball per als seus egressats.", "correct": false }
    ]
  },
  {
    "question": "La preparació per a l'exercici d'activitats professionals que exigeixin coneixements científics és:",
    "answers": [
      { "text": "Una funció del sistema universitari segons l'article 2.2 de la LOSU.", "correct": true },
      { "text": "Una competència delegada de les cambres de comerç.", "correct": false },
      { "text": "Una activitat supeditada exclusivament a l'autonomia financera.", "correct": false },
      { "text": "Un objectiu secundari vinculat només a la formació permanent.", "correct": false }
    ]
  },
  {
    "question": "L'autonomia de les universitats, segons la LOSU, comporta especialment:",
    "answers": [
      { "text": "La llibertat de càtedra, d'investigació i d'estudi.", "correct": true },
      { "text": "La inviolabilitat del recinte universitari davant de resolucions judicials.", "correct": false },
      { "text": "L'exempció de subjecció als principis de la Llei de Contractes del Sector Públic.", "correct": false },
      { "text": "La sobirania absoluta en la fixació de preus públics sense límits autonòmics.", "correct": false }
    ]
  },
  {
    "question": "Quina dimensió de l'autonomia permet a la universitat l'elaboració i reforma dels seus Estatuts?",
    "answers": [
      { "text": "L'autonomia estatutària i organitzativa.", "correct": true },
      { "text": "La potestat reglamentària d'execució estatal.", "correct": false },
      { "text": "L'autonomia legislativa interna de caràcter bàsic.", "correct": false },
      { "text": "La llibertat de creació de centres docents (Art. 27.6 CE).", "correct": false }
    ]
  },
  {
    "question": "L'autonomia universitària inclou la selecció i promoció del personal?",
    "answers": [
      { "text": "Sí, tant del PDI com del PTGAS, d'acord amb els principis constitucionals.", "correct": true },
      { "text": "Sí, però només respecte al personal contractat laboral, no al funcionari.", "correct": false },
      { "text": "No, la selecció del PDI correspon exclusivament a l'ANECA o l'AQU.", "correct": false },
      { "text": "Només respecte als òrgans de govern unipersonals.", "correct": false }
    ]
  },
  {
    "question": "En les universitats públiques, el règim específic estableix que la creació de la universitat es farà:",
    "answers": [
      { "text": "Per Llei del Parlament de la Comunitat Autònoma o de les Corts Generals.", "correct": true },
      { "text": "Per Decret del Govern a proposta del Consell d'Universitats.", "correct": false },
      { "text": "Per Acord del Consell de Govern de la Universitat amb ratificació legislativa.", "correct": false },
      { "text": "Per Ordre Ministerial prèvia inscripció al RUCT.", "correct": false }
    ]
  },
  {
    "question": "Quina figura de la universitat pública té la representació de la institució?",
    "answers": [
      { "text": "El Rector o Rectora.", "correct": true },
      { "text": "El President o Presidenta del Consell Social.", "correct": false },
      { "text": "El Secretari o Secretària General, per delegació expressa de la LOSU.", "correct": false },
      { "text": "El Consell de Govern actuant de forma col·legiada.", "correct": false }
    ]
  },
  {
    "question": "Segons la LOSU, les universitats públiques estan subjectes al dret:",
    "answers": [
      { "text": "Administratiu, sens perjudici de les excepcions previstes en matèria privada.", "correct": true },
      { "text": "Privat en tota la seva activitat acadèmica i docent.", "correct": false },
      { "text": "Mercantil per a la gestió del patrimoni i administratiu per a la resta.", "correct": false },
      { "text": "Civil, excepte en l'expedició de títols oficials.", "correct": false }
    ]
  },
  {
    "question": "L'elaboració i gestió dels pressupostos és una manifestació de l'autonomia:",
    "answers": [
      { "text": "Econòmica i financera.", "correct": true },
      { "text": "Patrimonial i tributària.", "correct": false },
      { "text": "D'autogovern acadèmic.", "correct": false },
      { "text": "Pressupostària delegada per la Hisenda Pública.", "correct": false }
    ]
  },
  {
    "question": "Quin d'aquests principis regeix l'actuació de les universitats segons la LOSU?",
    "answers": [
      { "text": "La transparència i la rendició de comptes.", "correct": true },
      { "text": "El principi d'autoritat jeràrquica ministerial.", "correct": false },
      { "text": "La confidencialitat absoluta en la selecció de personal.", "correct": false },
      { "text": "El benefici econòmic com a indicador de qualitat acadèmica.", "correct": false }
    ]
  },
  {
    "question": "Qui aprova finalment els Estatuts de la Universitat de Barcelona segons la normativa actual?",
    "answers": [
      { "text": "El Govern de la Generalitat, mitjançant Decret, després de verificar la seva legalitat.", "correct": true },
      { "text": "El Claustre de la UB, que té l'última paraula segons l'autonomia universitària.", "correct": false },
      { "text": "El Parlament de Catalunya, donat que és l'òrgan que va crear la universitat.", "correct": false },
      { "text": "El Consell Social, com a òrgan de participació de la societat.", "correct": false }
    ]
  },
  {
    "question": "La LOSU estableix que les universitats han de fomentar especialment:",
    "answers": [
      { "text": "La igualtat efectiva entre dones i homes i l'eliminació de tota discriminació.", "correct": true },
      { "text": "La competència exclusiva entre universitats del mateix territori.", "correct": false },
      { "text": "L'autarquia en la producció científica nacional.", "correct": false },
      { "text": "La preeminència dels interessos privats en els consells socials.", "correct": false }
    ]
  },
  {
    "question": "El Títol IX de la LOSU regula:",
    "answers": [
      { "text": "El règim específic de les universitats públiques.", "correct": true },
      { "text": "El règim del professorat laboral i funcionari.", "correct": false },
      { "text": "La recerca i la transferència del coneixement.", "correct": false },
      { "text": "L'assegurament de la qualitat i l'acreditació.", "correct": false }
    ]
  },
  {
    "question": "Com es tria el Rector/a en una universitat pública segons la LOSU?",
    "answers": [
      { "text": "Per sufragi universal ponderat per la comunitat universitària, en els termes estatutaris.", "correct": true },
      { "text": "Per votació directa i secreta del Claustre Universitari.", "correct": false },
      { "text": "Per designació de la Generalitat a proposta del Consell Social.", "correct": false },
      { "text": "Per elecció entre els degans i directors d'escola.", "correct": false }
    ]
  },
  {
    "question": "Quin és el mandat d'un Rector/a segons la LOSU (Llei Orgànica 2/2023)?",
    "answers": [
      { "text": "Sis anys, improrrogables i no renovables.", "correct": true },
      { "text": "Quatre anys, amb una sola possibilitat de reelecció.", "correct": false },
      { "text": "Cinc anys, prorrogables per un període màxim de tres.", "correct": false },
      { "text": "Vuit anys, sense possibilitat de renovació.", "correct": false }
    ]
  },
  {
    "question": "L'autonomia universitària permet crear estructures com facultats o escoles?",
    "answers": [
      { "text": "Sí, és part de l'autonomia organitzativa, subjecta al que digui la Llei i els Estatuts.", "correct": true },
      { "text": "No, la creació de facultats és una competència exclusiva del Govern autonòmic.", "correct": false },
      { "text": "Només si es tracta de centres adscrits de titularitat privada.", "correct": false },
      { "text": "Sí, però la decisió ha de ser ratificada per la Conferència de Política Universitària.", "correct": false }
    ]
  },
  {
    "question": "La recerca universitària, segons la LOSU, és considerada:",
    "answers": [
      { "text": "Un dret i un deure del personal docent i investigador.", "correct": true },
      { "text": "Una activitat opcional per al PDI funcionari.", "correct": false },
      { "text": "Una funció exclusiva dels Instituts Universitaris de Recerca.", "correct": false },
      { "text": "Una prestació de serveis sotmesa al dret mercantil.", "correct": false }
    ]
  },
  {
    "question": "L'autonomia acadèmica inclou la verificació dels títols?",
    "answers": [
      { "text": "La universitat té autonomia per proposar els plans d'estudi; la verificació és externa.", "correct": true },
      { "text": "L'autonomia permet l'auto-verificació sense intervenció d'agències de qualitat.", "correct": false },
      { "text": "Només les universitats catalogades com 'd'excel·lència' poden verificar títols.", "correct": false },
      { "text": "La verificació és competència del Rector/a com a màxima autoritat acadèmica.", "correct": false }
    ]
  },
  {
    "question": "El Consell Social és definit per la LOSU com:",
    "answers": [
      { "text": "L'òrgan de participació de la societat en la universitat.", "correct": true },
      { "text": "L'òrgan superior de govern acadèmic de la institució.", "correct": false },
      { "text": "La junta de patrons de la fundació universitària.", "correct": false },
      { "text": "El màxim òrgan de representació dels estudiants i el PTGAS.", "correct": false }
    ]
  },
  {
    "question": "Les universitats públiques han de tenir un pressupost:",
    "answers": [
      { "text": "Públic, anual, únic i equilibrat.", "correct": true },
      { "text": "Aprovat per la Llei de Pressupostos de l'Estat directament.", "correct": false },
      { "text": "Privat en la part corresponent a la recerca amb empreses.", "correct": false },
      { "text": "Sotmès al control exclusiu del Claustre Universitari.", "correct": false }
    ]
  },
  {
    "question": "La LOSU exigeix que les universitats públiques destinin fons específics a:",
    "answers": [
      { "text": "Programes propis de recerca i de formació de joves doctors i doctores.", "correct": true },
      { "text": "La subvenció de partits polítics amb representació al Claustre.", "correct": false },
      { "text": "L'amortització del deute històric de la Comunitat Autònoma.", "correct": false },
      { "text": "L'externalització total dels serveis de docència de postgrau.", "correct": false }
    ]
  },
  {
    "question": "Quin òrgan de govern col·legiat de la universitat representa la comunitat universitària?",
    "answers": [
      { "text": "El Claustre Universitari.", "correct": true },
      { "text": "El Consell de Govern.", "correct": false },
      { "text": "El Consell Social.", "correct": false },
      { "text": "La Conferència de Degans.", "correct": false }
    ]
  },
  {
    "question": "La coordinació del sistema universitari espanyol correspon a:",
    "answers": [
      { "text": "La Conferència General de Política Universitària.", "correct": true },
      { "text": "El Consell d'Universitats, de forma exclusiva.", "correct": false },
      { "text": "La CRUE (Conferència de Rectors de les Universitats Espanyoles).", "correct": false },
      { "text": "L'Agència Nacional d'Avaluació de la Qualitat i Acreditació (ANECA).", "correct": false }
    ]
  },
  {
    "question": "L'accés a la universitat, segons la LOSU, ha de garantir:",
    "answers": [
      { "text": "La igualtat d'oportunitats i la no discriminació per raons econòmiques.", "correct": true },
      { "text": "La preferència d'accés als residents de la ciutat seu de la universitat.", "correct": false },
      { "text": "L'admissió lliure sense cap prova d'avaluació externa.", "correct": false },
      { "text": "La reserva de plaça per a fills d'antics alumnes (alumni).", "correct": false }
    ]
  },
  {
    "question": "Les universitats públiques poden crear fundacions o altres entitats jurídiques?",
    "answers": [
      { "text": "Sí, per a la promoció i desenvolupament de les seves finalitats, segons la legislació vigent.", "correct": true },
      { "text": "No, l'autonomia universitària prohibeix l'ús de personalitat jurídica privada.", "correct": false },
      { "text": "Només si l'Estat té la participació majoritària en el seu capital.", "correct": false },
      { "text": "Sí, però només amb la finalitat de gestionar els títols de Grau.", "correct": false }
    ]
  },
  {
    "question": "El control econòmic extern de les universitats públiques catalanes correspon a:",
    "answers": [
      { "text": "La Sindicatura de Comptes de Catalunya i el Tribunal de Comptes.", "correct": true },
      { "text": "L'Interventor General de la Universitat de manera exclusiva.", "correct": false },
      { "text": "El Consell de Govern de la Generalitat mitjançant auditoria política.", "correct": false },
      { "text": "L'Agència Tributària de Catalunya.", "correct": false }
    ]
  },
  {
    "question": "La LOSU defineix la formació al llarg de la vida com:",
    "answers": [
      { "text": "Un dret dels ciutadans i una funció de la universitat mitjançant títols propis o microcredencials.", "correct": true },
      { "text": "Una modalitat d'ensenyament reservada només per a majors de 50 anys.", "correct": false },
      { "text": "Un tipus de formació que no pot tenir reconeixement de crèdits ECTS.", "correct": false },
      { "text": "L'obligació de cursar un segon grau en finalitzar el primer.", "correct": false }
    ]
  },
  {
    "question": "L'Espai Europeu d'Educació Superior (EEES) és el marc de referència per a:",
    "answers": [
      { "text": "L'homologació de títols, la mobilitat i la cooperació internacional.", "correct": true },
      { "text": "La fixació del sou dels professors titulars a tota Europa.", "correct": false },
      { "text": "La creació d'un títol únic europeu emès per la Comissió Europea.", "correct": false },
      { "text": "La regulació dels visats per a estudiants extra-comunitaris.", "correct": false }
    ]
  },
  {
    "question": "El personal de les universitats públiques segons la LOSU es divideix en:",
    "answers": [
      { "text": "Personal Docent i Investigador (PDI) i Personal Tècnic, de Gestió i d'Administració i Serveis (PTGAS).", "correct": true },
      { "text": "Personal d'Ensenyament Superior i Personal de Serveis Generals.", "correct": false },
      { "text": "Funcionaris de l'Estat i Funcionaris de la Comunitat Autònoma.", "correct": false },
      { "text": "Cossos docents universitaris i Cossos de gestió universitària.", "correct": false }
    ]
  },
  {
    "question": "L'autonomia financera té com a límit, entre d'altres:",
    "answers": [
      { "text": "Les exigències d'estabilitat pressupostària i sostenibilitat financera.", "correct": true },
      { "text": "La prohibició de rebre subvencions de caràcter privat.", "correct": false },
      { "text": "L'obligació d'invertir tots els romanents en borsa.", "correct": false },
      { "text": "La limitació de despesa imposada pel Claustre Universitari.", "correct": false }
    ]
  },
  {
    "question": "Segons l'article 12 de la LOSU, com han de ser publicats els resultats de les investigacions finançades majoritàriament amb fons públics?",
    "answers": [
      { "text": "En revistes comercials d'alt impacte amb accés restringit.", "correct": false },
      { "text": "En accés obert, mitjançant el dipòsit d'una còpia de la versió final en repositoris institucionals o temàtics.", "correct": true },
      { "text": "Sota patent exclusiva de la universitat durant els primers cinc anys.", "correct": false },
      { "text": "Només es requereix la publicació del resum executiu en el Portal de Transparència.", "correct": false }
    ]
  },
  {
    "question": "Quin percentatge mínim de reserva de places per a persones amb discapacitat estableix la LOSU per a l'accés als estudis universitaris?",
    "answers": [
      { "text": "Un 3% de les places disponibles.", "correct": false },
      { "text": "Un 5% de les places disponibles.", "correct": true },
      { "text": "Un 7% de les places disponibles.", "correct": false },
      { "text": "No estableix un percentatge fix, dependrà de la demanda anual.", "correct": false }
    ]
  },
  {
    "question": "Respecte a la composició del Consell de Govern, la LOSU estableix que la representació de l'estudiantat ha de ser d'un mínim del:",
    "answers": [
      { "text": "10 per cent dels seus membres.", "correct": true },
      { "text": "25 per cent dels seus membres.", "correct": false },
      { "text": "15 per cent dels seus membres.", "correct": false },
      { "text": "No estableix un percentatge mínim, es deixa a decisió dels Estatuts.", "correct": false }
    ]
  },
  {
    "question": "Les 'microcredencials' o títols de curta durada, segons l'article 36 de la LOSU:",
    "answers": [
      { "text": "Són títols exclusivament de postgrau per a doctors.", "correct": false },
      { "text": "Permeten certificar aprenentatges en formació permanent de manera fragmentada i acumulable.", "correct": true },
      { "text": "Són títols oficials equivalents a un Grau de 180 crèdits ECTS.", "correct": false },
      { "text": "Només poden ser impartides per fundacions privades adscrites.", "correct": false }
    ]
  },
  {
    "question": "En el marc de la igualtat de gènere, la LOSU obliga les universitats a comptar amb:",
    "answers": [
      { "text": "Un pla d'igualtat i un protocol contra l'assetjament sexual, ambdós de caràcter obligatori.", "correct": true },
      { "text": "Només un pla d'igualtat si superen els 500 empleats.", "correct": false },
      { "text": "Una unitat de gènere dependent directament del Ministeri d'Igualtat.", "correct": false },
      { "text": "Quotes del 50% de dones en totes les titulacions de l'àmbit STEM.", "correct": false }
    ]
  },
  {
    "question": "Segons la LOSU, el personal docent i investigador (PDI) de les universitats públiques pot ser de dos tipus:",
    "answers": [
      { "text": "PDI funcionari dels cossos docents universitaris i PDI contractat laboral.", "correct": true },
      { "text": "PDI titular i PDI associat, essent tots ells funcionaris.", "correct": false },
      { "text": "PDI de carrera i PDI interí de la Generalitat.", "correct": false },
      { "text": "PDI exclusivament laboral, ja que la LOSU n'ha eliminat la condició de funcionari.", "correct": false }
    ]
  },
  {
    "question": "L'article 45 de la LOSU estableix que les universitats públiques han d'assolir un objectiu de finançament mínim del:",
    "answers": [
      { "text": "1 per cent del PIB del conjunt de l'Estat.", "correct": true },
      { "text": "5 per cent del pressupost de la Comunitat Autònoma.", "correct": false },
      { "text": "0,5 per cent del PIB de la Comunitat Autònoma.", "correct": false },
      { "text": "10 per cent del deute públic estatal.", "correct": false }
    ]
  },
  {
    "question": "Qui presideix el Consell Social d'una universitat pública?",
    "answers": [
      { "text": "El Rector o Rectora de la pròpia universitat.", "correct": false },
      { "text": "Una persona nomenada per la Comunitat Autònoma, que no pot ser membre de la comunitat universitària.", "correct": true },
      { "text": "El Degà més antic de la facultat amb més alumnes.", "correct": false },
      { "text": "El Conseller o Consellera d'Universitats de la Generalitat.", "correct": false }
    ]
  },
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
  {
    "n": 1,
    "question": "Quina és la unitat de mesura de l'haver acadèmic en els ensenyaments de l'EEES?",
    "answers": [
      { "text": "El crèdit ECTS (European Credit Transfer System).", "correct": true },
      { "text": "L'hora lectiva de presencialitat obligatòria.", "correct": false },
      { "text": "El crèdit de l'antiga LRU.", "correct": false },
      { "text": "La unitat de càrrega docent departamental.", "correct": false }
    ]
  },
  {
    "n": 2,
    "question": "Quantes hores de treball de l'estudiant representa, de mitjana, un crèdit ECTS?",
    "answers": [
      { "text": "Entre 25 i 30 hores.", "correct": true },
      { "text": "Exactament 10 hores de classe teòrica.", "correct": false },
      { "text": "Un mínim de 50 hores per assignatura.", "correct": false },
      { "text": "Entre 15 i 20 hores segons el grau de dificultat.", "correct": false }
    ]
  },
  {
    "n": 3,
    "question": "Els ensenyaments universitaris oficials s'estructuren en quins tres cicles?",
    "answers": [
      { "text": "Grau, Màster Universitari i Doctorat.", "correct": true },
      { "text": "Diplomatura, Llicenciatura i Doctorat.", "correct": false },
      { "text": "Grau, Postgrau propi i Doctorat.", "correct": false },
      { "text": "Cicle de formació bàsica, Cicle d'especialització i Cicle de recerca.", "correct": false }
    ]
  },
  {
    "n": 4,
    "question": "Quina és la finalitat principal dels ensenyaments de Grau?",
    "answers": [
      { "text": "L'obtenció d'una formació acadèmica i professional de caràcter general orientada a la preparació per a l'exercici professional.", "correct": true },
      { "text": "L'especialització altament avançada en una única línia d'investigació.", "correct": false },
      { "text": "La preparació exclusiva per a l'accés als cossos docents universitaris.", "correct": false },
      { "text": "L'obtenció d'un certificat d'aptitud tècnica sense validesa acadèmica.", "correct": false }
    ]
  },
  {
    "n": 5,
    "question": "Com a norma general, quants crèdits ECTS té un títol de Grau?",
    "answers": [
      { "text": "240 crèdits, llevat que una directiva comunitària estableixi una durada superior.", "correct": true },
      { "text": "180 crèdits en tots els casos per a l'homologació europea.", "correct": false },
      { "text": "300 crèdits per a totes les enginyeries i graus d'Humanitats.", "correct": false },
      { "text": "120 crèdits de formació bàsica i 120 d'optativitat.", "correct": false }
    ]
  },
  {
    "n": 6,
    "question": "El Treball de Final de Grau (TFG):",
    "answers": [
      { "text": "És obligatori, té caràcter autònom i s'ha de realitzar en la fase final del pla d'estudis.", "correct": true },
      { "text": "És opcional si es realitza un període de pràctiques externes equivalents.", "correct": false },
      { "text": "S'ha d'avaluar obligatòriament mitjançant una prova tipus test a nivell nacional.", "correct": false },
      { "text": "No computa dins de la càrrega lectiva total dels 240 crèdits.", "correct": false }
    ]
  },
  {
    "n": 7,
    "question": "La finalitat del Màster universitari és:",
    "answers": [
      { "text": "L'adquisició d'una formació avançada, especialitzada o multidisciplinària, o la iniciació en la recerca.", "correct": true },
      { "text": "Substituir la tesi doctoral per als qui no vulguin fer carrera acadèmica.", "correct": false },
      { "text": "Obtenir una formació generalista de base idèntica a la del Grau.", "correct": false },
      { "text": "L'acreditació d'un nivell de competència lingüística en llengües estrangeres.", "correct": false }
    ]
  },
  {
    "n": 8,
    "question": "Quina és la càrrega lectiva habitual dels ensenyaments de Màster oficial?",
    "answers": [
      { "text": "Entre 60 i 120 crèdits ECTS.", "correct": true },
      { "text": "Un mínim fix de 90 crèdits anuals.", "correct": false },
      { "text": "Sempre 120 crèdits per permetre l'accés al Doctorat.", "correct": false },
      { "text": "240 crèdits, seguint la mateixa estructura que el Grau.", "correct": false }
    ]
  },
  {
    "n": 9,
    "question": "Per accedir a un Màster oficial és necessari estar en possessió de:",
    "answers": [
      { "text": "Un títol universitari oficial espanyol o un d'expedit per una institució de l'EEES que faculti per a aquest accés.", "correct": true },
      { "text": "Un títol de Doctorat previ.", "correct": false },
      { "text": "L'homologació pel Ministeri de les notes de Batxillerat.", "correct": false },
      { "text": "Un contracte laboral relacionat amb la matèria del Màster.", "correct": false }
    ]
  },
  {
    "n": 10,
    "question": "El títol de Doctor/a representa:",
    "answers": [
      { "text": "El nivell de qualificació més elevat de l'educació superior (Nivell 4 del MECES).", "correct": true },
      { "text": "Un requisit obligatori per a qualsevol plaça administrativa de la UB.", "correct": false },
      { "text": "Un grau acadèmic que s'obté per antiguitat després del Màster.", "correct": false },
      { "text": "Un títol de caràcter estrictament professional sense vessant de recerca.", "correct": false }
    ]
  },
  {
    "n": 11,
    "question": "La formació doctoral inclou obligatòriament:",
    "answers": [
      { "text": "L'elaboració i defensa d'una tesi doctoral que incorpori resultats originals de recerca.", "correct": true },
      { "text": "L'assistència diària a classes magistrals durant quatre anys.", "correct": false },
      { "text": "El pagament d'un cànon de recerca a l'Agència Europea de l'Educació.", "correct": false },
      { "text": "Un període obligatori de docència en centres de secundària.", "correct": false }
    ]
  },
  {
    "n": 12,
    "question": "Què és el Suplement Europeu al Títol (SET)?",
    "answers": [
      { "text": "Un document que acompanya el títol oficial per millorar la transparència i facilitar el reconeixement.", "correct": true },
      { "text": "Una ajuda financera per a la mobilitat d'estudiants amb pocs recursos.", "correct": false },
      { "text": "Un carnet de serveis per a graduats en l'àmbit europeu.", "correct": false },
      { "text": "El certificat de competències digitals de la Unió Europea.", "correct": false }
    ]
  },
  {
    "n": 13,
    "question": "L'homologació d'un títol estranger implica:",
    "answers": [
      { "text": "El reconeixement oficial de l'equivalència a un títol espanyol que dóna accés a una professió regulada.", "correct": true },
      { "text": "Que el títol només té validesa per a l'empresa privada i no pública.", "correct": false },
      { "text": "La repetició obligatòria de la meitat dels crèdits del títol en una universitat espanyola.", "correct": false },
      { "text": "L'enviament del diploma original al Registre Civil central.", "correct": false }
    ]
  },
  {
    "n": 14,
    "question": "L'equivalència a nivell acadèmic d'un títol estranger es diferencia de l'homologació en què:",
    "answers": [
      { "text": "L'equivalència reconeix el nivell (Grau o Màster) però no un títol específic habilitant.", "correct": true },
      { "text": "L'equivalència només s'aplica a títols de l'àmbit de la salut.", "correct": false },
      { "text": "L'equivalència és temporal i l'homologació és definitiva.", "correct": false },
      { "text": "L'equivalència és competència del Rector i l'homologació del Govern de la Generalitat.", "correct": false }
    ]
  },
  {
    "n": 15,
    "question": "Quin organisme és competent per a l'homologació de títols estrangers d'educació superior a Espanya?",
    "answers": [
      { "text": "El Ministeri competent en matèria d'universitats de l'Estat.", "correct": true },
      { "text": "El Rectorat de la UB per delegació del Govern.", "correct": false },
      { "text": "El Consell Interuniversitari de Catalunya.", "correct": false },
      { "text": "L'ambaixada del país on s'ha expedit el títol.", "correct": false }
    ]
  },
  {
    "n": 16,
    "question": "Dins l'EEES, la mobilitat d'estudiants es fomenta principalment a través del programa:",
    "answers": [
      { "text": "Erasmus+.", "correct": true },
      { "text": "Sèneca-UB.", "correct": false },
      { "text": "Programa Cervantes de mobilitat no oficial.", "correct": false },
      { "text": "Bolonya-Mobil.", "correct": false }
    ]
  },
  {
    "n": 17,
    "question": "En un pla d'estudis de Grau, les assignatures de 'Formació Bàsica' han de tenir almenys:",
    "answers": [
      { "text": "60 crèdits ECTS.", "correct": true },
      { "text": "120 crèdits ECTS.", "correct": false },
      { "text": "El 50% de la càrrega lectiva total.", "correct": false },
      { "text": "No hi ha un mínim establert legalment.", "correct": false }
    ]
  },
  {
    "n": 18,
    "question": "Els títols propis de les universitats:",
    "answers": [
      { "text": "Són ensenyaments de formació permanent i no donen accés al Doctorat ni tenen caràcter oficial.", "correct": true },
      { "text": "Són exactament iguals als oficials però aprovats pel Rector.", "correct": false },
      { "text": "Tenen validesa d'oficialitat automàtica en passar dos anys des de la seva creació.", "correct": false },
      { "text": "Són els únics que es poden valorar en una fase de concurs d'oposició.", "correct": false }
    ]
  },
  {
    "n": 19,
    "question": "El Registre on s'inscriuen Universitats, Centres i Títols s'anomena:",
    "answers": [
      { "text": "RUCT.", "correct": true },
      { "text": "SIIU.", "correct": false },
      { "text": "REBIUN.", "correct": false },
      { "text": "DOGC-Títols.", "correct": false }
    ]
  },
  {
    "n": 20,
    "question": "Per accedir al doctorat, quants crèdits oficials s'han d'haver superat en total (sumant Grau i Màster)?",
    "answers": [
      { "text": "Un mínim de 300 crèdits ECTS.", "correct": true },
      { "text": "240 crèdits ECTS.", "correct": false },
      { "text": "180 crèdits ECTS de segon cicle.", "correct": false },
      { "text": "400 crèdits ECTS si la tesi es fa en llengua estrangera.", "correct": false }
    ]
  },
  {
    "n": 21,
    "question": "Quina declaració es considera l'origen formal de l'EEES?",
    "answers": [
      { "text": "La Declaració de Bolonya (1999).", "correct": true },
      { "text": "La Declaració de la Sorbona.", "correct": false },
      { "text": "El Tractat de Maastrich.", "correct": false },
      { "text": "La Carta Magna d'Universitats de Barcelona.", "correct": false }
    ]
  },
  {
    "n": 22,
    "question": "L'avaluació contínua és un principi fonamental de:",
    "answers": [
      { "text": "El model d'aprenentatge centrat en l'estudiant de l'EEES.", "correct": true },
      { "text": "L'antic sistema de llicenciatures i diplomatures.", "correct": false },
      { "text": "Exclusivament dels exàmens finals de carrera.", "correct": false },
      { "text": "Només de les universitats privades i a distància.", "correct": false }
    ]
  },
  {
    "n": 23,
    "question": "Què s'entén per reconeixement de crèdits?",
    "answers": [
      { "text": "L'acceptació per part d'una universitat dels crèdits obtinguts en altres ensenyaments oficials.", "correct": true },
      { "text": "L'obtenció d'una bonificació econòmica per l'excel·lència acadèmica.", "correct": false },
      { "text": "L'enviament del certificat de notes al Ministeri d'Educació.", "correct": false },
      { "text": "La publicació de l'expedient acadèmic en el tauler d'anuncis.", "correct": false }
    ]
  },
  {
    "n": 24,
    "question": "L'acreditació d'un títol oficial és un procés que ha de realitzar-se periòdicament per:",
    "answers": [
      { "text": "Garantir que el títol compleix els estàndards de qualitat i mantenir la seva oficialitat al RUCT.", "correct": true },
      { "text": "Actualitzar el nom de la titulació segons les tendències del mercat.", "correct": false },
      { "text": "Modificar el preu de la matrícula per sota de la inflació.", "correct": false },
      { "text": "Validar la jubilació del professorat que imparteix el títol.", "correct": false }
    ]
  },
  {
    "n": 25,
    "question": "Els plans d'estudi de Grau han de contenir obligatòriament pràctiques externes?",
    "answers": [
      { "text": "No, poden ser obligatòries o optatives segons la configuració del pla d'estudis.", "correct": true },
      { "text": "Sí, tots els Graus han de tenir 60 crèdits de pràctiques segons l'EEES.", "correct": false },
      { "text": "Només és obligatori en Graus de Ciències Socials.", "correct": false },
      { "text": "Estan expressament prohibides en el primer curs acadèmic.", "correct": false }
    ]
  },
  {
    "n": 26,
    "question": "La 'Menció Europea' o 'Doctorat Internacional' requereix, entre d'altres:",
    "answers": [
      { "text": "Una estada mínima de 3 mesos fora d'Espanya en una institució d'ensenyament superior.", "correct": true },
      { "text": "Tenir la nacionalitat d'almenys dos països de la Unió Europea.", "correct": false },
      { "text": "Que la tesi estigui escrita íntegrament en una llengua morta (Llatí o Grec).", "correct": false },
      { "text": "Presentar la tesi davant del Parlament Europeu.", "correct": false }
    ]
  },
  {
    "n": 27,
    "question": "Les universitats poden impartir ensenyaments conjunts amb altres universitats?",
    "answers": [
      { "text": "Sí, mitjançant convenis per a títols conjunts de Grau, Màster o Doctorat.", "correct": true },
      { "text": "No, la llei prohibeix la col·laboració docent entre universitats públiques.", "correct": false },
      { "text": "Només amb centres de recerca que no siguin universitaris.", "correct": false },
      { "text": "Únicament si es tracta de títols propis no oficials.", "correct": false }
    ]
  },
  {
    "n": 28,
    "question": "El nivell 3 del Marc Espanyol de Qualificacions per a l'Educació Superior (MECES) correspon a:",
    "answers": [
      { "text": "Màster Universitari.", "correct": true },
      { "text": "Grau Universitari.", "correct": false },
      { "text": "Doctorat.", "correct": false },
      { "text": "Tècnic de Formació Professional.", "correct": false }
    ]
  },
  {
    "n": 29,
    "question": "El nivell 4 del MECES correspon a:",
    "answers": [
      { "text": "Doctorat.", "correct": true },
      { "text": "Màster Universitari.", "correct": false },
      { "text": "Grau de llarga durada.", "correct": false },
      { "text": "Catedràtic d'Universitat.", "correct": false }
    ]
  },
  {
    "n": 30,
    "question": "L'aprenentatge al llarg de la vida (Lifelong Learning) es concreta en la universitat a través de:",
    "answers": [
      { "text": "Títols propis, microcredencials i activitats de formació permanent.", "correct": true },
      { "text": "Exclusivament mitjançant el títol de Grau inicial.", "correct": false },
      { "text": "L'accés directe sense examen per a majors de 18 anys.", "correct": false },
      { "text": "La repetició d'assignatures ja aprovades anteriorment.", "correct": false }
    ]
  },
  // --- PREGUNTAS NUEVAS PARA COMPLETAR EL TEMA (BASADAS EN RD 822/2021) ---
  {
    "n": 31,
    "question": "Segons el RD 822/2021, quina és la durada màxima de l'acreditació d'un títol oficial de Grau?",
    "answers": [
      { "text": "6 anys.", "correct": true },
      { "text": "4 anys.", "correct": false },
      { "text": "8 anys.", "correct": false },
      { "text": "10 anys.", "correct": false }
    ]
  },
  {
    "n": 32,
    "question": "Què s'entén per 'Transferència de crèdits' en l'àmbit oficial?",
    "answers": [
      { "text": "La inclusió en l'expedient oficial de crèdits obtinguts anteriorment que no van conduir a títol.", "correct": true },
      { "text": "El canvi de diners de la matrícula entre facultats de la mateixa universitat.", "correct": false },
      { "text": "L'enviament de crèdits d'un estudiant a un altre per proximitat familiar.", "correct": false },
      { "text": "El reconeixement de competències adquirides en el batxillerat.", "correct": false }
    ]
  },
  {
    "n": 33,
    "question": "Les 'Microcredencials' són ensenyaments que permeten:",
    "answers": [
      { "text": "Certificar resultats d'aprenentatge d'ensenyaments de curta durada (menys de 15 ECTS).", "correct": true },
      { "text": "Obtenir un títol de Grau en un sol semestre.", "correct": false },
      { "text": "Accedir al Doctorat sense haver fet cap Màster oficial.", "correct": false },
      { "text": "Acreditar el coneixement del funcionament del campus virtual.", "correct": false }
    ]
  },
  {
    "n": 34,
    "question": "Quin nivell del Marc Europeu de Qualificacions (EQF) correspon al títol de Grau?",
    "answers": [
      { "text": "Nivell 6.", "correct": true },
      { "text": "Nivell 7.", "correct": false },
      { "text": "Nivell 5.", "correct": false },
      { "text": "Nivell 8.", "correct": false }
    ]
  },
  {
    "n": 35,
    "question": "Dins d'un pla d'estudis de Grau, quants crèdits poden ser reconeguts per experiència professional?",
    "answers": [
      { "text": "Fins a un màxim del 15% del total de crèdits del títol.", "correct": true },
      { "text": "Fins al 50% si l'experiència és de més de 10 anys.", "correct": false },
      { "text": "No es pot reconèixer cap crèdit per experiència laboral.", "correct": false },
      { "text": "Tots els crèdits optatius sense límit.", "correct": false }
    ]
  },
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
  {
    "n": 1,
    "question": "Segons la Llei 39/2015, els actes administratius es produiran per escrit a través de mitjans electrònics, llevat que:",
    "answers": [
      { "text": "La seva naturalesa exigeixi una altra forma més adequada d'expressió i constància.", "correct": true },
      { "text": "L'interessat manifesti la seva voluntat de relacionar-se en paper i no estigui obligat a la relació electrònica.", "correct": false },
      { "text": "Es tracti d'actes de tràmit que no decideixin el fons de l'assumpte.", "correct": false },
      { "text": "L'òrgan dictant no tingui habilitada la seu electrònica en el moment de l'emissió.", "correct": false }
    ]
  },
  {
    "n": 2,
    "question": "Quin d'aquests es considera l'element subjectiu essencial de l'acte administratiu?",
    "answers": [
      { "text": "L'Administració Pública com a subjecte i la investidura legítima i competència de l'òrgan dictant.", "correct": true },
      { "text": "La lícita adequació del contingut a la finalitat perseguida pel dret.", "correct": false },
      { "text": "La causa o motiu pel qual es dicta la resolució.", "correct": false },
      { "text": "La capacitat d'obrar plena de l'interessat en el procediment.", "correct": false }
    ]
  },
  {
    "n": 3,
    "question": "La motivació dels actes administratius, segons l'article 35 de la Llei 39/2015, implica:",
    "answers": [
      { "text": "La succinta referència de fets i fonaments de dret en l'acte que es dicta.", "correct": true },
      { "text": "L'exposició detallada de totes les al·legacions presentades pels interessats encara que siguin impertinents.", "correct": false },
      { "text": "La inclusió de la signatura electrònica del titular de l'òrgan i el segell de temps.", "correct": false },
      { "text": "La notificació obligatòria del peu de recurs als interessats.", "correct": false }
    ]
  },
  {
    "n": 4,
    "question": "Quin d'aquests actes ha de ser obligatòriament motivat segons la llei?",
    "answers": [
      { "text": "Els actes que limitin drets subjectius o interessos legítims i els que resolguin procediments de revisió d'ofici.", "correct": true },
      { "text": "Tots els actes que posin fi a la via administrativa sense excepció.", "correct": false },
      { "text": "Els actes que confirmin acords de suspensió d'actes impugnats.", "correct": false },
      { "text": "Els actes dictats en virtut d'una potestat reglada on no hi hagi marge de discrecionalitat.", "correct": false }
    ]
  },
  {
    "n": 5,
    "question": "Un acte administratiu que es dicta prescindint totalment i absoluta del procediment legalment establert és:",
    "answers": [
      { "text": "Nul de ple dret.", "correct": true },
      { "text": "Anul·lable, però convalidable si l'interessat no presenta recurs.", "correct": false },
      { "text": "Una irregularitat no invalidant que només comporta sancions disciplinàries.", "correct": false },
      { "text": "Vàlid si es demostra que el resultat final hauria estat el mateix.", "correct": false }
    ]
  },
  {
    "n": 6,
    "question": "Els actes de les Administracions Públiques subjectes al Dret Administratiu es presumeixen:",
    "answers": [
      { "text": "Vàlids i produeixen efectes des de la data en què es dicten, llevat que se'n disposi el contrari.", "correct": true },
      { "text": "Vàlids només a partir del moment de la seva notificació efectiva.", "correct": false },
      { "text": "Legals, però la seva eficàcia està supeditada sempre a la publicació en un diari oficial.", "correct": false },
      { "text": "Nuls si no contenen expressament el fonament de dret de la competència.", "correct": false }
    ]
  },
  {
    "n": 7,
    "question": "L'eficàcia d'un acte quedarà demorada (retardada) quan:",
    "answers": [
      { "text": "Així ho exigeixi el seu contingut o estigui supeditada a la seva notificació, publicació o aprovació superior.", "correct": true },
      { "text": "L'administració no disposi de pressupost per a l'execució material de l'acte.", "correct": false },
      { "text": "S'interposi un recurs administratiu ordinari que suspengui automàticament l'acte.", "correct": false },
      { "text": "Es tracti d'un acte dictat per un òrgan col·legiat amb vots particulars en contra.", "correct": false }
    ]
  },
  {
    "n": 8,
    "question": "Es pot donar eficàcia retroactiva a un acte administratiu?",
    "answers": [
      { "text": "Sí, excepcionalment, quan es dictin en substitució d'actes anul·lats i produeixin efectes favorables a l'interessat.", "correct": true },
      { "text": "No, la irretroactivitat és un principi absolut segons la Constitució Espanyola.", "correct": false },
      { "text": "Sí, sempre que l'Administració ho consideri convenient per a l'interès general.", "correct": false },
      { "text": "Només si l'acte és de caràcter sancionador i afavoreix el procediment de recaptació.", "correct": false }
    ]
  },
  {
    "n": 9,
    "question": "Els actes que incorrin en qualsevol infracció de l'ordenament jurídic, inclosa la desviació de poder, són:",
    "answers": [
      { "text": "Anul·lables.", "correct": true },
      { "text": "Nuls de ple dret.", "correct": false },
      { "text": "Vàlids, sempre que no causin indefensió formal.", "correct": false },
      { "text": "Inexistents per falta d'un dels elements essencials.", "correct": false }
    ]
  },
  {
    "n": 10,
    "question": "La desviació de poder es defineix jurídicament com:",
    "answers": [
      { "text": "L'exercici de potestats administratives per a fins diferents dels fixats per l'ordenament jurídic.", "correct": true },
      { "text": "L'ús de la competència administrativa per un òrgan manifestament incompetent.", "correct": false },
      { "text": "L'alteració de l'ordre de tramitació dels expedients sense causa justificada.", "correct": false },
      { "text": "L'incompliment dels terminis de resolució per part de l'autoritat.", "correct": false }
    ]
  },
  {
    "n": 11,
    "question": "Un defecte de forma només determinarà l'anul·labilitat de l'acte quan:",
    "answers": [
      { "text": "Mantingui l'acte sense els requisits formals indispensables per assolir la seva finalitat o causi indefensió.", "correct": true },
      { "text": "L'error s'hagi produït en el nom o cognoms de l'interessat.", "correct": false },
      { "text": "L'acte s'hagi dictat en una llengua no oficial en el territori de la comunitat autònoma.", "correct": false },
      { "text": "No s'hagi utilitzat el model normalitzat previst en la seu electrònica.", "correct": false }
    ]
  },
  {
    "n": 12,
    "question": "L'acte pel qual l'Administració esmena errors materials, de fet o aritmètics s'anomena:",
    "answers": [
      { "text": "Rectificació d'errors.", "correct": true },
      { "text": "Revocació d'ofici.", "correct": false },
      { "text": "Revisió de l'acte anul·lable.", "correct": false },
      { "text": "Conversió de l'acte invàlid.", "correct": false }
    ]
  },
  {
    "n": 13,
    "question": "En quin termini es pot procedir a la rectificació d'errors materials o aritmètics?",
    "answers": [
      { "text": "En qualsevol moment, d'ofici o a instància dels interessats.", "correct": true },
      { "text": "Dins del termini d'un mes des de la notificació de l'acte.", "correct": false },
      { "text": "Mentre l'acte no hagi estat impugnat en via contenciosa administrativa.", "correct": false },
      { "text": "Només durant l'exercici pressupostari en què s'ha dictat l'acte.", "correct": false }
    ]
  },
  {
    "n": 14,
    "question": "Són nuls de ple dret els actes que tinguin un contingut:",
    "answers": [
      { "text": "Impossible.", "correct": true },
      { "text": "Il·lícit però realitzable materialment.", "correct": false },
      { "text": "Contrari a un informe no preceptiu de l'òrgan consultiu.", "correct": false },
      { "text": "Desfavorable i no motivat suficientment.", "correct": false }
    ]
  },
  {
    "n": 15,
    "question": "Un acte dictat per un òrgan manifestament incompetent per raó de la matèria o del territori és:",
    "answers": [
      { "text": "Nul de ple dret.", "correct": true },
      { "text": "Anul·lable, i pot ser convalidat pel superior jeràrquic.", "correct": false },
      { "text": "Vàlid si l'interessat el consent de forma expressa.", "correct": false },
      { "text": "Inexistent per falta total de voluntat administrativa.", "correct": false }
    ]
  },
  {
    "n": 16,
    "question": "La convalidació de l'acte anul·lable consisteix en:",
    "answers": [
      { "text": "L'esmena dels vicis de què pateixi l'acte, produint efectes des de la data de la convalidació.", "correct": true },
      { "text": "La repetició de tot el procediment administratiu des de la fase d'inici.", "correct": false },
      { "text": "La declaració judicial que l'acte és vàlid tot i les seves infraccions.", "correct": false },
      { "text": "L'acceptació per part de l'interessat de les irregularitats comeses.", "correct": false }
    ]
  },
  {
    "n": 17,
    "question": "Si un vici d'anul·labilitat consisteix en la manca d'una autorització d'un òrgan superior, l'acte es convalidarà mitjançant:",
    "answers": [
      { "text": "L'atorgament posterior de l'autorització per l'òrgan competent.", "correct": true },
      { "text": "La ratificació del Rector en qualitat de representant legal.", "correct": false },
      { "text": "L'aprovació dels pressupostos de l'any següent.", "correct": false },
      { "text": "No es pot convalidar si el vici és de competència.", "correct": false }
    ]
  },
  {
    "n": 18,
    "question": "Els actes de tràmit es defineixen com aquells que:",
    "answers": [
      { "text": "Integren el procediment però no decideixen directament el fons de l'assumpte.", "correct": true },
      { "text": "Posen fi a la via administrativa i permeten anar al jutjat.", "correct": false },
      { "text": "Són dictats exclusivament per les Secretaries de les Facultats.", "correct": false },
      { "text": "Tenen caràcter definitiu i són sempre impugnables.", "correct": false }
    ]
  },
  {
    "n": 19,
    "question": "Quan es pot impugnar de forma separada un acte de tràmit?",
    "answers": [
      { "text": "Quan decideixi el fons de l'assumpte, determini la impossibilitat de continuar el procediment o causi indefensió.", "correct": true },
      { "text": "En qualsevol moment que l'interessat consideri que s'ha vulnerat la llei.", "correct": false },
      { "text": "Només quan es tracti d'informes tècnics vinculants.", "correct": false },
      { "text": "Mai, els actes de tràmit s'han d'impugnar sempre amb la resolució final.", "correct": false }
    ]
  },
  {
    "n": 20,
    "question": "L'acte que ja no pot ser impugnat en via administrativa perquè han transcorregut els terminis es denomina:",
    "answers": [
      { "text": "Acte ferm.", "correct": true },
      { "text": "Acte definitiu.", "correct": false },
      { "text": "Acte originari.", "correct": false },
      { "text": "Acte reproductor.", "correct": false }
    ]
  },
  {
    "n": 21,
    "question": "Què implica que un acte 'posi fi a la via administrativa'?",
    "answers": [
      { "text": "Que la via administrativa s'ha exhaurit i es pot interposar recurs de reposició o anar directament a la jurisdicció contenciosa.", "correct": true },
      { "text": "Que l'expedient queda arxivat definitivament i no es pot fer res més.", "correct": false },
      { "text": "Que l'acte ha estat dictat pel President del Govern.", "correct": false },
      { "text": "Que s'ha d'interposar obligatòriament el recurs d'alçada.", "correct": false }
    ]
  },
  {
    "n": 22,
    "question": "A la Universitat de Barcelona, quins actes exhaureixen la via administrativa?",
    "answers": [
      { "text": "Les resolucions del Rector i els acords del Consell Social.", "correct": true },
      { "text": "Totes les resolucions dictades per les Juntes de Facultat.", "correct": false },
      { "text": "Únicament les que porten el vistiplau de la Gerència.", "correct": false },
      { "text": "Tots els actes de tràmit qualificats.", "correct": false }
    ]
  },
  {
    "n": 23,
    "question": "L'element teleològic de l'acte administratiu es refereix a:",
    "answers": [
      { "text": "L'adequació de l'acte a la finalitat d'interès públic que justifica la potestat administrativa.", "correct": true },
      { "text": "La verificació que l'acte ha estat signat en temps i forma.", "correct": false },
      { "text": "L'objecte material sobre el qual recau la decisió.", "correct": false },
      { "text": "La distància geogràfica on l'acte produeix els seus efectes.", "correct": false }
    ]
  },
  {
    "n": 24,
    "question": "L'acte administratiu es diferencia d'un contracte perquè el primer és:",
    "answers": [
      { "text": "Una declaració unilateral emanada d'una Administració Pública.", "correct": true },
      { "text": "Un acord de voluntats entre dues parts amb igualtat de condicions.", "correct": false },
      { "text": "Sempre de caràcter onerós i amb contraprestació econòmica.", "correct": false },
      { "text": "Regulat exclusivament pel Dret Civil i Mercantil.", "correct": false }
    ]
  },
  {
    "n": 25,
    "question": "Són nuls de ple dret els actes que constitueixen infracció penal?",
    "answers": [
      { "text": "Sí, els que constitueixin infracció penal o es dictin com a conseqüència d'aquesta.", "correct": true },
      { "text": "No, per a la nul·litat cal que hi hagi una sentència penal ferma prèvia.", "correct": false },
      { "text": "Només si l'infracció penal és comesa per un alt càrrec.", "correct": false },
      { "text": "Són anul·lables, excepte si hi ha violència o intimidació.", "correct": false }
    ]
  },
  {
    "n": 26,
    "question": "La conservació d'actes en un procediment implica:",
    "answers": [
      { "text": "Que l'òrgan que anul·li actuacions ha de conservar aquells actes el contingut dels quals s'hauria mantingut igual.", "correct": true },
      { "text": "L'obligació de guardar els expedients físics en un arxiu durant 50 anys.", "correct": false },
      { "text": "Que tots els actes previs a un error són vàlids per defecte.", "correct": false },
      { "text": "La prohibició de destruir documents electrònics sense permís del Rector.", "correct": false }
    ]
  },
  {
    "n": 27,
    "question": "Els actes administratius es poden classificar com a declaracions de:",
    "answers": [
      { "text": "Voluntat, judici, desig o coneixement.", "correct": true },
      { "text": "Llei, reglament, decret o ordre.", "correct": false },
      { "text": "Sanció, subvenció, expropiació o nomenament.", "correct": false },
      { "text": "Totes les respostes són incorrectes.", "correct": false }
    ]
  },
  {
    "n": 28,
    "question": "Un acte és anul·lable si es dicta mitjançant una norma de rang reglamentari que vulnera una Llei?",
    "answers": [
      { "text": "No, en aquest cas l'acte és nul de ple dret per vulnerar la jerarquia normativa.", "correct": true },
      { "text": "Sí, és una causa típica d'anul·labilitat administrativa.", "correct": false },
      { "text": "L'acte és vàlid fins que el Tribunal Constitucional digui el contrari.", "correct": false },
      { "text": "L'acte és ineficaç però no invàlid.", "correct": false }
    ]
  },
  {
    "n": 29,
    "question": "L'obligació de motivar els actes que se separen del criteri seguit en actuacions precedents busca:",
    "answers": [
      { "text": "Garantir el principi d'igualtat i evitar l'arbitrarietat administrativa.", "correct": true },
      { "text": "Permetre que l'interessat pugui copiar el model de l'administració.", "correct": false },
      { "text": "Reduir el nombre de recursos interposats contra la Universitat.", "correct": false },
      { "text": "Acreditar que el funcionari ha llegit els antecedents del cas.", "correct": false }
    ]
  },
  {
    "n": 30,
    "question": "Un acte administratiu 'confirmatori' és aquell que:",
    "answers": [
      { "text": "Es limita a reiterar un acte anterior ferm i consentit per l'interessat.", "correct": true },
      { "text": "Necessita la signatura de l'interessat per ser eficaç.", "correct": false },
      { "text": "Ratifica un acte dictat per un òrgan incompetent.", "correct": false },
      { "text": "Dóna el vistiplau a una proposta d'un òrgan consultiu.", "correct": false }
    ]
  },
  // --- PREGUNTES ESSENCIALS AFEGIDES (TEMA 6 COMPLERT) ---
  {
    "n": 31,
    "question": "Segons l'article 40 de la Llei 39/2015, el termini per a dictar una notificació és de:",
    "answers": [
      { "text": "10 dies a partir de la data en què l'acte hagi estat dictat.", "correct": true },
      { "text": "5 dies des de la resolució final.", "correct": false },
      { "text": "15 dies hàbils, excloent els dissabtes.", "correct": false },
      { "text": "No hi ha termini legal, depèn de la càrrega de feina de la unitat.", "correct": false }
    ]
  },
  {
    "n": 32,
    "question": "Una notificació que contingui el text íntegre de l'acte però no indiqui els recursos procedents es considera:",
    "answers": [
      { "text": "Una notificació defectuosa, que només tindrà efectes si l'interessat realitza actuacions que suposin el coneixement de l'acte.", "correct": true },
      { "text": "Nul·la de ple dret automàticament.", "correct": false },
      { "text": "Vàlida a tots els efectes, ja que el text de l'acte és el més important.", "correct": false },
      { "text": "Una irregularitat que obliga a repetir l'acte original.", "correct": false }
    ]
  },
  {
    "n": 33,
    "question": "El silenci administratiu en els procediments iniciats a sol·licitud de l'interessat té, com a norma general, efecte:",
    "answers": [
      { "text": "Estimatori (positiu), llevat que una norma amb rang de llei o de dret de la UE disposi el contrari.", "correct": true },
      { "text": "Desestimatori (negatiu) en tots els casos per seguretat jurídica.", "correct": false },
      { "text": "Estimatori només si es tracta de beques i ajuts a l'estudi.", "correct": false },
      { "text": "De caducitat del procediment i arxiu de les actuacions.", "correct": false }
    ]
  },
  {
    "n": 34,
    "question": "En quina de les següents matèries el silenci administratiu és SEMPRE desestimatori (negatiu)?",
    "answers": [
      { "text": "En activitats que puguin danyar el medi ambient i en procediments de responsabilitat patrimonial.", "correct": true },
      { "text": "En sol·licituds de trasllat d'expedient entre facultats de la UB.", "correct": false },
      { "text": "En peticions de revisió de notes d'exàmens oficials.", "correct": false },
      { "text": "En sol·licituds de vacances i permisos del personal de la UB.", "correct": false }
    ]
  },
  {
    "n": 35,
    "question": "L'acte exprés dictat amb posterioritat al silenci administratiu positiu:",
    "answers": [
      { "text": "Només pot ser confirmatori de l'estimació produïda pel silenci.", "correct": true },
      { "text": "Pot ser denegatori si l'Administració s'adona que el sol·licitant no tenia dret.", "correct": false },
      { "text": "És nul de ple dret si no es dicta en un termini de 10 dies.", "correct": false },
      { "text": "No té cap valor jurídic, ja que el silenci ja ha tancat el cas.", "correct": false }
    ]
  },
  {
    "n": 1,
    "question": "Segons l'article 14 de la Llei 39/2015, quin d'aquests col·lectius està OBLIGAT a relacionar-se electrònicament amb l'Administració?",
    "answers": [
      { "text": "Les persones jurídiques, entitats sense personalitat jurídica i qui exerceixi una activitat professional que requereixi col·legiació obligatòria.", "correct": true },
      { "text": "Totes les persones físiques pel sol fet de residir en un municipi amb Seu Electrònica.", "correct": false },
      { "text": "Únicament les empreses amb una facturació superior als 600.000 euros anuals.", "correct": false },
      { "text": "Els ciutadans que hagin accedit voluntàriament una vegada a la Seu Electrònica.", "correct": false }
    ]
  },
  {
    "n": 2,
    "question": "Estan obligats a la relació electrònica els estudiants de la Universitat de Barcelona?",
    "answers": [
      { "text": "Sí, per a la majoria de tràmits acadèmics, d'acord amb el Reglament de la UB i la Llei 39/2015 per la seva condició de col·lectiu amb capacitat tècnica acreditada.", "correct": true },
      { "text": "No, la llei reserva aquest dret al paper exclusivament per a qualsevol persona física sense excepció.", "correct": false },
      { "text": "Només aquells que cursen estudis de postgrau o màster oficial.", "correct": false },
      { "text": "Només si han sol·licitat prèviament l'alta en el sistema de notificacions electròniques de la Generalitat.", "correct": false }
    ]
  },
  {
    "n": 3,
    "question": "La 'Seu Electrònica' es diferencia d'un portal d'internet comú perquè:",
    "answers": [
      { "text": "És un punt d'accés sota la responsabilitat, titularitat i gestió d'una Administració, que garanteix la integritat i veracitat de la informació.", "correct": true },
      { "text": "S'hi pot accedir sense necessitat de certificat digital en tots els casos.", "correct": false },
      { "text": "Permet la compravenda de serveis públics mitjançant passarel·les de pagament privades.", "correct": false },
      { "text": "No té validesa jurídica per a la presentació de recursos administratius.", "correct": false }
    ]
  },
  {
    "n": 4,
    "question": "Respecte al Registre Electrònic General, quina de les següents afirmacions és correcta?",
    "answers": [
      { "text": "S'ha de permetre la presentació de documents tots els dies de l'any durant les 24 hores.", "correct": true },
      { "text": "El registre només admet documents en format .PDF signats per un notari.", "correct": false },
      { "text": "Si el registre es col·lapsa, l'Administració pot tancar-lo els caps de setmana per manteniment.", "correct": false },
      { "text": "La presentació d'un document en el registre electrònic és opcional per a les persones jurídiques.", "correct": false }
    ]
  },
  {
    "n": 5,
    "question": "Si un subjecte obligat a la relació electrònica presenta una sol·licitud presencialment, l'Administració:",
    "answers": [
      { "text": "Li requerirà l'esmena a través de la presentació electrònica, essent la data d'aquesta darrera la que es considerarà com a data de presentació.", "correct": true },
      { "text": "Ha d'admetre el paper i digitalitzar-lo ella mateixa sense demanar res a l'interessat.", "correct": false },
      { "text": "Declararà la inadmissió del tràmit sense possibilitat d'esmenar el defecte.", "correct": false },
      { "text": "Considerarà com a data de presentació la del lliurament del paper per evitar la caducitat.", "correct": false }
    ]
  },
  {
    "n": 6,
    "question": "Sobre l'esmena de la presentació presencial d'un obligat electrònic, quina és la conseqüència respecte als terminis?",
    "answers": [
      { "text": "La data de presentació de la sol·licitud serà la data en què s'hagi produït l'esmena (la tramesa electrònica).", "correct": true },
      { "text": "L'Administració mantindrà la data del registre presencial per silenci positiu.", "correct": false },
      { "text": "Es perd el dret a la bonificació de taxes si el termini acabava el dia del lliurament en paper.", "correct": false },
      { "text": "No té cap conseqüència si l'esmena es fa en menys de 48 hores.", "correct": false }
    ]
  },
  {
    "n": 7,
    "question": "Pel que fa al còmput de terminis en la Seu Electrònica:",
    "answers": [
      { "text": "Es regeix per la data i l'hora oficial de la Seu, que ha de comptar amb mesures de seguretat per garantir-ne la sincronització.", "correct": true },
      { "text": "L'interessat pot al·legar l'hora del seu propi dispositiu si hi ha un desfasament de menys de 5 minuts.", "correct": false },
      { "text": "Els dissabtes es consideren dies hàbils a efectes de còmput electrònic segons la Llei 39/2015.", "correct": false },
      { "text": "El registre mai no pot estar tancat, ni tan sols per interrupcions programades.", "correct": false }
    ]
  },
  {
    "n": 8,
    "question": "Les notificacions electròniques s'entendran practicades en el moment en què:",
    "answers": [
      { "text": "Es produeixi l'accés al seu contingut en la seu electrònica o adreça habilitada.", "correct": true },
      { "text": "L'Administració dipositi el document a la bústia virtual de l'interessat.", "correct": false },
      { "text": "L'interessat rebi l'avís de cortesia en el seu correu electrònic personal.", "correct": false },
      { "text": "Hagin passat 24 hores des de la signatura del document per l'autoritat competent.", "correct": false }
    ]
  },
  {
    "n": 9,
    "question": "Quan s'entén que una notificació electrònica ha estat rebutjada (notificació infructuosa)?",
    "answers": [
      { "text": "Quan hagin transcorregut 10 dies naturals des de la posada a disposició sense que s'hi accedeixi al contingut.", "correct": true },
      { "text": "Quan l'interessat enviï un correu dient que no accepta la notificació.", "correct": false },
      { "text": "Si el servidor de correu de l'interessat retorna un error de 'bústia plena'.", "correct": false },
      { "text": "Quan hagin passat 10 dies hàbils sense obrir el document.", "correct": false }
    ]
  },
  {
    "n": 10,
    "question": "L'avís de notificació enviat al dispositiu mòbil o correu electrònic de l'interessat:",
    "answers": [
      { "text": "És un mecanisme de cortesia; la seva manca no invalida la notificació practicada.", "correct": true },
      { "text": "És un requisit de validesa essencial: sense avís, la notificació és nul·la.", "correct": false },
      { "text": "Marca l'inici del còmput per a la presentació de recursos.", "correct": false },
      { "text": "Substitueix la notificació oficial si l'interessat respon al correu.", "correct": false }
    ]
  },
  {
    "n": 11,
    "question": "El Punt d'Accés General (PAG) electrònic té la funció de:",
    "answers": [
      { "text": "Facilitar l'accés als serveis i procediments de les diferents Administracions des d'un portal únic.", "correct": true },
      { "text": "Substituir totes les seus electròniques de les universitats catalanes.", "correct": false },
      { "text": "Actuar com a tribunal de recursos en matèria de digitalització.", "correct": false },
      { "text": "Ser l'únic lloc on es poden pagar les taxes universitàries.", "correct": false }
    ]
  },
  {
    "n": 12,
    "question": "Si una notificació es realitza per duplicat (en paper i electrònicament):",
    "answers": [
      { "text": "Els terminis es computaran a partir de la data en què es produeixi la primera de les notificacions.", "correct": true },
      { "text": "L'interessat pot triar quina de les dues dates l'afavoreix més.", "correct": false },
      { "text": "Prevaldrà sempre la notificació en paper per sobre de l'electrònica.", "correct": false },
      { "text": "La notificació electrònica anul·la automàticament qualsevol efecte de la de paper.", "correct": false }
    ]
  },
  {
    "n": 13,
    "question": "Els documents presentats en paper que s'hagin de digitalitzar al registre:",
    "answers": [
      { "text": "S'han de retornar a l'interessat un cop digitalitzats, llevat que la llei obligui a la seva custòdia.", "correct": true },
      { "text": "Han de ser destruïts immediatament per seguretat de dades.", "correct": false },
      { "text": "S'han d'enviar a l'arxiu històric de la universitat un cop escanejats.", "correct": false },
      { "text": "Només es digitalitzaran si ocupen menys de 10 pàgines.", "correct": false }
    ]
  },
  {
    "n": 14,
    "question": "Una 'còpia autèntica' electrònica d'un document original en paper:",
    "answers": [
      { "text": "Té la mateixa validesa que l'original i s'obté mitjançant la digitalització amb signatura electrònica de l'Administració.", "correct": true },
      { "text": "És una fotocòpia en blanc i negre enviada per escàner domèstic.", "correct": false },
      { "text": "Només és vàlida si el funcionari hi posa un segell de 'conforme'.", "correct": false },
      { "text": "No pot ser mai considerada document públic.", "correct": false }
    ]
  },
  {
    "n": 15,
    "question": "Quins sistemes d'identificació són vàlids per als interessats segons la Llei 39/2015?",
    "answers": [
      { "text": "Sistemes de signatura electrònica, segells electrònics i sistemes de clau concertada (com Cl@ve).", "correct": true },
      { "text": "Únicament el certificat digital emès per la Fábrica Nacional de Moneda y Timbre.", "correct": false },
      { "text": "La introducció del número de DNI i la data de naixement sense més seguretat.", "correct": false },
      { "text": "L'ús d'una signatura manuscrita escanejada i adjuntada en un .JPG.", "correct": false }
    ]
  },
  {
    "n": 16,
    "question": "L'expedient administratiu electrònic s'ha d'enviar complet, la qual cosa inclou:",
    "answers": [
      { "text": "Un índex numerat i autenticat electrònicament per garantir-ne la integritat i l'ordre.", "correct": true },
      { "text": "Totes les notes internes i esborranys que han dut a la resolució.", "correct": false },
      { "text": "Les dades bancàries personals de tots els funcionaris intervinents.", "correct": false },
      { "text": "Només la resolució final i el justificant de recepció.", "correct": false }
    ]
  },
  {
    "n": 17,
    "question": "La informació amb caràcter auxiliar o de suport (esborranys, opinions internes):",
    "answers": [
      { "text": "No forma part de l'expedient administratiu electrònic.", "correct": true },
      { "text": "És part essencial de l'expedient i s'ha de notificar a l'interessat.", "correct": false },
      { "text": "S'ha de publicar al portal de transparència de la UB.", "correct": false },
      { "text": "Només es conserva si l'expedient és sancionador.", "correct": false }
    ]
  },
  {
    "n": 18,
    "question": "L'arxiu electrònic únic de cada Administració ha de garantir:",
    "answers": [
      { "text": "L'autenticitat, integritat, conservació i consulta del document a llarg termini.", "correct": true },
      { "text": "Que els documents ocupin el mínim espai possible tot i perdre resolució.", "correct": false },
      { "text": "Que només el Rector pugui accedir als documents passats 5 anys.", "correct": false },
      { "text": "L'eliminació automàtica dels documents que no hagin estat consultats en un any.", "correct": false }
    ]
  },
  {
    "n": 19,
    "question": "Respecte al calendari de dies inhàbils a la Seu Electrònica de la UB:",
    "answers": [
      { "text": "S'ha de publicar de manera visible i actualitzada per a coneixement dels usuaris.", "correct": true },
      { "text": "No és necessari si ja s'ha publicat al DOGC.", "correct": false },
      { "text": "Només inclou els dies festius de la ciutat de Barcelona.", "correct": false },
      { "text": "És el mateix per a totes les universitats de l'Estat sense variacions.", "correct": false }
    ]
  },
  {
    "n": 20,
    "question": "En cas de fallada tècnica de la Seu Electrònica (interrupció no planificada):",
    "answers": [
      { "text": "L'Administració pot ampliar els terminis i ha de publicar la incidència en la pròpia Seu.", "correct": true },
      { "text": "L'interessat ha d'anar immediatament a un registre presencial d'una altra administració.", "correct": false },
      { "text": "Es considera que el termini ha expirat si l'error dura menys de 2 hores.", "correct": false },
      { "text": "L'Administració ha de declarar nul el procediment sencer.", "correct": false }
    ]
  },
  {
    "n": 21,
    "question": "El Codi Segur de Verificació (CSV) és un sistema que permet:",
    "answers": [
      { "text": "Comprovar l'autenticitat d'un document imprès mitjançant l'accés a l'original electrònic en la Seu.", "correct": true },
      { "text": "Accedir a la xarxa Wi-Fi de la Universitat de Barcelona.", "correct": false },
      { "text": "Signar documents sense necessitat de certificat digital personal.", "correct": false },
      { "text": "Xifrar les dades dels expedients perquè no siguin llegides pels jutges.", "correct": false }
    ]
  },
  {
    "n": 22,
    "question": "Què és la 'Interoperabilitat' en l'administració electrònica?",
    "answers": [
      { "text": "La capacitat dels sistemes de les diferents administracions per intercanviar dades i compartir informació.", "correct": true },
      { "text": "L'obligació del funcionari de treballar amb diversos ordinadors alhora.", "correct": false },
      { "text": "La facultat del ciutadà d'utilitzar qualsevol navegador d'internet.", "correct": false },
      { "text": "La instal·lació de fibra òptica en tots els edificis de la UB.", "correct": false }
    ]
  },
  {
    "n": 23,
    "question": "Un ciutadà NO obligat a la relació electrònica pot canviar de canal (de paper a electrònic o viceversa)?",
    "answers": [
      { "text": "Sí, en qualsevol moment del procediment pot sol·licitar el canvi de canal de comunicació.", "correct": true },
      { "text": "No, un cop iniciat un procediment en paper, s'ha d'acabar en paper.", "correct": false },
      { "text": "Sí, però només un cop cada 6 mesos.", "correct": false },
      { "text": "Només si l'Administració l'autoritza mitjançant acord motivat.", "correct": false }
    ]
  },
  {
    "n": 24,
    "question": "Si el registre electrònic rep un document a les 23:59 d'un dia inhàbil (ex. un diumenge):",
    "answers": [
      { "text": "Es considera presentat en aquesta data i hora, però per al còmput de terminis compta com el primer dia hàbil següent.", "correct": true },
      { "text": "La sol·licitud és rebutjada per haver estat enviada en dia festiu.", "correct": false },
      { "text": "Es considera presentada el dilluns a les 09:00 de forma retroactiva.", "correct": false },
      { "text": "L'Administració ha de penalitzar l'interessat per ús indegut del servei.", "correct": false }
    ]
  },
  {
    "n": 25,
    "question": "Les administracions poden obligar a les persones físiques a relacionar-se electrònicament?",
    "answers": [
      { "text": "Sí, reglamentàriament, per a certs procediments si es garanteix que tenen accés i disponibilitat dels mitjans necessaris.", "correct": true },
      { "text": "No, les persones físiques tenen el dret inalienable a l'ús del paper.", "correct": false },
      { "text": "Només en cas d'estat d'alarma o emergència sanitària.", "correct": false },
      { "text": "Únicament si són majors d'edat i tenen títol universitari.", "correct": false }
    ]
  },
  {
    "n": 26,
    "question": "L'anomenada 'Carpeta Ciutadana' permet principalment:",
    "answers": [
      { "text": "Consultar l'estat dels expedients, veure les notificacions i accedir a les dades que té l'Administració.", "correct": true },
      { "text": "Presentar queixes anònimes contra el personal de la universitat.", "correct": false },
      { "text": "Modificar el domicili fiscal d'altres ciutadans per error de sistema.", "correct": false },
      { "text": "Accedir als continguts de les classes gravades de la facultat.", "correct": false }
    ]
  },
  {
    "n": 27,
    "question": "Què és la signatura electrònica 'no criptogràfica' o basada en claus concertades?",
    "answers": [
      { "text": "Sistemes com l'idCAT Mòbil o Cl@ve PIN, que identifiquen l'usuari sense necessitat d'instal·lar certificats.", "correct": true },
      { "text": "Una signatura feta amb un bolígraf digital sobre la pantalla.", "correct": false },
      { "text": "Un sistema de seguretat que no utilitza internet per funcionar.", "correct": false },
      { "text": "L'ús de la petjada dactilar enviada per fotografia.", "correct": false }
    ]
  },
  {
    "n": 28,
    "question": "Tota Seu Electrònica ha de disposar d'un sistema de:",
    "answers": [
      { "text": "Verificació dels certificats de la Seu i dels codis segurs de verificació (CSV).", "correct": true },
      { "text": "Traducció automàtica a totes les llengües de la Unió Europea.", "correct": false },
      { "text": "Xat en viu amb el Rector de la Universitat.", "correct": false },
      { "text": "Publicitat comercial per finançar el manteniment tècnic.", "correct": false }
    ]
  },
  {
    "n": 29,
    "question": "En l'enviament d'un expedient electrònic al Jutjat, si algun document no es pot digitalitzar (ex. un plànol gegant):",
    "answers": [
      { "text": "S'ha d'enviar el suport original de manera física fent constar aquesta circumstància en l'índex.", "correct": true },
      { "text": "S'ha de demanar a l'interessat que el torni a fer en format petit.", "correct": false },
      { "text": "S'ha de prescindir d'aquest document en l'enviament judicial.", "correct": false },
      { "text": "S'ha de fotografiar per parts i enviar 50 fitxers separats.", "correct": false }
    ]
  },
  {
    "n": 30,
    "question": "L'accés a la Seu Electrònica de la UB s'ha de garantir d'acord amb els principis de:",
    "answers": [
      { "text": "Accessibilitat, usabilitat i neutralitat tecnològica.", "correct": true },
      { "text": "Exclusivitat, opacitat i seguretat nacional.", "correct": false },
      { "text": "Cost zero per a l'Administració i cost elevat per a l'usuari.", "correct": false },
      { "text": "Lliure elecció de la veritat administrativa.", "correct": false }
    ]
  },
  // --- PREGUNTES CLAU AFEGIDES (PERFECCIONAMENT TEMA 7) ---
  {
    "n": 31,
    "question": "D'acord amb el RD 203/2021, què és el 'Registre Electrònic d'Apoderaments'?",
    "answers": [
      { "text": "Un registre on consten les representacions que els ciutadans atorguen a tercers per actuar davant l'Administració.", "correct": true },
      { "text": "La llista de tots els advocats que treballen per a la Universitat.", "correct": false },
      { "text": "Un arxiu on es guarden les signatures dels alts càrrecs.", "correct": false },
      { "text": "El lloc on es registren les hipoteques dels edificis universitaris.", "correct": false }
    ]
  },
  {
    "n": 32,
    "question": "Què succeeix si un ciutadà accedeix a una notificació electrònica però no la descarrega?",
    "answers": [
      { "text": "La notificació es considera practicada des del moment de l'accés, independentment de la descàrrega.", "correct": true },
      { "text": "No es considera practicada fins que no es prem el botó de 'descàrregar'.", "correct": false },
      { "text": "El sistema ha d'enviar un segon avís indicant que el fitxer segueix allà.", "correct": false },
      { "text": "Es considera notificació defectuosa i s'ha d'enviar per correu postal.", "correct": false }
    ]
  },
  {
    "n": 33,
    "question": "El principi de 'Neutralitat Tecnològica' implica que:",
    "answers": [
      { "text": "L'Administració no pot obligar l'ús d'un navegador o programari comercial específic.", "correct": true },
      { "text": "Tots els ordinadors de l'Administració han de ser de la mateixa marca.", "correct": false },
      { "text": "L'Administració no pot fer servir internet per a tràmits oficials.", "correct": false },
      { "text": "Els ciutadans han de pagar el mateix per qualsevol tràmit digital.", "correct": false }
    ]
  },
  {
    "n": 34,
    "question": "Quin és el termini màxim que un document pot estar al 'Registre de Sortida' abans de ser notificat?",
    "answers": [
      { "text": "La llei estableix que s'ha de cursar la notificació en el termini de 10 dies des de que s'ha dictat l'acte.", "correct": true },
      { "text": "S'ha de notificar en el mateix segon en què es signa l'acte.", "correct": false },
      { "text": "L'Administració té fins a 6 mesos per enviar la notificació oficial.", "correct": false },
      { "text": "No hi ha termini mentre el procediment no hagi caducat.", "correct": false }
    ]
  },
  {
    "n": 35,
    "question": "A la Universitat de Barcelona, qui pot accedir a la consulta dels expedients electrònics?",
    "answers": [
      { "text": "Els interessats en el procediment o els seus representants degudament acreditats.", "correct": true },
      { "text": "Qualsevol persona que tingui un certificat digital vàlid.", "correct": false },
      { "text": "Únicament el personal funcionari amb rang de Cap de Servei.", "correct": false },
      { "text": "Qualsevol alumne de la mateixa facultat per principi de transparència.", "correct": false }
    ]
  },
  {
    "n": 1,
    "question": "Quin principi de l'administració electrònica imposa l'obligació de no sol·licitar documents que ja hagin estat aportats anteriorment o elaborats per qualsevol Administració?",
    "answers": [
      { "text": "Principi d'interoperabilitat i el dret a no aportar documents segons l'article 28 de la Llei 39/2015.", "correct": true },
      { "text": "Principi de neutralitat tecnològica i lliure elecció de programari.", "correct": false },
      { "text": "Principi de simplificació administrativa basat en la responsabilitat patrimonial.", "correct": false },
      { "text": "Principi d'eficiència en l'assignació de recursos públics digitals.", "correct": false }
    ]
  },
  {
    "n": 2,
    "question": "Segons el Reglament (UE) 910/2014 (eIDAS), la signatura electrònica qualificada es defineix com:",
    "answers": [
      { "text": "Una signatura avançada creada mitjançant un dispositiu qualificat i basada en un certificat qualificat de signatura electrònica.", "correct": true },
      { "text": "Qualsevol signatura electrònica que hagi estat validada per un funcionari públic en exercici.", "correct": false },
      { "text": "Una signatura que utilitza dades biomètriques com l'empremta dactilar o l'iris.", "correct": false },
      { "text": "La signatura realitzada amb un certificat digital d'usuari sense intervenció de maquinari segur.", "correct": false }
    ]
  },
  {
    "n": 3,
    "question": "Quina és la principal diferència jurídica entre la signatura electrònica avançada i la qualificada?",
    "answers": [
      { "text": "La qualificada és l'única que té un valor jurídic equivalent a la signatura manuscrita per imperatiu legal.", "correct": true },
      { "text": "L'avançada no permet identificar el signant de manera única.", "correct": false },
      { "text": "La qualificada només es pot utilitzar en relacions entre administracions públiques.", "correct": false },
      { "text": "L'avançada no garanteix la integritat del document firmat.", "correct": false }
    ]
  },
  {
    "n": 4,
    "question": "L'interoperabilitat, segons l'Esquema Nacional d'Interoperabilitat (ENI), es defineix com:",
    "answers": [
      { "text": "La capacitat dels sistemes d'informació i dels procediments d'intercanviar dades i compartir informació i coneixement.", "correct": true },
      { "text": "L'obligació de fer servir els mateixos servidors físics per a tota la Generalitat.", "correct": false },
      { "text": "La possibilitat d'instal·lar qualsevol aplicació en l'ordinador del lloc de treball.", "correct": false },
      { "text": "L'estandardització del llenguatge de programació en totes les seus electròniques.", "correct": false }
    ]
  },
  {
    "n": 5,
    "question": "En el marc de la PKI (Infraestructura de Clau Pública), un certificat digital és:",
    "answers": [
      { "text": "Un fitxer electrònic signat per una Autoritat de Certificació que vincula unes dades de verificació amb un signant.", "correct": true },
      { "text": "Una clau privada que el ciutadà ha de compartir per correu electrònic per validar la seva identitat.", "correct": false },
      { "text": "Un document PDF que acredita que el ciutadà té competències digitals bàsiques.", "correct": false },
      { "text": "El codi d'usuari i contrasenya necessari per entrar a la Intranet de la UB.", "correct": false }
    ]
  },
  {
    "n": 6,
    "question": "El sistema Cl@ve (PIN o Permanent) es considera un sistema d'identificació basat en:",
    "answers": [
      { "text": "Claus concertades que ofereixen diferents nivells de seguretat segons el mètode d'obtenció de la clau.", "correct": true },
      { "text": "Certificats digitals de programari d'alta seguretat criptogràfica.", "correct": false },
      { "text": "Sistemes de signatura avançada basats exclusivament en criptografia asimètrica.", "correct": false },
      { "text": "Identificació biomètrica remota validada per la Policia Nacional.", "correct": false }
    ]
  },
  {
    "n": 7,
    "question": "El Consorci Administració Oberta de Catalunya (AOC), a través de l'idCAT, actua com a:",
    "answers": [
      { "text": "Prestador de serveis de confiança i autoritat de certificació per a l'àmbit català.", "correct": true },
      { "text": "Registre civil electrònic per a tràmits universitaris.", "correct": false },
      { "text": "Únic organisme autoritzat per emetre el DNI electrònic a Catalunya.", "correct": false },
      { "text": "Empresa privada subcontractada per la Universitat de Barcelona per gestionar el correu.", "correct": false }
    ]
  },
  {
    "n": 8,
    "question": "El 'Segell electrònic' és un sistema de signatura que es diferencia de la signatura de persona física perquè:",
    "answers": [
      { "text": "Serveix per a l'actuació administrativa automatitzada i identifica una persona jurídica o òrgan, no una persona física.", "correct": true },
      { "text": "Té una validesa temporal de només 24 hores per a cada tràmit.", "correct": false },
      { "text": "Requereix obligatòriament la intervenció manual d'un funcionari per a cada segellat.", "correct": false },
      { "text": "Només es pot utilitzar per a documents que no tinguin rellevància jurídica.", "correct": false }
    ]
  },
  {
    "n": 9,
    "question": "El principi de neutralitat tecnològica implica l'obligació de les AAPP de:",
    "answers": [
      { "text": "Utilitzar estàndards oberts i garantir que els ciutadans puguin escollir els canals i tecnologies de relació.", "correct": true },
      { "text": "Prohibir l'ús de qualsevol programari que no hagi estat desenvolupat per l'Estat.", "correct": false },
      { "text": "Mantenir les webs en un estat tecnològic estàtic per no confondre la gent gran.", "correct": false },
      { "text": "Garantir que tots els tràmits es puguin fer només amb telèfons intel·ligents.", "correct": false }
    ]
  },
  {
    "n": 10,
    "question": "Dins de l'Esquema Nacional de Seguretat (ENS), la 'pseudonimització' es defineix com:",
    "answers": [
      { "text": "El tractament de dades personals de manera que ja no puguin atribuir-se a un interessat sense utilitzar informació addicional separada.", "correct": true },
      { "text": "La substitució del nom real per un número d'expedient en la resolució final que es publica.", "correct": false },
      { "text": "L'esborrat permanent de les dades de caràcter sensible un cop finalitzat el procediment.", "correct": false },
      { "text": "L'ús d'un certificat digital que no conté el DNI del signant.", "correct": false }
    ]
  },
  {
    "n": 11,
    "question": "L'Esquema Nacional de Seguretat (ENS) estableix que els sistemes d'informació s'han de categoritzar segons:",
    "answers": [
      { "text": "La dimensió i el nivell de seguretat requerit (Bàsic, Mitjà o Alt) en funció de la naturalesa de la informació.", "correct": true },
      { "text": "El pressupost total que la Universitat hagi invertit en la infraestructura de xarxa.", "correct": false },
      { "text": "La velocitat de connexió a internet mínima per poder tramitar.", "correct": false },
      { "text": "El nombre d'usuaris simultanis que poden accedir a la Seu Electrònica.", "correct": false }
    ]
  },
  {
    "n": 12,
    "question": "La propietat de 'No Refús' (o no repudi) en una signatura electrònica qualificada garanteix que:",
    "answers": [
      { "text": "El signant no pot negar l'autoria ni la integritat del document firmat davant tercers.", "correct": true },
      { "text": "L'Administració està obligada a acceptar qualsevol format de fitxer enviat pel ciutadà.", "correct": false },
      { "text": "El sistema de registre no pot rebutjar una entrada si el certificat és vàlid.", "correct": false },
      { "text": "El document no pot ser modificat ni tan sols per l'autor original un cop enviat.", "correct": false }
    ]
  },
  {
    "n": 13,
    "question": "Un 'Prestador de serveis de confiança' és una entitat que:",
    "answers": [
      { "text": "Presta un o més serveis de confiança (com l'emissió de certificats o segells de temps) i està supervisat per l'autoritat competent.", "correct": true },
      { "text": "És una empresa que audita l'honestedat dels funcionaris públics.", "correct": false },
      { "text": "Es dedica exclusivament a la custòdia física d'expedients en paper.", "correct": false },
      { "text": "Actua com a representant legal dels interessats davant l'Administració.", "correct": false }
    ]
  },
  {
    "n": 14,
    "question": "Per a quina d'aquestes actuacions és PRECEPTIU (obligatori) l'ús de la signatura electrònica?",
    "answers": [
      { "text": "Formular sol·licituds, interposar recursos, desistir de drets i renunciar a accions.", "correct": true },
      { "text": "Accedir a la informació de caràcter general publicada al portal de transparència.", "correct": false },
      { "text": "Consultar l'estat de tramitació d'un expedient si només es demana visualització.", "correct": false },
      { "text": "Subscriure's a un butlletí de notícies de la facultat.", "correct": false }
    ]
  },
  {
    "n": 15,
    "question": "L'autenticació en l'àmbit de l'administració electrònica té com a objectiu principal:",
    "answers": [
      { "text": "Acreditar que una entitat o persona és qui diu ser mitjançant l'ús de credencials.", "correct": true },
      { "text": "Garantir que el document no ha estat alterat durant la transmissió.", "correct": false },
      { "text": "Verificar que el llenguatge utilitzat en l'acte administratiu és l'oficial.", "correct": false },
      { "text": "Assegurar que la taxa administrativa ha estat correctament liquidada.", "correct": false }
    ]
  },
  {
    "n": 16,
    "question": "Els sistemes d'identificació de 'doble factor' (2FA) busquen millorar la seguretat mitjançant:",
    "answers": [
      { "text": "La combinació de dos elements diferents: quelcom que se sap (clau) i quelcom que es té (mòbil) o s'és (biometria).", "correct": true },
      { "text": "L'ús de dues signatures electròniques de dos funcionaris diferents per a un mateix acte.", "correct": false },
      { "text": "L'obligació de repetir la contrasenya dues vegades abans de signar.", "correct": false },
      { "text": "La validació del tràmit per part de l'Administració en dos dies diferents.", "correct": false }
    ]
  },
  {
    "n": 17,
    "question": "Tenen els certificats electrònics una validesa indefinida?",
    "answers": [
      { "text": "No, tenen un període de validesa determinat, passat el qual s'han de renovar o deixen de ser operatius.", "correct": true },
      { "text": "Sí, un cop emès l'idCAT o el DNIe, la signatura és vàlida per a tota la vida.", "correct": false },
      { "text": "Depèn de si el ciutadà els utilitza almenys una vegada a l'any.", "correct": false },
      { "text": "Només els certificats emesos per la Casa de la Moneda són indefinits.", "correct": false }
    ]
  },
  {
    "n": 18,
    "question": "Què estableix l'Esquema Nacional d'Interoperabilitat (ENI) respecte als estàndards de documents?",
    "answers": [
      { "text": "Prioritza l'ús d'estàndards oberts i neutralitat tecnològica per garantir la independència dels usuaris.", "correct": true },
      { "text": "Obliga a fer servir exclusivament formats propietaris com Microsoft Word (.doc).", "correct": false },
      { "text": "Determina que cada universitat pot inventar el seu propi format de fitxer.", "correct": false },
      { "text": "Prohibeix l'intercanvi de documents entre administracions de diferents comunitats autònomes.", "correct": false }
    ]
  },
  {
    "n": 19,
    "question": "La Política de Signatura Electrònica de la Universitat de Barcelona defineix:",
    "answers": [
      { "text": "Els certificats, formats i protocols que la UB accepta per garantir la validesa jurídica dels seus tràmits.", "correct": true },
      { "text": "El llistat de correus electrònics de tots els estudiants matriculats.", "correct": false },
      { "text": "Les sancions per no fer servir la signatura electrònica correctament.", "correct": false },
      { "text": "El pressupost destinat a la compra de llicències de programari de disseny.", "correct": false }
    ]
  },
  {
    "n": 20,
    "question": "Un certificat digital es pot revocar abans de la seva caducitat per:",
    "answers": [
      { "text": "Compromís de la clau privada (pèrdua/robatori), canvi de dades del titular o sol·licitud de l'interessat.", "correct": true },
      { "text": "Manca d'ús del certificat durant un període superior a tres mesos.", "correct": false },
      { "text": "Decisió unilateral del Rector sense causa justificada.", "correct": false },
      { "text": "Canvi del sistema operatiu de l'ordinador de l'usuari.", "correct": false }
    ]
  },
  {
    "n": 21,
    "question": "La revocació d'un certificat implica que:",
    "answers": [
      { "text": "Les signatures realitzades DESPRÉS de la revocació no tenen cap validesa jurídica.", "correct": true },
      { "text": "Totes les signatures fetes anteriorment en el passat queden anul·lades automàticament.", "correct": false },
      { "text": "L'usuari ha de pagar una multa per haver perdut el certificat.", "correct": false },
      { "text": "El DNI físic de la persona també queda invalidat.", "correct": false }
    ]
  },
  {
    "n": 22,
    "question": "L'accessibilitat digital en les AAPP es regeix pel principi de:",
    "answers": [
      { "text": "Disseny per a tots, garantint que la informació sigui perceptible, operable i comprensible per a tothom.", "correct": true },
      { "text": "Exclusió tecnològica per motius de seguretat nacional.", "correct": false },
      { "text": "L'estètica per sobre de la funcionalitat per millorar la imatge de la universitat.", "correct": false },
      { "text": "L'ús exclusiu d'imatges i vídeos per evitar que la gent hagi de llegir.", "correct": false }
    ]
  },
  {
    "n": 23,
    "question": "La 'disponibilitat' en seguretat de la informació garanteix que:",
    "answers": [
      { "text": "Les persones autoritzades tinguin accés a la informació i als seus actius associats quan ho requereixin.", "correct": true },
      { "text": "La informació sigui pública i gratuïta per a tots els ciutadans del món.", "correct": false },
      { "text": "El personal d'administració treballi 24 hores presencialment.", "correct": false },
      { "text": "L'Administració disposi de còpies de seguretat en paper de tot el sistema.", "correct": false }
    ]
  },
  {
    "n": 24,
    "question": "En el context de la Llei 39/2015, el principi de proporcionalitat en la identificació significa que:",
    "answers": [
      { "text": "L'Administració només exigirà el nivell de seguretat estrictament necessari per a la naturalesa del tràmit.", "correct": true },
      { "text": "Totes les persones han de tenir el mateix nivell de certificat digital.", "correct": false },
      { "text": "El cost del certificat ha de ser proporcional al sou de l'interessat.", "correct": false },
      { "text": "La mida del fitxer de signatura no pot superar el 10% del document.", "correct": false }
    ]
  },
  {
    "n": 25,
    "question": "La 'integritat' d'un document electrònic signat es verifica mitjançant:",
    "answers": [
      { "text": "Funcions resum (hash) que detecten qualsevol alteració del contingut bit a bit.", "correct": true },
      { "text": "La comparació visual del document amb una còpia testimoniada.", "correct": false },
      { "text": "El nombre de pàgines que conté el fitxer .PDF.", "correct": false },
      { "text": "La data de l'última modificació que apareix en les propietats del fitxer.", "correct": false }
    ]
  },
  {
    "n": 26,
    "question": "La criptografia de clau pública (o asimètrica) utilitza:",
    "answers": [
      { "text": "Una parella de claus (pública i privada) vinculades matemàticament però diferents.", "correct": true },
      { "text": "Una única clau secreta que han de conèixer tant l'Administració com el ciutadà.", "correct": false },
      { "text": "Un sistema de codis de barres d'alta densitat.", "correct": false },
      { "text": "La signatura de l'usuari convertida en un codi Morse digital.", "correct": false }
    ]
  },
  {
    "n": 27,
    "question": "Els certificats de representant de persona jurídica serveixen per:",
    "answers": [
      { "text": "Actuar en nom d'una empresa o entitat en la seva relació amb les Administracions Públiques.", "correct": true },
      { "text": "Signar els contractes de lloguer particulars del gerent de l'empresa.", "correct": false },
      { "text": "Votar en les eleccions al Rectorat de la UB com a ciutadà individual.", "correct": false },
      { "text": "Substituir el passaport en viatges internacionals de negocis.", "correct": false }
    ]
  },
  {
    "n": 28,
    "question": "Té l'interessat dret a obtenir còpia de les dades i documents que s'incorporin a l'expedient?",
    "answers": [
      { "text": "Sí, i les Administracions han de facilitar aquesta còpia en format electrònic de manera preferent.", "correct": true },
      { "text": "Només si l'expedient s'ha tancat amb una resolució favorable.", "correct": false },
      { "text": "No, per protecció de dades l'accés és exclusivament mitjançant lectura en seu.", "correct": false },
      { "text": "Sí, però només en format paper previ pagament d'una taxa de reprografia.", "correct": false }
    ]
  },
  {
    "n": 29,
    "question": "El xip del DNI electrònic emmagatzema informació que permet:",
    "answers": [
      { "text": "L'autenticació de la identitat i la signatura electrònica de documents amb valor legal.", "correct": true },
      { "text": "El seguiment per GPS de la ubicació del ciutadà per part del Ministeri.", "correct": false },
      { "text": "La lectura de totes les contrasenyes bancàries de l'usuari.", "correct": false },
      { "text": "L'accés directe a l'historial delictiu des de qualsevol ordinador públic.", "correct": false }
    ]
  },
  {
    "n": 30,
    "question": "Quin avantatge principal té el format PDF/A en l'arxiu electrònic?",
    "answers": [
      { "text": "És un estàndard ISO dissenyat per a la preservació digital que inclou tot el necessari per a la seva visualització futura.", "correct": true },
      { "text": "Permet editar el contingut del document de manera infinita sense deixar rastre.", "correct": false },
      { "text": "Comprimeix el fitxer fins a un 90% del seu tamany original per estalviar espai.", "correct": false },
      { "text": "És l'únic format que accepta signatures fetes a mà escanejades.", "correct": false }
    ]
  },
  {
    "n": 31,
    "question": "Segons la Llei 6/2020, quina és la durada màxima de la vigència dels certificats electrònics (llevat que la normativa sectorial digui el contrari)?",
    "answers": [
      { "text": "Cinc anys.", "correct": true },
      { "text": "Dos anys.", "correct": false },
      { "text": "Deu anys.", "correct": false },
      { "text": "Indefinida mentre no es revoqui.", "correct": false }
    ]
  },
  {
    "n": 32,
    "question": "Què és un 'Segell de Temps' (Time-stamping) electrònic?",
    "answers": [
      { "text": "Una dada en format electrònic que vincula altres dades amb un instant concret, aportant prova que aquestes dades existien en aquell moment.", "correct": true },
      { "text": "L'hora que marca el rellotge de l'ordinador de l'usuari en enviar un formulari.", "correct": false },
      { "text": "Un sistema per mesurar quant triga un funcionari a resoldre un expedient.", "correct": false },
      { "text": "Un cronòmetre que apareix a la Seu Electrònica per evitar que la sessió caduqui.", "correct": false }
    ]
  },
  {
    "n": 33,
    "question": "En la criptografia asimètrica, si jo vull SIGNAR un document perquè un tercer el verifiqui, quina clau he d'utilitzar?",
    "answers": [
      { "text": "La meva clau privada.", "correct": true },
      { "text": "La meva clau pública.", "correct": false },
      { "text": "La clau pública del destinatari.", "correct": false },
      { "text": "Una clau compartida prèviament per telèfon.", "correct": false }
    ]
  },
  {
    "n": 34,
    "question": "El concepte 'Identificació' es diferencia de 'Signatura' en què:",
    "answers": [
      { "text": "La identificació assegura qui és la persona; la signatura assegura la voluntat de l'autor i la integritat del document.", "correct": true },
      { "text": "Són sinònims exactes segons la Llei 39/2015.", "correct": false },
      { "text": "La identificació només serveix per a les persones físiques.", "correct": false },
      { "text": "La signatura no requereix identificació prèvia.", "correct": false }
    ]
  },
  {
    "n": 35,
    "question": "Quin nivell de seguretat s'exigeix normalment per a la signatura de resolucions administratives que afecten drets de tercers?",
    "answers": [
      { "text": "Nivell Alt (basat en certificats qualificats).", "correct": true },
      { "text": "Nivell Baix (n'hi ha prou amb usuari i contrasenya simple).", "correct": false },
      { "text": "Nivell Mitjà (clau temporal enviada per SMS).", "correct": false },
      { "text": "No hi ha nivells definits en la normativa espanyola.", "correct": false }
    ]
  },
  {
    "n": 36,
    "question": "Què garanteix la propietat de 'Confidencialitat' en l'enviament d'un document electrònic?",
    "answers": [
      { "text": "Que només el destinatari autoritzat pugui accedir i llegir el contingut del document.", "correct": true },
      { "text": "Que el document no hagi estat modificat pel camí.", "correct": false },
      { "text": "Que l'emissor no pugui negar haver enviat el fitxer.", "correct": false },
      { "text": "Que el document s'hagi imprès en una impressora segura.", "correct": false }
    ]
  },
  {
    "n": 37,
    "question": "El sistema idCAT Mòbil és un servei basat en:",
    "answers": [
      { "text": "L'enviament d'una contrasenya d'un sol ús (OTP) al telèfon mòbil després de validar la identitat amb dades del DNI o TSI.", "correct": true },
      { "text": "La instal·lació d'un certificat digital de la FNMT al navegador del mòbil.", "correct": false },
      { "text": "L'escaneig de la cara de l'usuari mitjançant intel·ligència artificial.", "correct": false },
      { "text": "Un xip especial que s'ha d'enganxar darrere del telèfon.", "correct": false }
    ]
  },
  {
    "n": 38,
    "question": "Què és la 'Llista de Confiança de Prestadors de Serveis de Certificació' (TSL)?",
    "answers": [
      { "text": "Un llistat oficial públic que recull quines entitats estan autoritzades per emetre certificats vàlids.", "correct": true },
      { "text": "Una agenda de contactes dels funcionaris de la Generalitat.", "correct": false },
      { "text": "Un inventari dels ordinadors més segurs de la Universitat.", "correct": false },
      { "text": "La llista d'estudiants que han superat el curs de seguretat digital.", "correct": false }
    ]
  },
  {
    "n": 39,
    "question": "Un document electrònic que conté un 'metadada de signatura' permet:",
    "answers": [
      { "text": "Facilitar la gestió, cerca i conservació del document dins de l'arxiu electrònic.", "correct": true },
      { "text": "Xifrar el document perquè ningú el pugui obrir sense permís del Rector.", "correct": false },
      { "text": "Esborrar automàticament el document quan caduca el certificat.", "correct": false },
      { "text": "Substituir el contingut del text per un codi QR.", "correct": false }
    ]
  },
  {
    "n": 40,
    "question": "Segons l'Esquema Nacional de Seguretat, qui és el responsable de determinar els nivells de seguretat d'un servei?",
    "answers": [
      { "text": "El responsable de la informació i el responsable del servei.", "correct": true },
      { "text": "L'empresa externa que subministra el programari.", "correct": false },
      { "text": "El ciutadà que decideix utilitzar la Seu Electrònica.", "correct": false },
      { "text": "L'Agència Espanyola de Protecció de Dades exclusivament.", "correct": false }
    ]
  },
  {
    "n": 41,
    "question": "En el cas que un certificat digital sigui utilitzat per un tercer sense autorització:",
    "answers": [
      { "text": "El titular té l'obligació de sol·licitar la revocació immediata un cop en tingui coneixement.", "correct": true },
      { "text": "L'Administració assumirà tota la responsabilitat dels actes realitzats.", "correct": false },
      { "text": "El certificat es cancel·la sol per un sistema de detecció de moviments estranys.", "correct": false },
      { "text": "No passa res si la signatura es va fer des de la mateixa adreça IP habitual.", "correct": false }
    ]
  },
  {
    "n": 42,
    "question": "Què estableix el principi de 'Proximitat' en l'administració electrònica?",
    "answers": [
      { "text": "La voluntat d'apropar l'Administració al ciutadà, facilitant tràmits sense desplaçaments físics.", "correct": true },
      { "text": "L'obligació de tenir una oficina física a menys de 500 metres de cada estudiant.", "correct": false },
      { "text": "Que els servidors de la UB estiguin ubicats físicament a Catalunya.", "correct": false },
      { "text": "Que el temps de resposta del servidor sigui inferior a 1 segon.", "correct": false }
    ]
  },
  {
    "n": 43,
    "question": "La signatura electrònica feta pel personal de la UB amb el seu certificat d'empleat públic:",
    "answers": [
      { "text": "Vincula la signatura a la persona i al càrrec o lloc de treball que ocupa.", "correct": true },
      { "text": "És una signatura anònima que només identifica la Universitat.", "correct": false },
      { "text": "Només és vàlida per signar actes interns de caràcter no jurídic.", "correct": false },
      { "text": "Té una validesa superior a la signatura del DNIe del mateix funcionari.", "correct": false }
    ]
  },
  {
    "n": 44,
    "question": "Quin organisme supervisa que els prestadors de serveis de confiança compleixin la normativa a Espanya?",
    "answers": [
      { "text": "El Ministeri de Transformació Digital i de la Funció Pública.", "correct": true },
      { "text": "El Banc d'Espanya.", "correct": false },
      { "text": "La Unió Europea de manera directa sense intermediaris estatals.", "correct": false },
      { "text": "El Consell Interuniversitari de Catalunya.", "correct": false }
    ]
  },
  {
    "n": 45,
    "question": "L'anomenada 'Signatura al núvol' (cloud signing) permet:",
    "answers": [
      { "text": "Signar documents sense tenir el certificat instal·lat a l'ordinador, ja que està custodiat en un servidor segur (HSM).", "correct": true },
      { "text": "Signar documents només quan hi ha connexió satel·litària.", "correct": false },
      { "text": "Que la signatura sigui invisible per a tercers.", "correct": false },
      { "text": "Signar sense necessitat de tenir connexió a internet.", "correct": false }
    ]
  },
  {
    "n": 1,
    "question": "Quin recurs s'ha d'interposar obligatòriament per exhaurir la via administrativa contra un acte que NO hi posa fi?",
    "answers": [
      { "text": "Recurs d'alçada.", "correct": true },
      { "text": "Recurs potestatiu de reposició.", "correct": false },
      { "text": "Recurs extraordinari de revisió.", "correct": false },
      { "text": "Recurs contenciós administratiu directe.", "correct": false }
    ]
  },
  {
    "n": 2,
    "question": "Davant de quin òrgan es pot presentar el recurs d'alçada?",
    "answers": [
      { "text": "Davant l'òrgan que va dictar l'acte o davant el seu superior jeràrquic.", "correct": true },
      { "text": "Exclusivament davant el superior jeràrquic del que va dictar l'acte.", "correct": false },
      { "text": "Davant el Jutjat del Contenciós Administratiu territorialment competent.", "correct": false },
      { "text": "Davant la Sindicatura de Greuges de Catalunya.", "correct": false }
    ]
  },
  {
    "n": 3,
    "question": "Quin és el termini per interposar un recurs d'alçada si l'acte ha estat notificat de forma expressa?",
    "answers": [
      { "text": "Un mes a comptar des de l'endemà de la notificació.", "correct": true },
      { "text": "Deu dies hàbils segons la Llei 39/2015.", "correct": false },
      { "text": "Tres mesos a comptar des de la data de la resolució.", "correct": false },
      { "text": "Quinze dies naturals des de la publicació al DOGC.", "correct": false }
    ]
  },
  {
    "n": 4,
    "question": "Quin és el termini màxim de què disposa l'Administració per dictar i notificar la resolució d'un recurs d'alçada?",
    "answers": [
      { "text": "Tres mesos.", "correct": true },
      { "text": "Un mes.", "correct": false },
      { "text": "Sis mesos.", "correct": false },
      { "text": "Vint dies hàbils.", "correct": false }
    ]
  },
  {
    "n": 5,
    "question": "Com s'entén el silenci administratiu si transcorre el termini de resolució d'un recurs d'alçada sense notificació?",
    "answers": [
      { "text": "Desestimatori, amb l'excepció del supòsit de 'doble silenci'.", "correct": true },
      { "text": "Estimatori per silenci positiu en tots els casos.", "correct": false },
      { "text": "Caducitat immediata de l'expedient administratiu.", "correct": false },
      { "text": "S'entén que l'Administració accepta totes les al·legacions per manca de resposta.", "correct": false }
    ]
  },
  {
    "n": 6,
    "question": "És possible interposar un nou recurs d'alçada contra la resolució d'un recurs d'alçada anterior?",
    "answers": [
      { "text": "No, contra la resolució d'un recurs d'alçada no cap cap altre recurs ordinari, només el contenciós o l'extraordinari de revisió.", "correct": true },
      { "text": "Sí, si l'òrgan que el resol és diferent de l'original.", "correct": false },
      { "text": "Sí, sempre que s'aportin noves proves documentals.", "correct": false },
      { "text": "Només si el recurs original no va ser admès a tràmit.", "correct": false }
    ]
  },
  {
    "n": 7,
    "question": "Contra quins actes es pot interposar el recurs potestatiu de reposició?",
    "answers": [
      { "text": "Contra els actes que posen fi a la via administrativa.", "correct": true },
      { "text": "Contra actes de tràmit que no decideixen el fons de l'assumpte.", "correct": false },
      { "text": "Contra reglaments i disposicions de caràcter general.", "correct": false },
      { "text": "Contra sentències judicials que ja són fermes.", "correct": false }
    ]
  },
  {
    "n": 8,
    "question": "Pot un interessat acudir a la via judicial (contenciós) mentre espera la resolució d'un recurs de reposició?",
    "answers": [
      { "text": "No, un cop interposat el de reposició cal esperar la seva resolució expressa o la desestimació per silenci.", "correct": true },
      { "text": "Sí, són vies totalment independents i es poden tramitar alhora.", "correct": false },
      { "text": "Només si el valor de la reclamació supera els 30.000 euros.", "correct": false },
      { "text": "Sí, si el jutge dicta una mesura cautelar de suspensió.", "correct": false }
    ]
  },
  {
    "n": 9,
    "question": "Quin és el termini de resolució i notificació del recurs potestatiu de reposició?",
    "answers": [
      { "text": "Un mes.", "correct": true },
      { "text": "Tres mesos.", "correct": false },
      { "text": "Quinze dies hàbils.", "correct": false },
      { "text": "Dos mesos.", "correct": false }
    ]
  },
  {
    "n": 10,
    "question": "Contra quins actes s'interposa el recurs extraordinari de revisió?",
    "answers": [
      { "text": "Contra actes ferms en via administrativa (que ja no admeten recursos ordinaris).", "correct": true },
      { "text": "Contra actes que encara estan en termini d'alçada.", "correct": false },
      { "text": "Contra informes tècnics que no són vinculants.", "correct": false },
      { "text": "Contra qualsevol comunicació verbal d'un funcionari.", "correct": false }
    ]
  },
  {
    "n": 11,
    "question": "Quin d'aquests supòsits permet interposar un recurs extraordinari de revisió?",
    "answers": [
      { "text": "L'existència d'un error de fet que resulti dels propis documents incorporats a l'expedient.", "correct": true },
      { "text": "El canvi de criteri polític de l'òrgan competent.", "correct": false },
      { "text": "La manca de signatura electrònica qualificada en la notificació.", "correct": false },
      { "text": "La disconformitat de l'interessat amb la sanció imposada.", "correct": false }
    ]
  },
  {
    "n": 12,
    "question": "Si el recurs extraordinari de revisió es basa en l'aparició de documents de valor essencial, quin és el termini d'interposició?",
    "answers": [
      { "text": "Tres mesos des del coneixement dels documents o des de la seva recuperació.", "correct": true },
      { "text": "Un mes des de la notificació de l'acte impugnat.", "correct": false },
      { "text": "Quatre anys des de la data de la resolució original.", "correct": false },
      { "text": "Sempre es pot presentar sense límit de temps.", "correct": false }
    ]
  },
  {
    "n": 13,
    "question": "Quin és el termini màxim d'interposició del recurs de revisió si es fonamenta en un error de fet?",
    "answers": [
      { "text": "Quatre anys des de la notificació de la resolució impugnada.", "correct": true },
      { "text": "Un any natural.", "correct": false },
      { "text": "Dos mesos a comptar des de l'error.", "correct": false },
      { "text": "Sis mesos des de l'auditoria de l'expedient.", "correct": false }
    ]
  },
  {
    "n": 14,
    "question": "Com a regla general, la interposició d'un recurs suspèn l'execució de l'acte impugnat?",
    "answers": [
      { "text": "No, la interposició no suspèn l'execució, llevat que l'òrgan competent ho decideixi motivadament.", "correct": true },
      { "text": "Sí, la suspensió és automàtica per garantir la tutela judicial efectiva.", "correct": false },
      { "text": "Només si el recurs va acompanyat d'un aval bancari.", "correct": false },
      { "text": "Sí, però només en els procediments de caràcter sancionador.", "correct": false }
    ]
  },
  {
    "n": 15,
    "question": "L'Administració pot suspendre l'execució de l'acte objecte de recurs si:",
    "answers": [
      { "text": "L'execució pogués causar perjudicis d'impossible o difícil reparació o si la impugnació es fonamenta en una nul·litat de ple dret.", "correct": true },
      { "text": "L'interessat és una persona en situació de vulnerabilitat econòmica.", "correct": false },
      { "text": "El procediment ha trigat més de sis mesos en tramitar-se.", "correct": false },
      { "text": "L'acte conté errors materials o aritmètics evidents.", "correct": false }
    ]
  },
  {
    "n": 16,
    "question": "Què prohibeix el principi de 'reformatio in peius' en la resolució dels recursos?",
    "answers": [
      { "text": "Que l'Administració empitjori la situació inicial de qui ha interposat el recurs com a conseqüència d'aquest.", "correct": true },
      { "text": "Que s'utilitzin proves que no estiguin en l'expedient original.", "correct": false },
      { "text": "Que la resolució trigui més del que estableix la llei.", "correct": false },
      { "text": "Que es cobrin taxes per la interposició de recursos ordinaris.", "correct": false }
    ]
  },
  {
    "n": 17,
    "question": "Si un interessat comet un error en la denominació del recurs (per exemple, diu 'alçada' quan toca 'reposició'):",
    "answers": [
      { "text": "L'Administració l'ha de tramitar igualment si se'n dedueix el seu veritable caràcter.", "correct": true },
      { "text": "El recurs es considera nul i s'arxiva sense més tràmits.", "correct": false },
      { "text": "S'ha de demanar l'esmena al ciutadà en un termini de 3 dies.", "correct": false },
      { "text": "Es perd el dret a la via judicial posterior.", "correct": false }
    ]
  },
  {
    "n": 18,
    "question": "La revisió d'ofici és el procediment mitjançant el qual l'Administració:",
    "answers": [
      { "text": "Declara la nul·litat dels seus propis actes que hagin esdevingut ferms i que estiguin afectats per un vici de nul·litat de ple dret.", "correct": true },
      { "text": "Corregit únicament els errors materials o aritmètics dels documents.", "correct": false },
      { "text": "Canvia una decisió perquè el ciutadà li ho ha demanat fora de termini.", "correct": false },
      { "text": "Revoca actes desfavorables per motius d'oportunitat o interès públic.", "correct": false }
    ]
  },
  {
    "n": 19,
    "question": "Per declarar la nul·litat d'ofici d'un acte a Catalunya, és preceptiu el dictamen favorable de:",
    "answers": [
      { "text": "La Comissió Jurídica Assessora.", "correct": true },
      { "text": "El Consell Social de la Universitat.", "correct": false },
      { "text": "La Sindicatura de Comptes.", "correct": false },
      { "text": "El Gabinet Jurídic de la Generalitat.", "correct": false }
    ]
  },
  {
    "n": 20,
    "question": "La declaració de lesivitat s'aplica a actes que són:",
    "answers": [
      { "text": "Anul·lables i favorables als interessats, com a pas previ per impugnar-los davant la via judicial.", "correct": true },
      { "text": "Nuls de ple dret i que perjudiquen el ciutadà.", "correct": false },
      { "text": "Actes de tràmit que han estat dictats per un òrgan incompetent.", "correct": false },
      { "text": "Actes ferms que s'han de revisar per error de fet.", "correct": false }
    ]
  },
  {
    "n": 21,
    "question": "Dins l'organització de la UB, contra les resolucions dictades pel Rector:",
    "answers": [
      { "text": "Es pot interposar recurs potestatiu de reposició, ja que posen fi a la via administrativa.", "correct": true },
      { "text": "S'ha d'interposar recurs d'alçada davant el Consell de Govern.", "correct": false },
      { "text": "Cal presentar una reclamació prèvia al Consell Social.", "correct": false },
      { "text": "Només cap el recurs extraordinari de revisió en qualsevol cas.", "correct": false }
    ]
  },
  {
    "n": 22,
    "question": "En quin cas la resolució d'un recurs d'alçada pot tenir efectes de silenci positiu?",
    "answers": [
      { "text": "Quan el recurs s'interposi contra la desestimació per silenci d'una sol·licitud, si el nou termini venç sense resolució (doble silenci).", "correct": true },
      { "text": "Sempre que l'Administració no hagi respost en un termini de 6 mesos.", "correct": false },
      { "text": "Quan el recurs tracti sobre matèries de medi ambient.", "correct": false },
      { "text": "Mai, el silenci en via de recurs és sempre i en tot cas negatiu.", "correct": false }
    ]
  },
  {
    "n": 23,
    "question": "Quan poden els interessats aportar noves proves en la fase de recurs?",
    "answers": [
      { "text": "Quan s'hagin produït fets nous o fets que no van poder ser aportats en el procediment original per causes justificades.", "correct": true },
      { "text": "En qualsevol moment, sense necessitat de cap justificació.", "correct": false },
      { "text": "Només si s'interposa el recurs de revisió per error material.", "correct": false },
      { "text": "Mai, en la via de recurs la prova ja està tancada.", "correct": false }
    ]
  },
  {
    "n": 24,
    "question": "L'audiència als interessats durant la tramitació d'un recurs és preceptiva quan:",
    "answers": [
      { "text": "S'hagin de tenir en compte nous fets o documents que no figuraven en l'expedient originari.", "correct": true },
      { "text": "El recurs sigui d'alçada i la quantia superi els 6.000 euros.", "correct": false },
      { "text": "L'interessat ho demani expressament en el seu escrit d'interposició.", "correct": false },
      { "text": "Sempre, per garantir el principi de contradicció.", "correct": false }
    ]
  },
  {
    "n": 25,
    "question": "Quin requisit de congruència ha de complir la resolució d'un recurs?",
    "answers": [
      { "text": "Ha de decidir totes les qüestions plantejades en el recurs, encara que no hagin estat al·legades pels interessats (prèvia audiència).", "correct": true },
      { "text": "S'ha de limitar estrictament a confirmar o anul·lar l'acte original.", "correct": false },
      { "text": "Ha de donar sempre la raó a l'interessat si l'acte era presumpte.", "correct": false },
      { "text": "Ha de redactar-se seguint el model oficial de la Seu Electrònica.", "correct": false }
    ]
  },
  {
    "n": 26,
    "question": "Si l'Administració detecta un vici de forma que no permet resoldre el recurs:",
    "answers": [
      { "text": "Pot ordenar la retroacció de les actuacions al moment procedimental on es va cometre el vici.", "correct": true },
      { "text": "Ha d'anul·lar definitivament l'expedient i arxivar-lo.", "correct": false },
      { "text": "Ha de dictar una resolució estimatòria per defecte de l'administració.", "correct": false },
      { "text": "Ha d'elevar l'expedient al Jutjat Contenciós de manera immediata.", "correct": false }
    ]
  },
  {
    "n": 27,
    "question": "Quin és el termini per interposar recurs d'alçada contra un acte presumpte (silenci)?",
    "answers": [
      { "text": "En qualsevol moment a partir de l'endemà del dia en què es produeixin els efectes del silenci.", "correct": true },
      { "text": "Tres mesos des de la data de la sol·licitud original.", "correct": false },
      { "text": "Un mes des que es té constància de la manca de resposta.", "correct": false },
      { "text": "Sis mesos a comptar des de la presentació de la instància.", "correct": false }
    ]
  },
  {
    "n": 28,
    "question": "Quin d'aquests fets permet la interposició del recurs extraordinari de revisió?",
    "answers": [
      { "text": "Que l'acte es dictés com a conseqüència de prevaricació, suborn o violència declarats en sentència judicial ferma.", "correct": true },
      { "text": "La manca de motivació suficient en els fonaments de dret de l'acte.", "correct": false },
      { "text": "Un canvi en la jurisprudència del Tribunal Suprem.", "correct": false },
      { "text": "La caducitat del termini per interposar el recurs d'alçada.", "correct": false }
    ]
  },
  {
    "n": 29,
    "question": "Contra la resolució d'un recurs extraordinari de revisió es pot interposar:",
    "answers": [
      { "text": "Recurs contenciós administratiu.", "correct": true },
      { "text": "Un nou recurs d'alçada davant el Rector.", "correct": false },
      { "text": "Una reclamació davant el Síndic de Greuges.", "correct": false },
      { "text": "No es pot recórrer de cap manera.", "correct": false }
    ]
  },
  {
    "n": 30,
    "question": "Dins l'àmbit de la UB, el Rector té competència per resoldre:",
    "answers": [
      { "text": "Els recursos d'alçada contra actes dels Decans i el recurs de reposició contra els seus propis actes.", "correct": true },
      { "text": "Només els conflictes entre estudiants i professors.", "correct": false },
      { "text": "Les queixes presentades davant el Consell Social.", "correct": false },
      { "text": "Els recursos contenciosos presentats a la via judicial.", "correct": false }
    ]
  },
  /* --- 5 EXTRAS --- */
  {
    "n": 31,
    "question": "Si el recurs d'alçada s'interposa davant l'òrgan que va dictar l'acte (inferior), aquest l'ha de remetre al superior en el termini de:",
    "answers": [
      { "text": "Deu dies, acompanyat d'un informe i una còpia completa de l'expedient.", "correct": true },
      { "text": "Tres dies hàbils segons el procediment d'urgència.", "correct": false },
      { "text": "Un mes, coincidint amb el termini màxim d'interposició.", "correct": false },
      { "text": "Cinc dies naturals per evitar la caducitat.", "correct": false }
    ]
  },
  {
    "n": 32,
    "question": "En matèria de suspensió de l'acte, si l'òrgan competent no dicta resolució sobre la petició de suspensió en un termini determinat, aquesta s'entén:",
    "answers": [
      { "text": "Concedida (suspensió per silenci positiu) si transcorre un mes sense resolució expressa.", "correct": true },
      { "text": "Denegada, segons el principi general de silenci negatiu en via de recurs.", "correct": false },
      { "text": "Pendent de validació obligatòria pel Tribunal Superior de Justícia.", "correct": false },
      { "text": "Caducada, obligant a l'interessat a reiterar la petició.", "correct": false }
    ]
  },
  {
    "n": 33,
    "question": "Quin és el termini de prescripció perquè l'Administració pugui iniciar d'ofici la revisió d'un acte nul de ple dret?",
    "answers": [
      { "text": "L'acció de nul·litat no prescriu; es pot exercir en qualsevol moment.", "correct": true },
      { "text": "Quatre anys, d'acord amb el termini de la declaració de lesivitat.", "correct": false },
      { "text": "Deu anys des de la data de notificació de l'acte original.", "correct": false },
      { "text": "Cinc anys, seguint el termini general de prescripció de la Llei 40/2015.", "correct": false }
    ]
  },
  {
    "n": 34,
    "question": "En el recurs extraordinari de revisió, si la causa és la prevaricació o suborn, quin és el termini d'interposició?",
    "answers": [
      { "text": "Tres mesos a comptar des de que la sentència judicial sigui ferma.", "correct": true },
      { "text": "Quatre anys des de la notificació de l'acte objecte de revisió.", "correct": false },
      { "text": "Un mes des del coneixement dels fets delictius.", "correct": false },
      { "text": "Quinze dies des que es publica la sentència al BOE.", "correct": false }
    ]
  },
  {
    "n": 35,
    "question": "Quan pot l'Administració desestimar un recurs de revisió 'ad limine' (sense entrar a examinar el fons)?",
    "answers": [
      { "text": "Quan el recurs no es fonamenti en cap de les causes de la llei o s'haguessin desestimat en el fons altres recursos substancialment iguals.", "correct": true },
      { "text": "Quan el recurrent no hagi pagat les taxes universitàries corresponents.", "correct": false },
      { "text": "Quan el recurs s'hagi presentat en format paper en lloc de via electrònica.", "correct": false },
      { "text": "Quan l'acte original ja hagi estat recorregut en via de reposició.", "correct": false }
    ]
  },
  {
    "n": 1,
    "question": "Quin és l'objecte principal de la Llei 19/2014, del 29 de desembre?",
    "answers": [
      { "text": "Regular la transparència i el dret d'accés a la informació pública, i establir els principis de bon govern i les obligacions dels grups d'interès.", "correct": true },
      { "text": "Substituir el Codi Penal en l'àmbit de la corrupció administrativa.", "correct": false },
      { "text": "Regular exclusivament el pressupost i la comptabilitat de la Generalitat.", "correct": false },
      { "text": "Establir el règim de protecció de dades privades de les empreses adjudicatàries.", "correct": false }
    ]
  },
  {
    "n": 2,
    "question": "S'aplica la Llei de transparència a les universitats públiques de Catalunya?",
    "answers": [
      { "text": "Sí, estan incloses plenament dins de l'àmbit d'aplicació com a part de l'Administració de la Generalitat i el seu sector públic.", "correct": true },
      { "text": "No, a causa de la seva autonomia constitucional només s'hi regeixen de forma voluntària.", "correct": false },
      { "text": "Només pel que fa a la informació sobre la contractació pública superior a 100.000 €.", "correct": false },
      { "text": "Només en relació amb les dades dels òrgans de govern, no de la gestió acadèmica.", "correct": false }
    ]
  },
  {
    "n": 3,
    "question": "Dins del marc de la transparència, què defineix la 'publicitat activa'?",
    "answers": [
      { "text": "L'obligació dels subjectes obligats de difondre d'ofici la informació pública de manera constant, fàcil i actualitzada.", "correct": true },
      { "text": "L'acció de fer propaganda institucional sobre els èxits de la Universitat.", "correct": false },
      { "text": "El dret del ciutadà a demanar informació que encara no ha estat elaborada.", "correct": false },
      { "text": "L'obligació de respondre a les preguntes de la premsa en roda de premsa.", "correct": false }
    ]
  },
  {
    "n": 4,
    "question": "On s'ha de centralitzar la publicació de la informació relativa a la transparència activa a la UB?",
    "answers": [
      { "text": "Al Portal de la Transparència, integrat a la Seu Electrònica de la Universitat.", "correct": true },
      { "text": "En el tauler d'anuncis físic situat a l'Edifici Històric de la UB.", "correct": false },
      { "text": "En una secció específica dins del Butlletí Oficial de l'Estat (BOE).", "correct": false },
      { "text": "En una base de dades privada d'accés restringit per a la comunitat universitària.", "correct": false }
    ]
  },
  {
    "n": 5,
    "question": "Qui pot exercir el dret d'accés a la informació pública segons la normativa catalana?",
    "answers": [
      { "text": "Totes les persones, físiques o jurídiques, sense que calgui acreditar cap interès ni motivació.", "correct": true },
      { "text": "Només els ciutadans de la Unió Europea que resideixin a Catalunya.", "correct": false },
      { "text": "Només les persones que acreditin un interès legítim i directe en l'expedient.", "correct": false },
      { "text": "Exclusivament els periodistes col·legiats i els partits polítics.", "correct": false }
    ]
  },
  {
    "n": 6,
    "question": "L'exercici del dret d'accés a la informació pública requereix motivació?",
    "answers": [
      { "text": "No, no requereix motivació, tot i que el sol·licitant pot exposar els motius per facilitar la ponderació.", "correct": true },
      { "text": "Sí, és un requisit formal imprescindible per admetre la sol·licitud a tràmit.", "correct": false },
      { "text": "Només si la informació sol·licitada afecta l'ordre públic.", "correct": false },
      { "text": "Sí, si la informació té més de deu anys d'antiguitat.", "correct": false }
    ]
  },
  {
    "n": 7,
    "question": "Quin és el termini màxim per resoldre una sol·licitud d'accés a la informació pública?",
    "answers": [
      { "text": "Un mes, amb possibilitat de pròrroga d'un mes addicional per raons de complexitat.", "correct": true },
      { "text": "Deu dies hàbils impròrrogables.", "correct": false },
      { "text": "Tres mesos, tal com estableix el procediment administratiu comú.", "correct": false },
      { "text": "Vint dies naturals des de la recepció al registre.", "correct": false }
    ]
  },
  {
    "n": 8,
    "question": "Quin òrgan independent té la funció de resoldre les reclamacions en matèria d'accés a la informació a Catalunya?",
    "answers": [
      { "text": "La Comissió de Garantia del Dret d'Accés a la Informació Pública (GAIP).", "correct": true },
      { "text": "La Sindicatura de Greuges de Catalunya.", "correct": false },
      { "text": "L'Oficina Antifrau de Catalunya.", "correct": false },
      { "text": "L'Agència de Transparència de l'Àrea Metropolitana.", "correct": false }
    ]
  },
  {
    "n": 9,
    "question": "Quin d'aquests es considera un límit que pot restringir el dret d'accés a la informació?",
    "answers": [
      { "text": "La protecció de dades personals, la seguretat pública i el secret professional.", "correct": true },
      { "text": "La càrrega excessiva de feina per al funcionari encarregat.", "correct": false },
      { "text": "El fet que la informació encara no estigui penjada al Portal de Transparència.", "correct": false },
      { "text": "La manca de pressupost per fer les fotocòpies del document.", "correct": false }
    ]
  },
  {
    "n": 10,
    "question": "Segons la Llei 19/2014, el silenci administratiu en sol·licituds d'accés a la informació és:",
    "answers": [
      { "text": "Estimatori (positiu), tret que la pròpia llei estableixi una excepció per límits o tercers.", "correct": true },
      { "text": "Sempre desestimatori per aplicació de la Llei 39/2015.", "correct": false },
      { "text": "Considerat com una caducitat automàtica del dret d'accés.", "correct": false },
      { "text": "Una infracció greu que anul·la el procediment.", "correct": false }
    ]
  },
  {
    "n": 11,
    "question": "Pel que fa als alts càrrecs de la UB, quina informació s'ha de publicar per transparència activa?",
    "answers": [
      { "text": "Les retribucions, indemnitzacions, dietes i les declaracions d'activitats i bens.", "correct": true },
      { "text": "Únicament el nom, cognoms i la data de nomenament.", "correct": false },
      { "text": "La seva adreça particular i dades familiars per transparència total.", "correct": false },
      { "text": "Només si el seu sou supera el d'un Conseller de la Generalitat.", "correct": false }
    ]
  },
  {
    "n": 12,
    "question": "Si la informació sol·licitada conté dades personals de tercers, l'Administració ha de:",
    "answers": [
      { "text": "Realitzar una ponderació raonada entre l'interès públic de l'accés i el dret a la intimitat o protecció de dades.", "correct": true },
      { "text": "Denegar l'accés immediatament per evitar infraccions de la RGPD.", "correct": false },
      { "text": "Donar tota la informació anonimitzant només el DNI de les persones.", "correct": false },
      { "text": "Consultar obligatòriament a l'Autoritat Catalana de Protecció de Dades en cada cas.", "correct": false }
    ]
  },
  {
    "n": 13,
    "question": "El concepte de 'bon govern' obliga els alts càrrecs de la Universitat a:",
    "answers": [
      { "text": "Actuar amb integritat, objectivitat i a retre comptes de la seva gestió davant la ciutadania.", "correct": true },
      { "text": "Prioritzar la imatge pública de la institució per sobre de la fiscalització.", "correct": false },
      { "text": "Seguir exclusivament les ordres polítiques del Consell Social.", "correct": false },
      { "text": "Publicar les seves opinions personals sobre la política universitària.", "correct": false }
    ]
  },
  {
    "n": 14,
    "question": "Respecte al cost econòmic del dret d'accés:",
    "answers": [
      { "text": "L'accés a la informació i la consulta de les dades en el seu lloc de dipòsit són gratuïts.", "correct": true },
      { "text": "Totes les sol·licituds tenen una taxa administrativa de tramitació de 15 €.", "correct": false },
      { "text": "L'enviament de qualsevol fitxer digital comporta el pagament d'un cànon.", "correct": false },
      { "text": "És gratuït només si es demostra que s'està en situació d'atur.", "correct": false }
    ]
  },
  {
    "n": 15,
    "question": "Si la informació sol·licitada ja està disponible al Portal de la Transparència, l'òrgan pot:",
    "answers": [
      { "text": "Indicar al sol·licitant la font o el lloc on pot consultar-la de manera directa.", "correct": true },
      { "text": "Ignorar la sol·licitud per considerar-la repetitiva o abusiva.", "correct": false },
      { "text": "Cobrar un recàrrec per fer una gestió que el ciutadà podria haver fet sol.", "correct": false },
      { "text": "Denegar l'accés sense donar cap explicació addicional.", "correct": false }
    ]
  },
  {
    "n": 16,
    "question": "Què es considera informació pública segons la definició legal?",
    "answers": [
      { "text": "La informació en qualsevol format elaborada o obtinguda pels subjectes obligats en l'exercici de la seva funció pública.", "correct": true },
      { "text": "Únicament els expedients que hagin estat finalitzats i arxivats.", "correct": false },
      { "text": "La correspondència personal i els xats privats entre el personal de la UB.", "correct": false },
      { "text": "Només la informació que hagi estat publicada al Diari Oficial.", "correct": false }
    ]
  },
  {
    "n": 17,
    "question": "Davant quin òrgan s'ha de presentar la sol·licitud d'accés?",
    "answers": [
      { "text": "Davant l'òrgan que posseeix la informació o el servei de transparència de la pròpia UB.", "correct": true },
      { "text": "Exclusivament davant la unitat de Registre Central de la Generalitat.", "correct": false },
      { "text": "Davant la seu del Parlament de Catalunya per ser la font de la llei.", "correct": false },
      { "text": "Davant la unitat de Mossos d'Esquadra assignada a la vigilància pública.", "correct": false }
    ]
  },
  {
    "n": 18,
    "question": "La UB ha de publicar informació sobre les subvencions concedides?",
    "answers": [
      { "text": "Sí, incloent l'import, l'objecte, els beneficiaris i el control de la seva justificació.", "correct": true },
      { "text": "No, per garantir la igualtat i la privacitat dels investigadors beneficiats.", "correct": false },
      { "text": "Només si la subvenció supera els 100.000 euros anuals.", "correct": false },
      { "text": "Només si el beneficiari és una entitat amb ànim de lucre.", "correct": false }
    ]
  },
  {
    "n": 19,
    "question": "A partir de quina edat es pot exercir el dret d'accés a la informació a Catalunya?",
    "answers": [
      { "text": "A partir dels 16 anys.", "correct": true },
      { "text": "Només a partir de la majoria d'edat (18 anys).", "correct": false },
      { "text": "A partir dels 14 anys amb autorització del tutor legal.", "correct": false },
      { "text": "No hi ha límit d'edat, fins i tot els infants el poden exercir.", "correct": false }
    ]
  },
  {
    "n": 20,
    "question": "En relació amb la transparència en la contractació, la UB ha de publicar:",
    "answers": [
      { "text": "Tots els contractes, inclosos els menors, amb dades de l'adjudicatari i l'import.", "correct": true },
      { "text": "Només els contractes que es fan per procediment obert.", "correct": false },
      { "text": "Les factures individuals de cada compra inferior a 100 €.", "correct": false },
      { "text": "Únicament el llistat d'empreses que han participat en licitacions.", "correct": false }
    ]
  },
  {
    "n": 21,
    "question": "Com s'han d'interpretar els límits al dret d'accés segons la normativa?",
    "answers": [
      { "text": "De manera restrictiva i proporcional, prioritzant sempre el dret d'accés sobre la denegació.", "correct": true },
      { "text": "De manera extensiva per protegir els interessos de la Universitat.", "correct": false },
      { "text": "De forma automàtica sempre que hi hagi una dada personal implicada.", "correct": false },
      { "text": "No existeixen criteris d'interpretació, depèn de la discrecionalitat de l'òrgan.", "correct": false }
    ]
  },
  {
    "n": 22,
    "question": "L'incompliment de les obligacions de transparència es considera:",
    "answers": [
      { "text": "Una infracció que pot comportar responsabilitats disciplinàries per als empleats públics responsables.", "correct": true },
      { "text": "Una falta administrativa que només afecta la reputació institucional.", "correct": false },
      { "text": "Un delicte previst al Codi Penal de manera automàtica.", "correct": false },
      { "text": "Causa d'anul·lació del pressupost de la Universitat.", "correct": false }
    ]
  },
  {
    "n": 23,
    "question": "Quina és la finalitat principal de les dades obertes (Open Data)?",
    "answers": [
      { "text": "Permetre que la informació sigui reutilitzable per tercers per crear valor social o econòmic.", "correct": true },
      { "text": "Reduir el nombre de sol·licituds d'accés que rep la Universitat.", "correct": false },
      { "text": "Publicar fotos i vídeos d'actes acadèmics sense restriccions.", "correct": false },
      { "text": "Assegurar que tota la web de la UB estigui traduïda a 5 idiomes.", "correct": false }
    ]
  },
  {
    "n": 24,
    "question": "Quina informació normativa ha de publicar la UB en el seu portal de transparència?",
    "answers": [
      { "text": "Els reglaments, instruccions, circulars i les respostes a consultes jurídiques freqüents.", "correct": true },
      { "text": "Només la Llei d'Universitats aprovada pel Parlament.", "correct": false },
      { "text": "Els esborranys de les actes de les reunions del departament.", "correct": false },
      { "text": "Exclusivament la normativa que ja hagi estat publicada al DOGC.", "correct": false }
    ]
  },
  {
    "n": 25,
    "question": "Es pot denegar l'accés si la informació està en fase d'elaboració?",
    "answers": [
      { "text": "Sí, és una causa d'inadmissió si la informació és un esborrany o està en procés de producció.", "correct": true },
      { "text": "No, s'ha de lliurar l'esborrany indicant que no és definitiu.", "correct": false },
      { "text": "Només si l'elaboració triga més de dos anys.", "correct": false },
      { "text": "Sí, però s'ha de cobrar el temps de treball que falta per acabar-la.", "correct": false }
    ]
  },
  {
    "n": 26,
    "question": "Respecte a la vida sexual o la religió de les persones, la Llei de Transparència:",
    "answers": [
      { "text": "Denega l'accés tret que es disposi del consentiment exprés i per escrit de l'afectat.", "correct": true },
      { "text": "Permet l'accés si hi ha un interès periodístic rellevant.", "correct": false },
      { "text": "Realitza una ponderació per veure si la dada és rellevant per a la feina.", "correct": false },
      { "text": "Publica la dada anonimitzant només el cognom de la persona.", "correct": false }
    ]
  },
  {
    "n": 27,
    "question": "Les resolucions de la GAIP (Comissió de Garantia):",
    "answers": [
      { "text": "Són d'obligat compliment per a l'òrgan o entitat a la qual es dirigeixen.", "correct": true },
      { "text": "Tenen caràcter merament orientatiu i no vinculant.", "correct": false },
      { "text": "Només s'han de complir si la Universitat hi està d'acord.", "correct": false },
      { "text": "Són simples recomanacions que s'envien al Parlament.", "correct": false }
    ]
  },
  {
    "n": 28,
    "question": "La informació institucional que la UB ha de publicar inclou:",
    "answers": [
      { "text": "L'estructura organitzativa, les funcions dels òrgans i les dades de contacte oficials.", "correct": true },
      { "text": "El llistat complet de tots els números de mòbil privats del professorat.", "correct": false },
      { "text": "Els plans de vacances personals dels oficials d'administració.", "correct": false },
      { "text": "La ideologia política declarada dels membres del Consell Social.", "correct": false }
    ]
  },
  {
    "n": 29,
    "question": "Quin format ha de tenir preferentment la informació lliurada per dret d'accés?",
    "answers": [
      { "text": "El format triat pel sol·licitant, sempre que no sigui desproporcionat per a l'Administració.", "correct": true },
      { "text": "Sempre el format .PDF per evitar modificacions posteriors.", "correct": false },
      { "text": "Obligatòriament el format original en què es va crear la informació.", "correct": false },
      { "text": "Només es dóna en format paper si la informació té dades sensibles.", "correct": false }
    ]
  },
  {
    "n": 30,
    "question": "La transparència econòmica obliga la UB a publicar:",
    "answers": [
      { "text": "El pressupost, el nivell d'execució trimestral, els comptes anuals i l'inventari de bens.", "correct": true },
      { "text": "Totes les factures superiors a 5 € de la cafeteria de la facultat.", "correct": false },
      { "text": "Les dades bancàries personals de tots els proveïdors habituals.", "correct": false },
      { "text": "Únicament la xifra total de despesa anual sense detallar conceptes.", "correct": false }
    ]
  },
  /* --- 5 EXTRAS --- */
  {
    "n": 31,
    "question": "Què és el Registre de Grups d'Interès (Lobbies) segons la Llei 19/2014?",
    "answers": [
      { "text": "Un registre públic on s'han d'inscriure les persones i entitats que fan activitats per influir en les polítiques públiques.", "correct": true },
      { "text": "Una llista de correu per enviar propaganda electoral de la Universitat.", "correct": false },
      { "text": "Un inventari de totes les empreses que volen contractar amb la UB.", "correct": false },
      { "text": "El llistat de sindicats que representen el personal d'administració.", "correct": false }
    ]
  },
  {
    "n": 32,
    "question": "En cas que una sol·licitud d'accés sigui molt imprecisa, l'òrgan té l'obligació de:",
    "answers": [
      { "text": "Demanar al sol·licitant que l'esmeni o la concreti en un termini de 10 dies, donant-li suport.", "correct": true },
      { "text": "Arxivar la petició directament per manca de claredat.", "correct": false },
      { "text": "Interpretar la petició de la manera que sigui més fàcil per a l'Administració.", "correct": false },
      { "text": "Cobrar un recàrrec pel temps perdut intentant entendre la petició.", "correct": false }
    ]
  },
  {
    "n": 33,
    "question": "Què estableix la llei respecte a l'accés a la informació que pugui perjudicar la prevenció de delictes?",
    "answers": [
      { "text": "Es pot denegar o limitar l'accés si posa en perill la seguretat pública o la investigació de delictes.", "correct": true },
      { "text": "S'ha de donar sempre, ja que la transparència està per sobre de la seguretat.", "correct": false },
      { "text": "Només es pot denegar si el jutge ho ordena expressament.", "correct": false },
      { "text": "Es dona la informació però s'obliga al sol·licitant a signar un acord de confidencialitat.", "correct": false }
    ]
  },
  {
    "n": 4,
    "question": "L'accés a la informació pública mitjançant l'examen directe 'in situ' és:",
    "answers": [
      { "text": "Sempre gratuït, incloent-hi l'assistència de personal si és necessari.", "correct": true },
      { "text": "De pagament, ja que consumeix temps d'un funcionari per vigilar.", "correct": false },
      { "text": "Prohibit per motius de seguretat de les instal·lacions.", "correct": false },
      { "text": "Només permès si el ciutadà porta el seu propi equip de seguretat.", "correct": false }
    ]
  },
  {
    "n": 35,
    "question": "Abans de denegar una sol·licitud que afecta drets de tercers, l'Administració ha de:",
    "answers": [
      { "text": "Donar trasllat als tercers afectats perquè puguin presentar al·legacions en un termini de 10 dies.", "correct": true },
      { "text": "Denegar-la sense avisar ningú per protegir el secret estadístic.", "correct": false },
      { "text": "Demanar l'opinió al Rector de manera no vinculant.", "correct": false },
      { "text": "Publicar el nom del sol·licitant al Portal de Transparència.", "correct": false }
    ]
  },
  {
    "n": 1,
    "question": "Quin és l'objectiu principal del Reglament (UE) 2016/679 (RGPD)?",
    "answers": [
      { "text": "Protegir els drets i llibertats fonamentals de les persones físiques i, en particular, el seu dret a la protecció de dades personals.", "correct": true },
      { "text": "Harmonitzar la lliure circulació de mercaderies digitals i dispositius electrònics a la UE.", "correct": false },
      { "text": "Garantir el dret a la intimitat de les persones jurídiques i entitats sense ànim de lucre.", "correct": false },
      { "text": "Regular el règim disciplinari dels empleats públics en l'ús de xarxes socials corporatives.", "correct": false }
    ]
  },
  {
    "n": 2,
    "question": "L'àmbit d'aplicació del RGPD s'estén al tractament de dades personals de:",
    "answers": [
      { "text": "Persones físiques vives, independentment de la seva nacionalitat o lloc de residència.", "correct": true },
      { "text": "Societats mercantils i entitats amb personalitat jurídica pròpia.", "correct": false },
      { "text": "Persones difuntes, excepte en l'exercici de drets per part dels seus hereus segons la LOPDGDD.", "correct": false },
      { "text": "Objectes inanimats i actius digitals sense vinculació a una persona identificada.", "correct": false }
    ]
  },
  {
    "n": 3,
    "question": "El principi de 'licitud, lleialtat i transparència' exigeix que les dades siguin:",
    "answers": [
      { "text": "Tractades de manera lícita d'acord amb una base jurídica i comunicades a l'interessat de forma intel·ligible.", "correct": true },
      { "text": "Publicades al Portal de Transparència sense cap tipus de restricció.", "correct": false },
      { "text": "Emmagatzemades en servidors situats exclusivament dins del territori nacional.", "correct": false },
      { "text": "Xifrades mitjançant algorismes d'alta seguretat abans de qualsevol ús.", "correct": false }
    ]
  },
  {
    "n": 4,
    "question": "Segons el principi de 'minimització de dades', aquestes han de ser:",
    "answers": [
      { "text": "Adequades, pertinents i limitades al que és necessari en relació amb les finalitats per a les quals són tractades.", "correct": true },
      { "text": "Reduïdes al mínim nombre de caràcters possibles per estalviar espai d'emmagatzematge.", "correct": false },
      { "text": "Conservades durant un termini màxim de dos anys des de la finalització del tràmit.", "correct": false },
      { "text": "Anonimitzades de manera irreversible en el moment de la seva recollida.", "correct": false }
    ]
  },
  {
    "n": 5,
    "question": "A la Universitat de Barcelona, qui ostenta la condició de 'Responsable del tractament'?",
    "answers": [
      { "text": "La Universitat de Barcelona com a institució.", "correct": true },
      { "text": "El Rector de la Universitat a títol personal.", "correct": false },
      { "text": "El Cap d'Àrea que gestiona la base de dades específica.", "correct": false },
      { "text": "L'Agència Catalana de Protecció de Dades com a òrgan supervisor.", "correct": false }
    ]
  },
  {
    "n": 6,
    "question": "Quins requisits ha de complir el consentiment per ser considerat vàlid sota el RGPD?",
    "answers": [
      { "text": "Ha de ser una manifestació de voluntat lliure, específica, informada i inequívoca (mitjançant una clara acció afirmativa).", "correct": true },
      { "text": "Pot ser tàcit sempre que l'interessat no hagi marcat la casella d'oposició.", "correct": false },
      { "text": "Ha de ser prestat davant de notari en cas de tractament de dades acadèmiques.", "correct": false },
      { "text": "És vàlid per a qualsevol finalitat relacionada, encara que no s'hagi especificat originalment.", "correct": false }
    ]
  },
  {
    "n": 7,
    "question": "A Espanya, quina és l'edat mínima per prestar el consentiment de forma autònoma en serveis de la societat de la informació?",
    "answers": [
      { "text": "14 anys (segons estableix la LOPDGDD).", "correct": true },
      { "text": "16 anys (mínim genèric previst pel RGPD).", "correct": false },
      { "text": "18 anys (majoria d'edat civil).", "correct": false },
      { "text": "12 anys.", "correct": false }
    ]
  },
  {
    "n": 8,
    "question": "El dret de l'interessat a obtenir una còpia de les dades personals que són objecte de tractament s'anomena:",
    "answers": [
      { "text": "Dret d'accés.", "correct": true },
      { "text": "Dret de portabilitat.", "correct": false },
      { "text": "Dret de rectificació.", "correct": false },
      { "text": "Dret d'informació.", "correct": false }
    ]
  },
  {
    "n": 9,
    "question": "El dret que permet sol·licitar l'eliminació de dades quan ja no són necessàries o s'ha retirat el consentiment és:",
    "answers": [
      { "text": "Dret de supressió (dret a l'oblit).", "correct": true },
      { "text": "Dret d'oposició.", "correct": false },
      { "text": "Dret de limitació del tractament.", "correct": false },
      { "text": "Dret de bloqueig definitiu.", "correct": false }
    ]
  },
  {
    "n": 10,
    "question": "Quina figura assessora i supervisa de manera independent el compliment del RGPD dins de la Universitat?",
    "answers": [
      { "text": "El Delegat de Protecció de Dades (DPD).", "correct": true },
      { "text": "El Gerent de la Universitat.", "correct": false },
      { "text": "El Síndic de Greuges de la UB.", "correct": false },
      { "text": "El responsable de Seguretat de la Informació de l'ENS.", "correct": false }
    ]
  },
  {
    "n": 11,
    "question": "Davant d'una violació de seguretat que suposi un risc per als drets de les persones, el responsable ha de:",
    "answers": [
      { "text": "Notificar-ho a l'APDCAT en un termini màxim de 72 hores des de que se'n tingui constància.", "correct": true },
      { "text": "Publicar un anunci al tauler d'edictes electrònic en 24 hores.", "correct": false },
      { "text": "Comunicar-ho al Rectorat en el termini de 10 dies hàbils.", "correct": false },
      { "text": "Denunciar els fets davant el Ministeri Fiscal de forma immediata.", "correct": false }
    ]
  },
  {
    "n": 12,
    "question": "La base jurídica principal per al tractament de dades en l'àmbit universitari públic sol ser:",
    "answers": [
      { "text": "El compliment d'una missió realitzada en interès públic o l'exercici de poders públics.", "correct": true },
      { "text": "L'interès legítim del responsable del tractament.", "correct": false },
      { "text": "El consentiment lliure del professorat i personal d'administració.", "correct": false },
      { "text": "La protecció d'interessos vitals de l'estudiant.", "correct": false }
    ]
  },
  {
    "n": 13,
    "question": "Quines dades formen part de les 'categories especials' (dades sensibles)?",
    "answers": [
      { "text": "Dades biomètriques, dades de salut, orientació sexual i creences religioses o polítiques.", "correct": true },
      { "text": "Dades de contacte, correu electrònic i número de compte bancari.", "correct": false },
      { "text": "Expedient acadèmic, qualificacions i títols obtinguts.", "correct": false },
      { "text": "Dades relatives al vehicle particular del personal de la UB.", "correct": false }
    ]
  },
  {
    "n": 14,
    "question": "El principi de 'responsabilitat proactiva' (accountability) implica:",
    "answers": [
      { "text": "L'obligació del responsable d'aplicar mesures tècniques i organitzatives i poder demostrar el seu compliment.", "correct": true },
      { "text": "Que l'interessat és el responsable de vetllar per l'actualització de les seves dades.", "correct": false },
      { "text": "Que l'Administració només respon si hi ha una reclamació prèvia davant l'APDCAT.", "correct": false },
      { "text": "La responsabilitat penal directa de tots els empleats públics que accedeixen a dades.", "correct": false }
    ]
  },
  {
    "n": 15,
    "question": "El dret a la portabilitat s'exerceix quan el tractament:",
    "answers": [
      { "text": "Es basa en el consentiment o en un contracte i es realitza per mitjans automatitzats.", "correct": true },
      { "text": "Es realitza en compliment d'una missió d'interès públic.", "correct": false },
      { "text": "Afecta exclusivament a documents en suport paper.", "correct": false },
      { "text": "És necessari per complir una obligació legal del responsable.", "correct": false }
    ]
  },
  {
    "n": 16,
    "question": "La seguretat del tractament segons el RGPD implica:",
    "answers": [
      { "text": "Aplicar mesures d'estat de la tècnica per garantir la confidencialitat, integritat, disponibilitat i resiliència dels sistemes.", "correct": true },
      { "text": "L'anonimització obligatòria de tots els fitxers d'estudiants.", "correct": false },
      { "text": "L'emmagatzematge de dades exclusivament en unitats de disc xifrades amb clau de 256 bits.", "correct": false },
      { "text": "La prohibició d'utilitzar el núvol (cloud) per guardar dades personals.", "correct": false }
    ]
  },
  {
    "n": 17,
    "question": "L'Encarregat del tractament és la persona o entitat que:",
    "answers": [
      { "text": "Tracta dades personals per compte del responsable del tractament.", "correct": true },
      { "text": "Té la propietat legal de la base de dades de la Universitat.", "correct": false },
      { "text": "Supervisa de manera externa que la UB compleix la LOPD.", "correct": false },
      { "text": "Gestiona l'accés físic als servidors de dades.", "correct": false }
    ]
  },
  {
    "n": 18,
    "question": "En què consisteix la 'Privacitat des de la dada' (per defecte)?",
    "answers": [
      { "text": "En garantir que, per defecte, només es tractin les dades personals necessàries per a cada finalitat específica.", "correct": true },
      { "text": "En dissenyar una web que no demani cap dada a l'usuari.", "correct": false },
      { "text": "En fer que tota la informació de la UB sigui invisible per a Google.", "correct": false },
      { "text": "En l'obligació de signar un document de privacitat en cada tràmit acadèmic.", "correct": false }
    ]
  },
  {
    "n": 19,
    "question": "L'Avaluació d'Impacte (AIPD) és preceptiva quan el tractament:",
    "answers": [
      { "text": "Suposa un alt risc per als drets i llibertats, especialment en l'ús de noves tecnologies.", "correct": true },
      { "text": "Implica la recollida de dades bàsiques de contacte per a una enquesta interna.", "correct": false },
      { "text": "Afecta a menys de 100 persones dins de la comunitat universitària.", "correct": false },
      { "text": "S'ha de fer un canvi de proveïdor d'ordinadors a l'oficina.", "correct": false }
    ]
  },
  {
    "n": 20,
    "question": "Quin d'aquests NO és un dret ARPOL (drets dels interessats)?",
    "answers": [
      { "text": "Dret de modificació arbitrària.", "correct": true },
      { "text": "Dret de limitació del tractament.", "correct": false },
      { "text": "Dret d'oposició.", "correct": false },
      { "text": "Dret a no ser objecte de decisions individuals automatitzades.", "correct": false }
    ]
  },
  {
    "n": 21,
    "question": "El tractament de dades sobre condemnes o infraccions penals requereix:",
    "answers": [
      { "text": "Estar autoritzat per una norma amb rang de llei o realitzar-se sota supervisió de l'autoritat pública.", "correct": true },
      { "text": "Únicament el consentiment per escrit de la persona condemnada.", "correct": false },
      { "text": "Que l'expedient estigui obert al públic per transparència.", "correct": false },
      { "text": "Que la Universitat hagi demanat permís previ al Síndic de Greuges.", "correct": false }
    ]
  },
  {
    "n": 22,
    "question": "Les transferències internacionals de dades es poden realitzar si:",
    "answers": [
      { "text": "Hi ha una decisió d'adequació de la Comissió Europea o existeixen garanties suficients.", "correct": true },
      { "text": "El país de destinació és un paradís fiscal reconegut.", "correct": false },
      { "text": "S'utilitzen servidors d'empreses amb seu a la Xina o Rússia sense més garanties.", "correct": false },
      { "text": "L'Administració ho considera necessari per estalviar costos de manteniment.", "correct": false }
    ]
  },
  {
    "n": 23,
    "question": "El Registre d'Activitats de Tractament (RAT) ha de contenir:",
    "answers": [
      { "text": "La identificació del responsable, les finalitats del tractament i la descripció de les categories de dades.", "correct": true },
      { "text": "El nom i cognoms de tots els funcionaris que accedeixen a les dades.", "correct": false },
      { "text": "Les contrasenyes de seguretat de les bases de dades corporatives.", "correct": false },
      { "text": "Un resum de les multes pagades per la Universitat a l'APDCAT.", "correct": false }
    ]
  },
  {
    "n": 24,
    "question": "El dret d'oposició faculta l'interessat per demanar el cessament del tractament:",
    "answers": [
      { "text": "Per motius relacionats amb la seva situació personal o per a finalitats de màrqueting directe.", "correct": true },
      { "text": "Sempre que no estigui d'acord amb una decisió acadèmica.", "correct": false },
      { "text": "Únicament quan el tractament sigui il·legal.", "correct": false },
      { "text": "Per evitar que el seu nom surti a la llista de matriculats d'un curs.", "correct": false }
    ]
  },
  {
    "n": 25,
    "question": "L'òrgan competent per supervisar el compliment de la normativa a les Universitats Públiques de Catalunya és:",
    "answers": [
      { "text": "L'Autoritat Catalana de Protecció de Dades (APDCAT).", "correct": true },
      { "text": "L'Agència Espanyola de Protecció de Dades (AEPD).", "correct": false },
      { "text": "El Comitè Europeu de Protecció de Dades.", "correct": false },
      { "text": "La Inspecció de Serveis de la Generalitat.", "correct": false }
    ]
  },
  {
    "n": 26,
    "question": "El principi de 'limitació del termini de conservació' estableix que les dades han de ser:",
    "answers": [
      { "text": "Mantingudes de forma que permetin la identificació durant no més temps del necessari per a les finalitats.", "correct": true },
      { "text": "Esborrades automàticament cada 31 de desembre.", "correct": false },
      { "text": "Conservades per sempre en el cas de títols acadèmics oficials.", "correct": false },
      { "text": "Eliminades un cop el ciutadà ha rebut la notificació de l'acte.", "correct": false }
    ]
  },
  {
    "n": 27,
    "question": "El tractament de dades amb finalitats d'investigació històrica o estadística:",
    "answers": [
      { "text": "És lícit i permet limitar determinats drets sota salvaguardes adequades (com la pseudonimització).", "correct": true },
      { "text": "Requereix sempre un nou consentiment de l'interessat.", "correct": false },
      { "text": "Està prohibit si les dades són de salut.", "correct": false },
      { "text": "Només es pot fer amb dades que hagin estat prèviament publicades al BOE.", "correct": false }
    ]
  },
  {
    "n": 28,
    "question": "Què garanteix la tècnica de la 'pseudonimització'?",
    "answers": [
      { "text": "Que les dades no es puguin atribuir a un interessat sense utilitzar informació addicional guardada per separat.", "correct": true },
      { "text": "La destrucció total de la vinculació entre la dada i la persona.", "correct": false },
      { "text": "L'accés lliure a la informació per part de qualsevol investigador.", "correct": false },
      { "text": "El xifratge d'extrem a extrem de les comunicacions per correu.", "correct": false }
    ]
  },
  {
    "n": 29,
    "question": "La designació d'un DPD a les administracions públiques (com la UB):",
    "answers": [
      { "text": "És obligatòria en tots els casos.", "correct": true },
      { "text": "És voluntària segons la mida de la plantilla de funcionaris.", "correct": false },
      { "text": "Només es requereix si es tracten dades de condemnes penals.", "correct": false },
      { "text": "Depèn de si la Universitat té o no conveni amb la Generalitat.", "correct": false }
    ]
  },
  {
    "n": 30,
    "question": "El dret de rectificació s'exerceix quan les dades són:",
    "answers": [
      { "text": "Inexactes o incompletes.", "correct": true },
      { "text": "Massa antigues.", "correct": false },
      { "text": "Irrellevants per a l'interessat.", "correct": false },
      { "text": "Dificils de llegir pel sistema informàtic.", "correct": false }
    ]
  },
  /* --- 5 EXTRAS --- */
  {
    "n": 31,
    "question": "Què s'entén pel 'bloqueig de dades' segons la LOPDGDD?",
    "answers": [
      { "text": "L'obligació d'identificar i reservar les dades per impedir-ne el tractament un cop rectificades o suprimides, tret de la seva posada a disposició de jutges o autoritats.", "correct": true },
      { "text": "La suspensió de l'accés a internet d'un funcionari que ha comès una infracció.", "correct": false },
      { "text": "L'encriptació dels servidors de la UB durant un atac informàtic.", "correct": false },
      { "text": "La prohibició de cedir dades a altres universitats durant un procés electoral.", "correct": false }
    ]
  },
  {
    "n": 32,
    "question": "Dins del deure de transparència, la informació a l'interessat s'ha de facilitar preferentment mitjançant:",
    "answers": [
      { "text": "Un sistema de capes (informació bàsica en primer nivell i detallada en un segon).", "correct": true },
      { "text": "Un document únic de més de 50 pàgines per assegurar el màxim detall.", "correct": false },
      { "text": "L'enviament d'un SMS amb un enllaç a la Llei Orgànica completa.", "correct": false },
      { "text": "Una trucada telefònica obligatòria a cada estudiant matriculat.", "correct": false }
    ]
  },
  {
    "n": 33,
    "question": "El Delegat de Protecció de Dades (DPD) ha de retre comptes directament davant de:",
    "answers": [
      { "text": "El més alt nivell jeràrquic del responsable (Rector/a o Consell de Govern a la UB).", "correct": true },
      { "text": "El Cap del Servei d'Informàtica.", "correct": false },
      { "text": "L'Autoritat Catalana de Protecció de Dades exclusivament.", "correct": false },
      { "text": "El Ministeri d'Educació i Ciència.", "correct": false }
    ]
  },
  {
    "n": 34,
    "question": "Es pot denegar l'exercici del dret d'accés si l'interessat ja ha exercit aquest dret prèviament?",
    "answers": [
      { "text": "Sí, si la sol·licitud és manifestament infundada o excessiva, especialment pel seu caràcter repetitiu.", "correct": true },
      { "text": "No, el dret d'accés es pot exercir cada dia sense cap restricció.", "correct": false },
      { "text": "Només si l'anterior petició es va fer fa menys de deu anys.", "correct": false },
      { "text": "Sí, però cal retornar-li la meitat de la taxa administrativa.", "correct": false }
    ]
  },
  {
    "n": 35,
    "question": "El tractament de dades amb la finalitat de publicació de les notes dels estudiants a la UB es basa en:",
    "answers": [
      { "text": "L'existència d'una norma amb rang de llei que legitima l'exercici de poders públics per a la funció docent.", "correct": true },
      { "text": "El consentiment exprés signat per l'alumne en el moment de la matrícula.", "correct": false },
      { "text": "L'interès legítim de la resta d'estudiants per conèixer el rànquing de la classe.", "correct": false },
      { "text": "El dret a la llibertat d'expressió del professorat universitari.", "correct": false }
    ]
  },
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
  {
    "n": 1,
    "question": "Què signifiquen les sigles PTGAS segons la normativa universitària vigent?",
    "answers": [
      { "text": "Personal Tècnic, de Gestió i d'Administració i Serveis.", "correct": true },
      { "text": "Personal de Treball, Gestió i Atenció Social.", "correct": false },
      { "text": "Professorat Tècnic i de Gestió Administrativa Superior.", "correct": false },
      { "text": "Personal de Tecnologia, Gestió i Administració de Sistemes.", "correct": false }
    ]
  },
  {
    "n": 2,
    "question": "Segons l'Estatut de la UB, quina és la missió del PTGAS?",
    "answers": [
      { "text": "El suport, l'assistència i l'assessorament a les autoritats acadèmiques, així com la gestió i administració, especialment en les àrees de recursos humans, organització administrativa, assumptes econòmics i suport a la recerca.", "correct": true },
      { "text": "L'exercici exclusiu de la docència i la recerca universitària en departaments i instituts.", "correct": false },
      { "text": "La seguretat ciutadana i el manteniment de l'ordre dins dels recintes universitaris.", "correct": false },
      { "text": "La representació legal i defensa judicial de la institució davant qualsevol instància.", "correct": false }
    ]
  },
  {
    "n": 3,
    "question": "El PTGAS de la Universitat de Barcelona es regeix per:",
    "answers": [
      { "text": "La LOSU, l'Estatut de la UB, el TREBEP, la legislació de la funció pública de la Generalitat i els convenis col·lectius aplicables.", "correct": true },
      { "text": "Exclusivament per la Llei de Contractes del Sector Públic.", "correct": false },
      { "text": "Només per les circulars i instruccions del Rector.", "correct": false },
      { "text": "El dret laboral comú sense aplicació de cap normativa administrativa.", "correct": false }
    ]
  },
  {
    "n": 4,
    "question": "Sota la direcció del Rector, a qui correspon la gestió del PTGAS i l'exercici de la seva direcció?",
    "answers": [
      { "text": "Al Gerent.", "correct": true },
      { "text": "Al Consell Social.", "correct": false },
      { "text": "Al Vicerector de Personal Docent.", "correct": false },
      { "text": "Al Consell de Govern.", "correct": false }
    ]
  },
  {
    "n": 5,
    "question": "L'Oferta d'Ocupació Pública (OOP) de la UB, que inclou les places de PTGAS, ha de ser aprovada per:",
    "answers": [
      { "text": "El Consell de Govern.", "correct": true },
      { "text": "El Claustre Universitari.", "correct": false },
      { "text": "El Consell Social a proposta del Gerent.", "correct": false },
      { "text": "La Direcció General d'Universitats de la Generalitat.", "correct": false }
    ]
  },
  {
    "n": 6,
    "question": "Quin és el sistema ordinari i general de provisió de llocs de treball per al PTGAS funcionari a la UB?",
    "answers": [
      { "text": "El concurs de mèrits i capacitats.", "correct": true },
      { "text": "La lliure designació discrecional.", "correct": false },
      { "text": "L'oposició lliure per a qualsevol canvi de lloc.", "correct": false },
      { "text": "L'adscripció directa per resolució de la Gerència.", "correct": false }
    ]
  },
  {
    "n": 7,
    "question": "El sistema de 'lliure designació' es reserva per a aquells llocs que:",
    "answers": [
      { "text": "Siguin de caràcter directiu o d'especial responsabilitat, tal com s'especifica a la Relació de Llocs de Treball (RLT).", "correct": true },
      { "text": "Pertanyin al Subgrup C2 per agilitzar la seva cobertura.", "correct": false },
      { "text": "Siguin ocupats per personal interí amb més de 5 anys d'experiència.", "correct": false },
      { "text": "Tinguin caràcter temporal per cobrir baixes de maternitat.", "correct": false }
    ]
  },
  {
    "n": 8,
    "question": "En els concursos de provisió del PTGAS funcionari, s'han de valorar, entre d'altres:",
    "answers": [
      { "text": "L'antiguitat, el grau personal consolidat, el treball desenvolupat i els cursos de formació i perfeccionament.", "correct": true },
      { "text": "L'expedient acadèmic del títol d'accés a la funció pública.", "correct": false },
      { "text": "La proximitat del domicili al centre de treball.", "correct": false },
      { "text": "Les cartes de recomanació del cap de la unitat anterior.", "correct": false }
    ]
  },
  {
    "n": 9,
    "question": "La reassignació de llocs de treball és un mecanisme de mobilitat que s'aplica quan:",
    "answers": [
      { "text": "Es produeixen reformes organitzatives o per necessitats del servei degudament motivades.", "correct": true },
      { "text": "El funcionari ho demana per motius de conciliació familiar.", "correct": false },
      { "text": "S'ha de sancionar un treballador per una falta lleu.", "correct": false },
      { "text": "Es vol augmentar el sou base de determinades escales.", "correct": false }
    ]
  },
  {
    "n": 10,
    "question": "Els tribunals de selecció han de garantir el compliment dels següents principis:",
    "answers": [
      { "text": "Imparcialitat, professionalitat, especialitat dels seus membres i paritat de gènere.", "correct": true },
      { "text": "Secret de les deliberacions però publicitat dels vots individuals.", "correct": false },
      { "text": "Representació política dels grups del Claustre.", "correct": false },
      { "text": "Jerarquia administrativa directa respecte al Gerent.", "correct": false }
    ]
  },
  {
    "n": 11,
    "question": "La selecció del personal PTGAS laboral s'ha de realitzar mitjançant convocatòria pública i sistemes que respectin:",
    "answers": [
      { "text": "Els principis d'igualtat, mèrit, capacitat i publicitat.", "correct": true },
      { "text": "El dret de preferència dels qui ja han treballat a la UB anteriorment.", "correct": false },
      { "text": "La llibertat de contractació pròpia de les empreses privades.", "correct": false },
      { "text": "L'ordre cronològic d'inscripció a les llistes d'atur.", "correct": false }
    ]
  },
  {
    "n": 12,
    "question": "A quina escala pertanyen els llocs de treball que realitzen tasques d'execució i tràmits administratius generals?",
    "answers": [
      { "text": "Escala Administrativa o Escala Auxiliar Administrativa pròpies de la UB.", "correct": true },
      { "text": "Escala de Gestió Acadèmica Exclusiva.", "correct": false },
      { "text": "Cossos de l'Administració General de l'Estat adscrits a la UB.", "correct": false },
      { "text": "Escales de Suport Tècnic Especialitzat.", "correct": false }
    ]
  },
  {
    "n": 13,
    "question": "La mobilitat forçosa del personal PTGAS funcionari:",
    "answers": [
      { "text": "S'ha de fonamentar en necessitats del servei i s'ha de realitzar mitjançant una resolució motivada.", "correct": true },
      { "text": "Està prohibida pel Codi de Conducta de la UB.", "correct": false },
      { "text": "Es pot aplicar lliurement sense necessitat d'explicar el motiu.", "correct": false },
      { "text": "Només es pot fer si el treballador està d'acord.", "correct": false }
    ]
  },
  {
    "n": 14,
    "question": "La comissió de serveis permet cobrir temporalment un lloc de treball en cas de:",
    "answers": [
      { "text": "Urgent i inajornable necessitat, amb un funcionari que compleixi els requisits del lloc.", "correct": true },
      { "text": "Vacances o dies de lliure disposició de l'anterior titular.", "correct": false },
      { "text": "Inauguració de nous campus fora de Barcelona.", "correct": false },
      { "text": "Com a premi per un bon rendiment en l'avaluació de l'exercici.", "correct": false }
    ]
  },
  {
    "n": 15,
    "question": "El període de prova per al personal laboral PTGAS de nou ingrés:",
    "answers": [
      { "text": "Té la durada prevista al conveni col·lectiu i té com a objectiu acreditar l'aptitud per al lloc.", "correct": true },
      { "text": "És de 6 mesos per a tothom, sense excepcions.", "correct": false },
      { "text": "És voluntari i només s'aplica si el Gerent ho decideix.", "correct": false },
      { "text": "Substitueix la fase d'oposició en el procés selectiu.", "correct": false }
    ]
  },
  {
    "n": 16,
    "question": "Per participar en un procés de promoció interna vertical a la UB cal:",
    "answers": [
      { "text": "Pertànyer a un cos d'un subgrup inferior i tenir una antiguitat mínima de 2 anys en el mateix.", "correct": true },
      { "text": "Ser personal interí amb més de 3 anys d'antiguitat.", "correct": false },
      { "text": "Haver nascut a Catalunya o acreditar 10 anys de residència.", "correct": false },
      { "text": "Tenir un informe favorable del Rectorat sobre la lleialtat institucional.", "correct": false }
    ]
  },
  {
    "n": 17,
    "question": "Per accedir al Subgrup A2 de les escales de PTGAS de la UB, quina titulació s'exigeix?",
    "answers": [
      { "text": "Títol universitari de Grau o equivalent.", "correct": true },
      { "text": "Títol de Tècnic Superior de FP.", "correct": false },
      { "text": "Títol de Batxillerat.", "correct": false },
      { "text": "No es demana titulació si es té experiència prèvia.", "correct": false }
    ]
  },
  {
    "n": 18,
    "question": "El personal que ocupa un lloc per lliure designació pot ser cessat:",
    "answers": [
      { "text": "Amb caràcter discrecional per l'òrgan que va fer el nomenament.", "correct": true },
      { "text": "Només si es jubila o demana l'excedència.", "correct": false },
      { "text": "Únicament si la plaça s'amortitza a la RLT.", "correct": false },
      { "text": "Si ho decideix la Junta de Personal per majoria absoluta.", "correct": false }
    ]
  },
  {
    "n": 19,
    "question": "On s'ha de publicar oficialment la convocatòria de les proves selectives per a funcionaris de la UB?",
    "answers": [
      { "text": "Al Diari Oficial de la Generalitat de Catalunya (DOGC) i a la Gaseta Universitària.", "correct": true },
      { "text": "Només al lloc web de la Gerència.", "correct": false },
      { "text": "Al Butlletí Oficial de l'Estat (BOE) exclusivament.", "correct": false },
      { "text": "En un diari de premsa escrita nacional.", "correct": false }
    ]
  },
  {
    "n": 20,
    "question": "L'acreditació del coneixement del català en els processos selectius del PTGAS:",
    "answers": [
      { "text": "És un requisit de participació, excepte en els casos previstos per la normativa de funció pública.", "correct": true },
      { "text": "S'avalua com un mèrit més en la fase de concurs.", "correct": false },
      { "text": "És opcional si es té un títol d'anglès nivell B2.", "correct": false },
      { "text": "No és necessària per al personal laboral temporal.", "correct": false }
    ]
  },
  {
    "n": 21,
    "question": "Quin òrgan col·legiat té la funció de representació del personal funcionari PTGAS?",
    "answers": [
      { "text": "La Junta de Personal.", "correct": true },
      { "text": "El Comitè d'Empresa.", "correct": false },
      { "text": "El Consell Social.", "correct": false },
      { "text": "La Taula de Negociació del PTGAS.", "correct": false }
    ]
  },
  {
    "n": 22,
    "question": "El Comitè d'Empresa representa els interessos de:",
    "answers": [
      { "text": "El PTGAS laboral de la Universitat.", "correct": true },
      { "text": "Tot el personal docent i investigador (PDI).", "correct": false },
      { "text": "Exclusivament el personal funcionari interí.", "correct": false },
      { "text": "Els representants del Rectorat a la Gerència.", "correct": false }
    ]
  },
  {
    "n": 23,
    "question": "La RLT (Relació de Llocs de Treball) és un instrument de planificació que ha d'incloure obligatòriament:",
    "answers": [
      { "text": "La denominació dels llocs, els grups de classificació, els sistemes de provisió i les retribucions complementàries.", "correct": true },
      { "text": "El llistat nominal de tots els treballadors amb el seu DNI.", "correct": false },
      { "text": "L'horari de fitxatge diari de cada treballador.", "correct": false },
      { "text": "La valoració de l'exercici dels darrers tres anys.", "correct": false }
    ]
  },
  {
    "n": 24,
    "question": "Respecte a la recerca, el PTGAS pot:",
    "answers": [
      { "text": "Col·laborar en tasques de gestió i suport tècnic a la recerca i a la transferència de coneixements.", "correct": true },
      { "text": "Dirigir tesis doctorals de forma autònoma.", "correct": false },
      { "text": "Ser l'investigador principal d'un projecte europeu sense titulació acadèmica.", "correct": false },
      { "text": "Cap de les anteriors, té la recerca prohibida per l'Estatut.", "correct": false }
    ]
  },
  {
    "n": 25,
    "question": "La reserva de places per a persones amb discapacitat en la UB:",
    "answers": [
      { "text": "S'ha d'ajustar a la normativa general de funció pública (mínim 7%).", "correct": true },
      { "text": "És una decisió voluntària del Consell Social.", "correct": false },
      { "text": "Només s'aplica en les places de caràcter eventual.", "correct": false },
      { "text": "S'ha reduït al 2% pel caràcter tècnic de la universitat.", "correct": false }
    ]
  },
  {
    "n": 26,
    "question": "El personal funcionari interí de la UB cessa la seva relació:",
    "answers": [
      { "text": "Quan la plaça s'ocupa per un funcionari de carrera, s'amortitza el lloc o finalitza la causa del nomenament.", "correct": true },
      { "text": "Automàticament cada sis mesos per llei.", "correct": false },
      { "text": "Si l'interessat agafa una baixa mèdica de llarga durada.", "correct": false },
      { "text": "En el moment que s'aprova el nou pressupost de la UB.", "correct": false }
    ]
  },
  {
    "n": 27,
    "question": "La mobilitat interuniversitària a la UB es basa en:",
    "answers": [
      { "text": "El principi de reciprocitat i mitjançant els convenis subscrits entre universitats.", "correct": true },
      { "text": "L'obligació de canviar d'universitat cada 10 anys.", "correct": false },
      { "text": "La lliure elecció del funcionari sense necessitat de vacant.", "correct": false },
      { "text": "Només és possible entre universitats públiques i privades.", "correct": false }
    ]
  },
  {
    "n": 28,
    "question": "El dret i deure de formació del PTGAS té com a objectiu:",
    "answers": [
      { "text": "L'actualització professional, la millora de la gestió i la promoció en la carrera professional.", "correct": true },
      { "text": "L'obtenció de títols de Grau de forma gratuïta durant la jornada laboral.", "correct": false },
      { "text": "Substituir la manca de personal amb cursos d'autoaprenentatge.", "correct": false },
      { "text": "Exclusivament l'aprenentatge d'idiomes estrangers.", "correct": false }
    ]
  },
  {
    "n": 29,
    "question": "En matèria de situacions administratives, el PTGAS funcionari es regeix per:",
    "answers": [
      { "text": "La normativa aplicable als funcionaris de l'Administració de la Generalitat de Catalunya.", "correct": true },
      { "text": "El Conveni Col·lectiu d'Oficines i Despatxos de Barcelona.", "correct": false },
      { "text": "L'Estatut dels Treballadors exclusivament.", "correct": false },
      { "text": "Les normes de l'Organització Internacional del Treball (OIT).", "correct": false }
    ]
  },
  {
    "n": 30,
    "question": "Les proves selectives per al PTGAS poden incloure:",
    "answers": [
      { "text": "Proves de coneixements, exercicis pràctics, psicotècnics i el coneixement de llengües.", "correct": true },
      { "text": "Només una entrevista amb el futur cap directe.", "correct": false },
      { "text": "Una valoració del currículum sense cap examen presencial en l'oposició.", "correct": false },
      { "text": "L'entrega d'un treball de recerca sobre la Universitat.", "correct": false }
    ]
  },
  /* --- 5 EXTRAS ESTRATÈGICS --- */
  {
    "n": 31,
    "question": "Quina és la diferència principal entre el concurs general i el concurs específic a la UB?",
    "answers": [
      { "text": "En l'específic es valoren mèrits adequats a les característiques del lloc mitjançant mètodes com memòries o entrevistes.", "correct": true },
      { "text": "El general és per a laborals i l'específic per a funcionaris.", "correct": false },
      { "text": "El concurs específic només es convoca per al personal del Subgrup A1.", "correct": false },
      { "text": "No hi ha diferència; són dos noms per al mateix procediment.", "correct": false }
    ]
  },
  {
    "n": 32,
    "question": "El personal de les escales de PTGAS d'altres universitats que s'incorpori a la UB per concurs:",
    "answers": [
      { "text": "S'integra plenament en el PTGAS de la UB en la situació de servei actiu.", "correct": true },
      { "text": "Ha de passar una nova oposició de consolidació en el termini d'un any.", "correct": false },
      { "text": "Manté la dependència orgànica de la seva universitat d'origen.", "correct": false },
      { "text": "Només pot ocupar llocs de caràcter eventual o interí.", "correct": false }
    ]
  },
  {
    "n": 33,
    "question": "Segons l'Estatut de la UB, qui nomena els funcionaris de les escales pròpies de la Universitat?",
    "answers": [
      { "text": "El Rector.", "correct": true },
      { "text": "El Gerent.", "correct": false },
      { "text": "El Consell Social.", "correct": false },
      { "text": "El Conseller d'Universitats.", "correct": false }
    ]
  },
  {
    "n": 34,
    "question": "En el cas del personal laboral, la pèrdua de la condició de PTGAS pot produir-se per:",
    "answers": [
      { "text": "Despatx disciplinari que sigui declarat procedent o per les causes previstes al contracte i legislació laboral.", "correct": true },
      { "text": "Per voluntat unilateral del Gerent sense necessitat de causa.", "correct": false },
      { "text": "Per complir 60 anys d'edat de forma obligatòria.", "correct": false },
      { "text": "Per canvi de sindicat representatiu.", "correct": false }
    ]
  },
  {
    "n": 35,
    "question": "L'instrument que permet la reordenació dels llocs de treball per raons d'eficàcia i economia es denomina:",
    "answers": [
      { "text": "Plans d'ordenació de recursos humans.", "correct": true },
      { "text": "Convocatòria d'Oferta Pública extraoficial.", "correct": false },
      { "text": "Protocol de trasllats discrecionals.", "correct": false },
      { "text": "Acord de modificació salarial.", "correct": false }
    ]
  },
  {
    "n": 1,
    "question": "Segons la normativa vigent (LOSU), el PDI de les universitats públiques està integrat per:",
    "answers": [
      { "text": "Personal docent i investigador funcionari i personal docent i investigador contractat.", "correct": true },
      { "text": "Només cossos de funcionaris de l'Estat.", "correct": false },
      { "text": "Exclusivament personal laboral amb contracte de caràcter indefinit.", "correct": false },
      { "text": "Catedràtics, titulars i personal d'administració que dóna suport.", "correct": false }
    ]
  },
  {
    "n": 2,
    "question": "Quins són els dos cossos de funcionaris docents universitaris vigents segons la LOSU?",
    "answers": [
      { "text": "Catedràtiques i Catedràtics d'Universitat i Professores i Professors Titulars d'Universitat.", "correct": true },
      { "text": "Professors Agregats i Professors Lectors.", "correct": false },
      { "text": "Catedràtics d'Escola Universitària i Professors Ajudants.", "correct": false },
      { "text": "Professors Numeraris i Professors Interins.", "correct": false }
    ]
  },
  {
    "n": 3,
    "question": "Per a l'accés a qualsevol categoria de PDI funcionari, és requisit imprescindible:",
    "answers": [
      { "text": "Estar en possessió del títol de Doctor.", "correct": true },
      { "text": "Tenir almenys dos títols de Grau.", "correct": false },
      { "text": "Haver estat degà o director de departament prèviament.", "correct": false },
      { "text": "Disposar d'un contracte indefinit prèvi a l'empresa privada.", "correct": false }
    ]
  },
  {
    "n": 4,
    "question": "Quina figura de PDI laboral està destinada a l'etapa inicial de la carrera acadèmica i té caràcter temporal?",
    "answers": [
      { "text": "Professorat Ajudant Doctor.", "correct": true },
      { "text": "Professorat Associat.", "correct": false },
      { "text": "Professorat Emèrit.", "correct": false },
      { "text": "Catedràtic Contractat.", "correct": false }
    ]
  },
  {
    "n": 5,
    "question": "A Catalunya, quina figura laboral de caràcter indefinit és equivalent a la de Professor Titular d'Universitat?",
    "answers": [
      { "text": "Professorat Agregat.", "correct": true },
      { "text": "Professorat Lector.", "correct": false },
      { "text": "Professorat Visitant.", "correct": false },
      { "text": "Professorat Substitut.", "correct": false }
    ]
  },
  {
    "n": 6,
    "question": "El Professorat Lector a Catalunya es defineix com un contracte laboral:",
    "answers": [
      { "text": "Temporal, per a doctors joves, amb una durada màxima total de 6 anys.", "correct": true },
      { "text": "Indefinit, amb dret a reserva de plaça des de l'inici.", "correct": false },
      { "text": "Que no requereix l'acreditació de l'AQU.", "correct": false },
      { "text": "Reservat a professionals de prestigi sense necessitat de títol de doctor.", "correct": false }
    ]
  },
  {
    "n": 7,
    "question": "Per accedir a una plaça de PDI funcionari o contractat permanent, cal disposar de l'acreditació de:",
    "answers": [
      { "text": "L'ANECA (àmbit estatal) o l'AQU (àmbit català).", "correct": true },
      { "text": "L'Agència Tributària de Catalunya.", "correct": false },
      { "text": "El Consell Social de la pròpia Universitat.", "correct": false },
      { "text": "L'Institut de Ciències de l'Educació.", "correct": false }
    ]
  },
  {
    "n": 8,
    "question": "El Professorat Associat és aquell personal que:",
    "answers": [
      { "text": "Desenvolupa una activitat professional fora de la universitat i aporta la seva experiència docent a temps parcial.", "correct": true },
      { "text": "Es dedica en exclusiva a la gestió administrativa del departament.", "correct": false },
      { "text": "Substitueix els professors titulars durant les seves vacances.", "correct": false },
      { "text": "Té un contracte indefinit a temps complet per fer recerca.", "correct": false }
    ]
  },
  {
    "n": 9,
    "question": "La figura del Professorat Emèrit està reservada a:",
    "answers": [
      { "text": "Docents jubilats que hagin prestat serveis destacats i continuïn col·laborant temporalment.", "correct": true },
      { "text": "Professors estrangers que venen a fer una conferència puntual.", "correct": false },
      { "text": "Personal d'administració amb més de 40 anys de servei.", "correct": false },
      { "text": "Doctors joves que no han trobat plaça com a lectors.", "correct": false }
    ]
  },
  {
    "n": 10,
    "question": "El Professorat Visitant és aquell personal que:",
    "answers": [
      { "text": "Pertany a una altra universitat o centre de recerca i s'incorpora a la UB de forma temporal.", "correct": true },
      { "text": "S'encarrega d'organitzar les jornades de portes obertes.", "correct": false },
      { "text": "Realitza tasques de guia turística pel patrimoni històric de la UB.", "correct": false },
      { "text": "No té vinculació acadèmica ni títol de doctor.", "correct": false }
    ]
  },
  {
    "n": 11,
    "question": "Correspon al Rector la competència per:",
    "answers": [
      { "text": "Convocar els concursos per a la provisió de places de PDI i nomenar o contractar els seleccionats.", "correct": true },
      { "text": "Decidir quins estudiants poden matricular-se a cada grau.", "correct": false },
      { "text": "Aprovar el pressupost general de la Generalitat en matèria de recerca.", "correct": false },
      { "text": "Intervenir en les eleccions sindicals de les empreses externes de neteja.", "correct": false }
    ]
  },
  {
    "n": 12,
    "question": "Quines són les modalitats de dedicació del PDI segons la LOSU?",
    "answers": [
      { "text": "Temps complet (preferent) o temps parcial.", "correct": true },
      { "text": "Només temps complet per als funcionaris.", "correct": false },
      { "text": "A hores lliures segons la disponibilitat del departament.", "correct": false },
      { "text": "Exclusivament 37,5 hores de docència davant l'alumne.", "correct": false }
    ]
  },
  {
    "n": 13,
    "question": "Segons la LOSU, quin percentatge mínim de PDI doctor ha de tenir una universitat pública?",
    "answers": [
      { "text": "Almenys el 55% del total del personal docent i investigador.", "correct": true },
      { "text": "El 100% de la plantilla.", "correct": false },
      { "text": "Un 25% del personal laboral i un 50% del funcionari.", "correct": false },
      { "text": "No existeix cap mínim obligatori.", "correct": false }
    ]
  },
  {
    "n": 14,
    "question": "L'Agència per a la Qualitat del Sistema Universitari de Catalunya (AQU) té la funció de:",
    "answers": [
      { "text": "Acreditar el PDI per a l'accés a les diferents categories laborals i funcionàries, i avaluar-ne els complements.", "correct": true },
      { "text": "Controlar el fitxatge diari i les hores de permanència al despatx.", "correct": false },
      { "text": "Gestionar el servei de menjador i residències universitàries.", "correct": false },
      { "text": "Dissenyar el marxandatge oficial de la Universitat de Barcelona.", "correct": false }
    ]
  },
  {
    "n": 15,
    "question": "La selecció del PDI funcionari s'articula mitjançant:",
    "answers": [
      { "text": "Concursos d'accés que garanteixin els principis constitucionals d'igualtat, mèrit i capacitat.", "correct": true },
      { "text": "Un examen tipus test igual per a totes les àrees de coneixement.", "correct": false },
      { "text": "L'ordre d'antiguitat a les llistes de substitucions de la Generalitat.", "correct": false },
      { "text": "Sorteig públic davant el Consell de Govern.", "correct": false }
    ]
  },
  {
    "n": 16,
    "question": "La categoria de Catedràtic Contractat a Catalunya es caracteritza per:",
    "answers": [
      { "text": "Ser la màxima categoria del PDI laboral amb contracte indefinit.", "correct": true },
      { "text": "Ser un càrrec honorífic per a persones sense titulació acadèmica.", "correct": false },
      { "text": "Tenir una durada màxima de 4 anys no renovables.", "correct": false },
      { "text": "Estar exempt de realitzar tasques de recerca.", "correct": false }
    ]
  },
  {
    "n": 17,
    "question": "La mobilitat del PDI funcionari entre universitats es realitza a través de:",
    "answers": [
      { "text": "Concursos de trasllat o concursos d'accés a noves places.", "correct": true },
      { "text": "Intercanvi directe d'un professor per un altre sense més tràmits.", "correct": false },
      { "text": "Permís especial del Rector de la universitat de destinació únicament.", "correct": false },
      { "text": "No es permet la mobilitat entre diferents comunitats autònomes.", "correct": false }
    ]
  },
  {
    "n": 18,
    "question": "La 'venia docendi' és l'autorització necessària perquè:",
    "answers": [
      { "text": "Personal que no pertany als cossos docents (com becaris o investigadors) pugui impartir docència.", "correct": true },
      { "text": "Un professor pugui cobrar les triennis acumulats.", "correct": false },
      { "text": "Es pugui fer classe fora del recinte universitari oficial.", "correct": false },
      { "text": "El Rector pugui delegar les seves competències en un degà.", "correct": false }
    ]
  },
  {
    "n": 19,
    "question": "Quina és la unitat bàsica encarregada d'organitzar i desenvolupar la recerca i la docència del PDI?",
    "answers": [
      { "text": "El Departament.", "correct": true },
      { "text": "La Gerència.", "correct": false },
      { "text": "El Consell Social.", "correct": false },
      { "text": "L'Administració de Centre.", "correct": false }
    ]
  },
  {
    "n": 20,
    "question": "El personal investigador contractat sota programes d'excel·lència (com el Ramón y Cajal):",
    "answers": [
      { "text": "S'integra en la plantilla de la universitat i pot col·laborar en tasques docents.", "correct": true },
      { "text": "Té prohibit fer qualsevol tipus de classe als alumnes.", "correct": false },
      { "text": "Es considera personal extern d'una empresa de serveis.", "correct": false },
      { "text": "No necessita titulació de doctor per ser contractat.", "correct": false }
    ]
  },
  {
    "n": 21,
    "question": "Quina normativa s'aplica supletòriament al PDI funcionari en el que no preveu la LOSU?",
    "answers": [
      { "text": "El TREBEP i la legislació de funció pública de la Generalitat.", "correct": true },
      { "text": "L'Estatut dels Treballadors.", "correct": false },
      { "text": "El Reglament de Règim Intern del PTGAS.", "correct": false },
      { "text": "El Codi Civil en matèria de contractació laboral.", "correct": false }
    ]
  },
  {
    "n": 22,
    "question": "La llibertat de càtedra implica que el PDI:",
    "answers": [
      { "text": "Té dret a expressar els seus coneixements i mètodes sense censura, en el marc de la Constitució.", "correct": true },
      { "text": "Pot decidir no fer classe si no li agrada l'assignatura assignada.", "correct": false },
      { "text": "Té llibertat total per no avaluar els seus estudiants.", "correct": false },
      { "text": "Pot cobrar quotes extres als alumnes per la seva formació.", "correct": false }
    ]
  },
  {
    "n": 23,
    "question": "Segons l'Estatut de la UB, el Director d'un Departament és elegit per:",
    "answers": [
      { "text": "El Consell de Departament d'entre els seus membres doctors amb vinculació permanent.", "correct": true },
      { "text": "El Rector de forma directa i discrecional.", "correct": false },
      { "text": "Els estudiants de la facultat corresponent.", "correct": false },
      { "text": "El Gerent de la Universitat.", "correct": false }
    ]
  },
  {
    "n": 24,
    "question": "Els 'sexennis' retribueixen l'activitat de recerca avaluada positivament cada sis anys per:",
    "answers": [
      { "text": "La CNEAI (àmbit estatal) o l'AQU (àmbit català).", "correct": true },
      { "text": "El Consell de Govern de la UB.", "correct": false },
      { "text": "La Junta de Facultat.", "correct": false },
      { "text": "El Ministeri d'Hisenda directament.", "correct": false }
    ]
  },
  {
    "n": 25,
    "question": "Poden els professors titulars o catedràtics exercir de Rector de la UB?",
    "answers": [
      { "text": "Sí, el Rector ha de ser elegit d'entre el personal docent i investigador doctor amb vinculació permanent.", "correct": true },
      { "text": "No, el Rector ha de ser obligatòriament un economista extern.", "correct": false },
      { "text": "Només si tenen més de 30 anys d'antiguitat.", "correct": false },
      { "text": "Sí, però han de demanar l'excedència com a professors.", "correct": false }
    ]
  },
  {
    "n": 26,
    "question": "Quin d'aquests NO és un cos de funcionari docent universitari?",
    "answers": [
      { "text": "Professorat Agregat (és laboral).", "correct": true },
      { "text": "Catedràtic d'Universitat.", "correct": false },
      { "text": "Professor Titular d'Universitat.", "correct": false },
      { "text": "Tots els anteriors són cossos funcionarials.", "correct": false }
    ]
  },
  {
    "n": 27,
    "question": "L'acreditació de 'Recerca Avançada' emesa per l'AQU és el requisit per optar a una plaça de:",
    "answers": [
      { "text": "Catedràtic Contractat.", "correct": true },
      { "text": "Professor Lector.", "correct": false },
      { "text": "Professor Ajudant.", "correct": false },
      { "text": "Investigador en formació.", "correct": false }
    ]
  },
  {
    "n": 28,
    "question": "Les retribucions bàsiques del PDI funcionari (sou i triennis) es determinen segons:",
    "answers": [
      { "text": "El que estableix la Llei de Pressupostos Generals de l'Estat per al grup A1.", "correct": true },
      { "text": "Els beneficis que obtingui la Universitat cada any.", "correct": false },
      { "text": "El que decideixi cada Rector lliurement.", "correct": false },
      { "text": "El nombre d'estudiants que aproven l'assignatura.", "correct": false }
    ]
  },
  {
    "n": 29,
    "question": "El personal PDI laboral de les universitats públiques catalanes es regeix pel:",
    "answers": [
      { "text": "Conveni Col·lectiu del PDI de les Universitats Públiques Catalanes.", "correct": true },
      { "text": "Reglament d'Estudiants de la UB.", "correct": false },
      { "text": "Codi de Comerç de Catalunya.", "correct": false },
      { "text": "Estatut del PTGAS.", "correct": false }
    ]
  },
  {
    "n": 30,
    "question": "L'edat de jubilació forçosa del PDI funcionari es pot prorrogar fins als:",
    "answers": [
      { "text": "70 anys.", "correct": true },
      { "text": "67 anys.", "correct": false },
      { "text": "75 anys.", "correct": false },
      { "text": "65 anys sense excepció.", "correct": false }
    ]
  },
  /* --- 5 EXTRAS ESTRATÈGICS --- */
  {
    "n": 31,
    "question": "Segons la LOSU, quin és el límit màxim de temporalitat permès per al PDI en una universitat?",
    "answers": [
      { "text": "El PDI amb contracte temporal no pot superar el 8% de la plantilla docent.", "correct": true },
      { "text": "El 40% com es permetia anteriorment.", "correct": false },
      { "text": "No hi ha límit, depèn del pressupost.", "correct": false },
      { "text": "El 20% només per a les escales de suport.", "correct": false }
    ]
  },
  {
    "n": 32,
    "question": "Què succeeix amb els antics 'Catedràtics d'Escola Universitària' segons la normativa actual?",
    "answers": [
      { "text": "Es mantenen en els seus cossos a extingir, amb els mateixos drets que els Catedràtics d'Universitat.", "correct": true },
      { "text": "Han estat obligats a jubilar-se anticipadament.", "correct": false },
      { "text": "S'han integrat automàticament en el PTGAS.", "correct": false },
      { "text": "Han perdut la condició de funcionaris de l'Estat.", "correct": false }
    ]
  },
  {
    "n": 33,
    "question": "La figura del Professorat Substitut s'utilitza exclusivament per:",
    "answers": [
      { "text": "Substituir PDI amb dret a reserva de lloc de treball que estigui en situació de baixa, llicència o excedència.", "correct": true },
      { "text": "Donar feina a doctors joves mentre no hi ha places de lector.", "correct": false },
      { "text": "Reforçar la docència en graus amb molts estudiants.", "correct": false },
      { "text": "Realitzar tasques d'investigació en projectes europeus.", "correct": false }
    ]
  },
  {
    "n": 34,
    "question": "Quina és la proporció de PDI amb vinculació permanent que exigeix la LOSU?",
    "answers": [
      { "text": "Almenys el 51% del PDI de la universitat ha de tenir vinculació permanent.", "correct": true },
      { "text": "El 100% per garantir la qualitat.", "correct": false },
      { "text": "Un 25% és suficient si la resta són doctors.", "correct": false },
      { "text": "La LOSU no especifica proporcions de permanència.", "correct": false }
    ]
  },
  {
    "n": 35,
    "question": "Quin requisit d'idioma és obligatori per al PDI que s'incorpora al sistema universitari de Catalunya?",
    "answers": [
      { "text": "Acreditar el coneixement suficient de les dues llengües oficials (Català i Castellà).", "correct": true },
      { "text": "Només l'anglès nivell C1.", "correct": false },
      { "text": "Cap, la ciència és universal i no requereix idiomes locals.", "correct": false },
      { "text": "Només si el professor és de fora de la Unió Europea.", "correct": false }
    ]
  },
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
  {
    question: "A quina pestanya de Word 2024 trobem les opcions per canviar el tipus de lletra, la mida i l'alineació del paràgraf?",
    answers: [
      { text: "Inici.", correct: true },
      { text: "Inserció.", correct: false },
      { text: "Disseny.", correct: false },
      { text: "Disposició.", correct: false }
    ]
  },
  {
    question: "Quina funció permet aplicar un conjunt de característiques de format (com fons, mida i color) de manera ràpida i homogènia a tot un document?",
    answers: [
      { text: "Estils.", correct: true },
      { text: "Format de caràcter.", correct: false },
      { text: "Revisió.", correct: false },
      { text: "Autoformat.", correct: false }
    ]
  },
  {
    question: "Per configurar els marges d'un document i l'orientació de la pàgina, a quina pestanya hem d'anar?",
    answers: [
      { text: "Disposició (o Configuració de pàgina).", correct: true },
      { text: "Vista.", correct: false },
      { text: "Disseny.", correct: false },
      { text: "Referències.", correct: false }
    ]
  },
  {
    question: "Com es denomina l'espai vertical que hi ha entre les línies d'un text en un paràgraf?",
    answers: [
      { text: "Interlineat.", correct: true },
      { text: "Espaiat posterior.", correct: false },
      { text: "Sangria.", correct: false },
      { text: "Marge intern.", correct: false }
    ]
  },
  {
    question: "Quina eina de Word permet que diversos usuaris revisin un document veient exactament quins canvis ha fet cadascú?",
    answers: [
      { text: "Control de canvis.", correct: true },
      { text: "Correcció automàtica.", correct: false },
      { text: "OneDrive personal.", correct: false },
      { text: "Comparació de macros.", correct: false }
    ]
  },
  {
    question: "Per crear una llista on els elements tenen una jerarquia (per exemple: 1, 1.1, 1.1.1), quina opció utilitzarem?",
    answers: [
      { text: "Llista multinivell.", correct: true },
      { text: "Llista de pics simple.", correct: false },
      { text: "Numeració automàtica.", correct: false },
      { text: "Esquema de taula.", correct: false }
    ]
  },
  {
    question: "Dins d'una taula, quina acció permet convertir dues o més cel·les adjacents en una de sola?",
    answers: [
      { text: "Combinar cel·les.", correct: true },
      { text: "Dividir cel·les.", correct: false },
      { text: "Autoajustar.", correct: false },
      { text: "Distribuir columnes.", correct: false }
    ]
  },
  {
    question: "Si volem que Word generi automàticament un índex amb els títols del document i el seu número de pàgina, hem d'utilitzar:",
    answers: [
      { text: "Taula de contingut.", correct: true },
      { text: "Taula d'il·lustracions.", correct: false },
      { text: "Índex alfabètic.", correct: false },
      { text: "Marcador de posició.", correct: false }
    ]
  },
  {
    question: "Per crear una Taula de Contingut automàtica, és imprescindible que els títols tinguin aplicat:",
    answers: [
      { text: "Un Estil de títol (Títol 1, Títol 2, etc.).", correct: true },
      { text: "Negreta i una mida superior a 14.", correct: false },
      { text: "Un subratllat doble.", correct: false },
      { text: "Una sangria de primera línia.", correct: false }
    ]
  },
  {
    question: "Quina eina s'utilitza per enviar una carta personalitzada a 100 destinataris diferents sense haver d'escriure 100 documents?",
    answers: [
      { text: "Combinar correspondència.", correct: true },
      { text: "Etiquetatge en sèrie.", correct: false },
      { text: "Macro d'enviament.", correct: false },
      { text: "Plantilles dinàmiques.", correct: false }
    ]
  },
  {
    question: "En el procés de 'Combinar correspondència', quin document conté la informació que varia (noms, adreces, etc.)?",
    answers: [
      { text: "Origen de dades (o llista de destinataris).", correct: true },
      { text: "Document principal.", correct: false },
      { text: "Full de format.", correct: false },
      { text: "Document de combinació.", correct: false }
    ]
  },
  {
    question: "Dins de la pestanya 'Referències', quina opció permet citar un text i que aparegui una petita explicació al final de la pàgina actual?",
    answers: [
      { text: "Nota al peu.", correct: true },
      { text: "Nota final.", correct: false },
      { text: "Citació bibliogràfica.", correct: false },
      { text: "Referència creuada.", correct: false }
    ]
  },
  {
    question: "Un document que ja té l'estructura, el logotip i el format predefinit per ser utilitzat com a base per a nous documents s'anomena:",
    answers: [
      { text: "Plantilla.", correct: true },
      { text: "Formulari.", correct: false },
      { text: "Estil global.", correct: false },
      { text: "Còpia mestra.", correct: false }
    ]
  },
  {
    question: "Per desar un document de Word perquè no pugui ser modificat fàcilment i mantingui el format en qualsevol dispositiu, l'exportarem a:",
    answers: [
      { text: "PDF.", correct: true },
      { text: "RTF.", correct: false },
      { text: "TXT.", correct: false },
      { text: "HTML.", correct: false }
    ]
  },
  {
    question: "A quina pestanya trobem l'opció per compartir un document directament a OneDrive o Teams?",
    answers: [
      { text: "Fitxer (o el botó Comparteix de la part superior).", correct: true },
      { text: "Enviament.", correct: false },
      { text: "Vista.", correct: false },
      { text: "Ajuda.", correct: false }
    ]
  },
  {
    question: "Quina funció permet saltar a una part específica del document (com un títol o una imatge) mitjançant un enllaç intern?",
    answers: [
      { text: "Referència creuada.", correct: true },
      { text: "Salt de secció.", correct: false },
      { text: "Marcador de text.", correct: false },
      { text: "Peu de pàgina.", correct: false }
    ]
  },
  {
    question: "Dins de les taules de Word, és possible realitzar càlculs bàsics (com sumes)?",
    answers: [
      { text: "Sí, mitjançant l'eina 'Fórmula' a la pestanya de Disseny de taula / Disposició.", correct: true },
      { text: "No, Word només serveix per a text; cal usar Excel.", correct: false },
      { text: "Sí, però només si la taula té més de 10 columnes.", correct: false },
      { text: "Només si el document es desa en format .xlsx.", correct: false }
    ]
  },
  {
    question: "Quina d'aquestes opcions NO és un tipus d'alineació de paràgraf a Word?",
    answers: [
      { text: "Vertical.", correct: true },
      { text: "Justificada.", correct: false },
      { text: "Centrada.", correct: false },
      { text: "Dreta.", correct: false }
    ]
  },
  {
    question: "Què permet fer l'opció 'Dividir cel·les' en una taula?",
    answers: [
      { text: "Partir una cel·la existent en diverses columnes o files.", correct: true },
      { text: "Separar una taula en dues taules independents.", correct: false },
      { text: "Esborrar el contingut de la cel·la.", correct: false },
      { text: "Canviar el color de la vora de la cel·la.", correct: false }
    ]
  },
  {
    question: "En un formulari de Word, com s'anomenen els elements on l'usuari pot escriure o seleccionar opcions (com quadres de text o llistes desplegables)?",
    answers: [
      { text: "Controls de contingut.", correct: true },
      { text: "Marcs de dades.", correct: false },
      { text: "Etiquetes dinàmiques.", correct: false },
      { text: "Scripts de formulari.", correct: false }
    ]
  },
  {
    question: "L'opció 'Cerca i substitueix' es troba al grup Edició de la pestanya:",
    answers: [
      { text: "Inici.", correct: true },
      { text: "Revisió.", correct: false },
      { text: "Vista.", correct: false },
      { text: "Referències.", correct: false }
    ]
  },
  {
    question: "Si volem veure el document tal com quedarà un cop imprès, quina vista hem d'utilitzar?",
    answers: [
      { text: "Disseny d'impressió.", correct: true },
      { text: "Disseny web.", correct: false },
      { text: "Esquema.", correct: false },
      { text: "Mode de lectura.", correct: false }
    ]
  },
  {
    question: "Quina tecla de drecera (shortcut) s'utilitza normalment per desar un document a Word (versió en espanyol/català)?",
    answers: [
      { text: "Ctrl + S (o Ctrl + G segons versió).", correct: true },
      { text: "Ctrl + P.", correct: false },
      { text: "Ctrl + C.", correct: false },
      { text: "Ctrl + V.", correct: false }
    ]
  },
  {
    question: "La sangria 'Francesa' és aquella on:",
    answers: [
      { text: "La primera línia es manté a l'esquerra i la resta del paràgraf es mou a la dreta.", correct: true },
      { text: "Només es mou la primera línia a la dreta.", correct: false },
      { text: "Tot el paràgraf es mou cap al centre.", correct: false },
      { text: "El text s'ajusta als dos marges simultàniament.", correct: false }
    ]
  },
  {
    question: "On es troben les opcions de 'Sinònims' i 'Comptar paraules'?",
    answers: [
      { text: "Pestanya Revisió.", correct: true },
      { text: "Pestanya Inici.", correct: false },
      { text: "Pestanya Referències.", correct: false },
      { text: "Pestanya Vista.", correct: false }
    ]
  },
  {
    question: "Quina opció de les taules permet ajustar automàticament l'amplada de les columnes al contingut que hi ha escrit?",
    answers: [
      { text: "Autoajustar al contingut.", correct: true },
      { text: "Ajust de línia.", correct: false },
      { text: "Amplada fixa de columna.", correct: false },
      { text: "Distribuir columnes uniformement.", correct: false }
    ]
  },
  {
    question: "En Combinar Correspondència, quina opció permet veure com quedaran les dades reals abans d'acabar la combinació?",
    answers: [
      { text: "Visualització prèvia dels resultats.", correct: true },
      { text: "Verificació d'errors.", correct: false },
      { text: "Editar llista de destinataris.", correct: false },
      { text: "Bloqueig de camps.", correct: false }
    ]
  },
  {
    question: "Quina pestanya de Word NO apareix per defecte i s'ha d'activar per treballar amb formularis i macros?",
    answers: [
      { text: "Desenvolupador (o Programador).", correct: true },
      { text: "Disseny de pàgina.", correct: false },
      { text: "Eines de dades.", correct: false },
      { text: "Multimèdia.", correct: false }
    ]
  },
  {
    question: "L'extensió de fitxer predeterminada per als documents de Word des de les versions recents és:",
    answers: [
      { text: ".docx", correct: true },
      { text: ".doc", correct: false },
      { text: ".dotx", correct: false },
      { text: ".wrd", correct: false }
    ]
  },
  {
    question: "Per afegir una numeració de pàgina que aparegui automàticament a la part inferior de totes les fulles, anirem a:",
    answers: [
      { text: "Inserció > Capçalera i peu de pàgina.", correct: true },
      { text: "Disposició > Pàgina.", correct: false },
      { text: "Disseny > Numeració.", correct: false },
      { text: "Fitxer > Imprimir.", correct: false }
    ]
  },
  {
    question: "Com s'expressa una referència absoluta a la cel·la A1 per evitar que canviï en arrossegar una fórmula?",
    answers: [
      { text: "$A$1", correct: true },
      { text: "#A1", correct: false },
      { text: "!A1", correct: false },
      { text: "@A@1", correct: false }
    ]
  },
  {
    question: "Quina funció utilitzaries per sumar un rang de cel·les només si compleixen un criteri específic?",
    answers: [
      { text: "SUMA.SI", correct: true },
      { text: "TOTAL.SI", correct: false },
      { text: "SUMATORI", correct: false },
      { text: "COMPTA.SI", correct: false }
    ]
  },
  {
    question: "A Excel 2024, quina funció de cerca ha substituït CERCA.V per ser més flexible i no requerir que la columna de cerca estigui a l'esquerra?",
    answers: [
      { text: "CERCA.X", correct: true },
      { text: "BUSCA.MÀX", correct: false },
      { text: "TROBA.DADES", correct: false },
      { text: "INDEX.CERCA", correct: false }
    ]
  },
  {
    question: "Quina eina permet aplicar un color de fons automàticament a les cel·les que contenen un valor superior a 100?",
    answers: [
      { text: "Format condicional.", correct: true },
      { text: "Estils de cel·la.", correct: false },
      { text: "Validació de dades.", correct: false },
      { text: "Autoformat de taula.", correct: false }
    ]
  },
  {
    question: "Per crear un resum ràpid de grans volums de dades que permeti creuar camps i filtrar informació de manera dinàmica, utilitzarem:",
    answers: [
      { text: "Taules dinàmiques (Pivot Tables).", correct: true },
      { text: "Gràfics de barres.", correct: false },
      { text: "Filtres avançats.", correct: false },
      { text: "Consolidació de llibres.", correct: false }
    ]
  },
  {
    question: "Què passa si en una fórmula fem servir una referència relativa com 'B2' i copiem la fórmula una fila cap avall?",
    answers: [
      { text: "La referència canvia automàticament a B3.", correct: true },
      { text: "La referència es manté com a B2.", correct: false },
      { text: "Excel dóna un error de sintaxi.", correct: false },
      { text: "La fórmula s'esborra.", correct: false }
    ]
  },
  {
    question: "Quina d'aquestes funcions serveix per comptar quantes cel·les d'un rang contenen números?",
    answers: [
      { text: "COMPTA", correct: true },
      { text: "COMPTA.SI", correct: false },
      { text: "SUMA", correct: false },
      { text: "VALOR", correct: false }
    ]
  },
  {
    question: "L'eina que permet restringir els valors que un usuari pot introduir en una cel·la (per exemple, només números de l'1 al 10) és:",
    answers: [
      { text: "Validació de dades.", correct: true },
      { text: "Format de cel·la.", correct: false },
      { text: "Protecció de llibre.", correct: false },
      { text: "Filtre automàtic.", correct: false }
    ]
  },
  {
    question: "Per unir el text de dues cel·les diferents (A1 i B1) en una de sola a Excel 2024, quina funció és la més actual?",
    answers: [
      { text: "CONCAT", correct: true },
      { text: "UNEIX", correct: false },
      { text: "SUMA.TEXT", correct: false },
      { text: "VINCULA", correct: false }
    ]
  },
  {
    question: "En una taula dinàmica, com s'anomena l'eina visual que permet filtrar dades prement botons de manera més intuïtiva que els filtres convencionals?",
    answers: [
      { text: "Segmentador de dades (Slicers).", correct: true },
      { text: "Línia de temps.", correct: false },
      { text: "Filtre de camp.", correct: false },
      { text: "Selector de rang.", correct: false }
    ]
  },
  {
    question: "Quina funció de la pestanya 'Disposició de pàgina' permet que les capçaleres d'una taula s'imprimeixin en totes les fulles?",
    answers: [
      { text: "Imprimir títols.", correct: true },
      { text: "Àrea d'impressió.", correct: false },
      { text: "Salts de pàgina.", correct: false },
      { text: "Fons de pàgina.", correct: false }
    ]
  },
  {
    question: "Si volem extreure els 3 primers caràcters d'una cadena de text situada a la cel·la A1, farem servir:",
    answers: [
      { text: "ESQUERRA(A1;3)", correct: true },
      { text: "DRETA(A1;3)", correct: false },
      { text: "MID(A1;1;3)", correct: false },
      { text: "RETALLA(A1;3)", correct: false }
    ]
  },
  {
    question: "Què és Power Query a Excel?",
    answers: [
      { text: "Una eina per connectar, transformar i combinar dades de diferents orígens.", correct: true },
      { text: "Un nou tipus de gràfic en 3D.", correct: false },
      { text: "Un motor de cerca de plantilles a Internet.", correct: false },
      { text: "Un sistema per posar contrasenyes als fitxers.", correct: false }
    ]
  },
  {
    question: "El símbol que indica a Excel que estem introduint una fórmula o funció és:",
    answers: [
      { text: "L'igual (=).", correct: true },
      { text: "El de la suma (+).", correct: false },
      { text: "L'arrova (@).", correct: false },
      { text: "El percentatge (%).", correct: false }
    ]
  },
  {
    question: "Quina combinació de funcions s'utilitzava tradicionalment per fer cerques més potents que CERCA.V, abans de l'arribada de CERCA.X?",
    answers: [
      { text: "INDEX i COINCIDIR.", correct: true },
      { text: "SUMA i PROMIG.", correct: false },
      { text: "SI i I.", correct: false },
      { text: "FILTRE i ORDENA.", correct: false }
    ]
  },
  {
    question: "Dins d'una cel·la, si veiem el símbol '#####', què significa?",
    answers: [
      { text: "Que la columna no és prou ampla per mostrar el contingut.", correct: true },
      { text: "Que la fórmula té un error de divisió per zero.", correct: false },
      { text: "Que el text està escrit en un idioma que Excel no reconeix.", correct: false },
      { text: "Que la cel·la està protegida contra escriptura.", correct: false }
    ]
  },
  {
    question: "Quina funció lògica retorna el valor VERTADER si es compleixen totes les condicions especificades?",
    answers: [
      { text: "I", correct: true },
      { text: "O", correct: false },
      { text: "SI", correct: false },
      { text: "NO", correct: false }
    ]
  },
  {
    question: "Per representar l'evolució d'una dada al llarg del temps (com el pressupost per mesos), quin gràfic és el més recomanat?",
    answers: [
      { text: "Gràfic de línies.", correct: true },
      { text: "Gràfic circular (de formatge).", correct: false },
      { text: "Gràfic de dispersió.", correct: false },
      { text: "Gràfic de mapes.", correct: false }
    ]
  },
  {
    question: "Com podem fixar només la fila d'una cel·la (referència mixta) perquè en arrossegar horitzontalment canviï la columna però no la fila?",
    answers: [
      { text: "A$1", correct: true },
      { text: "$A1", correct: false },
      { text: "$A$1", correct: false },
      { text: "A1$", correct: false }
    ]
  },
  {
    question: "Quina opció permet veure només les files d'una taula que compleixen un criteri (per exemple, només 'Administratius') sense esborrar la resta?",
    answers: [
      { text: "Filtre.", correct: true },
      { text: "Ordenació.", correct: false },
      { text: "Validació.", correct: false },
      { text: "Esquema.", correct: false }
    ]
  },
  {
    question: "La funció PROMIG calcula:",
    answers: [
      { text: "La mitjana aritmètica dels valors d'un rang.", correct: true },
      { text: "El valor que més es repeteix.", correct: false },
      { text: "La suma total dividida per dos.", correct: false },
      { text: "El valor central d'una llista ordenada.", correct: false }
    ]
  },
  {
    question: "Dins d'una taula dinàmica, on hem d'arrossegar un camp si volem que les seves dades apareguin sumades o comptades?",
    answers: [
      { text: "A l'àrea de Valors.", correct: true },
      { text: "A l'àrea de Files.", correct: false },
      { text: "A l'àrea de Columnes.", correct: false },
      { text: "A l'àrea de Filtres.", correct: false }
    ]
  },
  {
    question: "Quina funció de data ens retorna el dia, mes i any actuals segons el rellotge del sistema?",
    answers: [
      { text: "AVUI", correct: true },
      { text: "ARA", correct: false },
      { text: "DIA.ACTUAL", correct: false },
      { text: "DATA", correct: false }
    ]
  },
  {
    question: "Què permet fer l'opció 'Dividir' de la pestanya Vista?",
    answers: [
      { text: "Veure dues parts diferents del mateix full de càlcul simultàniament.", correct: true },
      { text: "Partir una cel·la en dues de més petites.", correct: false },
      { text: "Dividir el llibre en dos fitxers independents.", correct: false },
      { text: "Repartir el pressupost entre diferents departaments.", correct: false }
    ]
  },
  {
    question: "En una fórmula de Excel, quin operador s'utilitza per indicar un rang de cel·les (per exemple, des de A1 fins a A10)?",
    answers: [
      { text: "Els dos punts (:).", correct: true },
      { text: "El punt i coma (;).", correct: false },
      { text: "El guionet (-).", correct: false },
      { text: "L'espai blanc.", correct: false }
    ]
  },
  {
    question: "La funció SI.MULTIPLE és útil per a:",
    answers: [
      { text: "Avaluar diverses condicions sense haver d'anuar molts SI.", correct: true },
      { text: "Multiplicar diverses cel·les alhora.", correct: false },
      { text: "Sumar només els números parells.", correct: false },
      { text: "Crear una llista desplegable.", correct: false }
    ]
  },
  {
    question: "Per canviar el format d'un número perquè aparegui amb el símbol de l'Euro (€), utilitzarem el format de:",
    answers: [
      { text: "Comptabilitat o Moneda.", correct: true },
      { text: "Percentatge.", correct: false },
      { text: "Científic.", correct: false },
      { text: "Fracció.", correct: false }
    ]
  },
  {
    question: "Quina pestanya d'Excel conté les eines per crear gràfics i taules?",
    answers: [
      { text: "Inserció.", correct: true },
      { text: "Dades.", correct: false },
      { text: "Fórmules.", correct: false },
      { text: "Inici.", correct: false }
    ]
  },
  {
    question: "Què és una 'taula estructurada' a Excel?",
    answers: [
      { text: "Un rang de dades convertit en un objecte taula amb propietats i format propis.", correct: true },
      { text: "Qualsevol conjunt de dades escrites en files i columnes.", correct: false },
      { text: "Un full de càlcul protegit amb contrasenya.", correct: false },
      { text: "Un resum fet amb Power BI.", correct: false }
    ]
  },
  {
    question: "A la funció SI(prova_lògica; valor_si_vertader; valor_si_fals), el segon argument és:",
    answers: [
      { text: "El resultat que donarà la funció si la condició es compleix.", correct: true },
      { text: "La condició que s'ha de comprovar.", correct: false },
      { text: "El resultat si la condició no es compleix.", correct: false },
      { text: "Un missatge d'error obligatori.", correct: false }
    ]
  },
  {
    question: "Quin és l'objectiu principal de la renovació del llenguatge administratiu a la UB?",
    answers: [
      { text: "Racionalitzar, clarificar i acostar la institució a la ciutadania amb un llenguatge clar i planer.", correct: true },
      { text: "Augmentar el nombre de paraules tècniques per semblar més professionals.", correct: false },
      { text: "Eliminar completament l'ús del català en els documents oficials.", correct: false },
      { text: "Fer els documents més llargs per incloure tota la normativa possible.", correct: false }
    ]
  },
  {
    question: "Quin tractament s'utilitza de manera generalitzada a la UB per adreçar-se a la persona administrada en català?",
    answers: [
      { text: "El tractament de vós.", correct: true },
      { text: "El tractament de vostè.", correct: false },
      { text: "El tractament de tu.", correct: false },
      { text: "L'ús de títols nobiliaris (Il·lustríssim).", correct: false }
    ]
  },
  {
    question: "En les formes verbals per part de l'emissor del document, quina persona s'ha d'utilitzar de manera sistemàtica?",
    answers: [
      { text: "La primera persona (jo/nosaltres).", correct: true },
      { text: "La tercera persona del singular (l'Administració diu...).", correct: false },
      { text: "La forma passiva sempre.", correct: false },
      { text: "L'impersonal (es fa saber...).", correct: false }
    ]
  },
  {
    question: "Quina és la característica principal de l'estil administratiu pel que fa a la construcció de frases?",
    answers: [
      { text: "Claredat, concisió i senzillesa, evitant frases excessivament llargues.", correct: true },
      { text: "Complexitat gramatical per demostrar autoritat.", correct: false },
      { text: "Ús sistemàtic de la veu passiva.", correct: false },
      { text: "Eliminar la puntuació per guanyar espai.", correct: false }
    ]
  },
  {
    question: "Quin document de transmissió s'utilitza per fer pública una notícia d'interès general?",
    answers: [
      { text: "Anunci.", correct: true },
      { text: "Ofici.", correct: false },
      { text: "Diligència.", correct: false },
      { text: "Recurs.", correct: false }
    ]
  },
  {
    question: "Quina és la diferència clau entre un 'Avís' i un 'Anunci' segons el CUB?",
    answers: [
      { text: "L'avís és més breu, menys formal i per a fets concrets com canvis d'horari o exàmens.", correct: true },
      { text: "L'anunci és només per a la premsa i l'avís per a la web.", correct: false },
      { text: "L'avís té caràcter de norma legal i l'anunci no.", correct: false },
      { text: "No hi ha cap diferència, són sinònims exactes.", correct: false }
    ]
  },
  {
    question: "Quin document comunicatiu s'utilitza formalment entre òrgans administratius o amb altres entitats?",
    answers: [
      { text: "Ofici.", correct: true },
      { text: "Carta.", correct: false },
      { text: "Nota interna.", correct: false },
      { text: "Instrucció.", correct: false }
    ]
  },
  {
    question: "La 'Carta' administrativa es caracteritza per:",
    answers: [
      { text: "Ser una comunicació interpersonal no prevista en la tramitació administrativa formal.", correct: true },
      { text: "Ser el document obligatori per notificar una multa.", correct: false },
      { text: "Tenir sempre una mida ISO A3.", correct: false },
      { text: "Haver d'anar signada pel Rector obligatòriament.", correct: false }
    ]
  },
  {
    question: "Quin document requereix la presència d'una persona en un lloc, dia i hora determinats?",
    answers: [
      { text: "Citació.", correct: true },
      { text: "Convocatòria de reunió.", correct: false },
      { text: "Notificació.", correct: false },
      { text: "Avís.", correct: false }
    ]
  },
  {
    question: "Una 'Convocatòria de reunió' ha d'incloure obligatòriament:",
    answers: [
      { text: "L'ordre del dia.", correct: true },
      { text: "El pressupost de la unitat.", correct: false },
      { text: "La biografia dels assistents.", correct: false },
      { text: "Un resum de la reunió anterior.", correct: false }
    ]
  },
  {
    question: "Quin document de constància recull el que s'ha tractat i acordat en una sessió de treball?",
    answers: [
      { text: "Acta de reunió.", correct: true },
      { text: "Certificat.", correct: false },
      { text: "Informe.", correct: false },
      { text: "Diligència.", correct: false }
    ]
  },
  {
    question: "Quin document 'dóna fe' d'un fet o d'una dada d'un expedient?",
    answers: [
      { text: "Certificat.", correct: true },
      { text: "Diligència.", correct: false },
      { text: "Resolució.", correct: false },
      { text: "Ofici.", correct: false }
    ]
  },
  {
    question: "Quina és la funció d'una 'Diligència'?",
    answers: [
      { text: "Deixar constància de l'execució d'un acte o d'un fet administratiu dins un tràmit.", correct: true },
      { text: "Demandar un dret a l'administració.", correct: false },
      { text: "Avaluar tècnicament una situació.", correct: false },
      { text: "Convocar els membres d'un òrgan.", correct: false }
    ]
  },
  {
    question: "Un 'Informe' es defineix com un document de:",
    answers: [
      { text: "Valoració tècnica o administrativa que serveix de base per a una decisió.", correct: true },
      { text: "Decisió final del procediment.", correct: false },
      { text: "Petició d'informació de l'alumne.", correct: false },
      { text: "Constància de fets passats.", correct: false }
    ]
  },
  {
    question: "Quin document posa fi a un procediment administratiu decidint sobre la qüestió plantejada?",
    answers: [
      { text: "Resolució.", correct: true },
      { text: "Informe.", correct: false },
      { text: "Instrucció.", correct: false },
      { text: "Notificació.", correct: false }
    ]
  },
  {
    question: "Les 'Instruccions' s'utilitzen per a:",
    answers: [
      { text: "Dictar pautes de funcionament intern per a unitats o personal.", correct: true },
      { text: "Comunicar-se amb els ciutadans de manera personal.", correct: false },
      { text: "Demanar un permís de vacances.", correct: false },
      { text: "Certificar les notes d'un alumne.", correct: false }
    ]
  },
  {
    question: "Com s'anomena el document amb el qual una persona s'adreça a la UB per demanar un dret o servei?",
    answers: [
      { text: "Sol·licitud o Petició.", correct: true },
      { text: "Recurs.", correct: false },
      { text: "Ofici.", correct: false },
      { text: "Diligència.", correct: false }
    ]
  },
  {
    question: "Si un interessat considera que un acte administratiu és incorrecte i vol impugnar-lo, ha de presentar un:",
    answers: [
      { text: "Recurs.", correct: true },
      { text: "Informe de queixa.", correct: false },
      { text: "Avís.", correct: false },
      { text: "Conveni.", correct: false }
    ]
  },
  {
    question: "Què és una 'Declaració jurada'?",
    answers: [
      { text: "Una manifestació personal feta sota jurament o promesa de dir la veritat.", correct: true },
      { text: "Un document on el Rector promet millorar la universitat.", correct: false },
      { text: "Una certificació emesa per la Secretaria General.", correct: false },
      { text: "L'acta final d'una reunió de govern.", correct: false }
    ]
  },
  {
    question: "Segons el CUB, per què s'ha d'evitar l'ús excessiu de la veu passiva?",
    answers: [
      { text: "Perquè dificulta la comprensió i l'agilitat de la lectura.", correct: true },
      { text: "Perquè és gramaticalment incorrecte en català.", correct: false },
      { text: "Perquè gasta més tinta en el moment d'imprimir.", correct: false },
      { text: "Perquè només s'ha de fer servir en documents jurídics.", correct: false }
    ]
  },
  {
    question: "Mides de paper: Quina és la mida estàndard ISO per a avisos, cartes i oficis a la UB?",
    answers: [
      { text: "ISO A4.", correct: true },
      { text: "ISO A3.", correct: false },
      { text: "ISO B5.", correct: false },
      { text: "ISO A1.", correct: false }
    ]
  },
  {
    question: "L'objectivitat en el llenguatge administratiu s'aconsegueix amb:",
    answers: [
      { text: "Un tractament igualitari i respectuós.", correct: true },
      { text: "L'eliminació dels noms propis en els documents.", correct: false },
      { text: "L'ús de codis numèrics per a cada tràmit.", correct: false },
      { text: "Evitant signar els documents.", correct: false }
    ]
  },
  {
    question: "Dins la coherència del document, és important fer servir:",
    answers: [
      { text: "Una datació unificada i abreviatures normalitzades.", correct: true },
      { text: "Diferents tipus de lletra per a cada paràgraf.", correct: false },
      { text: "La data escrita en números romans.", correct: false },
      { text: "Abreviatures inventades pel redactor.", correct: false }
    ]
  },
  {
    question: "La documentació de la UB ha de seguir unes normes gràfiques específiques. Com s'anomenen?",
    answers: [
      { text: "Imatge corporativa.", correct: true },
      { text: "Format lliure universitari.", correct: false },
      { text: "Estil gòtic administratiu.", correct: false },
      { text: "Disseny de campus.", correct: false }
    ]
  },
  {
    question: "Els documents de 'transmissió' serveixen principalment per a:",
    answers: [
      { text: "Comunicar informació, fets o actes administratius.", correct: true },
      { text: "Recollir signatures per a una petició.", correct: false },
      { text: "Pagar les nòmines del personal.", correct: false },
      { text: "Avaluar el rendiment dels alumnes.", correct: false }
    ]
  },
  {
    question: "Què és un 'Conveni' en el context de la UB?",
    answers: [
      { text: "Un acord entre la universitat i altres entitats públiques o privades.", correct: true },
      { text: "Un contracte de lloguer d'una fotocopiadora.", correct: false },
      { text: "El document que regula les vacances del PTGAS.", correct: false },
      { text: "Una reunió informal entre degans.", correct: false }
    ]
  },
  {
    question: "La claredat d'un document també depèn de la seva estructura. El CUB aconsella:",
    answers: [
      { text: "Desglossar les idees en diferents paràgrafs per fer la informació assimilable.", correct: true },
      { text: "Escriure tot el text en un sol bloc compacte.", correct: false },
      { text: "No deixar espais en blanc entre seccions.", correct: false },
      { text: "Utilitzar només lletres majúscules.", correct: false }
    ]
  },
  {
    question: "El document que comunica formalment una resolució a l'interessat perquè en tingui coneixement legal és:",
    answers: [
      { text: "Notificació.", correct: true },
      { text: "Avís.", correct: false },
      { text: "Carta de presentació.", correct: false },
      { text: "Diligència de tràmit.", correct: false }
    ]
  },
  {
    question: "L'estil administratiu de la UB respecta la tradició però busca:",
    answers: [
      { text: "Democratitzar les relacions entre l'Administració i les persones.", correct: true },
      { text: "Mantenir el llatí com a llengua preferent.", correct: false },
      { text: "Que ningú entengui els documents sense un advocat.", correct: false },
      { text: "Augmentar el secretisme professional.", correct: false }
    ]
  },
  {
    question: "Quan s'utilitza la mida ISO A5 en una 'Carta'?",
    answers: [
      { text: "Quan el text és molt breu.", correct: true },
      { text: "Només per a cartes enviades a l'estranger.", correct: false },
      { text: "Quan la carta la signa el Rector.", correct: false },
      { text: "Per a comunicacions massives d'exàmens.", correct: false }
    ]
  }, 
  {
    question: "En una 'Convocatòria de reunió', on se sol situar la llista de temes que es tractaran (ordre del dia)?",
    answers: [
      { text: "En el cos del document, numerats correlativament.", correct: true },
      { text: "En un annex separat que s'entrega el dia de la reunió.", correct: false },
      { text: "A l'encapçalament, al costat del logotip de la UB.", correct: false },
      { text: "Al peu de pàgina, després de la signatura.", correct: false }
    ]
  },
  {
    question: "Segons les plantilles de la UB, quina dada NO sol faltar mai en l'encapçalament d'un 'Ofici'?",
    answers: [
      { text: "La referència de l'expedient o de la unitat (codi de referència).", correct: true },
      { text: "L'índex de preus al consum (IPC).", correct: false },
      { text: "El telèfon personal del funcionari que l'escriu.", correct: false },
      { text: "La signatura del conseller de la Generalitat.", correct: false }
    ]
  },
  {
    question: "En quina part de l'estructura d'una 'Acta de reunió' apareixen els noms dels assistents i dels que s'han excusat?",
    answers: [
      { text: "A l'inici, després de les dades d'identificació de la sessió.", correct: true },
      { text: "Al final, com a annex de l'acta.", correct: false },
      { text: "Dins de cada punt de l'ordre del dia.", correct: false },
      { text: "No és obligatori posar els noms, només el total de persones.", correct: false }
    ]
  },
  {
    question: "La 'Notificació' és un document que sempre acompanya a:",
    answers: [
      { text: "Una resolució o un acte administratiu que afecta directament l'interessat.", correct: true },
      { text: "Una carta de felicitació pel curs acadèmic.", correct: false },
      { text: "Un anunci de canvi d'horari de la biblioteca.", correct: false },
      { text: "Una invitació a un acte institucional.", correct: false }
    ]
  },
  {
    question: "En la plantilla d'una 'Sol·licitud', quina és l'estructura lògica del text?",
    answers: [
      { text: "Exposició de motius (Exposo) i petició concreta (Demano).", correct: true },
      { text: "Salutació, cos de la notícia i comiat.", correct: false },
      { text: "Ordre del dia, acords i tancament.", correct: false },
      { text: "Títol, dades tècniques i conclusions.", correct: false }
    ]
  },
  {
    question: "On es col·loca habitualment la 'Datació' (lloc i data) en els documents formals de la UB?",
    answers: [
      { text: "Al final del document, abans de la signatura.", correct: true },
      { text: "A la part superior dreta, abans del logotip.", correct: false },
      { text: "Dins del primer paràgraf del text.", correct: false },
      { text: "Al marge esquerre, en vertical.", correct: false }
    ]
  },
  {
    question: "Si hem de deixar constància en un expedient que s'ha publicat un anunci al tauler d'edictes, quin document farem servir?",
    answers: [
      { text: "Diligència.", correct: true },
      { text: "Certificat.", correct: false },
      { text: "Ofici.", correct: false },
      { text: "Resolució.", correct: false }
    ]
  },
  {
    question: "Quin d'aquests documents té caràcter 'normatiu' intern per a tot el personal d'una unitat?",
    answers: [
      { text: "Instrucció.", correct: true },
      { text: "Informe.", correct: false },
      { text: "Notificació.", correct: false },
      { text: "Avís.", correct: false }
    ]
  },
  {
    question: "En un 'Certificat', quina paraula s'utilitza tradicionalment com a nexe abans de descriure el fet que es certifica?",
    answers: [
      { text: "CERTIFICO: (en majúscules i seguida de dos punts).", correct: true },
      { text: "Dades:", correct: false },
      { text: "Faig saber:", correct: false },
      { text: "Atenció:", correct: false }
    ]
  },
  {
    question: "Les plantilles de la UB segueixen els criteris de 'Llenguatge planer'. Això implica que les frases han de ser preferentment:",
    answers: [
      { text: "Senzilles, amb l'ordre lògic: subjecte, verb i complements.", correct: true },
      { text: "Amb molts adjectius per fer el text més elegant.", correct: false },
      { text: "Extenses per detallar tota la base legal.", correct: false },
      { text: "Sense verbs per ser més directes.", correct: false }
    ]
  },
  {
    question: "A la plantilla d'un 'Anunci', el títol ha de ser:",
    answers: [
      { text: "Clar i destacat, que identifiqui ràpidament el tema.", correct: true },
      { text: "Molt llarg per explicar tota la notícia.", correct: false },
      { text: "Inexistent, es comença directament amb el text.", correct: false },
      { text: "Escrit sempre en llatí.", correct: false }
    ]
  },
  {
    question: "Quin document de la UB sol acabar amb la frase: 'I, perquè consti i tingui els efectes que corresponguin...'?",
    answers: [
      { text: "El Certificat.", correct: true },
      { text: "L'Ofici.", correct: false },
      { text: "La Convocatòria.", correct: false },
      { text: "L'Anunci.", correct: false }
    ]
  },
  {
    question: "En una 'Notificació', és obligatori incloure informació sobre:",
    answers: [
      { text: "Els recursos que es poden interposar contra l'acte notificat.", correct: true },
      { text: "El salari del funcionari que dicta la resolució.", correct: false },
      { text: "La previsió meteorològica del dia de la firma.", correct: false },
      { text: "La llista de tots els alumnes de la facultat.", correct: false }
    ]
  },
  {
    question: "Dins de l'estil UB, com s'escriuen habitualment els càrrecs (Rector/a, Degà/ana, Gerent/a)?",
    answers: [
      { text: "Amb majúscula inicial quan actuen com a títol del document o signatura.", correct: true },
      { text: "Sempre en minúscula en qualsevol part del document.", correct: false },
      { text: "Sempre en negreta i cursiva.", correct: false },
      { text: "Només s'escriu el nom de la persona, mai el càrrec.", correct: false }
    ]
  },
  {
    question: "Si la UB arriba a un acord amb l'Ajuntament de Barcelona per fer pràctiques d'alumnes, el document que signaran és:",
    answers: [
      { text: "Un Conveni.", correct: true },
      { text: "Una Resolució.", correct: false },
      { text: "Una Instrucció.", correct: false },
      { text: "Una Diligència.", correct: false }
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
