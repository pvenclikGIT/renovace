import LegalLayout, { LegalSection, legalStyles as s } from './LegalLayout'

const sections = [
  { id: 'spravce',     title: 'Kdo je správce' },
  { id: 'udaje',       title: 'Jaké údaje zpracováváme' },
  { id: 'ucely',       title: 'Účel a právní základ' },
  { id: 'doba',        title: 'Doba uchování' },
  { id: 'prijemci',    title: 'Komu údaje předáváme' },
  { id: 'prava',       title: 'Vaše práva' },
  { id: 'zabezpeceni', title: 'Zabezpečení' },
  { id: 'kontakt',     title: 'Jak nás kontaktovat' },
]

export default function Gdpr() {
  return (
    <LegalLayout
      tag="Ochrana soukromí"
      title="Zpracování osobních údajů"
      lead="Stručně a srozumitelně o tom, jaké osobní údaje od vás potřebujeme, k čemu je používáme a jaká máte práva. Plníme tím povinnosti podle nařízení GDPR a zákona č. 110/2019 Sb."
      lastUpdated="10. května 2026"
      sections={sections}
    >
      <LegalSection id="spravce" num="I" title="Kdo je správce vašich údajů">
        <p>
          Správcem vašich osobních údajů je společnost <strong>ServisProfi s.r.o.</strong>,
          která provozuje web BezSpár.cz a poskytuje služby renovace koupelen.
        </p>
        <ul className={s.list}>
          <li>ServisProfi s.r.o.</li>
          <li>IČO: 24477648</li>
          <li>Sídlo: Zbraslavská 12/11, Praha 5</li>
          <li>E-mail: info@bezspar.cz</li>
          <li>Telefon: +420 776 661 661</li>
        </ul>
        <p>
          Nejsme povinni jmenovat pověřence pro ochranu osobních údajů (DPO).
          Ve věcech ochrany soukromí se obracejte přímo na výše uvedené kontakty.
        </p>
      </LegalSection>

      <LegalSection id="udaje" num="II" title="Jaké údaje zpracováváme">
        <p>
          Zpracováváme jen ty údaje, které od vás dostaneme nebo které
          automaticky získáme při návštěvě webu.
        </p>

        <h3 className={s.h3}>Údaje, které nám sami předáte</h3>
        <ul className={s.list}>
          <li>Jméno a příjmení</li>
          <li>Telefonní číslo</li>
          <li>E-mailová adresa</li>
          <li>Adresa realizace (pouze u uzavřené smlouvy)</li>
          <li>Fotografie a popis stavu koupelny (pokud je sami zašlete pro nezávazný odhad)</li>
          <li>Další informace, které dobrovolně uvedete v textu zprávy</li>
        </ul>

        <h3 className={s.h3}>Údaje získané automaticky</h3>
        <ul className={s.list}>
          <li>IP adresa, typ prohlížeče a operačního systému</li>
          <li>Stránky, které jste na webu navštívili</li>
          <li>Datum a čas návštěvy</li>
          <li>Anonymizované statistiky o chování na webu</li>
        </ul>
        <p>
          Detail o cookies najdete v dokumentu <a href="/cookies">Cookies</a>.
        </p>
      </LegalSection>

      <LegalSection id="ucely" num="III" title="Účel a právní základ zpracování">
        <p>
          Vaše údaje zpracováváme jen pro konkrétní účely a vždy na nějakém
          právním základu podle GDPR.
        </p>

        <h3 className={s.h3}>Reakce na nezávaznou poptávku</h3>
        <ul className={s.list}>
          <li><strong>Účel:</strong> Připravit cenovou nabídku, telefonicky nebo e-mailem se ozvat</li>
          <li><strong>Právní základ:</strong> Oprávněný zájem (čl. 6 odst. 1 písm. f GDPR) a opatření před uzavřením smlouvy (čl. 6 odst. 1 písm. b GDPR)</li>
        </ul>

        <h3 className={s.h3}>Plnění smlouvy</h3>
        <ul className={s.list}>
          <li><strong>Účel:</strong> Realizace zakázky, fakturace, předání díla, řešení reklamací</li>
          <li><strong>Právní základ:</strong> Plnění smlouvy (čl. 6 odst. 1 písm. b GDPR)</li>
        </ul>

        <h3 className={s.h3}>Účetní a daňové povinnosti</h3>
        <ul className={s.list}>
          <li><strong>Účel:</strong> Vystavení faktury, archivace dokladů</li>
          <li><strong>Právní základ:</strong> Plnění právní povinnosti (čl. 6 odst. 1 písm. c GDPR)</li>
        </ul>

        <h3 className={s.h3}>Zlepšování webu</h3>
        <ul className={s.list}>
          <li><strong>Účel:</strong> Měření návštěvnosti, optimalizace obsahu</li>
          <li><strong>Právní základ:</strong> Souhlas (čl. 6 odst. 1 písm. a GDPR), který udělujete přijetím cookies</li>
        </ul>
      </LegalSection>

      <LegalSection id="doba" num="IV" title="Doba uchování údajů">
        <ul className={s.list}>
          <li><strong>Nezávazná poptávka bez navazující smlouvy:</strong> nejdéle 6 měsíců od posledního kontaktu</li>
          <li><strong>Údaje ze smlouvy:</strong> po dobu trvání smlouvy a 10 let po jejím skončení (záruční doba a archivační povinnost)</li>
          <li><strong>Účetní doklady:</strong> 10 let podle zákona o účetnictví</li>
          <li><strong>Cookies a webové statistiky:</strong> dle nastavení v dokumentu Cookies</li>
        </ul>
        <p>
          Po uplynutí těchto lhůt údaje bezpečně zlikvidujeme.
        </p>
      </LegalSection>

      <LegalSection id="prijemci" num="V" title="Komu údaje předáváme">
        <p>
          Vaše údaje nikdy neprodáváme. Předáváme je pouze v nezbytně nutném rozsahu:
        </p>
        <ul className={s.list}>
          <li><strong>Účetní firma</strong> pro zpracování účetnictví</li>
          <li><strong>Provozovatel hostingu</strong> webu (technické zpracování)</li>
          <li><strong>Google Analytics</strong> (anonymizované statistiky návštěvnosti, pouze se souhlasem cookies)</li>
          <li><strong>Orgány veřejné moci</strong> v rámci jejich zákonné pravomoci (finanční úřad, soud)</li>
        </ul>
        <p>
          Žádné údaje nepředáváme mimo Evropskou unii. Všichni naši zpracovatelé
          jsou vázáni smluvní povinností mlčenlivosti.
        </p>
      </LegalSection>

      <LegalSection id="prava" num="VI" title="Vaše práva">
        <p>
          Jako subjekt údajů máte podle GDPR tato práva:
        </p>
        <ul className={s.list}>
          <li><strong>Právo na přístup</strong> k vašim osobním údajům — můžete se zeptat, jaké údaje o vás vedeme</li>
          <li><strong>Právo na opravu</strong> nepřesných nebo zastaralých údajů</li>
          <li><strong>Právo na výmaz</strong> ("právo být zapomenut") — pokud již nejsou potřeba</li>
          <li><strong>Právo na omezení zpracování</strong> v případě sporu o správnosti údajů</li>
          <li><strong>Právo na přenositelnost</strong> — vyžádat si údaje ve strukturovaném formátu</li>
          <li><strong>Právo vznést námitku</strong> proti zpracování na základě oprávněného zájmu</li>
          <li><strong>Právo odvolat souhlas</strong> kdykoli (bez vlivu na zpracování před odvoláním)</li>
          <li><strong>Právo podat stížnost</strong> u Úřadu pro ochranu osobních údajů (<a href="https://www.uoou.cz" target="_blank" rel="noopener noreferrer">www.uoou.cz</a>)</li>
        </ul>
        <p>
          Pro uplatnění jakéhokoli práva nám stačí napsat na info@bezspar.cz.
          Odpovíme nejpozději do 30 dnů.
        </p>
      </LegalSection>

      <LegalSection id="zabezpeceni" num="VII" title="Zabezpečení vašich údajů">
        <p>
          Vaše údaje uchováváme s odpovídajícím technickým a organizačním
          zabezpečením:
        </p>
        <ul className={s.list}>
          <li>Přenosy webem jsou šifrované (HTTPS)</li>
          <li>Přístup k údajům mají pouze pověření pracovníci</li>
          <li>Pravidelně zálohujeme a aktualizujeme bezpečnostní opatření</li>
          <li>Zpracovatele vybíráme tak, aby splňovali standardy GDPR</li>
        </ul>
      </LegalSection>

      <LegalSection id="kontakt" num="VIII" title="Jak nás kontaktovat">
        <p>
          S jakýmkoli dotazem ohledně zpracování osobních údajů se obraťte na nás
          jakoukoli z níže uvedených cest. Neformální dotaz e-mailem stačí, není
          potřeba úřední žádost.
        </p>
        <ul className={s.list}>
          <li><strong>E-mail:</strong> info@bezspar.cz</li>
          <li><strong>Telefon:</strong> +420 776 661 661</li>
          <li><strong>Pošta:</strong> ServisProfi s.r.o., Zbraslavská 12/11, Praha 5</li>
        </ul>
      </LegalSection>

      <div className={s.contactBox}>
        <div className={s.contactTitle}>Chcete uplatnit některé z práv?</div>
        <p>
          Stačí krátký e-mail. Není potřeba úřední dopis ani formuláře.
          Reagujeme do 30 dnů, většinou rychleji.
        </p>
        <ul className={s.contactList}>
          <li><strong>E-mail:</strong> <a href="mailto:info@bezspar.cz">info@bezspar.cz</a></li>
          <li><strong>Telefon:</strong> <a href="tel:+420776661661">+420 776 661 661</a></li>
        </ul>
      </div>
    </LegalLayout>
  )
}
