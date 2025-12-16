export interface Procedure {
    category: string;
    name: string;
    codes: string[];
    singleCode: boolean;
    description: string;
    notes: string;
  }
  
  export const procedures: Procedure[] = [
    // Katarakta
    {
      category: 'Katarakta',
      name: 'Fakoemulzifikácia katarakty s implantáciou IOL',
      codes: ['5c735.a'],
      singleCode: true,
      description: 'Stek. jadra šošovky [fakoemulzif.] cez korneálny prístup so zavedením do púzdra fix. šošovky zadnej komory',
      notes: 'Najčastejší oftalmologický výkon'
    },
    {
      category: 'Katarakta',
      name: 'Fakoemulzifikácia + IOL s komplikáciami (napr. synechie)',
      codes: ['5c735.a', '5c674'],
      singleCode: false,
      description: 'Katarakta s uvoľnením zadných synechií medzi dúhovkou a šošovkou',
      notes: 'Viacero kódov pri komplikovanej operácii'
    },
    {
      category: 'Katarakta',
      name: 'Extrakcia katarakty ECCE s implantáciou IOL',
      codes: ['5c734.a'],
      singleCode: true,
      description: 'Vytlač. jadra šošovky [ECCE] a/alebo aspirácia cez korneálny prístup',
      notes: 'Pri tvrdších, matúrnych kataraktách'
    },
    {
      category: 'Katarakta',
      name: 'Odstránenie luxovanej šošovky zo sklovca + IOL',
      codes: ['5c742.a', '5c735.a'],
      singleCode: false,
      description: 'Extrakcia luxovanej šošovky zo sklovca s následnou implantáciou',
      notes: 'Potrebné kódovať oba výkony'
    },
    {
      category: 'Katarakta',
      name: 'Sekundárna implantácia IOL u afakického oka',
      codes: ['5c750.a'],
      singleCode: true,
      description: 'Sek. zavedenie aloplast. šošovky u afakického oka do púzdra fix. šošovky zadnej komory',
      notes: 'Pri afakii po predchádzajúcej operácii'
    },
    {
      category: 'Katarakta',
      name: 'Kapsulotómia sekundárnej katarakty laserom',
      codes: ['5c710'],
      singleCode: true,
      description: 'Kapsulotómia sekundárnej katarakty laserom',
      notes: 'YAG laser kapsulotómia'
    },
  
    // Glaukóm
    {
      category: 'Glaukóm',
      name: 'Trabekulektómia s bazálnou iridektómiou',
      codes: ['5c617.1'],
      singleCode: true,
      description: 'Trabekulektómia s bazálnou iridektómiou bez adjuvantnej medikamentóznej terapie',
      notes: 'Klasická filtračná operácia glaukómu'
    },
    {
      category: 'Glaukóm',
      name: 'Trabekulektómia s kataraktou (kombinovaný výkon)',
      codes: ['5c617.1', '5c735.a'],
      singleCode: false,
      description: 'Súčasná operácia glaukómu a katarakty',
      notes: 'Často vykonávaný kombinovaný výkon - 2 kódy'
    },
    {
      category: 'Glaukóm',
      name: 'Implantácia glaukómového drénu',
      codes: ['5c616'],
      singleCode: true,
      description: 'Filtračná operácia zníženia vnútroočného tlaku s implantátom',
      notes: 'Ahmed, Baerveldt a iné drenážne zariadenia'
    },
    {
      category: 'Glaukóm',
      name: 'Cyklofotokoagulácia',
      codes: ['5c622'],
      singleCode: true,
      description: 'Cyklofotokoagulácia - laserová deštrukcia ciliárneho telieska',
      notes: 'Pri refraktérnom glaukóme'
    },
    {
      category: 'Glaukóm',
      name: 'Laserová trabekuloplastika',
      codes: ['5c633'],
      singleCode: true,
      description: 'Laserotrabekuloplastika',
      notes: 'SLT alebo ALT'
    },
    {
      category: 'Glaukóm',
      name: 'Laserová iridotómia',
      codes: ['5c636'],
      singleCode: true,
      description: 'Laserová iridotómia',
      notes: 'Pri úzkouhlom glaukóme'
    },
    {
      category: 'Glaukóm',
      name: 'Goniotómia',
      codes: ['5c632'],
      singleCode: true,
      description: 'Goniotómia na zníženie vnútroočného tlaku',
      notes: 'Pri vrodenom glaukóme'
    },
  
    // Sietnica
    {
      category: 'Sietnica',
      name: 'Pars plana vitrektómia (PPV)',
      codes: ['5c871.0'],
      singleCode: true,
      description: 'Pars plana vitrektómia roztokom elektrolytov bez chirurgickej manipulácie sietnice',
      notes: 'Základný vitreoretinálny výkon'
    },
    {
      category: 'Sietnica',
      name: 'PPV s endolaserom a tamponádou silikónovým olejom',
      codes: ['5c871.3', '5c84c', '5c833'],
      singleCode: false,
      description: 'Pars plana vitrektómia s implantáciou silikónového oleja, endokoaguláciou a endotamponádou',
      notes: 'Komplexný výkon - 3 kódy'
    },
    {
      category: 'Sietnica',
      name: 'PPV s peelingom epiretinálnej membrány',
      codes: ['5c872.0'],
      singleCode: true,
      description: 'Pars plana vitrektómia s odstránením epiretinálnej membrány',
      notes: 'Peeling ERM'
    },
    {
      category: 'Sietnica',
      name: 'PPV s odstránením silikónového oleja',
      codes: ['5c871.5'],
      singleCode: true,
      description: 'Pars plana vitrektómia s odstránením silikónového oleja',
      notes: 'Druhá fáza po tamponáde'
    },
    {
      category: 'Sietnica',
      name: 'PPV s odstránením subretinálnej membrány',
      codes: ['5c873.0'],
      singleCode: true,
      description: 'Pars plana vitrektómia s odstránením subretinálnej membrány',
      notes: 'Pri subretinálnej fibroze'
    },
    {
      category: 'Sietnica',
      name: 'Sklerálna plomba pri ablácii sietnice',
      codes: ['5c810'],
      singleCode: true,
      description: 'Fixácia sietnice permanentnou plombou',
      notes: 'Externá operácia odlúčenia sietnice'
    },
    {
      category: 'Sietnica',
      name: 'Cerkláž pri ablácii sietnice',
      codes: ['5c812'],
      singleCode: true,
      description: 'Fixácia sietnice serkláźou',
      notes: 'Cirkulárna bandáž'
    },
    {
      category: 'Sietnica',
      name: 'Injekcia anti-VEGF do sklovca',
      codes: ['5c871.6'],
      singleCode: true,
      description: 'Pars plana vitrektómia s aplikáciou medikamentov (intravitreálna injekcia)',
      notes: 'Lucentis, Eylea, Avastin pri AMD, DME'
    },
    {
      category: 'Sietnica',
      name: 'Laserová fotokoagulácia sietnice',
      codes: ['5c843'],
      singleCode: true,
      description: 'Deštrukcia chorého tkaniva na sietnici laserofotokoaguláciou',
      notes: 'Pri diabetickej retinopatii, trhliny sietnice'
    },
    {
      category: 'Sietnica',
      name: 'Kryopexia sietnice',
      codes: ['5c830'],
      singleCode: true,
      description: 'Kryopexia sietnice',
      notes: 'Pri trhlinách sietnice'
    },
  
    // Rohovka
    {
      category: 'Rohovka',
      name: 'Penetrujúca keratoplastika (PKP)',
      codes: ['5c541.0'],
      singleCode: true,
      description: 'Perforujúca transplantácia rohovky bez typizácie HLA',
      notes: 'Plnovrstvová keratoplastika'
    },
    {
      category: 'Rohovka',
      name: 'Predná lamelárna keratoplastika (DALK)',
      codes: ['5c540'],
      singleCode: true,
      description: 'Lamelárna transplantácia rohovky',
      notes: 'Pri zachovanom endoteli'
    },
    {
      category: 'Rohovka',
      name: 'Zadná lamelárna keratoplastika (DMEK, DSAEK)',
      codes: ['5c540'],
      singleCode: true,
      description: 'Lamelárna transplantácia rohovky - zadné vrstvy',
      notes: 'Moderná metóda pri endoteliálnych dysfunkciách'
    },
    {
      category: 'Rohovka',
      name: 'Fototerapeutická keratektómia (PTK)',
      codes: ['5c533'],
      singleCode: true,
      description: 'Fototerapeutická excízia a deštrukcia chorého tkaniva rohovky',
      notes: 'Pri dystrofiách a opacity rohovky'
    },
    {
      category: 'Rohovka',
      name: 'Fotorefraktívna keratoplastika (PRK)',
      codes: ['5c551'],
      singleCode: true,
      description: 'Fotorefraktívna keratoplastika a iná rekonštrukcia rohovky',
      notes: 'Refrakčná chirurgia'
    },
    {
      category: 'Rohovka',
      name: 'LASIK',
      codes: ['5c553'],
      singleCode: true,
      description: 'Keratomileusis rohovky in-situ',
      notes: 'Laserová refrakčná operácia'
    },
    {
      category: 'Rohovka',
      name: 'Implantácia intrastromálnych prstencových segmentov',
      codes: ['5c557'],
      singleCode: true,
      description: 'Implantácia prstencového segmentu do rohovky, intrastromálne',
      notes: 'Pri keratokonuse (ICRS, Intacs)'
    },
    {
      category: 'Rohovka',
      name: 'Amniotická membrána na rohovku',
      codes: ['5c592'],
      singleCode: true,
      description: 'Prekrytie rohovky amniotickou membránou',
      notes: 'Pri defektoch epitelu, ulceráciách'
    },
    {
      category: 'Rohovka',
      name: 'Pterygium - excízia s plastikou spojovky',
      codes: ['5c521'],
      singleCode: true,
      description: 'Operácie pterýgia s plastikou spojovky',
      notes: 'Štandardná technika s autotransplantátom'
    },
  
    // Strabizmus
    {
      category: 'Strabizmus',
      name: 'Operácia šilhania - recesia jedného svalu',
      codes: ['5c310'],
      singleCode: true,
      description: 'Jednoduchý spätný presun na priamom očnom svale',
      notes: 'Základný strabologický výkon'
    },
    {
      category: 'Strabizmus',
      name: 'Operácia šilhania - resekcia jedného svalu',
      codes: ['5c300'],
      singleCode: true,
      description: 'Resekcia na priamom očnom svale',
      notes: 'Posilnenie svalu'
    },
    {
      category: 'Strabizmus',
      name: 'Kombinovaná operácia - 2 priame svaly',
      codes: ['5c370.1'],
      singleCode: true,
      description: 'Kombinovaná operácia na 2 priamych očných svaloch',
      notes: 'Recesia + resekcia na jednom oku'
    },
    {
      category: 'Strabizmus',
      name: 'Kombinovaná operácia - 3+ svaly',
      codes: ['5c370.2'],
      singleCode: true,
      description: 'Kombinovaná operácia na najmenej 3 priamych očných svaloch',
      notes: 'Rozsiahlejšia korekcia'
    },
    {
      category: 'Strabizmus',
      name: 'Operácia na šikmom svale',
      codes: ['5c350'],
      singleCode: true,
      description: 'Jednoduchý presun dozadu na šikmom očnom svale',
      notes: 'Pri vertikálnej deviácii'
    },
  
    // Viečka
    {
      category: 'Viečka',
      name: 'Operácia ptózy viečka - levator',
      codes: ['5c242'],
      singleCode: true,
      description: 'Resekcia levatora aponeurózy pri blefaroptóze',
      notes: 'Korekcia poklesu horného viečka'
    },
    {
      category: 'Viečka',
      name: 'Operácia ptózy - frontalis suspenzia',
      codes: ['5c245'],
      singleCode: true,
      description: 'Záves na m. frontalis s fascia lata pri blefaroptóze',
      notes: 'Pri ťažkej ptóze'
    },
    {
      category: 'Viečka',
      name: 'Blepharoplastika horného viečka',
      codes: ['5c271'],
      singleCode: true,
      description: 'Blefaroplastika horného viečka',
      notes: 'Funkčná alebo kozmetická indikácia'
    },
    {
      category: 'Viečka',
      name: 'Blepharoplastika dolného viečka',
      codes: ['5c272'],
      singleCode: true,
      description: 'Blefaroplastika dolného viečka',
      notes: 'Odstránenie nadbytočnej kože a tuku'
    },
    {
      category: 'Viečka',
      name: 'Operácia entrópia/ektrópia',
      codes: ['5c233'],
      singleCode: true,
      description: 'Korekčné operácie entropia a extropia pomocou retraktorov očných viečok',
      notes: 'Pri stočení viečka'
    },
    {
      category: 'Viečka',
      name: 'Tarsorafia',
      codes: ['5c220.0'],
      singleCode: true,
      description: 'Tarsorafia bez excízie okraja viečka',
      notes: 'Dočasné alebo trvalé zošitie viečok'
    },
    {
      category: 'Viečka',
      name: 'Excízia chalazia',
      codes: ['5c210.0'],
      singleCode: true,
      description: 'Povrchová excízia chorého tkaniva očného viečka bez zasiahnutia okraja viečka',
      notes: 'Odstránenie chalazia'
    },
  
    // Slzné cesty
    {
      category: 'Slzné cesty',
      name: 'Dakryocystorhinostómia (DCR) externá',
      codes: ['5c160.0'],
      singleCode: true,
      description: 'Transkutánna dakryocystorinostómia bez intubácie',
      notes: 'Klasická DCR'
    },
    {
      category: 'Slzné cesty',
      name: 'Dakryocystorhinostómia (DCR) s intubáciou',
      codes: ['5c160.1'],
      singleCode: true,
      description: 'Transkutánna dakryocystorinostómia s intubáciou',
      notes: 'DCR so silikónovou intubáciou'
    },
    {
      category: 'Slzné cesty',
      name: 'Endonazálna DCR',
      codes: ['5c163'],
      singleCode: true,
      description: 'Endonazálna dakryocystorinostómia',
      notes: 'Endoskopická metóda'
    },
    {
      category: 'Slzné cesty',
      name: 'Sondáž slzných ciest',
      codes: ['5c176'],
      singleCode: true,
      description: 'Zavedenie trvalej/dočasnej sondy do slzných ciest',
      notes: 'U detí pri vrodenej obštrukcii'
    },
    {
      category: 'Slzné cesty',
      name: 'Uzáver slzného bodu',
      codes: ['5c190.1'],
      singleCode: true,
      description: 'Permanentný uzáver slzného bodu',
      notes: 'Pri syndróme suchého oka'
    },
  
    // Orbita a bulbus
    {
      category: 'Orbita',
      name: 'Orbitotómia - predný prístup',
      codes: ['5c902'],
      singleCode: true,
      description: 'Orbitotómia transkutánnym predným prístupom',
      notes: 'Pre lézie prednej orbity'
    },
    {
      category: 'Orbita',
      name: 'Orbitotómia - laterálny prístup',
      codes: ['5c904'],
      singleCode: true,
      description: 'Orbitotómia, ostatné (laterálny prístup)',
      notes: 'Pre hlbšie lézie orbity'
    },
    {
      category: 'Orbita',
      name: 'Enukleácia bulbu',
      codes: ['5c920'],
      singleCode: true,
      description: 'Odstránenie očného bulbu [enukleácia] bez zavedenia implantátu orbity',
      notes: 'Pri ťažkom poranení alebo nádore'
    },
    {
      category: 'Orbita',
      name: 'Enukleácia s implantátom',
      codes: ['5c921.0'],
      singleCode: true,
      description: 'Odstránenie očného bulbu so súčasným zavedením implantátu orbity do Tenonovej kapsuly',
      notes: 'S aloplastickým implantátom'
    },
    {
      category: 'Orbita',
      name: 'Eviscerácia bulbu',
      codes: ['5c910'],
      singleCode: true,
      description: 'Odstránenie obsahu oka [eviscerácia] bez zavedenia implantátu orbity',
      notes: 'Zachovanie skléry'
    },
    {
      category: 'Orbita',
      name: 'Eviscerácia s implantátom',
      codes: ['5c911'],
      singleCode: true,
      description: 'Odstránenie obsahu oka so súčasným zavedením implantátu orbity do sklerálneho obalu',
      notes: 'S aloplastickým implantátom'
    },
    {
      category: 'Orbita',
      name: 'Exenterácia orbity',
      codes: ['5c933.0'],
      singleCode: true,
      description: 'Exenterácia orbity bez zavedenia tkaniva/aloplastického materiálu so zachovaním kože viečka',
      notes: 'Pri malígnych nádoroch'
    }
  ];
  
  export const categories = ['all', ...new Set(procedures.map(p => p.category))] 