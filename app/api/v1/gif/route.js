import { NextResponse } from 'next/server'

export async function GET(request) {
  const res = await fetch(
    `https://tenor.googleapis.com/v2/search?q=excited&key=${process.env.TENOR_API_KEY}&client_key=my_test_app&limit=50`,
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  )
  const data = await res.json()

  return NextResponse.json({ data })
}
