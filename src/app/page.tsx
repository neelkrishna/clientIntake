'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/utils/supabaseClient'
import Link from 'next/link'

export default function Home() {
  const [userEmail, setUserEmail] = useState<string | null>(null)

  useEffect(() => {
    const { data: { session } } = supabase.auth.getSession()
    session.then(res => {
      setUserEmail(res.session?.user.email ?? null)
    })
  }, [])

  const handleLogout = async () => {
    await supabase.auth.signOut()
    setUserEmail(null)
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4">
      {userEmail ? (
        <div className="space-y-4 text-center">
          <p className="text-lg">Logged in as {userEmail}</p>
          <button onClick={handleLogout} className="px-4 py-2 bg-red-500 text-white rounded">Logout</button>
        </div>
      ) : (
        <Link href="/login" className="px-4 py-2 bg-blue-500 text-white rounded">Login</Link>
      )}
    </main>
  )
}
