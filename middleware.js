import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'

export async function middleware(req) {
  console.log(req.nextUrl.pathname)

  const res = NextResponse.next()

  return res
}
