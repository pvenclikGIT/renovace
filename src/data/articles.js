/*
  Blog content. Each article is a structured set of blocks rendered
  by BlogArticle.jsx. Block types:
    { type: 'lead', text }                    — opening paragraph (drop cap)
    { type: 'paragraph', text }               — standard paragraph
    { type: 'heading', level: 2|3, text, id } — section heading (id used for TOC)
    { type: 'image', src, alt, caption }      — figure with caption
    { type: 'quote', text, cite }             — pull quote (centered, gold)
    { type: 'list', items }                   — bullet list
    { type: 'numbered', items }               — ordered list
    { type: 'callout', kind: 'tip'|'warn', title, text }
    { type: 'divider' }                       — visual break
*/

export const CATEGORIES = {
  srovnani:  { label: 'Srovnání',  color: '#3D7A77' },
  materialy: { label: 'Materiály', color: '#C9963C' },
  pribehy:   { label: 'Příběhy',   color: '#7B4F00' },
  postup:    { label: 'Jak to děláme', color: '#4A7B8A' },
  rady:      { label: 'Rady',      color: '#5A5A5A' },
}

const PETR = {
  name: 'Petr Venclík',
  role: 'Majitel ServisProfi',
  initials: 'PV',
}

export const articles = [
  /* ─────────────────────────────────────────────────────────────
     1. SROVNÁNÍ — Stěrka vs obklady
     ───────────────────────────────────────────────────────────── */
  {
    slug: 'sterka-vs-obklady-10-rozdilu',
    category: 'srovnani',
    title: 'Stěrka vs obklady: 10 rozdílů, které vás přesvědčí',
    lead: 'Lidé na prohlídce nejdřív skoro vždycky řeknou: „Hezký, ale to vypadá moc moderně, my chceme normální koupelnu." Po deseti minutách diskuse to bývá obráceně. Tady je důvod, proč.',
    coverImage: '/renovace/images/real-12.jpg',
    coverAlt: 'Šedá stěrková koupelna s velkým zrcadlem',
    author: PETR,
    date: '2026-05-08',
    readTime: 6,
    blocks: [
      { type: 'lead', text: 'Když vidíte koupelnu bez jediné spáry, působí to skoro nereálně. Mozek je naučený hledat čáry mezi dlaždicemi a hledat miniaturní švy v rozích. Stěrka mu nic z toho nedá. Trvá pár vteřin, než si očima zvyknete, ale od toho okamžiku už zpátky nepůjdete.' },
      { type: 'paragraph', text: 'Nejde jen o vzhled. Stěrka mění úplně způsob, jakým o koupelně přemýšlíte. Tady je deset konkrétních věcí, které se s vámi dějí, jakmile se rozhodnete pro stěrku místo klasických obkladů.' },

      { type: 'heading', level: 2, id: 'prach', text: 'Prach' },
      { type: 'paragraph', text: 'První věc, kterou každý z bouráním zažije, je centimetr prachu úplně všude. Ve skříních, v posteli, na knihovně, v ledničce. Trvá to týdny než ho vysajete úplně. Stěrka jde přímo na stávající obklady, takže se neničí. Aplikace je mokrý proces s odsáváním. Bouráte přesně nulové procento povrchů.' },

      { type: 'heading', level: 2, id: 'cas', text: 'Čas' },
      { type: 'paragraph', text: 'Klasická rekonstrukce s bouráním zabere typicky 1 až 2 měsíce, pokud se najde dobrá parta řemeslníků a všechno klape. Stěrka je hotová <strong>běžně do 14 dnů</strong> při dodržení technologických postupů. To není marketingové překroucení, to je doba, za kterou skelná perlinka ve spodní vrstvě stačí dostatečně zatuhnout, aby na ni mohly další vrstvy.' },
      { type: 'callout', kind: 'tip', title: 'Proč ne za 3 dny?', text: 'Vrstev je 4 až 6, každá musí dostatečně zatvrdnout. Urychlovat se nedá. Ten kdo slibuje koupelnu za 3 dny, vám buď dělá jednu vrstvu na nepřipravený podklad, nebo nepoužívá perlinku. Obojí praská do roka.' },

      { type: 'heading', level: 2, id: 'spary', text: 'Plíseň ve spárách' },
      { type: 'paragraph', text: 'Klasické obklady mají stovky metrů spár. Plíseň se v nich usazuje vždycky, je to jen otázka, kdy ji uvidíte. Stěrka spáry nemá. Je to jeden monolitický povrch. Plíseň na něm nemá kde žít.' },

      { type: 'image', src: '/renovace/images/real-04.jpg', alt: 'Detail bezspárové stěrky', caption: 'Žádné spáry, žádné slabé místo, žádná plíseň.' },

      { type: 'heading', level: 2, id: 'cisteni', text: 'Čištění' },
      { type: 'paragraph', text: 'Klasická koupelna potřebuje agresivní chemii na odstranění vodního kamene a plísně ze spár. Stěrka se utře pH neutrálním přípravkem a hadrem. Žádné drhnutí kartáčem mezi dlaždicemi. Obvykle nám klienti hlásí, že úklid koupelny zkrátili z půl hodiny na pět minut.' },

      { type: 'heading', level: 2, id: 'design', text: 'Design' },
      { type: 'paragraph', text: 'Obklady mají pravoúhlou síť spár, která vizuálně rozkouskuje prostor. Pokud máte malou koupelnu, dlaždice ji vizuálně ještě zmenšují. Stěrka je celistvá plocha. Místnost působí 30 až 50 % větší jen tím, že chybí vizuální ruch.' },
      { type: 'paragraph', text: 'Plus stovky odstínů. Plus matný, saténový nebo lesklý povrch. Plus jdete vytáhnout stěrku na stěny, podlahu, na pult pod umyvadlem, dokonce na sokl vany. Všechno splyne v jeden materiál.' },

      { type: 'quote', text: 'Když vidíte koupelnu bez spár, mozek si myslí, že je menší než ta s obklady. Pak otevřete dveře a zjistíte, že je to obráceně.', cite: 'Architekt z Vinohrad o své vlastní rekonstrukci' },

      { type: 'heading', level: 2, id: 'cena', text: 'Celková cena' },
      { type: 'paragraph', text: 'Klasická rekonstrukce: 80 000 až 200 000 Kč. Sečtěte dlažbu, obklady, lepidlo, spárovací hmotu, práci, odvoz suti, kontejnery, plus věci, které se "ukázaly" během bourání. Plus měsíc bez koupelny, což znamená pronajatý byt nebo dovolená u rodičů.' },
      { type: 'paragraph', text: 'Stěrka: paneláková koupelna 48 000 až 58 000 Kč, koupelna v rodinném domě 81 000 až 113 000 Kč. Bez DPH, materiál a práce jsou v ceně. Žádný "ukázalo se".' },

      { type: 'heading', level: 2, id: 'ekologie', text: 'Ekologie' },
      { type: 'paragraph', text: 'Klasická rekonstrukce vyhodí <strong>stovky kilogramů suti</strong> do kontejneru. Ten kontejner pak jede na skládku. Stěrka starou keramiku neničí, jen ji překryje. Z koupelny odjedeme s pár kbelíky obalů od materiálu.' },

      { type: 'heading', level: 2, id: 'zivotnost', text: 'Životnost' },
      { type: 'paragraph', text: 'Spáry mezi dlaždicemi praskají, žloutnou, drolí se. Po pěti letech se podle stáří stavby a kvality spárování začíná řešit oprava. U stěrky to neznáme. Naše nejstarší realizace je z roku 2016 a vypadá pořád stejně. Záruka je u nás 10 let na vodotěsnost a přilnavost.' },

      { type: 'heading', level: 2, id: 'oprava', text: 'Oprava poškození' },
      { type: 'paragraph', text: 'Spadne vám flakon parfému přímo na hranu obkladačky. Praskne. Co teď? Najít stejnou sérii, kterou už nikdo nedělá. Hledat dva měsíce. Najít náhradu. Dlaždič tu jednu vymění a barva nikdy přesně neodpovídá.' },
      { type: 'paragraph', text: 'U stěrky se poškozené místo lokálně přebrousí, zatmelí pryskyřičnou hmotou a nalakuje. Bez spár se oprava ztratí. Trvá to 2 hodiny.' },

      { type: 'heading', level: 2, id: 'pocit', text: 'Pocit pod nohama' },
      { type: 'paragraph', text: 'Pryskyřičná stěrka je výrazně teplejší na dotek než keramika. Není to jako koberec, ale není to studené ráno na bosé nohy. A pokud máte podlahové topení, stěrka 2 až 3 mm má minimální tepelnou setrvačnost. Zapnete topení, podlaha hřeje za 10 minut. U dlažby přes lepidlo a hydroizolaci to trvá hodinu.' },

      { type: 'divider' },
      { type: 'paragraph', text: 'Tohle všechno není teorie. Děláme stěrky každý týden, většinu prováděných realizací máme v Praze a Středočeském kraji. Pokud máte koupelnu, která vás otravuje, ozvěte se. Zdarma se přijdeme podívat a řekneme, jestli to u vás dává smysl. Někdy ne, někdy ano. Vždycky to řekneme rovnou.' },
    ],
  },

  /* ─────────────────────────────────────────────────────────────
     2. MATERIÁLY — Která stěrka kam patří
     ───────────────────────────────────────────────────────────── */
  {
    slug: 'cementova-epoxidova-pryskyricna-rozdily',
    category: 'materialy',
    title: 'Cementová, epoxidová, pryskyřičná: která stěrka kam patří',
    lead: 'Není pravda, že drahá stěrka je „lepší" a levná „horší". Každá z trojice má jiný důvod existence. Přehled, který materiál sahnout, kdy a proč.',
    coverImage: '/renovace/images/podlaha-04.jpg',
    coverAlt: 'Tři vzorky stěrek vedle sebe',
    author: PETR,
    date: '2026-04-29',
    readTime: 5,
    blocks: [
      { type: 'lead', text: 'Pokud do internetu zadáte „nejlepší stěrka do koupelny", dostanete deset výsledků s deseti různými odpověďmi. Reálně jsou to různé materiály na různé použití. Který kam patří záleží na tom, co tam chcete dělat.' },

      { type: 'heading', level: 2, id: 'cementova', text: 'Cementová stěrka' },
      { type: 'paragraph', text: 'Minerální materiál na bázi cementu. Matný povrch, který si zachovává mírně přírodní strukturu. Vypadá jako pohledový beton, jen jemnější. Cena u nás <strong>3 000 Kč/m²</strong> s prací i materiálem.' },
      { type: 'list', items: [
        '<strong>Kam:</strong> stěny, příčky, méně exponované plochy. Záda umyvadla, stěna vany, předsíň.',
        '<strong>Kam ne:</strong> podlaha do mokrého provozu (sprchový kout, koupelnová podlaha). Cement není dostatečně odolný proti trvalé vlhkosti a chemii ze sprchovacích produktů.',
        '<strong>Kdo to ocení:</strong> milovníci skandinávského a minimalistického designu. Lidi, co nesnášejí lesk.',
      ]},

      { type: 'image', src: '/renovace/images/real-04.jpg', alt: 'Cementová stěrka na stěně koupelny', caption: 'Cementová stěrka v odstínu Antracit. Pohledový beton bez betonování.' },

      { type: 'heading', level: 2, id: 'epoxidova', text: 'Epoxidová stěrka' },
      { type: 'paragraph', text: 'Dvousložkový epoxid s minerálním plnivem. Po vytvrdnutí extrémně tvrdý, voděodolný a chemicky odolný. Lesklý nebo saténový povrch. Cena <strong>3 750 Kč/m²</strong>.' },
      { type: 'list', items: [
        '<strong>Kam:</strong> stěny i podlahy, sprchové kouty, vany, mokré provozy. Hotelové koupelny s tisíci cyklů ročně.',
        '<strong>Kam ne:</strong> podlahové topení, kde podklad pracuje. Epoxid je tvrdý, neumí se hýbat s dilatací.',
        '<strong>Kdo to ocení:</strong> ti, kdo chtějí maximální odolnost a snadnou údržbu. Hosté hotelů, hospitality, ale i běžné domácnosti, kde se koupelna používá hodně.',
      ]},

      { type: 'callout', kind: 'tip', title: 'Proč je epoxid náš nejprodávanější', text: 'Pokrývá nejširší spektrum použití. Funguje na stěnách i podlaze, snese vlhko, snese chemii, je odolný. Pokud váháte mezi materiály, epoxid je default volba.' },

      { type: 'heading', level: 2, id: 'pryskyricna', text: 'Pryskyřičná stěrka (PU systém)' },
      { type: 'paragraph', text: 'Polyuretanová pryskyřice s pigmenty a aditivy. Rozdíl od epoxidu: <strong>pružnost</strong>. Snese dilatační pohyby podkladu, teplotní změny, vibrace. Cena <strong>4 500 Kč/m²</strong>.' },
      { type: 'list', items: [
        '<strong>Kam:</strong> stěny i podlahy, podlahové topení, designově náročné prostory. Imitace mramoru, leštěný beton, kombinace více odstínů.',
        '<strong>Kam ne:</strong> nevyplatí se v běžné panelákové koupelně bez nadstandardních požadavků. Cementová na stěny + epoxidová na podlahu vyjde levněji a vypadá stejně dobře.',
        '<strong>Kdo to ocení:</strong> wellness, designové hotely, RD s podlahovým topením, lidi co chtějí imitaci mramoru. Nebo taky nás, když děláme svou vlastní koupelnu.',
      ]},

      { type: 'quote', text: 'Pryskyřice je Rolls-Royce mezi stěrkami. Ne proto, že by byla podstatně lepší v odolnosti, ale proto, že může vypadat jako jakýkoli materiál na světě.', cite: 'Architekt z naší poslední realizace v Karlíně' },

      { type: 'heading', level: 2, id: 'kombinace', text: 'Naše standardní kombinace' },
      { type: 'paragraph', text: 'V průměrné panelákové koupelně doporučujeme kombinaci: <strong>cementová na stěny + epoxidová na podlahu</strong>. Stěny dostanou minimalistický matný look za rozumnou cenu, podlaha dostane odolný materiál do mokra.' },
      { type: 'paragraph', text: 'V rodinném domě s podlahovým topením je smysluplnější celá pryskyřice. V hotelu se hodí epoxid od sklepa po stříšku. V samostatném WC stačí cement na stěny i na podlahu, protože tam tolik vlhka není.' },

      { type: 'callout', kind: 'tip', title: 'Při konzultaci se na to zeptejte', text: 'Doneseme vzorky všech tří materiálů na ohmatání. Mokré, suché, ve světle, ve stínu. Při výběru hraje roli nejen barva, ale i jak materiál reaguje na světlo a dotek. Z fotky to nepoznáte.' },

      { type: 'divider' },
      { type: 'paragraph', text: 'Pokud si nejste jistí, neztrácejte čas porovnáváním na internetu. Zavolejte nebo napište, popíšeme řešení do 24 hodin. Bezplatná prohlídka s fyzickými vzorky následuje, pokud o ni stojíte.' },
    ],
  },

  /* ─────────────────────────────────────────────────────────────
     3. POSTUP — Den po dni
     ───────────────────────────────────────────────────────────── */
  {
    slug: 'realizace-koupelny-den-po-dni',
    category: 'postup',
    title: 'Jak probíhá realizace dva týdny den po dni',
    lead: 'Klienty často zajímá, co přesně se v jejich koupelně bude dít a kdy. Tady je rozpis typické zakázky panelákové koupelny od podpisu smlouvy po předání.',
    coverImage: '/renovace/images/real-08.jpg',
    coverAlt: 'Příprava povrchu před aplikací stěrky',
    author: PETR,
    date: '2026-04-21',
    readTime: 5,
    blocks: [
      { type: 'lead', text: 'V rekonstrukci koupelny je nejnepříjemnější neznámo. Klient neví, kdy přijdeme, jak dlouho to bude, co se dá v bytě dělat a co už ne. Tady je presný harmonogram, jak typická zakázka vypadá.' },

      { type: 'heading', level: 2, id: 'den-0', text: 'Den 0 — Bezplatná prohlídka' },
      { type: 'paragraph', text: 'Dohodneme se telefonicky nebo přes WhatsApp na termínu prohlídky. Většinou do 7 dnů od první zprávy. Přijdeme s metrem, vzorkovníky a fotoaparátem.' },
      { type: 'list', items: [
        'Změříme plochu stěn a podlahy přesně',
        'Posoudíme stav obkladů a podkladu (jestli něco neodstává)',
        'Probereme barevné varianty s fyzickými vzorky v daném světle',
        'Vysvětlíme rozdíly mezi materiály na konkrétní plochy',
        'Domluvíme termín, který sedí oběma stranám',
      ]},
      { type: 'paragraph', text: 'Cenová nabídka přijde mailem do 24 hodin po prohlídce. Jasná, závazná, bez „ukázalo se".' },

      { type: 'heading', level: 2, id: 'tyden-1', text: 'Týden 1 — Příprava a perlinka' },

      { type: 'heading', level: 3, text: 'Den 1: Mechanická příprava' },
      { type: 'paragraph', text: 'Přijedeme ráno, zakryjeme nábytek a podlahu fólií. Brusíme stávající obklady speciálním kartáčem. Hluk je srovnatelný s vrtačkou. Trvá 2 až 4 hodiny v běžné koupelně.' },

      { type: 'heading', level: 3, text: 'Den 2: Odmaštění a adhezní můstek' },
      { type: 'paragraph', text: 'Obklady umyjeme od prachu z broušení a naneseme adhezní přípravek (penetrace). Ten zaručí, že další vrstva pevně přilne. 24 hodin schne.' },

      { type: 'heading', level: 3, text: 'Den 3: Skelná perlinka + první vrstva' },
      { type: 'paragraph', text: 'Toto je <strong>kritický moment celé zakázky</strong>. Vkládáme do první vrstvy stěrky skelnou perlinku, která přemostí každou původní spáru. Bez ní by stěrka časem prasknout nad spárami. S ní nepraská.' },
      { type: 'callout', kind: 'warn', title: 'Tady končí 80 % konkurence', text: 'Levné firmy perlinku vynechávají, aby ušetřily 1 den práce a 2 000 Kč materiálu. Po půl roce přijdou trhliny v rastru původních spár. Reklamace nikdo neuznává, protože perlinka v záručním listu nebyla.' },

      { type: 'heading', level: 3, text: 'Dny 4 a 5: Druhá a třetí vrstva' },
      { type: 'paragraph', text: 'Každá vrstva potřebuje minimum 24 hodin schnutí. Nanášíme špachtlí v tloušťce 0,5 až 0,8 mm. Z toho je hlavní práce — pomalé, pečlivé, opakované.' },

      { type: 'image', src: '/renovace/images/real-05.jpg', alt: 'Vrstvení stěrky špachtlí', caption: 'Třetí vrstva se nanáší na vyzrálou druhou. Bez urychlovačů.' },

      { type: 'heading', level: 2, id: 'tyden-2', text: 'Týden 2 — Finalizace' },

      { type: 'heading', level: 3, text: 'Dny 6 až 8: Čtvrtá až šestá vrstva' },
      { type: 'paragraph', text: 'V závislosti na typu materiálu a požadované finální struktuře pokračujeme dalšími vrstvami. Mezi nimi se brousí, aby povrch měl uniformní strukturu. Tady se rozhoduje, jestli bude konečný výsledek matný, satinový nebo lesklý.' },

      { type: 'heading', level: 3, text: 'Den 9 nebo 10: Vodotěsná impregnace' },
      { type: 'paragraph', text: 'Speciální impregnační přípravek pronikne do mikropórů stěrky. Voda od této chvíle teče po povrchu, neproniká. Toto je důvod, proč můžeme dát 10letou záruku na vodotěsnost.' },

      { type: 'heading', level: 3, text: 'Den 11 nebo 12: Finální polyuretanový lak' },
      { type: 'paragraph', text: 'Poslední vrstva, která určí výsledný lesk a chrání povrch před otěry. Lak nanášíme válečkem a stříkací pistolí pro úplnou rovnoměrnost. Po nanesení musí 24 hodin v klidu.' },

      { type: 'heading', level: 3, text: 'Den 13 nebo 14: Předání' },
      { type: 'paragraph', text: 'Uklidíme po sobě, sundáme fólie, vyleštíme baterie. Provedeme klienta koupelnou, vysvětlíme jak povrch udržovat, předáme záruční list. Po 24 hodinách od předání je koupelna plně funkční. Plnou chemickou odolnost má po 7 dnech, na to upozorňujeme dopředu.' },

      { type: 'quote', text: 'Bála jsem se týdnů plných prachu a stavbaření. Místo toho měli jasný harmonogram, dodrželi termín a do dvou týdnů jsem měla koupelnu, která vypadá jako z Pinterestu.', cite: 'Kristýna V., Praha 3 Žižkov' },

      { type: 'divider' },
      { type: 'paragraph', text: 'Pokud chcete vědět, jak by harmonogram vypadal u vás, ozvěte se. Bezplatná prohlídka, závazná nabídka do 24 hodin, termín domluvíme během pár dnů.' },
    ],
  },
]

