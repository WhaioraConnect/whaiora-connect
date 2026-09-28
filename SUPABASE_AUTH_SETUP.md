# Fix Supabase 500 Error on Auth Callback

## Problem
When redirecting to `/auth/callback`, Supabase returns a 500 error.

## Solution
You need to configure the redirect URL in your Supabase project settings:

### Steps:
1. Go to your Supabase Dashboard: https://app.supabase.com
2. Select your project
3. Navigate to **Authentication** → **URL Configuration**
4. Under **Redirect URLs**, add these entries:
   - `http://localhost:5173/auth/callback` (for local development)
   - `https://whaioraconnect.nz/auth/callback` (for production)
   - `https://whaiora-connect.pages.dev/auth/callback` (if using Pages)

5. Click **Save**

## Local Development Setup
1. Create `.env.local` (copy from `.env.example`)
2. Fill in:
   ```
   VITE_SUPABASE_URL=https://YOUR_PROJECT_ID.supabase.co
   VITE_SUPABASE_ANON_KEY=YOUR_SUPABASE_ANON_PUBLIC_KEY
   EMAIL_RELAY_URL=https://YOUR-SMTP-RELAY.example.com/send
   EMAIL_RELAY_TOKEN=YOUR_RELAY_TOKEN
   ```
3. Don't commit `.env.local` to git

## iCloud email relay

Supabase Edge Functions cannot open an SMTP connection directly. Deploy a small
SMTP-capable backend and configure it with:

```text
SMTP_HOST=smtp.mail.me.com
SMTP_PORT=587
SMTP_USER=your-icloud-address@icloud.com
SMTP_PASSWORD=your-icloud-app-specific-password
SMTP_FROM=your-icloud-address@icloud.com
```

Set the backend endpoint as `EMAIL_RELAY_URL` and its shared bearer secret as
`EMAIL_RELAY_TOKEN` in Supabase secrets. Use an iCloud app-specific password,
not the normal Apple ID password.

## Favicon Fix
✅ Fixed: Added `favicon.svg` to public directory and linked it in `index.html`

## AuthCallback Component
✅ Enhanced: Now handles errors gracefully with retry logic
