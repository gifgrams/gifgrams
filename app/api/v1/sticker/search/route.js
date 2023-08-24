import { NextResponse } from 'next/server'

export async function GET(req) {
  const { searchParams } = new URL(req.url)
  const query = searchParams.get('query')

  try {
    const res = await fetch(
      `https://tenor.googleapis.com/v2/search?q=${query}&searchfilter=sticker&key=${process.env.TENOR_API_KEY}&client_key=my_test_app&limit=48`,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
    const data = await res.json()
    return NextResponse.json({ data })
  } catch (error) {
    console.error('error', error)
    return NextResponse.json(
      { message: 'Error fetching from Tenor' },
      { status: 500 }
    )
  }
}