/* ─────────────────────────────────────────────────────────────
     4. PŘÍBĚHY — Pět malých koupelen
     ───────────────────────────────────────────────────────────── */
articles.push({
  slug: 'pet-malych-koupelen-promena',
  category: 'pribehy',
  title: 'Pět malých koupelen, kde stěrka udělala zázrak',
  lead: 'Malá panelová koupelna není věc, se kterou byste chtěli dlouze žít. Sebrali jsme pět realizací z posledního roku, kde se 4 m² podlahy proměnily v něco, co by si majitelé před tím nedovedli představit.',
  coverImage: '/renovace/images/podlaha-06.jpg',
  coverAlt: 'Šedá stěrková koupelna v paneláku',
  author: PETR,
  date: '2026-04-10',
  readTime: 5,
  blocks: [
    { type: 'lead', text: 'Pojem „malá koupelna" v Česku znamená 3 až 5 m² podlahy a stěny ze 70. let. Každá z pěti dále popsaných má jiný příběh, ale všechny mají společné jedno: stěrka tu byla jediná schůdná cesta, jak prostor vizuálně zvětšit.' },

    { type: 'heading', level: 2, id: 'p1', text: 'Žižkov, 4 m² podlahy, antracit' },
    { type: 'paragraph', text: 'Klientka volala s tím, že má v koupelně z roku 1972 obklad zeleno-šedé barvy a chce ho pryč, ale netroufá si na měsíc bez koupelny. Návrh: cementová stěrka v odstínu antracit na stěny, epoxidová sytě tmavá na podlahu. Realizace 12 dnů. Vizuálně koupelna působí o 40 % větší jen tím, že chybí mřížka spár.' },

    { type: 'heading', level: 2, id: 'p2', text: 'Karlín, 3,5 m², greige' },
    { type: 'paragraph', text: 'Mladý pár v opraveném domě. Měli krásnou koupelnu po předchozím majiteli, ale béžové dlaždice neseděly k jejich nábytku. Stěrka v odstínu greige (mezi šedou a béžovou) přes celý prostor — stěny, podlaha, sokl vany. Výsledek: koupelna teď kontinuálně přechází do ložnice ve stejné barevné lince.' },

    { type: 'image', src: '/renovace/images/real-08.jpg', alt: 'Greige stěrka v malé koupelně', caption: 'Karlín — kontinuální barva mezi koupelnou a ložnicí.' },

    { type: 'heading', level: 2, id: 'p3', text: 'Vinohrady, 5 m², bílá s leskem' },
    { type: 'paragraph', text: 'Architektka, která chtěla maximální světlo. Pryskyřičná stěrka v odstínu „čistá bílá" s mírným leskem. Strop v stejném materiálu (ano, jde to). Bodové LED osvětlení. Když do koupelny vstoupíte, fotografie nepozná, jestli stojíte v nemocnici nebo v lázních.' },

    { type: 'heading', level: 2, id: 'p4', text: 'Smíchov, 4 m², pohledový beton' },
    { type: 'paragraph', text: 'Páreček grafiků. Chtěli industriální look, ale pro skutečný pohledový beton by museli bourat. Cementová stěrka v odstínu „concrete" simuluje pohledový beton dokonale, včetně lehkých nepravidelností. Klient po realizaci napsal: „Lepší než sen."' },

    { type: 'heading', level: 2, id: 'p5', text: 'Praha 4, 3 m², kávová' },
    { type: 'paragraph', text: 'Pán starší generace, samostatně bydlící. Chtěl koupelnu, která bude působit teple a ne moderně. Pryskyřičná stěrka v odstínu „tmavá káva" se zlatým baterií. Nejmenší realizace, kterou jsme ten rok dělali, ale jedna z nejosobitějších.' },

    { type: 'divider' },
    { type: 'paragraph', text: 'Pokud máte malou koupelnu, kterou nemůžete vystát, ozvěte se. Bezplatně se přijdeme podívat a navrhneme řešení. U malých prostorů je obzvlášť důležité dobře zvolit barvu, abychom prostor nezatížili.' },
  ],
})

