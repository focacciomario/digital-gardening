---
title: Filtri immagini 2D - FFT e convoluzione 2D
description: Brevi cenni matematici al filtraggio delle immagini 2D
date: 2023-03-23

--- 


# Lezione 3 - Filtraggio di immagini 2D: FFT e convoluzione 2D


## Richiami di analisi dei segnali

Per la trattazione dell'argomento relativo i filtri delle immagini 2D è necessario fare una digressione teorica sull'*analisi dei segnali* e la più nota **Serie di Fourier**, utile a capire come un segnale periodico può essere rappresentato. 

### Serie di Fourier

Secondo la teoria di Fourier, un segnale periodico può essere rappresentato da una serie di sinusoidi in frequenza pari o multipli della frequenza del segnale in analisi (armoniche del segnale). 
	Sia f(x) un segnale periodico con frequenza f1, allora questo può essere scomposto in serie secondo la seguente: 
	$$x(t)=a_{0}+\sum\limits_{0}^{\inf}a_{n}sin(\omega t+\phi)$$

Volendo esplicitare ogni singolo termine della sommatoria si avrebbe un risultato del tipo: 
$$s(t)=a_{0}+ a_{1}sin(\omega t + \phi_{1)}+ a_{2}sin(2 \omega t + \phi_{2)}+ a_{3}sin (3 \omega t + \phi_{3)}+...$$
###### Applicando le formule di sottrazione
Si ottiene una forma del tipo: 
$$sin(\omega t + \phi)=sin(\omega t)cos(\phi) + cos(\omega t) sin(\phi) $$
dove $cos(\phi)=a$ e $sin(\phi)=b$ quindi in definitiva, la forma di Fourier può essere riscritta come: 
$$x(t)=a_{0}+\sum\limits_{0}^{\inf}a_{n}sin(\omega t)+b_{n}cos(\omega t)$$

Ponendo dunque $\omega= 2\pi f_1$ e ricordando che $e^{jwt}= sin(\omega t) +jcos(\omega t)$ si può riscrivere secondo la **notazione di eulero** la forma compatta della sommatoria: 

### Notazione di Eulero
$$x(t)= \sum\limits_{n=-\infty}^{\infty}C_{n}e^{-j2\pi nf_{1}t} $$
![[Pasted image 20230514113446.png]]
$$C_{n}=\sqrt{a_{n}^{2}+b_{n}^{2}}$$
che in notazione euleriana diventa: 
$$C_{n}= \frac{1}{T} \int_{0}^{T}x(t)e^{-2j\pi f_{1}t} dt $$
##### Coefficienti della serie di fourier:
$$ a_{0}= \frac{2}{T} \int_{0}^{T}x(t)dt$$
$$a_{n}=\frac{2}{T}\int^{T}_{0} x(t) cos(2\pi n f_{1}t)dt$$
$$b_{n}= \frac{2}{T} \int^{T}_{0}x(t)sin(2\pi n f_{1}t) dt $$
$$\theta_{n}= -tan ^{-1}\frac{b_{n}}{a_{n}}$$

## Fast Fourier Transform e sua inversa

**In generale, si utilizza spesso la FFT (Fast Fourier Transform) che è un algoritmo ottimizzato per calcolare la Trasformata Discreta di Fourier (spesso abbreviata con DFT) o la sua inversa (iDFT) / (iFFT).**

*Da wikipedia:* 
La FFT è utilizzata in una grande varietà di applicazioni, dall'[elaborazione di segnali digitali](https://it.wikipedia.org/wiki/Elaborazione_numerica_dei_segnali "Elaborazione numerica dei segnali") alla soluzione di [equazioni differenziali alle derivate parziali](https://it.wikipedia.org/wiki/Equazione_differenziale_alle_derivate_parziali "Equazione differenziale alle derivate parziali") agli [algoritmi](https://it.wikipedia.org/wiki/Algoritmo "Algoritmo") per moltiplicare [numeri interi](https://it.wikipedia.org/wiki/Numero_intero "Numero intero") di grandi dimensioni grazie al basso costo computazionale.

