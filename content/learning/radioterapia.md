---
title: Approfondimento sulla radioterapia, applicazioni e sviluppi
description: iORT, brachiterapia, radioterapia esterna, pianificazione, adroterapia, IGRT
date: 2023-04-15

--- 

# Radioterapia

La radioterapia sfrutta radiazioni ionizzanti in grado di danneggiare il patrimonio genetico delle cellule tumorali. La radioterapia rappresenta uno dei metodi più efficaci nel trattamento locale delle neoplasie. 

Scoperte verso il fine '800, le radiazioni X solo negli anni del 1920 sono state utilizzate per l'imaging medico e solo nel 1950 (in Canada) si è ricorso all'uso delle radiazioni ionizzanti per il trattamento terapeutico dei tumori. 

Nel 1953 in Svizzera viene prodotta la prima macchina acceleratrice di elettroni con energia pari a 31 MeV (Mega elettronvolt). 

## Tipi di radioterapia:

### Brachiterapia
Consiste nel portare la sostanza radioattiva nelle vicinanze del tessuto che si vuole sottoporre a trattamento. E' sicuramente un mezzo invasivo, e per ovviare a questo problema è possibile sfruttare degli strumenti miniaturizzati come degli aghi per mettere a contatto solo il tessuto target. 
Ovviamente il tempo di esposizione è strattamente correlato con la dose radioattiva a cui il paziente è soggetto. 
- ##### Brachiterapia interna
Anche detta *brachiterapia endocavitaria* consiste nell'inserire le sorgenti radioattive (cesio, iridio) all'interno di organi cavi come la cervice uterina, esofago, trachea e bronchi. 
- ##### Brachiterapia interstiziale
Consiste nell'impianto di sostanze radioattive (cesio, iridio, iodio, palladio) all'interno del tessuto tumorale


### IORT - Radioterapia Intra-Operatoria
Dopo la rimozione del tumore da parte del chirurgo, la "zona" viene irradiata dirattamente sul letto operatorio attraverso un acceleratore lineare posto vicino al paziente, all'interno della sala chirurgica. Quindi, benché il tumore sia stato rimosso chirurgicamente, la radioterapia viene comunque utilizzata a livello locale in intraoperatorio per sterilizzare meglio il letto tumorale. 

### Radioterapia esterna
La convenzionale radioterapia esterna sfrutta acceleratori lineari di elettroni (LINEAC) per irradiare direttamente i tessuti bersaglio e per generare raggi x (fotoni). 
Nel punto di ***isocentro*** si ha il punto di *focalizzazione* del fascio energetico. Il *collimatore* non è altro che una componente deputata a migliorare la precisione geometrica e limitare la dose assorbita dal paziente. 
Il processo è spesso automatizzato: il robot è dotato di un braccio meccanizzato in grado di ruotare intorno all'isocentro per "colpire" da più angolazioni la massa tumorale. Il robot viene programmato dai tecnici che monitorano l'operazione da una stanza adiacente a dove si sta svolgendo la radioterapia esterna. 
**N.B.** Il trattamento di radioterapia esterna non dura molto, talvolta anche nell'ordine di pochi secondi. 


## Pianificazione ed esecuzione di un trattamento radioterapico esterno convenzionale
 *Basic radiation therapy workflow*