/* ─────────────────────────────────────────────────────────────
   5. RADY — Co udělat před prohlídkou
   ───────────────────────────────────────────────────────────── */
articles.push({
  slug: 'priprava-pred-prohlidkou',
  category: 'rady',
  title: 'Co udělat se starou koupelnou před tím, než přijdeme na prohlídku',
  lead: 'Prohlídka trvá 30 minut a je zdarma. Aby z ní vyšla přesnější nabídka, pomůže pár drobností, které si můžete připravit dopředu.',
  coverImage: '/renovace/images/real-07.jpg',
  coverAlt: 'Stará koupelna před rekonstrukcí',
  author: PETR,
  date: '2026-03-28',
  readTime: 3,
  blocks: [
    { type: 'lead', text: 'Většina prohlídek probíhá bez přípravy a je to v pořádku — naším úkolem je situaci pochopit my, ne vy. Ale několik drobností, které si můžete promyslet předem, urychlí celou věc a my odjedeme s lepší cenovou nabídkou.' },

    { type: 'heading', level: 2, id: 'foto', text: 'Pošlete pár fotek dopředu' },
    { type: 'paragraph', text: 'Tři až pět fotek koupelny na WhatsApp nebo e-mail nám stačí, abychom o vaší situaci věděli něco dřív, než přijedeme. Často dokážeme z fotek odhadnout cenu s přesností 10 %. Žádné profesionální focení — stačí běžné fotky telefonem.' },

    { type: 'heading', level: 2, id: 'rozmery', text: 'Změřte přibližně plochu' },
    { type: 'paragraph', text: 'Délka × šířka × výška. To stačí pro úplný odhad. Měření přesných ploch (kolem nik, polic, baterií) si pak uděláme sami při prohlídce.' },

    { type: 'heading', level: 2, id: 'predstava', text: 'Mějte představu o stylu' },
    { type: 'paragraph', text: 'Pokud máte tabulku v Pinterestu nebo screenshot Instagramu, ukažte nám ji. I obecná slova jako „skandinávský" nebo „industrial" pomůžou. Nemusíte vědět konkrétní materiál — to je naše práce. Vy víte, jak to má vypadat, my víme, jak to udělat.' },

    { type: 'heading', level: 2, id: 'rozpocet', text: 'Mějte hrubý rozpočet' },
    { type: 'paragraph', text: 'Sazby (3 000 / 3 750 / 4 500 Kč/m²) máme veřejně. Pokud víte, že máte pevný strop a do něj se musíme vejít, řekněte nám to rovnou. Můžeme variovat materiály — třeba cementovou na stěny a epoxidovou jen na sprchový kout, místo všude.' },

    { type: 'callout', kind: 'tip', title: 'Co rozhodně nemusíte', text: 'Uklízet, schovávat věci, ničit obklady. Vidíme jich za týden tucet, žádný stav nás nepřekvapí. Klidně i v rozháranosti.' },
  ],
})

