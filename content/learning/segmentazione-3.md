---
title: Segmentazione di immagini cliniche (parte 3)
description: Il machine learning applicato alla segmentazione di immagini in ambito clinico
date: 2023-04-10

--- 
# Segmentazione III

Ultima lezione inerente la Segmentazione, quest’oggi parleremo di approcci con Machine Learning e Deep Learning. 

Oggi parleremo di metodi Machine Learning e Deep Learning per segmentazione specifica: per quanto riguarda il primo andremo nel dettaglio e quindi gli algoritmi utilizzati (non supervisionati, che si basano su metodi di clustering), per quanto riguarda il secondo faremo una carrellata (in quanto ci vorrebbe altrimenti un corso specifico per parlarne dettagliatamente).

Per quanto riguarda il **machine learning applicato alla segmentazione** vedremo che uno dei metodi più utilizzati è il **ML Unsupervised**: cioè un apprendimento non supervisionato, dove si lascia decidere all'algoritmo il miglior output date le informazioni in ingresso. 

Esistono diverse tipologie di ML non supervisionato che si possono applicare ma fra queste sicuramente dobbiamo citare il **clustering**. 

## Clustering (Unsupervised ML)
In generale, un metodo di *clustering* (raggruppamento) ha come obiettivo quello di creare un gruppo di popolazione (quindi di estrarre un gruppo da una popolazione) in base a delle caratteristiche specifiche della popolazione, quindi in base a delle features. Queste ultime possono essere features di immagini (estrazione di feature dalle immagini) oppure possono essere delle features che caratterizzano la popolazione secondo altri criteri (età, altezza...).

**N.B.** non necessariamente i metodi di clustering sono utilizzati per la segmentazione ma sono utilizzabili in diversi campi applicativi. 

Nel caso specifico delle immagini cliniche, l'obiettivo è quello di individuare delle caratteristiche comuni all'interno delle immagini (pixel o gruppi di pixel, oppure la distanza tra gli elementi). 

**Suddivisione delle metodologie di clustering in ML:**
- **Hard clustering:** un esempio di questa metodologia è il K-Means. La tecnica consiste nell'estrarre un campione della popolazione e determinare se questo campione appartiene ad un sottogruppo piuttosto che un altro. 
- **Soft clustering:** un esempio di questa metodologia è il GMM (Gaussian Mixture Model). La tecnica consiste nel calcolare una probabilità che il campione che si vuole analizzare appartenga ad un sottogruppo.

Nella segmentazione delle immagini sfruttiamo il metodo di clustering per classificare gruppi di pixel (o voxel) in base a delle *label* o zone di interesse. 

**N.B.** I metodi di segmentazione basati su clustering performano meglio su immagini RGB e non su immagini binarie in quanto l'informazione in essa contenute è maggiore rispetto un'immagine in B/N. In particolare, le immagini **multimodali** sono quelle immagini che forniscono maggiore informazione riguardo i pixel/voxel e dunque è preferibile adottare le metodologie di clustering su questo tipo di immagine clinica. 

### K-Means
Il clustering basato sull'algoritmo K-Means suddivide l'intera popolazione in *k* gruppi scelti dall'operatore. 
Secondo la metrica standard, i cluster devono essere il più vicino possibile ai loro centri di massa (centroide), indipendentemente da quanti elementi vi appartengano. 
Il processo di clustering avviene in maniera iterativa, ricalcolando sempre i centroidi degli elementi considerati. Alla fine del ciclo iterativo, si avrà una condizione per cui tutti i punti individuati avranno la distanza minima dal centroide individuato. 

*Quali sono le caratteristiche del K-Means?*
In generale l'algoritmo del K-Means minimizza il totale della distanza quadratica del cluster e per questo motivo è un algoritmo che converge sempre e non si avrà mai una situazione di loop infinito. K-Means quindi troverà sempre una soluzione: quest'ultima potrebbe cadere in un minimo locale ma ciò dipende da come si inizializzano i centroidi.
Una soluzione per trovare il minimo assoluto è iterare il calcolo del K-Means al fine di assicurarsi che il cluster individuato non sia un minimo locale. 

