import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'

const UNPROTECTED_ROUTES = []
const DEVELOPMENT_ROUTES = ['/api/v1/respond/message', '/api/v1/respond/emoji']

export async function middleware(req) {
  const res = NextResponse.next()
  const supabase = createMiddlewareClient({ req, res })

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (req.nextUrl.pathname.startsWith('/api/v1')) {
    if (
      !user &&
      !UNPROTECTED_ROUTES.includes(req.nextUrl.pathname) &&
      !DEVELOPMENT_ROUTES.includes(req.nextUrl.pathname)
    ) {
      console.log('Forbidden', req.nextUrl.pathname)
      return NextResponse.json({ message: 'Forbidden' }, { status: 403 })
    }
  }

  return res
}
