---
title: 'Doc FGA'
pubDate: 2023-03-05
description: 'Guida rivolta agli autori del sito web festivalgiovaniappennino.it'
image:
    url: '/img/projects/fgadocs/fga.jpg'
    alt: 'Copertina Documentazione festivalgiovaniappennino.it'
layout: ../../layouts/Article.astro
---
> _Foto di <a href="https://unsplash.com/@kanhaiyasharma?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="blank norefferer noopener">Kanhaiya Sharma</a>_

### Gestione del contenuto

#### Gestione del contenuto tramite NetlifyCMS

Il sito web, attualmente, implementa [NetlifyCMS](netlifycms.org/) ovvero un sistema di gestione del contenuto, che offre un'interfaccia semplice per creare, cancellare e modificare gli articoli e gli avvisi presenti sul sito.

Per accedere al CMS è sufficiente seguire il link [festivalgiovaniappennino.it/admin/](https://festivalgiovaniappennino.it/admin/) e quindi effettuare l'accesso con le proprie credenziali.

Nel caso in cui non si disponga delle credenziali di accesso, è necessario un invito per poter effettuare la registrazione.

##### Creare o modificare un articolo

Gli articoli sono disponibili nella _Collezione_ **Blog** (unica disponibile al momento della stesura di questa documentazione). 

![Sezione Blog dentro NetlifyCMS](/img/projects/fgadocs/fga-1.png)

Cliccando sul tasto _New Blog_ è possibile creare un nuovo articolo, mentre cliccando su un articolo esistente è possibile modificarlo.

Una volta aperta la pagina di modifica di un articolo, l'interfaccia presenta sulla sinistra dei campi nei quali inserire il contenuto e sulla destra un'antemprima dell'articolo, che può essere chiusa (o aperta) cliccando sull'icona a forma di occhio presente in alto a destra.

> _N.B.: l'antemprima non è indicativa dell'effettiva formattazione presente sul sito_

A seguire le istruzioni per ogni campo che è possibile compilare.

##### Titolo

In questa sezione inserire il titolo dell'articolo.

##### Data di pubblicazione

Data di pubblicazione dell'articolo.

È possibile inserire una data arbitraria e, comunque, la scelta della data non ha effetti sulla pubblicazione o meno del articolo. Gli unici effetti riguardano la data indicata nell'articolo stesso e la posizione dell'articolo all'interno di liste ordinate per data di pubblicazione.

##### Immagine di copertina

Immagine di copertina dell'articolo.

Può essere caricata direttamente o inserita tramite link. Sarebbe preferibile, quando possibile, caricare l'immagine su [Cloudinary](https://cloudinary.com/), utilizzando le credenziali dello staff del Festival, e utilizzare quindi il link.

##### Didascalia immagine di copertina

Didascalia per l'immagine di copertina.

Utilizzata per una migliore accessibilità del sito e per motivazioni di SEO.

##### Descrizione

Descrizione e/o estratto dell'articolo.

Utilizzato per la descrizione nelle schede degli articoli presenti sul sito e nelle schede riguardanti l'articolo nei motori di ricerca.

##### Immagine autore

Immagine dell'autore.

Presente vicino al nome dell'autore nella pagina dell'articolo. Anche in questo caso sarebbe l'immagine può essere caricata direttamente o tramite link (con preferenza per questa seconda modalità).

##### Tags

Tag dell'articolo.

Utilizzati per questioni di indicizzazione all'interno del sito. Sono presenti a fondo articolo e permettono la creazione di pagine che raccolgono gli articoli in base ai singoli tag. Non utilizzare apostrofi o altri simboli, in quanto potrebbero creare problemi nella creazione degli ```url``` delle pagine relative ai tag.

Bisogna aggiungere un tag per ogni campo presente in questa sezione ed è possibile farlo cliccando sul tasto _add tags +_.

##### Body

Testo completo dell'articolo.

In questa sezione è possibile inserire il testo dell'articolo utilizzando l'editor _Rich Text_ che permette la formattazione attraverso l'utilizzo di strumenti classici presenti sulla barra, oppure attraverso l'editor _Markdown_, che permette di utilizzare l'omonimo linguaggio di markup.

Utilizzando l'editor _Rich Text_ è possibile inserire intestazioni utilizzando il simbolo _H_, utilizzando _Heading 2_ per l'intestazione principale e da 3 in poi per il livelli minori.

Inserendo un'immagine (è possibile farlo con il tasto _+_ presente sulla barra) appare oltre al campo dell'immagine (di nuovo si consiglia di utilizzare [Cloudinary](https://cloudinary.com)), il campo _ALT TEXT_ nel quale inserire una didascalia per l'immagine (non visibile sul sito ma utilizzata per migliorare l'accessibilità), e un campo per il titolo (visibile, nei browser che supportano questa modalità, al passaggio del mouse sopra l'immagine).
