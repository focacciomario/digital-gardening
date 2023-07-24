#UMG 

**Lezione precedente:**[[EICA 7]]

## Lezione 8 - Registrazione di immagini

- [[#Registrazione e co-registrazione delle immagini|Registrazione e co-registrazione delle immagini]]
- [[#Classificazione degli operatori di trasformazione di un'immagine|Classificazione degli operatori di trasformazione di un'immagine]]
- [[#1° Classificazione|1° Classificazione]]
	- [[#1° Classificazione#In relazione alla linearità dell'operatore di trasformazione|In relazione alla linearità dell'operatore di trasformazione]]
- [[#2° Classificazione|2° Classificazione]]
- [[#3° Classificazione|3° Classificazione]]
	- [[#3° Classificazione#A cosa serve la registrazione delle immagini in ambito clinico?|A cosa serve la registrazione delle immagini in ambito clinico?]]
- [[#Modalità di registrazione delle immagini|Modalità di registrazione delle immagini]]
	- [[#Modalità di registrazione delle immagini#Metodi intensity-based:|Metodi intensity-based:]]
- [[#Cosa significa progettare un algoritmo di registrazione delle immagini cliniche?|Cosa significa progettare un algoritmo di registrazione delle immagini cliniche?]]
	- [[#Cosa significa progettare un algoritmo di registrazione delle immagini cliniche?#Trasformazione rigida|Trasformazione rigida]]
	- [[#Cosa significa progettare un algoritmo di registrazione delle immagini cliniche?#Trasformazione affine:|Trasformazione affine:]]
	- [[#Cosa significa progettare un algoritmo di registrazione delle immagini cliniche?#Trasformazione proiettiva:|Trasformazione proiettiva:]]
- [[#Registrazione non rigida delle immagini - FFD (Free Form Deformation)|Registrazione non rigida delle immagini - FFD (Free Form Deformation)]]
	- [[#Registrazione non rigida delle immagini - FFD (Free Form Deformation)#Demons registration|Demons registration]]
- [[#B-Spline registration|B-Spline registration]]
	- [[#B-Spline registration#FEM registration|FEM registration]]
	- [[#B-Spline registration#Thin-plate Splines|Thin-plate Splines]]


**Lezione successiva:** [[EICA 9]]

Un problema basilare nel campo del medical imaging è rappresentato dalla registrazione delle immagini. Spesso, infatti, diagnosi, studi, modelli hanno come prerequisito il confronto o la fusione di immagini acquisite sul medesimo oggetto o su oggetti della stessa tipologia. La **registrazione**, il cui scopo è la determinazione di una trasformazione geometrica che allinea i punti delle varie immagini, indica come tale confronto deve essere eseguito.

La registrazione di immagini è un processo che cerca un operatore di trasformazione (tipicamente indicato con $\Omega$) non lineare, in grado di trasferire un dataset di immagini A su un dataset di immagini B, facendone corrispondere i singoli punti. 

Sostanzialmente **registrare un'immagine** significa sovrapporre un'immagine A (acquisita in fase pre-operatoria) su un'immagine B (acquisita in fase intra-operatoria) sfruttando l'operatore $\Omega$. 

L'output fornito dal processo di *registrazione di due immagini* è detta **trasformazione**. Una volta ottenuta la trasformazione, è possibile effettuare la **fusione delle immagini**.

Il processo di *fusione delle immagini* è assimilabile al processo di somma delle due immagini una volta che sono state allineate tramite la *registrazione*. 

Ovviamente la fusione può essere effettuata anche senza registrazione; in questo caso però non ci saranno punti di controllo corrispondenti sull'immagine "fixed". 

### Registrazione e co-registrazione delle immagini
Come detto in precedenza, la *registrazione* è quel processo che cerca un operatore di trasformazione per sovrapporre le due immagini facendone corrispondere i punti della griglia di controllo. 
La **co-registrazione** è quel procedimento che si può effettuare sulle strumentazioni di imaging ibrido: si acquisiscono due immagini (ad esempio MR e SPECT) del paziente posizionato nella medesima posizione, al medesimo istante. Sebbene siano due immagini completamente differenti, è possibile effettuarne la sovrapposizione (o fusione) senza passare dalla registrazione in quanto si da per scontato che il paziente è nella stessa posizione allo stesso istante di acquisizione delle immagini. 

### Classificazione degli operatori di trasformazione di un'immagine

### 1° Classificazione
#### In relazione alla linearità dell'operatore di trasformazione

La prima tipologia di classificazione che si può effettuare riguarda la linearità (o non linearità) dell'operatore di trasformazione delle immagini che si sta cercando. 

- Nel caso di operatore $\Omega$ lineare si parla di **REGISTRAZIONE RIGIDA**
	In questo caso, l'immagine da trasformare si può traslare, ruotare, o rototraslare nel piano e nello spazio: in tutte le circostanze le distanze tra i punti sull'immagine non cambiano. 
	Nel caso della **registrazione rigida** possiamo discernere tre tipologie di trasformazioni: 
	- *Immagine che ruota nel piano* (1 GdL)
	- Immagine che trasla e ruota nel piano (3 GdL)
	- Immagine che roto-trasla nello spazio (6 GdL)
- **REGISTRAZIONE AFFINE E PROIETTIVA:** Il modello affine (Zhang and Rangarajan, 2004) include la traslazione, la rotazione e la scalatura. Il parallelismo verrà preservato se linee diritte dell’immagine reference verranno mappate su linee diritte nell’immagine template. La registrazione affine e proiettiva può arrivare fino a 12 gradi di libertà nello spazio
- **REGISTRAZIONE DEFORMABILE:** le distanze fra i punti dell'immagine possono essere modificate in maniera non lineare una rispetto all'altra. 

### 2° Classificazione
La seconda classificazione che si può evidenziare, parlando di registrazione delle immagini, è correlata al tipo di operazione richiesta. Si parlerà dunque di: 
- **REGISTRAZIONE GLOBALE:** se l'operatore di trasformazione è applicabile a tutti i punti dell'immagine
- **REGISTRAZIONE LOCALE:** se è possibile evidenziare una regione di interesse (ROI - Region Of Interest) all'interno delle immagini da registrare

### 3° Classificazione
Infine, il terzo tipo di classificazione che si può effettuare parlando della registrazione di immagini in ambito clinico è afferente alla modalità di acquisizione dell'immagine stessa: 
- **REGISTRAZIONE MONO-MODALE:** se l'input della registrazione (quindi le due immagini per cui si vuole calcolare l'operatore di trasformazione) è dello stesso tipo (TC-TC, MRI-MRI ecc.)
- **REGISTRAZIONE MULTI-MODALE:** se gli input derivano da modalità di acquisizioni diverse (es. TC-MRI, TC-PET). In questo caso è corretto classificare risonanze acquisite con sequenze diverse.

#### A cosa serve la registrazione delle immagini in ambito clinico?
1. Rendere possibile la sovrapposizione ed il confronto di strutture anatomiche di interesse (anche per follow-up)
2. Integrare all'interno di un'unica immagine, informazioni differenti
3. Sovrapporre/confrontare il piano pre-operatorio effettuato con la situazione in real-time (intra-operatorio)
4. Determinare e visualizzare sul piano la posizione di strumenti chirurgici rispetto alle strutture anatomiche oggetto d'intervento

![[Screenshot 2023-06-04 alle 15.41.21.png]]

### Modalità di registrazione delle immagini
Le modalità di registrazione delle immagini cliniche sono diverse e possono basarsi sulla registrazione di tipo: 
1. **Registrazione manuale:** significa visualizzare i due dataset e spostare manualmente l'oggetto in modo tale che questo corrisponda a dei siti anatomici di interesse. È una trasformazione rigida, la cui accuratezza dipende dall'esperienza e dal giudizio dell'operatore che ne effettua la trasformazione. 
	- La registrazione manuale può fare uso dei **dati DICOM**, infatti ogni scanner o tomografo ha un sistema di riferimento solidale al paziente, consentendo così di allineare i centri dell'immagine
2. **Registrazione automatica:** significa lasciare agli algoritmi di registrazione il compito di allineamento delle immagini. La registrazione automatica può essere distinta in: 
	- **Intensity based:** si calcola l'operazione di trasformazione confrontando iterazione per iterazione i livelli di grigio dei due dataset di immagini. Il confronto avviene sull'intensità dei livelli di grigio delle immagini e si basa sulla minimizzazione di una funzione di disparità
	- **Geometry-based:** si basa sull'identificazione di punti fiduciali artificiali (marcatori, clips) o  su landmark anatomici segmentati (punti, profili, etc). Si stabilisce che questi punti debbano essere allineati.

#### Metodi intensity-based: 
Tipicamente si definisce una griglia che divide l'immagine in zone di interesse (ROI) all'interno della quale tutti i voxel assumeranno la stessa regola di trasformazione che si calcola. 
La griglia può essere risoluta tanto quanto l'immagine (se ho un'immagine 512x512 avrò una griglia 512x512 e dovrò calcolare la trasformazione per ogni voxel dell'immagine perché la griglia e l'immagine corrispondono). La definizione della griglia definisce il dettaglio dell'immagine che si considera nell'ottimizzazione della funzione di costo.
Nella fase di acquisizione, l'immagine ottenuta è riferita all'unità di misura dei *pixel*. La trasformazione che si andrà a calcolare dovrà essere trasformata dallo spazio dei pixel allo spazio reale (unità di misura in *mm*). 
Considerata questa esigenza, prima della trasformazione si effettua una conversione dell'immagine dalle coordinate in *pixel* alle *coordinate fisiche*, si effettua quindi la trasformazione nelle coordinate fisiche, e si riconverte l'output in coordinate pixel per mostrare l'output finale. 

![[Pasted image 20230604172644.png]]

### Cosa significa progettare un algoritmo di registrazione delle immagini cliniche? 

Il processo di registrazione è un processo iterativo che si ferma nel momento in cui raggiunge un certo obiettivo per la funzione di costo.

*Quali sono gli ingredienti da mettere dentro l'algoritmo per stabilire l'iterazione e le condizioni di uscita?*

Innanzitutto si definisce l'immagine fixed (che resterà ferma), di riferimento, deputata ad accogliere l'immagine che si muove (moving image). 
Per la moving image si dovrà calcolare quindi quella trasformazione che porterà la moving sulla fixed. Pertanto, definita B l'immagine moving e A l'immagine fixed, si deve calcolare la trasformazione che porta B su A.

#### Trasformazione rigida
Partiamo dal caso più semplice: quello in cui si chiede all'algoritmo di calcolare una **trasformazione rigida**. Trasformazione rigida significa spostare nello spazio un corpo attraverso l'utilizzo di 6 parametri (3 parametri di traslazione e 3 parametri di rotazione). Definiti gli assi x, y, z come in figura si definisce l'operatore di trasformazione come una matrice 4x4 di cui le prime tre righe e le prime tre colonne si riferiscono alla matrice di rotazione e  l'ultima colonna si riferisce alla matrice di traslazione.

![[Pasted image 20230604173208.png]]

La traslazione è definita come il vettore spostamento tra le due origini del sistema di riferimento fisso (solidale al corpo che sta fermo) e mobile (solidale al corpo che si deve muovere). Questo vettore sarà definito da tre coordinate $(T_x, T_y, T_z)$ che individuano le tre traslazioni che il corpo che si muove deve compiere per far coincidere la sua origine con l'origine del sistema di riferimento *fixed*.

Per la rotazione, invece, esistono diverse convenzioni per definirne gli angoli. Noi facciamo riferimento alla convenzione di Eulero.

![[Pasted image 20230604173705.png]]

Approfondimento sugli angoli di Eulero da Wikipedia: 
<iframe src="https://it.wikipedia.org/wiki/Angoli_di_Eulero#:~:text=Gli%20angoli%20di%20Eulero%20descrivono,di%20riferimento%20coincidono%20nell'origine." style="width:100%; height:300px"></iframe>


La rotazione completa (quindi considerare le tre rotazioni) significa fare una moltiplicazione tra matrici definendo così la rotazione dell'oggetto. Quindi, definire la rototraslazione del corpo rigido significa calcolare la matrice di rotazione, calcolarne le traslazioni e riempire la matrice di rototraslazione.

#### Trasformazione affine: 
Unisce ai parametri di rototraslazione dei parametri di scalatura detti scaling (sulla diagonale) e dei parametri taglio detti shearing (nella parte triangolare della matrice di rotazione).

La proprietà fondamentale che ha la trasformazione affine è che mantiene il parallelismo della griglia tra i punti.

![[Pasted image 20230604174045.png]]

![[Pasted image 20230604174000.png]]

#### Trasformazione proiettiva: 
Nell'ultima riga della matrice si aggiungono i parametri di distorsione (skewing) che non preservano il parallelismo della griglia. 

![[Pasted image 20230604174130.png]]

Combinando la trasformazione rigida di roto-traslazione, con la trasformazione affine e la trasformazione proiettiva otteniamo una trasformazione a 12 GdL. 

In generale, queste trasformazioni lineari, seppur combinate, non sono molto indicate per la registrazione di immagini mediche. 

Per questo motivo è necessario considerare una trasformazione non rigida che risulta essere tutt'altro che banale rispetto alla trasformazione rigida.

### Registrazione non rigida delle immagini - FFD (Free Form Deformation)
La tecnica di registrazione delle immagini non-rigida prevede l'impiego di un modello di deformazione che vada ad aggiungere alla rototraslazione della trasformazione rigida una serie di parametri M che tengono conto, elemento per elemento appartenente alla griglia, di tutti gli spostamenti, deformazioni e scalature presenti. 

**Differenze con la trasformazione affine:**
La trasformazione affine si applica a tutto il volume nello stesso modo. Mentre nella trasformazione non rigida si deve discretizzare l'immagine e, considerando un modello di deformazione, far muovere un cluster di voxel che sono all'interno della stessa cella della griglia nello stesso modo.

Esistono diversi *modelli* di deformazione non rigida: 
- Demons
- B-Spline o Spline
- Thin Plane Splines
- FEM (Finite Element Model)

#### Demons registration
Utilizzando i modelli di "Demons registration" l'immagine viene considerata un insieme di curve di isointensità. I contorni così individuati vengono spinti di un'intensità pari e lungo la direzione individuata dall'equazione dell'optical flow che descrive il moto per ogni pixel dell'immagine verso la sua corrispondente. 

![[Pasted image 20230604182111.png]]

### B-Spline registration
I modelli basati su B-Splines, vanno a costruire la griglia sull'immagine definendo sull'immagine stessa delle B-splines aggiungendo delle pesature proprio all'intersezione dei nodi. Quindi, si vanno a calcolare come le B-splines (curve di terzo grado) si vanno a comportare per fare in modo che i livelli di grigio della fixed corrispondano ai livelli di grigio della moving. Si calcolano perciò i vettori di spostamento per ogni nodo della griglia corrispondente. Alla fine della trasformazione mediante B-Splines si avrà un vettore di spostamento medio corrispondente al nodo della griglia sull'immagine. 

#### FEM registration
Utilizzando la metodologia di registrazione non rigida FEM (Finite Element Model) l’immagine viene segmentata nei diversi tessuti di interesse, si genera il volume delle mesh per lo specifico tessuto e a questi si assegnano le proprietà del materiale che rappresentano dei vincoli di deformazione. Come detto nell’introdurre le trasformazioni deformabili, le forze esterne possono essere sia il gradiente della misura di similarità , sia la distanza tra landmark (landmark anatomici). Il modello FEM si adatta bene alla chirurgia guidata attraverso le immagini quando si seguono e si visualizzano i movimenti dei tessuti e dei distretti anatomici. 

#### Thin-plate Splines
Sono un'unione del metodo basato sulle Bsplines e dei metodi basati per punti (FEM). Con questa tecnica si identificano dei punti sull'immagine fixed che dovranno coincidere sull'immagine moving al termine del processo di registrazione non rigida. Si hanno in questo caso due set di landmark (uno per ogni immagine)

## Metriche di registrazione non rigida
Il metodo di registrazione intensity-based è il più diffuso e si basa sul presupposto che sia possibile definire una metrica tra le immagini. La metrica, in senso lato, va intesa come una generica misura quantitativa che dice quanto bene le immagini, reference e template (trasformata), sono allineate. 

La metrica può basarsi, per esempio, sulle differenze tra le intensità delle immagini (cross correlation, SSD -> Squared Sum Difference), su informazioni statistiche (mutual information), su relazioni nello spazio delle frequenze delle immagini (phase correlation) o su altre informazioni. 

La selezione del tipo di metrica da utilizzare dipende fortemente dal tipo di registrazione che deve essere risolto e dalla modalità di acquisizione delle immagini. 

Alcune metriche hanno un largo spettro di cattura, altre richiedono una inizializzazione vicina alla posizione ottimale. Alcune metriche sono adatte per immagini acquisite con la stessa modalità (mono-modali), altre per diverse modalità (multi-modali). 

Non esiste, in definitiva, una regola ben definita per decidere la metrica da utilizzare. Le seguenti sono le più usate e quelle che si sono rivelate più versatili ed efficienti dal punto di vista dei risultati ottenuti.

#### Somma dei quadrati delle differenze delle intensità
La metrica SSD (acronimo derivante dall’espressione inglese Squared Sum Difference), è utilizzata per co-registrazioni di immagini che condividono la stessa modalità di acquisizione. (mono-modality).
Per stimare tale metrica si calcola la media della somma dei quadrati delle differenze delle intensità tra coppie corrispondenti di punti delle immagini da co-registrare. Date le immagini A e B il valore della SSD è dato da:

$$SSD= \frac{1}{N} \sum_{x} (T(x)-S(t(x)))^{2}$$

**N.B. La differenza delle somme quadrate si utilizza soltanto se le scale di gigio delle immagini sono confrontabili nelle registrazioni mono-modali. Altrimenti è necessario effettuare prima una normalizzazione delle intensità delle immagini.**

#### Coefficiente di correlazione
Il coefficiente di cross-correlazione, è spesso utilizzato per registrazioni intra-modality ma anche mono-modality come SSD. Date due immagini A e B il coefficiente CC è dato dalla seguente espressione matematica:
$$CC= \frac{\sum\limits_{x}(T(x)- \vec T)(S(t(x))-\vec S)}{\sqrt{\sum\limits_{x}(T(x)-\vec T)^{2}\sum\limits_{x}(S(t(x))-\vec S)^2}}$$
dove $Ai$ è l’$i$ − esimo pixel dell’immagine A, $Bi$ è l’$i$ − esimo pixel dell’immagine B, A¯ e B¯ sono i valori medi delle intensità delle immagini A e B rispettivamente, N è il numero di pixel dell’immagine A e T è la trasformazione.

Quindi il CC corrisponde a: 
- Numeratore: correlazione voxel per voxel tra i due volumi da registrare
- Denominatore: radice del prodotto delle singole auto-correlazioni

#### Mutual Information 
La Mutual Information (MI) calcola l’informazione in “comune” tra due immagini A e B. 
Essa misura l’informazione che una variabile casuale (un’intensità dell’ immagine reference) dice rispetto ad un’altra variabile casuale (un’intensità dell’immagine template). Il vantaggio maggiore che si ha nell’usare la MI è che non c’è bisogno di specificare la forma di dipendenza tra le variabili e ciò rende la MI adatta alla registrazione delle immagini multi-modali (ossia provenienti da diversi macchinari, o strumentazione ibrida).

La relazione matematica che spiega la mutual information è la seguente: 
$$MI = H_{T}+ H_{S}- H_{TS}$$

La **mutual information** è una metrica che deriva dalla teoria dell'informazione che si basa sul seguente assunto: poiché la risonanza e la TC descrivono la stessa anatomia, ci deve essere in qualche modo un'informazione identica tra le due che dia congiuntamente la stessa informazione (che è quella che percepiamo con il nostro occhio). 

In generale non c'è un modello di relazione a priori; avremo la massima informazione quando i due dataset sono correttamente registrati.

Per capire cos'è la mutua informazione dobbiamo definire dei concetti. 

**Entropia di Shannon** (Vedi [[Teorema di Shannon]])

Ricordando che l'entropia è: *la quantità di informazione utile contenuta in un segnale*. 

L’informazione contenuta in un segnale viene descritta come la probabilità che un certo evento (e.g. un certo livello di grigio) si verifichi moltiplicata per un fattore peso che è inversamente dipendente dalla probabilità stessa. Tipicamente si utilizza il $log_2$ (è la convenzione più utilizzata, in modo tale che risulti MAX=1 e MIN=0). 
$$H=\sum_{i} \limits -p_{i}\cdot log_2 (p_{i})$$
$$H(I)= - \int \limits p_{I}(i)\cdot log_2 (p_{I}(i) di)$$
**The higher entropy, the more information content**. 

Un sistema composto da elementi differenti è ad entropia massima: non è possibile stabilire a priori il valore degli elementi. 
Un sistema composto, ad esempio, da sole palline verdi, è un sistema ad entropia nulla perché è facile prevedere il prossimo contenuto da prelevare. 

**MASSIMIZZARE LA MUTUAL INFORMATION COINCIDE CON LA MASSIMIZZAZIONE DELL'ENTROPIA CONGIUNTA DI DUE IMMAGINI**.
$H_T$ e $H_S$ sono le entropie delle singole immagini da registrare, mentre $H_TS$ è l'entropia congiunta delle due immagini. 

Quindi, nel caso di informazioni multi-modali, possiamo utilizzare solo la mutua informazione. Ovviamente vale che essa può essere utilizzata anche per immagini mono-modali.


#### Algoritmi di ottimizzazione
Dopo aver definito la metrica, cioè il valore quantitativo che l'algoritmo deve calcolare per dire se le immagini sono sovrapposte bene oppure no, si effettua un confronto con il valore di fit. 
Esistono diversi metodi per "muoversi" sulle funzioni (volumetriche, superfici o lineari).

**Interpolatori**
Gli interpolatori hanno la funzione di calcolare il livello di grigio nella posizione richiesta (pixel o voxel) e determinano l'appartenenza del valore calcolato all'immagine di riferimento. 

Funzioni di interpolazione possono essere: 
- Nearest Neighbour
- Interpolazione trilineare
- Splines e B-Splines


![[Pasted image 20230604215045.png]]

![[Pasted image 20230604214355.png]]
![[Pasted image 20230604214605.png]]