/* ─────────────────────────────────────────────────────────────
   6. RADY — 5 mýtů
   ───────────────────────────────────────────────────────────── */
articles.push({
  slug: 'pet-mytu-o-sterce',
  category: 'rady',
  title: 'Pět mýtů o stěrce, které slýcháme nejčastěji',
  lead: 'Když jste o stěrce slyšeli jen z internetu, pravděpodobně se k vám dostala některá z těchto věcí. Pojďme je probrat věcně.',
  coverImage: '/renovace/images/real-10.jpg',
  coverAlt: 'Stěrková koupelna v tmavé barvě',
  author: PETR,
  date: '2026-03-15',
  readTime: 4,
  blocks: [
    { type: 'lead', text: 'Stěrka je v Česku relativně mladá technologie — masově se začala dělat až okolo roku 2015. Tomu odpovídá i množství polopravd, které se k vám můžou dostat. Pět nejčastějších a co je na nich pravdy.' },

    { type: 'heading', level: 2, id: 'm1', text: '„Praská to nad starými spárami"' },
    { type: 'paragraph', text: 'Stěrka aplikovaná <strong>bez skelné perlinky</strong> ve spodní vrstvě skutečně praská. To je pravda. Stěrka <strong>se</strong> skelnou perlinkou nepraská, protože perlinka přemostí každou původní spáru a pohltí mikronapětí. Otázka tedy není, jestli stěrka praská, ale jestli ji aplikoval někdo, kdo perlinku používá. My ji používáme vždy.' },

    { type: 'heading', level: 2, id: 'm2', text: '„Je to studené a klouže to"' },
    { type: 'paragraph', text: 'Pryskyřičná stěrka je výrazně teplejší na dotek než keramická dlažba. To si můžete osahat při konzultaci. Co se kluzkosti týče, přidáváme certifikovaná anti-slip aditiva třídy R10 nebo R11 — stejný standard jako na plovárnách. Bez aditiv by skutečně klouzalo víc než zdrsněná dlažba.' },

    { type: 'heading', level: 2, id: 'm3', text: '„Vydrží to jen pár let"' },
    { type: 'paragraph', text: 'Naše nejstarší realizace je z roku 2016. Pravidelně se k ní vracíme a vypadá pořád stejně. Záruku dáváme na 10 let, předpokládaná životnost při normálním používání 15 až 20 let. Po této době stačí přebrousit a obnovit lak, není potřeba nic strhávat.' },

    { type: 'heading', level: 2, id: 'm4', text: '„Když se to poškodí, musí se předělat celá"' },
    { type: 'paragraph', text: 'Lokální oprava je možná. Povrch v poškozené oblasti se přebrousí, zatmelí pryskyřičnou hmotou a nalakuje. Bez spár se oprava ztratí — výsledek je výrazně méně viditelný, než když měníte jednu dlaždici v keramickém obkladu, kde se nikdy netrefíte do barvy.' },

    { type: 'heading', level: 2, id: 'm5', text: '„Na starou dlažbu to nedrží"' },
    { type: 'paragraph', text: 'Naopak. Epoxidová chemie se na minerální podklad po správném mechanickém přebroušení a aplikaci adheznho přípravku váže <strong>silněji</strong> než původní lepidlo, kterým drží dlaždice. Reálně dříve odpadne původní obkládačka, než by se odlepila stěrka.' },
  ],
})

