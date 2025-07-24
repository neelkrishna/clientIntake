'use client'

import { useState } from 'react'
import { supabase } from '@/utils/supabaseClient'
import { useRouter } from 'next/navigation'

export default function Login() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)

  const handleEmailLogin = async () => {
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) {
      setError(error.message)
    } else {
      router.push('/')
    }
  }

  const handleGoogleLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({ provider: 'google' })
    if (error) {
      setError(error.message)
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 space-y-4">
      <div className="flex flex-col space-y-2">
        <input
          className="border px-2 py-1"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="border px-2 py-1"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleEmailLogin} className="bg-blue-500 text-white p-2 rounded">
          Log in with Email
        </button>
        <button onClick={handleGoogleLogin} className="bg-red-500 text-white p-2 rounded">
          Continue with Google
        </button>
        {error && <p className="text-red-600">{error}</p>}
      </div>
    </main>
  )
}
