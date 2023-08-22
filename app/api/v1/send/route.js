import { NextResponse } from 'next/server'

export async function POST(request) {
  console.log('bruh')
  const res = await request.json()
  console.log('res', res)
  return NextResponse.json({ res })
}
