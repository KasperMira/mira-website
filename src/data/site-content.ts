import type { Locale, PageKey } from "./i18n";

export type Section =
  | { type: "text"; title: string; body: string[] }
  | { type: "cards"; title: string; items: { title: string; body: string }[] }
  | { type: "quote"; quote: string; author: string; role: string }
  | { type: "list"; title: string; items: string[] }
  | { type: "cta"; title: string; body: string; primaryLabel: string; primaryHref: string };

export interface PageContent {
  seoTitle: string;
  seoDescription: string;
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    primaryLabel: string;
    secondaryLabel: string;
  };
  sections: Section[];
}

export interface LocaleContent {
  nav: {
    home: string;
    aboutMira: string;
    modules: string;
    aboutUs: string;
    contact: string;
    moduleRegistration: string;
    moduleReservation: string;
    moduleStock: string;
    moduleMaintenance: string;
  };
  footer: {
    tagline: string;
    company: string;
    newsletter: string;
    copyright: string;
  };
  common: {
    demoHref: string;
    contactHref: string;
    languageLabel: string;
  };
  pages: Record<PageKey, PageContent>;
}

export const siteContent: Record<Locale, LocaleContent> = {
  nl: {
    nav: {
      home: "Home",
      aboutMira: "Over Mira",
      modules: "Modules",
      aboutUs: "Over ons",
      contact: "Contact",
      moduleRegistration: "Registratie gebruik & verbruik",
      moduleReservation: "Reservatie, verhuur en pickinglijsten",
      moduleStock: "Stock en bestellingen",
      moduleMaintenance: "Onderhoud en herstellingen"
    },
    footer: {
      tagline: "Efficient beheer van al uw materiaal, gereedschap en verbruiksgoederen.",
      company: "IZIT bv - Dokter Armand Rubbensstraat 1, 9240 Zele",
      newsletter: "Blijf op de hoogte over materiaalbeheer",
      copyright: "© 2026 Mira Software. IZIT bv alle rechten voorbehouden."
    },
    common: { demoHref: "/contact", contactHref: "/contact", languageLabel: "Taal" },
    pages: {
      home: {
        seoTitle: "MIRA Software - Materiaalbeheer",
        seoDescription: "Software voor opvolging van materiaal, verbruik, reservatie en onderhoud.",
        hero: {
          eyebrow: "Beheer materiaal efficient en eenvoudig",
          title: "MIRA Software voor beheer van al uw materiaal",
          subtitle:
            "Krijg inzicht in gebruik, verbruik, stock, reservaties en onderhoud van groot en klein materiaal in uw organisatie.",
          primaryLabel: "Boek een gratis demo",
          secondaryLabel: "Ontdek de modules"
        },
        sections: [
          {
            type: "cards",
            title: "Materiaal en materieel opvolgen",
            items: [
              { title: "Uitlenen", body: "Registreer wie wat gebruikt, waar het gebruikt wordt en wie terugbrengt." },
              { title: "Reserveren", body: "Plan beschikbaarheid van toestellen, gereedschap en uitleenmateriaal." },
              { title: "Stock beheren", body: "Volg voorraad, waarde en minimumniveaus op in een centraal overzicht." },
              { title: "Onderhoud", body: "Beheer keuringen, inspecties, onderhoudshistoriek en herstellingen." }
            ]
          },
          {
            type: "quote",
            quote:
              "Als ik slechts een aspect van MIRA mag aanraden, is het de gebruiksvriendelijkheid: weinig handelingen en zeer eenvoudig aanpasbaar.",
            author: "Karel Maartens",
            role: "Logistiek Jan De Nul - A11"
          },
          {
            type: "list",
            title: "Voor elke organisatie waar materiaal beweegt",
            items: [
              "Bouwbedrijven",
              "Installatietechniek",
              "Overheid en lokaal bestuur",
              "Maritieme sector",
              "Onderwijs en cultuur",
              "Andere bedrijven met uitleen- en stockbeheer"
            ]
          },
          {
            type: "cta",
            title: "Interesse in een live demo?",
            body: "We tonen graag hoe MIRA in uw organisatie past, volledig vrijblijvend.",
            primaryLabel: "Vraag een demo",
            primaryHref: "/contact"
          }
        ]
      },
      aboutMira: {
        seoTitle: "Over Mira",
        seoDescription: "Waarom organisaties kiezen voor Mira Software.",
        hero: {
          eyebrow: "Over Mira",
          title: "Een totaaloplossing voor materiaalbeheer",
          subtitle: "Van scanregistratie tot onderhoudsopvolging: alles in een gebruiksvriendelijk platform.",
          primaryLabel: "Vraag een demo",
          secondaryLabel: "Contacteer ons"
        },
        sections: [
          {
            type: "text",
            title: "Waarom Mira",
            body: [
              "MIRA centraliseert informatie die vaak verspreid zit over verschillende Excelbestanden en teams.",
              "U werkt met een duidelijk proces voor uitlenen, reserveren, stockbeheer en onderhoud, volledig op maat van uw organisatie."
            ]
          },
          {
            type: "cards",
            title: "Wat u wint",
            items: [
              { title: "Sneller werken", body: "Minder zoeken naar materiaal, meer tijd voor operationeel werk." },
              { title: "Volledige traceerbaarheid", body: "Altijd weten wie materiaal gebruikte en in welke staat." },
              { title: "Minder fouten", body: "Eenduidige registratie en actuele voorraadinformatie." }
            ]
          }
        ]
      },
      moduleRegistration: {
        seoTitle: "Module Registratie gebruik en verbruik",
        seoDescription: "Registreer snel wie welk materiaal gebruikt en verbruikt.",
        hero: {
          eyebrow: "Module",
          title: "Registratie gebruik en verbruik",
          subtitle: "Scan materiaal in en uit zoals aan de kassa. Snel, correct en volledig traceerbaar.",
          primaryLabel: "Boek een demo",
          secondaryLabel: "Bekijk andere modules"
        },
        sections: [
          {
            type: "list",
            title: "Wat u registreert",
            items: [
              "Wie gebruikte het materiaal",
              "Waar en wanneer het gebruikt werd",
              "Hoeveel en hoe lang het gebruikt werd",
              "Door wie het werd teruggebracht"
            ]
          }
        ]
      },
      moduleReservation: {
        seoTitle: "Module Reservatie, verhuur en pickinglijsten",
        seoDescription: "Plan en reserveer materiaal met duidelijk zicht op beschikbaarheid.",
        hero: {
          eyebrow: "Module",
          title: "Reservatie, verhuur en pickinglijsten",
          subtitle: "Bereid projecten voor met duidelijke reservaties en praktische pickinglijsten.",
          primaryLabel: "Vraag een demo",
          secondaryLabel: "Contacteer ons"
        },
        sections: [
          {
            type: "cards",
            title: "Plan met vertrouwen",
            items: [
              { title: "Beschikbaarheid", body: "Controleer meteen of een toestel vrij is op de juiste periode." },
              { title: "Projectvoorbereiding", body: "Stel picks samen per project, team of klant." },
              { title: "Minder conflict", body: "Voorkom dubbelboekingen met eenduidige reservaties." }
            ]
          }
        ]
      },
      moduleStock: {
        seoTitle: "Module Stock en bestellingen",
        seoDescription: "Hou grip op voorraadniveaus, waarden en bestelmomenten.",
        hero: {
          eyebrow: "Module",
          title: "Stock en bestellingen",
          subtitle: "Volg actuele voorraad en waarde op en bestel op het juiste moment.",
          primaryLabel: "Boek een demo",
          secondaryLabel: "Over Mira"
        },
        sections: [
          {
            type: "text",
            title: "Voorraad zonder verrassingen",
            body: [
              "MIRA toont actuele stock per locatie en helpt tekorten voorkomen via duidelijke signalen.",
              "U beheert zowel verbruiksgoederen als grijpvoorraad in een uniforme werkwijze."
            ]
          }
        ]
      },
      moduleMaintenance: {
        seoTitle: "Module Onderhoud en herstellingen",
        seoDescription: "Volg onderhoud, keuringen en herstellingen van materiaal en toestellen.",
        hero: {
          eyebrow: "Module",
          title: "Onderhoud en herstellingen",
          subtitle: "Beheer onderhoudshistoriek, inspecties en gebruiksstatus van elk toestel.",
          primaryLabel: "Vraag een demo",
          secondaryLabel: "Contact"
        },
        sections: [
          {
            type: "list",
            title: "Veilig en conform",
            items: [
              "Overzicht van onderhoudsbeurten",
              "Signalering van komende keuringen",
              "Historiek van defecten en herstellingen",
              "Inzicht in toestellen die tijdelijk buiten gebruik zijn"
            ]
          }
        ]
      },
      aboutUs: {
        seoTitle: "Over ons - Mira Software",
        seoDescription: "MIRA Software is een product van IZIT bv.",
        hero: {
          eyebrow: "Over ons",
          title: "Een team dat materiaalbeheer werkbaar maakt",
          subtitle: "Wij vertalen magazijn- en werfrealiteit naar software die medewerkers graag gebruiken.",
          primaryLabel: "Contacteer ons",
          secondaryLabel: "Vraag een demo"
        },
        sections: [
          {
            type: "text",
            title: "Onze aanpak",
            body: [
              "We combineren praktijkervaring met pragmische softwareontwikkeling.",
              "Elke implementatie vertrekt vanuit uw processen, niet vanuit een rigide standaard."
            ]
          }
        ]
      },
      contact: {
        seoTitle: "Contact - Mira Software",
        seoDescription: "Contacteer Mira Software of vraag een live demo aan.",
        hero: {
          eyebrow: "Contact",
          title: "Contacteer ons of vraag een demo",
          subtitle: "Laat enkele gegevens achter en we contacteren u snel voor een verkennend gesprek.",
          primaryLabel: "Vraag een demo",
          secondaryLabel: "Mail ons"
        },
        sections: [
          {
            type: "text",
            title: "Contactgegevens",
            body: ["sales@mirasoftware.be", "+32 (0)52 52 07 49", "IZIT bv - Dokter Armand Rubbensstraat 1, 9240 Zele"]
          }
        ]
      }
    }
  },
  fr: {} as LocaleContent,
  it: {} as LocaleContent,
  de: {} as LocaleContent
};

