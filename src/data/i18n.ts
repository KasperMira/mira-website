export const locales = ["nl", "fr", "it", "de"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "nl";

export type PageKey =
  | "home"
  | "aboutMira"
  | "moduleRegistration"
  | "moduleReservation"
  | "moduleStock"
  | "moduleMaintenance"
  | "aboutUs"
  | "contact";

export const pageKeys: PageKey[] = [
  "home",
  "aboutMira",
  "moduleRegistration",
  "moduleReservation",
  "moduleStock",
  "moduleMaintenance",
  "aboutUs",
  "contact"
];

export const pageSlugs: Record<Locale, Record<PageKey, string>> = {
  nl: {
    home: "",
    aboutMira: "over-mira",
    moduleRegistration: "modules/registratie-gebruik-verbruik",
    moduleReservation: "modules/reservatie-verhuur-pickinglijsten",
    moduleStock: "modules/stock-bestellingen",
    moduleMaintenance: "modules/onderhoud-herstellingen",
    aboutUs: "over-ons",
    contact: "contact"
  },
  fr: {
    home: "",
    aboutMira: "a-propos-de-mira",
    moduleRegistration: "modules/enregistrement-usage-consommation",
    moduleReservation: "modules/reservation-location-listes-preparation",
    moduleStock: "modules/stock-commandes",
    moduleMaintenance: "modules/maintenance-reparations",
    aboutUs: "a-propos",
    contact: "contact"
  },
  it: {
    home: "",
    aboutMira: "su-mira",
    moduleRegistration: "moduli/registrazione-utilizzo-consumo",
    moduleReservation: "moduli/prenotazione-noleggio-liste-picking",
    moduleStock: "moduli/magazzino-ordini",
    moduleMaintenance: "moduli/manutenzione-riparazioni",
    aboutUs: "chi-siamo",
    contact: "contatti"
  },
  de: {
    home: "",
    aboutMira: "uber-mira",
    moduleRegistration: "module/erfassung-verbrauch-nutzung",
    moduleReservation: "module/reservierung-vermietung-kommissionierlisten",
    moduleStock: "module/lager-bestellungen",
    moduleMaintenance: "module/wartung-reparaturen",
    aboutUs: "uber-uns",
    contact: "kontakt"
  }
};

export const localeLabels: Record<Locale, string> = {
  nl: "Nederlands",
  fr: "Francais",
  it: "Italiano",
  de: "Deutsch"
};

export function getPath(locale: Locale, pageKey: PageKey): string {
  const slug = pageSlugs[locale][pageKey];

  if (locale === "nl") {
    return slug ? `/${slug}` : "/";
  }

  return slug ? `/${locale}/${slug}` : `/${locale}/`;
}

export function getPageKeyBySlug(locale: Locale, slug: string): PageKey | undefined {
  const normalized = slug.replace(/^\/+|\/+$/g, "");
  return pageKeys.find((key) => pageSlugs[locale][key] === normalized);
}
