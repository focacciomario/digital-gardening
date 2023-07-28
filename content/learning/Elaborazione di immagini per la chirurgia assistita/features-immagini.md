---
title: Riconoscimento di features nelle immagini
description: Corner e features detection, Harris Detector e HOG descriptor 
date: 2023-03-23
showSidebar: true
tag: EICA
--- 
# Image features
Cosa si intende per *caratteristiche* o *features* di un'immagine?
Una feature in un'immagine è un elemento di un'immagine A che posso riconoscere facilmente in un'immagine B. 

Le features delle immagini vengono largamente impiegate per: 
- Tracking degli oggetti in movimento
- Riconoscimento automatico di punti cospicui
- Riconoscimento automatico dei volti
- Registrazione delle immagini (matching)
- Combinazione di più immagini (stitching) (è ciò che avviene ad esempio per la creazione di panorami)
- Ottenere ricostruzioni di volumi 3D a partire da angolature diverse (fotogrammetria)
- Classificazione per task di *data mining* et similia

## Corner detection
Il rilevamento degli angoli è un approccio utilizzato nei sistemi di *computer vision* per estrarre alcuni tipi di caratteristiche e dedurre il contenuto di un'immagine. 

Il rilevamento degli angoli è spesso utilizzato per il rilevamento del movimento, la registrazione delle immagini, il tracciamento video, la mosaicatura delle immagini, lo stitching di panorami, la ricostruzione 3D e il riconoscimento degli oggetti. Il rilevamento degli angoli si sovrappone all'argomento del rilevamento dei punti di interesse.

**Definizione formale di corner:**
Un angolo può essere definito come l'intersezione di due spigoli. Un angolo può anche essere definito come un punto per il quale esistono due direzioni dominanti, diverse dal bordo in una vicinanza locale del punto.

Un punto di interesse è un punto in un'immagine che ha una posizione ben definita e può essere rilevato in modo evidente. Ciò significa che un punto di interesse può essere un angolo, ma anche, ad esempio, un punto isolato di massima o minima intensità locale, una fine di linea o un punto su una curva in cui la curvatura è localmente massima.

*Quindi cosa si fa per trovare queste feature per poi eventualmente fare una scrematura e lasciare la feature che ci interessa?*
Si vanno a definire tante regioni di interesse (ROI) e si calcola localmente il gradiente al variare della posizione della ROI di interese.

## Feature detection
L’obiettivo degli algoritmi basati su *feature detection* è quello di individuare feature considerate “rilevanti” in un'immagine. Esistono diversi metodi per l'implementazione della feature detection, ma alla base di tutte le metologie vi è la localizzazione dei “*punti chiave*” (*keypoint*). 
I metodi di *feature detection* più conosciuti sono: 
- Hessian detector (poco usato)
- Harris detector

### Hessian detection
Nell’Hessian detector si calcola la derivata seconda (quindi la matrice hessiana) dell’immagine nelle due direzioni ortogonali $(x,y)$ e si cercano i punti dove il determinante della matrice è massimo. 

### Harris detector
Nell’Harris detector il metodo è un po’ più sofisticato. Ci concentriamo di più su questo perché è quello più utilizzato e si trova alla base di più algoritmi che implementano feature detection.

Gli angoli sono regioni dell'immagine con grandi variazioni di intensità in tutte le direzioni. Un primo tentativo di trovare questi angoli è stato fatto da *Chris Harris* e *Mike Stephens* nel loro articolo *A Combined Corner and Edge Detector del 1988*, oggi chiamato **Harris Corner Detector**. L'autore ha trasformato questa semplice idea in una forma matematica. In pratica, trova la differenza di intensità per uno spostamento di (u,v) in tutte le direzioni. L'espressione matematica è la seguente:
$$ E(u,v) = \sum\limits_{x,y}w(x,y) [I(x+u,y+v) - I(x,y)]^{2}$$
dove: 
$w(x,y)$ rappresenta la *window function*
$I(x+u,y+v)$ è l'intensità shiftata
$I(x,y)$ è l'intensità dell'immagine

L'obiettivo è massimizzare la funzione $E(u,v)$ per il rilevamento degli angoli. Ciò significa che dobbiamo massimizzare il secondo termine. 


Qui, $I_{x}$ e $I_{y}$ sono le derivate dell'immagine nelle direzioni x e y, rispettivamente. 
(Queste possono essere facilmente trovate usando la funzione `cv.Sobel()`in OpenCV di Python).