siteContent.fr = JSON.parse(JSON.stringify(siteContent.nl));
siteContent.it = JSON.parse(JSON.stringify(siteContent.nl));
siteContent.de = JSON.parse(JSON.stringify(siteContent.nl));

siteContent.fr.nav = {
  home: "Accueil",
  aboutMira: "A propos de Mira",
  modules: "Modules",
  aboutUs: "A propos",
  contact: "Contact",
  moduleRegistration: "Enregistrement usage et consommation",
  moduleReservation: "Reservation, location et listes de preparation",
  moduleStock: "Stock et commandes",
  moduleMaintenance: "Maintenance et reparations"
};
siteContent.fr.footer = {
  tagline: "Gestion efficace de votre materiel, outillage et consommables.",
  company: "IZIT bv - Dokter Armand Rubbensstraat 1, 9240 Zele",
  newsletter: "Restez informe sur la gestion du materiel",
  copyright: "© 2026 Mira Software. IZIT bv tous droits reserves."
};
siteContent.it.nav = {
  home: "Home",
  aboutMira: "Su Mira",
  modules: "Moduli",
  aboutUs: "Chi siamo",
  contact: "Contatti",
  moduleRegistration: "Registrazione utilizzo e consumo",
  moduleReservation: "Prenotazione, noleggio e liste picking",
  moduleStock: "Magazzino e ordini",
  moduleMaintenance: "Manutenzione e riparazioni"
};
siteContent.it.footer = {
  tagline: "Gestione efficiente di materiali, attrezzature e consumabili.",
  company: "IZIT bv - Dokter Armand Rubbensstraat 1, 9240 Zele",
  newsletter: "Resta aggiornato sulla gestione dei materiali",
  copyright: "© 2026 Mira Software. IZIT bv tutti i diritti riservati."
};
siteContent.de.nav = {
  home: "Startseite",
  aboutMira: "Uber Mira",
  modules: "Module",
  aboutUs: "Uber uns",
  contact: "Kontakt",
  moduleRegistration: "Erfassung von Nutzung und Verbrauch",
  moduleReservation: "Reservierung, Vermietung und Kommissionierlisten",
  moduleStock: "Lager und Bestellungen",
  moduleMaintenance: "Wartung und Reparaturen"
};
siteContent.de.footer = {
  tagline: "Effiziente Verwaltung von Material, Werkzeugen und Verbrauchsgutern.",
  company: "IZIT bv - Dokter Armand Rubbensstraat 1, 9240 Zele",
  newsletter: "Bleiben Sie auf dem Laufenden zum Materialmanagement",
  copyright: "© 2026 Mira Software. IZIT bv alle Rechte vorbehalten."
};