### Mixture models
L’obiettivo degli algoritmi di *soft clustering* è calcolare i parametri statistici della distribuzione (*la media, la covarianza o un'altra metrica a seconda del tipo di distribuzione che sto considerando*). La Gaussiana è spesso caratterizzata dalla media e dalla deviazione standard (nel caso di più Gaussiane). Questo è ciò che si calcola con il Mixture Models: si considera la covarianza tra Gaussiane.
*Il parametro statistico da considerare dipende dalla distribuzione in analisi*.

### Expectation maximization
In statistica, l'algoritmo di massimizzazione dell'aspettativa (EM) è un metodo iterativo per trovare stime (locali) di massima verosimiglianza o di massima a posteriori (MAP) dei parametri in modelli statistici in cui il modello dipende da variabili latenti non osservate. L'iterazione EM alterna l'esecuzione di un passo di aspettativa (E), che crea una funzione per l'aspettativa della log-liquidity valutata utilizzando la stima corrente dei parametri, e di un passo di massimizzazione (M), che calcola i parametri che massimizzano la log-liquidità prevista trovata nel passo E. Queste stime dei parametri vengono poi utilizzate per determinare la distribuzione delle variabili latenti nel passo E successivo.

![[EM_Clustering_of_Old_Faithful_data.gif]]

L'algoritmo EM viene utilizzato per trovare i parametri di massima verosimiglianza (locale) di un modello statistico nei casi in cui le equazioni non possono essere risolte direttamente. 
In genere questi modelli coinvolgono variabili latenti oltre a parametri sconosciuti e osservazioni note dei dati. In altre parole, o esistono valori mancanti tra i dati, o il modello può essere formulato più semplicemente assumendo l'esistenza di ulteriori punti di dati non osservati. 

Ad esempio, un *mixture model* può essere descritto più semplicemente ipotizzando che a ogni punto di dati osservati corrisponda un punto di dati non osservati, o una variabile latente, che specifichi la componente della mixture a cui appartiene ogni punto di dati.

### Gaussian mixture model
I modelli GMM sono classificati come modelli misti, il che significa che sono costituiti da un numero imprecisato di funzioni di distribuzione di probabilità. I GMM sono principalmente utilizzati per determinare a quale distribuzione di probabilità gaussiana, o normale, appartiene uno specifico elemento dati. Se sono note la media o la varianza, è possibile determinare a quale distribuzione appartiene un dato punto di dati. Tuttavia, nei GMM, queste variabili non sono note, quindi si presume che esista una variabile latente o nascosta per raggruppare i punti di dati in modo appropriato. Sebbene non sia necessario utilizzare l'algoritmo di Expectation-Maximization (EM), questo è comunemente usato per stimare le probabilità di assegnazione di un determinato punto di dati ad uno specifico cluster di dati.   

**Segmentazione del corpo calloso (CC) mediante GMM**
Per capire meglio l’applicazione di questi metodi di clustering vediamo un esempio in cui l’obiettivo era quello di segmentare automaticamente il corpo calloso del cervello. Studiare la sua morfologia/dimensioni/lunghezza, da un punto di vista neurologico è importante perché all’assottigliamento del corpo calloso possono essere associate patologie neurologiche/demenze quindi è una sorta di datazione del cervello dal punto di vista dell’invecchiamento delle cellule neurologiche. Il corpo calloso di un soggetto patologico ha una forma e dimensione diversa da rispetto al corpo calloso di un soggetto sano.
Bisognava sviluppare un algoritmo automatico per segmentare il corpo calloso, vediamo come è stato possibile utilizzare un algoritmo di GMM utilizzando più canali (immagine multimodale) per classificare direttamente i pixel in maniera abbastanza accurata.

Il metodo è stato quello di classificare i voxel che appartengono al corpo calloso tramite GMM. Dobbiamo individuare features (caratteristiche) che possono essere utili per la classificazione.

*Quali features bisogna considerare?* Entra in gioco il fatto che un bioingegnere deve conoscere l’aspetto della biologia e dell’anatomia che vediamo nelle immagini.

**Caratteristica 1:** i voxel che appartengono al corpo calloso sono appartenenti anche alla materia bianca. Un poco sarebbe come un gioco di logica: se sto segmentando un corpo calloso so anche che sto segmentando un sotto insieme della materia bianca (che è molto più del solo corpo calloso perché sono tutti gli assoni che arrivano alla corteccia motoria). Quindi, siccome nelle immagini di RM è molto semplice segmentare la materia bianca con solo un algoritmo di thresholding (o region growing), con un’acquisizione si
vede molto bene una maschera della materia bianca e quindi so che all’interno ci sono anche i pixel del Corpo Calloso.

**Caratteristica 2:** prevede l’utilizzo dell’atlante probabilistico nel quale ho la probabilità che determinati pixel appartengono a determinate strutture. Quindi nell’atlante ho una sorta di pesatura che posso evidenziare come una regione di interesse, comprendendo che i pixel appartengono al corpo calloso. Supponiamo che i pesi che mi tengo siano quelli di questo volume verde, avendo già la materia bianca segmentata, prendendo solo come regione di interesse la parte in verde tolgo tutto il resto e semplifico il problema.

Successivamente metto in gioco ciò che abbiamo visto durante l’esercitazione: tutte le fibre che sono nel corpo calloso, siccome quest’ultimo unisce i due emisferi, destro e sinistro, hanno una direzione preferenziale, ossia quella latero-laterale quindi sono disposte in maniera “sdraiata” tra l’emisfero destro e sinistro. Se io ho anche questa informazione posso dare al mio algoritmo di GMM tutte queste informazioni per fare la classificazione.

Quindi in questo caso lavoriamo con un volume tridimensionale: 
- una caratteristica è White Matter, 
- l’altra feature è l’atlante probabilistico DTI (le fibre, chiamato DTI per dire il sensore estratto dall’immagine pesata in diffusione)

Quindi per ogni paziente avremo una acquisizione RM in T1 dal quale posso estrarre la materia bianca poi abbiamo una acquisizione pesata in diffusione da cui estraggo il DTI e
quindi la direzione delle fibre e infine ho un atlante probabilistico dal quale evidenzio la regione di interesse. Ovviamente devo registrare ogni atlante su ogni paziente per individuare in maniera specifica questa regione di interesse.