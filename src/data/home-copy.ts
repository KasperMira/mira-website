import type { Locale } from "./i18n";

export interface HomeCopy {
  hero: {
    eyebrow: string;
    titleBefore: string;
    titleAccent: string;
    titleAfter: string;
    paragraph: string;
    primaryCta: string;
    secondaryCta: string;
  };
  intro: {
    title: string;
    paragraph: string;
    longParagraph: string;
    features: { title: string; body: string }[];
  };
  modules: {
    title: string;
    linkLabel: string;
    items: { title: string; body: string }[];
  };
  dividerMaterial: string;
  thinking: {
    title: string;
    body: string;
    cta: string;
  };
  dividerCanAlso: string;
  video: {
    title: string;
    paragraph: string;
  };
  dividerSectors: string;
  testimonialQuotes: string[];
  sectors: {
    title: string;
    paragraph: string;
    items: string[];
  };
}

export const homeCopy: Record<Locale, HomeCopy> = {
  nl: {
    hero: {
      eyebrow: "MIRA Software",
      titleBefore: "Beheer materiaal",
      titleAccent: "efficient",
      titleAfter: "en eenvoudig",
      paragraph:
        "Gebruik MIRA Software om inzicht te krijgen in het gebruik en verbruik van groot en klein materiaal in uw organisatie.",
      primaryCta: "Boek een gratis demo",
      secondaryCta: "Ontdek MIRA"
    },
    intro: {
      title: "MIRA Software voor beheer van al uw materiaal",
      paragraph:
        "Software voor opvolging materiaal, gereedschapsbeheer en materiaalbeheer. Opvolging van gebruik en verbruik.",
      longParagraph:
        "MIRA geeft u een beter inzicht in het gebruik en verbruik van groot en klein materiaal binnen uw organisatie. Onze software is een totaaloplossing voor materieel- en materiaalbeheer met opvolging van voorraad, gereedschap, keuringen, onderhoud en herstellingen.",
      features: [
        { title: "Werk efficienter", body: "Verlies minder tijd met zoeken naar het juiste gereedschap." },
        { title: "1 overzicht", body: "Geen verspreide Excels, maar een centraal overzicht van al uw materiaal." },
        { title: "Gebruiksvriendelijk", body: "Eenvoudig te raadplegen voor beheerder en gebruiker, ook onderweg." }
      ]
    },
    modules: {
      title: "Materiaal en materieel opvolgen",
      linkLabel: "module",
      items: [
        { title: "Uitlenen", body: "Wie heeft iets gebruikt? Waar en hoe lang? Wie bracht het terug?" },
        { title: "Reserveren", body: "Is het toestel beschikbaar en staat materiaal op tijd klaar?" },
        { title: "Stock beheren", body: "Wanneer aanvullen? Wat is de voorraad en actuele waarde?" },
        { title: "Onderhoud bijhouden", body: "Wat is de historiek en wanneer is inspectie of keuring nodig?" }
      ]
    },
    dividerMaterial: "Materiaalbeheer bij u?",
    thinking: {
      title: "Heeft u al nagedacht over uw materiaalbeheer?",
      body:
        "Hoe wordt er in uw organisatie met bedrijfsmiddelen omgegaan? Heeft u een duidelijk overzicht van voorraad en gebruik? Koopt u soms materiaal dubbel aan of te laat? MIRA helpt u controle en structuur opbouwen.",
      cta: "Ontdek MIRA"
    },
    dividerCanAlso: "Zo kan het dus ook!",
    video: {
      title: "Zo kan het dus ook!",
      paragraph:
        "Bekijk hoe eenvoudig u materiaal en verbruiksgoederen registreert op naam van medewerker, klant of project."
    },
    dividerSectors: "Voor elke organisatie waar materiaal beweegt",
    testimonialQuotes: [
      "Als ik slechts een aspect van MIRA mag aanraden, is het de gebruiksvriendelijkheid: weinig handelingen en zeer eenvoudig aanpasbaar.",
      "Door de implementatie van Mira Software hebben we een duidelijk overzicht over het beheer van materieel in ons magazijn.",
      "MIRA heeft ons geholpen structuur te brengen in het magazijn en de automatisering zichtbaar te verhogen."
    ],
    sectors: {
      title: "MIRA Software in alle sectoren",
      paragraph:
        "Onze software is inzetbaar in elke organisatie waar materiaal, gereedschap en verbruiksgoederen bewegen.",
      items: [
        "Bouwbedrijven",
        "Installatietechniek",
        "Overheid & lokaal bestuur",
        "Maritieme sector",
        "Onderwijs & cultuur",
        "En ook andere bedrijven!"
      ]
    }
  },
  fr: {
    hero: {
      eyebrow: "MIRA Software",
      titleBefore: "Gerez votre materiel",
      titleAccent: "efficacement",
      titleAfter: "et simplement",
      paragraph:
        "Utilisez MIRA Software pour suivre l'usage et la consommation de tout votre materiel, petit ou grand, dans votre organisation.",
      primaryCta: "Reservez une demo gratuite",
      secondaryCta: "Decouvrir MIRA"
    },
    intro: {
      title: "MIRA Software pour la gestion de tout votre materiel",
      paragraph:
        "Logiciel de suivi du materiel, de gestion de l'outillage et du materiel. Suivi de l'usage et de la consommation.",
      longParagraph:
        "MIRA vous donne une meilleure visibilite sur l'usage et la consommation de votre materiel. Notre logiciel est une solution complete de gestion du materiel avec suivi du stock, de l'outillage, des controles, de la maintenance et des reparations.",
      features: [
        { title: "Travaillez plus vite", body: "Perdez moins de temps a chercher le bon outil." },
        { title: "Une seule vue", body: "Plus d'Excel eparpilles, mais une vue centralisee de tout votre materiel." },
        { title: "Facile a utiliser", body: "Consultable simplement par le gestionnaire et l'utilisateur, meme en deplacement." }
      ]
    },
    modules: {
      title: "Suivi du materiel et de l'outillage",
      linkLabel: "module",
      items: [
        { title: "Pret", body: "Qui a utilise quoi ? Ou et combien de temps ? Qui l'a rapporte ?" },
        { title: "Reservation", body: "L'appareil est-il disponible et le materiel pret a temps ?" },
        { title: "Gestion du stock", body: "Quand reapprovisionner ? Quel est le stock et sa valeur actuelle ?" },
        { title: "Maintenance", body: "Quel est l'historique et quand un controle est-il necessaire ?" }
      ]
    },
    dividerMaterial: "La gestion de materiel chez vous ?",
    thinking: {
      title: "Avez-vous deja pense a votre gestion de materiel ?",
      body:
        "Comment votre organisation gere-t-elle ses biens ? Avez-vous une vue claire du stock et de l'usage ? Achetez-vous parfois en double ou trop tard ? MIRA vous aide a structurer et controler.",
      cta: "Decouvrir MIRA"
    },
    dividerCanAlso: "C'est aussi possible ainsi !",
    video: {
      title: "C'est aussi possible ainsi !",
      paragraph:
        "Voyez comme il est simple d'enregistrer materiel et consommables au nom d'un collaborateur, client ou projet."
    },
    dividerSectors: "Pour chaque organisation ou le materiel bouge",
    testimonialQuotes: [
      "Si je ne devais recommander qu'un aspect de MIRA, ce serait sa simplicite d'utilisation : peu de manipulations et tres facile a adapter.",
      "Grace a l'implementation de Mira Software, nous avons une vue claire sur la gestion du materiel dans notre entrepot.",
      "MIRA nous a aide a apporter de la structure dans le magasin et a augmenter nettement l'automatisation."
    ],
    sectors: {
      title: "MIRA Software dans tous les secteurs",
      paragraph:
        "Notre logiciel convient a toute organisation ou circulent materiel, outillage et consommables.",
      items: [
        "Construction",
        "Installations techniques",
        "Secteur public & collectivites",
        "Secteur maritime",
        "Enseignement & culture",
        "Et bien d'autres entreprises !"
      ]
    }
  },
  it: {
    hero: {
      eyebrow: "MIRA Software",
      titleBefore: "Gestisci il materiale",
      titleAccent: "in modo efficiente",
      titleAfter: "e semplice",
      paragraph:
        "Usa MIRA Software per avere una visione chiara dell'utilizzo e del consumo di materiale, grande e piccolo, nella tua organizzazione.",
      primaryCta: "Prenota una demo gratuita",
      secondaryCta: "Scopri MIRA"
    },
    intro: {
      title: "MIRA Software per la gestione di tutto il tuo materiale",
      paragraph:
        "Software per il monitoraggio del materiale, gestione degli utensili e del materiale. Controllo di uso e consumo.",
      longParagraph:
        "MIRA ti offre una visione piu chiara dell'uso e del consumo del materiale nella tua organizzazione. Il nostro software e una soluzione completa per la gestione del materiale con controllo di magazzino, utensili, ispezioni, manutenzione e riparazioni.",
      features: [
        { title: "Lavora piu efficiente", body: "Meno tempo a cercare lo strumento giusto." },
        { title: "Una panoramica", body: "Niente piu Excel sparsi, ma una vista centrale di tutto il materiale." },
        { title: "Facile da usare", body: "Semplice da consultare per gestore e utente, anche in mobilita." }
      ]
    },
    modules: {
      title: "Monitoraggio di materiale e utensili",
      linkLabel: "modulo",
      items: [
        { title: "Prestito", body: "Chi ha usato cosa? Dove e per quanto? Chi l'ha restituito?" },
        { title: "Prenotazione", body: "Lo strumento e disponibile e pronto in tempo?" },
        { title: "Gestione stock", body: "Quando riordinare? Qual e la giacenza e il valore attuale?" },
        { title: "Manutenzione", body: "Qual e lo storico e quando serve un'ispezione?" }
      ]
    },
    dividerMaterial: "La gestione del materiale da te?",
    thinking: {
      title: "Hai gia pensato alla tua gestione del materiale?",
      body:
        "Come vengono gestiti i beni aziendali nella tua organizzazione? Hai una panoramica chiara di giacenza e uso? Capita di comprare in doppio o in ritardo? MIRA ti aiuta a dare struttura e controllo.",
      cta: "Scopri MIRA"
    },
    dividerCanAlso: "Si puo fare cosi!",
    video: {
      title: "Si puo fare cosi!",
      paragraph:
        "Guarda quanto e semplice registrare materiale e consumabili a nome di collaboratore, cliente o progetto."
    },
    dividerSectors: "Per ogni organizzazione dove si muove materiale",
    testimonialQuotes: [
      "Se dovessi consigliare un solo aspetto di MIRA, sarebbe la facilita d'uso: pochi passaggi e molto adattabile.",
      "Con l'implementazione di Mira Software abbiamo una visione chiara della gestione del materiale nel nostro magazzino.",
      "MIRA ci ha aiutato a portare struttura nel magazzino e ad aumentare visibilmente l'automazione."
    ],
    sectors: {
      title: "MIRA Software in tutti i settori",
      paragraph:
        "Il nostro software e adatto a ogni organizzazione dove si muovono materiale, utensili e consumabili.",
      items: [
        "Edilizia",
        "Impiantistica",
        "Pubblica amministrazione",
        "Settore marittimo",
        "Istruzione e cultura",
        "E molte altre aziende!"
      ]
    }
  },
  de: {
    hero: {
      eyebrow: "MIRA Software",
      titleBefore: "Material verwalten",
      titleAccent: "effizient",
      titleAfter: "und einfach",
      paragraph:
        "Mit MIRA Software behalten Sie den Uberblick uber Nutzung und Verbrauch von grossem und kleinem Material in Ihrer Organisation.",
      primaryCta: "Kostenlose Demo buchen",
      secondaryCta: "MIRA entdecken"
    },
    intro: {
      title: "MIRA Software fur die Verwaltung Ihres gesamten Materials",
      paragraph:
        "Software fur Materialverfolgung, Werkzeug- und Materialverwaltung. Nachverfolgung von Nutzung und Verbrauch.",
      longParagraph:
        "MIRA gibt Ihnen einen besseren Uberblick uber Nutzung und Verbrauch von grossem und kleinem Material in Ihrer Organisation. Unsere Software ist eine Komplettlosung fur die Material- und Geratewaltung mit Bestand, Werkzeugen, Prufungen, Wartung und Reparaturen.",
      features: [
        { title: "Effizienter arbeiten", body: "Weniger Zeit mit der Suche nach dem richtigen Werkzeug." },
        { title: "Ein Uberblick", body: "Keine verstreuten Excel-Dateien, sondern eine zentrale Ubersicht." },
        { title: "Benutzerfreundlich", body: "Einfach abrufbar fur Verwalter und Nutzer, auch unterwegs." }
      ]
    },
    modules: {
      title: "Material und Gerate nachverfolgen",
      linkLabel: "Modul",
      items: [
        { title: "Ausleihen", body: "Wer hat was genutzt? Wo und wie lange? Wer brachte es zuruck?" },
        { title: "Reservieren", body: "Ist das Gerat verfugbar und rechtzeitig bereit?" },
        { title: "Bestand verwalten", body: "Wann nachbestellen? Wie hoch sind Bestand und Wert?" },
        { title: "Wartung", body: "Wie ist der Verlauf und wann ist eine Prufung notig?" }
      ]
    },
    dividerMaterial: "Materialverwaltung bei Ihnen?",
    thinking: {
      title: "Haben Sie schon uber Ihre Materialverwaltung nachgedacht?",
      body:
        "Wie werden Betriebsmittel in Ihrer Organisation gehandhabt? Haben Sie einen klaren Uberblick uber Bestand und Nutzung? Kaufen Sie manchmal doppelt oder zu spat? MIRA hilft Ihnen, Struktur und Kontrolle aufzubauen.",
      cta: "MIRA entdecken"
    },
    dividerCanAlso: "So geht es auch!",
    video: {
      title: "So geht es auch!",
      paragraph:
        "Sehen Sie, wie einfach Material und Verbrauchsguter auf Mitarbeiter, Kunden oder Projekte erfasst werden."
    },
    dividerSectors: "Fur jede Organisation, in der sich Material bewegt",
    testimonialQuotes: [
      "Wenn ich nur einen Aspekt von MIRA empfehlen durfte, ware es die Benutzerfreundlichkeit: wenige Schritte und sehr anpassbar.",
      "Durch die Einfuhrung von Mira Software haben wir einen klaren Uberblick uber die Materialverwaltung in unserem Lager.",
      "MIRA hat uns geholfen, Struktur ins Lager zu bringen und die Automatisierung sichtbar zu erhohen."
    ],
    sectors: {
      title: "MIRA Software in allen Branchen",
      paragraph:
        "Unsere Software eignet sich fur jede Organisation, in der Material, Werkzeuge und Verbrauchsguter bewegt werden.",
      items: [
        "Bauunternehmen",
        "Installationstechnik",
        "Behorden & Kommunen",
        "Maritimer Sektor",
        "Bildung & Kultur",
        "Und viele weitere Unternehmen!"
      ]
    }
  }
};
