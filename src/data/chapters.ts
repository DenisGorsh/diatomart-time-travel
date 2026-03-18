export interface Chapter {
  id: number;
  slug: string;
  title: string;
  era: string;
  years: string;
  description: string;
  highlights: string[];
  documents: string[];
  pageCount: string;
}

export const chapters: Chapter[] = [
  {
    id: 0,
    slug: "crusader-age",
    title: "The Crusader Age",
    era: "Founding & Livonian Confederation",
    years: "1201\u20131500",
    description:
      "Bishop Albert founds Riga in 1201 as a bridgehead for the Northern Crusades. The Livonian Brothers of the Sword wage war across the Baltic, their deeds immortalized in the Livonian Rhymed Chronicle. Riga joins the Hanseatic League in 1282, becoming a vital node in the medieval trade network stretching from Novgorod to Bruges. The Livonian Order builds its castle overlooking the Daugava, and for three centuries Riga grows as a fortress-city, a trading hub, and a seat of ecclesiastical power.",
    highlights: [
      "1201: Bishop Albert founds Riga as a crusader port",
      "1202: Livonian Brothers of the Sword established",
      "1282: Riga joins the Hanseatic League",
      "1330: Riga Castle built by the Livonian Order",
      "A crossroads of Latin, German, Slavic, and Baltic cultures",
    ],
    documents: [
      "Livonian Rhymed Chronicle (Cod. Pal. germ. 367) \u2014 full translation",
      "Hansisches Urkundenbuch \u2014 1282 Riga-L\u00fcbeck-Visby Compact",
      "Henry of Livonia\u2019s Chronicon Livoniae",
      "Smolensk\u2013Riga\u2013Gotland Trade Treaty (1229)",
      "UNESCO-listed Hanseatic documents from LVVA",
    ],
    pageCount: "20\u201330",
  },
  {
    id: 1,
    slug: "age-of-parchment",
    title: "The Age of Parchment",
    era: "Late Livonian Confederation",
    years: "c. 1500\u20131560",
    description:
      "Riga as a powerful Hanseatic trading city under Catholic Church dominance. The Reformation arrives in 1521, sweeping Protestant doctrines through the city. Medieval Latin manuscripts, the earliest known Riga-printed book (1513 Breviary), and Hanseatic trade documents tell the story of a city on the cusp of transformation.",
    highlights: [
      "Riga as a major Hanseatic League trading port",
      "Catholic Church dominance and the Bishop\u2019s seat",
      "Unique \u2018Riga Law\u2019 \u2014 a variant of Germanic town law",
      "Reformation arrives in 1521",
      "The 1513 Riga Breviary \u2014 earliest known Riga-printed book",
    ],
    documents: [
      "Latin manuscript \u2018Liber Primus\u2019 \u2014 medieval blackletter",
      "Polish royal privilege \u2018Commune incliti Poloniae Regni privilegium\u2019",
      "Medieval woodcut of saints (S. Florianus, S. Stanislaus)",
      "Hanseatic guild records and trade contracts",
      "City charters and privileges in Gothic script",
    ],
    pageCount: "20\u201330",
  },
  {
    id: 2,
    slug: "fall-of-livonia",
    title: "The Fall of Livonia",
    era: "Livonian War / Polish-Lithuanian Rule",
    years: "1558\u20131621",
    description:
      "Ivan the Terrible invades in 1558, igniting decades of war. The Livonian Order dissolves, Riga falls to Poland-Lithuania, and the city becomes a contested prize between Russia, Poland, and Sweden.",
    highlights: [
      "1558: Ivan the Terrible invades",
      "1562: Dissolution of the Livonian Order",
      "1581: Riga falls to Poland-Lithuania",
      "Religious conflicts in the Reformation aftermath",
      "1600\u20131621: Polish-Swedish War for Livonia",
    ],
    documents: [
      "Hennenberger 1595 geographic masterwork",
      "Jan Hus chronicle page",
      "War chronicles and battle accounts",
      "Maps of Livonia during the wars",
      "City defense plans and fortification drawings",
    ],
    pageCount: "30\u201340",
  },
  {
    id: 3,
    slug: "swedish-crown",
    title: "The Swedish Crown",
    era: "Swedish Livonia",
    years: "1621\u20131710",
    description:
      "Gustav II Adolf conquers Riga in 1621, making it the largest city in the entire Swedish Empire \u2014 larger than Stockholm itself. Livonia supplies a third of Sweden\u2019s war costs. A golden era of Baltic German culture.",
    highlights: [
      "Riga becomes the largest city in the Swedish Empire",
      "Livonia supplies 1/3 of Sweden\u2019s war costs",
      "Golden era of Baltic German culture",
      "First schools, literacy programs, Bible translations",
      "Great Famine of 1695\u20131697",
    ],
    documents: [
      "Panoramic naval battle engraving",
      "Architectural engraving of triumphal arch",
      "Swedish royal decrees",
      "City panoramic engravings",
      "Maps of Swedish Livonia",
    ],
    pageCount: "40\u201350",
  },
  {
    id: 4,
    slug: "peters-city",
    title: "Peter\u2019s City",
    era: "Russian Empire \u2014 Early Period",
    years: "1710\u20131795",
    description:
      "The devastating Russian siege of 1709\u20131710 and a catastrophic plague kill two-thirds of Riga\u2019s population. Tsar Peter the Great claims the city. The Treaty of Nystad formally cedes the Baltic provinces to Russia.",
    highlights: [
      "1709\u20131710: Russian siege and plague",
      "Peter the Great takes Riga",
      "1721: Treaty of Nystad",
      "Baltic German nobility retains privileges",
      "City rebuilt after devastation",
    ],
    documents: [
      "Peter the Great\u2019s decrees",
      "Plague records and death registers",
      "Treaty of Nystad documents",
      "City reconstruction plans",
      "German-language administrative records",
    ],
    pageCount: "30\u201340",
  },
  {
    id: 5,
    slug: "industrial-titan",
    title: "The Industrial Titan",
    era: "Russian Empire \u2014 Growth Period",
    years: "1795\u20131860",
    description:
      "All of Latvia falls under Russian rule. Napoleon\u2019s army approaches in 1812, and Riga\u2019s suburbs are burned as a desperate defense. Serfdom is abolished, railways arrive, and Riga transforms into a major industrial seaport.",
    highlights: [
      "1795: All of Latvia under Russia",
      "1812: Suburbs burned against Napoleon",
      "Serfdom abolished in the Baltic provinces",
      "Railway arrives",
      "First Latvian-language newspapers",
    ],
    documents: [
      "Napoleonic-era military maps",
      "Emancipation decrees",
      "Early industrial records",
      "Railway construction documents",
      "First Latvian-language publications",
    ],
    pageCount: "30\u201340",
  },
  {
    id: 6,
    slug: "latvian-awakening",
    title: "The Latvian Awakening",
    era: "National Romantic Period",
    years: "1860\u20131905",
    description:
      "Riga\u2019s population explodes from 77,000 to 282,000 in four decades. Latvians rise to the city\u2019s largest ethnic group. The first Latvian Song Festival in 1873 and the Art Nouveau building boom define a city in cultural renaissance.",
    highlights: [
      "Population boom: 77,000 to 282,000",
      "Latvians rise to 45% of population",
      "Third-largest industrial city in Russia",
      "First Latvian Song Festival (1873)",
      "Art Nouveau / Jugendstil architecture boom",
    ],
    documents: [
      "Rigasche Zeitung front pages",
      "Song Festival programs and posters",
      "Jugendstil architectural drawings",
      "Census records",
      "Revolutionary leaflets (1905)",
    ],
    pageCount: "40\u201350",
  },
  {
    id: 7,
    slug: "eve-of-war",
    title: "The Eve of War & Independence",
    era: "Late Russian Empire / WWI / Independence",
    years: "1905\u20131919",
    description:
      "Imperial Riga reaches its zenith with nearly 600,000 inhabitants. Hundreds of Art Nouveau buildings rise. Latvian, German, Russian, and Jewish communities create a rich multicultural tapestry. Then, in 1914, the Great War begins. Latvian Riflemen fight on the Eastern Front, Riga falls to Germany in 1917, and on 18 November 1918 Latvia declares independence. The War of Independence secures the new state by 1919.",
    highlights: [
      "Population nearly 600,000",
      "Hundreds of Art Nouveau buildings",
      "1914: WWI begins \u2014 end of an era",
      "1915\u20131917: Latvian Riflemen on the Eastern Front",
      "1917: German occupation of Riga",
      "18 November 1918: Latvia declares independence",
      "1919: War of Independence \u2014 the Republic is secured",
    ],
    documents: [
      "Pre-war city photographs",
      "Military mobilization orders (1914)",
      "Latvian Riflemen field diaries and photographs",
      "German occupation decrees (1917\u20131918)",
      "Latvian Declaration of Independence (18 November 1918)",
      "War of Independence battle maps and communiqu\u00e9s",
    ],
    pageCount: "30\u201340",
  },
];
