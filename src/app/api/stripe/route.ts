import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'

const stripeSecret = process.env.STRIPE_SECRET_KEY as string

const stripe = new Stripe(stripeSecret, {
  apiVersion: '2023-10-16'
})

export async function POST(req: NextRequest) {
  const { priceId } = await req.json()

  try {
    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      payment_method_types: ['card'],
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: `${req.nextUrl.origin}/?success=true`,
      cancel_url: `${req.nextUrl.origin}/?canceled=true`
    })

    return NextResponse.json({ sessionId: session.id })
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}