/* ─────────────────────────────────────────────────────────────
   7. RADY — Výběr barvy
   ───────────────────────────────────────────────────────────── */
articles.push({
  slug: 'jak-vybrat-barvu-sterky',
  category: 'rady',
  title: 'Jak vybrat barvu stěrky, abyste si ji za rok nelitovali',
  lead: 'Barvu si vybíráte dvakrát: jednou na vzorníku v showroomu, podruhé když ji vidíte ve vaší koupelně ve vašem světle. Tady je pár věcí, které pomohou.',
  coverImage: '/renovace/images/real-11.jpg',
  coverAlt: 'Stěrka v teplém odstínu se dřevěnými prvky',
  author: PETR,
  date: '2026-02-26',
  readTime: 4,
  blocks: [
    { type: 'lead', text: 'Barva stěrky se po nanesení podstatně liší od barvy na vzorníku. Důvod je prozaický: vzorník vidíte při profesionálním osvětlení showroomu, koupelnu vidíte při malém okně, žárovce z Bauhausu nebo LED pásku.' },

    { type: 'heading', level: 2, id: 'svetlo', text: 'Test v reálném světle' },
    { type: 'paragraph', text: 'Vzorek stěrky vám vždy přivezeme domů. Položte ho do koupelny, kam stěrka půjde, a podívejte se na něj <strong>v různých denních dobách</strong>. Ráno, v poledne, večer, s rozsvíceným světlem. Některé barvy se přes den dramaticky mění — šedá ráno může vypadat modrá, večer hnědá.' },

    { type: 'heading', level: 2, id: 'tepla-studena', text: 'Teplá vs studená' },
    { type: 'paragraph', text: 'Teplé odstíny (béžová, greige, kávová) působí útulně, ale v malé koupelně bez okna mohou působit dusno. Studené odstíny (šedá, bílá, antracit) vizuálně zvětšují prostor, ale mohou působit „nemocničně", pokud nevyvážíte teplou baterií, dřevem nebo zelenou rostlinou.' },

    { type: 'heading', level: 2, id: 'matne-leske', text: 'Matný vs lesklý povrch' },
    { type: 'paragraph', text: 'Matný povrch je bezpečnější — odpouští drobné nedokonalosti aplikace, lépe se cítí. Lesklý povrch dělá prostor větším a luxusnějším, ale je méně odpouštějící (každý prst, každý kapek vody). Pokud váháte, vezměte si saténový — kompromis mezi oběma.' },

    { type: 'callout', kind: 'tip', title: 'Naše empirická pravidla', text: 'V malých koupelnách bez okna doporučujeme světlé tóny. V koupelnách s velkým oknem můžete jít do tmavých. V hotelech a apartmánech volíme neutrální greige nebo světlou šedou — zalíbí se 90 % hostů. Ve vlastní koupelně si můžete dovolit cokoliv.' },

    { type: 'heading', level: 2, id: 'spojeni', text: 'Kombinace s nábytkem a baterií' },
    { type: 'paragraph', text: 'Stěrka je velký, dominantní materiál. Pokud chcete výrazný designový prvek (zlatá baterie, dřevěná deska na umyvadle), nechte stěrku neutrálnější. Pokud chcete neutrální nábytek, můžete stěrku „rozparádit" syté barvy nebo strukturou.' },
  ],
})