siteContent.fr.common = { demoHref: "/fr/contact", contactHref: "/fr/contact", languageLabel: "Langue" };
siteContent.it.common = { demoHref: "/it/contatti", contactHref: "/it/contatti", languageLabel: "Lingua" };
siteContent.de.common = { demoHref: "/de/kontakt", contactHref: "/de/kontakt", languageLabel: "Sprache" };

siteContent.fr.pages.home.hero = {
  eyebrow: "Gerer votre materiel simplement et efficacement",
  title: "MIRA Software pour la gestion de tout votre materiel",
  subtitle:
    "Obtenez une vision claire de l'utilisation, de la consommation, du stock, des reservations et de la maintenance.",
  primaryLabel: "Demander une demo gratuite",
  secondaryLabel: "Decouvrir les modules"
};
siteContent.fr.pages.aboutMira.hero = {
  eyebrow: "A propos de Mira",
  title: "Une solution complete de gestion du materiel",
  subtitle: "De l'enregistrement par scan au suivi de maintenance dans une seule plateforme conviviale.",
  primaryLabel: "Demander une demo",
  secondaryLabel: "Nous contacter"
};
siteContent.fr.pages.moduleRegistration.hero = {
  eyebrow: "Module",
  title: "Enregistrement de l'usage et de la consommation",
  subtitle: "Scannez les entrees et sorties comme a la caisse, rapidement et sans erreurs.",
  primaryLabel: "Demander une demo",
  secondaryLabel: "Voir les autres modules"
};
siteContent.fr.pages.moduleReservation.hero = {
  eyebrow: "Module",
  title: "Reservation, location et listes de preparation",
  subtitle: "Preparez chaque projet avec des reservations claires et des listes de picking pratiques.",
  primaryLabel: "Demander une demo",
  secondaryLabel: "Nous contacter"
};
siteContent.fr.pages.moduleStock.hero = {
  eyebrow: "Module",
  title: "Stock et commandes",
  subtitle: "Suivez les niveaux de stock et la valeur en temps reel pour commander au bon moment.",
  primaryLabel: "Demander une demo",
  secondaryLabel: "A propos de Mira"
};
siteContent.fr.pages.moduleMaintenance.hero = {
  eyebrow: "Module",
  title: "Maintenance et reparations",
  subtitle: "Gardez l'historique des entretiens, inspections et reparations de chaque equipement.",
  primaryLabel: "Demander une demo",
  secondaryLabel: "Contact"
};
siteContent.fr.pages.aboutUs.hero = {
  eyebrow: "A propos",
  title: "Une equipe orientee terrain",
  subtitle: "Nous transformons la realite operationnelle en logiciel utile au quotidien.",
  primaryLabel: "Nous contacter",
  secondaryLabel: "Demander une demo"
};
siteContent.fr.pages.contact.hero = {
  eyebrow: "Contact",
  title: "Contactez-nous ou demandez une demo",
  subtitle: "Laissez vos coordonnees et nous revenons vers vous rapidement.",
  primaryLabel: "Demander une demo",
  secondaryLabel: "Envoyer un email"
};

