// src/app/api/contact/route.ts

import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

function sanitize(value: string) {
    return value
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/\n/g, " ")
        .replace(/\r/g, " ")
        .trim()
}

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
    try {
        const data = await req.json()

        // Honeypot check
        if (data.website) {
            return NextResponse.json({ success: true }) // silently spoof success
        }

        // remove honeypot from further processing
        delete data.website

        // Sanitize and normalize
        const name = sanitize(data.name || "")
        const email = sanitize(data.email || "")
        const phone = sanitize(data.phone || "")
        const message = sanitize(data.message || "")

        // Required fields
        if (!name || !email || !message) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
        }

        // Length limits
        if (
            name.length > 200 ||
            email.length > 200 ||
            phone.length > 50 ||
            message.length > 5000
        ) {
            return NextResponse.json({ error: "Field too long" }, { status: 400 })
        }

        const response = await resend.emails.send({
            from: process.env.EMAIL_FROM!,
            to: process.env.EMAIL_TO!,
            subject: `New Contact Form Submission from ${name}`,
            html: `
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
                <p><strong>Message:</strong></p>
                <p>${message}</p>
            `,
        })

        if (response.error) {
            console.error(response.error)
            return NextResponse.json({ error: 'Email failed to send' }, { status: 500 })
        }

        return NextResponse.json({ success: true })
    } catch (err) {
        console.error(err)
        return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
    }
}