1. **Diagnosi** - Al fine di avere una diagnosi è necessario acquisire delle immagini del paziente mediante CT
2. **CT Imaging** - Attraverso le CT il clinico è in grado di definire il grado del tumore, il fenotipo e altre caratteristiche patologiche. Spesso le immagini della CT vengono unite ad altre fonti di immagine multimodale per identificare correttamente la localizzazione della massa tumorale. 
3. **Structure contouring** - Il radioterapista identifica dunque le strutture da trattare con radioterapia esterna, e costruisce un file DICOM RT (file unico). Questo al suo interno contiene tutti i contorni (label) delle strutture individuate.
4. **Treatment plan generation** - Nel treatment plan entra in gioco il fisico-medico che progetta e pianifica il piano di trattamento radioterapico. In questa fase si utilizza un software denominato TPS e qui si stabilisce la geometria del fascio in base alla struttura anatomica, calcolando la dose necessaria al trattamento. La dose viene calcolata grazie all’immagine CT, che è un‘immagine a raggi x e quindi tramite essa posso misurare la capacità di attenuazione e assorbimento dei fotoni da parte dei tessuti. In realtà la CT non è solo un'informazione anatomica ma è anche una mappa di come vengono assorbiti i raggi x dai tessuti, e riesco a vedere anche quanti raggi mi assorbe il tumore. Tutte queste informazioni vengono scritte nel file DICOM DOSE.
5. **Plan verification** - Il trattamento viene dunque simulato sulla base dei calcoli e delle verifiche precedenti e si procede con il trattamento del paziente. 
6. **Patient treatment**

La fase di *contouring structure* è generalmente svolto con una macchina APS dedicata proprio alla rivelazione dei contorni 3D dei singoli organi. 

## Tecniche di radioterapia esterna

### 3D CRT - Conformazionale
Oggi la radioterapia con i raggi X di alta energia e con l'ausilio delle più recenti tecnologie si può eseguire trattamento in modo **conformazionale (3D CRT - Conformational Radioteraphy)**. 
Ciò significa che conformiamo (adattiamo) il fascio energetico alla forma del contorno del distretto che si vuole irradiare. La confermazione del fascio avviene tramite l'adattamento della forma del collimatore, le cui lamelle mobili vengono movimentate al fine di calcolare la forma corretta. 

### IMRT - Ad intensità modulata
E' una estensione della 3D CRT ma utilizza fasci di radiazioni non uniformi, modulati e calcolati attraverso l'uso di opportuni algoritmi di ottimizzazione per il calcolo inverso della dose assorbita dal paziente. 
La IMRT fa sì che venga modulata la potenza radiante dal fascio e quindi che ci sia più intensità al centro e meno ai bordi a seconda della forma del tumore, si fa attraverso delle lamelle del collimatore, le quali non sono lamelle fisse ma sono mobili e possono basarsi su una tecnica chiamata  *step-and-shoot*. Ricorrendo all'uso di IMRT si riesce a minimizzare tantissimo gli effetti in uscita del fascio, evitando di colpire organi e tessuti sani posti dietro, o affianco, la massa tumorale da irradiare.

### Radioterapia stereotassica 
La stereotassica viene utilizzata quando la massa tumorale richiede un’elevata precisione masse tumorali piccole, massimo 3 cm di diametro, o quando abbiamo ipofrazionamento. La radioterapia stereotassica viene fatta o in una sola seduta ed in questo caso si chiama ***radiochirurgia stereotassica*** oppure con ***poche sedute***. Se è richiesta un’elevata precisione devono utilizzare dei dispositivi che mi devono riferire la zona target, questi possono essere o i caschi stereotassici, oppure la SBRT ( Stereotactic Body Radiation Therapy) cioè frame stereotassici che si possono utilizzare per l’extra- cranico quindi non più brain e che grazie a griglie graduate permettono di riferire la posizione della zona target. Ovviamente una chirurgia stereotassica può anche essere IMRT (intensità modulare). 

#### Arco dinamico 
Il gantry ruota intorno al paziente durante il rilascio della dose somministrata. Molto spesso l'arco dinamico è associato al IMAT (Intensity Modulated Dynamic Arc). 

**N.B.** La dose assorbita è calcolata mediante la legge di Lambert-Beer: la legge di attenuazione quindi il decadimento della dose assorbita in base alla profondità che si attraversa. 

## Evoluzione della radioterapia: adroterapia

**Ultima frontiera: dai fotoni agli adroni** (protoni ad alta energia accelerati mediante acceleratore circolare e non lineare come per i raggi X). 

