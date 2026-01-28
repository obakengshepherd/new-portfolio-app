# Web3Forms Setup Guide

## Quick Start - Get Your API Key

### Step 1: Sign Up for Web3Forms

1. Visit https://web3forms.com
2. Click "Sign Up" or "Get Started"
3. Enter your email and create a password
4. Verify your email address

### Step 2: Get Your API Key

1. After logging in, go to your dashboard
2. Look for "API Key" or "Access Key" section
3. Copy your unique API key (looks like a long string)

### Step 3: Add to Your Project

1. Open `.env.local` in your project root
2. Replace `YOUR_WEB3FORMS_API_KEY_HERE` with your actual key
3. Example:
   ```env
   NEXT_PUBLIC_WEB3FORMS_KEY=abc123def456ghi789jkl012mno345
   ```

### Step 4: Configure Recipient Email

1. In Web3Forms dashboard, set the recipient email
2. Current recipient: `obakengtsaagane@gmail.com`
3. Or modify in `/src/components/contact/ContactForm.tsx` line with `to_email`

### Step 5: Test the Form

1. Save your changes
2. Run `npm run dev`
3. Navigate to `/contact` page
4. Fill out the form and click "Send Message"
5. Check your email for the message

## Email Field in Contact Form

The email field in the contact form is automatically sent to:

```
obakengtsaagane@gmail.com
```

To change this:

1. Open `/src/components/contact/ContactForm.tsx`
2. Find the line: `to_email: "obakengtsaagane@gmail.com",`
3. Replace with your email address

## Troubleshooting

### "Form submission failed"

- Check that `NEXT_PUBLIC_WEB3FORMS_KEY` is set correctly
- Verify the key is copied completely (no extra spaces)
- Restart the dev server after updating `.env.local`

### "Message sent but didn't receive email"

- Verify the email address in the form is correct
- Check spam/junk folder
- Ensure Web3Forms account is active
- Test sending a simple form on web3forms.com

### API Key Not Loading

- Make sure `.env.local` file exists (not `.env`)
- Key must start with `NEXT_PUBLIC_` to be accessible in browser
- Restart dev server: `npm run dev`

## Security Notes

⚠️ **Important**:

- `NEXT_PUBLIC_` variables are exposed to the browser (this is intentional for Web3Forms)
- Never put sensitive secrets in `NEXT_PUBLIC_` variables
- Your API key is safe with Web3Forms (they handle validation server-side)

## Monitoring Submissions

Visit your Web3Forms dashboard to:

- View all submitted forms
- See submission timestamps
- Access form data
- Export submissions
- Set up email notifications

## Additional Resources

- Web3Forms Documentation: https://web3forms.com/docs
- Next.js Environment Variables: https://nextjs.org/docs/app/building-your-application/configuring/environment-variables
- API Reference: https://web3forms.com/api
