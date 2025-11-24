// src/components/forms/ContactForm/ContactForm.tsx

'use client'

import { useState } from 'react'
import styles from './ContactForm.module.scss'
import clsx from 'clsx'

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
        website: '', // honeypot
    })

    const [errors, setErrors] = useState<{ [K in keyof typeof formData]?: string }>({})
    const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')
    const [serverError, setServerError] = useState<string | null>(null)

    const validateField = (name: keyof typeof formData, value: string) => {
        if (name === 'website') return '' // skip honeypot

        const trimmed = value.trim()

        switch (name) {
            case 'name':
                if (!trimmed) return 'Name is required'
                if (trimmed.length > 200) return 'Name must be under 200 characters'
                return ''

            case 'email':
                if (!trimmed) return 'Email is required'
                if (trimmed.length > 200) return 'Email must be under 200 characters'
                if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) return 'Invalid email address'
                return ''

            case 'phone':
                if (trimmed.length > 50) return 'Phone number must be under 50 characters'
                if (trimmed && !/^[\d\s()\-]+$/.test(trimmed))
                    return 'Phone number can only contain numbers and basic symbols'
                return ''

            case 'message':
                if (!trimmed) return 'Message is required'
                if (trimmed.length > 5000) return 'Message must be under 5000 characters'
                return ''
        }
    }


    const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const fieldName = e.target.name.toLowerCase() as keyof typeof formData
        const fieldError = validateField(fieldName, formData[fieldName])
        setErrors({ ...errors, [fieldName]: fieldError })
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const fieldName = e.target.name.toLowerCase() as keyof typeof formData
        setFormData({ ...formData, [fieldName]: e.target.value })
        setErrors({ ...errors, [fieldName]: '' })
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setServerError(null)

        // if honeypot is filled, treat as spam
        if (formData.website.trim() !== '') {
            setStatus('success') // pretend success to bots
            return
        }

        const newErrors: { [K in keyof typeof formData]?: string } = {};

        (Object.keys(formData) as (keyof typeof formData)[]).forEach((key) => {
            const error = validateField(key, formData[key])
            if (error) newErrors[key] = error
        })

        // remove honeypot from user-visible validation
        delete newErrors.website

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors)
            return
        }

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            })

            const result = await res.json()
            if (res.ok) {
                setStatus('success')
                setFormData({ name: '', email: '', phone: '', message: '', website: '' })
            } else {
                setServerError(result.error || 'Failed to send message')
                setStatus('error')
            }
        } catch (err) {
            console.error(err)
            setServerError('An unexpected error occurred')
            setStatus('error')
        }
    }

    if (status === 'success') {
        return <p className={styles.successMessage}>Thanks! Your message has been sent.</p>
    }

    return (
        <form
            className={clsx(styles.contactForm, "form")}
            onSubmit={handleSubmit}
            noValidate
        >
            {/* Honeypot: visually hidden but present in DOM */}
            <div style={{ display: 'none' }}>
                <label htmlFor="website">Website</label>
                <input
                    id="website"
                    type="text"
                    name="Website"
                    tabIndex={-1}
                    autoComplete="off"
                    value={formData.website}
                    onChange={handleChange}
                />
            </div>

            {status === 'error' && serverError && (
                <p className={styles.errorMessage}>{serverError}</p>
            )}

            <div className="field-container">
                <div className="field field-name">
                    <label className="field-label" htmlFor="field_0">Name <span className="required-label">*</span></label>
                    <input
                        id="field_0"
                        type="text"
                        name="Name"
                        className={clsx("field-input", { "field-input-error": errors.name })}
                        placeholder="Name (required)"
                        autoComplete="on"
                        required
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={formData.name}
                    />
                    {errors.name && <p className="field-error">{errors.name}</p>}
                </div>
                <div className="field field-email">
                    <label className="field-label" htmlFor="field_1">Email Address <span className="required-label">*</span></label>
                    <input
                        id="field_1"
                        type="email"
                        name="Email"
                        className={clsx("field-input", { "field-input-error": errors.email })}
                        placeholder="Email (required)"
                        autoComplete="on"
                        required
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={formData.email}
                    />
                    {errors.email && <p className="field-error">{errors.email}</p>}
                </div>
                <div className="field field-text">
                    <label className="field-label" htmlFor="field_2">Phone Number</label>
                    <input
                        id="field_2"
                        type="text"
                        name="Phone"
                        className={clsx("field-input", { "field-input-error": errors.phone })}
                        placeholder="Phone"
                        autoComplete="on"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={formData.phone}
                    />
                    {errors.phone && <p className="field-error">{errors.phone}</p>}
                </div>
                <div className="field field-textarea">
                    <label className="field-label" htmlFor="field_3">Message <span className="required-label">*</span></label>
                    <textarea
                        id="field_3"
                        name="Message"
                        className={clsx("field-input", { "field-input-error": errors.message })}
                        placeholder="Message (required)"
                        required
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={formData.message}
                    ></textarea>
                    {errors.message && <p className="field-error">{errors.message}</p>}
                </div>
            </div>
            <div className="submit-container">
                <button type="submit" className="button">Send Message</button>
            </div>
        </form>
    )
}
