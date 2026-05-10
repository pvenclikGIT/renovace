import LegalLayout, { LegalSection, legalStyles as s } from './LegalLayout'

const sections = [
  { id: 'uvodni',      title: 'Úvodní ustanovení' },
  { id: 'strany',      title: 'Smluvní strany' },
  { id: 'predmet',     title: 'Předmět smlouvy' },
  { id: 'cena',        title: 'Cena a platební podmínky' },
  { id: 'termin',      title: 'Termín plnění' },
  { id: 'zaruka',      title: 'Záruka' },
  { id: 'reklamace',   title: 'Reklamace' },
  { id: 'storno',      title: 'Storno termínu' },
  { id: 'zaverecna',   title: 'Závěrečná ustanovení' },
]

export default function ObchodniPodminky() {
  return (
    <LegalLayout
      tag="Pravidla spolupráce"
      title="Obchodní podmínky"
      lead="Pravidla, podle kterých uzavíráme smlouvu o realizaci stěrky, vystavujeme faktury a poskytujeme záruku. Platí pro všechny zakázky uzavřené se společností ServisProfi s.r.o."
      lastUpdated="10. května 2026"
      sections={sections}
    >
      <LegalSection id="uvodni" num="I" title="Úvodní ustanovení">
        <p>
          Tyto obchodní podmínky upravují vzájemná práva a povinnosti mezi
          <strong> ServisProfi s.r.o.</strong> (dále jen „zhotovitel") a klientem
          (dále jen „objednatel") při realizaci aplikace stěrkových povrchů
          v koupelnách a dalších prostorách.
        </p>
        <p>
          Smluvní vztah vzniká podpisem cenové nabídky nebo smlouvy o dílo,
          případně písemným potvrzením objednávky. Tyto podmínky jsou nedílnou
          součástí každé takové smlouvy.
        </p>
      </LegalSection>

      <LegalSection id="strany" num="II" title="Smluvní strany">
        <p><strong>Zhotovitel:</strong></p>
        <ul className={s.list}>
          <li>ServisProfi s.r.o.</li>
          <li>IČO: 24477648</li>
          <li>Sídlo: Zbraslavská 12/11, Praha 5</li>
          <li>Kontakt: info@bezspar.cz, +420 776 661 661</li>
        </ul>
        <p>
          <strong>Objednatel:</strong> fyzická nebo právnická osoba, která uzavřela
          se zhotovitelem smlouvu o dílo na realizaci stěrkového povrchu.
        </p>
      </LegalSection>

      <LegalSection id="predmet" num="III" title="Předmět smlouvy">
        <p>
          Předmětem smlouvy je provedení díla zhotovitelem, kterým se rozumí
          aplikace cementové, epoxidové nebo pryskyřičné stěrky na stávající
          obklady nebo jiný podklad v dohodnutém prostoru objednatele, včetně
          přípravných prací, finálního laku a úklidu po realizaci.
        </p>
        <p>
          Konkrétní rozsah, použité materiály, barvy a cena jsou specifikovány
          v cenové nabídce, která tvoří přílohu smlouvy.
        </p>
      </LegalSection>

      <LegalSection id="cena" num="IV" title="Cena a platební podmínky">
        <p>
          Cena díla je stanovena dohodou v cenové nabídce na základě plochy
          (Kč/m²) a použitého materiálu. Standardní sazby:
        </p>
        <ul className={s.list}>
          <li><strong>Cementová stěrka:</strong> 3 000 Kč/m² bez DPH</li>
          <li><strong>Epoxidová stěrka:</strong> 3 750 Kč/m² bez DPH</li>
          <li><strong>Pryskyřičná stěrka:</strong> 4 500 Kč/m² bez DPH</li>
        </ul>
        <p>
          Cena zahrnuje práci, materiál, přípravu podkladu, skelnou perlinku,
          finální lak a úklid po realizaci. Doprava po Praze je v ceně, mimo
          Prahu se účtuje individuálně.
        </p>
        <h3 className={s.h3}>Splatnost a způsob úhrady</h3>
        <ul className={s.list}>
          <li><strong>Záloha 30 %</strong> z celkové ceny při podpisu smlouvy</li>
          <li><strong>Doplatek 70 %</strong> do 7 dní po předání hotového díla</li>
          <li>Platba bankovním převodem nebo v hotovosti</li>
          <li>Faktura s rozpisem prací je vystavena při předání díla</li>
        </ul>
      </LegalSection>

      <LegalSection id="termin" num="V" title="Termín plnění">
        <p>
          Termín zahájení a předpokládaného dokončení je dohodnut v cenové
          nabídce. Standardní doba realizace činí <strong>běžně do 14 pracovních dnů</strong>
          při dodržení technologických postupů, ve výjimečných případech je možná
          rychlejší realizace (do týdne) za příplatek.
        </p>
        <p>
          Termín se může prodloužit z důvodů na straně objednatele (nepřipravený
          podklad, nedostupnost prostoru) nebo z důvodů vyšší moci. O takovém
          prodloužení zhotovitel objednatele bez zbytečného odkladu informuje.
        </p>
      </LegalSection>

      <LegalSection id="zaruka" num="VI" title="Záruka">
        <p>
          Zhotovitel poskytuje na provedené dílo záruku v délce:
        </p>
        <ul className={s.list}>
          <li><strong>10 let</strong> na vodotěsnost a přilnavost povrchu (epoxidová a pryskyřičná stěrka)</li>
          <li><strong>5 let</strong> na vodotěsnost a přilnavost povrchu (cementová stěrka)</li>
        </ul>
        <p>
          Záruka se vztahuje na vady vzniklé při realizaci a vady materiálu.
          Záruční list je objednateli předán při převzetí díla.
        </p>
        <h3 className={s.h3}>Co záruka nepokrývá</h3>
        <ul className={s.list}>
          <li>Mechanické poškození způsobené uživatelem (úder těžkého předmětu, ostrý úder)</li>
          <li>Vady způsobené nesprávným užíváním nebo nedodržením doporučení k údržbě</li>
          <li>Změny způsobené dlouhodobým působením agresivní chemie nad rámec běžné domácí údržby</li>
          <li>Estetické změny v důsledku přirozeného stárnutí materiálu (drobné změny barvy, mikroskopické otěry)</li>
        </ul>
      </LegalSection>

      <LegalSection id="reklamace" num="VII" title="Reklamace">
        <p>
          Reklamaci uplatňuje objednatel u zhotovitele bez zbytečného odkladu
          po zjištění vady, nejpozději do <strong>30 dnů</strong> od jejího zjištění.
          Reklamaci je možné podat:
        </p>
        <ul className={s.list}>
          <li>E-mailem na info@bezspar.cz s popisem vady a fotografiemi</li>
          <li>Telefonicky na +420 776 661 661</li>
          <li>Písemně poštou na adresu sídla</li>
        </ul>
        <p>
          Zhotovitel se k reklamaci vyjádří do <strong>14 dnů</strong> od jejího
          obdržení. Oprávněnou reklamaci řeší opravou na místě, výjimečně
          výměnou nebo přiměřenou slevou z ceny díla.
        </p>
      </LegalSection>

      <LegalSection id="storno" num="VIII" title="Storno termínu">
        <p>
          Objednatel může zrušit dohodnutý termín realizace bez sankce nejpozději
          <strong> 7 dnů před zahájením prací</strong>. Při pozdějším zrušení:
        </p>
        <ul className={s.list}>
          <li><strong>3 až 7 dnů před termínem:</strong> storno poplatek 10 % z ceny díla</li>
          <li><strong>Méně než 3 dny před termínem:</strong> storno poplatek 25 % z ceny díla</li>
          <li><strong>V den zahájení nebo později:</strong> storno poplatek 50 % z ceny díla</li>
        </ul>
        <p>
          Zhotovitel může od smlouvy odstoupit, pokud objednatel nepřipraví
          prostor podle dohodnutých podmínek nebo opakovaně neumožní zhotoviteli
          přístup. V takovém případě má zhotovitel právo na úhradu vynaložených
          nákladů.
        </p>
      </LegalSection>

      <LegalSection id="zaverecna" num="IX" title="Závěrečná ustanovení">
        <p>
          Vztahy neupravené těmito podmínkami se řídí příslušnými ustanoveními
          zákona č. 89/2012 Sb., občanský zákoník, a dalšími právními předpisy
          České republiky.
        </p>
        <p>
          Případné spory se obě smluvní strany zavazují řešit primárně dohodou.
          Pokud dohoda není možná, je místně příslušným soudem soud podle sídla
          zhotovitele.
        </p>
        <p>
          Tyto obchodní podmínky jsou platné a účinné od 10. května 2026.
          Zhotovitel si vyhrazuje právo je v budoucnu měnit. Změny nemají vliv
          na již uzavřené smlouvy.
        </p>
      </LegalSection>

      <div className={s.contactBox}>
        <div className={s.contactTitle}>Máte otázku k podmínkám?</div>
        <p>
          Cokoliv z těchto podmínek vám není jasné, rádi vysvětlíme. Stačí se
          ozvat, dříve než cokoliv podepíšete.
        </p>
        <ul className={s.contactList}>
          <li><strong>Telefon:</strong> <a href="tel:+420776661661">+420 776 661 661</a></li>
          <li><strong>E-mail:</strong> <a href="mailto:info@bezspar.cz">info@bezspar.cz</a></li>
        </ul>
      </div>
    </LegalLayout>
  )
}
