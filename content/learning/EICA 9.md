#UMG 

**Lezione precedente:**[[EICA 8]]

- [[#Lezione 9 - Segmentazione I|Lezione 9 - Segmentazione I]]
- [[#Metodi di sogliatura:|Metodi di sogliatura:]]
	- [[#Metodi di sogliatura:#Thresholding|Thresholding]]
		- [[#Thresholding#Fixed thresholding|Fixed thresholding]]
		- [[#Thresholding#Global / Isodata thresholding|Global / Isodata thresholding]]
		- [[#Thresholding#Metodo di Otsu|Metodo di Otsu]]
		- [[#Thresholding#Adaptive thresholding|Adaptive thresholding]]
	- [[#Metodi di sogliatura:#Edge-based segmentation  or Edge detection|Edge-based segmentation  or Edge detection]]
	- [[#Metodi di sogliatura:#Filtro di Sobel|Filtro di Sobel]]
	- [[#Metodi di sogliatura:#Filtro di Prewitt|Filtro di Prewitt]]
	- [[#Metodi di sogliatura:#Operatore di Roberts Cross|Operatore di Roberts Cross]]
	- [[#Metodi di sogliatura:#Filtro di Canny|Filtro di Canny]]

**Lezione successiva:** [[EICA 10]]


## Lezione 9 - Segmentazione I

Il processo di segmentazione consiste nell'identificazione di regioni di interesse mediante tecniche computazionali e algoritmi di computer vision. Generalmente si effettua una classificazione dei pixel o voxel in base alle caratteristiche dell'immagine stessa (anatomia, funzionalità, metabolismo ecc). Il prodotto finale che si trova in output alla fine del *processo di segmentazione* sono: 
- contorni
- superfici
- volumi
tutti ben delineati e riconoscibili. 


*Applicazioni della segmentazione nell'imaging clinico:* 
- Supporto al clinico come ***strumento di decision-making*** per stabilire cosa trattare, dove e come
- **Analisi quantitative:** misure lineari, volumi, distanze ecc..
- **Analisi morfologiche** e dello sviluppo nel tempo
- **Modellistica** (FEM, simulazioni dinamiche o cinematiche)
- Realizzazione di protesi e impianti *su misura* del paziente


Le tecniche di base che vedremo per la segmentazione sono: 
1. **Thresholding** (basati sull'istogramma dell'immagine)
2. **Edge-based segmentation** (basati sull'utilizzo di filtri di convoluzione derivativi)
3. **Region-based segmentation** (basati su similarità locali)
4. **Metodi statistici** 
5. **Metodi morfologici** (basati sull'utilizzo di filtri morfologici)

Adesso vediamo nel dettaglio come si articola la **tecnica del thresholding** e come può essere implementata per l'edge detection. 

## Metodi di sogliatura:

### Thresholding 
La sogliatura anche detta in inglese *thresholding* nell'elaborazione digitale delle immagini è un semplice metodo per segmentare un'immagine. 

Da un'immagine a livelli di grigio, la *thresholding* restituisce un'immagine binaria.

Il *parametro chiave* in una *threshold* è la scelta del cosiddetto ***valore di soglia***. Esistono diverse metodologie per la scelta automatica di questo valore, oppure è possibile sceglierlo manualmente a seconda delle necessità ed esigenze applicative.


#### Fixed thresholding
È basata sull'analisi visiva dell'istogramma: se l'immagine è ben contrastata posso scegliere come soglia il punto centrale dei livelli di grigio. In questo caso è possibile individuare anche più di un livello di soglia. 

Questa logica può funzionare bene in un'immagine senza alcun tipo di rumore, altrimenti bisogna optare per soluzioni più sofisticate e risolutive. 

#### Global / Isodata thresholding
Si seleziona una soglia $T_0$ a metà istogramma (*media dell'istogramma*) e si segmenta l'immagine in base a tale soglia. 

#### Metodo di Otsu
Il metodo Otsu è un metodo di sogliatura automatica dell'istogramma nelle immagini digitali.

L'algoritmo presume che nell'immagine da sogliare siano presenti due sole classi e quindi calcola la soglia ottima per separare queste due classi minimizzando la varianza intra classe.

È un metodo di ottimizzazione per la sogliatura delle immagini e fornisce in output un'immagine binaria. 

#### Adaptive thresholding
L'adaptive thresholding è un metodo locale che partiziona l'immagine in più *settori* e si applica un metodo "a soglia" calcolando dunque una soglia diversa per ciascun settore individuato nell'immagine. Un approccio di questo genere risolverebbe la dipendenza dalla luminosità dell'immagine ma provoca comunque una dipendenza dal rumore di fondo dell'immagine in analisi. 

Per ottimizzare il processo di soglia di un'immagine clinica in presenza di forte rumore, è possibile utilizzare le tecniche di smoothing iterativo. In questo modo si ottengono immagini binarie ben suddivise e contrastate in relazione ai bordi e contorni presenti al suo interno. 

### Edge-based segmentation  or Edge detection
Nella segmentazione basata sui bordi, i confini o i bordi delle immagini sono significativamente diversi l'uno dall'altro e anche dallo sfondo dell'immagine. Questo fatto viene utilizzato per eseguire il rilevamento dei bordi su immagini con diversi livelli di intensità e discontinuità sui bordi.

Lo scopo degli operatori di **edge segmentation** è generare un'immagine di bordi (**edge image**): una immagine in cui il livello di grigio di ogni punto è proporzionale alla discontinuità tra livelli di grigio presenti in quel punto.

Si basano sull'applicazione di filtri di convoluzione e l'obiettivo è calcolare la derivata locale (filtri derivativi dell'immagine). 

![[Pasted image 20230607184540.png]]
![[Pasted image 20230607184621.png]]

Questo rappresentato è il caso per segnali monodimensionali, tuttavia nelle immagini (*segnali bidimensionali*) devono essere considerate le derivate parziali del segnale per x,y nel caso 2D. 

L'operatore gradiente è il vettore per cui le componenti sono le derivate parziali nelle diverse direzioni (2 nel caso di immagini 2D, 3 nel caso di immagini 3D). 

$$\nabla I[x,y] = [\frac{\delta I[x,y]}{\delta x},\frac{\delta I [x,y]}{\delta y}] $$
Per calcolare localmente la derivata corretta si effettuerà un'operazione di convoluzione (prodotto fra matrici). 

Si valutano così come cambiano i livelli di grigio lungo X e lungo Y. Calcolando la tangente dell'angolo, si può determinare come varia l'inclinazione del gradiente, che corrisponde proprio alla fase del vettore. 

$$\theta(x,y)= arctan_{q}(\nabla y, \nabla x)$$
L'operatore $arctan_q$ restituisce l'angolo compreso da (0,0) a (a,b).  

![[Pasted image 20230611102322.png]]

### Filtro di Sobel
L'operatore di Sobel è un algoritmo usato per elaborare immagini digitali, in particolare per effettuare il riconoscimento dei contorni (Edge detection). Dal punto di vista tecnico è un operatore differenziale, che calcola un valore approssimato del gradiente di una funzione che rappresenta la luminosità dell'immagine. In ogni punto dell'immagine, l'operatore di Sobel può corrispondere al vettore gradiente oppure alla norma di tale vettore. L'algoritmo utilizzato dall'operatore di Sobel è basato sulla convoluzione dell'immagine con un piccolo filtro, separato e di valore intero, applicato sia in direzione verticale che orizzontale, ed è quindi "economico" in termini di potenza di calcolo necessaria. D'altra parte, la precisione con cui è calcolato il gradiente è relativamente bassa, specialmente quando l'immagine è soggetta a variazioni rapide e frequenti.

L'operatore calcola il gradiente della luminosità dell'immagine in ciascun punto, trovando la direzione lungo la quale si ha il massimo incremento possibile dal chiaro allo scuro, e la velocità con cui avviene il cambiamento lungo questa direzione. Il risultato ottenuto fornisce una misura di quanto "bruscamente" oppure "gradualmente" l'immagine cambia in quel punto, e quindi della probabilità che quella parte di immagine rappresenti un contorno, e fornisce anche un'indicazione del probabile orientamento di quel contorno. In termini matematici, il gradiente di una funzione di due variabili (qui la funzione luminosità dell'immagine) è in ciascun punto dell'immagine un vettore bi-dimensionale le cui componenti sono le derivate del valore della luminosità in direzione orizzontale e verticale. In ciascun punto dell'immagine questo vettore gradiente punta nella direzione del massimo possibile aumento di luminosità, e la lunghezza del vettore corrisponde alla rapidità con cui la luminosità cambia spostandosi in quella direzione. Ciò significa che nelle zone dell'immagine in cui la luminosità è costante l'operatore di Sobel ha valore zero, mentre nei punti posti sui contorni è un vettore orientato attraverso il contorno, che punta nella direzione in cui si passa da valori di scuro a valori di chiaro.
![[Pasted image 20230611102644.png]]


### Filtro di Prewitt
![[Pasted image 20230611102752.png]]


### Operatore di Roberts Cross


![[Pasted image 20230611103054.png]]

L'operatore Roberts Cross esegue una misura del gradiente spaziale 2-D semplice e veloce da calcolare su un'immagine. In questo modo evidenzia le regioni ad alta frequenza spaziale, che spesso corrispondono ai bordi. Nel suo uso più comune, l'ingresso dell'operatore è un'immagine in scala di grigi, così come l'uscita. I valori dei pixel in ogni punto dell'uscita rappresentano la grandezza assoluta stimata del gradiente spaziale dell'immagine di ingresso in quel punto.

In teoria, l'operatore è costituito da una coppia di kernel di convoluzione 2×2, come mostrato nella figura sopra. Come si può notare, un kernel è semplicemente uguale all'altro, ruotato di 90°. L'operatore di Roberts Cross è molto simile all'operatore di Sobel.

Questi kernel sono progettati per rispondere al massimo ai bordi che corrono a 45° rispetto alla griglia di pixel, un kernel per ciascuno dei due orientamenti perpendicolari. I kernel possono essere applicati separatamente all'immagine di ingresso, per produrre misure separate della componente del gradiente in ciascuna orientazione (chiamate Gx e Gy). Queste misure possono poi essere combinate insieme per trovare la grandezza assoluta del gradiente in ogni punto e l'orientamento di tale gradiente. La grandezza del gradiente è data da:
$$|G|=\sqrt{ (G_{x}^2+G_{y}^{2})}$$
Spesso, tutti gli algoritmi per la edge detection sono altamente sensibili al **rumore di fondo** di un'immagine, per cui prima di effettuare qualsiasi operazione di convoluzione, è buona prassi applicare sull'immagine un filtro di smoothing per rimuovere il rumore prima di applicare qualsiasi operatore di derivazione per la *edge detection*.

In realtà i  filtri di **Sobel** e **Prewitt** [[EICA 9#Filtro di Sobel]] [[EICA 9#Filtro di Prewitt]] hanno già nella loro definizione del kernel le operazioni di smoothing e derivazione. Questo è molto importante per definire la *potenza* dei filtri nello spettro della frequenza. 

### Filtro di Canny
Nell'elaborazione di immagini, l'algoritmo di Canny è un operatore per il riconoscimento dei contorni (edge detection) ideato nel 1986 da John F. Canny. Utilizza un metodo di calcolo multi-stadio per individuare contorni di molti dei tipi normalmente presenti nelle immagini reali. Canny ha anche prodotto una teoria del riconoscimento dei contorni che si propone di spiegare i fondamenti di questa tecnica.
Lo scopo di Canny era quello di trovare il miglior algoritmo possibile per riconoscere i contorni delle immagini. In questo contesto "migliore" può significare:

- **buon riconoscimento** - l'algoritmo deve individuare e "marcare" quanti più contorni possibile nell'immagine
- **buona localizzazione** - i contorni marcati devono essere il più vicini possibile ai contorni reali dell'immagine.
- **risposta minima** - un dato contorno dell'immagine deve essere marcato una sola volta, e, se possibile, il rumore presente nell'immagine non deve provocare il riconoscimento di falsi contorni.

Il metodo di Canny produce edge connessi che possono essere efficacemente utilizzati per le successive fasi di elaborazione.

L’approccio prevede le seguenti fasi: 
1. **Smoothing gaussiano dell’immagine**: un filtro gaussiano di smoothing viene applicato all'immagine per sopprimere gli effetti dati dal rumore 
2. **Calcolo del gradiente**: dall'immagine così ottenuta è calcolata la derivata prima della funzione luminosità (per esempio con una maschera di Sobel). 
3. **Soppressione dei non-massimi in direzione ortogonale all’edge**: trovata la frequenza del cambiamento di luminosità, i punti di edge devono essere localizzati in corrispondenza dei punti di massimo; questa operazione è performata eliminando i punti che non sono di massimo tramite un procedimento iterativo che confronta i valori della derivata prima tra pixel all'interno di un neighborhood.
4. **Selezione degli edge significativi mediante isteresi**: i valori dei punti di massimo trovati in precedenza sono confrontati con due valori di soglia, una alta ed una bassa; tutti i pixel di valore più basso della soglia minore sono scartati, mentre quelli con valore più alto della soglia superiore sono identificati come punti di edge. I pixel compresi fra i due valori sono etichettati come punti edge solo se adiacenti ad altri pixel di valore maggiore della soglia alta. Questo tipo di thresholding è conosciuto col nome di sogliatura adattiva tramite isteresi.

Grazie all'isteresi, il risultato ottenuto presenta molte meno linee spezzate rispetto ai metodi di sogliatura singola: può capitare che pixel non siano marcati come edge perchè il valore della loro derivata prima è di poco minore rispetto alla soglia, per cui anche se fanno parte dei bordi di un oggetto non appariranno nel risultato finale.

Sebbene siano passati 26 anni, questa procedura è tutt'oggi utilizzata per la ricerca di punti di edge all'interno di un'immagine. Nella libreria **OpenCV** l'*algoritmo di Canny* è implementato all'interno della funzione cvCanny().


