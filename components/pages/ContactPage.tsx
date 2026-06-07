'use client'
import { useState, useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { Section } from '../ui/Section'
import { Eyebrow } from '../ui/Eyebrow'
import { Button } from '../ui/Button'
import { Icon } from '../ui/Icon'
import { RevealSide } from '../animations/RevealSide'

interface FormState {
  first: string; last: string; email: string; phone: string; interest: string; message: string
}

const INTERESTS = ['Buying a home', 'Selling / valuation', 'Building a home', 'Design only', 'Investment / development']

const CONTACT_ITEMS = [
  { icon: 'phone', label: 'Call',    value: '(713) 201-2807',         href: 'tel:7132012807' },
  { icon: 'mail',  label: 'Email',   value: 'info@k-texservices.com', href: 'mailto:info@k-texservices.com' },
  { icon: 'pin',   label: 'Mail To', value: '4008 Louetta Rd. #107, Spring, TX 77388', href: null },
]

function Field({
  label, name, placeholder, wide, type, value, onChange, error,
}: {
  label: string; name: string; placeholder: string; wide?: boolean; type?: string
  value: string; onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void; error?: string
}) {
  const baseStyle: React.CSSProperties = {
    fontFamily: 'inherit', fontSize: 16, color: 'var(--ink)', borderRadius: 8,
    border: `1px solid ${error ? 'var(--critical)' : 'var(--hairline)'}`,
    padding: '0 14px', outline: 'none', transition: 'border-color .15s ease',
    width: '100%', background: '#fff', boxSizing: 'border-box',
  }
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 7, gridColumn: wide ? '1 / -1' : 'auto' }}>
      <label style={{ fontWeight: 700, fontSize: 14, color: 'var(--charcoal)' }}>{label}</label>
      {type === 'area' ? (
        <textarea
          name={name} value={value} onChange={onChange} placeholder={placeholder} rows={4}
          onFocus={e => (e.target.style.borderColor = 'var(--navy-soft)')}
          onBlur={e => (e.target.style.borderColor = error ? 'var(--critical)' : 'var(--hairline)')}
          style={{ ...baseStyle, padding: '12px 14px', resize: 'vertical' }}
        />
      ) : (
        <input
          name={name} value={value} onChange={onChange} placeholder={placeholder} type={type || 'text'}
          onFocus={e => (e.target.style.borderColor = 'var(--navy-soft)')}
          onBlur={e => (e.target.style.borderColor = error ? 'var(--critical)' : 'var(--hairline)')}
          style={{ ...baseStyle, height: 48 }}
        />
      )}
      {error && <span style={{ fontSize: 12, color: 'var(--critical)' }}>{error}</span>}
    </div>
  )
}

function SuccessState({ name, email, onReset }: { name: string; email: string; onReset: () => void }) {
  const ref = useRef<HTMLDivElement>(null)
  useGSAP(() => {
    const el = ref.current
    if (!el) return
    gsap.fromTo(el, { scale: 0.95, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.5, ease: 'back.out(1.4)' })
  }, { scope: ref })
  return (
    <div ref={ref} style={{ background: 'var(--success-bg)', border: '1px solid var(--success)', borderRadius: 'var(--r-2xl)', padding: '32px 30px' }}>
      <div style={{ display: 'flex', gap: 16, alignItems: 'center', marginBottom: 12 }}>
        <Icon name="checkc" size={36} color="var(--success)" />
        <div style={{ fontWeight: 700, fontSize: 24, color: 'var(--ink-deep)' }}>Thanks — we&apos;ve got it, {name}.</div>
      </div>
      <p style={{ fontSize: 16, color: 'var(--slate)', marginBottom: 20 }}>
        A K-Tex advisor will reach out within one business day at {email}. In the meantime, take a look at our recent work.
      </p>
      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
        <a href="/portfolio"><Button kind="green" icon="arrow">View portfolio</Button></a>
        <Button kind="ghost" onClick={onReset}>Send another</Button>
      </div>
    </div>
  )
}

