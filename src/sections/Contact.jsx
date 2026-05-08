import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, Mail, MapPin, Zap, CheckCircle } from 'lucide-react'
import FadeIn from '../components/FadeIn'
import SectionHeader from '../components/SectionHeader'
import styles from './Contact.module.css'

const info = [
  { icon: Phone, label: 'Telefon', text: '+420 XXX XXX XXX', note: 'Po–Pá 8:00–18:00' },
  { icon: Mail, label: 'E-mail', text: 'info@sterkabad.cz', note: null },
  { icon: MapPin, label: 'Oblast působení', text: 'Praha & Středočeský kraj', note: 'Pro větší projekty celá ČR' },
  { icon: Zap, label: 'Odpovídáme rychle', text: 'Orientační cena do 24 hodin', note: 'Stačí pár fotek koupelny' },
]

export default function Contact() {
  const [status, setStatus] = useState('idle') // idle | loading | success
  const [form, setForm] = useState({ name: '', phone: '', email: '', type: '', message: '' })

  const set = k => e => setForm(f => ({ ...f, [k]: e.target.value }))

  const submit = e => {
    e.preventDefault()
    setStatus('loading')
    setTimeout(() => setStatus('success'), 1400)
  }

  return (
    <section id="contact" className={styles.section}>
      <FadeIn>
        <SectionHeader
          tag="Kontakt"
          title="Nezávazná konzultace<br /><em>zcela zdarma</em>"
          lead="Napište nám, přiložte pár fotek vaší koupelny a my vám do 24 hodin napíšeme s odhadem ceny a termínem."
        />
      </FadeIn>

      <div className={styles.grid}>
        <FadeIn delay={0.1}>
          <div className={styles.info}>
            {info.map(({ icon: Icon, label, text, note }) => (
              <div key={label} className={styles.infoItem}>
                <div className={styles.infoIcon}>
                  <Icon size={16} strokeWidth={1.5} />
                </div>
                <div>
                  <div className={styles.infoLabel}>{label}</div>
                  <div className={styles.infoText}>{text}</div>
                  {note && <div className={styles.infoNote}>{note}</div>}
                </div>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <AnimatePresence mode="wait">
            {status === 'success' ? (
              <motion.div
                key="success"
                className={styles.success}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <CheckCircle size={40} strokeWidth={1} className={styles.successIcon} />
                <h3>Poptávka odeslána</h3>
                <p>Ozveme se vám do 24 hodin s orientační cenou a termínem.</p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                className={styles.form}
                onSubmit={submit}
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className={styles.row}>
                  <div className={styles.group}>
                    <label className={styles.label}>Jméno</label>
                    <input
                      className={styles.input}
                      type="text"
                      placeholder="Jana Nováková"
                      value={form.name}
                      onChange={set('name')}
                      required
                    />
                  </div>
                  <div className={styles.group}>
                    <label className={styles.label}>Telefon</label>
                    <input
                      className={styles.input}
                      type="tel"
                      placeholder="+420 xxx xxx xxx"
                      value={form.phone}
                      onChange={set('phone')}
                      required
                    />
                  </div>
                </div>

                <div className={styles.group}>
                  <label className={styles.label}>E-mail</label>
                  <input
                    className={styles.input}
                    type="email"
                    placeholder="jana@email.cz"
                    value={form.email}
                    onChange={set('email')}
                    required
                  />
                </div>

                <div className={styles.group}>
                  <label className={styles.label}>Typ projektu</label>
                  <select className={styles.select} value={form.type} onChange={set('type')}>
                    <option value="">Vyberte typ projektu…</option>
                    <option>Soukromá koupelna</option>
                    <option>Nájemní byt / více bytů</option>
                    <option>Hotel, penzion, wellness</option>
                    <option>Jiné</option>
                  </select>
                </div>

                <div className={styles.group}>
                  <label className={styles.label}>Zpráva (volitelné)</label>
                  <textarea
                    className={styles.textarea}
                    placeholder="Pár slov o vaší koupelně, přibližná velikost, lokace… Fotky pošlete e-mailem."
                    value={form.message}
                    onChange={set('message')}
                    rows={4}
                  />
                </div>

                <button
                  type="submit"
                  className={`${styles.submit} ${status === 'loading' ? styles.submitLoading : ''}`}
                  disabled={status === 'loading'}
                >
                  {status === 'loading' ? 'Odesíláme…' : 'Odeslat poptávku'}
                </button>

                <p className={styles.note}>
                  Bez závazku. Odpovídáme do 24 hodin. Váš e-mail nesdílíme.
                </p>
              </motion.form>
            )}
          </AnimatePresence>
        </FadeIn>
      </div>
    </section>
  )
}
