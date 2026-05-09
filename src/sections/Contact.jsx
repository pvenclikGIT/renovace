import { useState } from 'react'
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

export default function Contact() {
  const [status, setStatus] = useState('idle')
  const [form, setForm] = useState({ name: '', phone: '', email: '', type: '', size: '', message: '' })
  const set = k => e => setForm(f => ({ ...f, [k]: e.target.value }))
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
                      <select className={styles.select} value={form.type} onChange={set('type')}>
                        <option value="">Vyberte…</option>
                        <option>Soukromá koupelna</option>
                        <option>Nájemní byt / více bytů</option>
                        <option>Hotel, penzion, wellness</option>
                        <option>Jiné</option>
                      </select>
                    </div>
                    <div className={styles.group}>
                      <label className={styles.label}>Přibližná plocha</label>
                      <select className={styles.select} value={form.size} onChange={set('size')}>
                        <option value="">Nevím přesně</option>
                        <option>Do 5 m²</option>
                        <option>5–10 m²</option>
                        <option>10–20 m²</option>
                        <option>Více než 20 m²</option>
                      </select>
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
