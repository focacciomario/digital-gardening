#UMG 

**Lezione precedente:** [[EICA 1]]

## **Lezione 2** - Caratteristiche delle immagini e operazioni


**Tabella dei contenuti:**
- [[#Caratteristiche dell'immagine|Caratteristiche dell'immagine]]
	- [[#Caratteristiche dell'immagine#Risoluzione spaziale|Risoluzione spaziale]]
	- [[#Caratteristiche dell'immagine#Risoluzione spettare|Risoluzione spettare]]
	- [[#Caratteristiche dell'immagine#Risoluzione radiometrica|Risoluzione radiometrica]]
		- [[#Risoluzione radiometrica#Risoluzione temporale|Risoluzione temporale]]
	- [[#Caratteristiche dell'immagine#Rapporto segnale-rumore|Rapporto segnale-rumore]]
	- [[#Caratteristiche dell'immagine#Contrasto|Contrasto]]
- [[#Operazioni aritmetiche sulle immagini (matrici)|Operazioni aritmetiche sulle immagini (matrici)]]
		- [[#Contrasto#Addizione:|Addizione:]]
		- [[#Contrasto#Sottrazione:|Sottrazione:]]
		- [[#Contrasto#Moltiplicazione:|Moltiplicazione:]]
		- [[#Contrasto#Divisione:|Divisione:]]
- [[#Istogramma e operazioni sull'istogramma|Istogramma e operazioni sull'istogramma]]
	- [[#Istogramma e operazioni sull'istogramma#Modifiche dell'istogramma:|Modifiche dell'istogramma:]]
		- [[#Modifiche dell'istogramma:#Histogram shift:|Histogram shift:]]
		- [[#Modifiche dell'istogramma:#Gamma correction:|Gamma correction:]]
		- [[#Modifiche dell'istogramma:#Contrast stretching:|Contrast stretching:]]
		- [[#Modifiche dell'istogramma:#Equalization:|Equalization:]]


Un' **immagine digitale** è la rappresentazione dell’oggetto mediante una matrice di numeri il cui valore è posto in corrispondenza biunivoca con le caratteristiche specifiche dell’oggetto stesso (variazione discreta) (es: CT,MRI). 

Il campionamento in 2D corrisponde ad una suddivisione dell'immagine in una griglia di pixel. Tanto più è fitta la matrice di punti, maggiore è la risoluzione spaziale dell'immagine. 

Per le immagini 2D vale il [[Teorema di Shannon]] per cui vi devono essere almeno due pixel per la massima frequenza spaziale rappresentata. Per fare ciò si sfrutta il campionamento o quantizzazione del segnale. Nel caso specifico delle immagini, ogni valore quantizzato assume un valore tra 0 e 1 indicato poi come livello di colore. 

### Caratteristiche dell'immagine

#### Risoluzione spaziale

Una proprietà fondamentale delle immagini è la **risoluzione spaziale:** essa è legata lla discretizzazione (o quantizzazione) dell'immagine stessa. Una risoluzione spaziale bassa, genera quello che è detto fenomeno dell'*aliasing* (sfocatura dei bordi e riduzione del contrasto). In questo scenario è più difficile risconoscere i contorni e dunque i dettagli nitidi del soggetto rappresentato nell'immagine. 

In una immagine digitale piu’ piccoli sono i pixel, ovvero quanto piu’ grande e’ la dimensione della matrice di rappresentazione, piu’ la risoluzione e’ alta.

Nel caso più generico di una immagine analogica la risoluzione spaziale è la capacità di distinguere i più piccoli dettagli. 

#### Risoluzione spettare

È una proprietà dell'immagine legata allo spettro in frequenza. Diminuendo la banda passante del sensore di acquisizione dell'immagine vediamo l'immagine più "sfocata", poiché i dettagli ad alta frequenza spaziale vanno persi. 

#### Risoluzione radiometrica

È legata al *range dinamico* o *profondità* dell'immagine. Un'immagine a 16bit ha molte più informazioni di un'immagine a 8bit in scala di grigi. 

##### Risoluzione temporale

La risoluzione temporale dipende dal tempo di acquisizione di una singola immagine (tempo di apertura). La durata del tempo di acquisizione ha una notevole importanza e molte delle energie vengono spese per la sua minimizzazione poiché: 
- Un'acquisizione molto rapida di ogni singola slice consente di ottenere minori **artefatti da movimento** e quindi una maggiore risoluzione spaziale del distretto in esame. Inoltre ciò consentirebbe al paziente di trattenere il respiro per un tempo piuttosto limitato. 
- Riducendo il tempo di ogni singola acquisizione si riduce **il tempo complessivo della diagnosi**. Nel caso delle **CT** o **MRI** si acquisiscono moltissime immagini (sezioni tomografiche) ed il tempo dell'esame è multiplo del tempo di acquisizione di ogni singola fetta. 
	- *Allo stato dell'arte del 2020 per le CT è richiesto un tempo di acqisizione minimo di 1 secondo. Mentre le sezioni di MRI richiedono tempi più lunghi*
- Nel caso di acquisizioni dinamiche (risonanza magnetica funzionale, cineangiografia ecc...) è utile invece **aumentare la risoluzione temporale** delle immagini per la valutazione del movimento, perfusione o diffusione di fluidi e/o sostanze in distretti specifici. Spesso, si utilizzano mezzi di contrasto per individuare tali movimenti. 

Nell'ambito clinico è necessario che un'immagine abbia i dettagli ben definiti, e che gli elementi siano chiaramente contrastati rispetto lo sfondo. L'obiettivo dell'imaging diagnostico è quindi permettere il riconoscimento di forme, strutture e pattern, differenziandoli l'uno dagli altri e rispetto lo sfondo. 

#### Rapporto segnale-rumore

Detta sigma_i la **deviazione standard del rumore** e i_a l'intensità media dell'immagine si considera la quantità:

$$
SNR_{d}= \frac{i_{a} - i_{s}}{\sigma_{i}}
$$
Che consente di valutare l'effetto del rumore in relazione al contrasto del dettagli (utile ad esempio nella rivelazione di piccole lezioni di distretti corporei). 

#### Contrasto

Una misura quantitativa del contrasto si ottiene fissando manualmente (o automaticamente) una regione di interesse (a=ROI, region of interest) all’interno della struttura da evidenziare e confrontando il livello di grigio medio della ROI con quello del fondo (s) resto definito come fondo. Questo richiede che: 
$$CNR= \frac{S_a-S_b}{\sigma_a}$$
Come si può vedere, il contrasto dipende anch'esso dal rumore (sigma) e dalla risoluzione (S). 



### Operazioni aritmetiche sulle immagini (matrici)



##### Addizione: 
$$Q_{i,j} = P_{1 i,j} + P_{2 i,j}$$
Due immagini (matrici) si possono sommare
$$Q_{i,j} = P_{1 i,j} + k$$
Una matrice si può sommare ad una costante, questa può essere rappresentata ad esempio all'opacità. 

##### Sottrazione: 
$$Q_{i,j} = P_{1 i,j} - P_{2 i,j}$$$$
Q_{i,j} = P_{1 i,j} - k$$
##### Moltiplicazione: 
Nel caso di moltiplicazione di Pixel per uno scalare avrà una modifica dell’intensità, la differenza con l’addizione e la sottrazione è che la variazione sarà lineare, per cui basta anche una scalare piccolo per ottenere dei grossi cambiamenti di intensità e quindi un contrasto migliore.

$$
Q_{i,j} = P_{1 i,j} \cdot k $$
##### Divisione: 
Viene fatta una divisione pixel per pixel. Tra tutti gli oggetti si evidenziano solo gli oggetti differenti, tutti quelli uguali non vengono visualizzati.

$$
Q_{i,j} = P_{1 i,j} : k $$
$$Q_{i,j} = P_{1 i,j} : P_{2 i,j}$$

### Istogramma e operazioni sull'istogramma
L’istogramma di un’immagine mostra quante volte un certo livello di intensità (grigio o colore) occorre in un’immagine.
Graficamente viene rappresentato attraverso un diagramma che ha sull’asse delle x l’intervallo di quantizzazione ovvero i livelli di intensità e sull’asse delle y la numerosità (ovvero quanto volte accade un determinato evento).

![[Pasted image 20230513222721.png]]

![[Pasted image 20230513222906.png]]

-   L’analisi dell’istogramma fornisce generalmente utili informazioni sulle proprietà dell’immagine legate alle frequenze dei livelli di grigio
    
-   Un’immagine ha un basso contrasto quando non tutto l’istogramma viene “utilizzato”
    
-   Si perde l’informazione spaziale relativa alla posizione del pixel/voxel

L’analisi dell’istogramma fornisce generalmente delle informazioni complessive sulle proprietà dell’immagine legate alle frequenze dei livelli di grigio o di colore. Per questo motivo viene utilizzata per la modifica a posteriori del contrasto. 

Un’immagine ha un basso contrasto quando non tutto l’istogramma viene utilizzato, il difetto principale di questa proprietà è che si perde l’informazione spaziale relativa alla posizione dei pixel/voxel, cioè sappiamo che sono presenti tutti i pixel ma non conosciamo dove sono posizionati. 

**Se l’istogramma è concentrato su dei livelli di grigio, allora l’immagine è poco contrastata**

**Al contrario se l’istogramma è ben distribuito sulle intensità a disposizione, allora l’immagine sarà ben contrastata.**

#### Modifiche dell'istogramma: 

##### Histogram shift:
Lo *shifting* o "spostamento" dell'istogramma consente di modificare la brillantezza (*brightness*) di un'immagine. Si aggiunge o si sottrae la stessa quantità a tutti i livelli, spostando quindi l'istogramma in tutti i punti della stessa quantità. 

##### Gamma correction:
Correzione gamma, o gamma per breve, è il nome di un'operazione non lineare usata dai sistemi per codificare e decodificare i valori pixel nelle immagini.
Ogni dispositivo che deve visualizzare o registrare immagine, che sia un monitor, una macchina fotografica, uno scanner o un televisore riceve un segnale in ingresso e deve restituire un segnale in uscita che sia più o meno coerente con quello ricevuto. **Questa è la così detta Funzione di trasferimento o Gamma o Curva del Gamma.**

Il gamma, banalmente, è una curva di trasformazione che dato un determinato valore in ingresso restituisce un determinato valore in uscita. Capire il gamma non è affatto semplice, perché è quel valore che più di tutti impatta su ogni aspetto di una catena, o workflow, in ambito foto e video.

![[Pasted image 20230514091946.png]]
![[Pasted image 20230514092022.png]]

L'occhio umano calcola automaticamente la gamma correction, dove il fattore gamma matematicamente è definito come: 
$$\gamma = \frac{log(I)_{out}}{log(I)_{in}}$$
Dove: 
$$I_{out}=I_{in}^{\gamma}$$
Definiamo **COMPRESSIONE DI GAMMA** se: 
$$\gamma < 1 $$
oppure **ESPANSIONE DI GAMMA** se: 
$$ \gamma > 1$$ 
##### Contrast stretching:
Si realizza per aumentare la dinamica di un’immagine il cui istogramma è concentrato in un intervallo limitato dei valori possibili.
Effettuando un'operazione di *contrast stretching* sull'istogramma dell'immagine originale, si espande (mantenendo inalterata la struttura in y) l'istogramma su tutti i valori di x possibili. 
-   Lo stiramento può essere lineare (uniforme) oppure non lineare (si specifica una funzione)

Il **contrast stretching** è spesso utilizzato per migliorare la qualità delle immagini caratterizzate da debole contrasto. L'operatore migliora il contrasto dell'immagine espandendo la gamma dinamica dei livelli di colore su un intervallo più ampio. 

Definendo Gmin e Gmax i punti di massimo e di minimo del livello di colore dell'immagine originale, si può utilizzare una funzione lineare per espandere la dinamica in un nuovo intervallo definito dai punti G'min e G'max. 
$$ P_{out}= (P_{in}-G_{min})(\frac{G'_{max} - G'_{min}}{G_{max} - G_{min}})+ G'_{min}$$
Tipicamente la dinamica viene espansa sull'intero intervallo disponibile [0,255] per cui si ha che: 
$$ P_{out}= (P_{in}-G_{min})(\frac{255}{G_{max} - G_{min}})$$

![[Pasted image 20230514093239.png]]


##### Contrast shrinking:
Se i limiti precedenti risultano essere: 
$$G'_{min} > G_{min} $$
e
$$G'_{max} < G_{max} $$
Si effettua un'operazione inversa allo *stretching* descritto precedentemente, chiamata **shrinking**. 

##### Equalization:

E’ una tecnica che mira a modificare la forma dell’istogramma redistribuendo i valori dei livelli di grigio in modo che l’istogramma sia quanto più uniforme possibile.  
L’obiettivo è quello di migliorare l’immagine a debole contrasto. 

Tuttavia, un’equalizzazione non porta necessariamente ad un miglioramento dell’immagine (Es. immagine con istogramma bimodale).

Lo scopo è quello di ottenere per l'istogramma un andamento quasi costante. Per fare ciò si sostituisce al valore x di livello di grigio un valore y fornito dalla trasformazione seguente: 
$$y = \frac{L}{T} \sum\limits_{i=0}^{x}N_i $$
dove: 

- T: è il numero complessivo dei pixel dell'immagine; 
- L: è il valore massimo dei livelli di grigio dell'immagine;
- N_i: è il numero dei pixel che hanno un livello di grigio uguale a *i*, ossia *H(i)*;

In questo caso la funzione di trasformazione è detta **cumulativa dell'istogramma**.

![[Pasted image 20230514100823.png]]

##### Normalization: 
La normalizzazione è una semplice tecnica di miglioramento di un’immagine che cerca di migliorarne il contrasto eseguendo una **“stiratura” dei valori dei pixel in modo che siano distribuiti su un range noto**, come per esempio, tutto il range dei valori assumibili dai pixel: 0-255.  
E’ un metodo meno sofisticato e più grezzo rispetto all’equalizzazione.
La normalizzazione è comunemente usata per **migliorare il contrasto in un’immagine senza distorcere troppo i valori di intensità dei pixel**.