Adesso arriva la parte saliente. 
Dopo che è sono state definite le funzioni di intensità e la finestra, è stato creato un punteggio, in pratica un'equazione, che determina se una finestra può contenere o meno un angolo.

$$R= det(M)-k(trace(M))^{2}$$
Dove: 
$det(M)=\lambda_{1} \lambda_2$
$trace(M)=\lambda_{1} + \lambda_2$
$\lambda_{1}$ e $\lambda_2$ rappresentano gli autovalori della matrice M

Le grandezze di questi autovalori decidono se una regione è un angolo, un bordo o un piatto.
![[Pasted image 20230612174652.png]]
Quando |R| è piccolo, ossia quando $\lambda_1$ e $\lambda_2$ sono piccoli, la regione è definita *flat*;
Quando $R<0$, ossia quando $\lambda_{1}>>\lambda_2$ e viceversa, la regione è definita come un *lato (edge)*
Quando R è grande, ossia quando $\lambda_1$ e $\lambda_2$ sono grandi e $\lambda_{1} \sim \lambda_{2}$ la regione è un *angolo (corner)* 

La figura in alto rappresenta perfettamente quanto detto finora. 

Il risultato del rilevamento degli angoli di Harris è un'immagine in scala di grigi con questi punteggi. La soglia per un punteggio adeguato fornisce gli angoli dell'immagine. 

Una possibile implementazione in Python dell'algoritmo di Harris Detector è la seguente: 

```python 
import numpy as np
import cv2 as cv
filename = 'chessboard.png'
img = cv.imread(filename)
gray = cv.cvtColor(img,cv.COLOR_BGR2GRAY)
gray = np.float32(gray)
dst = cv.cornerHarris(gray,2,3,0.04)
#result is dilated for marking the corners, not important
dst = cv.dilate(dst,None)
# Threshold for an optimal value, it may vary depending on the image.
img[dst>0.01*dst.max()]=[0,0,255]
cv.imshow('dst',img)
if cv.waitKey(0) & 0xff == 27:
    cv.destroyAllWindows()
```

![[Pasted image 20230612175258.png]]

E' importante ricordare che, aldilà delle formule puramente matematiche, si ha un buon riconoscimento di una feature se all'interno dell'immagine vi è tanta variabilità: nel caso contrario non è possibile distinguere delle features rilevanti. 

**Considerazioni sull'Harris Detector**
La descrizione precedente è un buon esempio di quello che fanno tutti gli algoritmi che eseguono task di feature detection, e si comporta abbastanza bene in presenza di immagini che non hanno troppo cambio di luminosità o di prospettiva o di scalatura.

Si è visto che in generale abbiamo bisogno di un kernel per individuare queste regioni. Ma prima di scegliere l'adeguata dimensione del kernel è necessario eliminare qualsiasi rumore di fondo dalla nostra immagine, altrimenti la ROI potrebbe essere influenzata dal rumore ivi presente. 
È buona prassi dunque utilizzare un filtro passa-basso per ridurre il rumore presente nell'immagine: si applica quindi una **gaussiana** direttamente nel kernel che mi va ad individuare i corner nell'immagine. 

*Cosa succede se le immagini hanno una scala diversa, una dimensione diversa?*
Bisogna cercare un modo per tenere conto di questa scalatura e in questo ambito ci sono algoritmi che si chiamano Scale Invariant Feature detection (rilevamento di feature invarianti rispetto alla scala dell’immagine).

### HOG Descriptor
L'Istogramma di gradienti orientati (in inglese: **Histogram of Oriented Gradients** e in sigla: **HOG**) è un descrittore di caratteristiche usate in computer vision ed in elaborazione delle immagini per il riconoscimento di oggetti. La tecnica conta le occorrenze dell'orientamento del gradiente in porzioni localizzate di una immagine. Questo metodo è simile al descrittore agli istogrammi orientati al contorno, ai descrittori SIFT e agli shape context ma differisce poiché è calcolato su una griglia densa di celle spaziate uniformi e usa la normalizzazione del contrasto locale sovrapposta per migliorare l'accuratezza. I primi a descrivere l'Istogramma di gradienti orientati nel giugno 2005 furono Navneet Dalal e Bill Triggs, ricercatori del Istituto Nazionale di Ricerca francese (INRIA) mentre studiavano il problema del rilevamento di pedoni in immagini statiche.