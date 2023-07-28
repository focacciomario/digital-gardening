---
title: Imaging pre e intra-operatorio
description: Cosa è possibile pianificare con le immagini cliniche? 
date: 2023-03-24
showSidebar: true
key: imaging
--- 
# Imaging pre ed intra operatorio

L'imaging pre-operatorio è da considerarsi tecnologicamente identico a quello diagnostico. Spesso le immagini diagnostiche vengono utilizzate per il *planning operatorio*. 

In molti casi tuttavia è necessario prendere degli accorgimenti affinché l'acquisizione avvenga con successo: 
- Bisogna valutare la posizione del paziente,
-  Il lettino su cui esso si trova,
- Bisogna valutare l'adozione di sistemi di immobilizzazione per ridurre la presenza di artefatti da movimento, 
- Bisogna valutare quale livello energetico utilizzare per ciascuna acquisizione, 

Esempi di sistemi di immobilizzazione possono essere: 
- Maschere termoplastiche adattabili all'anatomia specifica del viso del paziente
- Dispositivi di immobilizzazione toracica per la riduzione dei movimenti diaframmatici
- Dispositivi di immobilizzazione degli arti inferiori o superiori

## Cosa è possibile pianificare con l'imaging pre-operatorio? 

1. Grazie alle acquisizioni di immagini pre-operatorie è possibile identificare la zona target ed eventuali organi a rischio;
2. Sulle immagini acquisite è possibile effettuare delle misurazioni (lineari, aree, volumi) che possono essere utili per determinare le dimensioni di una protesi, piuttosto che le distanze fra distretti specifici; 
3. È possibile identificare le aree funzionali "safety regions" di specifici organi (al fine di evitarne la lesione o contatti indesiderati durante le operazioni chirurgiche);
4. È possibile effettuare simulazioni e analisi computerizzate per impianti di protesi o altri device impiantabili, riscostruzioni ossee o di altri tessuti, simulazioni di traiettorie da seguire durante le operazioni chirurgiche;

#### Nota Bene

Tutte le acquisizioni svolte nella fase pre-operatoria devono essere riferibili alla successiva fase intra-operatoria. Ciò significa che: 
- Ogni punto dell'immagine deve essere riferito al sistema di riferimento immagine in pixel e deve essere riportato nello spazio reale;
- Ciò implica la determinazione di un sistema di riferimento locale (*solidale con i paziente*) e l'informazione sulle dimensioni dei pixel / voxel. 

Uno dei primi approcci utilizzati come sistemi di riferimento è stato l'**N-bar (N-localizer)** 

![[Pasted image 20230515115404.png]]
![[Pasted image 20230515115357.png]]

![[Pasted image 20230515115424.png]]

## Formato delle immagini mediche

### DICOM
Il formato standard di registrazione delle immagini biomediche (provenienti dagli studi di CT, MRI, PET ecc.) è denominato **DICOM**.
È stato sviluppato dalla National Electrical Manufacturers Association (NEMA) in collaborazione con l’American College of Radiology (ACR).
Il formato *DICOM* specifica gli standard di comunicazione tra le apparecchiature dedicate al trattamento delle bioimmagini: 
1. Macchinario di scansione
2. 2 Information management system (PACS)
3. Computer dell'operatore di risonanza per la stampa o memorizzazione 

L'estensione di un file DICOM è *.dcm* e al suo interno possiamo riconoscere due parti essenziali: 
1. HEADER (In cui sono contenuti i campi che riportano dati anagrafici del paziente, dati dell'esame ed ogni informazione utile agli operatori del settore)
2. MATRICE (La rappresentazione numerica dell'immagine biomedica ottenuta attraverso i sistemi di scansione)

Le dimensioni tipiche della matrice (e quindi dell'immagine) variano a seconda della tecnica diagnostica considerata e del produttore del macchinario utilizzato. 

In genere si hanno: 
- **MRI:** 256x256 o 512x512
- **Medicina nucleare (PET)**: 128x128
- **CT Scan**: 512 x 512

Il sistema DICOM ci fornisce informazioni spaziali circa l'acquisizione effettuata: 
è possibile infatti eseguire una trasformazione delle coordinate da pixel a mm (utile ad esempio nella misurazione di distanze lineari tra un edge di un distretto ed un altro ad esempio).

### NIFTI
Anche se le immagini mediche sono tutte acquisite utilizzando lo standard DICOM, gli operatori del settore talvolta possono trovarsi davanti alcuni software (FSL, SPM5, MRIcron ecc.) che usano come formato immagine il **NIFTI**.

*NIFTI* è l'acronimo di **NeuroImaging Informatics Technology Initiative** e l'obiettivo è quello di proporre un formato (non standard) dedicato al mondo della neuroimaging. 

La differenza sostanziale rispetto il DICOM è che con il file NIFTI è possibile memorizzare le informazioni MULTIDIMENSIONALI direttamente in un unico file. Questo aspetto è fondamentale quando si parla di sequenze (o studi) che mettono insieme lo stesso volume visto da diversi punti di vista (come nel caso della risonanza magnetica DTI).

Diversi software open source consentono di effettuare una conversione da DICOM a NIFTI. 

Come nel DICOM, anche il NIFTI include al suo interno un HEADER e i dati di immagine: tutto contenuto in un unico file la cui estensione è *.nii* (NIFTI) oppure in due file separati le cui estensioni sono *.hdr* e *.img*

### ALTRI FORMATI
Altri formati utilizzati nell'ambito dell'imaging biomedico possono essere:
- **NRRD**: Nearly Raw Raster Data
- **MHA, MHD**: Metaimage format (ITK)

