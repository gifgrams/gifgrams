import { NextResponse } from 'next/server'
import sgMail from '@sendgrid/mail'

export async function POST(req) {
  const body = await req.json()

  return NextResponse.json()
}
