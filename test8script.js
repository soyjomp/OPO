const TEST_ID = "t8"; 
const questions = [
 
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