siteContent.it.pages.home.hero = {
  eyebrow: "Gestione materiali semplice ed efficiente",
  title: "MIRA Software per gestire tutti i tuoi materiali",
  subtitle:
    "Ottieni una visione completa di utilizzo, consumo, stock, prenotazioni e manutenzione della tua organizzazione.",
  primaryLabel: "Prenota una demo gratuita",
  secondaryLabel: "Scopri i moduli"
};
siteContent.it.pages.aboutMira.hero = {
  eyebrow: "Su Mira",
  title: "Una soluzione completa per la gestione materiali",
  subtitle: "Dalla registrazione tramite scansione al monitoraggio manutenzioni in un'unica piattaforma.",
  primaryLabel: "Richiedi una demo",
  secondaryLabel: "Contattaci"
};
siteContent.it.pages.moduleRegistration.hero = {
  eyebrow: "Modulo",
  title: "Registrazione utilizzo e consumo",
  subtitle: "Scansiona entrate e uscite in modo rapido, preciso e completamente tracciabile.",
  primaryLabel: "Richiedi una demo",
  secondaryLabel: "Vedi gli altri moduli"
};
siteContent.it.pages.moduleReservation.hero = {
  eyebrow: "Modulo",
  title: "Prenotazione, noleggio e liste picking",
  subtitle: "Prepara i progetti con prenotazioni chiare e liste operative per il magazzino.",
  primaryLabel: "Richiedi una demo",
  secondaryLabel: "Contattaci"
};
siteContent.it.pages.moduleStock.hero = {
  eyebrow: "Modulo",
  title: "Magazzino e ordini",
  subtitle: "Controlla giacenze e valore dello stock per ordinare nel momento giusto.",
  primaryLabel: "Richiedi una demo",
  secondaryLabel: "Su Mira"
};
siteContent.it.pages.moduleMaintenance.hero = {
  eyebrow: "Modulo",
  title: "Manutenzione e riparazioni",
  subtitle: "Gestisci storici di manutenzione, verifiche e riparazioni per ogni attrezzatura.",
  primaryLabel: "Richiedi una demo",
  secondaryLabel: "Contatti"
};
siteContent.it.pages.aboutUs.hero = {
  eyebrow: "Chi siamo",
  title: "Un team che conosce il lavoro sul campo",
  subtitle: "Traduciamo i processi reali in software pratico e facile da usare.",
  primaryLabel: "Contattaci",
  secondaryLabel: "Richiedi una demo"
};
siteContent.it.pages.contact.hero = {
  eyebrow: "Contatti",
  title: "Contattaci o richiedi una demo",
  subtitle: "Lasciaci i tuoi dati e ti ricontatteremo rapidamente.",
  primaryLabel: "Richiedi una demo",
  secondaryLabel: "Invia email"
};

