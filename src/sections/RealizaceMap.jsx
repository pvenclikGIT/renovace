import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import FadeIn from '../components/FadeIn'
import styles from './RealizaceMap.module.css'

const API_KEY = import.meta.env.VITE_MAPYCZ_API_KEY ?? 'f1eMlZ2r_OkS7QKgl_asXPHI5DixmzHCn_NJ2apRbD0'

const LOCATIONS = [
  // === Praha ===
  { id: 'p1',  label: 'Praha 1',         area: 'Staré Město & Nové Město',        zone: 'Praha',         lat: 50.0875, lng: 14.4208, count: 8,
    story: 'Historické byty s cihlovými klenbami a prvorepublikovými dlažbami. Každá realizace je designová výzva a výsledek vždy překoná očekávání.',
    tag: 'Historické jádro', avgDays: 4, avgM2: 12 },
  { id: 'p2',  label: 'Praha 2',         area: 'Vinohrady & Nusle',              zone: 'Praha',         lat: 50.0732, lng: 14.4378, count: 14,
    story: 'Secesní domy s vysokými stropy a koupelnami z osmdesátek. Stěrka tady funguje jako designový restart, bez bourání a bez chaosu.',
    tag: 'Vilová čtvrť', avgDays: 3, avgM2: 11 },
  { id: 'p3',  label: 'Praha 3',         area: 'Žižkov & Vinohrady',             zone: 'Praha',         lat: 50.0841, lng: 14.4596, count: 19,
    story: 'Žižkov je naší nejaktivnější oblastí. Cihlové domy i panelové bloky. Stěrka zde nahrazuje nevzhlednou dlažbu během několika málo dnů.',
    tag: 'Nejvíce zakázek', avgDays: 2, avgM2: 8 },
  { id: 'p4',  label: 'Praha 4',         area: 'Chodov & Krč & Braník',          zone: 'Praha',         lat: 50.0399, lng: 14.4556, count: 22,
    story: 'Rekord celé Prahy. Panelová sídliště s malými koupelnami, přesně ta místa, kde stěrka bez bourání dává absolutně největší smysl.',
    tag: 'Rekord oblasti', avgDays: 2, avgM2: 7 },
  { id: 'p5',  label: 'Praha 5',         area: 'Smíchov & Motol & Hlubočepy',    zone: 'Praha',         lat: 50.0661, lng: 14.3803, count: 16,
    story: 'Mix moderního a starého světa. Nové byty vedle opravených vil. Majitelé chtějí čisté linie bez jediné spáry.',
    tag: 'Mix typů', avgDays: 3, avgM2: 10 },
  { id: 'p6',  label: 'Praha 6',         area: 'Dejvice & Bubeneč & Střešovice', zone: 'Praha',         lat: 50.1026, lng: 14.3640, count: 18,
    story: 'Ambasády, vilové čtvrti, luxusní standard. Polishované povrchy ve stylu high-end SPA. Tady musí být každý detail dokonalý.',
    tag: 'Luxusní segment', avgDays: 4, avgM2: 16 },
  { id: 'p7',  label: 'Praha 7',         area: 'Holešovice & Letná',             zone: 'Praha',         lat: 50.1028, lng: 14.4253, count: 11,
    story: 'Lofty, brownfieldy, kreativní obyvatelé. Industriální look bez spár. Tady stěrka dostane prostor ukázat svou nejlepší tvář.',
    tag: 'Urban & Loft', avgDays: 3, avgM2: 13 },
  { id: 'p8',  label: 'Praha 8',         area: 'Karlín & Libeň & Kobylisy',      zone: 'Praha',         lat: 50.1175, lng: 14.4679, count: 15,
    story: 'Karlín je pražský příběh roku. Nová generace majitelů v opravených domech. Vědí přesně, co chtějí, a nekompromisně to vyžadují.',
    tag: 'Boom čtvrť', avgDays: 3, avgM2: 11 },
  { id: 'p9',  label: 'Praha 9',         area: 'Vysočany & Prosek & Letňany',    zone: 'Praha',         lat: 50.1249, lng: 14.5264, count: 9,
    story: 'Rychle rostoucí severovýchod. Nová výstavba vedle starých panelů. Zákazníci vidí, že bourání není nutnost.',
    tag: 'Rozvíjející oblast', avgDays: 3, avgM2: 8 },
  { id: 'p10', label: 'Praha 10',        area: 'Vršovice & Strašnice & Záběhlice',zone: 'Praha',        lat: 50.0628, lng: 14.4893, count: 17,
    story: 'Cihlová Praha v nejlepším slova smyslu. Koupelny z různých epoch. Stěrka je designové řešení i praktická nutnost zároveň.',
    tag: 'Cihlová Praha', avgDays: 3, avgM2: 10 },
  { id: 'p11', label: 'Praha 11',        area: 'Chodov & Háje & Opatov',         zone: 'Praha',         lat: 50.0320, lng: 14.4932, count: 12,
    story: 'Jižní Město, největší sídliště v ČR. Tisíce panelových koupelen čeká na svůj upgrade. My ho přinášíme bez bourání.',
    tag: 'Panelové sídliště', avgDays: 2, avgM2: 6 },
  { id: 'p12', label: 'Praha 12',        area: 'Modřany & Komořany & Cholupice', zone: 'Praha',         lat: 50.0000, lng: 14.4100, count: 8,
    story: 'Klidné zázemí jižní Prahy. Rodinné domy i byty, kde si majitelé přejí elegantní koupelnu bez měsíční rekonstrukce.',
    tag: 'Rodinná Praha', avgDays: 3, avgM2: 9 },
  { id: 'p13', label: 'Praha 13',        area: 'Stodůlky & Nové Butovice',       zone: 'Praha',         lat: 50.0443, lng: 14.3328, count: 7,
    story: 'Západ Prahy roste podél metra B. Noví obyvatelé rekonstruují byty moderně, bez bourání, bez prachu, bez stresu.',
    tag: 'Západ Prahy', avgDays: 2, avgM2: 8 },
  { id: 'p14', label: 'Praha 14',        area: 'Hloubětín & Kyje & Černý Most',  zone: 'Praha',         lat: 50.1060, lng: 14.5320, count: 5,
    story: 'Praha 14 roste podél metra B. Noví majitelé chtějí personalizovaný povrch od začátku, a to umíme nejlépe.',
    tag: 'Nová výstavba', avgDays: 2, avgM2: 9 },

  // === Střední Čechy ===
  { id: 'kladno',     label: 'Kladno',          area: 'Kladno & Slaný',                zone: 'Střední Čechy', lat: 50.1437, lng: 14.1038, count: 7,
    story: 'Průmyslové Kladno se mění na moderní město. Nová generace majitelů chce bydlení na úrovni a stěrka je první krok.',
    tag: 'Průmyslové město', avgDays: 3, avgM2: 9 },
  { id: 'beroun',     label: 'Beroun',          area: 'Beroun & Králův Dvůr',           zone: 'Střední Čechy', lat: 49.9600, lng: 14.0701, count: 6,
    story: 'Oblíbené bydlení u řeky Berounky. Pěkné domy za rozumnou cenu a majitelé, kteří investují do detailu koupelny.',
    tag: 'Příměstský ráj', avgDays: 3, avgM2: 10 },
  { id: 'melnik',     label: 'Mělník',          area: 'Mělník & Neratovice',            zone: 'Střední Čechy', lat: 50.3500, lng: 14.4729, count: 4,
    story: 'Vinorodý Mělník s historickými domy. Unikátní kombinace staré architektury a nových technologií. Stěrka se hodí dokonale.',
    tag: 'Sever Čech', avgDays: 3, avgM2: 11 },
  { id: 'mb',         label: 'Mladá Boleslav',  area: 'Mladá Boleslav & okolí',         zone: 'Střední Čechy', lat: 50.4169, lng: 14.9070, count: 5,
    story: 'Automobilový kraj. Spokojení zaměstnanci Škody v nové zástavbě i starých domech. Stěrka se hodí na obojí.',
    tag: 'Škodovácký kraj', avgDays: 3, avgM2: 10 },
  { id: 'nymburk',    label: 'Nymburk',         area: 'Nymburk & Poděbrady',            zone: 'Střední Čechy', lat: 50.1850, lng: 15.0431, count: 3,
    story: 'Poděbrady a Nymburk: lázně a klidné bydlení. Koupelna jako wellness prostor je zde zcela přirozená ambice.',
    tag: 'Lázně & bydlení', avgDays: 3, avgM2: 12 },
  { id: 'kolin',      label: 'Kolín',           area: 'Kolín & Kutná Hora',             zone: 'Střední Čechy', lat: 50.0268, lng: 15.2003, count: 4,
    story: 'Historická zástavba se mísí s panelovými bloky. Epoxidová stěrka dává druhý dech oběma, esteticky i funkčně.',
    tag: 'Historický kraj', avgDays: 4, avgM2: 10 },
  { id: 'pribram',    label: 'Příbram',         area: 'Příbram & Dobříš',               zone: 'Střední Čechy', lat: 49.6940, lng: 14.0081, count: 5,
    story: 'Jihozápad středočeského kraje. Přijedeme, realizaci dotáhneme v dohodnutém termínu a předáváme přesně podle smlouvy.',
    tag: 'Jihozápad kraje', avgDays: 3, avgM2: 9 },
  { id: 'benesov',    label: 'Benešov',         area: 'Benešov & Konopiště',            zone: 'Střední Čechy', lat: 49.7826, lng: 14.6888, count: 3,
    story: 'Kraj Konopiště, venkovská idyla s moderními nároky. Majitelé chalup i domů chtějí koupelnu, na kterou se dívají s radostí.',
    tag: 'Venkov & chalupa', avgDays: 3, avgM2: 10 },
  { id: 'ricany',     label: 'Říčany',          area: 'Říčany & Průhonice & Jesenice',  zone: 'Střední Čechy', lat: 49.9921, lng: 14.6537, count: 6,
    story: 'Prémiový pražský suburbánon. Rodinné domy od 5 milionů výš. Koupelna musí být na úrovni a stěrka přesně sedí.',
    tag: 'Prémiový suburb', avgDays: 4, avgM2: 14 },
  { id: 'cernosice',  label: 'Černošice',       area: 'Černošice & Řevnice & Dobřichovice', zone: 'Střední Čechy', lat: 49.9614, lng: 14.3266, count: 8,
    story: 'Nejžádanější příměstská oblast Prahy. Vily a rodinné domy v zeleni. Stěrka dostane prostor ukázat svou eleganci.',
    tag: 'Prémiové zázemí', avgDays: 4, avgM2: 15 },
  { id: 'brandys',    label: 'Brandýs n.L.',    area: 'Brandýs n.L. & Stará Boleslav',  zone: 'Střední Čechy', lat: 50.1882, lng: 14.6617, count: 4,
    story: 'Severovýchod od Prahy, oblíbené rodinné bydlení. Koupelna bývá prvním projektem po nastěhování.',
    tag: 'Rodinné bydlení', avgDays: 3, avgM2: 10 },
  { id: 'roztoky',    label: 'Roztoky',         area: 'Roztoky & Únětice & Horoměřice', zone: 'Střední Čechy', lat: 50.1566, lng: 14.3940, count: 4,
    story: 'Ticho 15 minut od centra Prahy. Rodinné domy v zeleni s majiteli, kteří mají vysoké nároky, a my je splníme.',
    tag: 'Zelené zázemí', avgDays: 4, avgM2: 13 },
  { id: 'rakovnik',   label: 'Rakovník',        area: 'Rakovník & Křivoklátsko',        zone: 'Střední Čechy', lat: 50.1060, lng: 13.7363, count: 3,
    story: 'Kraj Křivoklátska s charakterem. Klienti si zakládají na řemeslné kvalitě, a to je přesně to, co jim dodáme.',
    tag: 'Západ kraje', avgDays: 3, avgM2: 10 },
  { id: 'mnich',      label: 'Mnichovice',      area: 'Mnichovice & Říčany & Sázava',   zone: 'Střední Čechy', lat: 49.9414, lng: 14.7183, count: 3,
    story: 'Jihozápadní zázemí Prahy s venkovskou atmosférou. Chalupáři i stálí obyvatelé. Stěrka funguje v obou světech.',
    tag: 'Venkovské zázemí', avgDays: 3, avgM2: 11 },
]