/* ─────────────────────────────────────────────────────────────
   8. POSTUP — Záruka
   ───────────────────────────────────────────────────────────── */
articles.push({
  slug: 'zaruka-10-let-co-kryje',
  category: 'postup',
  title: 'Záruka 10 let na stěrku — co konkrétně kryje a co ne',
  lead: 'Slovo „záruka" je v marketingu volně používané. U nás znamená konkrétní písemný závazek, který vám předáme s každou zakázkou. Tady je, co v něm stojí.',
  coverImage: '/renovace/images/real-03.jpg',
  coverAlt: 'Detail kvalitní stěrky',
  author: PETR,
  date: '2026-02-12',
  readTime: 3,
  blocks: [
    { type: 'lead', text: 'Záruční list dostanete při předání díla. Není to formalita — popisuje konkrétní závazky, ke kterým se hlásíme. Od záruční doby po seznam vad, které pokrývá. Co v něm stojí.' },

    { type: 'heading', level: 2, id: 'doba', text: 'Záruční doba' },
    { type: 'list', items: [
      '<strong>Epoxidová a pryskyřičná stěrka:</strong> 10 let na vodotěsnost a přilnavost povrchu',
      '<strong>Cementová stěrka:</strong> 5 let na vodotěsnost a přilnavost (protože cement není tak odolný proti chemii)',
      'Záruka začíná dnem předání a podpisem záručního listu',
    ]},

    { type: 'heading', level: 2, id: 'co-kryje', text: 'Co záruka kryje' },
    { type: 'list', items: [
      'Praskliny ve stěrce, které vznikly špatnou aplikací (chybějící perlinka, nedostatečné vyzrání vrstev)',
      'Odlepení stěrky od podkladu (špatný adhezní můstek)',
      'Bobtnání nebo odlupování v důsledku špatné hydroizolace',
      'Změna barvy způsobená vadou materiálu (žloutnutí epoxidu, fragmentace cementu)',
    ]},

    { type: 'heading', level: 2, id: 'co-nekryje', text: 'Co záruka nekryje' },
    { type: 'list', items: [
      'Mechanické poškození úderem těžkého předmětu (spadlý sušič, nárazník vany)',
      'Vady způsobené nesprávným užíváním (drhnutí drátěnkou, agresivní kyselina, aceton)',
      'Estetické změny způsobené přirozeným stárnutím (mikroskopické otěry v sprchovém koutu po 8 letech používání)',
      'Vady, které vznikly v důsledku zásahu do povrchu třetí osobou',
    ]},

    { type: 'heading', level: 2, id: 'reklamace', text: 'Jak reklamovat' },
    { type: 'paragraph', text: 'E-mail s fotkou a popisem na info@bezspar.cz, případně telefonicky. Reagujeme do 14 dnů. Pokud je reklamace oprávněná, opravujeme bez dalších nákladů. Většinou na místě, pouze opravdu vážné případy znamenají nové aplikování.' },
  ],
})

