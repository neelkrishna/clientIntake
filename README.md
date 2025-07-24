## ✅ Core Features (MVP)

### 1. User Signup & Authentication
- Email/password signup and login
- Optional Google OAuth
- Basic onboarding screen after signup

### 2. Intake Form Builder
- Create a new form with:
  - Title
  - Description
  - Custom questions (text, long text, multiple choice)
- Features:
  - Rearranging questions
  - Required field toggle
  - Section dividers

> **Tech Stack:** React + shadcn/ui or Tailwind UI  
> **Data Storage:** Supabase or Firebase

### 3. Public Form Link
- Each form generates a unique public link (e.g., `yourapp.com/form/abc123`)
- Mobile-friendly UI
- Branded with user’s name/logo (if provided)

### 4. Response Submission
- Clients submit responses through the public form
- Data is securely stored
- Friendly confirmation screen shown to client

### 5. AI-Powered Summary Generator
- Uses OpenAI (e.g., GPT-4 or GPT-3.5-turbo) to:
  - Summarize key intake points
  - Flag important notes or red flags
  - Optionally suggest next steps
- Prompt customization based on profession

> **Implementation:**  
> - Serverless function (e.g., Vercel Edge Functions)  
> - Token usage limits to manage cost

### 6. User Dashboard
- View list of forms and all submitted responses
- For each response:
  - Raw intake data
  - AI-generated summary
  - Export option (PDF or copy to clipboard)

### 7. Email Notifications
- Email alert when a new client submits a form
- Optional: include the AI summary in the email

## Setup

Install dependencies (requires Node.js and npm):

```bash
npm install
```

Create an `.env` file based on `.env.example` and add your Supabase and Stripe keys.

Run the development server:

```bash
npm run dev
```