const total = LOCATIONS.reduce((s, l) => s + l.count, 0)
const pragueCount = LOCATIONS.filter(l => l.zone === 'Praha').reduce((s, l) => s + l.count, 0)
const regionCount = LOCATIONS.filter(l => l.zone !== 'Praha').reduce((s, l) => s + l.count, 0)

const MARKER_CSS = `
  @keyframes bzIn{0%{transform:scale(0) translateY(-10px);opacity:0}70%{transform:scale(1.18) translateY(2px);opacity:1}100%{transform:scale(1) translateY(0);opacity:1}}
  @keyframes bzRing{0%{transform:scale(1);opacity:.65}100%{transform:scale(2.2);opacity:0}}
  .bz-wrap{position:relative;cursor:pointer}
  .bz-ring{position:absolute;inset:-7px;border-radius:50%;border:2px solid rgba(201,150,60,.4);animation:bzRing 2.8s ease-out infinite;pointer-events:none}
  .bz-dot{width:100%;height:100%;background:#171412;color:#fff;border-radius:50%;border:2.5px solid rgba(255,255,255,.88);box-shadow:0 3px 18px rgba(23,20,18,.45);display:flex;align-items:center;justify-content:center;font-family:Poppins,sans-serif;font-weight:900;transition:transform .22s,background .22s,box-shadow .22s}
  .bz-wrap:hover .bz-dot{transform:scale(1.2);background:#C9963C;box-shadow:0 6px 28px rgba(201,150,60,.6)}
  .bz-active .bz-dot{background:#C9963C!important;box-shadow:0 5px 24px rgba(201,150,60,.65)!important}
  .bz-active .bz-ring{border-color:rgba(201,150,60,.75);animation-duration:1.6s}
`

