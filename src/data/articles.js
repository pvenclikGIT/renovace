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

export function getArticle(slug) {
  return articles.find(a => a.slug === slug)
}

export function getRelatedArticles(currentSlug, limit = 2) {
  return articles.filter(a => a.slug !== currentSlug).slice(0, limit)
}
