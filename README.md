 3.1 User Signup & Auth
	•	Email/password login (Auth0, Supabase Auth, or Firebase Auth)
	•	Optional: Google OAuth
	•	Basic onboarding screen after signup

✅ 3.2 Intake Form Builder
	•	User creates a new form with:
	•	Title
	•	Description
	•	Set of questions (text, long text, multiple choice)
	•	Allow rearranging questions
	•	Optional fields: required toggle, section dividers

Tech: React + shadcn/ui or Tailwind UI for components
Data storage: Supabase / Firebase

✅ 3.3 Public Form Link
	•	Each form generates a public, client-facing link (e.g., yourapp.com/form/abc123)
	•	Mobile-friendly UI
	•	Branded with user’s name/logo if provided

✅ 3.4 Response Submission
	•	Client fills out the form
	•	Data is securely stored
	•	Show a friendly confirmation screen

✅ 3.5 AI-Powered Summary Generator
	•	Use OpenAI GPT-4 (or 3.5-turbo for cost) to:
	•	Summarize key takeaways from intake responses
	•	Identify red flags or special needs
	•	Provide a suggested action plan (optional)

Tech: Serverless function (e.g., Vercel Edge Functions) calls OpenAI
Prompting: Customize by profession (“Act like a licensed therapist…”)
Token management: Cap usage to 1–2 summaries per form to control cost

✅ 3.6 User Dashboard
	•	Show list of forms and submitted responses
	•	Each response has:
	•	Raw input
	•	AI summary
	•	Export (PDF or copy to clipboard)

✅ 3.7 Email Notifications
	•	Notify user when a new response is submitted
	•	Optional: Send user AI summary in email