export default function RealizaceMap() {
  const mapRef = useRef(null)
  const leafletRef = useRef(null)
  const setActiveRef = useRef(null)
  const [active, setActive] = useState(null)
  setActiveRef.current = setActive

  useEffect(() => {
    if (leafletRef.current || !mapRef.current) return

    if (!document.getElementById('bz-marker-css')) {
      const s = document.createElement('style')
      s.id = 'bz-marker-css'
      s.textContent = MARKER_CSS
      document.head.appendChild(s)
    }

    const initMap = async () => {
      const L = (await import('leaflet')).default
      await import('leaflet/dist/leaflet.css')
      if (leafletRef.current || !mapRef.current) return

      const map = L.map(mapRef.current, {
        center: [50.07, 14.55],
        zoom: 9,
        zoomControl: false,
        attributionControl: true,
      })
      leafletRef.current = map

      L.tileLayer(
        `https://api.mapy.com/v1/maptiles/basic/256/{z}/{x}/{y}?apikey=${API_KEY}`,
        { attribution: '© <a href="https://mapy.com">Mapy.com</a> · OpenStreetMap', maxZoom: 19 }
      ).addTo(map)

      L.control.zoom({ position: 'bottomright' }).addTo(map)

      LOCATIONS.forEach((loc, i) => {
        const size = Math.max(30, Math.min(58, 22 + loc.count * 1.3))
        const fs = size > 48 ? 14 : size > 38 ? 12 : 10
        const icon = L.divIcon({
          html: `<div class="bz-wrap" data-id="${loc.id}" style="width:${size}px;height:${size}px;animation:bzIn .55s cubic-bezier(.34,1.56,.64,1) ${80 + i * 45}ms both">
            <div class="bz-ring"></div>
            <div class="bz-dot" style="font-size:${fs}px">${loc.count}</div>
          </div>`,
          className: '',
          iconSize: [size, size],
          iconAnchor: [size / 2, size / 2],
        })

        const marker = L.marker([loc.lat, loc.lng], { icon }).addTo(map)
        marker.on('click', () => {
          document.querySelectorAll('.bz-wrap').forEach(el => el.classList.remove('bz-active'))
          document.querySelector(`.bz-wrap[data-id="${loc.id}"]`)?.classList.add('bz-active')
          setActiveRef.current(loc)
          if (window.innerWidth < 960) map.panTo([loc.lat, loc.lng], { animate: true })
        })
      })
    }

    initMap()
    return () => {
      if (leafletRef.current) { leafletRef.current.remove(); leafletRef.current = null }
    }
  }, [])

  return (
    <section id="map" className={styles.section}>
      <FadeIn>
        <div className={styles.sectionHead}>
          <div className={styles.tag}><span className={styles.tagDot} />Kde pracujeme</div>
          <h2 className={styles.title}>
            Vaše koupelna je na mapě.<br /><em>{total} realizací</em> a přibývá.
          </h2>
          <p className={styles.lead}>Praha a celý Středočeský kraj. Klikněte na oblast a uvidíte detaily.</p>
        </div>
      </FadeIn>

      <div className={styles.mapLayout}>
        <FadeIn delay={0.1}>
          <div className={styles.mapWrap}>
            <div ref={mapRef} className={styles.leafletMap} />
          </div>
        </FadeIn>

        <div className={styles.panel}>
          <AnimatePresence mode="wait">
            {active ? (
              <motion.div
                key={active.id}
                className={styles.panelCard}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className={`${styles.zoneBadge} ${active.zone === 'Praha' ? styles.zonePraha : styles.zoneRegion}`}>
                  {active.zone}
                </div>

                <div className={styles.panelLabel}>{active.area}</div>
                <h3 className={styles.panelTitle}>{active.label}</h3>

                <div className={styles.panelCountRow}>
                  <span className={styles.panelNum}>{active.count}</span>
                  <div className={styles.panelCountMeta}>
                    <span className={styles.panelCountWord}>realizací</span>
                    <span className={styles.panelCountSub}>v této oblasti</span>
                  </div>
                </div>

                <p className={styles.panelStory}>{active.story}</p>

                <div className={styles.panelStats}>
                  <div className={styles.panelStat}>
                    <div className={styles.panelStatVal}>{active.avgM2} m²</div>
                    <div className={styles.panelStatLabel}>Průměrná plocha</div>
                  </div>
                  <div className={styles.panelStatDiv} />
                  <div className={styles.panelStat}>
                    <div className={styles.panelStatVal}>~14 dní</div>
                    <div className={styles.panelStatLabel}>Běžná délka realizace</div>
                  </div>
                  <div className={styles.panelStatDiv} />
                  <div className={styles.panelStat}>
                    <div className={styles.panelStatVal}>100 %</div>
                    <div className={styles.panelStatLabel}>Spokojenost</div>
                  </div>
                </div>

                <div className={styles.panelTagLine}>
                  <span className={styles.panelTag}>{active.tag}</span>
                </div>

                <a href="#contact" className={styles.panelCta}>
                  Chci konzultaci v {active.label}
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </motion.div>
            ) : (
              <motion.div
                key="empty"
                className={styles.panelEmpty}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className={styles.emptyPin}>
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2C9.03 2 5 6.03 5 11c0 7 9 15 9 15s9-8 9-15c0-4.97-4.03-9-9-9z" />
                    <circle cx="14" cy="11" r="3" />
                  </svg>
                </div>
                <p className={styles.emptyText}>Klikněte na oblast na mapě</p>
                <p className={styles.emptySub}>Zobrazíme vám detail realizací a typy koupelen</p>
                <div className={styles.emptyZones}>
                  <div className={styles.emptyZone}>
                    <span className={styles.emptyZoneNum}>{pragueCount}</span>
                    <span className={styles.emptyZoneLabel}>Praha</span>
                  </div>
                  <div className={styles.emptyZoneDivider} />
                  <div className={styles.emptyZone}>
                    <span className={styles.emptyZoneNum}>{regionCount}</span>
                    <span className={styles.emptyZoneLabel}>Střední Čechy</span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <FadeIn delay={0.2}>
        <div className={styles.stats}>
          {[
            { num: `${total}+`,             label: 'Realizací celkem' },
            { num: `${LOCATIONS.length}`,   label: 'Oblastí' },
            { num: 'Pár dnů',               label: 'Termín prohlídky' },
            { num: '100 %',                 label: 'Spokojenost klientů' },
          ].map(s => (
            <div key={s.label} className={styles.statCard}>
              <div className={styles.statNum}>{s.num}</div>
              <div className={styles.statLabel}>{s.label}</div>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  )
}
