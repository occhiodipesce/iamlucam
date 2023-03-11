---
title: 'Doc FGA'
pubDate: 2023-03-08
description: 'Guida rivolta agli autori del sito web festivalgiovaniappennino.it'
image:
    url: 'https://res.cloudinary.com/dcsr1ibs2/image/upload/c_scale,w_auto/dpr_auto/q_auto/f_auto/v1678547019/IamLucaM/projects/fgadocs/fgadocs-cover.jpg'
    alt: 'Copertina Documentazione festivalgiovaniappennino.it'
layout: ../../layouts/Article.astro
---
> _Foto di <a href="https://unsplash.com/@kanhaiyasharma?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank" rel="noreferrer noopener nofollow">Kanhaiya Sharma</a>_

### Gestione del contenuto

#### Gestione del contenuto tramite DecapCMS

Il sito web, attualmente, implementa <a href="https://decapcms.org" target="_blank" rel="nofollow noopener noreferrer">DecapCMS</a> ovvero un sistema di gestione del contenuto, che offre un'interfaccia semplice per creare, cancellare e modificare gli articoli e gli avvisi presenti sul sito.

> _DecapCMS è un rebrand di NetlifyCMS, quindi è possibile trovare anche questo secondo nome in varie parti dell'interfaccia._

Per accedere al CMS è sufficiente seguire il link <a href="https://festivalgiovaniappennino.it/admin/" target="_blank" rel="noopener">festivalgiovaniappennino.it/admin/</a> e quindi effettuare l'accesso con le proprie credenziali.

Nel caso in cui non si disponga delle credenziali di accesso, è necessario un invito per poter effettuare la registrazione.

##### Creare o modificare un articolo

Gli articoli sono disponibili nella _Collezione_ **Blog** (unica disponibile al momento della stesura di questa documentazione). 

![Interfaccia di DecapCMS](https://res.cloudinary.com/dcsr1ibs2/image/upload/c_scale,w_auto/dpr_auto/q_auto/f_auto/v1678547019/IamLucaM/projects/fgadocs/decapcms-interface.png "Interfacccia di DecapCMS")

Cliccando sul tasto _New Blog_ è possibile creare un nuovo articolo, mentre cliccando su un articolo esistente è possibile modificarlo.

Una volta aperta la pagina di modifica di un articolo, l'interfaccia presenta sulla sinistra dei campi nei quali inserire il contenuto e sulla destra un'antemprima dell'articolo, che può essere chiusa (o aperta) cliccando sull'icona a forma di occhio presente in alto a destra.

> _N.B.: l'antemprima non è indicativa dell'effettiva formattazione presente sul sito._

A seguire le istruzioni per ogni campo che è possibile compilare.

##### Titolo

In questa sezione inserire il titolo dell'articolo.

##### Data di pubblicazione

Data di pubblicazione dell'articolo.

Data indicata nell'articolo e utilizzata per ordinare gli articoli nelle liste. Non può essere utilizzata per programmare la pubblicazione.

##### Immagine di copertina

Immagine di copertina dell'articolo.

Può essere caricata direttamente o inserita tramite link. Sarebbe preferibile, quando possibile, caricare l'immagine su <a href="https://cloudinary.com" target="_blank" rel="nofollow noopener noreferrer">Cloudinary</a> (utilizzando le credenziali dello staff del Festival) e utilizzare quindi il link.

##### Didascalia immagine di copertina

Didascalia per l'immagine di copertina.

Utilizzata per una migliore accessibilità del sito e per motivazioni di SEO.

##### Descrizione

Descrizione e/o estratto dell'articolo.

Utilizzato per la descrizione nelle schede degli articoli presenti sul sito, dai motori di ricerca e dai social network.

##### Immagine autore

Immagine dell'autore.

Presente vicino al nome dell'autore nella pagina dell'articolo. Anche in questo caso l'immagine può essere caricata direttamente o tramite link (con preferenza per questa seconda modalità).

##### Tags

Tag dell'articolo.

Utilizzati per questioni di indicizzazione all'interno del sito. Sono presenti a fondo articolo e permettono la creazione di pagine che raccolgono gli articoli in base ai singoli tag. Non utilizzare apostrofi o altri simboli, in quanto potrebbero creare problemi nella creazione degli ```url``` delle pagine relative ai tag.

È possibile aggiungere un **singolo** tag per ogni modulo presente in questa sezione ed è possibile aggiungerne di più cliccando sul tasto _add tags +_.

##### Body

Testo dell'articolo.

In questa sezione è possibile inserire il testo dell'articolo utilizzando l'editor _Rich Text_ che permette la formattazione attraverso l'utilizzo di strumenti classici presenti sulla barra, oppure attraverso l'editor _Markdown_, che permette di utilizzare l'omonimo linguaggio di markup.

Utilizzando l'editor _Rich Text_ è possibile inserire intestazioni utilizzando il simbolo _H_, utilizzando _Heading 2_ per l'intestazione principale e da 3 in poi per il livelli minori.

Inserendo un'immagine (è possibile farlo con il tasto _+_ presente sulla barra) appare oltre al campo dell'immagine (di nuovo si consiglia di utilizzare <a href="https://cloudinary.com" target="_blank" rel="nofollow noopener noreferrer">Cloudinary</a>), il campo _ALT TEXT_ nel quale inserire una didascalia per l'immagine (non visibile sul sito ma utilizzata per migliorare l'accessibilità), e un campo per il titolo (visibile, nei browser che supportano questa modalità, al passaggio del mouse sopra l'immagine).