/* ─────────────────────────────────────────────────────────────
   9. PŘÍBĚHY — Hotel
   ───────────────────────────────────────────────────────────── */
articles.push({
  slug: 'sterka-v-hotelu-24-7',
  category: 'pribehy',
  title: 'Stěrka v hotelu: 24/7 provoz, tisíce hostů a co s tím',
  lead: 'Hotelová koupelna projde za rok desetitisíce cyklů sprchování. Co znamenají pro stěrku a proč ji hoteliéři přesto volí?',
  coverImage: '/renovace/images/hotel-01.jpg',
  coverAlt: 'Hotelová koupelna se stěrkou',
  author: PETR,
  date: '2026-01-30',
  readTime: 4,
  blocks: [
    { type: 'lead', text: 'Pro paneláko-koupelnu je stěrka zajímavá volba. Pro hotel s 50 pokoji je to existenční rozhodnutí. Když realizujete celé patro a stěrka po roce začne praskat, je to katastrofa, kterou nezachráníte.' },

    { type: 'heading', level: 2, id: 'proc-hotel', text: 'Proč hotely volí stěrku' },
    { type: 'paragraph', text: 'Hlavní důvod není estetika, ale <strong>údržba</strong>. Hotelová koupelna se uklízí každý den, často hodinu před příchodem nového hosta. S klasickými spárami plíseň přichází do dvou let bez výjimky. Údržbě týmu pak mizí drahocenný čas hodinami drhnutí spár.' },
    { type: 'paragraph', text: 'Bezspárová stěrka se utře hadrem za 30 sekund. To se na hotelovém ekonomickém modelu projeví okamžitě.' },

    { type: 'heading', level: 2, id: 'material', text: 'Jaký materiál hoteliéři volí' },
    { type: 'paragraph', text: 'Drtivá většina jde po epoxidu. Důvody: maximální odolnost, snese hotelovou chemii (silnější dezinfekční prostředky), 10letá záruka. Cementovou stěrku do hotelu nedoporučujeme nikdy — není dostatečně chemicky odolná.' },

    { type: 'heading', level: 2, id: 'realizace', text: 'Plánování realizace' },
    { type: 'paragraph', text: 'Hotely realizujeme do <strong>mezisezónních pauz</strong> nebo etapově po patrech. Pokoje s hotovou stěrkou jsou zpět v provozu po 7 dnech (plná chemická odolnost). Naše realizace v penzionu v Berouně proběhla mezi sezónami v listopadu — 8 koupelen za 4 týdny, hotel zavřený od 1. do 28. 11.' },

    { type: 'quote', text: 'Čtyři koupelny renovované přesně v termínu, který jsem potřebovala mezi hlavní sezónou a Vánocemi. Hosté se ptají, kde jsme pořídili „takové krásné italské kachle". Říkám jim pravdu a jsou v šoku.', cite: 'Miroslava H., Penzion U Tří lip, Beroun' },
  ],
})

/* ─────────────────────────────────────────────────────────────
   10. MATERIÁLY — Podlahové topení
   ───────────────────────────────────────────────────────────── */
