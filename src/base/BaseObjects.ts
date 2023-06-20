import { Utilities } from "./Utilities";

export module BaseObjects {
    export class BaseObject {
        data: any;
        defaultKeys: any;

        constructor() {
            this.data = new Map<string, string>();
        }

        update(update: any): void {
            for (const key in update) {
                if (this.defaultKeys[key]) {
                    for (const val in update[key]) {
                        if (this.defaultKeys[key][val]) {
                            this.data[key][val] = update[key][val];
                        }
                    }
                }
            }
        }

        exportAsJSON(): string {
            return JSON.stringify(this.data);
        }
    }
    
    export class WettkampfdefinitionslisteObject extends BaseObject {
        constructor() {
            super();

            this.defaultKeys = {
                format: {
                    min_vorkommen: 1,
                    max_vorkommen: 1,
                    listart: {
                        required: true,
                        type: "string",
                        default: "Wettkampfdefinitionsliste"
                    },
                    version: {
                        required: true,
                        type: "string",
                        default: "1.0",
                        regex: "^([0-9]{1,2})\\.([0-9]{1,2})$",
                    }
                },

                erzeuger: {
                    min_vorkommen: 1,
                    max_vorkommen: 1,
                    software: {
                        required: true,
                        type: "string",
                        default: "SwimBud"
                    },
                    version: {
                        required: true,
                        type: "string",
                        default: "1.0",
                        regex: "^([0-9]{1,2})\\.([0-9]{1,2})$",
                    },
                    kontakt: {
                        required: true,
                        type: "string",
                        default: "dsv@dcky.io"
                    }
                },

                veranstaltung: {
                    min_vorkommen: 1,
                    max_vorkommen: 1,
                    veranstaltungsbezeichnung: {
                        required: true,
                        type: "string",
                    },
                    veranstaltungsort: {
                        required: true,
                        type: "string",
                    },
                    bahnlänge: {
                        required: true,
                        type: "select",
                        options: [
                            "16",
                            "20",
                            "25",
                            "33",
                            "50",
                            "FW",
                            "X"
                        ],
                    },
                    zeitmessung: {
                        required: true,
                        type: "select",
                        options: [
                            "HANDZEIT",
                            "AUTOMATISCH",
                            "HALBAUTOMATISCH"
                        ],
                    },
                },

                veranstaltungsort: {
                    min_vorkommen: 1,
                    max_vorkommen: 1,
                    name: {
                        required: true,
                        type: "string",
                    },
                    straße: {
                        type: "string",
                    },
                    plz: {
                        type: "string",
                    },
                    ort: {
                        required: true,
                        type: "string",
                    },
                    land: {
                        required: true,
                        type: "string",
                    },
                    telefon: {
                        type: "string",
                    },
                    fax: {
                        type: "string",
                    },
                    email: {
                        type: "string",
                    },
                },

                ausschreibungimnetz: {
                    min_vorkommen: 1,
                    max_vorkommen: 1,
                    internetadresse: {
                        type: "string",
                        default: "https://www.dsv.de/schwimmen/wettkampf-national/ausschreibungen/"
                    },
                },

                veranstalter: {
                    min_vorkommen: 1,
                    max_vorkommen: 1,
                    name: {
                        required: true,
                        type: "string",
                    },
                },

                ausrichter: {
                    
                    min_vorkommen: 1,
                    max_vorkommen: 1,
                    name: {
                        required: true,
                        type: "string",
                    },
                    kontaktperson: {
                        required: true,
                        type: "string",
                    },
                    straße: {
                        type: "string",
                    },
                    plz: {
                        type: "string",
                    },
                    ort: {
                        type: "string",
                    },
                    land: {
                        type: "string",
                    },
                    telefon: {
                        type: "string",
                    },
                    fax: {
                        type: "string",
                    },
                    email: {
                        required: true,
                        type: "string",
                    },
                },

                meldeadresse: {
                    min_vorkommen: 1,
                    max_vorkommen: 1,
                    name: {
                        required: true,
                        type: "string",
                    },
                    straße: {
                        type: "string",
                    },
                    plz: {
                        type: "string",
                    },
                    ort: {
                        type: "string",
                    },
                    land: {
                        type: "string",
                    },
                    telefon: {
                        type: "string",
                    },
                    fax: {
                        type: "string",
                    },
                    email: {
                        required: true,
                        type: "string",
                    },
                },

                meldeschluss: {
                    min_vorkommen: 1,
                    max_vorkommen: 1,
                    datum: {
                        required: true,
                        type: "date",
                        regex: "^([0-9]{2})-([0-9]{2})-([0-9]{4})$",
                    },
                    uhrzeit: {
                        required: true,
                        type: "time",
                        regex: "^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$",
                    },
                },

                bankverbindung: {
                    min_vorkommen: 0,
                    max_vorkommen: 1,
                    name: {
                        type: "string",
                    },
                    iban: {
                        required: true,
                        type: "string",
                        regex: "^[A-Z]{2}[0-9]{2}[A-Z0-9 ]{1,30}$",
                    },
                    bic: {
                        type: "string",
                    },
                },

                besonderes: {
                    min_vorkommen: 0,
                    max_vorkommen: 1,
                    anmerkungen: {
                        required: true,
                        type: "string",
                    },
                },

                nachweis: {
                    min_vorkommen: 0,
                    max_vorkommen: 1,
                    von: {
                        required: true,
                        type: "date",
                        regex: "^([0-9]{2})-([0-9]{2})-([0-9]{4})$",
                    },
                    bis: {
                        type: "date",
                        regex: "^([0-9]{2})-([0-9]{2})-([0-9]{4})$",
                    },
                    bahnlänge: {
                        required: true,
                        type: "select",
                        options: [
                            "25",
                            "50",
                            "FW",
                            "AL"
                        ],
                    },
                },

                abschnitt: {
                    min_vorkommen: 1,
                    nummer: {
                        required: true,
                        type: "number",
                    },
                    datum: {
                        required: true,
                        type: "date",
                        regex: "^([0-9]{2})-([0-9]{2})-([0-9]{4})$",
                    },
                    einlass: {
                        type: "time",
                        regex: "^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$",
                    },
                    kampfrichterbesprechung: {
                        type: "time",
                        regex: "^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$",
                    },
                    beginn: {
                        required: true,
                        type: "time",
                        regex: "^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$",
                    },
                    relativ: {
                        type: "select",
                        default: "N",
                        options: [
                            "J",
                            "N"
                        ],
                    },
                },

                wettkampf: {
                    min_vorkommen: 1,
                    nummer: {
                        required: true,
                        type: "number",
                    },
                    art: {
                        required: true,
                        type: "select",
                        options: [
                            "E",
                            "F",
                            "Z",
                            "V",
                        ],
                    },
                    abschnittsnummer: {
                        required: true,
                        type: "number",
                    },
                    anzahl_starter: {
                        type: "number",
                    },
                    einzelstrecke: {
                        required: true,
                        type: "number",
                    },
                    technik: {
                        required: true,
                        type: "select",
                        options: [
                            "B",
                            "R",
                            "S",
                            "L",
                            "F",
                            "X",
                        ],
                    },
                    ausübung: {
                        required: true,
                        type: "select",
                        options: [
                            "GL",
                            "BE",
                            "AR",
                            "ST",
                            "WE",
                            "GB",
                            "X",
                        ],
                    },
                    geschlecht: {
                        required: true,
                        type: "select",
                        options: [
                            "M",
                            "W",
                            "X",
                        ],
                    },
                    zuordnung_bestenliste: {
                        required: true,
                        type: "select",
                        options: [
                            "EW",
                            "PA",
                            "MS",
                            "KG",
                            "XX",
                        ],
                    },
                    qualifikations_wettkampf_nummer: {
                        type: "number",
                    },
                    qualifikations_wettkampf_art: {
                        type: "select",
                        options: [
                            "E",
                            "F",
                            "Z",
                            "V",
                        ],
                    },
                },

                wertung: {
                    min_vorkommen: 1,
                    wettkampf_nummer: {
                        required: true,
                        type: "number",
                    },
                    wettkampf_art: {
                        required: true,
                        type: "select",
                        options: [
                            "E",
                            "F",
                            "Z",
                            "V",
                        ],
                    },
                    wertungs_id: {
                        required: true,
                        type: "number",
                    },
                    wertungsklasse_typ: {
                        required: true,
                        type: "select",
                        options: [
                            "AK",
                            "JG",
                        ],
                    },
                    mindestalter_oder_jahrgang: {
                        required: true,
                        type: "number",
                    },
                    höchstalter_oder_jahrgang: {
                        type: "number",
                    },
                    geschlecht: {
                        type: "select",
                        options: [
                            "M",
                            "W",
                            "D",
                            "X",
                        ],
                    },
                    wertungsname: {
                        required: true,
                        type: "string",
                    },
                },
                
                pflichtzeit: {
                    min_vorkommen: 0,
                    wettkampf_nummer: {
                        required: true,
                        type: "number",
                    },
                    wettkampf_art: {
                        required: true,
                        type: "select",
                        options: [
                            "E",
                            "F",
                            "Z",
                            "V",
                        ],
                    },
                    wertungsklasse_typ: {
                        required: true,
                        type: "select",
                        options: [
                            "AK",
                            "JG",
                        ],
                    },
                    mindestalter_oder_jahrgang: {
                        required: true,
                        type: "number",
                    },
                    höchstalter_oder_jahrgang: {
                        type: "number",
                    },
                    pflichtzeit: {
                        required: true,
                        type: "stopped_time",
                        regex: "^([0-1]?[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9],[0-9][0-9]$",
                    },
                    geschlecht: {
                        type: "select",
                        options: [
                            "M",
                            "W",
                            "D",
                        ],
                    },
                },

                meldegeld: {
                    typ: {
                        required: true,
                        type: "select",
                        options: [
                            "Meldegeldpauschale",
                            "Einzelmeldegeld",
                            "Mannschaftsmeldegeld",
                            "Staffelmeldegeld",
                            "Wkmeldegeld"
                        ],
                    },
                    betrag: {
                        required: true,
                        type: "number",
                    },
                    wettkampf_nummer: {
                        type: "number",
                    },
                }
            }

            this.data = Utilities.ObjectUtils.copyDefaultsWithoutOperators(this.defaultKeys);
        }
    }
}