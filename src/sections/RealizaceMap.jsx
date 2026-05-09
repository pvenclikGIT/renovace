import { useEffect, useRef } from 'react'
import FadeIn from '../components/FadeIn'
import styles from './RealizaceMap.module.css'

const API_KEY = import.meta.env.VITE_MAPYCZ_API_KEY ?? 'f1eMlZ2r_OkS7QKgl_asXPHI5DixmzHCn_NJ2apRbD0'

const districts = [
  { id: 'p1',  label: 'Praha 1',       lat: 50.0875, lng: 14.4208, count: 8  },
  { id: 'p2',  label: 'Praha 2',       lat: 50.0732, lng: 14.4378, count: 14 },
  { id: 'p3',  label: 'Praha 3',       lat: 50.0841, lng: 14.4596, count: 19 },
  { id: 'p4',  label: 'Praha 4',       lat: 50.0399, lng: 14.4556, count: 22 },
  { id: 'p5',  label: 'Praha 5',       lat: 50.0661, lng: 14.3803, count: 16 },
  { id: 'p6',  label: 'Praha 6',       lat: 50.1026, lng: 14.3640, count: 18 },
  { id: 'p7',  label: 'Praha 7',       lat: 50.1028, lng: 14.4253, count: 11 },
  { id: 'p8',  label: 'Praha 8',       lat: 50.1175, lng: 14.4679, count: 15 },
  { id: 'p9',  label: 'Praha 9',       lat: 50.1249, lng: 14.5264, count: 9  },
  { id: 'p10', label: 'Praha 10',      lat: 50.0628, lng: 14.4893, count: 17 },
  { id: 'p13', label: 'Praha 13',      lat: 50.0443, lng: 14.3328, count: 7  },
  { id: 'kladno',   label: 'Kladno',          lat: 50.1437, lng: 14.1038, count: 5 },
  { id: 'beroun',   label: 'Beroun',           lat: 49.9600, lng: 14.0701, count: 6 },
  { id: 'brandys',  label: 'Brandýs n. L.',   lat: 50.1882, lng: 14.6617, count: 4 },
  { id: 'mnich',    label: 'Mnichovice',       lat: 49.9414, lng: 14.7183, count: 3 },
]

const total = districts.reduce((s, d) => s + d.count, 0)

export default function RealizaceMap() {
  const mapRef = useRef(null)
  const leafletRef = useRef(null)

  useEffect(() => {
    if (leafletRef.current || !mapRef.current) return

    let L

    const initMap = async () => {
      L = (await import('leaflet')).default
      await import('leaflet/dist/leaflet.css')

      if (leafletRef.current || !mapRef.current) return

      const map = L.map(mapRef.current, {
        center: [50.073, 14.437],
        zoom: 11,
        zoomControl: false,
        attributionControl: true,
      })
      leafletRef.current = map

      // Mapy.com tiles
      L.tileLayer(
        `https://api.mapy.com/v1/maptiles/basic/256/{z}/{x}/{y}?apikey=${API_KEY}`,
        {
          attribution: '© <a href="https://mapy.com" target="_blank">Mapy.com</a> · <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a>',
          maxZoom: 19,
        }
      ).addTo(map)

      // Zoom control bottom-right
      L.control.zoom({ position: 'bottomright' }).addTo(map)

      // Custom markers
      districts.forEach(d => {
        const size = Math.max(32, Math.min(52, 28 + d.count * 1.1))
        const icon = L.divIcon({
          html: `
            <div style="
              width:${size}px; height:${size}px;
              background:#171412; color:#fff;
              border-radius:50%; border:2.5px solid #fff;
              box-shadow:0 2px 10px rgba(23,20,18,0.35);
              display:flex; align-items:center; justify-content:center;
              font-family:Poppins,sans-serif; font-size:${size > 42 ? 13 : 11}px; font-weight:800;
              transition:background .2s;
              cursor:pointer;
            ">${d.count}</div>
          `,
          className: '',
          iconSize: [size, size],
          iconAnchor: [size / 2, size / 2],
          popupAnchor: [0, -(size / 2 + 4)],
        })

        L.marker([d.lat, d.lng], { icon })
          .addTo(map)
          .bindPopup(`
            <div style="font-family:Poppins,sans-serif; padding:2px 4px; min-width:120px;">
              <div style="font-size:10px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#C9963C;margin-bottom:4px">${d.label}</div>
              <div style="font-size:20px;font-weight:900;color:#171412;letter-spacing:-.04em">${d.count}</div>
              <div style="font-size:12px;font-weight:400;color:#6B6560">realizací</div>
            </div>
          `, { closeButton: false, className: styles.popup })
      })
    }

    initMap()

    return () => {
      if (leafletRef.current) {
        leafletRef.current.remove()
        leafletRef.current = null
      }
    }
  }, [])

  return (
    <section id="map" className={styles.section}>
      <div className={styles.inner}>
        <FadeIn>
          <div className={styles.header}>
            <div className={styles.tag}><span className={styles.tagDot}/>Kde pracujeme</div>
            <h2 className={styles.title}>Děláme ve vaší čtvrti.<br/><em>{total} realizací</em> a přibývá.</h2>
            <p className={styles.lead}>Praha a celý Středočeský kraj. Klikněte na oblast pro detail.</p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className={styles.mapWrap}>
            <div ref={mapRef} className={styles.leafletMap} />
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className={styles.stats}>
            {[
              { num: `${total}+`, label: 'Realizací celkem' },
              { num: '15',        label: 'Oblastí Prahy' },
              { num: '48 h',      label: 'Termín prohlídky' },
              { num: '100 %',     label: 'Spokojenost klientů' },
            ].map(s => (
              <div key={s.label} className={styles.statCard}>
                <div className={styles.statNum}>{s.num}</div>
                <div className={styles.statLabel}>{s.label}</div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
