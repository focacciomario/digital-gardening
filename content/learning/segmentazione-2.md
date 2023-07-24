---
title: Segmentazione di immagini cliniche (parte 2)
description: Metriche di valutazione della segmentazione e ATLAS based segmentation
date: 2023-03-31

--- 
# Segmentazione II

## Filtri morfologici applicati alle immagini
Nell’ambito dell’image processing il termine morfologia matematica denota lo studio della struttura geometrica dell’immagine.E’ uno strumento utile per la rappresentazione e la descrizione della forma di una regione. Si possono ricavare i contorni, lo scheletro, ecc.

E’ uno strumento matematico definito inizialmente su immagini binarie ma facilmente estensibile ad immagini a toni di grigio e quindi a colori.

La percezione visiva richiede la trasformazione di immagini in modo da rendere esplicita l’informazione sulle forme delle regioni (es: oggetti) in essa presenti.

L'obiettivo dell'analisi morfologica delle immagini è distinguere le informazioni significative sulla forma da quelle irrilevanti. La maggior parte delle tecniche per l’analisi ed il processamento della forma delle regioni sono basate sulla realizzazione di un operatore di forma che soddisfi le proprietà richieste.

La struttura dell’immagine viene “sondata” con un insieme di forma definibile dall’utente (elemento strutturante) solitamente codificato da un piccola immagine raster (3×3 o 5×5).

**Vengono definiti 5 operatori principali:** 
1. Dilation
2. Erosion
3. Opening
4. Closing
5. Hit-or-Miss transform

che combinati con diversi elementi strutturanti B trasformano un “oggetto” A in vario modo. **Erosione** e **Dilatazione** sono gli operatori elementari. Operatori più complessi sono definiti come combinazioni di questi ultimi.

### Dilatazione
L’effetto dilatazione è dovuto all’applicazione dell’elemento strutturante B vicino ai bordi.Dalla definizione si evince che l’elemento strutturale viene
ribaltato rispetto alla sua origine, attraverso l’operazione di riflessione, e shiftato di z posizioni attraverso una traslazione. Il risultato dell’operatore è l’insieme delle posizioni z tali che B interseca almeno un elemento di A.
Nel caso di *dilatazione* più è grande il kernel, maggiore sarà l'effetto di dilatazione ottenuto per l'immagine binaria. 

### Erosione
*Erode/Assottiglia gli oggetti*
L’effetto di erosione è dovuto al fatto che quando l’elemento strutturante B viene traslato vicino ai bordi, esso non è completamente contenuto in A.
Erosione e dilatazione sono molto sensibili alla dimensione del kernel e anche dal tipo e dalla forma geometrica dell'elemento strutturante che stiamo considerando. 

### Opening
L'algoritmo di opening è un'erosione seguita da una dilatazione utilizzando lo stesso elemento strutturale. L’effetto dell’opening è di preservare il più possibile regioni di forma simile all’elemento strutturante, e di eliminare quelle differenti. E’ un filtro di smoothing, di cui potenza e tipologia vengono determinati dalla forma e dalle dimensioni dell'elemento strutturante B. 
Un esempio di problema che richiede l’applicazione dell’apertura (*opening*) è l’eliminazione delle linee dall’immagine in figura. In questo caso viene utilizzato un elemento strutturale a forma sferica di raggio pari a quello dei cerchi da preservare, che è maggiore dello spessore delle linee da eliminare.

![[Pasted image 20230611125710.png]]

### Closing
Consiste in una operazione di dilatazione seguita da un erosione utilizzando lo stesso elemento strutturale. L’effetto del closing è di chiudere gli eventuali buchi interni. 

![[Pasted image 20230611125905.png]]

### Pill Holes Plastimatch
All'interno di Plastimatch troviamo una funzione denominata "*pill holes*" e serve proprio a chiudere delle regioni che presentano dei fori all'interno degli elementi segmentati. 

## Metriche di validazione della segmentazione
Quasi sempre si va a confrontare il nostro risultato con i risultato delle segmentazioni manuali. Viene considerata quindi la segmentazione manuale del medico esperto come Ground Truth o anche "Gold Standard".

Quindi io vado a misurare la misurazione fatta da un esperto con la mia segmentazione. Ovviamente, per essere valido, un ground truth è meglio che sia costruito tramite un pool di più esperti perchè ovviamente devo tenere in considerazione il fatto che un esperto possa sbagliare. Quindi tipicamente si assume come ground truth il contornamento medio votato di più esperti (minimo 3 idealmente 7).

Un altro ground truth può essere la segmentazione ottenuta da un altro software di cui noi vogliamo superarne le prestazioni ad esempio computazionali; cioè noi sappiamo che questo software è accettato clinicamente per segmentare (ed è stato già validato) però il nostro algoritmo fa meglio perché dà lo stesso risultato ma in meno tempo.

