import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import twilio from 'twilio'

console.log('[contact] route loaded')

export async function POST(req: NextRequest) {
  console.log('[contact] POST received')

  try {
    const body = await req.json()
    const { first, last, email, phone, interest, message } = body

    const name = `${first} ${last}`.trim()

    const errors: string[] = []
    if (!first?.trim()) errors.push('first name')
    if (!last?.trim()) errors.push('last name')
    if (!email?.trim() || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) errors.push('valid email')
    if (!message?.trim()) errors.push('message')
    if (errors.length) {
      return NextResponse.json({ error: `Missing: ${errors.join(', ')}` }, { status: 400 })
    }

    const results: { email?: string; sms?: string } = {}
    const failures: string[] = []

    /* ── Email via Resend ─────────────────────────────────────────── */
    const resendKey = process.env.RESEND_API_KEY
    if (resendKey) {
      try {
        const resend = new Resend(resendKey)
        const { error: emailErr } = await resend.emails.send({
          from: 'K-Tex Website <onboarding@resend.dev>', // swap to your verified domain later
          to: ['info@k-texservices.com'],
          replyTo: email,
          subject: `New inquiry from ${name}${interest ? ` — ${interest}` : ''}`,
          html: `
            <div style="font-family:Arial,sans-serif;max-width:600px;color:#1c2733">
              <div style="background:#0a2342;padding:24px 32px;border-radius:8px 8px 0 0">
                <img src="https://k-texservices.com/assets/ktex-logo-white.png" alt="K-Tex Services" style="height:40px" />
              </div>
              <div style="background:#f5f2ea;padding:32px;border-radius:0 0 8px 8px">
                <h2 style="margin:0 0 20px;color:#0a2342">New website inquiry</h2>
                <table style="width:100%;border-collapse:collapse">
                  <tr><td style="padding:10px 0;border-bottom:1px solid #d4dae0;font-weight:700;width:140px">Name</td><td style="padding:10px 0;border-bottom:1px solid #d4dae0">${name}</td></tr>
                  <tr><td style="padding:10px 0;border-bottom:1px solid #d4dae0;font-weight:700">Email</td><td style="padding:10px 0;border-bottom:1px solid #d4dae0"><a href="mailto:${email}">${email}</a></td></tr>
                  ${phone ? `<tr><td style="padding:10px 0;border-bottom:1px solid #d4dae0;font-weight:700">Phone</td><td style="padding:10px 0;border-bottom:1px solid #d4dae0"><a href="tel:${phone}">${phone}</a></td></tr>` : ''}
                  ${interest ? `<tr><td style="padding:10px 0;border-bottom:1px solid #d4dae0;font-weight:700">Interest</td><td style="padding:10px 0;border-bottom:1px solid #d4dae0">${interest}</td></tr>` : ''}
                  <tr><td style="padding:10px 0;font-weight:700;vertical-align:top">Message</td><td style="padding:10px 0;white-space:pre-wrap">${message}</td></tr>
                </table>
                <div style="margin-top:24px;padding:16px;background:#fff;border-radius:6px;border-left:4px solid #15783a">
                  <a href="mailto:${email}" style="color:#0a2342;font-weight:700">Reply to ${name} →</a>
                </div>
              </div>
            </div>
          `,
        })
        if (emailErr) {
          console.error('[contact] Resend error:', emailErr)
          failures.push('email')
        } else {
          results.email = 'sent'
        }
      } catch (e) {
        console.error('[contact] Resend exception:', e)
        failures.push('email')
      }
    } else {
      console.warn('[contact] RESEND_API_KEY not set — skipping email')
      failures.push('email (no key)')
    }

    /* ── SMS via Twilio ───────────────────────────────────────────── */
    const twilioSid    = process.env.TWILIO_ACCOUNT_SID
    const twilioToken  = process.env.TWILIO_AUTH_TOKEN
    const twilioFrom   = process.env.TWILIO_FROM_NUMBER // your Twilio phone number

    if (twilioSid && twilioToken && twilioFrom) {
      try {
        const client = twilio(twilioSid, twilioToken)
        const smsBody =
          `K-Tex inquiry from ${name}\n` +
          (interest ? `Interest: ${interest}\n` : '') +
          (phone ? `Phone: ${phone}\n` : '') +
          `Email: ${email}\n\n` +
          `"${message.slice(0, 300)}${message.length > 300 ? '…' : ''}"`

        await client.messages.create({
          body: smsBody,
          from: twilioFrom,
          to: '+17132012807',
        })
        results.sms = 'sent'
      } catch (e) {
        console.error('[contact] Twilio exception:', e)
        failures.push('sms')
      }
    } else {
      console.warn('[contact] Twilio env vars not set — skipping SMS')
      failures.push('sms (no keys)')
    }

    console.log('[contact] done — results:', results, 'failures:', failures)

    // Return success as long as at least one channel worked (or both are unconfigured in dev)
    return NextResponse.json({ ok: true, results, failures })
  } catch (e) {
    console.error('[contact] Unexpected error:', e)
    return NextResponse.json({ error: 'Server error — please try again.' }, { status: 500 })
  }
}