siteContent.de.pages.home.hero = {
  eyebrow: "Materialverwaltung einfach und effizient",
  title: "MIRA Software fur die Verwaltung Ihres gesamten Materials",
  subtitle:
    "Erhalten Sie volle Transparenz uber Nutzung, Verbrauch, Lagerbestand, Reservierungen und Wartung.",
  primaryLabel: "Kostenlose Demo buchen",
  secondaryLabel: "Module entdecken"
};
siteContent.de.pages.aboutMira.hero = {
  eyebrow: "Uber Mira",
  title: "Die Komplettlosung fur Materialmanagement",
  subtitle: "Von Scan-Erfassung bis Wartungsplanung in einer benutzerfreundlichen Plattform.",
  primaryLabel: "Demo anfragen",
  secondaryLabel: "Kontakt"
};
siteContent.de.pages.moduleRegistration.hero = {
  eyebrow: "Modul",
  title: "Erfassung von Nutzung und Verbrauch",
  subtitle: "Material schnell und fehlerfrei per Scan ein- und ausbuchen.",
  primaryLabel: "Demo anfragen",
  secondaryLabel: "Weitere Module"
};
siteContent.de.pages.moduleReservation.hero = {
  eyebrow: "Modul",
  title: "Reservierung, Vermietung und Kommissionierlisten",
  subtitle: "Planen Sie Projekte mit klaren Reservierungen und praktischen Kommissionierlisten.",
  primaryLabel: "Demo anfragen",
  secondaryLabel: "Kontakt"
};
siteContent.de.pages.moduleStock.hero = {
  eyebrow: "Modul",
  title: "Lager und Bestellungen",
  subtitle: "Behalten Sie Bestand und Lagerwert im Blick und bestellen Sie rechtzeitig.",
  primaryLabel: "Demo anfragen",
  secondaryLabel: "Uber Mira"
};
siteContent.de.pages.moduleMaintenance.hero = {
  eyebrow: "Modul",
  title: "Wartung und Reparaturen",
  subtitle: "Verwalten Sie Wartungshistorie, Prufungen und Reparaturen jeder Anlage.",
  primaryLabel: "Demo anfragen",
  secondaryLabel: "Kontakt"
};
siteContent.de.pages.aboutUs.hero = {
  eyebrow: "Uber uns",
  title: "Ein Team mit Praxisfokus",
  subtitle: "Wir ubersetzen reale Betriebsablaufe in Software, die Teams gerne nutzen.",
  primaryLabel: "Kontakt",
  secondaryLabel: "Demo anfragen"
};
siteContent.de.pages.contact.hero = {
  eyebrow: "Kontakt",
  title: "Kontaktieren Sie uns oder fordern Sie eine Demo an",
  subtitle: "Hinterlassen Sie Ihre Daten und wir melden uns zeitnah bei Ihnen.",
  primaryLabel: "Demo anfragen",
  secondaryLabel: "E-Mail senden"
};