articles.push({
  slug: 'podlahove-topeni-a-sterka',
  category: 'materialy',
  title: 'Podlahové topení a stěrka: co potřebujete vědět',
  lead: 'Podlahové topení mění pravidla. Klasická epoxidová stěrka tady přestává fungovat a sahnout musíte po pryskyřici. Tady je proč.',
  coverImage: '/renovace/images/podlaha-01.jpg',
  coverAlt: 'Stěrková podlaha v koupelně',
  author: PETR,
  date: '2026-01-15',
  readTime: 4,
  blocks: [
    { type: 'lead', text: 'Pokud máte (nebo plánujete) v koupelně podlahové topení, výběr stěrky se zúží. Podlaha pracuje s teplotou — při zapnutí topení se mírně rozšiřuje, při vypnutí stahuje. Tvrdý epoxid tyto pohyby nesnese a po několika cyklech popraská.' },

    { type: 'heading', level: 2, id: 'pruznost', text: 'Proč pryskyřice' },
    { type: 'paragraph', text: 'Polyuretanová pryskyřice (PU systém) je <strong>pružná</strong>. Není to elastický kaučuk, ale na rozdíl od epoxidu má dostatek mikropohyblivosti, aby snesla teplotní dilataci podlahy. Vrstva 2 až 3 mm pryskyřice se rozšíří se podlahou a zase stáhne, bez jediné praskliny.' },

    { type: 'heading', level: 2, id: 'reakce', text: 'Reakční doba topení' },
    { type: 'paragraph', text: 'Bonus pryskyřice je rychlost reakce. Vrstva 2 až 3 mm má minimální tepelnou setrvačnost. Zapnete topení ráno, podlaha hřeje za 10 až 15 minut. U klasické dlažby (1 cm dlaždice + 5 mm lepidla + hydroizolace) topení reaguje hodinu a déle, čímž ztrácí část energetické úspornosti.' },

    { type: 'callout', kind: 'tip', title: 'Praktický důsledek', text: 'Pryskyřičná podlaha vám reálně sníží spotřebu elektřiny na podlahové topení o 15 až 25 %, protože topíte jen tehdy, kdy podlahu používáte, ne celý den předem.' },

    { type: 'heading', level: 2, id: 'jistota', text: 'Co musíte zkontrolovat' },
    { type: 'list', items: [
      '<strong>Maximální teplota:</strong> pryskyřice snese až 40 °C povrchové teploty. Klasické podlahové topení v koupelně nikdy nepřesahuje 35 °C.',
      '<strong>Stáří instalace:</strong> nové podlahové topení by mělo být v provozu alespoň 28 dnů před aplikací stěrky, aby si podklad „sednul"',
      '<strong>Hydroizolace:</strong> u podlahového topení vždy aplikujeme dvojitou vrstvu hydroizolace pod stěrku',
    ]},
  ],
})

/* ─────────────────────────────────────────────────────────────
   11. PŘÍBĚHY — 5 paneláků
   ───────────────────────────────────────────────────────────── */
articles.push({
  slug: 'pet-panelovych-koupelen',
  category: 'pribehy',
  title: 'Pět panelových koupelen, které proměnila stěrka bez bourání',
  lead: 'Panelák z 80. let, koupelna z roku 1985, žluté obklady a růžová vana. Známé scenérie, které vidíme každý týden. Pět konkrétních proměn z poslední doby.',
  coverImage: '/renovace/images/podlaha-08.jpg',
  coverAlt: 'Koupelna v paneláku po proměně',
  author: PETR,
  date: '2025-12-22',
  readTime: 5,
  blocks: [
    { type: 'lead', text: 'Panelové koupelny mají několik společných znaků: žluté nebo zelené obklady z 80. let, růžová vana, malé okno do předsíně. Stěrka tu funguje výjimečně dobře — kryje to, co bourání řeší týden, za pár dnů.' },

    { type: 'heading', level: 2, id: 'p1', text: 'Praha 11, Jižní Město — bílá s šedou' },
    { type: 'paragraph', text: 'Mladá rodina s dvouletým dítětem. Nemohli si dovolit měsíc bez koupelny. Cementová bílá na stěny, epoxidová světle šedá na podlahu. Realizace 11 dnů. Místnost působí svetleji a čistěji.' },

    { type: 'heading', level: 2, id: 'p2', text: 'Praha 4, Chodov — antracit a dřevo' },
    { type: 'paragraph', text: 'Pán okolo 50 let, programátor. Chtěl industriální look. Cementová antracit na stěny + epoxidová tmavá na podlahu, doplněno dřevěným nábytkem. Před tím vlevo růžová vana, dnes prostor jako z designového katalogu.' },

    { type: 'image', src: '/renovace/images/real-12.jpg', alt: 'Antracitová stěrka', caption: 'Praha 4 — antracit prostor okamžitě „dospěl".' },

    { type: 'heading', level: 2, id: 'p3', text: 'Praha 6, Petřiny — písková a teplo' },
    { type: 'paragraph', text: 'Starší dáma, kterou trápil studený dojem koupelny. Pryskyřičná v písčité barvě, kombinace s podlahovým topením. Hned po realizaci poslala foto rodině a byla na ni hrdá.' },

    { type: 'heading', level: 2, id: 'p4', text: 'Praha 3, Vinohrady — klasická šedá' },
    { type: 'paragraph', text: 'Páreček ve dvojkku, oba designéři. Šedá greige napříč celou koupelnou, žádné kontrasty, žádné dekorace. Minimalistický cíl: prostor mizí, přítomné jsou jen umyvadlo, sprcha, vana.' },

    { type: 'heading', level: 2, id: 'p5', text: 'Praha 8, Karlín — tmavá káva' },
    { type: 'paragraph', text: 'Realitní makléř, jehož byt prošel kompletní rekonstrukcí. Pryskyřice v odstínu „tmavá káva", zlatá baterie, černá sprchová tyč, bílé umyvadlo. Působí jako boutique hotel.' },

    { type: 'divider' },
    { type: 'paragraph', text: 'Pokud bydlíte v paneláku a tahle situace vám zní povědomě, ozvěte se. Bezplatná prohlídka, vzorky, závazná nabídka do 24 hodin.' },
  ],
})

/* ─────────────────────────────────────────────────────────────
   Sort by date desc (newest first)
   ───────────────────────────────────────────────────────────── */
articles.sort((a, b) => new Date(b.date) - new Date(a.date))

export function getArticle(slug) {
  return articles.find(a => a.slug === slug)
}

export function getRelatedArticles(currentSlug, limit = 2) {
  return articles.filter(a => a.slug !== currentSlug).slice(0, limit)
}

export const ARTICLES_PER_PAGE = 10
