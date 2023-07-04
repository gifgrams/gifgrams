// import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'

// const UNPROTECTED_ROUTES = ['/', '/:cardId', '/login', '/new-card']
// const PROTECTED_ROUTES = ['/account']

export async function middleware(req) {
  //   console.log(req.nextUrl.pathname)

  const res = NextResponse.next()
  //   const supabase = createMiddlewareClient({ req, res })

  //   const {
  //     data: { user },
  //   } = await supabase.auth.getUser()

  //   // if (
  //   //   [...UNPROTECTED_ROUTES, ...PROTECTED_ROUTES].includes(req.nextUrl.pathname)
  //   // )
  //   if (user && ['/signin', '/signup'].includes(req.nextUrl.pathname)) {
  //     // if user is signed in and the current path is login, then redirect to home
  //     // console.log('user already logged in!')
  //     return NextResponse.redirect(new URL('/', req.url))
  //   }

  //   // if user is not signed in and the current path is not / redirect the user to /
  //   if (!user && PROTECTED_ROUTES.includes(req.nextUrl.pathname)) {
  //     // console.log('user not found!')
  //     return NextResponse.redirect(new URL('/signup', req.url))
  //   }

  return res
}
