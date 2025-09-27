# EmailJS Setup Guide

This guide will help you set up EmailJS for your contact form.

## Step 1: Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Create Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. Note down your **Service ID**

## Step 3: Create Email Template

1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template structure:

```
Subject: New Contact Form Message - {{subject}}

From: {{from_name}} ({{from_email}})
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

4. Note down your **Template ID**

## Step 4: Get Public Key

1. Go to "Account" in your dashboard
2. Find your **Public Key** in the API Keys section

## Step 5: Update Configuration

1. Open `src/lib/emailjs.ts`
2. Replace the placeholder values:

```typescript
const EMAILJS_SERVICE_ID = 'your_service_id_here';
const EMAILJS_TEMPLATE_ID = 'your_template_id_here';
const EMAILJS_PUBLIC_KEY = 'your_public_key_here';
```

## Step 6: Test the Form

1. Start your development server: `npm run dev`
2. Go to the contact section
3. Fill out and submit the form
4. Check your email for the message

## Features Included

- ✅ Real email sending via EmailJS
- ✅ Form validation (all fields required)
- ✅ Loading states with spinner
- ✅ Success message with green checkmark
- ✅ Error handling with retry option
- ✅ Auto-reset form after successful submission
- ✅ Responsive design

## Troubleshooting

- **Email not received**: Check spam folder
- **Form not submitting**: Verify EmailJS credentials
- **Template errors**: Ensure template variables match the code
- **CORS issues**: Make sure your domain is added to EmailJS allowed origins

## Security Notes

- Never commit your EmailJS credentials to version control
- Consider using environment variables for production
- EmailJS public key is safe to use in frontend code