siteContent.fr.pages.home.seoTitle = "MIRA Software - Gestion du materiel";
siteContent.fr.pages.home.seoDescription = "Logiciel pour suivre usage, consommation, stock, reservation et maintenance.";
siteContent.fr.pages.home.sections = [
  {
    type: "cards",
    title: "Suivi du materiel",
    items: [
      { title: "Pret", body: "Enregistrez qui utilise quoi, ou et quand." },
      { title: "Reservation", body: "Planifiez facilement la disponibilite des equipements." },
      { title: "Stock", body: "Suivez niveaux, valeur et seuils de reapprovisionnement." },
      { title: "Maintenance", body: "Gerez controles, inspections et reparations." }
    ]
  },
  { type: "list", title: "Pour chaque organisation ou le materiel circule", items: ["Construction", "Secteur public", "Maritime", "Education", "Culture", "Services techniques"] },
  { type: "cta", title: "Interesse par une demo en direct ?", body: "Nous vous montrons MIRA selon votre contexte.", primaryLabel: "Demander une demo", primaryHref: "/fr/contact" }
];
siteContent.fr.pages.aboutMira.sections = [{ type: "text", title: "Pourquoi Mira", body: ["MIRA centralise les donnees souvent dispersees.", "Vous obtenez un processus clair pour pret, reservation, stock et maintenance."] }];
siteContent.fr.pages.moduleRegistration.sections = [{ type: "list", title: "Ce que vous enregistrez", items: ["Qui a utilise le materiel", "Ou et quand", "Combien et pendant combien de temps", "Qui a retourne le materiel"] }];
siteContent.fr.pages.moduleReservation.sections = [{ type: "cards", title: "Planification fiable", items: [{ title: "Disponibilite", body: "Controle immediate des disponibilites." }, { title: "Preparation", body: "Listes de picking par projet ou client." }, { title: "Moins de conflits", body: "Evitez les doubles reservations." }] }];
siteContent.fr.pages.moduleStock.sections = [{ type: "text", title: "Stock sans surprises", body: ["Visualisez le stock actuel par emplacement.", "Evitez les ruptures avec des alertes claires."] }];
siteContent.fr.pages.moduleMaintenance.sections = [{ type: "list", title: "Securite et conformite", items: ["Historique maintenance", "Alertes de controle", "Suivi des reparations", "Etat d'utilisation des equipements"] }];
siteContent.fr.pages.aboutUs.sections = [{ type: "text", title: "Notre approche", body: ["Nous combinons terrain et developpement pragmatique.", "Chaque implementation part de vos processus."] }];
siteContent.fr.pages.contact.sections = [{ type: "text", title: "Coordonnees", body: ["sales@mirasoftware.be", "+32 (0)52 52 07 49", "IZIT bv - Dokter Armand Rubbensstraat 1, 9240 Zele"] }];