export function ContactPage() {
  const [form, setForm] = useState<FormState>({ first: '', last: '', email: '', phone: '', interest: '', message: '' })
  const [errors, setErrors] = useState<Partial<FormState>>({})
  const [submitting, setSubmitting] = useState(false)
  const [sent, setSent] = useState(false)
  const [serverError, setServerError] = useState('')

  const set = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const validate = () => {
    const err: Partial<FormState> = {}
    if (!form.first.trim()) err.first = 'Required'
    if (!form.last.trim()) err.last = 'Required'
    if (!form.email.trim()) err.email = 'Required'
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) err.email = 'Enter a valid email'
    if (!form.message.trim()) err.message = 'Tell us a little about your project'
    return err
  }

  const submit = async () => {
    setServerError('')
    const err = validate()
    setErrors(err)
    if (Object.keys(err).length > 0) return

    setSubmitting(true)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (!res.ok) {
        setServerError(data.error || 'Something went wrong. Please try again.')
      } else {
        setSent(true)
      }
    } catch {
      setServerError('Network error — please check your connection and try again.')
    } finally {
      setSubmitting(false)
    }
  }

  const reset = () => {
    setSent(false)
    setServerError('')
    setForm({ first: '', last: '', email: '', phone: '', interest: '', message: '' })
  }

  return (
    <div>
      <Section style={{ paddingTop: 52, paddingBottom: 80 }}>
        <div
          style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 56, alignItems: 'start' }}
          className="contact-grid"
        >
          {/* Left — form */}
          <RevealSide from="left">
            <div>
              <Eyebrow>Get in touch</Eyebrow>
              <h1 style={{ fontWeight: 700, fontSize: 52, lineHeight: 1.08, letterSpacing: '-1px', color: 'var(--ink-deep)', margin: '14px 0 14px' }}>
                Let&apos;s talk about your property.
              </h1>
              <p style={{ fontWeight: 400, fontSize: 18, color: 'var(--slate)', marginBottom: 32, maxWidth: 480 }}>
                Buying, selling, building, or just exploring what your lot could become — tell us a little and we&apos;ll be in touch within one business day.
              </p>

              {sent ? (
                <SuccessState name={form.first} email={form.email} onReset={reset} />
              ) : (
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18 }}>
                  <Field label="First name" name="first" placeholder="Jordan" value={form.first} onChange={set} error={errors.first} />
                  <Field label="Last name"  name="last"  placeholder="Avery"  value={form.last}  onChange={set} error={errors.last} />
                  <Field label="Email" name="email" type="email" placeholder="jordan@email.com" value={form.email} onChange={set} error={errors.email} />
                  <Field label="Phone" name="phone" type="tel"   placeholder="(713) 555-0000"   value={form.phone} onChange={set} />

                  {/* Interest chips */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 9, gridColumn: '1 / -1' }}>
                    <label style={{ fontWeight: 700, fontSize: 14, color: 'var(--charcoal)' }}>I&apos;m interested in</label>
                    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                      {INTERESTS.map(opt => (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => setForm(f => ({ ...f, interest: opt }))}
                          style={{
                            fontFamily: 'inherit', fontWeight: 700, fontSize: 14,
                            padding: '9px 16px', borderRadius: 'var(--r-full)', cursor: 'pointer',
                            border: `2px solid ${form.interest === opt ? 'var(--green)' : 'var(--hairline)'}`,
                            background: form.interest === opt ? 'var(--green-tint)' : '#fff',
                            color: form.interest === opt ? 'var(--green-deep)' : 'var(--ink)',
                            transition: 'all .12s ease',
                          }}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>

                  <Field wide label="What can we help with?" name="message"
                    placeholder="Tell us about your property, lot, or project…"
                    type="area" value={form.message} onChange={set} error={errors.message} />

                  {/* Server-side error */}
                  {serverError && (
                    <div style={{
                      gridColumn: '1 / -1', padding: '13px 16px',
                      background: 'var(--critical-bg)', border: '1px solid var(--critical)',
                      borderRadius: 8, fontSize: 14, color: 'var(--critical)',
                    }}>
                      {serverError}
                    </div>
                  )}

                  <div style={{ gridColumn: '1 / -1', marginTop: 4 }}>
                    <Button
                      kind="green" size="lg" icon={submitting ? undefined : 'arrow'}
                      onClick={submit} disabled={submitting}
                    >
                      {submitting ? 'Sending…' : 'Send request'}
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </RevealSide>

          {/* Right — contact details */}
          <RevealSide from="right">
            <div style={{ background: 'var(--surface-warm)', borderRadius: 'var(--r-3xl)', padding: 32 }}>
              <div style={{ fontWeight: 700, fontSize: 24, color: 'var(--ink-deep)', letterSpacing: '-0.2px', marginBottom: 8 }}>
                Talk to us directly
              </div>
              <p style={{ fontSize: 14, color: 'var(--slate)', marginBottom: 14 }}>Serving Houston, TX and surrounding areas.</p>
              {CONTACT_ITEMS.map(({ icon, label, value, href }) => (
                <div key={label} style={{ display: 'flex', gap: 14, alignItems: 'center', padding: '15px 0', borderBottom: '1px solid rgba(10,35,66,.08)' }}>
                  <div style={{ width: 46, height: 46, borderRadius: 12, background: '#fff', color: 'var(--navy)', display: 'grid', placeItems: 'center', flexShrink: 0 }}>
                    <Icon name={icon} size={20} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 12, color: 'var(--steel)', letterSpacing: '.6px', textTransform: 'uppercase' }}>{label}</div>
                    {href
                      ? <a href={href} style={{ fontWeight: 700, fontSize: 16, color: 'var(--ink-deep)', textDecoration: 'none' }}>{value}</a>
                      : <div style={{ fontWeight: 700, fontSize: 16, color: 'var(--ink-deep)' }}>{value}</div>
                    }
                  </div>
                </div>
              ))}
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 18, fontSize: 14, color: 'var(--slate)' }}>
                <Icon name="clock" size={16} color="var(--green)" /> Mon–Fri · 8am–6pm CT
              </div>
            </div>
          </RevealSide>
        </div>
      </Section>

      <style>{`@media (max-width: 900px) { .contact-grid { grid-template-columns: 1fr !important; } }`}</style>
    </div>
  )
}
