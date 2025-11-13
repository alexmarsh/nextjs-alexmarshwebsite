// src/app/api/contact/route.ts

import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
    try {
        const data = await req.json()
        const { name, email, phone, message } = data

        if (!name || !email || !message) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
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