siteContent.it.pages.home.seoTitle = "MIRA Software - Gestione materiali";
siteContent.it.pages.home.seoDescription = "Software per monitorare utilizzo, consumo, stock, prenotazioni e manutenzione.";
siteContent.it.pages.home.sections = [
  {
    type: "cards",
    title: "Gestione materiali e attrezzature",
    items: [
      { title: "Prestito", body: "Registra chi usa cosa, dove e quando." },
      { title: "Prenotazione", body: "Pianifica la disponibilita di strumenti e dispositivi." },
      { title: "Magazzino", body: "Controlla giacenze, valore e livelli minimi." },
      { title: "Manutenzione", body: "Traccia controlli, ispezioni e riparazioni." }
    ]
  },
  { type: "list", title: "Per ogni organizzazione dove i materiali si muovono", items: ["Edilizia", "Enti pubblici", "Settore marittimo", "Scuola", "Cultura", "Servizi tecnici"] },
  { type: "cta", title: "Vuoi una demo dal vivo?", body: "Ti mostriamo MIRA in base al tuo contesto.", primaryLabel: "Richiedi una demo", primaryHref: "/it/contatti" }
];
siteContent.it.pages.aboutMira.sections = [{ type: "text", title: "Perche Mira", body: ["MIRA centralizza informazioni spesso sparse.", "Ottieni un processo chiaro per prestito, prenotazione, stock e manutenzione."] }];
siteContent.it.pages.moduleRegistration.sections = [{ type: "list", title: "Cosa registri", items: ["Chi ha usato il materiale", "Dove e quando e stato usato", "Quanto e per quanto tempo", "Chi lo ha restituito"] }];
siteContent.it.pages.moduleReservation.sections = [{ type: "cards", title: "Pianifica con sicurezza", items: [{ title: "Disponibilita", body: "Verifica subito se un dispositivo e libero." }, { title: "Preparazione", body: "Liste picking per progetto o cliente." }, { title: "Meno conflitti", body: "Evita doppie prenotazioni." }] }];
siteContent.it.pages.moduleStock.sections = [{ type: "text", title: "Magazzino sotto controllo", body: ["Visualizza lo stock attuale per sede.", "Evita rotture con segnalazioni chiare."] }];
siteContent.it.pages.moduleMaintenance.sections = [{ type: "list", title: "Sicurezza e conformita", items: ["Storico manutenzioni", "Avvisi di verifiche", "Storico guasti e riparazioni", "Stato operativo dei dispositivi"] }];
siteContent.it.pages.aboutUs.sections = [{ type: "text", title: "Il nostro metodo", body: ["Uniamo esperienza sul campo e sviluppo pragmatico.", "Ogni implementazione parte dai tuoi processi."] }];
siteContent.it.pages.contact.sections = [{ type: "text", title: "Contatti", body: ["sales@mirasoftware.be", "+32 (0)52 52 07 49", "IZIT bv - Dokter Armand Rubbensstraat 1, 9240 Zele"] }];