Calcolare direttamente la sommatoria della DFT richiederebbe una quantità di operazioni aritmetiche la cui complessità computazionale non può che essere paragonabile all'ordine $O(N^2)$. Il vantaggio di utilizzare la Fast Fourier Transform è quello di ridurre il numero di operazioni, e contemporaneamente ridurre la complessità computazionale fino ad un numero di operazioni pari a $O(N log(N))$ , ottenendo gli stessi risultati di calcolo della precedente. 
In generale gli algoritmi di **FFT** si basano sulla fattorizzazione di N. 

### Onde sinusoidali bidimensionali

Le onde sinusoidali bidimensionali possono essere descritte come: 
$$ Z = sin (hx + ky)$$
dove $x$ e $y$ forniscono le coordinate dei punti nel piano e $z$ rappresenta l'intensità del segnale in quel punto. 
Le costanti $h$ e $k$ ci forniscono un'idea circa il numero di volte che l'onda si ripete rispettivamente nelle direzioni $x$ e $y$ e rappresentano proprio le frequenze sugli assi $x$ e $y$. 

- Quando $k=0$ l'onda sinusoidale fluttua solo sull'asse delle $x$;
- Quando $h=0$, essa fluttua solo lungo l'asse $y$;
- Se $k \not= 0$ e $h\not=0$ , l'onda sinusoidale si muoverà diagonalmente attraverso il foglio, con le onde che viaggiano in direzione perpendicolare ai fronti d'onda (angolate con pendenza pari a $\frac{h}{k}$)

L'operazione di somma delle onde sinusoidali bidimensionali comporta semplicemente l'aggiunta dei rispettivi valori di intensità in corrispondenza di ogni pixel. 
Le onde possono interagire in modo *costruttivo* (sommatoria) o *distruttivo* (sottrazione) a seconda del valore assunto dalle funzioni in quel punto. In particolare, se l'intensità di una delle due onde è tanto più grande rispetto l'altra, allora si parlerà di *segnale prevalente*. (Ne abbiamo visto un esempio nella sommatoria e delle sottrazioni delle immagini nella [[EICA 2]])



### Elaborazione in frequenza

L'elaborazione delle immagini è un procedimento secondo cui data un’immagine originale f(x,y) ne generi una nuova g(x,y) i cui pixel siano stati trasformati secondo un determinato algoritmo.
Gli scopi dell'elaborazione delle immagini possono essere diversi: 
- Eliminazione dei disturbi presenti
- Esaltazione di specifici particolari
- Estrazione di informazioni specifiche per il paziente

I tipi di elaborazione che possono essere effettuati sulle immagini sono suddivisibili in tre macro-aree: 
1. Elaborazioni puntuali: Determinano il valore di un pixel dell’immagine elaborata g(x,y) in funzione del valore dello stesso pixel nell’immagine originale f(x,y). 
2. Elaborazioni locali: Queste tecniche forniscono il valore di luminanza di ogni pixel dell’immagine migliorata g(x,y) in funzione del valore del pixel dell’immagine originale f(x,y) e dei valori dei pixel di un opportuno intorno.
3. Elaborazioni globali: Forniscono il valore di un pixel utilizzando i valori di luminanza di tutti i pixel dell’immagine originale. 

Le **tecniche di filtraggio** non sono altro che operazioni sui pixel atte a modificarne, o mantenere inalterati, determinati valori di un'immagine utilizzando tecniche puntuali, locali e globali. 

#### Le immagini in frequenza

Esclusi i casi banali è normalmente impossibile fare associazioni dirette fra specifiche parti dell’immagine e la sua trasformata (perdita di localizzazione spaziale). Ricordando che la frequenza è legata alla velocità di variazione è però possibile associare le **basse frequenze** alle *zone uniformi* dell’immagine, quelle **alte** alle variazioni più o meno brusche e quindi ai *bordi* o al *rumore di fondo*.

Le fasi di pre e postprocessing sono caratterizzate dalla traslazione dell’origine e da eventuali cropping, scalamenti dei livelli di grigio, conversione da intero a float dei valori e viceversa, ecc.

Il nucleo del filtraggio consiste nel modificare in qualche modo la trasformata dell’immagine e nel prendere poi la sua antitrasformata come immagine elaborata in uscita

