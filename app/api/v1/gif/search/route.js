import { NextResponse } from 'next/server'

export async function GET(request) {
  const { searchParams } = new URL(request.url)
  const query = searchParams.get('query')

  const res = await fetch(
    `https://tenor.googleapis.com/v2/search?q=${query}&key=${process.env.TENOR_API_KEY}&client_key=my_test_app&limit=48`,
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  )
  const data = await res.json()
  // const filteredData = data.results.map(())

  return NextResponse.json({ data })
}