Qualunque sia il *ground truth* considerato, come faccio a misurare il mio contorno, la mia segmentazione contro la segmentazione dei clinici? 
Possiamo utilizzare diverse metriche fra cui: 
1. Volumi / Centri di massa delle ROI
2. Distanza fra superfici ROI
3. Coefficiente di DICE (il più utilizzato)
4. Curve ROC (che indicano la sensitività o la specificità)

**Curve ROC** e **Coefficiente di DICE** sono le metriche più utilizzate per la valutazione della segmentazione delle immagini: 
- **DICE** coniuga al suo interno sia l'aspetto morfologico che quello volumetrico 
- La *sensitività* e la *specificità* delle **curve ROC** ci forniscono un'indicazione della "*sovrastima / sottostima*" delle ROI segmentate. 

Condizione necessaria ma non sufficiente affinché due segmentazioni siano corrispondenti è che i due centri di massa (quello misurato da noi e quello del ground truth) siano sovrapposti o comunque a distanza minima. Si definisce condizione necessaria ma non sufficiente perché se le figure hanno dimensioni diverse ma stesso centro non vale la segmentazione perchè sono dissimili: una è più piccola rispetto all'altra.

Un'altra metrica spesso utilizzata coinvolge le superfici del volume in analisi: si calcola la distanza tra il *ground truth* e l'oggetto contornato, segmentando le distanze. Esistono diverse distanza che si possono considerare, come la distanza euclidea fra i punti della superficie. 

### Coefficiente di DICE
Con DICE si definiscono quelli che sono i veri negativi (TN),  veri positivi (TP), falsi negativi (FN) e i falsi positivi (FP).

Stabiliti i TN, TP, FP, FN, il coeff. Di DICE non è altro che un numero compreso nell'intervallo 0-1, indicando con 1 una segmentazione perfetta e con 0 una segmentazione totalmente sbagliata. 

Quando si effettua un confronto della procedura di
segmentazione automatica con ground truth (il contorno manuale dell'operatore) è importante che
questo contornamento manuale sia effettuato da più operatori che vengono definiti in gergo RATER (votanti).

Possiamo anche misurare la bontà di questi insieme di contornamenti degli operatori manuali attraverso la deviazione standard; se ho una deviazione bassa tra i vari contornamenti posso dire che c'è un basso errore inter-rater cioè che i contorni differiscono di poco. La deviazione standard può essere utilizzata anche per misurare l'errore quando non sono disponibili più operatori, allora un altro modo per ovviare all'errore sistematico è quello di chiedere allo stesso RATER di eseguire il contornamento più volte in giorni diversi in tempi diversi in maniera tale che si possa mitigare un minimo quello che può essere l'errore sistematico. 

## ATLAS based segmentation
L’Atlas Based Segmentation è un altro metodo di segmentazione delle immagini cliniche.
Si utilizza un atlante che può essere un atlante deterministico o probabilistico; dove vengono segmentate le strutture. 
L'atlante in sostanza consta di due parti: 
1. una parte immagine 
2. una parte di label in cui ho segmentato diverse strutture;

Il paziente soggetto ad analisi di segmentazione è definito **query subject**. Per segmentare l'immagine del paziente basandoci sugli atlanti, si sceglie come immagine fixed quella riferita al query subject e si calcola il vector field che porta l'atlante sul paziente: una volta fatto ciò è possibile utilizzare diverse funzioni per procedere alla segmentazione. 
Durante le lezioni abbiamo visto la funzione `warp` in `Plastimatch`.

Qualora il paziente dovesse essere estremamente *dissimile* rispetto l'atlante (ATLAS) di riferimento: allora la segmentazione basata su atlanti potrebbe causare diverse problematiche. 

### Multi-ATLAS based segmentation
Nella multi-atlas based segmentation si "consultano" diversi atlanti (quindi tanti soggetti diversi fra loro). In questo caso, è come avere tanti votanti o *raters* per il contornamento: 
- Si effettua la registrazione del query subject sui diversi atlas
- Ciascun ATLAS produrrà un risultato diverso rispetto il precedente (ogni atlas è differente)
- Si avranno dunque differenti risultati per il medesimo query subject e per la medesima analisi di segmentazione (come se avessimo consultato diversi medici)
- Il contouring finale scelto sarà prodotto da una procedura di voting come visto in precedenza

Nell'utilizzo della **Multi-ATLAS segmentation** si ha un problema relativo la complessità computazionale ed il tempo di esecuzione del processo di segmentazione. Avere tanti ATLAS significa effettuare diverse consultazioni, svariati contornamenti, diversi warping e infine un'operazione di voting. 

*Quanti ATLAS conviene utilizzare?*
Consultare più di 10 atlanti spesso non ha senso, e non produce risultati soddisfacenti, perché speso l'informazione finale non è migliore in relazione al tempo impiegato.