### Filtri in frequenza

Ogni struttura periodica in un’immagine sarà rappresentata da picchi nell’immagine dello spettro di potenza ed il raggio dal centro corrisponde alla frequenza mentre la direzione corrisponde all’orientazione della caratteristica periodica. 

Nelle applicazioni mediche, la maggior parte del contenuto non è periodico, quindi la rivelazione di caratteristiche periodiche individua la presenza di artefatti (che sono sicuramente periodici)

**Siccome il contenuto in frequenza delle immagini è associato alla rapidità di variazione delle intensità per unità spaziale**, possiamo introdurre la definizione dei filtri in frequenza descrivendo le operazioni svolte come alterazioni dei valori dei pizel rispetto alla periodicità ed alla distruzione spaziale delle variazioni dell'intensità dell'immagine. 

Ad esempio: 
- I **filtri di frequenza passa-basso** aiutano ad enfatizzare gradualmente variazioni come oggetti e il fondo
- I **filtri in frequenza passa-alto** aiutano a isolare variazione rapide che corrispondono a bordi netti, dettagli e rumore

Ovviamente, i filtri in frequenza non si applicano direttamente all'immagine spaziale, ma è necessario applicarli alla sua rappresentazione in frequenza (Fourier Transform) e poi successivamente antitrasformarla. 

La FFT rivela informazioni circa la periodicità e la dispersione dei pattern trovati nell’immagine sorgente (immagine spaziale). 
Il fatto di lavorare con funzioni numeriche e matrici ci consente di operare immediatamente con un calcolatore, utilizzando algoritmi veloci con un basso costo computazionale. 


### Smoothing
Lo smmothin (*sfocatura*) è ottenuto nel dominio della frequenza attraverso l'attenuazione delle frequenze più alte (come tutti i filtri passa-basso). 

### Filtro passa-basso ideale
Un filtro passa-basso lascia passare, senza attenuarle tutte le frequenze all’interno di un cerchio di raggio $D_0$, centrato nell’origine e “taglia fuori” tutte le frequenze al di fuori di questo cerchio. 

(Da immaginare come una maschera quadrata con un foro circolare al centro che lascia passare solo le alte frequenze). 

![[Pasted image 20230514173029.png]]

La funzione H(u,v) prende il nome di filtro poiché agisce su alcune frequenze della trasformata lasciando le altre immutate. Molto spesso la funzione H è una funzione reale e ciascuna sua componente moltiplica sia la corrispondente componente reale che quella immaginaria della F. Questo tipo di filtri viene detto zerophaseshift perché non introduce sfasamento.

$D_0$ è definita **cut-off frequency** o **frequenza di taglio**. 


![[Pasted image 20230514173106.png]]


D0 è una costante positiva e D(u,v) è la distanza tra un punto (u,v) e il centro. 
Il punto di transizione tra H(u,v) = 1 e H(u,v) = 0 (D0) è chiamato frequenza di taglio (cut-off frequency).


### Filtro Gaussiano
Il filtro Gaussiano ha proprietà di smoothing e viene utilizzato molto per mediare le intensità dell’immagine. In questo caso la frequenza di taglio sarà pari a $\sigma=D_0$. 

![[Pasted image 20230514173444.png]]
$$H(u,v)=e^{\frac {D^{2}(u,v)}{2\sigma ^{2}}}$$

### Filtro Butterworth
Il filtro di Butterworth ha un parametro detto **ordine del filtro**. Per valori di ordine alto, ci si avvicina al funzionamento di un filtro ideale, per quelli di ordine minore si ha un andamento simile ad un filtro gaussiano.
$$H(u,v)=\frac{1}{1+[\frac{D(u,v)}{D_{0}}]^{2n}}$$

![[Pasted image 20230514174327.png]]

### Filtro passa-alto
Un filtro passa-alto si ottiene invertendo semplicemente un filtro passa-basso. 
Lo sharpening di una immagine può essere effettuata nel dominio della frequenza utilizzando un filtro passa-alto che attenua le componenti di bassa frequenza senza disturbare quelle di alta frequenza. 

![[Pasted image 20230514174828.png]]

![[Pasted image 20230514175022.png]]


### Convoluzione
