import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'

export async function POST(req) {
  const body = await req.json()
  console.log('body', body)

  const supabase = createRouteHandlerClient({ cookies })
  const { error } = await supabase.from('card').insert(body)
  console.log('error', error)

  return NextResponse.json({ error })
}
