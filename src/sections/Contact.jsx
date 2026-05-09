import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { IconPhone, IconMail, IconPin, IconZap } from '../components/Icons'
import FadeIn from '../components/FadeIn'
import SectionHeader from '../components/SectionHeader'
import styles from './Contact.module.css'

const info = [
  { Icon: IconPhone, label: 'Zavolejte', text: '+420 XXX XXX XXX', note: 'Po–Pá 8:00–18:00' },
  { Icon: IconMail, label: 'Napište', text: 'info@sterkabad.cz', note: 'Odpovídáme do 4 hodin' },
  { Icon: IconPin, label: 'Kde pracujeme', text: 'Praha & Středočeský kraj', note: 'Větší projekty – celá ČR' },
  { Icon: IconZap, label: 'Orientační cena', text: 'Do 24 hodin', note: 'Stačí pár fotek na WhatsApp' },
]

function ChevronDown() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function CheckMark() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M2.5 7l3.5 3.5 5.5-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function CustomSelect({ value, onChange, options, placeholder }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const handler = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false) }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const selectedLabel = options.find(o => o.value === value)?.label ?? (value || null)

  return (
    <div ref={ref} className={styles.csWrap}>
      <button
        type="button"
        className={`${styles.csTrigger} ${open ? styles.csOpen : ''} ${!value ? styles.csPlaceholder : ''}`}
        onClick={() => setOpen(v => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span>{selectedLabel ?? placeholder}</span>
        <span className={`${styles.csChevron} ${open ? styles.csChevronUp : ''}`}>
          <ChevronDown />
        </span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            role="listbox"
            className={styles.csDropdown}
            initial={{ opacity: 0, y: -6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -4, scale: 0.98 }}
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
          >
            {options.map(opt => {
              const isSelected = opt.value === value
              return (
                <li key={opt.value} role="option" aria-selected={isSelected}>
                  <button
                    type="button"
                    className={`${styles.csOption} ${isSelected ? styles.csSelected : ''}`}
                    onClick={() => { onChange(opt.value); setOpen(false) }}
                  >
                    <span>{opt.label}</span>
                    {isSelected && <span className={styles.csCheck}><CheckMark /></span>}
                  </button>
                </li>
              )
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  )
}

const typeOptions = [
  { value: 'soukroma', label: 'Soukromá koupelna' },
  { value: 'najemni', label: 'Nájemní byt / více bytů' },
  { value: 'hotel', label: 'Hotel, penzion, wellness' },
  { value: 'jine', label: 'Jiné' },
]

const sizeOptions = [
  { value: 'nevim', label: 'Nevím přesně' },
  { value: 'do5', label: 'Do 5 m²' },
  { value: '5-10', label: '5–10 m²' },
  { value: '10-20', label: '10–20 m²' },
  { value: '20plus', label: 'Více než 20 m²' },
]

export default function Contact() {
  const [status, setStatus] = useState('idle')
  const [form, setForm] = useState({ name: '', phone: '', email: '', type: '', size: '', message: '' })
  const set = k => e => setForm(f => ({ ...f, [k]: e.target.value }))
  const setVal = k => v => setForm(f => ({ ...f, [k]: v }))
  const submit = e => {
    e.preventDefault()
    setStatus('loading')
    setTimeout(() => setStatus('success'), 1400)
  }

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <FadeIn>
            <SectionHeader
              tag="Pojďme se bavit"
              title={`Konzultace zdarma. <em>Bez závazku.</em>`}
              lead="Pošlete nám pár fotek vaší koupelny – na WhatsApp nebo e-mailem. Do 24 hodin dostanete orientační cenu a termín."
            />
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className={styles.infoList}>
              {info.map(({ Icon, label, text, note }) => (
                <div key={label} className={styles.infoItem}>
                  <div className={styles.infoIcon}><Icon /></div>
                  <div>
                    <div className={styles.infoLabel}>{label}</div>
                    <div className={styles.infoText}>{text}</div>
                    {note && <div className={styles.infoNote}>{note}</div>}
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.25}>
            <div className={styles.guarantee}>
              <div className={styles.guaranteeIcon}>
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <path d="M14 3l9 4v7c0 5-4 9-9 11C9 23 5 19 5 14V7l9-4z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
                  <path d="M10 14l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <div className={styles.guaranteeTitle}>10 let záruka na těsnost</div>
                <div className={styles.guaranteeText}>Záruční list vystavujeme ke každé zakázce. Vodotěsnost i přilnavost jsou kryty po celou dobu.</div>
              </div>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.2}>
          <div className={styles.right}>
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div key="success" className={styles.success}
                  initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}>
                  <div className={styles.successCheck}>
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                      <circle cx="20" cy="20" r="19" stroke="#4CAF50" strokeWidth="1.5"/>
                      <path d="M12 20l6 6 10-10" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3>Poptávka odeslána</h3>
                  <p>Ozveme se do 24 hodin s orientační cenou a návrhem termínu. Pokud pošlete fotky na e-mail nebo WhatsApp, bude cena přesnější.</p>
                </motion.div>
              ) : (
                <motion.form key="form" className={styles.form} onSubmit={submit} exit={{ opacity: 0 }}>
                  <div className={styles.formHeader}>
                    <h3 className={styles.formTitle}>Nezávazná poptávka</h3>
                    <p className={styles.formSub}>Vyplňte, co víte. Zbytek vyřešíme společně.</p>
                  </div>
                  <div className={styles.row}>
                    <div className={styles.group}>
                      <label className={styles.label}>Jméno a příjmení</label>
                      <input className={styles.input} type="text" placeholder="Jana Nováková" value={form.name} onChange={set('name')} required />
                    </div>
                    <div className={styles.group}>
                      <label className={styles.label}>Telefon</label>
                      <input className={styles.input} type="tel" placeholder="+420 xxx xxx xxx" value={form.phone} onChange={set('phone')} required />
                    </div>
                  </div>
                  <div className={styles.group}>
                    <label className={styles.label}>E-mail</label>
                    <input className={styles.input} type="email" placeholder="jana@email.cz" value={form.email} onChange={set('email')} required />
                  </div>
                  <div className={styles.row}>
                    <div className={styles.group}>
                      <label className={styles.label}>Typ projektu</label>
                      <CustomSelect
                        value={form.type}
                        onChange={setVal('type')}
                        options={typeOptions}
                        placeholder="Vyberte…"
                      />
                    </div>
                    <div className={styles.group}>
                      <label className={styles.label}>Přibližná plocha</label>
                      <CustomSelect
                        value={form.size}
                        onChange={setVal('size')}
                        options={sizeOptions}
                        placeholder="Nevím přesně"
                      />
                    </div>
                  </div>
                  <div className={styles.group}>
                    <label className={styles.label}>Zpráva (nepovinné)</label>
                    <textarea className={styles.textarea} placeholder="Stav obkladů, představa o barvě, co vás trápí… Fotky pošlete e-mailem nebo na WhatsApp – jsou velkou pomocí." value={form.message} onChange={set('message')} rows={3} />
                  </div>
                  <button type="submit" className={`${styles.submit} ${status === 'loading' ? styles.submitLoading : ''}`} disabled={status === 'loading'}>
                    {status === 'loading' ? 'Odesíláme…' : (
                      <>
                        <span>Odeslat poptávku</span>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                          <path d="M3 9h12M10 4l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </>
                    )}
                  </button>
                  <p className={styles.note}>Bez závazku · Odpovídáme do 24 h · Váš e-mail nesdílíme</p>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