Gli adroni sono particelle largamente utilizzate per il trattamento di tumori profondi e non sono generati da sorgenti radioattive essendo protoni ad alta energia per definizione.

**Picco di BRAGG (Picco energetico delle particelle, parte finale della curva di Bragg)**
[Approfondimento picchi di bragg](https://scienzapertutti.infn.it/2-adroterapia#:~:text=IL%20PICCO%20DI%20BRAGG,-Le%20particelle%20cariche&text=Grazie%20al%20picco%20di%20Bragg,cui%20si%20trova%20il%20tumore.)
Il picco di Bragg è un picco sulla curva di Bragg, che raffigura la perdita di energia delle radiazioni ionizzanti durante il percorso attraverso la materia. Per i protoni, raggi α, e altri fasci di ioni, **il picco accade immediatamente prima che le particelle si fermino**. Il picco prende il nome da William Henry Bragg che lo scoprì nel 1903.
Quando una particella carica veloce si muove dentro la materia, ionizza gli atomi del materiale e deposita una dose lungo il suo cammino. Un picco accade perché la sezione d'urto aumenta al diminuire dell'energia della particella carica. L'energia persa è inversamente proporzionale al quadrato della velocità, il che spiega come mai il picco accade subito prima dell'arresto della particella.


![[Pasted image 20230613183947.png]]


Gli elettroni, rilasciano in maniera immediata la loro energia e per questo motivo vengono utilizzati in radioterapia per il trattamento di tumori superficiali, o comunque posizionati in distretti non troppo profondi.

Nel caso di masse tumorali molto profonde, si preferirebbe ricorrere alla adroterapia (terapia mediante adroni): che riescono a rilasciare la loro energia solo nel punto dove è localizzata la massa tumorale, evitando il più possibile di colpire tessuti sani adiacenti alla struttura considerata. 

Queste particelle (adroni) presentano due vantaggi fondamentali:

- Poter curare tumori profondi ad elevata energia;  
- Viene rilasciato un picco di energia in corrispondenza di un punto preciso, con il minimo interessamento dei tessuti che vengono attraversati.

Esistono diverse tecniche per rilasciare con precisione la dose desiderata sul tumore andando a sommare tanti piccoli fasci in modo tale da riuscire a trattare una certa profondità desiderata.
Il picco è uno, ma se ne sommano tanti tramite una modulazione particolare si può trattare la profondità desiderata. L’adroterapia, per queste motivazione, è considerato un trattamento ad elevata precisione.

Il gantry stabilisce, in base al piano effettuato dal fisico, il fascio e l’angolazione con cui deve essere trattata la massa tumorale e rilascia l’energia. Non tutti i centri specialistici hanno un gantry mobile o robotizzato, in quanto l’adroterapia può essere fatta anche a fasci fissi tipicamente uno verticale e uno orizzontale. Questo perché grazie alla sua elevata precisione non è necessario progettare in direzioni particolari.

L’adroterapia è un tipo di radioterapia che sta prendendo molto piede perché rende possibile il trattamento di tumori che non sempre riescono ad essere trattati adeguatamente con la radioterapia perché o sono inaccessibili in quanto sono molto profondi o non riescono ad essere trattati perché l’effetto radiobiologico presenta un fattore di peso che dipende dal tipo di particella utilizzato quindi non sempre l’effetto radiobiologico di tutte le particelle è lo stesso.

**N.B.**: Nel caso degli adroni l’effetto radiobiologico, quindi la capacità di indurre ionizzazioni (modifiche) nel DNA, è maggiore.

Mentre la radioterapia è diffusa a livello capillare, praticamente ovunque in tutti i centri del mondo e soprattutto nei paesi industrializzati; l’adroterapia, invece, è un tipo di terapia molto più recente che sta trovando dagli anni 2005 in poi il suo razionale infatti in Europa stanno aumentando i centri di protonterapia e carbonterapia costruiti. In Italia, in particolare, ne abbiamo tre: uno è il centro di adroterapia oncologica a Pavia, un altro è un centro di protoni che si trova a Trento e un altro è un centro di protoni che si trova a Catania che è limitato al trattamento di tumori oculari.


## Errori tipici della radioterapia
1. Setup del paziente (tatuaggio ad esempio)
2. Variazioni morfologiche (il paziente dimagrisce, o ingrassa) - oppure dovute all'ingrossamento o riduzione della massa tumorale
3. Movimenti di organi (vescica piena o vuota, movimenti causati da respirazione ecc)

Per risolvere completamente gli errori si può solo **aggiungere margini di sicurezza**. 

## PTV Concept
- **GTV:** Gross Tumor Volume - è la massa tumorale palpabile, visibile nell'immagine della TAC
- **CTV:** Clinical Target Volume - comprende anche il GTV ma raggruppa anche alcune porzioni del volume che potrebbero comprendere cellule tumorali che potrebbero non essere state visualizzate nell'immagine del planning pre-operatorio
- **PTV:** Planning Target Volume - tiene conto di tutti gli errori geometrici ammissibili (movimenti interni ed esterni del paziente, variazioni dei distretti del paziente ecc)

![[Pasted image 20230613212147.png]]
![[Pasted image 20230613212228.png]]

Per tenere conto di queste deviazioni, utilizzando un approccio poco ingegneristico: aggiungo dei margini di sicurezza a priori. Se questo è il tumore che devo trattare (GTV, cerchio grigio) aggiungo un margine clinico (CTV, in blu) che è il coinvolgimento di tessuti all’interfaccia che deve essere trattato e aggiungo infine un margine molto più grande che mi definisce il Planning Target Volume (PTV). Definisco la regione a massima dose (in viola), quindi la dose nominale che deve prendere il tessuto non è solo quella che vedo sull’immagine ma è quella che vedo sull’immagine più una serie di margini che mi considerano questo movimento.

**PTV**: “planning target volume” è quello che vado a trattare. 
È un concetto geometrico in quanto si vanno a considerare dei margini di sicurezza più ampi che possono tenere in conto sia errori dovuti al posizionamento (i cosiddetti margini esterni) e sia errori dovuti a dei coinvolgimenti interni dei tessuti perché magari c’è stato un cambio di anatomia.

Quando si tratta un tumore extracranico (un tumore cranico di solito non è soggetto a movimento, il posizionamento è sempre lo stesso), per progettare un trattamento si devono aggiungere questi margini di sicurezza che mi tengono conto dei movimenti. Ad esempio, un tumore al polmone si muove quando il paziente respira e il movimento è ancora più accentuato quanto il tumore si trova a livello del diaframma.

Ovviamente, questi margini (sia interni che esterni di setup) non sono sempre applicabili nei casi in cui vicino al tumore c’è un organo considerato di livello di importanza 1 (ad es. il cuore) perché in questo caso si deve cercare limitare al minimo la dose di esposizione di quell’organo e quindi è necessario rivedere i margini di sicurezza sopra descritti. 

## IGRT - Image Guided Radio Therapy

Feedback ad anello chiuso che mi permette di sistemare la forma del mio fascio energetico con le immagini cliniche ottenute. 

E' possibile implementare feedback di controllo per la collimazione delle immagini del planning pre-operatorio con le immagini intra-operatorie al fine di ridurre drasticamente gli errori umani. 
Per fare ciò, è possibile integrare il feedback di controllo tramite sensori a infrarossi e telecamere di controllo. 

L'idea di fondo è quella di monitorare la superficie corporea del paziente per determinare gli spostamenti ed eventuali variazioni di volume causati da movimenti, respirazioni, ingrossamento della vescica ecc. 
(Un pò come il vision tracking, contollo optoelettronico)

ELEKTRA E BARIAN SONO I PRIMI PRODUTTORI DI DISPOSITIVI PER RADIOTERAPIA.