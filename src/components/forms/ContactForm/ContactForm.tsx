// src/components/ContactForm/ContactForm.tsx

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
    })

    const [errors, setErrors] = useState<{ [K in keyof typeof formData]?: string }>({})

    const validateField = (name: keyof typeof formData, value: string) => {
        switch (name) {
            case 'name':
                return value.trim() ? '' : 'Name is required'
            case 'email':
                if (!value.trim()) return 'Email is required'
                if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Invalid email address'
                return ''
            case 'phone':
                if (value && !/^[\d\s\-()]+$/.test(value)) return 'Phone number can only contain numbers and basic symbols'
                return ''
            case 'message':
                return value.trim() ? '' : 'Message is required'
        }
    }

    const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const fieldName = e.target.name.toLowerCase() as keyof typeof formData
        const fieldError = validateField(fieldName, formData[fieldName])
        setErrors({ ...errors, [fieldName]: fieldError })
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const newErrors: { [K in keyof typeof formData]?: string } = {};
        
        (Object.keys(formData) as (keyof typeof formData)[]).forEach((key) => {
            const error = validateField(key, formData[key])
            if (error) newErrors[key] = error
        })

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors)
            return
        }

        console.log('Form submitted:', formData)
        // TODO: send data to API
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const fieldName = e.target.name.toLowerCase() as keyof typeof formData
        setFormData({ ...formData, [fieldName]: e.target.value })
        setErrors({ ...errors, [fieldName]: '' })
    }

    return (
        <form
            className={clsx(styles.contactForm, "form")}
            onSubmit={handleSubmit}
            noValidate
        >
            <div className="field-container">
                <div className="field field-name">
                    <label className="field-label" htmlFor="field_0">Name <span className="required-label">*</span></label>
                    <input
                        id="field_0"
                        type="text"
                        name="Name"
                        className="field-input"
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
                        className="field-input"
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
                        className="field-input"
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
                        className="field-input"
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
