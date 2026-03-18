export interface TimelineBook {
  title: string;
  author: string;
  year: string;
  lang: string;
  thumbnail?: string;
  bookSlug?: string;
  externalUrl?: string;
}

export const timelineBooks: Record<string, TimelineBook[]> = {
  "1201": [
    { title: "Chronicon Livoniae", author: "Henry of Livonia", year: "c. 1227", lang: "Latin", thumbnail: "/images/chronicon/p001.jpg", bookSlug: "chronicon-livoniae" },
    { title: "Livl\u00e4ndische Reimchronik", author: "Anonymous", year: "c. 1290", lang: "Middle High German", thumbnail: "/images/gallery/manuscript-livonian-chronicle-192r.jpg", bookSlug: "livonian-chronicle" },
    { title: "The Northern Crusades", author: "Eric Christiansen", year: "1997", lang: "English" },
  ],
  "1202": [
    { title: "Crusade and Conversion on the Baltic Frontier", author: "Alan V. Murray (ed.)", year: "2001", lang: "English" },
    { title: "The Livonian Rhymed Chronicle", author: "trans. Jerry C. Smith & William L. Urban", year: "1977", lang: "English", thumbnail: "/images/gallery/manuscript-livonian-chronicle-193r.jpg", bookSlug: "livonian-chronicle" },
  ],
  "1282": [
    // PRIMARY SOURCES — original documents
    { title: "Hansisches Urkundenbuch, Bd. 1: Nr. 906 \u2014 Riga-L\u00fcbeck-Visby Compact", author: "ed. K. H\u00f6hlbaum", year: "1876", lang: "Latin/German", thumbnail: "/images/gallery/p311_Nr906_1282_Riga_compact.jpg", externalUrl: "https://www.digitale-sammlungen.de/en/view/bsb11327101?page=335" },
    { title: "Hansisches Urkundenbuch, Bd. 1: Nr. 863 \u2014 L\u00fcbeck-Visby Treaty (1280)", author: "ed. K. H\u00f6hlbaum", year: "1876", lang: "Latin/German", thumbnail: "/images/gallery/p299_Nr863_1280_Lubeck_Visby_treaty.jpg", externalUrl: "https://www.digitale-sammlungen.de/en/view/bsb11327101?page=323" },
    { title: "Liv-, Esth- u. Curl\u00e4ndisches Urkundenbuch, Bd. 1: Nr. 548 \u2014 Riga Hanseatic Compact", author: "ed. F.G. von Bunge", year: "1853", lang: "Latin/German", thumbnail: "/images/gallery/n603_Nr548_1282_RIGA_LUBECK_VISBY_COMPACT.jpg", externalUrl: "https://archive.org/details/bub_gb_xXlOAAAAcAAJ" },
    { title: "Livl\u00e4ndische Reimchronik (Cod. Pal. germ. 367)", author: "Anonymous", year: "c. 1290", lang: "Middle High German", thumbnail: "/images/gallery/folio_259r_riga_trade_hub.jpg", bookSlug: "livonian-chronicle" },
    { title: "Novgorod\u2013German Trade Agreement (UNESCO)", author: "Novgorod / German cities / Gotland", year: "1259\u20131263", lang: "Old Church Slavonic", thumbnail: "/images/gallery/LVVA_1259_trade_agreement_novgorod.jpg", externalUrl: "https://www.arhivi.gov.lv/en/unesco-pasaules-atminas-registra-ieklautie-hanzas-vestures-dokumenti" },
    { title: "Smolensk\u2013Riga\u2013Gotland Trade Treaty", author: "Prince Mstislav Davidovich", year: "1229", lang: "Old Russian", thumbnail: "/images/gallery/smolensk_1229_parchment_front.jpg", externalUrl: "https://www.schaeken.nl/lu/research/online/editions/1229/index.html" },
    { title: "Novgorod Kontor Regulations (UNESCO)", author: "Hanseatic Kontor", year: "1295", lang: "Low German", thumbnail: "/images/gallery/LVVA_1295_novgorod_kontor_regulations.jpg", externalUrl: "https://www.arhivi.gov.lv/en/unesco-pasaules-atminas-registra-ieklautie-hanzas-vestures-dokumenti" },
    { title: "Urkundenbuch der Stadt L\u00fcbeck", author: "Verein f\u00fcr L\u00fcbeckische Geschichte", year: "1843\u20131905", lang: "Latin/German", thumbnail: "/images/gallery/title_page.jpg", externalUrl: "https://archive.org/details/bub_gb_2TwOAAAAQAAJ" },
    // SECONDARY SOURCES — scholarly works
    { title: "Geschichte der Stadt Riga", author: "Constantin Mettig", year: "1897", lang: "German", thumbnail: "/images/gallery/mettig_1897_p225_ansicht_von_riga.jpg", externalUrl: "http://dspace.ut.ee/handle/10062/46505" },
    { title: "The Hanse in Medieval and Early Modern Europe", author: "Justyna Wubs-Mrozewicz", year: "2013", lang: "English" },
    { title: "Die Hanse", author: "Philippe Dollinger", year: "1970", lang: "German/French" },
    { title: "Riga als Hansestadt", author: "Friedrich Benninghoven", year: "1961", lang: "German" },
  ],
  "1330": [
    { title: "Die Burgen des Deutschen Ordens in Livland", author: "Karl von L\u00f6wis of Menar", year: "1922", lang: "German", thumbnail: "/images/gallery/area_by_riga_castle_1737.jpg" },
    { title: "Medieval Castles in the Baltic Region", author: "Andris Caune", year: "2004", lang: "English" },
  ],
  "1513": [
    { title: "Fr\u00fchgeschichte des Buchdrucks in Riga", author: "Silvija Augstkalns", year: "1938", lang: "German" },
    { title: "Erclerung der Preussischen Landtaffel", author: "Caspar Hennenberger", year: "1595", lang: "German", thumbnail: "/images/gallery/hennenberger-1595-title.jpg", externalUrl: "https://digitale-sammlungen.de/en/view/bsb10804504" },
  ],
  "1521": [
    { title: "Die Reformation in Livland", author: "Leonid Arbusow", year: "1921", lang: "German" },
    { title: "Statuta Regni Poloniae", author: "Jan \u0141aski", year: "1487", lang: "Latin", thumbnail: "/images/gallery/polona-statuta-poloniae-1487.jpg", externalUrl: "https://polona.pl/preview/03eb48e6-791b-40d7-99f0-13efe1815004" },
  ],
  "1558": [
    { title: "Chronica Der Prouintz Lyfflandt", author: "Balthasar Russow", year: "1578", lang: "Low German", thumbnail: "/images/gallery/russow-1578-title.jpg", externalUrl: "https://digitale-sammlungen.de/en/view/bsb11064920" },
    { title: "The Livonian War 1558\u20131583", author: "Alexander Filjushkin", year: "2018", lang: "English" },
    { title: "Ivan the Terrible and the Livonian War", author: "Mikhail M. Krom", year: "2020", lang: "English" },
  ],
  "1562": [
    { title: "Untergang des Deutschen Ordens in Livland", author: "Friedrich Bienemann", year: "1893", lang: "German" },
    { title: "The Teutonic Order in the Baltic", author: "William L. Urban", year: "2003", lang: "English", thumbnail: "/images/gallery/livlandritter16jh.jpg" },
  ],
  "1581": [
    { title: "Livoniae supplicantis Oratio", author: "Reinhold von Brackel", year: "1597", lang: "Latin", thumbnail: "/images/gallery/polona-livoniae-supplicantis-1597.jpg", externalUrl: "https://polona.pl/preview/cc70c11d-ee85-4125-bc7d-7eae2cc9aaab" },
    { title: "Inflanty Polskie", author: "Gustaw Manteuffel", year: "1879", lang: "Polish" },
  ],
  "1621": [
    { title: "Gustav II Adolf and the Swedish Army", author: "Lars Ericson Wolke", year: "2007", lang: "English" },
    { title: "Riga unter schwedischer Herrschaft", author: "Alexander Bergengruen", year: "1884", lang: "German" },
  ],
  "1632": [
    { title: "Sweden\u2019s Baltic Empire", author: "Jill Lisk", year: "1967", lang: "English" },
    { title: "Die schwedische Zeit in Livland", author: "Arvid Meurling", year: "1953", lang: "German" },
  ],
  "1695": [
    { title: "The Great Famine in the Baltics 1695\u20131697", author: "Martin Seppel", year: "2009", lang: "English" },
    { title: "Climate, Famine and Disease in the Baltic", author: "\u00d6sten Sj\u00f6berg", year: "1998", lang: "English" },
  ],
  "1710": [
    { title: "Peter the Great and the Baltic", author: "Robert K. Massie", year: "1980", lang: "English" },
    { title: "Geschichte der Stadt Riga", author: "Constantin Mettig", year: "1897", lang: "German", thumbnail: "/images/gallery/mettig_1897_p225_ansicht_von_riga.jpg" },
    { title: "Livonia perfide cruentata", author: "Tomasz Polus", year: "1700", lang: "Latin", thumbnail: "/images/gallery/polona-livonia-perfide-1700.jpg", externalUrl: "https://polona.pl/preview/82e3bcfc-5bf5-47bf-b51b-3f9111f61c4a" },
  ],
  "1721": [
    { title: "The Treaty of Nystad and the Baltic Question", author: "Ragnhild Hatton", year: "1968", lang: "English" },
    { title: "Russia\u2019s Western Borderlands 1710\u20131870", author: "Edward C. Thaden", year: "1984", lang: "English" },
  ],
  "1795": [
    { title: "The Partitions of Poland", author: "Jerzy Lukowski", year: "1999", lang: "English" },
    { title: "Die Provinz Kurland unter russischer Herrschaft", author: "August Seraphim", year: "1904", lang: "German" },
  ],
  "1812": [
    { title: "Napoleon\u2019s Invasion of Russia", author: "Alan Palmer", year: "1967", lang: "English" },
    { title: "Die Belagerung von Riga 1812", author: "Johann Christoph Brotze", year: "1812", lang: "German" },
  ],
  "1817": [
    { title: "Die Bauernbefreiung in Livland", author: "J\u0101nis Zelti\u0146\u0161", year: "1958", lang: "German/Latvian" },
    { title: "Peasants and Lords in the Baltic", author: "Gert von Pistohlkors (ed.)", year: "1995", lang: "English" },
  ],
  "1857": [
    { title: "Riga\u2019s Urban Development", author: "J\u0101nis Krastins", year: "1992", lang: "English" },
    { title: "Die Rigasche Stadtbefestigung", author: "Wilhelm Neumann", year: "1908", lang: "German" },
  ],
  "1873": [
    { title: "Die lettische Revolution", author: "Arveds \u0160v\u0101be", year: "1928", lang: "German" },
    { title: "Kr. Barona Dainu Skapis", author: "Kri\u0161j\u0101nis Barons", year: "1894\u20131915", lang: "Latvian" },
    { title: "The Latvian Song Festival Tradition", author: "Valdis Muktup\u0101vels", year: "2010", lang: "English" },
  ],
  "1881": [
    { title: "Rigasche Stadtbl\u00e4tter", author: "Various", year: "1881", lang: "German" },
    { title: "Die Bev\u00f6lkerung Rigas", author: "August von Bulmerincq", year: "1902", lang: "German" },
  ],
  "1897": [
    { title: "Volksz\u00e4hlung in Riga 1897", author: "Russian Imperial Census", year: "1897", lang: "Russian/German" },
    { title: "Riga und Reval", author: "Wilhelm Neumann", year: "1908", lang: "German" },
  ],
  "1901": [
    { title: "Jugendstil Architecture in Riga", author: "J\u0101nis Krastins", year: "2006", lang: "English", thumbnail: "/images/gallery/jugendstil-alberta-12.jpg" },
    { title: "Art Nouveau in Riga", author: "Silvija Grosa", year: "2003", lang: "English", thumbnail: "/images/gallery/jugendstil-alberta-09.jpg" },
    { title: "Mikhail Eisenstein", author: "Janis Lejnieks", year: "2001", lang: "English" },
  ],
  "1905": [
    { title: "The 1905 Revolution in the Baltic Provinces", author: "Andrew Ezergailis", year: "1974", lang: "English" },
    { title: "Latvie\u0161u revolucion\u0101r\u0101 kust\u012bba", author: "Arveds \u0160v\u0101be", year: "1926", lang: "Latvian" },
  ],
  "1913": [
    { title: "Riga als Industrie- und Handelsstadt", author: "Rigaer B\u00f6rsen-Comit\u00e9", year: "1913", lang: "German" },
    { title: "Rigasche Zeitung Jubil\u00e4um", author: "Rigasche Zeitung", year: "1913", lang: "German" },
  ],
  "1914": [
    { title: "The Baltic States: Years of Independence", author: "Georg von Rauch", year: "1974", lang: "English" },
    { title: "A History of the Baltic States", author: "Andrejs Plakans", year: "2011", lang: "English" },
  ],
};
