import LegalLayout, { LegalSection, legalStyles as s } from './LegalLayout'

const sections = [
  { id: 'co-jsou',     title: 'Co jsou cookies' },
  { id: 'jake',        title: 'Jaké cookies používáme' },
  { id: 'funkcni',     title: 'Funkční cookies' },
  { id: 'analyticke',  title: 'Analytické cookies' },
  { id: 'tretí-strany',title: 'Třetí strany' },
  { id: 'sprava',      title: 'Jak cookies spravovat' },
  { id: 'zmeny',       title: 'Změny tohoto dokumentu' },
]

export default function Cookies() {
  return (
    <LegalLayout
      tag="Cookies"
      title="Zásady používání cookies"
      lead="Náš web používá cookies, aby fungoval a abychom rozuměli, jak ho návštěvníci používají. Tady je jasný přehled, k čemu která cookie slouží a jak ji vypnout."
      lastUpdated="10. května 2026"
      sections={sections}
    >
      <LegalSection id="co-jsou" num="I" title="Co jsou cookies">
        <p>
          Cookies jsou malé textové soubory, které web ukládá ve vašem prohlížeči
          při návštěvě stránky. Pomáhají si pamatovat vaše preference (například
          souhlas s cookies), umožňují základní fungování webu a poskytují nám
          anonymní statistiky o tom, jak je web používán.
        </p>
        <p>
          Cookies samy o sobě <strong>nečtou nic z vašeho zařízení</strong>
          a neumí vás identifikovat jako konkrétní osobu, pokud jste nám
          dobrovolně neposkytli své osobní údaje (například při odeslání
          formuláře).
        </p>
      </LegalSection>

      <LegalSection id="jake" num="II" title="Jaké cookies používáme">
        <p>
          Cookies dělíme do dvou kategorií podle účelu:
        </p>
        <ul className={s.list}>
          <li><strong>Funkční (nezbytné):</strong> potřebné pro základní fungování webu, načítají se vždy</li>
          <li><strong>Analytické (volitelné):</strong> pomáhají nám měřit návštěvnost a zlepšovat web, načítají se jen s vaším souhlasem</li>
        </ul>
        <p>
          Žádné reklamní ani sledovací cookies třetích stran (Facebook Pixel,
          ad networks) nepoužíváme.
        </p>
      </LegalSection>

      <LegalSection id="funkcni" num="III" title="Funkční cookies">
        <p>
          Tyto cookies jsou nutné pro provoz webu. Bez nich by stránky správně
          nefungovaly. Nepotřebují váš souhlas.
        </p>
        <ul className={s.list}>
          <li><strong>cookieConsent</strong> — zapamatuje si váš souhlas / odmítnutí cookies. Doba uchování: 12 měsíců.</li>
          <li><strong>session</strong> — udržuje stav formulářů během vaší návštěvy. Doba uchování: do zavření prohlížeče.</li>
        </ul>
      </LegalSection>

      <LegalSection id="analyticke" num="IV" title="Analytické cookies">
        <p>
          Pomáhají nám pochopit, jak návštěvníci web používají, které stránky
          jsou populární a kde se lidé zasekávají. Údaje jsou agregované
          a anonymizované.
        </p>
        <ul className={s.list}>
          <li><strong>Google Analytics 4</strong> — měření návštěvnosti, anonymizovaná IP. Doba uchování: 14 měsíců.</li>
        </ul>
        <p>
          Tyto cookies se načtou pouze pokud udělíte souhlas v cookie banneru.
          Souhlas můžete kdykoli odvolat (viz sekce „Jak cookies spravovat").
        </p>
      </LegalSection>

      <LegalSection id="tretí-strany" num="V" title="Třetí strany">
        <p>
          Některé části webu načítají obsah z externích služeb. Tyto služby
          mohou ukládat vlastní cookies podle svých zásad:
        </p>
        <ul className={s.list}>
          <li><strong>Google Fonts</strong> — načítá písmo Poppins z google.com (žádné identifikační cookies)</li>
          <li><strong>Mapy.com</strong> — interaktivní mapa realizací (vlastní cookies dle zásad mapy.com)</li>
          <li><strong>Google Analytics</strong> — pouze se souhlasem (viz výše)</li>
        </ul>
        <p>
          Sociální sítě (Instagram, Facebook, Houzz) jsou linkovány z patičky,
          ale jejich obsah <strong>není vložen</strong> přímo na stránce. Tracking
          z těchto sítí proběhne až po prokliknutí na jejich web.
        </p>
      </LegalSection>

      <LegalSection id="sprava" num="VI" title="Jak cookies spravovat">
        <p>
          Souhlas s analytickými cookies můžete kdykoliv změnit nebo odvolat:
        </p>
        <ul className={s.list}>
          <li><strong>Změnit volbu na našem webu:</strong> v patičce kliknutím na „Nastavení cookies" (v plánu)</li>
          <li><strong>Smazat cookies v prohlížeči:</strong> v nastavení vašeho prohlížeče</li>
          <li><strong>Blokovat cookies úplně:</strong> nastavte si prohlížeč na blokování všech cookies (může omezit funkčnost webu)</li>
        </ul>

        <h3 className={s.h3}>Návody pro nejčastější prohlížeče</h3>
        <ul className={s.list}>
          <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">Google Chrome</a></li>
          <li><a href="https://support.mozilla.org/cs/kb/povoleni-zakazani-cookies" target="_blank" rel="noopener noreferrer">Mozilla Firefox</a></li>
          <li><a href="https://support.apple.com/cs-cz/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer">Apple Safari</a></li>
          <li><a href="https://support.microsoft.com/cs-cz/microsoft-edge/odstran%C4%9Bn%C3%AD-soubor%C5%AF-cookie-v-aplikaci-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer">Microsoft Edge</a></li>
        </ul>
      </LegalSection>

      <LegalSection id="zmeny" num="VII" title="Změny tohoto dokumentu">
        <p>
          Tento dokument můžeme v budoucnu aktualizovat, pokud změníme používané
          cookies nebo pokud se změní právní předpisy. Vždy platí aktuální verze
          uvedená v patičce s datem poslední aktualizace.
        </p>
        <p>
          Doporučujeme tento dokument občas zkontrolovat. Při zásadních změnách
          vás požádáme o nový souhlas s cookies.
        </p>
      </LegalSection>

      <div className={s.contactBox}>
        <div className={s.contactTitle}>Otázka k cookies?</div>
        <p>
          Něco nejasného? Stačí napsat. Vysvětlíme normálním jazykem.
        </p>
        <ul className={s.contactList}>
          <li><strong>E-mail:</strong> <a href="mailto:info@bezspar.cz">info@bezspar.cz</a></li>
          <li><strong>Telefon:</strong> <a href="tel:+420776661661">+420 776 661 661</a></li>
        </ul>
      </div>
    </LegalLayout>
  )
}