siteContent.de.pages.home.seoTitle = "MIRA Software - Materialmanagement";
siteContent.de.pages.home.seoDescription = "Software fur Nutzung, Verbrauch, Lager, Reservierung und Wartung.";
siteContent.de.pages.home.sections = [
  {
    type: "cards",
    title: "Material und Betriebsmittel verfolgen",
    items: [
      { title: "Ausleihe", body: "Erfassen Sie, wer was wann und wo nutzt." },
      { title: "Reservierung", body: "Planen Sie die Verfugbarkeit von Geraten und Werkzeug." },
      { title: "Lager", body: "Uberwachen Sie Bestand, Wert und Mindestmengen." },
      { title: "Wartung", body: "Verwalten Sie Prufungen, Inspektionen und Reparaturen." }
    ]
  },
  { type: "list", title: "Fur alle Organisationen mit Materialbewegung", items: ["Bauwesen", "Offentliche Verwaltung", "Maritimer Bereich", "Bildung", "Kultur", "Technische Dienste"] },
  { type: "cta", title: "Interesse an einer Live-Demo?", body: "Wir zeigen MIRA passend zu Ihren Ablaufen.", primaryLabel: "Demo anfragen", primaryHref: "/de/kontakt" }
];
siteContent.de.pages.aboutMira.sections = [{ type: "text", title: "Warum Mira", body: ["MIRA zentralisiert oft verteilte Informationen.", "Sie erhalten klare Prozesse fur Ausleihe, Reservierung, Lager und Wartung."] }];
siteContent.de.pages.moduleRegistration.sections = [{ type: "list", title: "Was wird erfasst", items: ["Wer das Material genutzt hat", "Wo und wann es genutzt wurde", "Wie viel und wie lange", "Wer es zuruckgebracht hat"] }];
siteContent.de.pages.moduleReservation.sections = [{ type: "cards", title: "Sicher planen", items: [{ title: "Verfugbarkeit", body: "Sofort sehen, ob ein Gerat frei ist." }, { title: "Projektvorbereitung", body: "Kommissionierlisten pro Projekt oder Kunde." }, { title: "Weniger Konflikte", body: "Doppelbuchungen vermeiden." }] }];
siteContent.de.pages.moduleStock.sections = [{ type: "text", title: "Lager ohne Uberraschungen", body: ["Aktueller Bestand je Standort.", "Engpasse mit klaren Warnungen vermeiden."] }];
siteContent.de.pages.moduleMaintenance.sections = [{ type: "list", title: "Sicher und konform", items: ["Wartungshistorie", "Hinweise auf anstehende Prufungen", "Reparaturverlauf", "Status nicht verfugbarer Gerate"] }];
siteContent.de.pages.aboutUs.sections = [{ type: "text", title: "Unser Ansatz", body: ["Wir verbinden Praxiserfahrung mit pragmatischer Entwicklung.", "Jede Einfuhrung startet bei Ihren Prozessen."] }];
siteContent.de.pages.contact.sections = [{ type: "text", title: "Kontaktdaten", body: ["sales@mirasoftware.be", "+32 (0)52 52 07 49", "IZIT bv - Dokter Armand Rubbensstraat 1, 9240 Zele"] }];
